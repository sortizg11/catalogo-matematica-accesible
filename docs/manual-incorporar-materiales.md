# Manual para incorporar materiales al catálogo

Guía para quienes preparan, suben o integran materiales de Cálculo Diferencial e Integral. Podés empezar con un archivo de LaTeX y seguir la ruta sin usar la terminal. Si solo aportás material, llegá hasta el paso 4. Si además vas a editar el catálogo, seguí hasta el paso 7.

| Qué querés hacer | Dónde lo hacés | Qué obtenés |
| --- | --- | --- |
| Preparar el material | Tu computadora y la IA que uses para revisar el TeX | Una copia para revisión con teoría, ejemplos, práctica y soluciones |
| Aportar el archivo | La carpeta `materials/` del repositorio | Una fuente disponible para que el equipo la integre |
| Anunciar un tema pendiente | `src/curriculum.js` | Un nombre en el temario con el aviso «Pendiente de contenido» |
| Habilitar un tema para estudiar | `src/content.js` y `src/curriculum.js` | Un enlace que abre el tema en el catálogo |

## Paso 1. Reuní tus archivos

1. Creá en tu computadora una carpeta con el nombre del tema, por ejemplo `limites-infinitos`.
2. Guardá una copia intacta del archivo original. Un `.tex` es el texto editable de un documento LaTeX. Si usa otros archivos mediante comandos como `\input` o incluye figuras, reunilos también. Si tenés el PDF de la misma versión, conserválo para revisar cómo se ven las fórmulas.
3. Anotá el nombre de la unidad y del tema, la versión del material y la procedencia. Separá las erratas y las dudas para que la persona docente pueda revisarlas.
4. Confirmá el permiso de publicación. El repositorio es público. Incluí únicamente fuentes autorizadas y excluí datos personales, instrumentos respondidos y grabaciones.

Para este ejemplo se usará **Unidad 1. Límites y continuidad**, tema **Límites infinitos y límites al infinito**. El nombre técnico del tema será `limites-infinitos`. Usá minúsculas sin tildes, con guiones en lugar de espacios. Si el tema ya existe, conservá el identificador que usa el catálogo.

## Paso 2. Adjuntá el TeX y usá el primer prompt maestro

1. Descargá la [plantilla editable en LaTeX](plantilla-material-catalogo.tex). Si se abre como texto en GitHub, usá el botón de descarga del archivo original o **Raw** y guardá el archivo con extensión `.tex`.
2. Abrí un chat en tu herramienta de IA. Usá el botón de adjuntar para agregar el TeX original, la plantilla y los archivos auxiliares indispensables. Si la herramienta rechaza la extensión, abrí el TeX en un editor de texto y pegá el contenido completo, indicando cuál es el original y cuál es la plantilla.
3. Copiá el prompt que sigue y sustituí lo que aparece entre corchetes. Pedí que la IA entregue el documento completo, desde el preámbulo hasta el cierre.

### Prompt maestro 1. Dar formato al material

> Prepará un documento para el catálogo accesible de Cálculo Diferencial e Integral. Trabajá con el TeX original adjunto y usá plantilla-material-catalogo.tex como modelo de formato. Unidad [NÚMERO Y NOMBRE]. Tema [TÍTULO EXACTO]. Identificador [ID DEL TEMA]. Fuente y versión [REFERENCIA].
>
> Generá un archivo completo llamado [ID]-catalogo.tex. Conservá el preámbulo, los estilos y las cuatro secciones de la plantilla. En teoría incluí objetivo, conocimientos previos, definiciones, notación y condiciones disponibles. En ejemplos usá enunciado, dominio cuando proceda, criterio de elección, desarrollo con un paso por acción y resultado. En práctica dejá los enunciados por separado. En soluciones vinculá cada desarrollo con el identificador de su ejercicio e incluí comprobación cuando la fuente la traiga.
>
> Usá español claro y español matemático consistente. Conservá el significado, la notación, los dominios, los procedimientos, la numeración académica y las respuestas de la fuente. Mantené las fórmulas como código matemático editable. Describí por escrito cualquier información indispensable que dependa de una figura o posición visual. Conservá el orden de la fuente dentro de cada sección.
>
> Si detectás una posible errata, una referencia incompleta, una macro sin definición o una parte ilegible, anotá su ubicación y la duda en registro-editorial.md. Indicá qué partes de la plantilla quedan pendientes. Entregá el TeX para revisar y el registro por separado. Dejá cualquier corrección matemática propuesta en el registro hasta que la persona docente la apruebe. Indicá si pudiste compilar el archivo y qué verificaste realmente.

