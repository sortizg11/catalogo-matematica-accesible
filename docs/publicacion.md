# Publicar y actualizar el curso

## Ver el sitio

Abre https://sortizg11.github.io/catalogo-matematica-accesible/ . Es una dirección pública, distinta de la página de archivos de GitHub. No necesitas iniciar sesión para estudiar.

## Configuración inicial

1. Abre el repositorio `sortizg11/catalogo-matematica-accesible` en GitHub.
2. Entra en **Settings → Pages**.
3. En **Source**, elige **Deploy from a branch**.
4. Selecciona **main** y **/(root)**; pulsa **Save**.
5. Espera a que **Actions → pages build and deployment** termine correctamente. Pages mostrará el enlace del sitio.
6. Conserva HTTPS activado. No necesitas contratar dominio ni cambiar DNS.

## Actualizar sin usar terminal

1. Para un cambio breve, abre el archivo en **Code** y pulsa el lápiz **Edit this file**.
2. Modifica el texto y pulsa **Commit changes**. Escribe una descripción corta y guarda en `main`.
3. Para subir archivos, usa **Add file → Upload files** y confirma con **Commit changes**. Conserva las carpetas y nombres: `src`, `materials`, `index.html` y `styles.css`.
4. Revisa **Actions** y espera a que termine la publicación. Después recarga el sitio.

Guardar un commit conserva una versión del proyecto. La publicación de Pages toma esa versión y la sirve como sitio. Si falla, revisa el registro de la ejecución antes de hacer cambios adicionales.

## Incorporar materiales académicos

Subir un HTML a GitHub no lo incorpora automáticamente al temario. Se debe adaptar a la plantilla común, conservar MathML y procedencia, registrar el contenido y verificar los enlaces y las pruebas. Puedes entregar el archivo por el chat e indicar su unidad: ese es el flujo recomendado para las próximas incorporaciones.

No subas `node_modules`, `.pnpm-store`, `test-results` ni `playwright-report`. El repositorio y el sitio son públicos; incluye únicamente material destinado a publicarse.

## Verificar una actualización

Abre Introducción a las integrales, consulta teoría y ejemplos; después entra en Sustitución, abre un paso, ve a práctica y vuelve desde la solución. Prueba también «Continuar donde quedé» en el mismo navegador. El punto guardado en localhost no se transfiere al dominio público.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
