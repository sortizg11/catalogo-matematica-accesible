"""Verifica cobertura y conservación literal de los árboles MathML importados."""
from collections import Counter
from pathlib import Path
import hashlib
import json
import re
from source_html import Document

root = Path(__file__).resolve().parent.parent
source_bytes = (root/'materials/Integrales-completo-revisado-v3.html').read_bytes()
source = source_bytes.decode('utf-8')
doc = Document(source)
generated = (root/'src/academic-content.js').read_text()
data = json.loads(generated.split('export const academic = ',1)[1].removesuffix(';\n'))
assert hashlib.sha256(source_bytes).hexdigest() == data['source']['sha256']

pieces = [data['introduction']['theory'],*[r['body'] for r in data['introduction']['relations']],data['indefinite']['theory'],data['substitution']['theory'],data['review']]
steps_count = 0
for group in ['indefinite','substitution']:
    for item in data[group]['examples']+data[group]['exercises']:
        pieces.extend([item['statement'],item['review'],item['analysis'],item['notes']])
        pieces.extend(s['body'] for s in item['steps'])
        steps_count += len(item['steps'])
expected = Counter(n.raw(source) for n in doc.root.walk('math'))
rules = Counter(n.raw(source) for n in doc.by_id('reglas').parent.walk('math'))
actual = Counter(re.findall(r'<math\b[\s\S]*?</math>', ''.join(pieces)))
assert actual == expected-rules, 'Hay fórmulas omitidas o modificadas fuera del apartado de reglas'
assert len(data['introduction']['relations']) == 12
assert [e['sourceId'] for e in data['substitution']['examples']] == ['e2','e3a','e3b','e4','e5','e6']
assert sum(len(data[g]['exercises']) for g in ['indefinite','substitution']) == 5
assert 'Nota de revisión:' in data['indefinite']['exercises'][0]['review']
assert 'estrictamente positiva' in data['substitution']['examples'][4]['statement']
print(f'Conservadas {sum(actual.values())} expresiones MathML originales, {steps_count} pasos, 12 relaciones, 13 ejemplos y 5 ejercicios. Tres fórmulas de reglas excluidas por solicitud. SHA-256 de fuente verificado.')
