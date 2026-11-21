# Estado de la versión 2.0 — 21 de noviembre de 2026

| Cambio | Estado actual | Observaciones | Aporte pendiente del usuario |
| --- | --- | --- | --- |
| Cierre de dictado tras silencio | Implementado | Espera 3,5 segundos sin nuevas transcripciones; no requiere terminar manualmente | Comprobar en el navegador de uso |
| Anuncio y apertura del resultado de voz | Implementado | Aviso de texto reconocido y enlace al tema, sin navegación automática | Confirmar anuncio con el lector habitual |
| Fallo de servicio de micrófono | Control y recuperación mejorados | Reconexión única, errores claros y entrada escrita; disponibilidad depende del proveedor | Chrome confirmado; indicar versión y sistema de la sesión fallida |
| Solución bajo cada ejercicio | Implementado | Desplegable nativo y retorno al enunciado; enlaces anteriores conservados | Observar comodidad en el siguiente uso |
| Lectura matemática | Funcionamiento satisfactorio comunicado | Se conserva MathML y su implementación; reporte de la aplicación parcial | Compartir el registro completado sin datos personales |
| Dónde estoy y dónde quedé | Conservados | Marcadores explícitos y navegación por foco/destino | Ninguno para publicar la interfaz |
| Notas internas | Retiradas de la lectura de estudio | Documentación y trazabilidad separadas; no se borran fuentes | Revisión académica por el equipo docente |
| Atajos | Activos inicialmente | Se respeta una desactivación guardada; excluidos de edición, matemáticas y diálogos | Comprobar la configuración de teclas del equipo |
| Informe, créditos y guía definitiva | Siguiente etapa | No se publican nombres ni resultados individuales | Compartir resultados y datos editoriales autorizados |

La aplicación del instrumento anterior fue parcial: las tareas no realizadas no se consideran aprobadas. Las tablas siguientes son registros históricos de las versiones anteriores.

---

# Cambios y pendientes del catálogo

Registro iniciado el 19 y actualizado el 20 de noviembre de 2026. «Publicado» corresponde a la versión de GitHub; La actualización 1.4 incorpora el nuevo inicio y publica estos documentos; su despliegue se registra en GitHub Actions.

| Cambio conversado | Estatus | Observaciones | Pendiente de tu parte |
| --- | --- | --- | --- |
| Incorporar límites, derivadas y aplicaciones | Publicado | Nueve temas nuevos; once disponibles en total. El programa no está completo | Facilitar fuentes para unidades pendientes y coordinar revisión docente |
| Homologar teoría, ejemplos, práctica y soluciones | Publicado | Plantilla común; no se inventan soluciones ausentes. Mismo aviso en los procedimientos | Pedir a las docentes revisar claridad y exactitud |
| Evitar botones de pasos sin desarrollo | Publicado | Se muestran controles solo cuando hay pasos | Señalar cualquier caso que resulte confuso |
| Inicio como buscador principal | Incluido en 1.4 | Texto y voz visibles juntos; listado bajo desplegable y temario conservado | Revisar la propuesta y probar si resulta más directa |
| Comando «buscar derivación implícita» | Publicado y ampliado en 1.4 | Texto y voz usan los mismos destinos; una coincidencia abre directamente | Probar la frase con el navegador y micrófono reales |
| Voz termina sin resultado pese a permiso | Incidencia abierta; diagnóstico ampliado en 1.4 | Se distinguen cierre sin transcripción, conexión, captura e idioma. Se informó del fallo en el navegador integrado del chat; no se ha confirmado su causa concreta | Comparar con un navegador externo y registrar mensaje final; probar con auriculares |
| Cancelar escucha y descartar resultados tardíos | Publicado; adaptado al nuevo inicio | Sin escucha automática ni síntesis de voz adicional | Incluir cancelación en la sesión con la persona participante |
| Guardar el punto de estudio | Publicado | localStorage sin caducidad programada; marcador explícito prioritario; memoria temporal si falla | Retomar un punto tras cerrar y abrir en el mismo navegador |
| Lectura española de secante, tangente y fracciones | Pendiente de prueba real | MathML conservado; casos aislados disponibles. No se declara resuelto | Citar a la persona participante y registrar versiones y lectura literal |
| Lectura de recuadros matemáticos | Corrección estructural publicada; experiencia pendiente | Solo las regiones desbordadas requieren Tab; no se duplica la fórmula con texto oculto | Comparar lectura aislada e integrada |
| Atajos compatibles con NVDA | Opcionales; sin compatibilidad garantizada | Apagados inicialmente; Alt más Mayús puede chocar con el sistema. Hay alternativas nativas | Mantener apagados al comenzar la prueba; comprobar antes de activarlos |
| Manual provisional | Publicado como borrador para revisión | HTML de lectura y Markdown editable; describe funciones y límites | Revisarlo e indicar cambios de lenguaje o instrucciones |
| Instrumento docente | Entregado en Word y PDF | Elaboración propia, pendiente de pilotaje; no escala validada | Compartirlo con las dos revisoras y recoger respuestas independientes |
| Revisión bibliográfica | Entregada | Seis referencias; separa normas, investigación, DUA y documentación técnica | Alinear objetivos del estudio con lo que se evaluará |
| Auditoría WCAG completa y NVDA real | Pendiente | Pruebas automáticas parciales no acreditan AA | Coordinar sesión en Windows y revisión especializada si se requiere |

## Preparación de la sesión

Acordar tareas y consentimiento; registrar sistema, navegador, NVDA y proveedor matemático; usar auriculares si el micrófono capta al lector; y anotar ayudas, errores y resultados de cada tarea. No publicar nombres, grabaciones ni respuestas individuales en GitHub.

La sesión propuesta debe comprobar uso autónomo y lectura matemática. Si la investigación pretende medir aprendizaje, hará falta además una actividad matemática y criterios adecuados a ese objetivo.

## Actualización 1.5 del 20 de noviembre

| Cambio | Estatus | Observaciones | Pendiente de tu parte |
| --- | --- | --- | --- |
| Controles más claros de voz | Incorporado en 1.5 | Iniciar, terminar y cancelar diferenciados; foco estable y estado real del servicio | Observar si la persona identifica dónde pulsar sin ayuda |
| Revisar texto y elegir resultado | Incorporado en 1.5 | Revisión previa opcional, corrección escrita y foco en enlaces | Comparar revisión previa y apertura directa |
| Instrumento de persona usuaria | Publicado como borrador de pilotaje | HTML, Word y PDF con nueve tareas; no validado psicométricamente | Aplicar con la persona participante y recoger evidencia real |
| Lectura del lector y precisión de voz | Pendiente real | Las simulaciones no acreditan pronunciación ni precisión del micrófono | Registrar entorno, lectura literal y resultado por tarea |
