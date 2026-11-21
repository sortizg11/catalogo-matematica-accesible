"""Importación reproducible del portafolio. Requiere latex2mathml 3.81.1.
La fuente se conserva; los ajustes académicos se registran antes de aplicarse.
"""
from pathlib import Path
import re, json, hashlib, html
from latex2mathml.converter import convert
ROOT=Path(__file__).resolve().parent.parent
BASE=ROOT/'materials/portafolio-calculo'
original=(BASE/'fuente/main.tex').read_text()
changes=[]
def replace(old,new,reason):
 global revised
 assert old in revised, old
 revised=revised.replace(old,new)
 changes.append(dict(original=old,revisado=new,motivo=reason))
revised=original
replace('Portafolio de Cálculo','Cálculo Diferencial e Integral','Identidad común del catálogo')
replace('Formalmente, se dice que:', 'De manera intuitiva, se escribe:', 'La explicación que sigue no es la definición formal épsilon-delta')
replace('Si $g(a) \\neq 0$, el signo de $g(x)$ no cambia cerca de $a$', 'Si $g$ es continua en $a$ y $g(a) \\neq 0$, el signo de $g(x)$ no cambia cerca de $a$', 'Se explicita la hipótesis de continuidad necesaria')
replace('que indica una división que crece sin límite','que no está definida; el comportamiento de un cociente cuyo denominador tiende a cero debe analizarse por separado', 'Dividir por cero no equivale a un límite infinito')
replace('La más conocida es la rapidez, que compara el cambio de posición con el tiempo transcurrido:', 'La velocidad media compara el desplazamiento con el tiempo transcurrido. La rapidez media compara la distancia recorrida con el tiempo:', 'Distancia y desplazamiento son magnitudes diferentes')
replace('\\text{rapidez} = \\frac{\\text{distancia}}{\\text{tiempo}} = ', '\\text{velocidad media} = ', 'Corrección explícita de la magnitud representada por la fórmula')
replace('Cuando $h \\to 0$, el segundo punto se acerca al primero y la recta secante se convierte en la \\textbf{recta tangente} a la gráfica en ese punto.', 'Cuando $h \\to 0$, analiza el límite de las pendientes de las secantes. Si existe y es finito, determina la pendiente de la recta tangente.', 'La existencia de derivada requiere una condición')
replace('La derivada de $f$ es la pendiente de la recta tangente:', 'Cuando el límite existe y es finito, la derivada de $f$ determina la pendiente de la recta tangente:', 'Condición de derivabilidad')
replace('Sean $k$ y $n$ constantes reales:', 'Sean $k$ y $n$ constantes reales. Aplica las fórmulas en los puntos donde las funciones son derivables. Para logaritmos reales se requiere argumento positivo; la base cumple $a>0$ y $a\\neq1$. Para potencias reales, revisa el dominio antes de usar la regla:', 'Condiciones de validez de las reglas')
replace('Este es un límite notable cuyo resultado, demostrado geométricamente, es:', 'Con el ángulo medido en radianes, este límite notable tiene el valor:', 'Condición de unidad angular; no se incluye una demostración en la fuente')
replace('La \\textbf{recta normal} es perpendicular a la recta tangente en el mismo punto, por lo que su pendiente es la recíproca y opuesta:', 'La \\textbf{recta normal} es perpendicular a la recta tangente en el mismo punto. Si la pendiente tangente es finita y distinta de cero, la pendiente normal es la recíproca y opuesta. Si la tangente es horizontal, la normal es vertical:', 'La fórmula de pendiente normal no admite pendiente tangente cero')
for a,b in [('Recuerde','Recuerda'),('Calcule','Calcula'),('Use la definición','Usa la definición'),('Determine','Determina'),('Encuentre','Encuentra'),('Obtenga','Obtén'),('Halle','Halla')]:
 if a in revised: replace(a,b,'Tratamiento directo consistente')
(BASE/'main-revisado.tex').write_text(revised)
# Las instrucciones y macros de la fuente nunca se ejecutan.
maths=[]
def math_html(tex,display=False):
 out=convert(tex.replace(r'\begin{aligned}',r'\begin{array}{rlrlrlrl}').replace(r'\end{aligned}',r'\end{array}'),display='block' if display else 'inline')
 if '<merror' in out: raise ValueError(tex)
 maths.append(tex)
 return '<div class="math-region">'+out+'</div>' if display else ('<span class="math-region math-inline">'+out+'</span>' if len(tex)>50 else out)

