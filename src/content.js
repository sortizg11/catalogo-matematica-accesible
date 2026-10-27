import { academic } from './academic-content.js';
export { help } from './help.js';
export const sections = {tema:'Inicio del tema',teoria:'Teoría',ejemplos:'Ejemplos resueltos',practica:'Práctica',soluciones:'Soluciones'};
import { curriculum, renderCurriculumItems } from './curriculum.js';
export { curriculum } from './curriculum.js';
export const topics = [
  {id:'introduccion',number:'4.1',unit:curriculum[3].title,title:'Introducción a las integrales',
    description:'Noción intuitiva, concepto de integral indefinida, ejemplos y práctica.',
    objective:'Comprender la integración como búsqueda de una familia de primitivas, interpretar su notación y reconocer el papel de la constante C.',
    readiness:'Recuerda cómo se deriva una función y qué ocurre al derivar una constante.',
    ...academic.indefinite,
    theory:'<h3 id="introduccion--nocion" tabindex="-1">Noción intuitiva de integral</h3>' + academic.introduction.theory + '<h3 id="introduccion--concepto" tabindex="-1">Concepto de integral indefinida</h3>' + academic.indefinite.theory.replaceAll('<h3>', '<h4>').replaceAll('</h3>', '</h4>'),
    relations:academic.introduction.relations},
  {id:'sustitucion',number:'4.3.1',unit:curriculum[3].title,title:'Integración por sustitución',
    description:'Usa la regla de la cadena en sentido inverso y sigue cada cambio de variable.',
    objective:'Reconocer una función interior y su derivada, cambiar la variable y el diferencial, y regresar a la variable original.',
    readiness:'Recuerda la derivada de una composición. Puedes volver a la introducción a las integrales cuando lo necesites.',
    ...academic.substitution}
];
export const routeAliases = {};
for(const old of ['inmediata','indefinida']) {
  for(const section of Object.keys(sections)) routeAliases[`${old}--${section}`]=`introduccion--${section}`;
}
for(const item of academic.indefinite.examples) routeAliases[`indefinida--ejemplo-${item.sourceId}`]=`introduccion--ejemplo-${item.sourceId}`;
for(const item of academic.indefinite.exercises) for(const kind of ['ejercicio','solucion']) routeAliases[`indefinida--${kind}-${item.sourceId}`]=`introduccion--${kind}-${item.sourceId}`;
Object.assign(routeAliases,{
  'inmediata--ejemplo-1':'introduccion--ejemplo-e1a',
  'inmediata--ejercicio-1':'introduccion--ejercicio-p1',
  'inmediata--solucion-1':'introduccion--solucion-p1',
  'sustitucion--ejemplo-1':'sustitucion--ejemplo-e2',
  'sustitucion--ejercicio-1':'sustitucion--ejercicio-p4',
  'sustitucion--solucion-1':'sustitucion--solucion-p4'
});
const sourceNote='';
function procedure(item, topic, kind){
  return `<div class="procedure"><h4>Desarrollo paso a paso</h4><div class="procedure-header"><p>Abre los pasos que necesites; el resultado está disponible al final.</p><button class="mode-toggle">Mostrar todos los pasos</button></div>${item.steps.map((step,i)=>{const id=`${topic}--${kind}-${item.sourceId}--paso-${i+1}`;return `<details class="step"><summary id="${id}">${step.title}</summary><div class="step-body">${step.body}<button data-save="${id}">Guardar este paso como punto de estudio</button></div></details>`;}).join('')}</div><h4>Resultado</h4>${item.answer}`;
}
function indexList(topic,items,kind,label){
  return `<nav class="item-index" aria-label="${label}"><p><strong>${label}</strong></p><ol>${items.map(item=>`<li><a href="#${topic}--${kind}-${item.sourceId}">${item.title}</a></li>`).join('')}</ol></nav>`;
}
function examples(t){
  const relations = t.relations ? `<p>Lee cada relación en este orden: función original, derivada y familia de primitivas. Las relaciones 10, 11 y 12 permiten comparar distintas constantes.</p>${indexList(t.id,t.relations,'relacion','Relaciones de la noción intuitiva')}${t.relations.map(r=>`<div class="academic-item" data-source-id="${r.sourceId}"><h3 id="${t.id}--relacion-${r.sourceId}" tabindex="-1">${r.title}</h3>${r.body}<a href="#${t.id}--ejemplos">Volver al índice de relaciones</a></div>`).join('')}` : '';
  return `${relations}<p>El esquema de análisis precede al desarrollo y explica por qué se elige cada procedimiento.</p>${indexList(t.id,t.examples,'ejemplo','Índice de ejemplos')}${t.examples.map((e,i)=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejemplo-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}${e.review}${e.analysis}${procedure(e,t.id,"ejemplo")}${e.notes}<div class="inline-actions"><a href="#${t.id}--ejemplos">Volver al índice de ejemplos</a>${t.examples[i+1]?`<a href="#${t.id}--ejemplo-${t.examples[i+1].sourceId}">Siguiente: ${t.examples[i+1].title}</a>`:''}</div></div>`).join('')}`;
}
function practice(t){
  if(!t.exercises.length)return '<p>No hay ejercicios de práctica asignados a esta introducción. Puedes revisar las relaciones y continuar con el concepto de integral indefinida.</p>';
  return `<p>Intenta resolver cada ejercicio antes de consultar el análisis y la solución. Atiende a su dominio real.</p>${indexList(t.id,t.exercises,'ejercicio','Índice de ejercicios')}${t.exercises.map(e=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejercicio-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}<div class="inline-actions"><a href="#${t.id}--solucion-${e.sourceId}">Consultar la solución del ejercicio ${e.sourceId.slice(1)}</a><a href="#${t.id}--practica">Volver al índice de ejercicios</a></div></div>`).join('')}`;
}
function solutions(t){
  if(!t.exercises.length)return '<p>No hay soluciones de práctica asignadas a esta introducción. Las familias de primitivas aparecen en las relaciones de la sección de ejemplos.</p>';
  return `${indexList(t.id,t.exercises,'solucion','Índice de soluciones')}${t.exercises.map(e=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--solucion-${e.sourceId}" tabindex="-1">Solución. ${e.title}</h3>${e.review}${e.analysis}${procedure(e,t.id,"solucion")}${e.notes}<div class="inline-actions"><a href="#${t.id}--ejercicio-${e.sourceId}">Volver al ejercicio ${e.sourceId.slice(1)}</a><a href="#${t.id}--soluciones">Volver al índice de soluciones</a></div></div>`).join('')}`;
}
export function renderTopic(t){
  const position=topics.indexOf(t),previous=topics[position-1],next=topics[position+1];
  return `<article data-view="${t.id}" hidden><p class="eyebrow">${t.unit} · Tema ${t.number}</p><h1 id="${t.id}--tema" tabindex="-1">${t.title}</h1><p class="lead">${t.description}</p>${sourceNote}<nav class="section-nav" aria-label="Secciones de ${t.title}">${Object.entries(sections).filter(([key])=>key!=='tema').map(([key,label])=>`<a href="#${t.id}--${key}">${label}</a>`).join('')}</nav>
  <section class="academic-section" data-section="teoria"><h2 id="${t.id}--teoria" tabindex="-1"><span class="section-number" aria-hidden="true">01</span> Teoría</h2><div class="objective"><p><strong>Objetivo.</strong> ${t.objective}</p></div><p><strong>Antes de comenzar.</strong> ${t.readiness}</p>${t.theory}${t.id==='introduccion'?'<h3 id="introduccion--reglas" tabindex="-1">Reglas de integración</h3><p>Pendiente de contenido.</p>':''}</section>
  <section class="academic-section" data-section="ejemplos"><h2 id="${t.id}--ejemplos" tabindex="-1"><span class="section-number" aria-hidden="true">02</span> Ejemplos resueltos</h2>${examples(t)}</section>
  <section class="academic-section" data-section="practica"><h2 id="${t.id}--practica" tabindex="-1"><span class="section-number" aria-hidden="true">03</span> Práctica</h2>${practice(t)}</section>
  <section class="academic-section" data-section="soluciones"><h2 id="${t.id}--soluciones" tabindex="-1"><span class="section-number" aria-hidden="true">04</span> Soluciones</h2>${solutions(t)}</section>
  <nav class="topic-navigation" aria-label="Continuar el estudio"><a href="#${t.id}--tema">Volver al inicio del tema</a>${previous?`<a href="#${previous.id}--tema">Anterior: ${previous.title}</a>`:''}${next?`<a href="#${next.id}--tema">Siguiente tema disponible: ${next.title}</a>`:''}</nav></article>`;
}
export const home = `<article data-view="inicio"><h1 id="inicio" tabindex="-1">Cálculo Diferencial e Integral</h1><div class="inline-actions"><button data-continue>Continuar donde quedé</button></div><h2>Contenido disponible</h2><p>Unidad 4. Integral indefinida</p><ol class="topic-list">${topics.map(t=>`<li><h3><a href="#${t.id}--tema">${t.title}</a></h3><p>${t.description}</p></li>`).join('')}</ol><p>El temario reúne las seis unidades del curso. Los apartados sin material están identificados como pendientes.</p><a href="#ayuda">Ayuda para utilizar el curso</a></article>`;
