"""Genera un instrumento en Word y HTML a partir de un único contenido.
Las respuestas no se generan ni se incorporan al repositorio.
"""
from pathlib import Path
from html import escape
import json
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'output/evaluacion-usuario-1.5'
OUT.mkdir(parents=True,exist_ok=True)
BASE='https://sortizg11.github.io/catalogo-matematica-accesible/'
tasks=[
 ('T01','Buscar por escrito','Encuentra el tema de derivación implícita desde el inicio. Usa la búsqueda escrita.',
  'Inicio sin consulta ni resultados. No señalar el campo antes del primer intento.',
  'Localiza un campo con etiqueta, introduce el título y llega al encabezado de derivación implícita; reconoce el tema abierto.',
  'Localización del control, teclas usadas, destino real y qué información anuncia el lector.',
  '¿Cómo supiste dónde escribir y adónde habías llegado?'),
 ('T02','Activar y comprender la voz','Si deseas usar el micrófono, encuentra la búsqueda por voz y busca derivación implícita.',
  'Volver a Inicio. Explicar antes de la sesión el posible servicio externo. Auriculares recomendados. No indicar qué botón pulsar hasta registrar el intento independiente.',
  'Distingue activación, permiso y aviso de escucha; dicta una frase y llega al destino previsto. Si falla, registrar la voz como tarea no lograda y la recuperación escrita como subresultado separado.',
  'Separar éxito por voz de recuperación escrita: la alternativa no convierte la transcripción fallida en exitosa. Registrar frase literal, aviso, transcripción, resultado final o provisional, número de intentos y causa observada.',
  '¿Supiste cuándo comenzar a hablar? ¿Qué parte del control te resultó confusa?'),
 ('T03','Terminar y revisar el dictado','Busca cómo revisar lo que se entiende antes de abrir un tema. Dicta regla de la cadena, termina el dictado y revisa el texto antes de buscar.',
  'Inicio. La revisión previa está desactivada inicialmente. Si el servicio no funciona, marcar NE para esta tarea y registrar el motivo, sin simular un resultado real.',
  'Activa la revisión, distingue terminar de cancelar, conserva el texto reconocido, puede editarlo y abre el tema elegido al confirmar Buscar tema.',
  '¿El foco permanece en el mismo botón al iniciar? ¿Se anuncia el texto final? ¿Hay navegación antes de confirmar? Si no hubo error de reconocimiento, no inventar que lo hubo: ofrecer una corrección de prueba con conocimiento de la persona y anotarla como guiada.',
  '¿Preferirías revisar el texto antes de abrir un tema o ir directamente? ¿Por qué?'),
 ('T04','Cancelar y recuperarse','Inicia una búsqueda por voz, cancélala y después encuentra integración por sustitución escribiendo.',
  'No desactivar permisos del sistema sin acuerdo. No provocar un fallo técnico deliberado en el equipo de la persona. Si la voz no se puede iniciar, registrar ese estado y evaluar solo la recuperación escrita.',
  'Encuentra Cancelar escucha, recibe una confirmación, recupera el campo y puede continuar por escrito. Después de cancelar no aparece una navegación inesperada atribuible al dictado anterior.',
  'Registrar por separado cancelación y recuperación. Un evento tardío solo se marca observado si ocurre; una simulación técnica del equipo desarrollador no es observación de esta sesión.',
  '¿Quedó claro qué se canceló y cómo continuar?'),
 ('T05','Elegir entre varias coincidencias','Busca teoría y elige el resultado correspondiente a integración por sustitución.',
  'Inicio con campo vacío. Permitir que utilice texto o voz; registrar la modalidad. No revelar la posición del enlace.',
  'Reconoce que hay varios resultados, identifica el contexto de cada enlace y selecciona la teoría del tema previsto.',
  'Cantidad anunciada, enlace enfocado inicialmente, navegación entre opciones, destino y posibles repeticiones del lector.',
  '¿La lista te permitió distinguir los temas sin tener que abrirlos todos?'),
 ('T06','Leer y explorar matemática','En el tema de derivadas trigonométricas, lee una expresión con secante y otra con tangente. Después explora una fracción y una integral de sustitución. Describe lo que escuchas y cómo distingues sus partes.',
  'Usar las expresiones acordadas en la ficha matemática. La docente verifica previamente su estructura esperada. Si no se localiza la expresión, registrar esa dificultad antes de ofrecer un enlace directo como ayuda.',
  'Puede acceder a la expresión, distinguir los componentes y salir de su exploración sin perder el contexto. Registrar idioma y lectura literal, sin exigir una única redacción verbal válida.',
  'No proporcionar primero el resultado esperado para que la persona lo repita. Separar lectura, interpretación y conocimiento de cálculo. Comprobar si el recuadro anuncia palabras adicionales o duplica la expresión. Comparar con los casos aislados en el mismo entorno.',
  '¿Qué símbolos o partes resultaron ambiguos o difíciles de explorar?'),
 ('T07','Estudiar pasos y volver del resultado','Abre el ejemplo 2 de integración por sustitución. Consulta los pasos que necesites. Después abre el ejercicio 4, consulta su solución y vuelve al enunciado.',
  'Mantener el mismo entorno. No se exige resolver la integral ni demostrar aprendizaje durante esta tarea.',
  'Reconoce pasos abiertos y cerrados, controla su lectura, encuentra el resultado y vuelve de la solución al ejercicio exacto.',
  'Distinguir dificultad para navegar de dificultad matemática. Anotar si el aviso común sobre pasos y resultado ayuda o añade lectura innecesaria.',
  '¿Pudiste controlar cuánto leer y mantener claro qué ejercicio estabas consultando?'),
 ('T08','Guardar y retomar un punto','Guarda un punto dentro de un paso de sustitución. Ve al inicio y retoma el punto. Si aceptas, repite después de cerrar y abrir el sitio en el mismo navegador.',
  'La persona decide si desea crear o reemplazar un marcador en su navegador. Registrar consentimiento para ese cambio local. No borrar sus datos. Si no acepta cerrar, evaluar solo la recuperación en la sesión.',
  'Reconoce qué punto se guardó, vuelve al paso correcto y lo encuentra abierto. Distingue un marcador persistente de uno temporal si el sitio informa un fallo.',
  'Destino guardado y recuperado, apertura del paso, mensaje de persistencia y condiciones del navegador. No inferir el cursor virtual de NVDA desde la pantalla.',
  '¿Qué esperarías conservar al regresar otro día?'),
 ('T09','Orientarse y pedir ayuda','Consulta dónde estás, vuelve al lugar de estudio y busca ayuda para una dificultad que hayas tenido. Abre y cierra Preferencias sin cambiar tus ajustes del lector.',
  'Permitir los comandos habituales de la persona. Los atajos personalizados del catálogo permanecen apagados inicialmente. No cambiarlos ni modificar NVDA sin acuerdo.',
  'Comprende la ubicación informada, puede regresar, encuentra ayuda y cierra el diálogo con foco recuperable. No queda atrapada con teclado.',
  'Registrar foco real, destino, ayuda consultada y cualquier conflicto de teclas. Si solo una parte se completó, detallar cada subresultado; no aprobar todo por una respuesta positiva.',
  '¿Qué información o ayuda faltó para seguir sin apoyo del facilitador?')
]
pages=[]
def page(title,paragraphs,fields=()): pages.append(dict(title=title,paragraphs=list(paragraphs),fields=list(fields)))
page('Evaluación del catálogo con una persona ciega',[
 'Cálculo Diferencial e Integral · Versión del instrumento 1.0 · Recurso 1.5 · 20 de noviembre de 2026.',
 'Propósito: identificar barreras y apoyos al buscar, leer matemática y estudiar con el catálogo. Se evalúa el recurso, no la capacidad de la persona. Instrumento propio de evaluación formativa, pendiente de pilotaje y juicio de contenido; no es una escala validada, una medición de aprendizaje ni una auditoría completa WCAG.',
 'Para la persona participante: puedes responder oralmente, en Word o en esta versión HTML. Puedes omitir una pregunta, pedir una pausa o terminar sin justificarte. La voz es opcional y puede usar un proveedor del navegador; no estás obligada a conceder permiso. El catálogo no guarda las respuestas de esta ficha.',
 'Para el equipo: antes de aplicar, informar finalidad investigativa, custodia, acceso, plazo de conservación y retiro de datos conforme al procedimiento institucional. Esta hoja no sustituye el consentimiento requerido. No registrar nombres, correos ni respuestas individuales en GitHub. Grabar requiere autorización separada y expresa.',
 'Aplicación sugerida: 40–55 minutos con pausas; dividir la sesión si la carga resulta excesiva. El tiempo sirve para describir la experiencia, no para calificar a la persona. Este instrumento complementa los anteriores y no hace equivalentes sus puntuaciones.',
 'La versión HTML permite navegar por encabezados y completar notas temporales. No envía ni guarda respuestas: cerrar o recargar puede perderlas. Para conservarlas, utiliza una copia de Word o el registro acordado con el equipo. El PDF es de impresión; no se declara PDF/UA.'
],['Código de sesión sin datos personales','Confirmación de información y consentimiento; voz aceptada o no; grabación autorizada o no; pausas acordadas'])
page('Preparación y criterios de registro',[
 'Identificar la versión o commit realmente probado, fecha, URL, sistema, navegador, lector, proveedor matemático, idioma y voz efectiva. No asumir que MathCAT está activo solo por estar instalado. Registrar auriculares y micrófono elegido, sin identificadores personales del dispositivo.',
 'Comenzar con las preferencias habituales y atajos personalizados apagados. Antes de cada tarea restablecer el punto de partida acordado. Leer solo la consigna de participante; la preparación y los criterios son para observación. No adelantar la solución ni sugerir una valoración favorable.',
 'Ayuda H0: ninguna. H1: repetir la consigna sin añadir pista. H2: orientación general. H3: indicar el control o comando. H4: intervención del facilitador. Registrar el máximo nivel y las palabras de ayuda; H1 a H4 no equivalen a desempeño independiente.',
 'Resultado C: criterio esencial cumplido sin ayuda. A: cumplido con ayuda registrada. F: intento realizado sin cumplir el criterio, indicando si la barrera fue del sitio, navegador, lector, micrófono u origen no confirmado. NE: no se intentó o faltaron condiciones; indicar motivo. NA: no corresponde al alcance acordado, con justificación. No contar NE o NA como aprobaciones.',
 'No sumar las tareas como puntuación de accesibilidad. Si una tarea contiene varias acciones, describir cuáles se completaron. Los tiempos e intentos son opcionales; detener la tarea cuando haya bloqueo, cansancio o petición de la persona. No insistir en repetir una función que ya falló de la misma manera.',
 'Registrar voz real, observación directa, relato de la persona y simulación técnica por separado. Si la API no está disponible antes de iniciar, marcar NE para dictado real. Si se intentó y falló el servicio, registrar F por barrera técnica, sin atribuirlo a la persona.'
],['Versión o commit y URL; fecha','Sistema y navegador; NVDA u otro lector; proveedor matemático; idioma y voz','Configuración de audio y preferencias; condiciones iniciales; experiencia relevante declarada sin datos personales'])
for code,title,consigna,prep,criterion,observe,question in tasks:
 page(code+' '+title,[
  'Consigna para la persona participante: '+consigna,
  'Preparación del observador: '+prep,
  'Criterio de observación: '+criterion,
  'Qué registrar: '+observe,
  'Pregunta después del intento: '+question
 ],['Resultado C / A / F / NE / NA; motivo y subresultados','Ayuda H0–H4; palabras de ayuda; intentos; tiempo solo si se midió','Qué ocurrió y qué anunció el lector; destino y evidencia','Respuesta de la persona y mejora sugerida'])
