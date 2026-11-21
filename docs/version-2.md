# Versión 2.0 — 21 de noviembre de 2026

## Cambios del producto

- Dictado con cierre automático tras 3,5 segundos sin nuevas transcripciones; estado de escucha, anuncio del texto y enlace al destino. El tiempo se basa en eventos del proveedor, no en una medición acústica independiente.
- Una sola reconexión si el servicio se cierra sin texto; errores diferenciados, cancelación y descarte de resultados tardíos; búsqueda escrita y dictado del dispositivo como alternativas.
- Solución desplegable bajo cada ejercicio, con retorno al enunciado. Se conservan los identificadores de soluciones, pasos y marcadores; el apartado Soluciones queda como índice de accesos, sin duplicar fórmulas.
- Plantilla común de procedimiento y resultados en los once temas y sus HTML exportados. No aparecen controles de pasos vacíos ni notas internas de revisión como instrucciones para estudiantes.
- Pruebas de lector en páginas separadas accesibles desde Ayuda. Se conserva la implementación de MathML.
- Atajos activos inicialmente por petición expresa del usuario; se respeta una preferencia guardada en falso y se mantiene la desactivación en Preferencias.

## Trazabilidad académica

La edición de presentación no corrige ni valida fórmulas. Se conservan las fuentes originales y los campos de revisión internos. Se retira de la lista de ejemplos resueltos el ejemplo 8 de regla de la cadena: la revisión previa documentó que el argumento del logaritmo carece de dominio real. Su enlace anterior se mantiene como alias al ejemplo 9. No se ha inventado un reemplazo. Las observaciones matemáticas sobre procedimientos y el signo de la respuesta de la práctica de introducción permanecen como contenido pedagógico, sin etiquetas editoriales.

## Evidencia comunicada de uso

El usuario informa que en la última aplicación parcial del instrumento la lectura matemática funcionó correctamente, al igual que ubicación y marcador. También informa que la voz nunca devolvió un uso satisfactorio y que la sesión se interrumpió aproximadamente a la mitad. Esto es un reporte del usuario; no se registran como completadas las tareas restantes ni se publican datos de la persona participante. El usuario confirmó que utilizó Chrome. No se recibió todavía el instrumento cumplimentado ni la versión del navegador y sistema operativo de esa sesión. No se atribuye el fallo al navegador integrado del chat.

## Límite del reconocimiento

GitHub Pages sirve una aplicación estática. SpeechRecognition depende del navegador y puede utilizar un servicio remoto. El permiso de micrófono no acredita disponibilidad de transcripción. Esta actualización controla los estados y resultados de esa interfaz; no añade un servidor de transcripción ni promete resolver indisponibilidad del proveedor. La confirmación con micrófono real corresponde al equipo de uso y se registra separadamente de pruebas simuladas.

Referencia técnica: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition y https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechend_event

## Verificación de entrega

49 pruebas distintas aprobadas entre una ejecución inicial de 33 y otra de las 16 restantes; la primera alcanzó el límite global de tiempo, sin completar la batería en una sola ejecución. Después de los últimos ajustes, diez pruebas repetidas aprobaron. Se conservó literalmente el contenido académico de los datos y se inspeccionaron las capturas de escritorio, móvil y solución desplegada. El diagnóstico automático es parcial y no sustituye la prueba real de micrófono o lector.
