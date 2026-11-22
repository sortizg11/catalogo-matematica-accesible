# Versión 2.1 — 21 de noviembre de 2026

## Alcance

El usuario informa que la voz sigue fallando en el navegador integrado y Safari con el mensaje de error de conexión. Antes había confirmado Chrome. También informa que la versión del jueves funcionaba correctamente. Estos son reportes de uso; no se ha identificado una causa única del error del proveedor.

Se compararon los archivos src/search.js de los commits 22e6413 y 7c2bf03 del 19 de noviembre, con los de 1.5 y 2.0. La versión 1.4 configuraba lang='es', continuous=false e interimResults=true. La 2.0 usaba lang='es-CR', continuous=true y reiniciaba automáticamente una conexión vacía.

Se recupera el perfil de 1.4: español general, captura breve y ausencia de reinicio automático. Cada intento empieza exclusivamente desde un clic. Se conserva de la versión 2 la presentación del texto reconocido, el aviso de estado, la confirmación mediante un enlace, el cierre tras inactividad y el descarte de respuestas tardías. No se afirma que estas diferencias prueben la causa del error de red.

La propuesta de descargar un modelo fue descartada expresamente por el usuario. No se incorporaron modelos, paquetes de reconocimiento, descarga de recursos de IA ni servidor de transcripción. La persona continúa entrando al mismo enlace de GitHub Pages. La voz utiliza la capacidad integrada del navegador, como el jueves; los cambios no pueden garantizar la disponibilidad de su proveedor.

## Presentación

Nueva cabecera compacta y temario en azul profundo, acento turquesa, portada de búsqueda sobre una retícula discreta, campo y botón de voz destacados, accesos de continuación y exploración diferenciados. El contenido académico utiliza superficies claras y contraste de lectura. Se conservan nombres accesibles, enlaces, foco, MathML, marcadores y soluciones junto al ejercicio. Se conservan alto contraste, reducción de movimiento y colores forzados.

Las teorías, enunciados, respuestas y procedimientos no se modifican en esta entrega. La carga de CSS y de los módulos de entrada usa identificadores de versión para reducir la persistencia visual de archivos anteriores.

## Comprobación

Se registra únicamente la verificación ejecutada en docs/resultados-pruebas.md. Los dobles de reconocimiento comprueban configuración y estados; no acreditan el micrófono real. La confirmación de funcionamiento tras restaurar el perfil requiere repetir el uso real en el navegador de la sesión.

Resultado de entrega: 24 pruebas distintas aprobadas entre las ejecuciones focalizadas. Las dos comprobaciones de ampliación aprobaron después de corregir un ancho mínimo que causaba desbordamiento. Las simulaciones de reconocimiento no se presentan como prueba del micrófono real.
