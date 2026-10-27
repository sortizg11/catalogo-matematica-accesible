# Arquitectura y decisiones

## Modelo de interfaz

HTML, CSS y módulos ES sin framework. Los artículos se generan una vez al inicio desde el módulo local de contenidos. Cada navegación cambia `hidden` en artículos existentes; abrir un paso no reemplaza el DOM. Solo un h1 académico está expuesto a la vez. Cabecera, navs con nombres diferenciados, main, aside y footer forman las regiones.

Fragmentos estables: `#sustitucion--tema`, `#sustitucion--teoria`, `#sustitucion--ejemplo-1`, `#sustitucion--ejercicio-1`, `#sustitucion--solucion-1`. El historial nativo conserva los cambios de destino. Los encabezados tienen tabindex −1, sin incorporarse a Tab, y reciben foco al navegar. Una visita inicial sin fragmento no mueve el foco. Un fragmento desconocido muestra el inicio.

El inventario curricular contiene los siete temas autorizados. Los cinco pendientes son texto, sin enlaces ni controles deshabilitados innecesarios. Las unidades se expanden con botones, `aria-expanded`, `aria-controls` y listas nativas; no hay roles menu o tree.

## Temario y diálogos

En escritorio el temario ocupa 17 rem y desaparece del diseño y de Tab cuando se contrae. Bajo 64 rem se mueve el mismo nav a un diálogo nativo; no se duplica. El panel móvil siempre comienza cerrado aunque se recuerde la preferencia de escritorio. Cambiar el ancho cierra el diálogo antes de trasladar el nav.

El centro de herramientas y preferencias usan `showModal()`: el navegador hace inerte el fondo y contiene el foco. Al cancelar se restaura el activador. Al cambiar a otro diálogo se conserva el activador exterior; al navegar se cierra y enfoca el encabezado. Escape se gestiona exclusivamente en el evento `cancel` del diálogo. No hay listener global de Escape que interfiera con MathCAT.

## Persistencia

Claves versionadas `catalogo-v1:preferences` y `catalogo-v1:last-location`. Solo se guardan opciones y un identificador académico. Todos los accesos están protegidos con try/catch y los valores de preferencias se validan. La ubicación cambia al navegar o al entrar un encabezado académico en el tercio superior de la ventana (IntersectionObserver); no se anuncia ni modifica el foco. El modo exploración de NVDA puede cambiar el cursor virtual sin desplazar visualmente el documento: la ubicación guardada no garantiza seguimiento de ese cursor.

No se conserva texto personal ni progreso evaluativo. Los cambios aplicados siguen funcionando en memoria si falla localStorage. Las pestañas son independientes hasta recargar; no hay sincronización en vivo.

## Contenido y matemática

`topics` contiene id, número, título, unidad, objetivo, teoría, ejemplo, pasos, resultado, ejercicio, solución y respuesta. El renderizador proporciona la misma estructura pedagógica a los temas. La futura migración debe conservar un registro de identificadores originales, dominio, enunciado, pasos y resultado.

Los auxiliares de `math.js` generan MathML real: mrow, mi, mn, mo, msup, mfrac, msqrt y msubsup. No se carga MathJax: todavía no hay evidencia de una mejora sobre MathML nativo para estos casos y evita añadir un árbol alternativo. Revisar esta decisión tras la evaluación NVDA/MathCAT. Las regiones de fórmula admiten desplazamiento horizontal con teclado; su nombre identifica la expresión y no reemplaza su estructura.

Proveniencia de todas las muestras: creación provisional, 23 de octubre de 2026. Inmediata: ∫3x² dx = x³ + C; ejercicio ∫4x³ dx = x⁴ + C. Sustitución: ∫2x(x²+1) dx = (x²+1)²/2 + C; ejercicio ∫2x(x²+3)² dx = (x²+3)³/3 + C. Todas para x real. Las primitivas se comprueban por derivación en el contenido. El documento original se localizó posteriormente en GitHub (blob 28c43c33505ad0daf05ecd7b0ef101f57efae6e1) y se conserva sin cambios. Su análisis académico y migración siguen pendientes; no se han registrado conclusiones sobre sus resultados. La revisión docente de muestras, lenguaje y notación sigue pendiente.

## Extensión futura

El Explorador estructural de integrales está documentado, no implementado ni anunciado como herramienta disponible. Su contrato deberá acordarse con el docente y complementar MathCAT sin capturar sus teclas. No se incorporan técnicas adicionales.

## Intervención 1.2

`study.js` asigna destinos a subtítulos que no los tenían, añade marcadores explícitos y mantiene fuera de Tab las regiones matemáticas sin desbordamiento. `navigation.js` distingue ubicación conocida por foco/destino de marcador explícito persistente; no observa visibilidad para sobrescribir el punto de estudio. No puede leer el cursor virtual de NVDA.

`search.js` indexa encabezados disponibles y reconoce contenidos pendientes. Texto y voz comparten resolución de destinos. SpeechRecognition se detecta por capacidad, solo se crea al pulsar el botón y se cancela al cerrar; un contador descarta respuestas tardías. El catálogo no almacena voz ni consultas. El navegador puede procesar audio externamente. No se incluye síntesis de voz ni dependencia de reconocimiento en el sitio.

`editorial.py` documenta sustituciones de redacción para que el importador no reintroduzca referencias visuales o a páginas. La fuente permanece intacta y `verify_migration.py` comprueba conservación literal del MathML. Los títulos duplicados del ejemplo 3 pasan a a/b sin cambiar sus identificadores e3a/e3b.