def prose(s):
 saved=[]
 def stash(m):
  display=m.group(1) is not None or m.group(2) is not None
  tex=m.group(1) or m.group(2) or m.group(3)
  if m.group(2) is not None: tex=r'\begin{aligned}'+tex+r'\end{aligned}'
  saved.append(math_html(tex,display)); return f'@@M{len(saved)-1}@@'
 s=re.sub(r'\\\[(.*?)\\\]|\\begin\{align\*\}(.*?)\\end\{align\*\}|\$(.*?)\$',stash,s,flags=re.S)
 s=html.escape(s)
 # Solo macros de formato sencillas; nunca interpretar comandos arbitrarios.
 for macro,tag in [('textbf','strong'),('textit','em')]:
  s=re.sub(r'\\'+macro+r'\{([^{}]*)\}',rf'<{tag}>\1</{tag}>',s)
 for env,tag in [('itemize','ul'),('enumerate','ol')]:
  s=re.sub(r'\\begin\{'+env+r'\}(.*?)\\end\{'+env+r'\}',lambda m:'<'+tag+'>'+''.join('<li>'+v.strip()+'</li>' for v in re.split(r'\\item\s*',m[1])[1:])+'</'+tag+'>',s,flags=re.S)
 s=s.replace('``','«').replace("''",'»')
 s=''.join('<p>'+p.strip().replace('\n',' ')+'</p>' for p in re.split(r'\n\s*\n',s) if p.strip())
 for i,v in enumerate(saved): s=s.replace(f'@@M{i}@@',v)
 # Los bloques matemáticos y listas se separan de los párrafos.
 s=re.sub(r'<p>\s*(<(?:div|ul|ol)\b)',r'\1',s)
 s=re.sub(r'(</(?:div|ul|ol)>)\s*</p>',r'\1',s)
 return s

