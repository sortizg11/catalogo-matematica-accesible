# Revisión del inicio y diagnóstico de voz

19 de noviembre de 2026 · Actualización 1.4

## Interfaz

El inicio presenta una búsqueda escrita con búsqueda por voz junto a sus controles. Los temas disponibles quedan en un desplegable nativo; se conservan temario, marcador, ayuda y navegación por teclado. No hay conversación ni generación de explicaciones. El botón de voz aparece antes del texto explicativo para que sea más fácil localizarlo también en móvil.

Texto y voz usan la misma resolución de títulos y destinos. Dos formularios —inicio y diálogo de búsqueda desde el curso— comparten una implementación. Solo hay una escucha activa; abrir otra búsqueda o salir del contexto cancela la anterior. No se modifica el motor de navegación.

## Incidencia comunicada

Se informó de permiso concedido seguido de imposibilidad de reconocer voz en el navegador integrado del chat. Esto no prueba una causa única: captura, conexión, servicio o compatibilidad pueden intervenir. No se ha ejecutado una prueba con micrófono real ni reproducido exactamente ese fallo. No se atribuye al micrófono de la persona usuaria sin evidencia.

Se distingue permiso denegado de servicio no permitido, red, captura, idioma y finalización sin transcripción. Se muestran transcripciones provisionales editables sin navegar hasta obtener resultado final o pulsar Buscar. Se usa el idioma español general; no se garantiza que cambiar la etiqueta de idioma solucione la incidencia. Se conserva la alternativa escrita y se propone comparar con un navegador externo.

No se añadió un proveedor de transcripción externo propio ni se almacenan grabaciones. La operación del servicio de reconocimiento del navegador queda fuera del control directo del catálogo.

## Evidencia ejecutada

Primera comprobación de esta propuesta: ocho pruebas focalizadas aprobadas en 2,7 minutos, con buscador inicial, coincidencias múltiples, navegación y foco, reflujo a 320 píxeles, reconocimiento simulado, cancelación, ausencia de API, diagnóstico axe acotado al formulario, búsqueda modal anterior y plantilla común de procedimientos. Después se ampliaron mensajes para el navegador integrado y casos de error de servicio; registrar la repetición al cerrar.

Se inspeccionaron las capturas de escritorio, móvil y cuadro de estado. Se adelantó el botón de voz después de la inspección para situarlo antes del texto explicativo. La conservación de integración volvió a aprobarse: 181 MathML, 115 pasos, 12 relaciones, 13 ejemplos y 5 ejercicios, con hash de la fuente confirmado.

Esto no acredita WCAG AA, no demuestra reconocimiento real y no sustituye evaluación con lector. Esta actualización y sus documentos se publican en GitHub por instrucción explícita del usuario. La versión 1.4 mantiene pendiente la validación real del reconocimiento de voz y de NVDA.

## Entregables

- `docs/manual-usuario-borrador.html` y `.md`.
- `docs/estado-cambios-2026-11-19.html` y `.md`.
- `docs/revision-bibliografica-accesibilidad.html` y `.md`.

No se publican datos personales ni resultados individuales.

Cierre: la repetición de las tres pruebas del nuevo inicio aprobó en 50,8 segundos, incluyendo servicio de voz no permitido pese a permiso y fin sin resultado final. Son pruebas repetidas y ampliadas, no tres pruebas distintas adicionales a las ocho iniciales. El micrófono real y la lectura con NVDA siguen pendientes.