page('Ficha matemática para la observación',[
 'Completar por cada caso real. No convertir una lectura esperada en observación. La docente verifica el contenido antes de la sesión; si hay duda académica, conservarla separada del comportamiento del lector.',
 'M01: función secante en el ejemplo 2 de derivadas trigonométricas. Estructura: producto de un polinomio por secante de x. M02: tangente en la regla de derivación de secante del mismo tema. Pedir lectura literal antes de interpretar.',
 'M03: fracción del ejercicio 4 de sustitución: numerador x, denominador raíz cuadrada de 3 más x al cuadrado, diferencial dx. M04: integral y cambio de variable en el ejemplo 2 de sustitución. Confirmar la expresión exacta de la versión aplicada antes de fijar una lectura de referencia.',
 'Casos aislados para secante, tangente y fracción: '+BASE+'tests/fixtures/pronunciacion-es.html . Casos matemáticos anteriores: '+BASE+'tests/fixtures/math-baseline.html . Comparar con el mismo navegador, lector, idioma y proveedor; no modificar fórmulas para inducir una pronunciación favorable.',
 'Una pronunciación diferente puede ser comprensible y estructuralmente correcta. Registrar errores de idioma, letras separadas, pérdida de paréntesis o agrupación, componentes omitidos y anuncios del contenedor por separado. No exigir una sola frase textual como criterio universal.'
],['Caso, destino estable y expresión exacta; revisión docente previa','Lectura esperada y fundamento; lectura literal realmente escuchada','Componentes identificados por la persona; navegación interna y salida','Comparación aislada e integrada; hipótesis y prueba necesaria'])
page('Valoración de la persona participante',[
 'Responder después de las tareas. Escala local de facilidad: 1 muy difícil, 2 difícil, 3 ni fácil ni difícil, 4 fácil, 5 muy fácil. NA: no usé esa función. NR: prefiero no responder. No usar estas respuestas como escala psicométrica validada ni promediarlas como nota global.',
 'P01. ¿Qué tan fácil fue encontrar dónde escribir una búsqueda?\nP02. ¿Qué tan fácil fue reconocer cuándo la voz estaba lista para escucharte?\nP03. ¿Qué tan fácil fue revisar o corregir el texto reconocido?\nP04. ¿Qué tan fácil fue elegir el tema entre varios resultados?\nP05. ¿Qué tan fácil fue distinguir las partes de las expresiones matemáticas?\nP06. ¿Qué tan fácil fue guardar y recuperar tu lugar?',
 'Preguntar sin sugerir acuerdo: ¿qué conservarías?, ¿qué cambiarías primero?, ¿en qué momento necesitaste ayuda?, ¿qué no te permitió estudiar como querías?, ¿qué modalidad prefieres para buscar y por qué? Si participaste antes, pedir un ejemplo concreto de mejora, persistencia o empeoramiento.',
 'La preferencia por la voz no sustituye su eficacia observada. Distinguir gusto, facilidad, logro de la tarea y precisión de la transcripción.'
],['P01–P06 por separado; comentarios y NA o NR cuando corresponda','Qué conservar y qué cambiar primero; ejemplo concreto','Preferencia de búsqueda y razón; comparación con la sesión anterior si aplica'])
page('Ficha de incidente reproducible',[
 'Duplicar esta ficha por problema. Describir hechos antes de proponer una causa. No publicar respuestas individuales ni grabaciones en el repositorio.',
 'Origen de evidencia: observación directa, lectura literal cotejada, respuesta de participante, simulación o hipótesis. Un error de red del navegador no prueba por sí solo un defecto de navegación del sitio.',
 'Impacto crítico: impide una tarea esencial o cambia de manera ambigua el significado matemático sin alternativa utilizable. Alto: requiere ayuda para continuar. Medio: dificultad recuperable. Bajo: detalle sin bloqueo. Fundamentar la clasificación, sin sustituir la descripción del problema.'
],['Código de incidente; tarea y versión','Destino exacto; expresión o control; acciones reproducibles','Esperado frente a observado; mensaje literal; repeticiones reales','Impacto y alternativa utilizada; ayuda proporcionada','Hipótesis separada de evidencia; corrección propuesta y nueva comprobación'])
page('Cierre y análisis del equipo',[
 'Vinculación provisional: búsqueda escrita y elección de resultados T01 y T05; descubrimiento y control de voz T02–T04; acceso matemático T06 y M01–M04; estudio T07; persistencia y orientación T08; ayuda y diálogo T09. P01–P06 recogen percepción, no eficacia ni aprendizaje.',
 'Informar por tarea resultados, ayudas, entorno y evidencias. Si se cuentan C, A y F, indicar denominador y mantener NE y NA separados. No comparar con la primera sesión como si fueran medidas equivalentes cuando cambian interfaz, instrucciones o condiciones.',
 'Antes de recomendar implementación: revisar barreras críticas, lectura matemática y tareas esenciales. Una muestra individual orienta mejoras y no representa a toda la población. No declarar la voz operativa sin una frase real reconocida, destino correcto y cancelación observados en el entorno objetivo. Mantener alternativa escrita si el servicio no está disponible.',
 'Decisión justificada: continuar correcciones, realizar otro piloto o recomendar uso acompañado en la muestra revisada. Las opiniones favorables no compensan una lectura matemática ambigua. Este instrumento no certifica WCAG ni eficacia educativa.',
 'Fuentes de orientación: W3C WAI, Involving Users in Evaluating Web Accessibility, '+ 'https://www.w3.org/WAI/test-evaluate/involving-users/ ; WCAG 2.2, https://www.w3.org/TR/WCAG22/ ; MathCAT User Guide, https://daisy.github.io/MathCAT/users.html ; MDN SpeechRecognition, https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition . Consultadas en la preparación del proyecto y actualización del 20 de noviembre de 2026. No prescriben ni validan este cuestionario.',
 'Versión elaborada con asistencia de IA. Pendiente de juicio de contenido, pilotaje y ajuste a objetivos concretos de investigación. Registrar cambios de ítems y volver a comprobar su claridad antes de interpretar resultados.'
],['Resumen por tarea y barreras críticas pendientes','Acción, responsable por código, criterio de aceptación y nueva prueba','Decisión, alcance y fundamento; observaciones sobre claridad del instrumento'])
(OUT/'contenido-instrumento.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2))
# Word editable con estilos y una página por unidad de registro.
doc=Document();sec=doc.sections[0];sec.top_margin=sec.bottom_margin=Inches(.65);sec.left_margin=sec.right_margin=Inches(.8)
style=doc.styles['Normal'];style.font.name='Arial';style.font.size=Pt(11);style.paragraph_format.space_after=Pt(7)
for name,size in [('Title',20),('Heading 1',16),('Heading 2',12)]:
 style=doc.styles[name];style.font.name='Arial';style.font.size=Pt(size);style.font.color.rgb=RGBColor(0,0,0)
for style in doc.styles:
 ppr=style.element.find(qn('w:pPr'))
 if ppr is not None:
  for el in list(ppr):
   if el.tag==qn('w:pBdr'):ppr.remove(el)
footer=sec.footer.paragraphs[0];footer.text='CDI · Evaluación de uso · Instrumento 1.0     |     '
f=OxmlElement('w:fldSimple');f.set(qn('w:instr'),'PAGE');footer._p.append(f)
for i,data in enumerate(pages):
 if i:doc.add_page_break()
 doc.add_paragraph(data['title'],'Title' if i==0 else 'Heading 1')
 for value in data['paragraphs']:doc.add_paragraph(value)
 for label in data['fields']:
  p=doc.add_paragraph();p.paragraph_format.keep_with_next=True;p.add_run(label+':').bold=True
  doc.add_paragraph('________________________________________________________________\n________________________________________________________________')
doc.core_properties.title='Evaluación del catálogo con una persona ciega';doc.core_properties.author=''
doc.save(OUT/'Instrumento-persona-usuaria-CDI.docx')
# HTML semántico como alternativa primaria de lectura y anotación temporal.
parts=[];field=0
parts.append('<a href="#instrumento">Saltar al instrumento</a><main id="instrumento"><h1>Evaluación del catálogo con una persona ciega</h1><p>Instrumento 1.0 · Catálogo 1.5 · Borrador para pilotaje. Las respuestas no se envían ni se guardan. Puedes responder oralmente o usar una copia de Word.</p>')
parts.append('<nav aria-label="Secciones del instrumento"><ol>'+''.join('<li><a href="#s'+str(i)+'">'+escape(p['title'])+'</a></li>' for i,p in enumerate(pages))+'</ol></nav>')
for i,data in enumerate(pages):
 parts.append(f'<section aria-labelledby="s{i}"><h2 id="s{i}">'+escape(data['title'])+'</h2>')
 for text in data['paragraphs']:
  safe=escape(text).replace('\n','<br>')
  import re
  safe=re.sub(r'https?://[^\s<>]+',lambda m:'<a href="'+m[0].rstrip('.,;')+'">'+m[0].rstrip('.,;')+'</a>'+m[0][len(m[0].rstrip('.,;')):],safe)
  parts.append('<p>'+safe+'</p>')
 for label in data['fields']:
  field+=1;parts.append(f'<label for="f{field}">'+escape(label)+f'</label><textarea id="f{field}" rows="3"></textarea>')
 parts.append('</section>')
parts.append('</main>')
html='<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Instrumento de evaluación de uso de CDI</title><style>body{font:1.1rem/1.65 Arial,sans-serif;max-width:75ch;margin:auto;padding:1rem;color:#162b45}h1,h2{line-height:1.3}section{margin:3rem 0;padding-top:1rem;border-top:1px solid #b8c2cd}a{color:#17488c}a:focus-visible,textarea:focus-visible{outline:3px solid #17488c;outline-offset:3px}p,a{overflow-wrap:anywhere}label{display:block;font-weight:bold;margin-top:1rem}textarea{display:block;box-sizing:border-box;width:100%;font:inherit;margin:.5rem 0 1.5rem;padding:.5rem}@media print{section{break-before:page}textarea{border:1px solid #999}}</style></head><body>'+''.join(parts)+'</body></html>'
(OUT/'Instrumento-persona-usuaria-CDI.html').write_text(html)
print(len(pages),'unidades de registro;',field,'campos HTML')