sections=re.split(r'^\\section\{(.+)\}\s*$',revised.split(r'\begin{document}')[1].split(r'\end{document}')[0],flags=re.M)
sec=[(sections[i],sections[i+1]) for i in range(1,len(sections),2)]
configs=[('limites', '1.1',0,'Límite de una función en un punto',[0,1,3,4],'Interpretar límites y comparar aproximaciones laterales.','Recuerda funciones, factorización y operaciones algebraicas.'),('limites-algebraicos','1.3',0,'Cálculo de límites e indeterminaciones',[2],'Reconocer formas indeterminadas y analizar transformaciones válidas.','Revisa la noción de límite y las operaciones algebraicas.'),('derivada','2.1',1,'Derivada de una función en un punto',[6],'Interpretar y calcular la derivada por definición.','Recuerda límites y pendientes.'),('reglas-derivacion','2.3',1,'Teoremas y reglas sobre derivadas',[7],'Aplicar reglas de derivación justificando su elección.','Revisa la definición de derivada.'),('derivadas-trigonometricas','2.5',1,'Derivadas trigonométricas e inversas',[8],'Derivar expresiones trigonométricas y sus inversas.','Recuerda producto, cociente y notación trigonométrica.'),('cadena','2.4',1,'Derivada de una función compuesta',[9],'Identificar composiciones y aplicar la regla de la cadena.','Recuerda derivadas básicas y composición.'),('implicita','2.8',1,'Derivación implícita',[10],'Derivar relaciones implícitas y despejar la derivada.','Revisa producto y regla de la cadena.'),('tangente-normal','2.2.1',1,'Recta tangente y recta normal',[11],'Relacionar la derivada con las ecuaciones tangente y normal.','Recuerda pendientes y ecuaciones de rectas.'),('razones-cambio','3.2',2,'La derivada como razón de cambio',[5,12],'Relacionar magnitudes variables y calcular sus razones de cambio.','Revisa derivación implícita, unidades y modelos geométricos.')]
topics=[]
for tid,num,unit,title,indices,obj,ready in configs:
 theory=[]; examples=[]; exercises=[]
 for ix in indices:
  heading,body=sec[ix]
  subs=re.split(r'^\\subsection\{(.+)\}\s*$',body,flags=re.M)
  if subs[0].strip(): theory.append(prose(subs[0]))
  pairs=[(subs[i],subs[i+1]) for i in range(1,len(subs),2)]
  answers=[]
  for h,b in pairs:
   if h.startswith('Respuestas'):
    answers += re.split(r'\\item\s*',b)[1:]
  answer_index=0
  for h,b in pairs:
   if h.startswith('Respuestas'): continue
   if h.startswith(('Ejemplo','Ejercicio')):
    split=re.split(r'\\textbf\{Solución:\}',b,maxsplit=1)
    statement=prose(split[0]); development=prose(split[1]) if len(split)>1 else ''
    suspect=tid=='cadena' and h.startswith('Ejemplo 8')
    warning='<p><strong>Pendiente de revisión docente.</strong> El argumento del logaritmo no es positivo en ningún punto de su dominio real. Este ejemplo no se propone como procedimiento válido en los reales.</p>' if suspect else ''
    item=dict(sourceId='e'+str(len(examples)+1),title=re.sub(r'\$.*?\$','',h),statement=statement,review=warning,analysis='<p>Lee el enunciado y reconoce las condiciones necesarias antes de seguir el desarrollo.</p>',steps=[dict(title='Paso 1. '+('Examinar el desarrollo de la fuente' if suspect else 'Aplicar el procedimiento'),body=development)],answer='<p>El desarrollo anterior contiene el resultado de la fuente.</p>',notes='')
    # Separar el resultado del desarrollo sin duplicar su lectura matemática.
    blocks=re.findall(r'<div class="math-region">.*?</div>', development, flags=re.S)
    if blocks:
     last=blocks[-1]; before,after=development.rsplit(last,1)
     item['answer']=last+after
     item['steps']=[dict(title='Paso 1. Desarrollar el cálculo',body=before)] if re.sub(r'<[^>]+>', '', before).strip() or '<math' in before else []
    if suspect:
     item['steps']=[]
     item['answer']='<p>Ejemplo suspendido: pendiente de reformulación docente. Consulta el registro de revisión.</p>'
     item['analysis']=''
    examples.append(item)
   elif h=='Práctica' or (ix==4 and h!='Respuestas'):
    prefix=b.split(r'\begin{enumerate}')[0]
    entries=re.split(r'\\item\s*',b)[1:]
    for entry in entries:
     entry=entry.split(r'\end{enumerate}')[0]
     answer=answers[answer_index].split(r'\end{enumerate}')[0] if answer_index<len(answers) else ''
     answer_index+=1
     exercises.append(dict(sourceId='p'+str(len(exercises)+1),title='Ejercicio '+str(len(exercises)+1)+' · '+re.sub(r'\$.*?\$','',h),statement=prose(entry),review='',analysis='',steps=[],answer=prose(answer) if answer else '<p>Respuesta pendiente.</p>',notes=''))
   else:
    theory.append('<h3>'+re.sub(r'^<p>|</p>$', '', prose(h))+'</h3>'+prose(b))
 t=dict(id=tid,number=num,unit=['Unidad 1. Límites y continuidad','Unidad 2. Derivada de una función','Unidad 3. Aplicaciones de la derivada'][unit],title=title,description='Teoría, ejemplos y práctica del material recibido, con revisión docente pendiente.',objective=obj,readiness=ready,theory=''.join(theory),examples=examples,exercises=exercises)
 topics.append(t)

# Notas de alcance y revisión; no completar desarrollos ausentes.
for topic in topics:
 topic['description']={
  'limites':'Noción de límite, límites laterales, valor absoluto y práctica de límites.',
  'limites-algebraicos':'Formas indeterminadas y estrategias de factorización, racionalización y límites al infinito.',
  'derivada':'Pendiente de secantes, definición de derivada y ejemplos de cálculo por definición.',
  'tangente-normal':'Pendientes y ecuaciones de las rectas tangente y normal.',
  'reglas-derivacion':'Derivadas básicas y reglas de suma, producto y cociente.',
  'cadena':'Derivación de composiciones y combinación con otras reglas.',
  'derivadas-trigonometricas':'Reglas y ejemplos de derivadas trigonométricas y funciones inversas.',
  'implicita':'Derivación de relaciones sin despejar la variable dependiente.',
  'razones-cambio':'Razón de cambio promedio y problemas de magnitudes relacionadas.'}[topic['id']]
 if topic['id']=='limites-algebraicos':
  topic['theory'] += '<p>Los ejemplos de este apartado están integrados en la explicación. La práctica disponible se encuentra en <a href="#limites--practica">Práctica de límites</a>.</p>'
 if topic['id']=='derivadas-trigonometricas':
  topic['theory']='<p>Trabaja con ángulos en radianes. Las reglas de arcoseno y arcocoseno se aplican para argumentos entre −1 y 1, sin incluir los extremos. Las demás expresiones requieren respetar los dominios y los denominadores de cada función. Se usa la rama decreciente habitual de la arcocotangente.</p>'+topic['theory']
 if topic['id']=='cadena':
  topic['theory']='<p>Aplica la regla en puntos donde la función interior y la exterior sean derivables. En logaritmos reales el argumento debe ser positivo; en cocientes, el denominador no puede anularse.</p>'+topic['theory']
 if topic['id']=='implicita':
  topic['theory']='<p>El procedimiento supone que la relación define localmente una función derivable de la variable elegida. Comprueba las restricciones de raíces y logaritmos y no dividas entre una expresión que se anule.</p>'+topic['theory']
 for item in topic['examples']:
  if item['analysis']:
   item['analysis']='<p>'+{
    'limites':'Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.',
    'derivada':'Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.',
    'tangente-normal':'Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.',
    'reglas-derivacion':'Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.',
    'cadena':'Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.',
    'derivadas-trigonometricas':'Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.',
    'implicita':'Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.',
    'razones-cambio':'Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.'
   }.get(topic['id'],'Identifica la forma indeterminada antes de transformar la expresión.')+'</p>'
