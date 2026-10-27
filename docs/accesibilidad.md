# Accesibilidad: decisiones, evidencias y límites

Objetivo: WCAG 2.2 nivel AA. **No se declara conformidad total ni compatibilidad verificada con NVDA.** Las comprobaciones automáticas son parciales; el criterio final requiere evaluación con la estudiante en Windows.

## Fundamentos aplicados

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): regiones y encabezados, teclado, foco visible, enlaces descriptivos, contraste y reflujo. Hay alternativa convencional a cada atajo.
- [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/): diálogo con nombre, fondo inerte, foco contenido y devolución al activador. Se usa `dialog`, complementado con un ciclo explícito en los extremos de Tab por un fallo observado en Chrome. No se utilizan roles tree/menu.
- [CAST UDL 3.0](https://udlguidelines.cast.org/): control de la cantidad de información, objetivo claro, práctica con retorno, lectura completa/progresiva y preferencias de presentación. No se aplica una puntuación de cumplimiento UDL.
- [NVDA](https://download.nvaccess.org/documentation/userGuide.html) y [MathCAT](https://daisy.github.io/MathCAT/users.html): MathML estructural, sin duplicados ocultos ni reemplazo por texto extenso. Atajos desactivados al inicio y excluidos de fórmulas/edición/diálogos.
- [MathJax](https://docs.mathjax.org/en/latest/): considerado, no incorporado; no hay mejora demostrada para estas muestras que justifique la dependencia. Evaluar tras pruebas reales.

Fuentes consultadas el 23 de octubre de 2026. Las guías en línea pueden cambiar; registrar versiones en cada sesión manual.

## Decisiones concretas

El enlace de salto es el primer elemento interactivo. El temario oculto no está en el recorrido de foco. El h1 cambia por visibilidad del artículo, con una jerarquía h1/h2/h3 consistente. Las rutas usan fragmentos reales y el destino recibe foco. No se reemplaza el contenido al expandir un paso.

La fórmula es un único árbol MathML. Solo si desborda, su contenedor recibe role=region, un nombre de desplazamiento y tabindex=0. Los demás contenedores no añaden nombres ni paradas de Tab. Puede haber varias fórmulas deliberadamente diferentes durante un procedimiento y repetición explícita como resultado, pero nunca una copia oculta para el lector.

Sin anuncios por desplazamiento ni aria-live para fórmulas o navegación. Los estados breves de preferencias y búsqueda usan `role=status` tras una acción explícita; no contienen lecturas de fórmulas. ¿Dónde estoy? usa un diálogo solo cuando se solicita.

Variables CSS para texto, fondos, acento, foco y contraste. Los controles tienen bordes o subrayados. «Tema actual» y aria-current refuerzan el color. Espaciado relativo, sin animaciones obligatorias; se respetan reduced-motion, prefers-contrast y forced-colors. Fuente de sistema, sin solicitudes de fuentes externas.

## Cómo reproducir y consultar evidencia

Ver comandos en `README.md`. La suite `tests/catalog.spec.js` utiliza Playwright 1.56.1 y axe-core mediante `@axe-core/playwright` 4.11.0. El navegador de esta sesión es Chrome instalado en macOS, ejecutado a través del proyecto Chromium de Playwright. **No representa una ejecución en Windows ni en Firefox.**

Resultados finales y entorno exacto en [resultados de pruebas](resultados-pruebas.md). Capturas: [escritorio](evidencia/escritorio.png) y [móvil a 320 px](evidencia/movil.png). El informe HTML generado está en `playwright-report/index.html` (no versionado).

## Problemas identificados durante implementación

1. Archivo académico ausente en la carpeta local inicial, localizado posteriormente en GitHub y conservado intacto: se crearon muestras provisionales y un registro de procedencia en arquitectura. Sin equivalencia con el material docente original.
2. Tab inverso en el extremo de un diálogo nativo podía salir hacia la interfaz del navegador: corregido con ciclo explícito de foco, sin interceptar teclas de MathCAT.
3. Dos fallos iniciales de pruebas: selector de texto ambiguo y diálogo no cerrado entre tamaños de ventana. Se corrigieron los guiones sin relajar sus comprobaciones.
4. El entorno restringido bloqueó la descarga de dependencias y el puerto local. Se ejecutaron las operaciones autorizadas fuera del aislamiento; la aplicación no requiere Internet para su funcionamiento local.
5. El título de Preferencias desbordaba al combinar 320 CSS px con texto al 200 %: corregido permitiendo ajuste de palabras largas y encogimiento de los elementos flexibles del diálogo.

## Limitaciones y pendientes

- Revisar todas las fórmulas, lectura en español, exploración de estructuras, voz y braille con NVDA/MathCAT reales. No inferir resultados de la presencia de MathML o de axe.
- Ejecutar Firefox y Chrome en Windows, lector en modos foco/exploración, fuentes y preferencias del usuario, alto contraste del sistema y teclado español. Las colisiones de Alt + Shift dependen de la configuración.
- Las pruebas de reflujo usan viewport de 320 CSS px, viewport reducido de 720 px y fuente al 200 %. No sustituyen la ampliación real del navegador al 200/400 % ni una evaluación visual de todas sus combinaciones.
- El seguimiento de ubicación usa enlaces y encabezados visibles; no puede leer la posición privada del cursor virtual de NVDA. Es un punto de retorno, no un marcador exacto de cada palabra.
- JavaScript es necesario para montar los contenidos de esta primera versión. Los enlaces externos de ayuda requieren conexión; el resto usa archivos locales.
- Material provisional: falta revisión docente e incorporación trazable del HTML original. No hay contenido de trigonometría ni fracciones parciales, ni unidad de integral definida.

Próxima iteración recomendada: incorporar el archivo original y realizar una sesión de aceptación acompañada por la estudiante, registrando incidencias antes de ampliar contenidos o añadir herramientas.

## Intervención 1.2

La evidencia nueva se registra en `docs/intervencion-piloto-1.md` y `docs/evidencia/lighthouse/`. Marco de evaluación y límites en `docs/evaluacion-wcag.md`. Se mantiene pendiente la comprobación de la lectura matemática real con NVDA/MathCAT después de estos cambios.