**Qué deberías recibir.** Un archivo como `limites-infinitos-catalogo.tex` y un `registro-editorial.md` aparte. Si la IA pega el TeX en el chat, guardá su contenido en un editor de texto plano con la extensión `.tex`. Conservá el original para cotejar la copia.

## Paso 3. Revisá la copia antes de subirla

1. Abrí el TeX en el editor LaTeX que ya uses. En Overleaf, podés crear un proyecto vacío, pegar el contenido en `main.tex` y pulsar **Recompile**. Si hay archivos auxiliares autorizados, subilos al mismo proyecto y mantené sus rutas.
2. Abrí el PDF que genera la compilación. Compará contra la fuente el enunciado, los signos, los exponentes, los límites de integración, las restricciones de dominio y el resultado de cada ejercicio. Comprobá que cada solución corresponde al ejercicio indicado.
3. Revisá que el documento tenga las cuatro secciones y que los títulos y pasos se entiendan al leerlos en orden. Si falta una sección o hay una errata, consultá el registro y resolvé la duda con la persona docente.
4. Guardá la copia revisada. Para la incorporación, el equipo usará el TeX como fuente y preparará HTML con MathML, el marcado que conserva la estructura de cada fórmula en la web.

## Paso 4. Subí la copia para revisión en GitHub

