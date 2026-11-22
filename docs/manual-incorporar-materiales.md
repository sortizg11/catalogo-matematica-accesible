# Manual para incorporar documentos al catálogo

## Presentación

El catálogo organiza materiales de estudio en cursos, unidades y temas. Cada tema conserva una misma estructura de teoría, ejemplos resueltos, práctica y soluciones. Este manual describe cómo revisar un original, convertirlo en HTML de referencia, editar el temario y publicar una actualización. El procedimiento se aplica a cualquier curso que utilice esta estructura. Los ejemplos de rutas y unidades corresponden al repositorio de Cálculo Diferencial e Integral.

La preparación puede realizarse con una herramienta de IA de uso gratuito que acepte texto pegado y con el editor web de GitHub. Los prompts funcionan con el texto de los apuntes o con el código LaTeX copiado desde un archivo `.tex`. Si el material es extenso, se puede procesar un tema por vez, incluyendo sus enunciados y soluciones. La revisión docente sigue siendo la instancia que confirma las decisiones matemáticas y didácticas.

## Qué compone el catálogo

El [README](../README.md) es la página de orientación que GitHub muestra bajo la lista de archivos. Indica dónde se guardan los materiales, qué archivos se editan, cómo abrir el sitio publicado y dónde consultar las convenciones y el historial.

| Ruta | Función |
| --- | --- |
| `materials/<curso>/fuente/` | Conserva las fuentes autorizadas, como el LaTeX original. |
| `materials/<curso>/html/` | Contiene los documentos HTML de referencia que pueden abrirse como páginas independientes. |
| `materials/<curso>/registro.json` | Registra la procedencia y las decisiones editoriales de acuerdo con los campos que utilice el curso. |
| `src/curriculum.js` | Define las unidades, las etiquetas del temario y los identificadores a los que enlazan. |
| `src/content.js` | Contiene los temas que presenta la aplicación y los datos de sus ejemplos, ejercicios y soluciones. |
| `docs/` | Reúne convenciones, guías, registros de pruebas y publicaciones. |

Un archivo **HTML** es un documento que el navegador presenta con títulos, enlaces, listas y expresiones matemáticas. **MathML** es el marcado que conserva la estructura de una fórmula, por ejemplo qué elementos son numerador y denominador. Un archivo **JSON** es texto estructurado en campos y valores, como `"origen": "Apuntes de la unidad 1"`. El registro de procedencia permite volver al original y revisar por qué se cambió una definición o un procedimiento. Cuando exista un registro, se conserva su esquema. Los archivos **JavaScript** de `src/` contienen el inventario y los datos que utiliza la aplicación.

Publicar el HTML permite consultarlo como documento independiente. Incorporar ese tema a la búsqueda y al temario requiere asociar su contenido con un identificador, según las partes 2 y 3.

## Parte 1. Cómo preparar y subir un documento

### Paso 1. Identificación de la fuente

Identificar el curso, la unidad, el título del tema y la versión del texto original. Abrir el LaTeX en el editor que se utilice habitualmente y copiar el código del tema, con las definiciones de macros que sean necesarias para interpretar las fórmulas. Si la fuente está en Word, en un PDF con texto seleccionable o en apuntes digitales, se puede copiar directamente el contenido. En una página escaneada, conviene cotejar primero la transcripción. El repositorio es público. La versión que se publique debe estar autorizada y libre de información personal.

### Paso 2. Revisión matemática y homologación

Pegar el **prompt maestro 1** y, debajo, el material del tema. Completar los campos entre corchetes. El resultado esperado es un texto reorganizado y un registro de hallazgos. Confirmar cada corrección académica antes de aceptarla. Una diferencia de método o de notación solo requiere corrección cuando afecta el significado, las condiciones de aplicación o la validez del razonamiento.

### Paso 3. Generación del HTML de referencia

Pegar el **prompt maestro 2** con el texto revisado y las correcciones aprobadas. El resultado es un documento HTML completo. Copiar el código desde `<!doctype html>` hasta `</html>`, sin las marcas de bloque que pueda mostrar el chat. Si se necesita una comprobación local, es suficiente guardar ese texto como `.html` y abrirlo en el navegador. La creación y edición del archivo también se pueden realizar directamente en GitHub.

### Paso 4. Creación o carga desde GitHub

1. En el repositorio, abrir **Code** y seleccionar la rama de trabajo. Si el cambio se revisará antes de publicarse, utilizar una rama de revisión. Desde el selector de ramas se puede crear una a partir de `main`, si se dispone de ese permiso. Si ya existe, seleccionar esa misma rama para todos los archivos del cambio.
2. Abrir la carpeta HTML del curso. En el repositorio de referencia es `materials/portafolio-calculo/html/`. Si se tiene el código en el portapapeles, seleccionar **Add file › Create new file**, indicar un nombre como `limites-infinitos.html` y pegar el HTML en el editor. Si el archivo ya está guardado, seleccionar **Add file › Upload files**.
3. Para crear una ruta aún inexistente, indicar la ruta relativa al directorio abierto en el nombre del archivo. Por ejemplo, desde la raíz puede escribirse `materials/nuevo-curso/html/tema.html`. GitHub crea los directorios intermedios cuando guarda el archivo.
4. Seleccionar **Commit changes**, escribir un mensaje descriptivo, por ejemplo «Agregar HTML de referencia de límites infinitos», y confirmar la rama. Un *commit* es un registro del cambio guardado. Si se propone desde una rama, el *pull request* permite revisar qué archivos cambiarán en `main`. Si falta permiso de escritura, se puede entregar el HTML al equipo responsable o proponerlo desde una copia del repositorio cuando GitHub ofrezca esa opción.

