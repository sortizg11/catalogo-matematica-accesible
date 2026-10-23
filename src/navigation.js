import { topics, sections, curriculum } from './content.js';
import { read, write } from './storage.js';
import { prefs, setPreference } from './preferences.js';
import { openDialog, closeDialog } from './dialogs.js';
export const narrow = matchMedia('(max-width:64rem)');
let currentTopic = 'sustitucion';
let locationId = 'inicio';
let observer;
export const topicId = () => currentTopic;
export function buildNavigation() {
  document.querySelector('#nav-slot').innerHTML = `<nav class="syllabus" id="temario" aria-label="Temario académico"><p class="nav-kicker">Tu curso</p><p class="course-name">Cálculo Diferencial<br>e Integral</p>${curriculum.map(unit=>`<button class="unit-toggle" id="unit-${unit.id}" aria-expanded="true" aria-controls="unit-list-${unit.id}">${unit.title}</button><ul id="unit-list-${unit.id}">${unit.items.map(({label,topic:id})=>`<li>${id?`<a data-topic="${id}" href="#${id}--tema">${label}<span class="current-tag" hidden>Tema actual</span></a>`:`<span class="pending">${label}<small>Pendiente de contenido</small></span>`}</li>`).join('')}</ul>`).join('')}<a href="#inicio">Volver al catálogo</a></nav>`;
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
function remember(id) { locationId=id;if(topics.some(t=>id.startsWith(t.id+'--'))) write('last-location',id); }
export function go(id, focus=true) {
  const destination = document.getElementById(id);
  const view = destination?.closest('[data-view]');
  if(!view) return false;
  document.querySelectorAll('dialog[open]').forEach(dialog=>closeDialog(dialog,false));
  document.querySelectorAll('[data-view]').forEach(el=>el.hidden=el!==view);
  const topic=topics.find(t=>t.id===view.dataset.view);
  if(topic) currentTopic=topic.id;
  document.querySelectorAll('[data-topic]').forEach(link=>{
    const active=link.dataset.topic===topic?.id;
    if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    link.querySelector('.current-tag').hidden=!active;
  });
  document.querySelectorAll('[data-section][href]').forEach(link=>link.href=`#${currentTopic}--${link.dataset.section}`);
  document.getElementById('breadcrumbs').innerHTML=`<ol><li><a href="#inicio">Catálogo</a></li><li>Cálculo Diferencial e Integral</li>${topic?`<li>${topic.unit}</li><li aria-current="page">${topic.number}</li>`:''}</ol>`;
  document.title=`${topic?.title || (id==='ayuda'?'Ayuda':'Inicio')} · Catálogo de Matemática`;
  if(focus) {destination.focus();destination.scrollIntoView({block:'start'});}
  remember(id);
  observer?.disconnect();
  if(topic) view.querySelectorAll('h2[id],h3[id]').forEach(el=>observer?.observe(el));
  return true;
}
export function navigate(id) {
  if(location.hash===`#${id}`)go(id);
  else location.hash=id;
}
export function continueStudy() {
  const last=read('last-location',null);
  if(typeof last==='string' && topics.some(t=>last.startsWith(t.id+'--')) && document.getElementById(last))navigate(last);
  else openDialog('resume');
}
export function whereAmI() {
  const t=topics.find(t=>locationId.startsWith(t.id+'--'));
  const heading=document.getElementById(locationId);
  const section=heading?.closest('.academic-section')?.dataset.section;
  document.getElementById('where-text').textContent=t?`Cálculo Diferencial e Integral. ${t.unit}. Tema ${t.number}: ${t.title}. ${sections[section] || 'Inicio del tema'}.${heading?.tagName==='H3'?' '+heading.textContent+'.':''}`:`Cálculo Diferencial e Integral. ${locationId==='ayuda'?'Ayuda del catálogo.':'Inicio del catálogo.'}`;
  openDialog('where');
}
export function initNavigation() {
  observer=new IntersectionObserver(entries=>{
    // Solo actualiza el punto de lectura; nunca mueve el foco ni hace anuncios.
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
    if(visible.length)remember(visible[0].target.id);
  },{rootMargin:'0px 0px -65% 0px',threshold:0});
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
    const button=document.getElementById('unit-2');button.setAttribute('aria-expanded','true');document.getElementById('unit-list-2').hidden=false;button.focus();updateMenuButton();
  });
  narrow.addEventListener('change',syncMenu);
  document.addEventListener('preferenceschange',syncMenu);
  syncMenu();
  if(!go(location.hash.slice(1)||'inicio',!!location.hash))go('inicio',false);
}