1. Iniciá sesión y abrí el [repositorio del catálogo](https://github.com/sortizg11/catalogo-matematica-accesible). En **Code**, abrí `materials/` y la carpeta correspondiente al tema o a la fuente.
2. Para una carpeta existente, seleccioná **Add file → Upload files**. Elegí el archivo `limites-infinitos-catalogo.tex` y el registro editorial autorizado. Adjuntá también el original si está autorizado y hace falta para el cotejo.
3. Si hace falta una carpeta y tenés permiso de edición, desde `materials/` podés usar **Add file → Create new file** y escribir `limites-infinitos/limites-infinitos-catalogo.tex` como nombre. Pegá el texto completo. GitHub crea la carpeta al guardar el archivo.
4. Escribí un mensaje de guardado como «Aportar material de límites infinitos». Elegí una rama nueva para revisión, confirmá con **Propose changes** o **Commit changes**, según la pantalla, y abrí el **pull request**. Un pull request es la solicitud para que el equipo revise e incorpore tus cambios. Si GitHub no te ofrece editar, compartí los archivos y la unidad con la persona responsable del repositorio.
5. En la solicitud agregá la unidad, el título público, el identificador si ya existe, la ruta del TeX, el permiso de publicación y las dudas pendientes.

Al terminar, abrí el archivo dentro de la rama y verificá que coincidan el nombre, la carpeta y el contenido. Subir el archivo deja una fuente lista para que el equipo la revise. La aparición en el sitio se completa en los pasos siguientes.

## Paso 5. Agregá o actualizá el nombre en el temario

En GitHub abrí **Code → src → curriculum.js** y pulsá el lápiz para editar. Trabajá en la rama de revisión. Usá la búsqueda del editor para localizar el título de la unidad y su lista `items`.

### Mostrar un tema pendiente

Agregá un elemento como el siguiente dentro de `items`, en el lugar que le corresponde, con coma entre elementos. En el ejemplo el título ya existe, así que revisá la entrada actual y evitá crear otra igual.

```js
{label:'Límites infinitos y límites al infinito'},
```

El catálogo mostrará la etiqueta y el aviso «Pendiente de contenido». Para un subtema, buscá la lista `children` del grupo y agregalo ahí. Por ejemplo, Técnicas de integración está dentro de la Unidad 4.

### Habilitar un tema revisado

Cuando `src/content.js` tenga el contenido validado, agregá `topic` en la misma entrada. Su valor debe ser idéntico al `id` del contenido.

```js
{label:'Límites infinitos y límites al infinito', topic:'limites-infinitos'},
```

El enlace que construye el sitio será `#limites-infinitos--tema`. Si solo corregís el título visible de un tema publicado, editá `label` aquí y `title` en su objeto de contenido. Conservá `topic`, `id` y los identificadores de ejercicios y pasos. La numeración visible sigue el orden propio del catálogo. Revisá también el orden de los temas activos en `src/content.js`, porque de ahí salen los enlaces Anterior y Siguiente.

## Paso 6. Prepará el contenido web con el segundo prompt maestro

Esta parte la realiza quien integra el contenido. Adjuntá a la IA el TeX aprobado, el registro editorial, `docs/convenciones-contenido.md` y una muestra de un tema vigente de `src/content.js`. Si la herramienta tiene acceso al repositorio, indicá estas rutas directamente y trabajá en la rama de revisión.

### Prompt maestro 2. Preparar la incorporación web

> Prepará la incorporación de [TÍTULO] a [UNIDAD] para el catálogo accesible de Cálculo Diferencial e Integral. Usá como fuente [RUTA DEL TEX APROBADO]. Usá el identificador [ID] y la numeración [NÚMERO DEL CATÁLOGO]. Leé las convenciones del proyecto y tomá como referencia la estructura de un tema completo de src/content.js.
>
> Generá la propuesta de objeto de tema con id, number, unit, title, description, objective, readiness, theory, examples y exercises, con la forma que usa el catálogo. Conservá los campos del modelo para enunciados, análisis, pasos, resultados e identificadores locales. Colocá el objeto en el orden correcto, fuera de bloques regenerados si la fuente se incorpora por separado. Prepará la línea label/topic de src/curriculum.js con el mismo id. Si el contenido todavía está en revisión, entregá la entrada pendiente sin topic.
>
> Convertí cada expresión en MathML estructural con una sola representación accesible. Cotejá operación, agrupación, signos, dominios, numeración y resultados contra el TeX aprobado. Usá HTML semántico y la plantilla del catálogo. Conservá la lectura progresiva y las soluciones con retorno al ejercicio. Señalá en el registro las secciones ausentes y las dudas. Conservá los identificadores publicados y el comportamiento del motor de navegación.
>
> Entregá por separado la propuesta para src/content.js, el cambio en src/curriculum.js y el registro de procedencia y verificaciones. Si podés ejecutar pruebas, indicá el comando y lo que observaste. Dejá como pendientes las comprobaciones que requieran un entorno que no tenés, incluida la interacción real con NVDA y MathCAT. Esperá la revisión antes de publicar.

El `.tex` es el insumo que se guarda en `materials/`. El objeto preparado añade el tema a `src/content.js`. Revisá el objeto antes de pegarlo en el editor. Si la IA entregó un archivo completo, compará los cambios y aplicá únicamente los del tema. Usá el mismo identificador en ambos archivos y guardalos en la misma rama de revisión.

## Paso 7. Verificá y publicá el tema

1. Cotejá el tema con la fuente aprobada. Revisá que ejemplos, práctica y soluciones mantengan su correspondencia y que el registro explique las decisiones.
2. Abrí la vista de prueba. Entrá al tema desde el temario y desde la búsqueda escrita. Abrí un ejemplo, desplegá sus pasos, llegá a la solución de un ejercicio y volvé a ese ejercicio. Probá esos recorridos con Tab, Mayús + Tab y Enter. Comprobá que el foco sea visible.
3. Probá el tema en una ventana estrecha y con ampliación. Verificá que las fórmulas extensas se puedan consultar, que sus estructuras se conserven y que el contenido siga legible. Si hay una sesión con NVDA y MathCAT, registrá qué fórmula se exploró y qué se oyó.
4. En el pull request, revisá **Files changed**, confirmá las rutas y anotá los resultados ejecutados. Si encontrás un error, corregilo en la misma rama y repetí la comprobación correspondiente.
5. Después de la aprobación y la integración en `main`, revisá en **Actions** que termine la publicación de GitHub Pages. Abrí el [sitio del catálogo](https://sortizg11.github.io/catalogo-matematica-accesible/), buscá el tema y probá el enlace del temario en la versión publicada.

Si el tema aparece como pendiente, revisá primero si la entrada incluye `topic`. Si el enlace abre otro destino o vuelve al inicio, compará ese valor con `id` y verificá que el contenido esté en la rama publicada. Si un acceso cambia de nombre, probá también el enlace que ya estaba guardado.

## Referencias del proyecto

- [Convenciones de contenido](convenciones-contenido.md)
- [Código del temario](../src/curriculum.js)
- [Código del contenido](../src/content.js)
- [Publicación del catálogo](publicacion.md)
- [GitHub Docs sobre cómo agregar archivos](https://docs.github.com/es/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Docs sobre cómo editar archivos](https://docs.github.com/es/repositories/working-with-files/managing-files/editing-files)
