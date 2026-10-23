# Convenciones permanentes de contenido

Decisión del usuario: todas las unidades deben mantener el mismo estilo de redacción y presentación, aunque los archivos de origen sean diferentes.

## Organización vigente

El catálogo comienza con Límites y continuidad, seguido de Derivada de una función, Aplicaciones de la derivada, Integral indefinida, Integral definida e Integrales impropias. La numeración es propia, independiente de la imagen del programa.

Dentro de Integral indefinida se organizan Introducción a las integrales (noción intuitiva y concepto juntos, con sus ejemplos y práctica), Reglas de integración pendiente y Técnicas de integración. Mantener los enlaces existentes aunque cambien los números del temario. Ver `docs/diseno-curso.md`.

## Plantilla común

- **Teoría:** objetivo, conocimientos previos, explicación conceptual, definiciones y notación, condiciones de validez y observaciones pertinentes.
- **Ejemplos resueltos:** título identificable, enunciado, dominio, análisis de la elección del procedimiento, pasos numerados con títulos informativos, resultado y comprobación cuando corresponda.
- **Práctica:** índice de ejercicios, enunciado y dominio; enlace a la solución sin exponer de entrada su desarrollo.
- **Soluciones:** análisis, pasos, resultado, comprobación cuando esté disponible y retorno al ejercicio exacto.

No inventar contenido para completar campos vacíos. Identificar las secciones pendientes. Conservar las notas de revisión y la numeración académica original, distinguiéndola de la numeración curricular cuando sea necesario.

## Redacción y accesibilidad

Español claro y consistente. Usar el mismo término para el mismo concepto, explicar símbolos al introducirlos, expresar condiciones de dominio y evitar referencias que dependan únicamente de colores o posiciones visuales. Dirigirse a la estudiante de manera directa y respetuosa. Mantener una instrucción principal por paso cuando el procedimiento lo permita, sin fragmentar arbitrariamente el razonamiento matemático.

HTML semántico, encabezados coherentes, MathML estructural y una sola representación accesible de cada fórmula. Mantener el control de la lectura progresiva y la navegación por teclado. No afirmar que un único método de enseñanza sirve para todas las personas ciegas: validar organización, carga de lectura y navegación con la estudiante.

## Incorporación de nuevos archivos

1. Conservar una copia intacta de la fuente y registrar su procedencia.
2. Identificar unidad, tema, teoría, ejemplos, ejercicios y soluciones.
3. Adaptar la redacción y los envoltorios a la plantilla común; conservar el contenido matemático y registrar cualquier corrección propuesta.
4. Extraer o generar MathML y comprobar fórmulas, dominios, pasos y resultados contra la fuente.
5. Verificar destinos, foco, lectura progresiva, reflujo y accesibilidad antes de subir la actualización.

Para la incorporación inmediata se prefiere HTML semántico con MathML. El TeX también sirve como fuente matemática; requiere conversión y revisión de la estructura pedagógica y accesible. Si existen ambos archivos, conservar ambos cuando ayuden a verificar la fidelidad.
