/** Exporta los mismos contenidos y plantilla del catálogo, sin duplicar datos. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {topics, renderTopic, routeAliases} from '../src/content.js';
const output = new URL('../materials/portafolio-calculo/html/', import.meta.url);
fs.mkdirSync(output, {recursive:true});
for (const topic of topics) {
  let article = renderTopic(topic).replace(' hidden', '');
  article = article.replace(/<button\b[^>]*>[\s\S]*?<\/button>/g, '');
  article = article.replace(/href="#([^"]+)"/g, (match, id) => {
    const destination = topics.find(t => id.startsWith(t.id+'--'));
    return destination && destination.id !== topic.id ? `href="${destination.id}.html#${id}"` : match;
  });
  const markup = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${topic.title} · Cálculo Diferencial e Integral</title><style>
body{font:1.1rem/1.65 Arial,sans-serif;max-width:75ch;margin:auto;padding:1rem;color:#162b45}a{color:#17488c}a:focus-visible,summary:focus-visible,[tabindex]:focus-visible{outline:3px solid #17488c;outline-offset:3px}.math-region{overflow-x:auto;max-width:100%;padding:.6rem;margin:1rem 0}.math-inline{display:inline-block;vertical-align:middle;max-width:100%;padding:.15rem .25rem;margin:0}h1{font-size:1.8rem}p,a{overflow-wrap:anywhere}.academic-item{margin:2.5rem 0}.step-body{padding:1rem}.inline-actions a{display:inline-block;margin:.5rem}nav ol{padding-left:1.5rem}details{margin:1rem 0}@media print{nav,.inline-actions{display:none}details .step-body{display:block}}
</style></head><body><a href="#${topic.id}--tema">Saltar al contenido</a><main>${article}</main><script>
function updateMath(){for(const region of document.querySelectorAll('.math-region')){const overflow=region.scrollWidth>region.clientWidth||region.scrollHeight>region.clientHeight;if(overflow&&region.getClientRects().length){region.tabIndex=0;region.setAttribute('role','region');region.setAttribute('aria-label','Fórmula con desplazamiento horizontal');}else{region.removeAttribute('tabindex');region.removeAttribute('role');region.removeAttribute('aria-label');}}}
requestAnimationFrame(updateMath);document.fonts.ready.then(updateMath);addEventListener('resize',updateMath);document.addEventListener('toggle',()=>requestAnimationFrame(updateMath),true);
document.addEventListener('click',event=>{if(event.target.closest('.mode-toggle')){const steps=[...document.querySelectorAll('details.step')];const open=steps.some(d=>!d.open);steps.forEach(d=>d.open=open);document.querySelectorAll('.mode-toggle').forEach(b=>b.textContent=open?'Consultar por pasos':'Mostrar todos los pasos');}});
const aliases=${JSON.stringify(routeAliases)};
function reveal(){const id=location.hash.slice(1);const target=document.getElementById(aliases[id]||id);if(target){if(target.tagName==='SUMMARY')target.parentElement.open=true;for(let parent=target.parentElement;parent;parent=parent.parentElement)if(parent.tagName==='DETAILS')parent.open=true;target.focus();}}
addEventListener('hashchange',reveal);reveal();addEventListener('beforeprint',()=>{for(const d of document.querySelectorAll('details')){d.dataset.wasOpen=d.open;d.open=true;}});addEventListener('afterprint',()=>{for(const d of document.querySelectorAll('details'))d.open=d.dataset.wasOpen==='true';});
</script></body></html>`;
  fs.writeFileSync(path.join(fileURLToPath(output),topic.id+'.html'),markup);
}
console.log(`${topics.length} HTML exportados`);
