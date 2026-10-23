"""Genera datos de lectura conservando literalmente los árboles MathML de v3.

Ejecutar desde la raíz: python3 scripts/import_academic.py
No ejecuta scripts ni interpreta instrucciones del documento fuente.
"""
from pathlib import Path
from html import escape
from collections import Counter
import hashlib
import json
import re
from source_html import Document

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'materials/Integrales-completo-revisado-v3.html'
source = SOURCE.read_text(encoding='utf-8')
doc = Document(source)

def section(id):
    return doc.by_id(id).parent

def is_return(node):
    return 'href="#indice"' in node.raw(source)

def transform(html, context, heading_level=None):
    # Cambiar solo envoltorios HTML. El contenido <math> permanece byte a byte.
    if re.search(r'<script\b|\son\w+\s*=|javascript:', html, re.I):
        raise ValueError('Contenido activo no permitido en la importación')
    if heading_level:
        html = re.sub(r'<(/?)h[2-6]\b', lambda m: '<'+m[1]+'h'+str(heading_level), html)
    # Los destinos de la aplicación se asignan al renderizar cada apartado.
    # No conservar IDs de encabezados locales que parezcan rutas del catálogo.
    html = re.sub(r'(<h[2-6])[^>]*>', r'\1>', html)
    index = 0
    def region(match):
        nonlocal index
        index += 1
        label = escape(f'Expresión matemática. {context}. {index}', quote=True)
        return f'<div class="math-region" tabindex="0" role="region" aria-label="{label}">'
    return re.sub(r'<div class="formula">', region, html)

def material(id):
    sec = section(id)
    nodes = sec.children
    heading = nodes[0]
    analysis = next(n for n in nodes if n.attrs.get('class') == 'analisis')
    steps_node = next(n for n in nodes if n.tag == 'ol' and n.attrs.get('class') == 'pasos')
    title = heading.text(source)
    before = [n for n in nodes[1:nodes.index(analysis)] if not is_return(n)]
    revision = [n for n in before if 'Nota de revisión:' in n.text(source)]
    before = [n for n in before if n not in revision]
    steps = []
    for li in steps_node.children:
        if li.tag != 'li': continue
        h = li.children[0]
        steps.append({'title':h.text(source), 'body':transform(source[h.end:li.inner_end], f'{id}, {h.text(source)}')})
    # En p1 el último paso es la comprobación; la respuesta es el paso anterior.
    answer_index = -2 if id == 'p1' else -1
    answers = re.findall(r'<math\b[\s\S]*?</math>', steps[answer_index]['body'])
    tail = ''.join(n.raw(source) for n in nodes[nodes.index(steps_node)+1:] if not is_return(n))
    result = {
        'sourceId': id, 'title': title,
        'statement': transform(''.join(n.raw(source) for n in before), id+' enunciado', 4),
        'review': transform(''.join(n.raw(source) for n in revision), id+' revisión', 4),
        'analysis':transform(analysis.raw(source), id+' análisis', 4),
        'steps':steps, 'notes':transform(tail, id+' notas', 4),
        'answer':f'<div class="math-region" tabindex="0" role="region" aria-label="Resultado de {escape(title, quote=True)}">{answers[-1]}</div>'
    }
    original = [n.raw(source) for n in sec.walk('math')]
    migrated = re.findall(r'<math\b[\s\S]*?</math>', ''.join([result['statement'],result['review'],result['analysis'],result['notes']]+[p['body'] for p in steps]))
    assert Counter(original) == Counter(migrated), f'Cambió MathML en {id}'
    return result

nocion_nodes = [n for n in section('nocion').children[1:] if not is_return(n)]
first_relation = next(i for i,n in enumerate(nocion_nodes) if n.tag == 'h3')
intro_theory = ''.join(n.raw(source) for n in nocion_nodes[:first_relation])
relations = []
for n in nocion_nodes[first_relation:]:
    if n.tag == 'h3':
        relations.append({'sourceId':f'nocion-relacion-{len(relations)+1}', 'title':n.text(source), 'body':''})
    else: relations[-1]['body'] += n.raw(source)
for r in relations: r['body'] = transform(r['body'], r['title'])

def theory(id):
    nodes = [n for n in section(id).children[1:] if n.tag != 'section' and not is_return(n)]
    return transform(''.join(n.raw(source) for n in nodes), id+' teoría', 3)

academic = {
    'source': {'path':'materials/Integrales-completo-revisado-v3.html', 'sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest()},
    'introduction':{'theory':intro_theory,'relations':relations},
    'indefinite':{'theory':theory('indefinida'), 'examples':[material(id) for id in ['e1a','e1b','e1c','e1d','e1e','e1f','e1g']], 'exercises':[material(id) for id in ['p1','p2','p3']]},
    'substitution':{'theory':theory('sustitucion'), 'examples':[material(id) for id in ['e2','e3a','e3b','e4','e5','e6']], 'exercises':[material(id) for id in ['p4','p5']]},
    'review':theory('revision')
}
output = '// Generado por scripts/import_academic.py. Editar la fuente o el importador, no este archivo.\nexport const academic = '+json.dumps(academic, ensure_ascii=False, indent=2)+';\n'
(ROOT / 'src/academic-content.js').write_text(output, encoding='utf-8')
summary = {'source_sha256':academic['source']['sha256'], 'source_math_count':len(list(doc.root.walk('math'))), 'omitted_rules_math_count':len(list(section('reglas').walk('math'))), 'relations':len(relations), 'examples':13, 'exercises':5, 'source_ids':['nocion','indefinida','sustitucion','e1a','e1b','e1c','e1d','e1e','e1f','e1g','e2','e3a','e3b','e4','e5','e6','p1','p2','p3','p4','p5']}
(ROOT / 'docs/migracion-v3.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps(summary, ensure_ascii=False))
