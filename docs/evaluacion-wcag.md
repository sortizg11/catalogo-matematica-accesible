# Marco de evaluación de accesibilidad

## Objetivo y alcance

Objetivo WCAG 2.2 nivel AA: todos los criterios A y AA aplicables, no una media de puntuaciones. No se declara conformidad ni acreditación. El prototipo está preparado para evaluación formativa; los problemas matemáticos del piloto requieren repetición con NVDA/MathCAT en Windows.

Seguir WCAG-EM: definir alcance y tecnologías, explorar las vistas y estados, seleccionar muestra representativa, evaluar y documentar. Incluir inicio, ambas teorías, ejemplos, pasos abiertos/cerrados, práctica, solución, ayuda, temario móvil y diálogos de herramientas, preferencias, búsqueda, orientación y guardado. Una carga de Lighthouse no cubre todos los estados interactivos.

## Instrumentos complementarios

| Instrumento | Qué aporta | Qué no demuestra |
|---|---|---|
| Playwright | Destinos, foco DOM, persistencia, errores, navegación y simulación de errores de voz | Cursor virtual, voz real, comprensión matemática |
| axe-core | Reglas automáticas etiquetadas WCAG A/AA y revisión de estados | Conformidad completa o eficacia educativa |
| Lighthouse, categoría Accesibilidad | Diagnóstico ponderado de auditorías automáticas en vistas y perfiles | Nivel A/AA/AAA; controles manuales no cuentan en la puntuación |
| NVDA/MathCAT en Windows | Lectura, exploración, interferencias y navegación reales | Representatividad de toda la población |
| Revisión docente | Exactitud, dominios, procedimientos y coherencia pedagógica | Certificación técnica de accesibilidad |

Lighthouse también ofrece Rendimiento, Buenas prácticas y SEO. No se mezclan sus puntuaciones con Accesibilidad ni se presentan como requisitos de WCAG. El objetivo interno 100/100 de la categoría automática es una alarma de regresión, no un certificado.

## Matriz inicial de cobertura (no auditoría exhaustiva)

| Criterio WCAG 2.2 | Nivel | Método / evidencia necesaria |
|---|---|---|
| 1.3.1 Información y relaciones | A | axe, encabezados, MathML y exploración humana |
| 1.3.2 Secuencia significativa | A | lectura real y orden DOM |
| 1.3.3 Características sensoriales | A | revisión editorial sin depender de color/posición |
| 1.4.1 Uso del color | A | estados textuales y revisión visual |
| 1.4.3 Contraste mínimo | AA | axe y comprobación de todos los estados |
| 1.4.4 Cambio de tamaño del texto | AA | 200 %, sin pérdida |
| 1.4.10 Reflujo | AA | 320 píxeles CSS; fórmulas con desplazamiento propio |
| 1.4.11 Contraste no textual | AA | foco, controles y estados |
| 1.4.12 Espaciado del texto | AA | ensayo manual con valores de la norma |
| 2.1.1 Teclado | A | recorrido de usuario; búsqueda escrita equivalente |
| 2.1.2 Sin trampas de teclado | A | diálogos y exploración matemática reales |
| 2.1.4 Atajos de teclas de caracteres | A | revisar que no se capturen teclas simples; no confundir con conflictos Alt+Shift |
| 2.4.1 Evitar bloques | A | primer enlace funcional |
| 2.4.2 Titulado de páginas | A | título actualizado por vista |
| 2.4.3 Orden del foco | A | destinos, cierre, retornos y ausencia de controles ocultos |
| 2.4.4 Propósito de enlaces en contexto | A | destino identificable |
| 2.4.5 Múltiples vías | AA | temario y búsqueda; revisar aplicabilidad |
| 2.4.6 Encabezados y etiquetas | AA | nombres informativos, casos duplicados con contexto |
| 2.4.7 Foco visible | AA | verificación visual en contraste y ampliación |
| 2.4.11 Foco no oculto (mínimo) | AA | diálogo y reflujo |
| 2.5.3 Etiqueta en el nombre | A | nombres de botones y búsqueda |
| 2.5.8 Tamaño del objetivo (mínimo) | AA | controles y excepciones justificadas |
| 3.1.1 Idioma de la página | A | español declarado |
| 3.2.1 Al recibir el foco | A | no iniciar micrófono ni navegar por mero foco |
| 3.2.2 Al recibir entradas | A | explicar que enviar búsqueda abre destino único |
| 3.2.3 Navegación consistente | AA | plantilla de temas y controles |
| 3.3.2 Etiquetas o instrucciones | A | entrada, permisos y mensajes de búsqueda |
| 4.1.2 Nombre, función y valor | A | HTML nativo, estados de expansión y diálogos |
| 4.1.3 Mensajes de estado | AA | búsqueda/preferencias sin mover foco innecesariamente |

Esta matriz orienta la intervención; no excluye los criterios A/AA no enumerados. Antes de declarar conformidad, elaborar una matriz completa, justificando no aplicables y marcando pendientes. Cada fila debe registrar versión, vista, evidencia, resultado y responsable. Cero incidencias automáticas no cambia filas pendientes a cumple.

## Fuentes oficiales (consultadas 27/10/2026)

- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/
- https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- https://developer.chrome.com/docs/lighthouse/accessibility/scoring
- https://developer.chrome.com/docs/lighthouse/overview
- https://www.w3.org/WAI/test-evaluate/involving-users/
- https://daisy.github.io/MathCAT/users.html
