import {curriculum} from './content.js';
import {navigate} from './navigation.js';
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
    instructions.textContent = '1. Pulsa Iniciar búsqueda por voz. 2. Espera «Escuchando». 3. Di el tema. Puedes terminar el dictado con el mismo botón o cancelar.';
    start.parentElement.after(instructions);
    start.setAttribute('aria-describedby', instructions.id);
    const reviewLabel = document.createElement('label');
    reviewLabel.className = 'voice-review';
    const review = document.createElement('input');
    review.type = 'checkbox';
    review.id = prefix + 'voice-review';
    reviewLabel.append(review, ' Revisar dictado antes de abrir un tema');
    instructions.after(reviewLabel);
    const jump = document.createElement('a');
    jump.href = '#' + results.id;
    jump.hidden = true;
    jump.addEventListener('click', event => {
      event.preventDefault();
      results.querySelector('a')?.focus();
    });
    results.before(jump);

    function search() {
      results.replaceChildren();
      jump.hidden = true;
      let query = normalize(input.value)
        .replace(/^(?:por favor )?(?:quiero |quisiera |puedes |podrias )?/, '')
        .replace(/^(?:buscar|busca|buscame|mostrar|muestra|abrir|abre|ir a|ir al|llevarme a|llevame a)\s+/, '')
        .replace(/^(?:el |la |al )?(?:capitulo|tema|apartado|seccion)\s+(?:de |del |sobre )?/, '');
      if (!query) { status.textContent = 'Escribe o dicta un título para buscar.'; return; }
      if (aliases[query] && document.getElementById(aliases[query])) { navigate(aliases[query]); return; }
      const exact = headings.filter(h => normalize(h.title) === query);
      const words = query.split(' ').filter(w => !['de','del','la','las','el','los','a','al','por','en'].includes(w));
      const found = exact.length ? exact : headings.filter(h => words.length && words.every(w => normalize(h.title).split(' ').includes(w)));
      if (found.length === 1) { navigate(found[0].id); return; }
      status.textContent = found.length ? `${found.length} resultados. Elige un destino.`
        : pending.some(p => normalize(p).includes(query)) ? 'Ese contenido está pendiente. Puedes elegir otro título.'
        : 'No se encontró un destino. Prueba con «sustitución», «teoría» o «concepto de integral indefinida».';
      for (const entry of found) {
        const li = document.createElement('li'), link = document.createElement('a');
        link.href = '#' + entry.id;
        link.textContent = `${entry.title} · ${entry.context}`;
        li.append(link); results.append(li);
      }
      if (found.length) {
        jump.textContent = `Ir a los ${found.length} resultados`;
        jump.hidden = false;
        results.querySelector('a').focus();
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
    let recognition = null, generation = 0, timer = null, phase = 'idle';
    function finish(abort = true) {
      generation++;
      clearTimeout(timer);
      const current = recognition;
      recognition = null;
      phase = 'idle';
      if (abort && current) try { current.abort(); } catch {}
      start.disabled = !Speech;
      start.removeAttribute('aria-disabled');
      start.textContent = 'Iniciar búsqueda por voz';
      cancel.hidden = true;
    }
    function endWithoutFinal(message) {
      finish();
      input.focus();
      status.textContent = input.value.trim()
        ? message + ' Revisa el texto del campo y pulsa Buscar tema, o vuelve a dictar.'
        : message + ' Puedes volver a dictar o escribir el tema.';
    }
    finish(false);
    if (!Speech) status.textContent = 'Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';

    start.addEventListener('click', () => {
      if (phase === 'finishing') return;
      if (recognition) {
        phase = 'finishing';
        start.textContent = 'Procesando dictado';
        start.setAttribute('aria-disabled', 'true');
        status.textContent = 'Dictado terminado. Esperando el texto reconocido.';
        clearTimeout(timer);
        const token = generation;
        timer = setTimeout(() => { if (token === generation) endWithoutFinal('No llegó un resultado final.'); }, 5000);
        try { recognition.stop(); } catch { endWithoutFinal('El navegador no pudo terminar el dictado.'); }
        return;
      }
      cancelActive?.();
      finish();
      cancelActive = () => { finish(); status.textContent = 'Escucha cancelada.'; };
      const token = generation;
      let partial = '';
      try { recognition = new Speech(); } catch { endWithoutFinal('No se pudo iniciar el reconocimiento.'); return; }
      recognition.lang = 'es';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      phase = 'connecting';
      start.textContent = 'Terminar dictado';
      cancel.hidden = false;
      // El foco permanece en el botón activado; no se desplaza a Cancelar.
      status.textContent = 'Conectando el reconocimiento. Si aparece un permiso, respóndelo. Espera el aviso «Escuchando».';
      const ready = () => {
        if (token !== generation || phase !== 'connecting') return;
        phase = 'listening';
        clearTimeout(timer);
        timer = setTimeout(() => { if (token === generation) endWithoutFinal('Se alcanzó el límite de 15 segundos de escucha.'); }, 15000);
        status.textContent = 'Escuchando. Di el tema.';
      };
      recognition.onstart = ready;
      recognition.onaudiostart = ready;
      recognition.onresult = event => {
        if (token !== generation || !visible()) return;
        const result = event.results?.[event.resultIndex ?? 0];
        const text = result?.[0]?.transcript;
        if (typeof text !== 'string' || !text.trim()) { endWithoutFinal('No se reconoció un título.'); return; }
        input.value = text;
        partial = text;
        if (result.isFinal === false) return;
        finish();
        input.focus();
        if (review.checked) status.textContent = `Texto reconocido: «${text}». Revísalo y pulsa Buscar tema.`;
        else search();
      };
      recognition.onerror = event => {
        if (token !== generation) return;
        finish(false);
        input.focus();
        const messages = {
          'not-allowed': 'No se permitió usar el micrófono. Puedes buscar escribiendo.',
          'service-not-allowed': 'Este navegador no permite el servicio de reconocimiento, aunque hayas concedido permiso al micrófono. Abre el catálogo en un navegador externo o busca escribiendo.',
          'network': 'El servicio de reconocimiento no pudo conectarse. El permiso de micrófono no garantiza este servicio. Prueba un navegador externo o busca escribiendo.',
          'audio-capture': 'No se recibió audio del micrófono. Comprueba el dispositivo seleccionado o escribe.',
          'no-speech': 'No se detectó voz. Comprueba el micrófono o escribe la búsqueda.',
          'language-not-supported': 'El servicio no admite español en este navegador. Puedes buscar escribiendo.'
        };
        status.textContent = messages[event.error] || 'No se pudo reconocer la voz. Puedes volver a intentarlo o escribir.';
      };
      recognition.onnomatch = () => { if (token === generation) endWithoutFinal('El servicio no reconoció un título.'); };
      recognition.onend = () => {
        if (token !== generation) return;
        // Un cierre no convierte un texto provisional en resultado confirmado.
        endWithoutFinal(partial || input.value.trim() ? 'La escucha terminó sin resultado final.' : 'La escucha terminó sin devolver una transcripción.');
      };
      try {
        timer = setTimeout(() => { if (token === generation) endWithoutFinal('El servicio no confirmó la conexión en 20 segundos.'); }, 20000);
        recognition.start();
      } catch { endWithoutFinal('No se pudo iniciar el micrófono.'); }
    });
    cancel.addEventListener('click', () => { finish(); input.focus(); status.textContent = 'Escucha cancelada.'; });
    if (!prefix) dialog.addEventListener('close', () => {
      finish(); input.value = ''; results.replaceChildren(); jump.hidden = true;
      status.textContent = Speech ? '' : 'Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';
    });
    addEventListener('hashchange', () => { if (!visible()) finish(); });
    if (prefix) dialog.addEventListener('toggle', () => { if (dialog.open) finish(); });
  }
}
