# Incorporación del portafolio de cálculo

Fecha: 18 de noviembre de 2026. Incorporación local, sin publicación.

## Procedencia y alcance

El usuario aportó `main.tex`. Se conserva intacto en `materials/portafolio-calculo/fuente/main.tex`; su SHA-256 y las sustituciones se registran en `materials/portafolio-calculo/registro.json`. La autoría no está verificada. La atribución que la fuente da a S. Schmidt y colaboradores para la práctica de límites se conserva; sus permisos de reutilización deben verificarse antes de publicar.

Se incorporaron nueve temas a las unidades 1 a 3. Se mantienen los dos temas de integración y sus identificadores. No se completa el programa: continuidad, otras aplicaciones y técnicas de integración, integral definida e impropias siguen pendientes donde no hay fuente. El material de límites incluye práctica trigonométrica y al infinito; el vínculo de indeterminaciones remite a esa práctica común.

El catálogo reúne ahora once temas disponibles. Los HTML independientes se exportan desde los mismos datos y la misma plantilla; se incluyen también los dos temas anteriores para que los enlaces entre documentos funcionen.

## Ajustes editoriales y académicos

Se unificaron títulos, objetivos, conocimientos previos, teoría, ejemplos, práctica, soluciones, tratamiento directo y terminología. El LaTeX revisado se reorganizó con esas secciones. No se ejecutaron macros de la fuente durante la conversión. Las fórmulas se convirtieron a MathML estructural, sin imágenes ni alternativas ocultas duplicadas. Los bloques alineados se transformaron en tablas matemáticas; las expresiones extensas admiten desplazamiento horizontal y el catálogo activa foco de teclado cuando desbordan su región.

Las modificaciones académicas explícitas del registro incluyen la hipótesis de continuidad para conservar signo, la distinción entre velocidad media y rapidez media, el carácter indefinido de la división por cero, las condiciones de existencia de derivada, restricciones de logaritmos y potencias, radianes y el caso de normal vertical. Son propuestas documentadas para revisión docente; no constituyen aval académico.

El ejemplo 8 de la regla de la cadena tiene dominio real vacío: la raíz del denominador exige x menor que 1/5, mientras que el logaritmo exige x mayor que 1. Se conserva su enunciado con advertencia y se suspende el desarrollo en los materiales revisados. La fuente completa permanece disponible para la docente. No se eligió una función alternativa sin especificación.

Las prácticas que solo aportan respuestas no contienen pasos inventados. Se indica que falta el desarrollo y su revisión docente. No se han validado exhaustivamente los resultados de todas las prácticas. Los ejemplos básicos resueltos de límites se reúnen con los ejemplos; se conserva su numeración de origen en los títulos.

## Reproducción

- Importación: `scripts/import_portfolio.py`, con Python y `latex2mathml==3.81.1`. La dependencia se utilizó desde un directorio temporal; no se añadió al entorno de ejecución del catálogo.
- Exportación: `node scripts/export_topics.mjs`.
- Comprobación de destinos y reflujo: `node scripts/verify_portfolio.mjs`, con Playwright y un navegador instalado.
- Los nuevos datos se agregan en `src/content.js`; el temario se vincula en `src/curriculum.js`. No se modificó el motor de navegación.

## Verificaciones ejecutadas

- El compilador del editor de escritorio compiló correctamente `main-revisado.tex`.
- `verify_migration.py` confirmó las 181 expresiones MathML, 115 pasos, 12 relaciones, 13 ejemplos y 5 ejercicios de integración, con SHA-256 original verificado.
- `verify_portfolio.mjs`: once temas recorridos, sin destinos internos rotos, identificadores duplicados, comandos TeX residuales detectados ni errores JavaScript. Reflujo a 320 píxeles CSS aprobado en los once temas tras corregir fórmulas extensas. Resultado en `docs/evidencia/portafolio-verificacion.json`.
- Se inspeccionaron las capturas de portada y ejemplos de derivada. No se presenta esta revisión como inspección visual de todas las fórmulas.
- La primera suite completa agotó el límite de cinco minutos: cuatro pruebas aprobadas, un análisis axe de vistas y diálogos agotó su tiempo y 28 pruebas no llegaron a ejecutarse. Se inició una ejecución funcional separada; registrar su resultado final, sin considerar aprobada la ejecución interrumpida.

Pendiente de evaluación humana: revisión docente de fórmulas, dominios y respuestas, lectura y exploración real con NVDA/MathCAT en Windows, micrófono real y auditoría completa de accesibilidad. Las pruebas automáticas no acreditan WCAG 2.2 AA.

## Cierre de esta incorporación

- Ejecución funcional separada: 29 pruebas aprobadas y una expectativa antigua de búsqueda fallida porque esperaba dos temas y ahora obtiene once. Se actualizó únicamente esa expectativa y la repetición aprobó (21,8 segundos). No se presenta la primera ejecución como completamente aprobada.
- Prueba nueva de los nueve temas: aprobada (2,1 minutos); comprueba rutas, MathML, ausencia de comandos TeX residuales, enlace a solución, foco y reflujo. En total, 31 pruebas distintas aprobadas entre estas ejecuciones, no una única suite completa.
- Axe en los nueve HTML independientes: sin infracciones en las reglas A/AA ejecutadas, después de corregir el espacio y foco de regiones matemáticas desplazables. Informe: `docs/evidencia/portafolio-axe-html.json`. Este resultado no se extrapola a todos los estados interactivos del catálogo.
- El análisis axe integrado de vistas y diálogos que agotó su tiempo no se da por aprobado. La auditoría completa y las pruebas reales de NVDA y micrófono continúan pendientes.
- La vista previa permanece en `http://127.0.0.1:4173/` mientras siga activo el servidor local. No se publicó ninguna actualización.
