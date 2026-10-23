# Catálogo de Matemática · Prototipo 1.0

Aplicación estática en español para estudiar matemática con teclado, MathML y lector de pantalla. Primer curso: Cálculo Diferencial e Integral. Prioridad: estudiante ciega que utiliza NVDA y MathCAT en Windows.

## Contenido y alcance

El directorio local inicial estaba vacío. Al conectar el repositorio indicado por el usuario se localizó **`Integrales-Primera-parte-accesible.html`**. Se conserva intacto; todavía no se ha migrado su contenido a los temas del prototipo. Las dos muestras originales de este prototipo están identificadas como provisionales y requieren revisión docente. Hay un tema de integración inmediata y uno de sustitución, cada uno con teoría, ejemplo, ejercicio, procedimiento y respuesta. Los otros cinco temas están pendientes y no tienen enlaces ficticios.

Incluye temario adaptable, centro de herramientas modal, ayuda y recorrido voluntario, ubicación explícita, continuación local, preferencias, lectura progresiva/completa y atajos opcionales desactivados inicialmente. No incluye el futuro Explorador estructural de integrales.

## Ejecución

Requiere un navegador actual y un servidor estático local para los módulos ES; no hay servidor de aplicación, autenticación ni servicios externos en tiempo de ejecución.

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

Recorrido sugerido: «Estudiar sustitución» → «Ejemplos resueltos» → abrir pasos con Enter → «Práctica» → «Consultar la solución del ejercicio 1» → «Volver al ejercicio 1».

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

## Publicación posterior por HTTPS

Repositorio del proyecto: [sortizg11/catalogo-matematica-accesible](https://github.com/sortizg11/catalogo-matematica-accesible). El código se guarda en GitHub; no se ha activado la publicación del sitio mediante GitHub Pages. Para publicar, primero incorporar/revisar el material original y obtener autorización de uso y audiencia. Ejecutar las pruebas y la evaluación Windows antes de declarar compatibilidad.

Si nunca has usado GitHub, consulta la [guía breve del repositorio](docs/guia-github.md). Puedes solicitar cambios desde el chat sin editar archivos manualmente en GitHub.

1. Preparar una carpeta de distribución con `index.html`, `styles.css` y `src/`. No incluir `node_modules`, informes, material privado ni archivos de desarrollo.
2. GitHub Pages: subir esos archivos a un repositorio autorizado y configurar Pages para servir la carpeta o un artefacto de Actions. Habilitar HTTPS en la configuración. Los enlaces y recursos relativos permiten una subruta de repositorio.
3. Cloudflare Pages: crear un proyecto estático autorizado y cargar esa carpeta como salida. No necesita comando de compilación. Verificar HTTPS y la audiencia antes de compartir.
4. Probar enlaces profundos, almacenamiento y navegación en la URL final. No se requieren reglas de redirección de SPA: las rutas son fragmentos del mismo documento.

Los proveedores pueden cambiar su configuración; revisar su documentación vigente cuando se autorice la publicación.
