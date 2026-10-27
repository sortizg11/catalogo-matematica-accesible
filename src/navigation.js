import { topics, sections, curriculum, routeAliases } from './content.js';
import { renderCurriculumItems, topicInUnit } from './curriculum.js';
import { read, write } from './storage.js';
import { prefs, setPreference } from './preferences.js';
import { openDialog, closeDialog } from './dialogs.js';
export const narrow = matchMedia('(max-width:64rem)');
let currentTopic = 'introduccion';
let locationId = 'inicio';
let memoryBookmark = null;
export const topicId = () => currentTopic;
export function buildNavigation() {
  document.querySelector('#nav-slot').innerHTML = `<nav class="syllabus" id="temario" aria-label="Temario académico"><p class="nav-kicker">Tu curso</p><p class="course-name">Cálculo Diferencial<br>e Integral</p>${curriculum.map(unit=>`<button class="unit-toggle" id="unit-${unit.id}" aria-expanded="${unit.id==='4'}" aria-controls="unit-list-${unit.id}">${unit.title}</button><ul id="unit-list-${unit.id}" ${unit.id==='4'?'':'hidden'}>${renderCurriculumItems(unit.items)}</ul>`).join('')}<a href="#inicio">Volver al catálogo</a></nav>`;
  document.querySelectorAll('.unit-toggle').forEach(button=>button.addEventListener('click',()=> {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded',String(open));document.getElementById(button.getAttribute('aria-controls')).hidden=!open;
  }));
}
export function syncMenu() {
  const nav = document.getElementById('temario');
  const dialog = document.getElementById('menu-dialog');
  if(dialog.open) closeDialog(dialog);
  document.getElementById(narrow.matches?'mobile-nav-slot':'nav-slot').append(nav);
  document.getElementById('sidebar').hidden = narrow.matches || !prefs.menu;
  document.body.classList.toggle('menu-closed',narrow.matches || !prefs.menu);
  updateMenuButton();
}
function updateMenuButton() {
  const open = narrow.matches ? document.getElementById('menu-dialog').open : prefs.menu;
  const button = document.getElementById('menu-toggle');
  button.setAttribute('aria-expanded',String(open));button.textContent=open?'Ocultar temario':'Mostrar temario';
}
export function toggleMenu() {
  if(narrow.matches) {const dialog=document.getElementById('menu-dialog');dialog.open?closeDialog(dialog):openDialog('menu-dialog',document.getElementById('menu-toggle'));updateMenuButton();}
  else { if(prefs.menu && document.getElementById('temario').contains(document.activeElement)) document.getElementById('menu-toggle').focus();setPreference('menu',!prefs.menu); }
}
function remember(id, persist=false) { locationId=id;if(persist && topics.some(t=>id.startsWith(t.id+'--'))) write('last-location',id); }
export function go(id, focus=true) {
  if(routeAliases[id]) {id=routeAliases[id];history.replaceState(null,'',`#${id}`);}
  const destination = document.getElementById(id);
  const view = destination?.closest('[data-view]');
  if(!view) return false;
  document.querySelectorAll('dialog[open]').forEach(dialog=>closeDialog(dialog,false));
  document.querySelectorAll('[data-view]').forEach(el=>el.hidden=el!==view);
  const topic=topics.find(t=>t.id===view.dataset.view);
  if(topic) {
    currentTopic=topic.id;
    const unit=curriculum.find(unit=>topicInUnit(unit,topic.id));
    document.getElementById(`unit-${unit.id}`).setAttribute('aria-expanded','true');
    document.getElementById(`unit-list-${unit.id}`).hidden=false;
  }
  document.querySelectorAll('[data-topic]').forEach(link=>{
    const active=link.dataset.topic===topic?.id;
    if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    link.querySelector('.current-tag').hidden=!active;
  });
  document.querySelectorAll('[data-section][href]').forEach(link=>link.href=`#${currentTopic}--${link.dataset.section}`);
  document.getElementById('breadcrumbs').innerHTML=`<ol><li><a href="#inicio">Catálogo</a></li><li>Cálculo Diferencial e Integral</li>${topic?`<li>${topic.unit}</li><li aria-current="page">${topic.number}. ${topic.title}</li>`:''}</ol>`;
  document.title=`${topic?.title || (id==='ayuda'?'Ayuda':'Inicio')} · Cálculo Diferencial e Integral`;
  for(let el=destination.parentElement;el;el=el.parentElement) if(el.tagName==='DETAILS') el.open=true;
  if(destination.tagName==='SUMMARY') destination.parentElement.open=true;
  if(focus) {destination.focus();destination.scrollIntoView({block:'start'});}
  remember(id,focus);
  return true;
}
export function navigate(id) {
  if(location.hash===`#${id}`)go(id);
  else location.hash=id;
}
export function continueStudy() {
  const saved=read('bookmark',memoryBookmark) || read('last-location',null);
  const last=routeAliases[saved] || saved;
  if(typeof last==='string' && topics.some(t=>last.startsWith(t.id+'--')) && document.getElementById(last))navigate(last);
  else openDialog('resume');
}
export function describeLocation(id=locationId) {
  const heading=document.getElementById(id);
  const t=topics.find(t=>id.startsWith(t.id+'--'));
  if(!t) return `Cálculo Diferencial e Integral. ${id==='ayuda'?'Ayuda del catálogo.':'Inicio del catálogo.'}`;
  const section=heading?.closest('.academic-section')?.dataset.section;
  const item=heading?.closest('.academic-item')?.querySelector('h3');
  const parts=['Cálculo Diferencial e Integral',t.unit,`Tema ${t.number}: ${t.title}`,sections[section] || 'Inicio del tema'];
  if(item) parts.push(item.textContent);
  if(heading && heading!==item && /^(H3|H4|SUMMARY)$/.test(heading.tagName)) parts.push(heading.textContent);
  return parts.join('. ')+'.';
}
export function whereAmI() {
  document.getElementById('where-text').textContent=describeLocation();
  document.getElementById('where-return').dataset.destination=locationId;
  openDialog('where');
}
export function savePoint(id=locationId) {
  if(!topics.some(t=>id.startsWith(t.id+'--')) || !document.getElementById(id)) {
    document.getElementById('saved-text').textContent='Primero selecciona una sección, ejemplo o paso del curso.';
  } else {
    memoryBookmark=id;
    const ok=write('bookmark',id);
    document.getElementById('saved-text').textContent=`${ok?'Punto guardado en este navegador.':'Punto guardado solo para esta sesión; el almacenamiento no está disponible.'} ${describeLocation(id)}`;
  }
  openDialog('saved');
}
export function initNavigation() {
  // El cursor virtual de NVDA no es observable. Solo seguimos destinos y foco real;
  // desplazarse por la pantalla nunca sobrescribe un marcador explícito.
  document.addEventListener('focusin',e=>{
    const view=e.target.closest('[data-view]');
    if(!view || !topics.some(t=>t.id===view.dataset.view) || e.target.closest('nav')) return;
    const explicit=e.target.closest('[data-save]')?.dataset.save;
    if(explicit){remember(explicit);return;}
    const headings=[...view.querySelectorAll('h1[id],h2[id],h3[id],h4[id],summary[id]')];
    const heading=headings.filter(h=>h===e.target || (h.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_FOLLOWING)).at(-1);
    if(heading) remember(heading.id);
  });
  document.addEventListener('click',e=>{
    const save=e.target.closest('[data-save]');if(save)savePoint(save.dataset.save);
  });
  document.getElementById('save-current').addEventListener('click',()=>savePoint());
  document.getElementById('where-return').addEventListener('click',e=>navigate(e.currentTarget.dataset.destination));
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)return;
    const id=a.getAttribute('href').slice(1);
    if(id==='contenido'){e.preventDefault();document.getElementById(id).focus();document.getElementById(id).scrollIntoView();return;}
    if(document.getElementById(id)?.closest('[data-view]')){e.preventDefault();navigate(id);}
  });
  window.addEventListener('hashchange',()=> {if(!go(location.hash.slice(1)))go('inicio');});
  document.getElementById('menu-toggle').addEventListener('click',toggleMenu);
  document.getElementById('menu-dialog').addEventListener('close',updateMenuButton);
  document.getElementById('tools-menu').addEventListener('click',()=>{closeDialog(document.getElementById('tools'));toggleMenu();});
  document.querySelectorAll('[data-continue]').forEach(button=>button.addEventListener('click',continueStudy));
  document.getElementById('where-open').addEventListener('click',whereAmI);
  document.getElementById('tour-unit').addEventListener('click',()=>{
    if(narrow.matches)openDialog('menu-dialog',document.getElementById('tour-unit'));
    else if(!prefs.menu)setPreference('menu',true);
    const button=document.getElementById('unit-4');button.setAttribute('aria-expanded','true');document.getElementById('unit-list-4').hidden=false;button.focus();updateMenuButton();
  });
  narrow.addEventListener('change',syncMenu);
  document.addEventListener('preferenceschange',syncMenu);
  syncMenu();
  if(!go(location.hash.slice(1)||'inicio',!!location.hash))go('inicio',false);
}
