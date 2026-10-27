# Protocolo manual con NVDA y MathCAT

**Estado: pendiente.** Este proyecto se desarrolló en macOS. No se ejecutaron NVDA ni MathCAT en Windows. Completar cada caso por separado en Firefox y Chrome, con teclado y sin ratón, preferiblemente con la estudiante usuaria.

## Registro de sesión

Anotar fecha, evaluador, versión/compilación de Windows, navegador, NVDA, MathCAT (integrado o complemento), idioma de voz, distribución del teclado, motor de voz, ampliación y preferencias. Para cada caso: resultado esperado, resultado observado, aprobado/fallo, evidencia y corrección. No marcar aprobado sin ejecución.

## Casos de aceptación

1. Abrir el inicio limpio. Tab muestra primero «Saltar al contenido principal»; Enter sitúa el foco en main. Recorrer regiones y encabezados; solo un h1 académico visible, sin saltos de nivel.
2. Con Tab llegar al temario. Expandir/contraer ambas unidades con Enter/Espacio. Comprobar anuncio de estado y ausencia de enlaces ficticios en pendientes. Elegir sustitución: NVDA anuncia su título y reconoce el tema actual.
3. Abrir centro de herramientas. Comprobar nombre, foco inicial, recorrido Tab/Mayús + Tab confinado y fondo no operable. Escape vuelve al activador. Repetir desde atajo y pasando a Preferencias o ¿Dónde estoy?.
4. Elegir teoría, ejemplos, práctica y soluciones desde enlaces y desde herramientas. El foco debe llegar al encabezado solicitado, sin anuncios dobles ni lectura automática de toda la sección. Probar Atrás/Adelante y apertura de URL con fragmento.
5. En el ejemplo, abrir un paso con Enter/Espacio. Confirmar foco sobre summary, título informativo, orden y lectura limitada al contenido solicitado. Cambiar a modo completo y regresar a progresivo. Confirmar que la respuesta final sigue disponible.
6. Resolver la práctica; abrir la solución y retornar al mismo ejercicio. Completar el recorrido final del usuario sin ratón.
7. Consultar ¿Dónde estoy? desde teoría, ejemplo y ejercicio. Verificar curso, unidad, tema, sección y ejemplo/ejercicio. Examinar la limitación del cursor virtual: el guardado sigue navegación y encabezados visibles, no todas las posiciones internas de NVDA.
8. Recargar: permanecer en el destino de la URL, sin restauración automática del guardado. Entrar al inicio y activar «Continuar donde quedé». Probar almacenamiento bloqueado desde la configuración del navegador.
9. Ocultar temario: Tab y cursor de exploración no acceden a su contenido. Reabrirlo. Con ventana estrecha, comprobar panel modal, Escape, cambio de tema y cambio de ancho mientras está abierto.
10. Activar fuente grande, alto contraste y lectura completa. Recargar y verificar conservación. Restablecer preferencias, incluyendo atajos apagados.
11. Completar u omitir el recorrido voluntario; volver a ayuda para repetirlo. No debe haber audio ni avance automático.
12. Ampliar navegador al 200 % real y al 400 % en ventana inicial de 1280 px (equivalente a 320 CSS px). Recorrer todas las vistas y diálogos; comprobar ausencia de pérdida de contenido, solapamiento del foco y desplazamiento horizontal de página. Las fórmulas pueden desplazarse dentro de su región.

## Exploración matemática

Con atajos del catálogo apagados, localizar cada fórmula usando NVDA. Entrar en interacción según la versión instalada (NVDA + Alt + M o Espacio), navegar con flechas, consultar la posición y salir con Escape. Verificar voz en español y, si procede, braille por separado.

| Caso | Ubicación | Estructura que debe poder explorarse |
|---|---|---|
| Polinómica | Inmediata, ejemplo | Integral, 3, x, exponente 2, diferencial dx |
| Sustitución | Sustitución, ejemplo | Producto, paréntesis, x² + 1, diferencial |
| Fracción | Ayuda, pruebas | Numerador 1 y denominador x independientes |
| Radical | Ayuda, pruebas | Raíz y radicando x |
| Límites | Ayuda, pruebas | Integral con inferior 0, superior 1 e integrando x |
| Resultado anidado | Sustitución, solución | Fracción, potencia de paréntesis, suma interna y constante |

Comprobar ausencia de fórmula duplicada, lectura estructural y continuidad al volver al documento. No confundir una región enfocada por Tab con haber activado la exploración interna de MathCAT.

## Atajos candidatos: evaluación de colisiones

Todos: Alt + Shift más H (herramientas), M (temario), T (teoría), E (ejemplos), P (práctica), S (soluciones), I (tema). No hay combinaciones declaradas libres de conflictos.

- Primero comprobar que no actúan con preferencias iniciales.
- Revisar Alt + Shift de cambio de idioma/distribución de Windows; también utilidades del fabricante, extensiones y menús del navegador. No cambiar la configuración de la estudiante para forzar compatibilidad.
- Activarlos solo con consentimiento y probar cada combinación con teclado español e inglés, modos exploración/foco de NVDA, MathCAT activo y ventanas de preferencias abiertas.
- Confirmar que los eventos dentro de input, textarea, select, contenido editable, fórmula y diálogo no son capturados. El cursor virtual puede no reflejarse en `document.activeElement`: comprobar este caso especialmente.
- Escape debe salir de MathCAT sin cambiar el catálogo; solo cierra un diálogo del sitio cuando ese diálogo está activo.
- Si existe colisión, mantener los atajos desactivados y registrar combinación/contexto. Los enlaces y botones deben permitir todas las acciones.

## Fuentes oficiales

- [Guía NVDA](https://download.nvaccess.org/documentation/userGuide.html)
- [Guía MathCAT](https://daisy.github.io/MathCAT/users.html)
- [Patrón de diálogo APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

Las versiones instaladas pueden diferir de las guías en línea. Registrar esa diferencia antes de atribuir un fallo al catálogo.

## Segunda prueba posterior a la intervención

Usar `output/pdf/CDI-instrumento-prueba-2.pdf` o la alternativa HTML. Registrar versión exacta del catálogo y del entorno. Incluir las seis muestras de `tests/fixtures/math-baseline.html` y comparar M01/M02 con el contenido integrado. No atribuir lectura deficiente al motor hasta aislar proveedor, navegador, MathML y modo de interacción.

Verificar búsqueda real por voz bajo consentimiento: título único, selección entre resultados, pendiente, permiso denegado, cancelar, Escape, micrófono no disponible y posibles interferencias de la voz de NVDA. Las pruebas automáticas simulan la API y no acreditan el reconocimiento real.

Revisar también Tab/Mayús+Tab desde el párrafo enfocado de «Dónde estoy» y del guardado, retorno a summary con paso abierto, marcadores resistentes a navegación/recarga y ausencia de sobrescritura por desplazamiento. Evaluar con Firefox y Chrome, reproduciendo primero el navegador original si se conoce. La revisión docente se registra por separado.
