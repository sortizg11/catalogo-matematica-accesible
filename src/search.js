import {curriculum} from './content.js';
import {navigate} from './navigation.js';
import {closeDialog} from './dialogs.js';
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
export function initSearch(){
  let cancelActive=null;
  bindSearch('');bindSearch('home-');
  function bindSearch(prefix){
  const dialog=document.getElementById('search'), scope=prefix?document.querySelector('[data-view="inicio"]'):dialog;
  const visible=()=>prefix?!scope.hidden:dialog.open;
  const input=document.getElementById(prefix+'search-query');
  const status=document.getElementById(prefix+'search-status'), results=document.getElementById(prefix+'search-results');
  const start=document.getElementById(prefix+'voice-start'), stop=document.getElementById(prefix+'voice-stop');
  const headings=[...document.querySelectorAll('[data-view] h1[id],[data-view] h2[id],[data-view] h3[id],[data-view] h4[id]')].filter(el=>el.closest('[data-view]').dataset.view!=='inicio').map(el=>({id:el.id,title:el.textContent.trim(),context:[el.closest('[data-view]').querySelector('h1').textContent, el.closest('.academic-item')?.querySelector('h3')?.textContent].filter(Boolean).join(' · ')}));
  const pending=[];
  const collect=items=>items.forEach(item=>{if(item.children)collect(item.children);else if(!item.topic)pending.push(item.label);});
  curriculum.forEach(unit=>collect(unit.items));
  function search(){
    results.replaceChildren();
    let query=normalize(input.value);
    // Texto y voz comparten comandos de búsqueda; no interpretamos conversaciones.
    query=query.replace(/^(?:por favor )?(?:quiero |quisiera |puedes |podrias )?/, '');
    query=query.replace(/^(?:buscar|busca|buscame|mostrar|muestra|abrir|abre|ir a|ir al|llevarme a|llevame a)\s+/, '');
    query=query.replace(/^(?:el |la |al )?(?:capitulo|tema|apartado|seccion)\s+(?:de |del |sobre )?/, '');
    if(!query){status.textContent='Escribe o dicta un título para buscar.';return;}
    const aliases={'regla de la cadena':'cadena--tema','derivacion implicita':'implicita--tema','integracion por sustitucion':'sustitucion--tema'};
    if(aliases[query] && document.getElementById(aliases[query])){navigate(aliases[query]);return;}
    const exact=headings.filter(h=>normalize(h.title)===query);
    const words=query.split(' ').filter(w=>!['de','del','la','las','el','los','a','al','por','en'].includes(w));
    const found=exact.length?exact:headings.filter(h=>words.length && words.every(w=>normalize(h.title).split(' ').includes(w)));
    if(found.length===1){navigate(found[0].id);return;}
    status.textContent=found.length?`${found.length} resultados. Elige un destino.`:pending.some(p=>normalize(p).includes(query))?'Ese contenido está pendiente. Puedes elegir otro título.':'No se encontró un destino. Prueba con «sustitución», «teoría» o «concepto de integral indefinida».';
    for(const entry of found){const li=document.createElement('li'),a=document.createElement('a');a.href='#'+entry.id;a.textContent=`${entry.title} · ${entry.context}`;li.append(a);results.append(li);}
  }
  document.getElementById(prefix+'search-form').addEventListener('submit',e=>{e.preventDefault();search();});
  // Escape cierra este diálogo, incluso desde un input search con texto.
  if(!prefix) dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeDialog(dialog);}});
  const Speech=window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition=null, generation=0, timeout;
  function finish(abort=true){
    generation++;clearTimeout(timeout);const current=recognition;recognition=null;
    if(abort && current)try{current.abort();}catch{}
    start.disabled=!Speech;stop.hidden=true;
  }
  if(!Speech){start.disabled=true;status.textContent='Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';}
  start.addEventListener('click',()=>{
    cancelActive?.();finish();cancelActive=()=>{finish();status.textContent='Escucha cancelada.';};const token=generation;try{recognition=new Speech();}catch{status.textContent='No se pudo iniciar el reconocimiento. Puedes buscar escribiendo.';input.focus();return;}recognition.lang='es';recognition.continuous=false;recognition.interimResults=true;recognition.maxAlternatives=1;
    start.disabled=true;stop.hidden=false;stop.focus();status.textContent='Buscador por voz escuchando. Di, por ejemplo, «buscar derivación implícita», o cancela la escucha.';
    recognition.onresult=e=>{if(token!==generation || !visible())return;const result=e.results?.[e.resultIndex??0];const transcript=result?.[0]?.transcript;if(result?.isFinal===false){if(transcript)input.value=transcript;return;}finish();input.focus();if(typeof transcript!=='string'||!transcript.trim()){status.textContent='No se reconoció un título. Puedes volver a intentarlo o escribir.';return;}input.value=transcript;search();};
    recognition.onerror=e=>{if(token!==generation)return;finish(false);input.focus();status.textContent=e.error==='not-allowed'?'No se permitió usar el micrófono. Puedes buscar escribiendo.':e.error==='service-not-allowed'?'Este navegador no permite el servicio de reconocimiento, aunque hayas concedido permiso al micrófono. Abre el catálogo en un navegador externo o busca escribiendo.':e.error==='no-speech'?'No se detectó voz. Comprueba el micrófono seleccionado o escribe la búsqueda.':e.error==='network'?'El servicio de reconocimiento no pudo conectarse. Tener permiso de micrófono no garantiza este servicio. Si estás en el navegador del chat, abre el catálogo en un navegador externo para comparar; también puedes buscar escribiendo.':e.error==='audio-capture'?'No se recibió audio del micrófono. Comprueba el dispositivo seleccionado o escribe.':e.error==='language-not-supported'?'El servicio no admite el idioma español en este navegador. Puedes buscar escribiendo.':'No se pudo reconocer la voz. Puedes buscar escribiendo.';};
    recognition.onnomatch=()=>{if(token!==generation)return;finish(false);input.focus();status.textContent='El servicio no reconoció un título. Prueba una frase breve o escribe la búsqueda.';};
    recognition.onaudiostart=()=>{if(token===generation)status.textContent='Micrófono conectado. Di el tema y espera el resultado.';};
    recognition.onend=()=>{if(token!==generation)return;finish(false);input.focus();status.textContent=input.value.trim()?'La escucha terminó sin resultado final. Revisa el texto del campo y pulsa Buscar, o vuelve a intentarlo.':'El servicio terminó sin devolver una transcripción. El permiso de micrófono no garantiza el reconocimiento. Si estás en el navegador del chat, prueba abrir el catálogo en un navegador externo o busca escribiendo.';};
    try{recognition.start();timeout=setTimeout(()=>{if(token!==generation)return;finish();input.focus();status.textContent='La escucha terminó. Puedes volver a intentarlo o escribir.';},15000);}catch{finish();input.focus();status.textContent='No se pudo iniciar el micrófono. Puedes buscar escribiendo.';}
  });
  stop.addEventListener('click',()=>{finish();input.focus();status.textContent='Escucha cancelada.';});
  if(!prefix) dialog.addEventListener('close',()=>{finish();input.value='';results.replaceChildren();status.textContent=Speech?'':'Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';});
  addEventListener('hashchange',()=>{if(!visible())finish();});
  if(prefix) dialog.addEventListener('toggle',()=>{if(dialog.open)finish();});
  }
}
