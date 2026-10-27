// Destinos estables para subtítulos y controles de guardado, sin recrear las vistas.
export function initStudy(){
  const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  for(const view of document.querySelectorAll('[data-view]')){
    const counts=new Map();
    for(const heading of view.querySelectorAll('h2,h3,h4')){
      if(!heading.id){const base=slug(heading.textContent),n=(counts.get(base)||0)+1;counts.set(base,n);heading.id=`${view.dataset.view}--apartado-${base}-${n}`;heading.tabIndex=-1;}
      if(view.dataset.view==='inicio'||view.dataset.view==='ayuda'||heading.tagName==='H4')continue;
      const button=document.createElement('button');button.dataset.save=heading.id;button.className='save-point';button.textContent='Guardar este punto de estudio';
      heading.insertAdjacentElement('afterend',button);
    }
  }
}
// El MathML es la única representación de la fórmula. Solo las expresiones
// desbordadas necesitan un contenedor en Tab para desplazamiento horizontal.
export function initMathRegions(){
  const regions=[...document.querySelectorAll('.math-region')];
  const update=()=>regions.forEach(el=>{
    const overflow=el.clientWidth>0 && el.scrollWidth>el.clientWidth+1;
    el.tabIndex=overflow?0:-1;
    if(overflow){el.setAttribute('role','region');el.setAttribute('aria-label','Fórmula con desplazamiento horizontal');}
    else{el.removeAttribute('role');el.removeAttribute('aria-label');}
  });
  const observer=new ResizeObserver(update);regions.forEach(el=>observer.observe(el));update();
}
