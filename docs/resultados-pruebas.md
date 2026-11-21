# Resultados de verificación

Fecha local: 23 de octubre de 2026. Entorno: macOS 14.8.7 (23J520), Node 24.22.1, Google Chrome 156.0.8078.47; Playwright 1.56.1 y @axe-core/playwright 4.11.0. Proyecto de prueba denominado `chromium`, con ejecutable de Chrome local.

## Suite automatizada

Última ejecución antes de subir a GitHub: **12 pruebas aprobadas, 0 fallidas, 3,3 minutos, código de salida 0**. Incluye la actualización del aviso de contenido provisional y las capturas correspondientes.

| Comprobación | Resultado |
|---|---|
| Recorrido teclado: salto, tema, ejemplo, paso, práctica, solución y retorno; sin errores JavaScript | Aprobada |
| Centro modal: Tab/Mayús + Tab, Escape, foco al destino y cambio a preferencias | Aprobada |
| Un h1 visible, niveles de encabezados, fragmentos válidos y MathML real | Aprobada |
| Axe en inicio, inmediata, sustitución, ayuda, centro de herramientas y preferencias | 0 infracciones detectadas en reglas ejecutadas |
| Persistencia de fuente, contraste, atajos y modo completo; restablecimiento | Aprobada |
| Unidades operables con teclado y temario oculto fuera de Tab | Aprobada |
| Temario modal a 320 px, Escape y selección de tema | Aprobada |
| Anchos 1440/720/320 CSS px, texto al 200 %, sin desbordamiento de página ni preferencias | Aprobada |
| Continuación explícita e historial | Aprobada |
| Almacenamiento bloqueado: preferencias y navegación sin errores | Aprobada |
| Atajos apagados por defecto y excluidos de fórmulas/diálogos | Aprobada |
| Consulta explícita de ubicación del ejercicio y capturas | Aprobada |

Etiquetas axe: `wcag2a`, `wcag2aa`, `wcag21aa`, `wcag22aa`; adicionalmente `best-practice` en las cuatro vistas principales. No se interpreta este resultado como auditoría completa. Los guiones utilizan activaciones de teclado y, en algunas pruebas, foco programático o clic para aislar comportamientos.

Comando utilizado desde la raíz:

```sh
PATH=/Users/equipo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH PLAYWRIGHT_CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' /Users/equipo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/@playwright/test/cli.js test
```

La vista previa respondió HTTP 200. Se inspeccionaron visualmente las capturas de escritorio (1440 × 1000) y móvil (320 × 800): temario visible/contraído según tamaño, texto sin recorte y foco identificado. No se revisaron manualmente todas las combinaciones de preferencias.

## Historial de correcciones

Primera ejecución: 9 aprobadas, 3 fallidas. Se corrigió el ciclo de foco del diálogo y dos errores del guion (selector ambiguo y diálogo abierto entre cambios de tamaño). Segunda ejecución: 11 aprobadas, 1 fallida. Se corrigió desbordamiento del título de Preferencias con ampliación. Tercera ejecución: las 12 comprobaciones aprobaron, pero el proceso quedó bloqueado al finalizar y fue detenido; no se considera un cierre limpio. Se añadió un tiempo límite global de 120 segundos y se repitió la suite. Cuarta ejecución: 12 aprobadas en 52,6 segundos y cierre normal con código 0.

## Pendiente

NVDA y MathCAT en Windows, Firefox, lectura de fórmulas en español y braille, conflictos de atajos con el sistema, ampliación real del navegador y evaluación con la estudiante. Ver [protocolo manual](pruebas-nvda.md). La revisión docente de las muestras también está pendiente junto con la integración del HTML académico original, localizado posteriormente en GitHub.

## Verificación para la subida a GitHub

Al localizar el material original se actualizaron los avisos y la documentación, sin cambiar los procedimientos matemáticos. Un intento adicional agotó los límites de 30 segundos por prueba y 120 segundos globales durante axe. Se ampliaron los presupuestos de ejecución a 90 segundos por prueba, 120 segundos para el análisis axe de seis vistas y 300 segundos globales, sin eliminar ni relajar comprobaciones. La repetición completó las 12 pruebas en 3,3 minutos, con salida 0. El archivo original se mantiene con su blob Git 28c43c33505ad0daf05ecd7b0ef101f57efae6e1.

## Intervención 1.2 - 27/10/2026

