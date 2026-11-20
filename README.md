# Cálculo Diferencial e Integral · Prototipo 1.5

Aplicación estática en español para estudiar matemática con teclado, MathML y lector de pantalla. Primer curso: Cálculo Diferencial e Integral. Prioridad: estudiante ciega que utiliza NVDA y MathCAT en Windows.

## Contenido y alcance

El catálogo dispone de once temas en las unidades 1 a 4: nueve incorporados desde el portafolio de límites, derivadas y aplicaciones, y los dos de integración existentes. No está completo el programa. La revisión docente del nuevo contenido está pendiente; las prácticas sin desarrollo y un ejemplo de logaritmos suspendido se identifican expresamente.

El material de integración v3 conserva 12 relaciones, 13 ejemplos, 5 ejercicios y 115 pasos. Reglas de integración permanece pendiente. Consulta [la incorporación y sus límites](docs/incorporacion-portafolio.md). Los documentos independientes y el LaTeX revisado están en `materials/portafolio-calculo/`.

Incluye temario adaptable, centro de herramientas modal, ayuda y recorrido voluntario, ubicación explícita, continuación local, preferencias, lectura progresiva/completa y atajos opcionales desactivados inicialmente. No incluye el futuro Explorador estructural de integrales.

## Ejecución

Requiere un navegador actual y un servidor estático local para los módulos ES; no hay servidor de aplicación ni autenticación. La búsqueda por voz es opcional y puede utilizar el servicio de reconocimiento del navegador; la búsqueda escrita y el curso funcionan sin ella.

Con Node.js 20 o posterior:

```sh
npm start
```

Abre <http://127.0.0.1:4173>. No requiere instalar dependencias para servir. También puedes usar `python3 -m http.server 4173 --bind 127.0.0.1` en la raíz. Abrir `index.html` directamente con `file://` no es una forma soportada de ejecutar módulos ES.

En el equipo de esta entrega, Node no está en el PATH y el comando python3 del sistema requiere herramientas de desarrollo que no están instaladas. Desde la carpeta del proyecto se puede usar el runtime disponible de Codex:

```sh
/Users/equipo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/serve.mjs
```

El servidor solo escucha en el equipo local. Para detenerlo, pulsa Control + C en esa terminal.

Recorrido sugerido: «Integración por sustitución» → «Ejemplos resueltos» → abrir pasos con Enter → «Práctica» → «Consultar la solución del ejercicio 4» → «Volver al ejercicio 4».

## Pruebas reproducibles

```sh
corepack pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm test
```

También se puede instalar con `npm install` (el archivo de bloqueo reproducible del proyecto es `pnpm-lock.yaml`). Para utilizar un Chrome ya instalado, define `PLAYWRIGHT_CHROME_PATH` con la ruta al ejecutable. La configuración levanta el servidor automáticamente si no existe uno en el puerto 4173. Resultados HTML en `playwright-report/index.html`; trazas de fallos en `test-results/`.

Las pruebas no sustituyen una auditoría WCAG ni una sesión real con NVDA. Consulta [evidencias y límites](docs/accesibilidad.md) y el [protocolo NVDA](docs/pruebas-nvda.md).

## Organización

- `index.html`, `styles.css`: estructura común, diálogos y diseño.
- `src/content.js`, `src/math.js`: contenidos identificables y MathML.
- `src/navigation.js`, `src/dialogs.js`: enlaces, historial, temario y foco.
- `src/preferences.js`, `src/storage.js`, `src/shortcuts.js`: opciones y persistencia tolerante a fallos.
- `src/app.js`: inicio; monta los contenidos una sola vez.
- `scripts/serve.mjs`: servidor de desarrollo local.
- `tests/catalog.spec.js`, `playwright.config.js`: comprobaciones automatizadas.
- `docs/`: arquitectura, accesibilidad, protocolo manual, guía y capturas.

## Mantenimiento

Lee `AGENTS.md`. Conserva los identificadores de temas y ejercicios: los fragmentos se comparten y guardan localmente. Al añadir contenido usa el contrato `topics` y el inventario `curriculum` de `src/content.js`, sin cambiar el motor de navegación. Registra el origen y cambios académicos. No uses cadenas procedentes del usuario como HTML: los contenidos son módulos locales de confianza.

## Publicación y actualizaciones

Repositorio: [sortizg11/catalogo-matematica-accesible](https://github.com/sortizg11/catalogo-matematica-accesible).

Dirección del sitio: [Cálculo Diferencial e Integral](https://sortizg11.github.io/catalogo-matematica-accesible/).

Publicación autorizada por el usuario. GitHub Pages sirve la rama `main`, carpeta raíz `/`. `.nojekyll` permite servir directamente HTML, CSS y módulos JavaScript. Cada actualización de `main` desencadena una nueva publicación. No requiere base de datos, servidor de aplicación ni pago de dominio.

Consulta [cómo publicar y actualizar paso a paso](docs/publicacion.md). La publicación no implica compatibilidad verificada con NVDA; la evaluación real en Windows sigue pendiente.

## Intervención posterior al piloto 1

Marcadores explícitos por apartado y paso, orientación jerárquica basada en destinos/foco real, búsqueda escrita y por voz bajo demanda, edición autosuficiente y contenedores MathML enfocables con Tab solo cuando desbordan. No se incorporó MathJax sin una mejora demostrada. La lectura real con NVDA/MathCAT y el micrófono siguen sujetos a evaluación en Windows.

- `src/study.js`: destinos de subtítulos, marcadores y regiones de fórmulas.
- `src/search.js`: índice local de títulos, resultados por texto/voz, cancelación y errores.
- `scripts/editorial.py`: registro explícito de cambios editoriales, sin cambios en MathML.
- `tests/fixtures/math-baseline.html`: seis casos aislados para comparación manual.
- `output/pdf/CDI-instrumento-prueba-2.pdf` y `.html`: instrumento en blanco, imprimible y alternativa semántica.

### Lighthouse y objetivo de conformidad

Objetivo WCAG 2.2 AA (criterios A y AA aplicables), sin declaración de conformidad. Lighthouse no acredita niveles WCAG. Con el servidor activo: `pnpm audit:accessibility`. Si Chrome no se detecta, definir `CHROME_PATH`. Se guardan HTML y JSON de cuatro vistas en móvil y escritorio en `docs/evidencia/lighthouse/`. El comando considera un objetivo interno 100/100, que no sustituye revisión manual ni lectura matemática. Consultar `docs/evaluacion-wcag.md`.

## Inicio y documentación de la versión 1.4

La entrada principal es una búsqueda escrita y por voz opcional. Se conserva el temario como alternativa. El permiso de micrófono no garantiza la disponibilidad del servicio de reconocimiento; las pruebas reales de voz y NVDA siguen pendientes.

- [Manual provisional](docs/manual-usuario-borrador.html).
- [Cuadro de cambios y pendientes](docs/estado-cambios-2026-11-19.html).
- [Revisión bibliográfica](docs/revision-bibliografica-accesibilidad.html).
- [Registro de publicación](docs/publicaciones.md).

## Voz y evaluación de uso en la versión 1.5

El botón conserva el foco y distingue iniciar, terminar dictado y cancelar. La revisión del texto antes de navegar es opcional. Los resultados múltiples reciben foco en su primer enlace. No se garantiza disponibilidad del servicio de voz del navegador ni pronunciación matemática sin prueba real.

- [Instrumento de evaluación con persona ciega en HTML](output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.html).
- [Word editable](output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.docx).
- [PDF para imprimir](output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.pdf).
