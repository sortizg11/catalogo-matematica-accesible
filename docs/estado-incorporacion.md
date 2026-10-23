# Estado de incorporación del documento revisado v3

Versión preparada para publicación autorizada en GitHub Pages. El estado del despliegue se consulta en Actions del repositorio.

## Organización actual

El curso empieza con Unidad 1. Límites y continuidad. Integral indefinida es la unidad 4. Su página Introducción a las integrales reúne noción intuitiva y concepto, con sus ejemplos, práctica y soluciones. Incluye el subtítulo Reglas de integración, pendiente de contenido. El temario presenta después Técnicas de integración, con sustitución disponible y las demás técnicas pendientes.

La portada contiene accesos directos a los dos temas disponibles. Se retiraron la introducción general y la segunda copia del programa completo. Los enlaces antiguos al concepto redirigen al apartado correspondiente de la introducción unificada.

## Cobertura de la fuente

`python3 scripts/verify_migration.py` aprobado: 181 expresiones MathML originales, 115 pasos, 12 relaciones, 13 ejemplos y 5 ejercicios. Se verificó el SHA-256 del documento conservado. Las tres expresiones del apartado original de reglas se excluyen por la solicitud de dejarlo pendiente. No se alteraron los archivos académicos al reunir las páginas; se adaptaron encabezados de presentación.

## Verificaciones ejecutadas

`playwright test`: 21 pruebas aprobadas en 1,7 minutos en Chrome local. Cubren recorrido de teclado, foco y diálogos, axe, MathML, preferencias, almacenamiento bloqueado, reflujo, navegación entre ejercicios y soluciones y contenido importado. Se revisó visualmente la captura de escritorio actualizada.

El registro de estudio es automático y local. Registra destinos académicos y encabezados visibles; no el cursor de NVDA ni el paso exacto de una fórmula. La ayuda y la guía de la estudiante explican su funcionamiento y límites.

Pendiente: evaluación real en Windows con NVDA/MathCAT y Firefox, revisión docente y prueba de usabilidad con la estudiante. Las pruebas automáticas no acreditan conformidad completa ni compatibilidad verificada con NVDA.

Después del último ajuste de encabezados, `playwright test tests/migration.spec.js --grep 'marcador automático|antiguo concepto|jerarquía'`: 3 pruebas aprobadas en 23 segundos. Comprueban la jerarquía final, persistencia real del marcador y redirección de enlaces al concepto anterior.