# LaTeX reorganizado con la misma jerarquía pedagógica y la fuente íntegra aparte.
tex=[revised.split(r'\begin{document}')[0],r'\begin{document}',r'\maketitle']
for tid,num,unit,title,indices,obj,ready in configs:
 tex += [r'\section{'+title+'}',r'\subsection{Teoría}',r'\textbf{Objetivo.} '+obj,r'\textbf{Antes de comenzar.} '+ready]
 blocks=[]; ex=[]; practice=[]; solutions=[]
 for ix in indices:
  _,body=sec[ix]; parts=re.split(r'^\\subsection\{(.+)\}\s*$',body,flags=re.M)
  if parts[0].strip(): blocks.append(parts[0])
  for k in range(1,len(parts),2):
   h,b=parts[k],parts[k+1]
   if h.startswith('Respuestas'): solutions += [r'\subsubsection{'+h+'}',b]
   elif h.startswith(('Ejemplo','Ejercicio')):
    if tid=='cadena' and h.startswith('Ejemplo 8'):
     b=b.split(r'\textbf{Solución:}')[0]+r'\textbf{Pendiente de revisión docente.} El argumento del logaritmo no es positivo en ningún punto del dominio real. Se suspende el desarrollo; la fuente original se conserva por separado.'
    ex += [r'\subsubsection{'+h+'}',b]
   elif h=='Práctica' or ix==4: practice += [r'\subsubsection{'+h+'}',b]
   else: blocks += [r'\subsubsection{'+h+'}',b]
 tex += blocks+[r'\subsection{Ejemplos resueltos}']+(ex or ['Los ejemplos se encuentran integrados en la teoría.'])
 tex += [r'\subsection{Práctica}']+(practice or ['No se incluye práctica adicional en este apartado.'])
 tex += [r'\subsection{Soluciones}']+(solutions or ['Los desarrollos disponibles acompañan a los ejemplos.'])
tex += [r'\end{document}']
(BASE/'main-revisado.tex').write_text('\n\n'.join(tex))

topics.sort(key=lambda t: tuple(int(n) for n in t['number'].split('.')))
(BASE/'contenidos.json').write_text(json.dumps(topics,ensure_ascii=False,indent=2))
(BASE/'registro.json').write_text(json.dumps(dict(sha256=hashlib.sha256(original.encode()).hexdigest(),origen='main.tex recibido por el usuario el 18 de noviembre de 2026; autoría no verificada',cambios=changes,formulas_convertidas=len(maths),temas=len(topics)),ensure_ascii=False,indent=2))
content=(ROOT/'src/content.js').read_text()
start='// INICIO PORTAFOLIO IMPORTADO\n'; end='// FIN PORTAFOLIO IMPORTADO\n'
if start in content: content=content.split(start)[0]+content.split(end)[1]
insert=start+'topics.unshift(...'+json.dumps(topics,ensure_ascii=False,indent=2)+');\n'+end
content=content.replace('export const routeAliases = {};',insert+'export const routeAliases = {};')
content=content.replace('<p>Unidad 4. Integral indefinida</p><ol class="topic-list">','<p>Consulta los temas disponibles de las unidades 1 a 4.</p><ol class="topic-list">')
(ROOT/'src/content.js').write_text(content)
print(len(topics),'temas;',len(maths),'expresiones convertidas')
