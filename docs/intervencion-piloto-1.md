# Intervención posterior al piloto 1 - versión 1.2

Fecha: 27/10/2026. Estado: candidato a segunda prueba; no conformidad WCAG declarada. No se incluyen datos personales ni registros de la sesión en este documento.

## Cambios implementados

- Se conserva la estructura curricular y la plantilla teoría, ejemplos, práctica y soluciones.
- Búsqueda de títulos/subtítulos por texto y voz, activada por botón. Destino único abre y enfoca; coincidencias múltiples se presentan como enlaces con contexto. Identifica pendientes, admite cancelar y descarta resultados tardíos. Sin síntesis de voz adicional ni grabaciones almacenadas por el catálogo. El servicio del navegador puede enviar audio a su proveedor. Sin API o permiso, funciona la entrada escrita.
- Marcadores explícitos por apartado y paso. Prioridad sobre la última navegación automática; desplazar la pantalla no los cambia. Restaurar un paso lo abre y enfoca. Si localStorage falla, hay marcador de sesión con aviso veraz.
- Orientación por unidad, tema, sección, ejemplo y paso conocido por foco/destino. El texto recibe foco y ofrece retorno. La aplicación no detecta el cursor virtual de NVDA.
- Preferencias de contraste/fuente no cierran pasos abiertos; el cambio de modo sí aplica el modo elegido.
- MathML nativo intacto. Eliminadas las etiquetas técnicas de contenedores; solo se añade región enfocada en Tab cuando una fórmula desborda. No se sustituye con texto ni se añade un segundo árbol oculto.
- Edición: páginas, colores, imágenes y recuadros se sustituyen por explicaciones autosuficientes. Ejemplo 3 a/b conserva e3a/e3b. `scripts/editorial.py` registra cada sustitución; fuente intacta y hash conservado. Las advertencias sobre signos/dominios se mantienen. Notas históricas de procedencia quedan internas.
- Seis casos aislados en `tests/fixtures/math-baseline.html`, enlazados desde Ayuda, para comparar la lectura con la integración en el curso.

## Alcance de la corrección matemática

Se corrigieron envoltorios e interferencias potenciales, pero no se identificó ni reprodujo de forma concluyente la causa de lectura del piloto en Windows. No se afirma que la pronunciación de fracciones, integrales o diferenciales esté resuelta. No se añadió MathJax sin una mejora demostrada. La prueba 2 debe comparar casos aislados/integrados, versión de NVDA, motor efectivo, idioma, navegador y modo de interacción. Si persiste el fallo, evaluar una alternativa en un caso controlado antes de una migración global.

## Verificaciones ejecutadas

- `verify_migration.py`: conservación de 181 expresiones MathML originales, 115 pasos, 12 relaciones, 13 ejemplos y 5 ejercicios; tres fórmulas de reglas excluidas por solicitud previa; SHA-256 verificado.
- Lighthouse 13.5.0: 100/100 en Accesibilidad para inicio, concepto de integral indefinida, ejemplo 2 y ayuda, en perfiles móvil y escritorio. Ocho informes locales HTML/JSON en `docs/evidencia/lighthouse/`; resumen versionado en `resumen.json`. No se evaluaron las categorías Rendimiento, SEO o Buenas prácticas. Puntuación no acredita AA.
- La suite Playwright/axe incluye regresiones y nuevas pruebas de marcadores, búsqueda, foco, estados, reflujo, casos aislados e instrumento HTML. Resultado final en `docs/resultados-pruebas.md`.
- PDF: 18 páginas, texto extraíble, numeración comprobada y revisión visual de todas las páginas renderizadas. No se declara PDF/UA; se acompaña de HTML semántico con campos de anotación temporal sin envío ni persistencia automática.

## Pendiente de evaluación humana

Lectura y exploración real con NVDA/MathCAT en Windows; micrófono real y proveedor del navegador; Firefox/Chrome y entorno original; influencia de la voz de NVDA en el reconocimiento; comprensión del mensaje de ubicación; utilidad de los marcadores; revisión docente; criterios WCAG no cubiertos automáticamente. No simular estas actividades como terminadas.

## Instrumento

`output/pdf/CDI-instrumento-prueba-2.pdf` y `.html`. Aplicar tras implementar las funciones; no asumir que están aceptadas. Separa navegación, comprensión estructural, ayuda y percepción. Incluye consentimiento, configuración, diez tareas, seis casos matemáticos, doce regresiones, revisión docente, incidente reproducible, criterios de cierre y marco WCAG/Lighthouse. NI y NE no son aprobaciones.
