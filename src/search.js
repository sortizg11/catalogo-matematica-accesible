import {curriculum} from './content.js';
import {navigate} from './navigation.js';
import {closeDialog} from './dialogs.js';
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
export function initSearch(){
  const dialog=document.getElementById('search'), input=document.getElementById('search-query');
  const status=document.getElementById('search-status'), results=document.getElementById('search-results');
  const start=document.getElementById('voice-start'), stop=document.getElementById('voice-stop');
  const headings=[...document.querySelectorAll('[data-view] h1[id],[data-view] h2[id],[data-view] h3[id],[data-view] h4[id]')].filter(el=>el.closest('[data-view]').dataset.view!=='inicio').map(el=>({id:el.id,title:el.textContent.trim(),context:[el.closest('[data-view]').querySelector('h1').textContent, el.closest('.academic-item')?.querySelector('h3')?.textContent].filter(Boolean).join(' · ')}));
  const pending=[];
  const collect=items=>items.forEach(item=>{if(item.children)collect(item.children);else if(!item.topic)pending.push(item.label);});
  curriculum.forEach(unit=>collect(unit.items));
  function search(){
    results.replaceChildren();
    let query=normalize(input.value).replace(/^(ir a |ir al |buscar |mostrar |abrir |llevarme a )/,'');
    if(!query){status.textContent='Escribe o dicta un título para buscar.';return;}
    const exact=headings.filter(h=>normalize(h.title)===query);
    const words=query.split(' ').filter(w=>!['de','del','la','las','el','los','a','al','por','en'].includes(w));
    const found=exact.length?exact:headings.filter(h=>words.length && words.every(w=>normalize(h.title).split(' ').includes(w)));
    if(found.length===1){navigate(found[0].id);return;}
    status.textContent=found.length?`${found.length} resultados. Elige un destino.`:pending.some(p=>normalize(p).includes(query))?'Ese contenido está pendiente. Puedes elegir otro título.':'No se encontró un destino. Prueba con «sustitución», «teoría» o «concepto de integral indefinida».';
    for(const entry of found){const li=document.createElement('li'),a=document.createElement('a');a.href='#'+entry.id;a.textContent=`${entry.title} · ${entry.context}`;li.append(a);results.append(li);}
  }
  document.getElementById('search-form').addEventListener('submit',e=>{e.preventDefault();search();});
  // Escape cierra este diálogo, incluso desde un input search con texto.
  dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeDialog(dialog);}});
  const Speech=window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition=null, generation=0, timeout;
  function finish(abort=true){
    generation++;clearTimeout(timeout);const current=recognition;recognition=null;
    if(abort && current)try{current.abort();}catch{}
    start.disabled=!Speech;stop.hidden=true;
  }
  if(!Speech){start.disabled=true;status.textContent='Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';}
  start.addEventListener('click',()=>{
    finish();const token=generation;recognition=new Speech();recognition.lang='es-CR';recognition.continuous=false;recognition.interimResults=false;recognition.maxAlternatives=1;
    start.disabled=true;stop.hidden=false;stop.focus();status.textContent='Escuchando. Di el título o cancela la escucha.';
    recognition.onresult=e=>{if(token!==generation || !dialog.open)return;input.value=e.results[0][0].transcript;finish();input.focus();search();};
    recognition.onerror=e=>{if(token!==generation)return;finish(false);input.focus();status.textContent=e.error==='not-allowed' || e.error==='service-not-allowed'?'No se permitió usar el micrófono. Puedes buscar escribiendo.':e.error==='no-speech'?'No se detectó voz. Puedes intentarlo de nuevo o escribir.':'No se pudo reconocer la voz. Puedes buscar escribiendo.';};
    recognition.onend=()=>{if(token!==generation)return;finish(false);input.focus();status.textContent='La escucha terminó sin un destino. Puedes volver a intentarlo o escribir.';};
    try{recognition.start();timeout=setTimeout(()=>{if(token!==generation)return;finish();input.focus();status.textContent='La escucha terminó. Puedes volver a intentarlo o escribir.';},15000);}catch{finish();input.focus();status.textContent='No se pudo iniciar el micrófono. Puedes buscar escribiendo.';}
  });
  stop.addEventListener('click',()=>{finish();input.focus();status.textContent='Escucha cancelada.';});
  dialog.addEventListener('close',()=>{finish();input.value='';results.replaceChildren();status.textContent=Speech?'':'Este navegador no ofrece reconocimiento de voz. Puedes buscar escribiendo.';});
}
