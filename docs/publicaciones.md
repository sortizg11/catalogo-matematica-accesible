# Registro de publicaciones del catálogo

Sitio público: https://sortizg11.github.io/catalogo-matematica-accesible/ . Repositorio: https://github.com/sortizg11/catalogo-matematica-accesible . Rama: main.

## Actualización 1.5 del 20 de noviembre de 2026

Mejora de descubrimiento y control de voz: botón «Iniciar búsqueda por voz» que conserva el foco, cambia a «Terminar dictado» y permite pedir el resultado mediante stop(). «Cancelar escucha» aborta sin aceptar resultados tardíos. El aviso de escucha se emite cuando el navegador indica disponibilidad; la espera de conexión de 20 segundos no consume los 15 de dictado. Se admite revisar y corregir el texto antes de navegar, sin eliminar la apertura directa opcional. Las coincidencias múltiples llevan el foco al primer enlace y ofrecen un enlace de acceso a los resultados.

Se publica un instrumento propio para evaluación formativa con persona ciega: nueve tareas, registro de lectura matemática, percepción y ficha de incidentes. Incluye criterios de observación, ayuda y límites de interpretación. Está pendiente de pilotaje y juicio de contenido; no es una escala validada ni certifica accesibilidad.

Verificación ejecutada: doce pruebas focalizadas aprobadas en 1,7 minutos; después se repitieron cuatro y se añadió una sobre espera de conexión, cinco aprobadas en 30,8 segundos. El instrumento HTML pasó una prueba adicional de etiquetas, teclado, reflujo y reglas axe en 13,9 segundos. Son 14 pruebas distintas entre ejecuciones, no una suite completa nueva. Los reconocimientos fueron simulados; no se probó voz real ni NVDA. El verificador confirmó de nuevo la conservación del contenido de integración. Se revisaron las 15 páginas renderizadas del Word/PDF y las capturas de la interfaz.

Documentos públicos de esta versión:

- HTML de lectura: https://sortizg11.github.io/catalogo-matematica-accesible/output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.html
- Word editable: https://sortizg11.github.io/catalogo-matematica-accesible/output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.docx
- PDF de impresión: https://sortizg11.github.io/catalogo-matematica-accesible/output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.pdf

El PDF no se declara PDF/UA. La experiencia de lectura con lector y micrófono reales continúa pendiente y debe registrarse en la próxima sesión. Commit y despliegue quedan en el historial y Actions de este repositorio.

## Actualización 1.4 del 19 de noviembre de 2026

Publicación autorizada expresamente por el usuario: actualizar GitHub y el enlace público con cada entrega terminada y verificada.

Incluye inicio centrado en búsqueda escrita y por voz; acceso alternativo mediante temas desplegables y temario; mensajes diferenciados de reconocimiento, transcripción provisional editable y cancelación al abandonar el contexto; manual provisional; cuadro de estado; revisión bibliográfica y registro de verificación.

Evidencia previa: ocho pruebas focalizadas aprobadas, seguidas de la repetición de las tres del nuevo inicio con los mensajes ampliados, también aprobadas. La repetición no se cuenta como tres pruebas distintas adicionales. Conservación de integración confirmada por su verificador. Las capturas de escritorio, móvil y tabla se inspeccionaron visualmente. No se declara reconocimiento con micrófono real, validación con NVDA ni conformidad WCAG completa.

El identificador del commit queda en el historial de la rama y el resultado del despliegue en Actions:

- Historial: https://github.com/sortizg11/catalogo-matematica-accesible/commits/main/
- Despliegues: https://github.com/sortizg11/catalogo-matematica-accesible/actions

## Actualización anterior del 19 de noviembre de 2026

Los 40 archivos del portafolio, homologación y búsqueda se publicaron en el commit `22e6413bc7cd73a0737e60fcb9dc8b535f62586a`. El despliegue terminó correctamente y se comprobaron respuestas HTTP 200 con contenido actualizado para index.html, src/search.js y src/content.js.

- Commit: https://github.com/sortizg11/catalogo-matematica-accesible/commit/22e6413bc7cd73a0737e60fcb9dc8b535f62586a
- Despliegue aprobado: https://github.com/sortizg11/catalogo-matematica-accesible/actions/runs/44473366676

En esa entrega el manual aún se conservaba local para revisión. La versión 1.4 lo incorpora como borrador público, con sus límites explícitos.