### Paso 5. Comprobación del documento

Abrir el archivo en la rama y comprobar el nombre, la ruta y que el código esté completo. Para verificar su presentación, abrir el HTML en un navegador. Comprobar los títulos, el orden de lectura, los enlaces internos, los pasos desplegables, las soluciones y el MathML. Un archivo visible en GitHub puede inspeccionarse como código. Su URL pública de Pages estará disponible cuando se publique la rama configurada.

## Parte 2. Cómo modificar el temario

### Paso 1. Localización del archivo y de la unidad

En **Code**, seleccionar la rama de trabajo y abrir **src › curriculum.js**. Seleccionar **Editar este archivo** (icono de lápiz). Buscar el título de la unidad dentro de `curriculum`. Cada unidad mantiene sus entradas en la lista `items`. Si el tema debe quedar dentro de un grupo, su entrada se coloca en la lista `children` de ese grupo.

### Paso 2. Inclusión de un tema pendiente

Si el tema todavía no tiene contenido integrado, agregar una entrada con `label`, el nombre que se mostrará en el temario. Se mantienen las comas entre entradas. Si el tema ya figura en el inventario, editar su entrada en vez de añadir una copia. En el ejemplo del repositorio, «Límites infinitos y límites al infinito» ya figura como pendiente.

```js
{label:'Límites infinitos y límites al infinito'},
```

### Paso 3. Cambio del nombre visible

Modificar `label` en `src/curriculum.js`. Para un tema activo, actualizar también `title` en el objeto correspondiente de `src/content.js`, de modo que el temario, la búsqueda y el encabezado presenten el nombre acordado. Mantener el valor de `topic`, el `id` del contenido y los identificadores de secciones, ejercicios y pasos. Los enlaces guardados dependen de esos valores.

### Paso 4. Activación del enlace

Una vez integrado el objeto del tema en `src/content.js`, agregar `topic` a la entrada del temario. Debe coincidir exactamente con el `id` del objeto. El catálogo construye el enlace `#limites-infinitos--tema` a partir de ese identificador.

```js
{label:'Límites infinitos y límites al infinito',
 topic:'limites-infinitos'},
```

### Paso 5. Guardado y revisión

Guardar el cambio con **Commit changes** en la misma rama que contiene el material. Revisar en **Files changed** que las entradas estén en la unidad correcta y que los archivos incluyan solo los cambios previstos. Comprobar la etiqueta en el sitio de prueba o, tras publicar, en Pages. Para una entrada activa, abrirla desde el temario y desde la búsqueda. Para una entrada pendiente, comprobar que se muestre el aviso correspondiente.

## Parte 3. Cómo incorporar el tema y publicar

### Paso 1. Preparación del objeto de contenido

El HTML de referencia es la copia legible del material aprobado. Para que el catálogo lo muestre con sus propios controles, el contenido se organiza en un objeto de `topics` en `src/content.js`. Se puede solicitar ese bloque adicional con el segundo prompt, pegando como ejemplo un objeto vigente del repositorio. Conservar los mismos campos, estructura HTML y MathML. Revisar en especial el `id`, la numeración del catálogo, la unidad y los identificadores de ejemplos y ejercicios.

### Paso 2. Inclusión en el archivo de contenido

Buscar un tema próximo como referencia y localizar dónde se construye `topics`, antes de `export const routeAliases`. Si se amplía un tema existente, editar su fuente de datos y conservar sus identificadores. Para un tema nuevo, incorporar el objeto en el orden de estudio correspondiente. El orden de `topics` determina también los enlaces Anterior y Siguiente. Cuando haya un bloque mantenido por un importador, conservar la incorporación nueva fuera de sus marcas o actualizar la fuente que lo genera. La revisión en **Files changed** debe mostrar el objeto previsto y conservar el motor de navegación.

### Paso 3. Registro y verificación

Registrar la procedencia y las decisiones de revisión en los archivos del curso. Comprobar al menos una entrada desde temario y búsqueda, la apertura de un paso, la consulta de una solución y el regreso al ejercicio. Revisar el orden de Tab y Mayús + Tab, activación con Enter, foco visible, ampliación y una ventana estrecha. Cuando se prueben fórmulas con lector de pantalla, registrar el navegador, el lector, el proveedor matemático y el resultado observado.