- Suite completa: **32 pruebas aprobadas**, 3,0 minutos, Playwright 1.56.1 y Chrome local. Incluye axe-core 4.11.0 en vistas, diálogos, instrumento HTML y casos matemáticos aislados. Ninguna infracción detectada por las reglas utilizadas; no equivale a conformidad completa.
- Las primeras ejecuciones encontraron falta del navegador empaquetado y dos fallos de búsqueda (duplicación de títulos de portada y Escape en input search). Se usó Chrome instalado y se corrigieron ambos; la suite anterior no se presenta como aprobada.
- Lighthouse 13.5.0: ocho evaluaciones (cuatro vistas, perfiles móvil/escritorio), **100/100 en Accesibilidad**. Sin categorías de rendimiento/SEO. Los controles manuales aparecen pendientes en los informes. Informes completos locales en `docs/evidencia/lighthouse/`; resumen reproducible versionado en `resumen.json`.
- Conservación académica: 181 MathML, 115 pasos, 12 relaciones, 13 ejemplos, 5 ejercicios; hash de la fuente comprobado. No se alteraron fórmulas para intentar corregir pronunciación.
- Instrumento de segunda prueba: 18 páginas PDF renderizadas y revisadas visualmente; texto extraíble y pies presentes en todas. HTML semántico pasa las reglas axe ejecutadas. PDF sin declaración de etiquetado ni PDF/UA.
- Reconocimiento de voz probado con API simulada (inicio explícito, navegación, cancelación, evento tardío y permiso denegado). **No se probó micrófono real, precisión del reconocimiento ni interacción real con NVDA en Windows.**
- También pendientes: evaluación docente, segunda prueba de usuario, Firefox y auditoría completa WCAG 2.2 AA. No se declara acreditación por Lighthouse.
- Tras retirar un encabezado editorial vacío se repitieron axe en vistas/diálogos, jerarquía/identificadores y búsqueda escrita: **3 pruebas aprobadas**. Lighthouse corresponde a la ejecución anterior a ese ajuste menor; sus informes conservan fecha y alcance, no se presentan como una auditoría exhaustiva del estado final.

## Actualización 1.5 del 20 de noviembre de 2026

Doce pruebas focalizadas de búsqueda y voz simulada aprobadas (1,7 minutos). Se repitieron cuatro y se añadió una sobre tiempo de conexión: cinco aprobadas (30,8 segundos). Instrumento HTML: una prueba aprobada (13,9 segundos), con 15 secciones, 56 campos etiquetados, escritura por teclado, reflujo a 320 píxeles y axe sin infracciones en las reglas A/AA ejecutadas. Catorce pruebas distintas entre ejecuciones; no se registra una nueva suite completa. Conservación académica aprobada por verify_migration.py. Documento de 15 páginas renderizadas e inspeccionadas, texto extraíble y sin páginas vacías. Capturas de interfaz revisadas. Voz real, NVDA y auditoría completa pendientes.


## Versión 2.0 — 21 de noviembre de 2026

- Verificador de integración ejecutado: 181 expresiones MathML, 115 pasos, 12 relaciones, 13 ejemplos y 5 ejercicios conservados en los datos; SHA-256 de fuente confirmado. Las tres fórmulas de reglas excluidas anteriormente siguen excluidas.
- Comparación literal de los once temas con la versión 1.5: teoría, enunciados, pasos, respuestas, notas pedagógicas y campos internos de revisión conservados. El análisis solo pierde la nota editorial repetida sobre revisión pendiente. El ejemplo 8 de cadena se conserva en las fuentes/datos pero se excluye de la lista de ejemplos resueltos; su enlace remite al ejemplo 9.
- Primera ejecución focalizada de versión 2: siete pruebas aprobadas y una fallida por un selector de nombre incompleto del ejercicio 4. Se corrigió el selector al enlace estable del enunciado y el recorrido aprobó después.
- Regresión: primera ejecución de la batería aprobó 33 pruebas en cinco minutos y alcanzó el límite global, dejando 16 sin ejecutar. No se registra como una ejecución completa aprobada. Segunda ejecución completó esas 16 pruebas, aprobadas en 2,2 minutos. Son 49 pruebas distintas aprobadas entre ejecuciones. El límite global se amplió de cinco a diez minutos para futuras ejecuciones.
- Cobertura: teclado, foco en diálogos, atajos, marcadores persistentes y en memoria, ubicación, historial, enlaces antiguos, once temas, reflujo, estructura MathML, errores y cancelación de voz, recuperación escrita, soluciones desplegables, HTML independientes y formularios del instrumento anterior.
- Voz simulada: silencio de 3,5 segundos, nueva transcripción que reinicia la espera, cierre del proveedor con texto, reconexión vacía limitada, errores, edición/cancelación, navegación y descarte de resultados tardíos. Las simulaciones no prueban captura, precisión ni anuncio real de NVDA.
- Capturas de inicio en escritorio, inicio a 320 px y solución desplegada inspeccionadas visualmente. Sin recorte de controles ni desbordamiento de página observado en esas capturas. Se comprobó sintaxis de los módulos editados y compilación sintáctica del importador.
- El usuario comunica uso de Chrome, lectura matemática satisfactoria y micrófono fallido en una evaluación parcial. No se recibió el instrumento cumplimentado ni se ejecutó aquí una prueba de micrófono o de NVDA reales. No se afirma conformidad WCAG completa.

Comprobación final después de los últimos ajustes: diez pruebas repetidas aprobadas en 2,0 minutos. Incluyeron los ocho recorridos de versión 2 (con Tab directo al resultado, alias del ejemplo retirado, exportación y soluciones) y los diagnósticos axe de vistas y diálogos. Son repeticiones de cobertura ya contada entre las 49, no diez pruebas distintas adicionales.
