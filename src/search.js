import {curriculum} from './content.js';
import {navigate} from './navigation.js?v=2.1.1';
import {closeDialog} from './dialogs.js';

const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const aliases = {
  'regla de la cadena': 'cadena--tema',
  'derivacion implicita': 'implicita--tema',
  'integracion por sustitucion': 'sustitucion--tema'
};

export function initSearch() {
  let cancelActive = null;
  const headings = [...document.querySelectorAll('[data-view] h1[id],[data-view] h2[id],[data-view] h3[id],[data-view] h4[id]')]
    .filter(el => el.closest('[data-view]').dataset.view !== 'inicio')
    .map(el => ({
      id: el.id, title: el.textContent.trim(),
      context: [el.closest('[data-view]').querySelector('h1').textContent,
        el.closest('.academic-item')?.querySelector('h3')?.textContent].filter(Boolean).join(' · ')
    }));
  const pending = [];
  const collect = items => items.forEach(item => {
    if (item.children) collect(item.children);
    else if (!item.topic) pending.push(item.label);
  });
  curriculum.forEach(unit => collect(unit.items));
  bindSearch('');
  bindSearch('home-');

  function bindSearch(prefix) {
    const dialog = document.getElementById('search');
    const scope = prefix ? document.querySelector('[data-view="inicio"]') : dialog;
    const visible = () => prefix ? !scope.hidden : dialog.open;
    const input = document.getElementById(prefix + 'search-query');
    const status = document.getElementById(prefix + 'search-status');
    const results = document.getElementById(prefix + 'search-results');
    const start = document.getElementById(prefix + 'voice-start');
    const cancel = document.getElementById(prefix + 'voice-stop');
    const form = document.getElementById(prefix + 'search-form');
    form.querySelector('[type="submit"]').textContent = 'Buscar tema';
    start.classList.add('voice-primary');
    const instructions = document.createElement('p');
    instructions.id = prefix + 'voice-instructions';
    instructions.className = 'voice-instructions';
    instructions.textContent = 'Pulsa el micrófono, espera «Escuchando» y di el tema. Al terminar de hablar, espera unos segundos y elige el resultado. No necesitas detener el dictado.';
    start.parentElement.after(instructions);
    start.setAttribute('aria-describedby', instructions.id);
    const jump = document.createElement('a');
    jump.href = '#' + results.id;
    jump.hidden = true;
    jump.addEventListener('click', event => {
      event.preventDefault();
      results.querySelector('a')?.focus();
    });
    results.before(jump);

    function search(preview = false) {
      results.replaceChildren();
      jump.hidden = true;
      let query = normalize(input.value)
        .replace(/^(?:por favor )?(?:quiero |quisiera |puedes |podrias )?/, '')
        .replace(/^(?:buscar|busca|buscame|mostrar|muestra|abrir|abre|ir a|ir al|llevarme a|llevame a)\s+/, '')
        .replace(/^(?:el |la |al )?(?:capitulo|tema|apartado|seccion)\s+(?:de |del |sobre )?/, '');
      if (!query) { status.textContent = 'Escribe o dicta un título para buscar.'; return; }
      const alias = aliases[query] && document.getElementById(aliases[query]);
      if (alias && !preview) { navigate(alias.id); return; }
      const exact = headings.filter(h => normalize(h.title) === query);
      const words = query.split(' ').filter(w => !['de','del','la','las','el','los','a','al','por','en'].includes(w));
      const found = alias ? headings.filter(h => h.id === alias.id) : exact.length ? exact : headings.filter(h => words.length && words.every(w => normalize(h.title).split(' ').includes(w)));
      if (found.length === 1 && !preview) { navigate(found[0].id); return; }
      status.textContent = found.length ? `${found.length} resultados. Elige un destino.`
        : pending.some(p => normalize(p).includes(query)) ? 'Ese contenido está pendiente. Puedes elegir otro título.'
        : 'No se encontró un destino. Prueba con «sustitución», «teoría» o «concepto de integral indefinida».';
      if (preview) status.textContent = `Texto reconocido: «${input.value}». ` + (found.length ? `${found.length === 1 ? 'Tema encontrado' : found.length + ' resultados'}: ${found.map(h=>h.title).join('; ')}. Pulsa el enlace para abrirlo, o corrige el texto y pulsa Buscar tema.` : status.textContent);
      for (const entry of found) {
        const li = document.createElement('li'), link = document.createElement('a');
        link.href = '#' + entry.id;
        link.textContent = `${entry.title} · ${entry.context}`;
        li.append(link); results.append(li);
      }
      if (found.length) {
        jump.textContent = `Ir a los ${found.length} resultados`;
        jump.hidden = preview;
        if (!preview) results.querySelector('a').focus();
      }
    }
    form.addEventListener('submit', event => {
      event.preventDefault();
      finish();
      search();
    });
    if (!prefix) dialog.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); closeDialog(dialog); }
    });

    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null, generation = 0, timer = null, silenceTimer = null;
    let phase = 'idle';
    status.setAttribute('aria-atomic', 'true');
    function finish(abort = true) {
      generation++;
      clearTimeout(timer);
      clearTimeout(silenceTimer);
      const current = recognition;
      recognition = null;
      phase = 'idle';
      if (abort && current) try { current.abort(); } catch {}
      start.disabled = !Speech;
      start.textContent = 'Iniciar búsqueda por voz';
      cancel.hidden = true;
    }
    function endWithoutFinal(message) {
      finish();
      input.focus();
      status.textContent = message + ' Escribe el tema o usa el dictado del dispositivo en el campo de búsqueda.';
    }
    finish(false);
    if (!Speech) status.textContent = 'La búsqueda por voz no está disponible en este navegador. Escribe o usa el dictado del dispositivo en el campo de búsqueda.';

    start.addEventListener('click', () => {
      // El mismo botón permite cancelar, pero el cierre normal es automático.
      if (recognition) { finish(); status.textContent = 'Escucha cancelada.'; return; }
      cancelActive?.();
      finish();
      cancelActive = () => { if (recognition) { finish(); status.textContent = 'Escucha cancelada.'; } };
      const token = generation;
      let transcript = '';
      results.replaceChildren(); jump.hidden = true;
      const complete = () => {
        if (token !== generation || !visible()) return;
        if (!transcript.trim()) { endWithoutFinal('No se recibió una transcripción.'); return; }
        input.value = transcript.trim();
        finish();
        // Un solo anuncio del resultado, sin voz propia ni cambio de página/foco.
        search(true);
      };
      const waitForSilence = () => {
        clearTimeout(silenceTimer);
        silenceTimer = setTimeout(complete, 3500);
      };
      const connect = () => {
        if (token !== generation || !visible()) return;
        try { recognition = new Speech(); } catch { endWithoutFinal('No se pudo iniciar el reconocimiento.'); return; }
        const current = recognition;
        const valid = () => token === generation && recognition === current && visible();
        // Perfil de la versión 1.4: una búsqueda breve en español.
        recognition.lang = 'es';
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;
        phase = 'connecting';
        start.textContent = 'Cancelar búsqueda por voz';
        cancel.hidden = false;
        status.textContent = 'Conectando el micrófono. Si aparece un permiso, respóndelo. Espera «Escuchando».';
        const ready = () => {
          if (!valid() || phase !== 'connecting') return;
          phase = 'listening';
          clearTimeout(timer);
          timer = setTimeout(() => transcript ? complete() : endWithoutFinal('No se detectó un tema en 20 segundos.'), 20000);
          status.textContent = 'Escuchando. Di el tema y deja de hablar para buscar.';
        };
        recognition.onstart = ready;
        recognition.onaudiostart = ready;
        recognition.onspeechstart = () => { if (valid()) clearTimeout(silenceTimer); };
        recognition.onspeechend = () => { if (valid() && transcript) waitForSilence(); };
        recognition.onresult = event => {
          if (!valid()) return;
          // La lista contiene los resultados acumulados de esta conexión.
          const parts = Array.from(event.results || []).map(result => result[0]?.transcript || '');
          const text = parts.join(' ').trim();
          if (!text) return;
          transcript = text;
          input.value = transcript;
          waitForSilence();
        };
        recognition.onerror = event => {
          if (!valid()) return;
          const messages = {
            'not-allowed': 'No se permitió usar el micrófono. Revisa el permiso del sitio.',
            'service-not-allowed': 'Este navegador no permite el servicio de reconocimiento. Abre el catálogo en un navegador externo.',
            'network': 'No se pudo conectar con el servicio de reconocimiento. Comprueba la conexión o prueba con otro navegador.',
            'audio-capture': 'No se recibió audio. Comprueba el micrófono seleccionado.',
            'no-speech': 'No se detectó voz.',
            'language-not-supported': 'El servicio no admite el idioma de dictado en este navegador.'
          };
          endWithoutFinal(messages[event.error] || 'No se pudo reconocer la voz.');
        };
        recognition.onnomatch = () => { if (valid()) endWithoutFinal('No se reconoció un tema.'); };
        recognition.onend = () => {
          if (!valid()) return;
          clearTimeout(timer);
          if (transcript) { if (!silenceTimer) waitForSilence(); return; }
          // Cada sesión nace del clic original; onend no inicia otra escucha.
          endWithoutFinal('La escucha terminó sin devolver texto.');
        };
        try {
          clearTimeout(timer);
          timer = setTimeout(() => { if (valid()) endWithoutFinal('El servicio de voz no respondió.'); }, 20000);
          recognition.start();
        } catch { endWithoutFinal('No se pudo iniciar el micrófono.'); }
      };
      connect();
    });
    scope.addEventListener('keydown', event => {
      if (event.key === 'Escape' && recognition && prefix) {
        event.preventDefault(); finish(); input.focus(); status.textContent = 'Escucha cancelada.';
      }
    });
    input.addEventListener('input', () => { if (recognition) { finish(); status.textContent = 'Dictado cancelado. Puedes editar la búsqueda.'; } });
    cancel.addEventListener('click', () => { finish(); input.focus(); status.textContent = 'Escucha cancelada.'; });
    if (!prefix) dialog.addEventListener('close', () => {
      finish(); input.value = ''; results.replaceChildren(); jump.hidden = true;
      status.textContent = Speech ? '' : 'Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';
    });
    addEventListener('hashchange', () => { if (!visible()) finish(); });
    if (prefix) dialog.addEventListener('toggle', () => { if (dialog.open) finish(); });
  }
}