### Paso 4. Integración y despliegue

En el *pull request*, revisar **Files changed** con el equipo responsable. Integrar la rama en `main` cuando el cambio esté aprobado y la cuenta tenga permisos. Abrir **Actions** y localizar la ejecución de **pages build and deployment** correspondiente al commit publicado. Cuando termine correctamente, abrir [el catálogo público](https://sortizg11.github.io/catalogo-matematica-accesible/) y, para el documento independiente, añadir a esa dirección la ruta guardada. Por ejemplo, `materials/portafolio-calculo/html/limites-infinitos.html`.

## Prompts maestros

### Prompt maestro 1. Revisión matemática y homologación

> Actúa como revisor matemático y editor académico de un catálogo de estudio. Curso [CURSO]. Unidad [UNIDAD]. Tema [TEMA]. Fuente [TÍTULO Y VERSIÓN]. El original, en texto o código LaTeX, se incluye al final.
>
> Examina primero las definiciones, las hipótesis, el dominio, la notación, cada transformación y el resultado de los ejercicios. Para las soluciones, distingue entre un error que cambia la validez del razonamiento y un procedimiento alternativo que conduce a un resultado equivalente. Cuando sea viable, comprueba el resultado mediante una operación inversa, sustitución, un contraejemplo o un caso representativo. Explica qué comprobaste y cuáles son los límites de la comprobación.
>
> Entrega un registro con la ubicación del hallazgo, el fragmento original, la razón matemática o didáctica, la corrección propuesta y su estado. Señala qué material tendría que aportar la persona responsable, por ejemplo hipótesis, un enunciado completo, una figura o una solución ausente. Si el original es ambiguo, conserva el pasaje para decisión docente.
>
> Entrega después una versión homologada en español académico claro. Organízala en Teoría, Ejemplos resueltos, Práctica y Soluciones. Conserva fórmulas, dominios, numeración original y resultados mientras las correcciones matemáticas estén pendientes. En los ejemplos incluye enunciado, criterio de elección, pasos informativos y resultado. Vincula cada solución con su ejercicio. Identifica los apartados pendientes sin inventar contenido.
>
> MATERIAL ORIGINAL. [PEGAR AQUÍ EL TEXTO O EL CÓDIGO LATEX].

### Prompt maestro 2. Generación del HTML para GitHub

> Genera el archivo [ID-DEL-TEMA].html a partir del texto revisado que se incluye al final. Curso [CURSO]. Unidad [UNIDAD]. Tema [TEMA]. Identificador estable [ID]. Incorpora solamente las correcciones académicas aprobadas.
>
> Devuelve un HTML autónomo completo con <!doctype html>, idioma español, título de página, encabezado principal único, elemento main y secciones en este orden: Teoría, Ejemplos resueltos, Práctica y Soluciones. Usa encabezados jerárquicos, listas y enlaces nativos. Añade un índice con enlaces reales a las secciones y utiliza identificadores únicos y descriptivos. Incluye pasos desplegables con details y summary cuando haya un procedimiento por etapas. Si las soluciones quedan junto a cada ejercicio, el índice de Soluciones debe enlazar a esos mismos controles y cada solución debe permitir volver al enunciado. Conserva el mismo patrón y la misma terminología para futuros cursos.
>
> Convierte las fórmulas a MathML estructural nativo. Usa elementos como mfrac, msup, msub y mrow según la expresión y coteja términos, signos y agrupaciones con el original. Las fórmulas se presentan una sola vez con su estructura. Las figuras indispensables deben contar con la información que permita interpretarlas mediante texto. Aplica un diseño sencillo, adaptable y con foco visible. El archivo debe funcionar sin JavaScript externo, fuentes remotas ni servicios de pago.
>
> Devuelve un único bloque de código con el HTML completo. Fuera del bloque, enumera las verificaciones efectuadas y las que requieren revisión humana. Si se solicita también integrar el tema al sitio, entrega por separado la propuesta de un objeto para topics conforme al ejemplo vigente de src/content.js que se incluye abajo. Mantén id, number, unit, title, description, objective, readiness, theory, examples y exercises, y conserva los campos de cada ejemplo y ejercicio. Indica la línea label/topic de src/curriculum.js. Si falta un ejemplo del objeto vigente, deja pendiente ese bloque y conserva el HTML independiente.
>
> TEXTO REVISADO. [PEGAR EL CONTENIDO HOMOLOGADO Y LAS CORRECCIONES APROBADAS].
>
> EJEMPLO DE OBJETO DEL CATÁLOGO. [PEGAR SOLO SI SE SOLICITA EL OBJETO PARA TOPICS].

## Referencias

- [Convenciones de contenido](convenciones-contenido.md)
- [Manual de usuario del catálogo](manual-usuario.html)
- [Publicación del catálogo](publicacion.md)
- [GitHub Docs sobre cómo agregar archivos](https://docs.github.com/es/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Docs sobre cómo editar archivos](https://docs.github.com/es/repositories/working-with-files/managing-files/editing-files)
