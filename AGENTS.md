# Reglas permanentes

- La accesibilidad es una condición arquitectónica, no una mejora posterior. Objetivo WCAG 2.2 AA, sin declarar conformidad sin auditoría.
- No romper la navegación por teclado. Mantener enlaces reales, foco visible, orden lógico y restauración de foco en diálogos.
- Preferir HTML nativo; no usar ARIA para ocultar problemas de estructura o foco.
- No reemplazar MathML estructural por imágenes ni duplicar su lectura con alternativas ocultas.
- No modificar silenciosamente contenido académico. Registrar origen, cambios y dudas para revisión docente.
- No introducir atajos incompatibles con NVDA. Mantenerlos opcionales y desactivados inicialmente; no interceptar edición, matemáticas ni diálogos.
- No eliminar funciones que ya estén comprobadas. Toda función nueva requiere una alternativa accesible.
- Toda modificación debe acompañarse de una verificación proporcional a su alcance. Registrar únicamente pruebas ejecutadas.
- Mantener una estética limpia, consistente y profesional, fuentes locales y reflujo sin desbordamiento de página.
- El nombre visible es «Cálculo Diferencial e Integral». La información institucional debe estar en un desplegable nativo cerrado al inicio, accesible bajo demanda, sin anuncios automáticos ni ocultación permanente al lector.
- La numeración del catálogo es propia: comienza con Límites y continuidad; no copiar los números del programa de las imágenes. Mantener los identificadores de enlaces al renumerar el temario.
- Homogeneizar todos los materiales incorporados: mismo estilo de redacción en español, jerarquía, terminología y plantilla de teoría, ejemplos, práctica y soluciones en cada unidad. No trasladar el diseño particular de cada HTML o TeX al catálogo.
- Aplicar `docs/convenciones-contenido.md` en cada incorporación. La homogeneización editorial no autoriza cambiar silenciosamente fórmulas, resultados, dominios o procedimientos; conservar fuente y trazabilidad.
- Los contenidos se agregan en `src/content.js` con identificadores estables, sin modificar el motor de navegación.
- No publicar material sin autorización; no almacenar datos personales. Manejar fallos de almacenamiento.
- No implementar el Explorador estructural de integrales hasta recibir especificación docente.

- La introducción matemática reúne noción intuitiva y concepto de integral indefinida, con todos sus ejemplos y ejercicios. Después figuran Reglas de integración pendiente y Técnicas de integración. No agregar una introducción general al curso ni duplicar el programa completo en la portada sin solicitud.

- La búsqueda por voz es opcional y se activa solo por botón. Usa los mismos destinos que la búsqueda escrita; no sintetiza otra voz. Cancelar/cerrar debe abortar la escucha y descartar resultados tardíos. Mantener alternativa escrita y explicar el posible procesamiento del navegador.
- No inferir el cursor virtual de NVDA desde el desplazamiento visual. Los marcadores explícitos tienen prioridad y no se sobrescriben al desplazar la pantalla.
- Lighthouse y axe son diagnósticos parciales: no declarar acreditación ni nivel AA a partir de sus puntuaciones. Registrar pruebas reales de NVDA y micrófono por separado de simulaciones.
