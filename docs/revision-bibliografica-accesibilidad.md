# Tecnología y accesibilidad del catálogo de cálculo

Revisión breve orientada al diseño · 19 de noviembre de 2026

## Conclusión para este proyecto

La dirección del proyecto es razonable: HTML semántico, MathML estructural, teclado, alternativas de interacción y control de los pasos. Sin embargo, esas decisiones no demuestran todavía accesibilidad efectiva, aprendizaje ni conformidad completa. El fallo de voz comunicado y la lectura matemática pendiente son evidencia para revisar el diseño, no detalles que pueda compensar una puntuación automática.

Una entrada centrada en búsqueda es una hipótesis de mejora de usabilidad. No encontramos aquí evidencia que permita afirmar que sea la mejor portada para todas las personas ciegas. Debe convivir con el temario y probarse mediante tareas con la persona participante.

## Alcance de la revisión

Revisión narrativa breve, no sistemática. Se seleccionaron una investigación empírica sobre navegación de personas ciegas, las recomendaciones WCAG 2.2, orientaciones WAI para evaluación con usuarios, las pautas DUA 3.0 y documentación técnica primaria de voz y lectura matemática. Las fuentes se consultaron el 19 de noviembre de 2026. Las normas, las pautas pedagógicas y la documentación de APIs tienen funciones diferentes y no sustituyen evidencia experimental de este recurso.

## Fuentes y aplicación

### 1 Power y colaboradores sobre problemas reales de navegación

Power, C., Freire, A. P., Petrie, H. y Swallow, D. (2012). *Guidelines are only half of the story: Accessibility problems encountered by blind users on the Web*. CHI 2012, 433–442. https://doi.org/10.1145/2207676.2207736 . Texto consultado: https://www.firah.org/upload/notices3/2012/2207676-2207736.pdf .

Estudio con 32 participantes ciegos y tareas en 16 sitios. Identificó problemas que los criterios de WCAG 2.0 no cubrían y dificultades persistentes aun cuando se usaban ciertas técnicas recomendadas. Es evidencia histórica sobre WCAG 2.0 y esos sitios; no estima la accesibilidad de nuestro catálogo ni evalúa WCAG 2.2. Su implicación para el proyecto es combinar comprobaciones normativas con observación de tareas reales.

### 2 W3C sobre evaluación con usuarios

W3C WAI. *Involving Users in Evaluating Web Accessibility*. https://www.w3.org/WAI/test-evaluate/involving-users/ .

Recomienda combinar participación de usuarios y revisión de conformidad, y limitar las generalizaciones de muestras pequeñas. Para este catálogo, una sesión con la persona participante puede comprobar barreras concretas de lectura, orientación y búsqueda. No representa a toda la población ciega. Se deben registrar entorno, ayuda proporcionada, tareas intentadas y resultados observados.

### 3 WCAG 2.2 como referencia técnica

W3C (2024). *Web Content Accessibility Guidelines 2.2*. Recomendación del 12 de diciembre de 2024. https://www.w3.org/TR/WCAG22/ .

Los criterios son verificables y tecnológicos neutrales. Son especialmente relevantes las relaciones semánticas, teclado, ausencia de trampas, encabezados, reflujo, foco visible y no oculto, navegación coherente y mensajes de estado. La búsqueda no debe eliminar la alternativa de navegar por temas. El proyecto mantiene ese objetivo, pero carece todavía de una evaluación completa de los criterios A y AA aplicables. Aprobar reglas de axe no permite declarar conformidad.

### 4 CAST y el control del aprendizaje

CAST (2024). *Universal Design for Learning Guidelines 3.0*. https://udlguidelines.cast.org/ . Consideración 7.1: https://udlguidelines.cast.org/engagement/interests-identities/choice-autonomy/ .

Las pautas orientan a ofrecer elección, autonomía, apoyos para interpretar símbolos y distintas formas de interacción. Respaldan conservar alternativas escritas, control de pasos y ayuda. No prescriben una interfaz de chat ni garantizan que añadir voz mejore el aprendizaje. La utilidad y la carga de controles deben comprobarse en la actividad de estudio.

### 5 MDN y los límites del reconocimiento de voz

MDN Web Docs. *SpeechRecognition* y *Using the Web Speech API*. https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition y https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API .

La compatibilidad es limitada y algunos navegadores dependen de servicios remotos. Permiso de micrófono, captura de audio y transcripción son etapas distintas. Los eventos de finalización, ausencia de coincidencia y error requieren mensajes diferentes. Por tanto, una API simulada verifica el flujo del catálogo, pero no demuestra precisión, conexión al servicio ni funcionamiento con un micrófono real. Se necesita registrar el navegador y el resultado real antes de atribuir una causa al fallo comunicado.

### 6 MathCAT y lectura estructural

DAISY MathCAT. *User guide for MathCAT*. https://daisy.github.io/MathCAT/users.html .

Documenta lectura y exploración matemática, idioma español y configuración. El idioma de la página no basta para demostrar la pronunciación concreta en todas las instalaciones. La comprobación debe incluir proveedor activo, versión, voz, navegador, lectura integrada y casos aislados. Sustituir fórmulas por imágenes o por una lectura textual oculta eliminaría o duplicaría información en vez de demostrar una solución.

## Juicio sobre el estado actual

| Dimensión | Evaluación razonada | Qué falta |
| --- | --- | --- |
| Estructura semántica y MathML | Decisión consistente con los objetivos de acceso | Escucha y exploración reales, especialmente funciones y fracciones |
| Teclado y orientación | Existen pruebas funcionales y destinos estables | Recorrido con lector y verificación de criterios manuales |
| Inicio centrado en búsqueda | Propuesta coherente con la petición de simplificar el acceso | Comparar búsqueda y temario con tareas reales |
| Voz | Alternativa útil en potencia; funcionamiento real aún no confirmado | Reproducir el fallo, reconocer y corregir sin ayuda |
| Apoyo didáctico | Plantilla común y control de los pasos | Revisión docente, completar solo con fuente y medir comprensión si corresponde |
| Evidencia investigativa | Hay instrumentos formativos y trazabilidad | Juicio de contenido, pilotaje y alineación con objetivos del estudio |

## Próxima sesión sugerida

Antes de iniciar, comprobar consentimiento y entorno sin publicar datos personales. Pedir encontrar derivación implícita por escrito; repetir por voz; elegir entre varios resultados; cancelar; retomar un marcador; leer secante, tangente, una fracción y una integral; y pasar de un ejercicio a su solución y regresar. Registrar independencia, ayudas, errores, lectura literal y comentarios. Si falla la voz, observar el mensaje y repetir por escrito para separar el reconocimiento del motor de búsqueda.

La decisión de continuar debe basarse en evidencia de tareas esenciales. Una opinión favorable no compensa una fórmula ilegible ni una tarea bloqueada.
