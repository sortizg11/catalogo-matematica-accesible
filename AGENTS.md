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
- Los contenidos se agregan en `src/content.js` con identificadores estables, sin modificar el motor de navegación.
- No publicar material sin autorización; no almacenar datos personales. Manejar fallos de almacenamiento.
- No implementar el Explorador estructural de integrales hasta recibir especificación docente.
