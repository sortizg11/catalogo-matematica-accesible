// Orden del catálogo, independiente de la numeración del programa suministrado.
export const curriculum = [
  {id:'1',title:'Unidad 1. Límites y continuidad',items:[
    {label:'Límite de una función en un punto'}, {label:'Teorema sobre límites'},
    {label:'Cálculo de límites algebraicos, exponenciales, logarítmicos y trigonométricos'},
    {label:'Límites infinitos y límites al infinito'}, {label:'Continuidad de una función'},
    {label:'Teoremas sobre continuidad de una función'}]},
  {id:'2',title:'Unidad 2. Derivada de una función',items:[
    {label:'Derivada de una función en un punto'},
    {label:'Derivada de una función',children:[{label:'Interpretación geométrica'},{label:'Movimiento rectilíneo y velocidad instantánea'}]},
    {label:'Teoremas sobre derivadas'}, {label:'Derivada de una función compuesta'},
    {label:'Derivada de funciones algebraicas, exponenciales, logarítmicas, trigonométricas y trigonométricas inversas'},
    {label:'Diferencial de una función'}, {label:'Derivadas de orden superior'}, {label:'Derivación implícita'}]},
  {id:'3',title:'Unidad 3. Aplicaciones de la derivada',items:[
    {label:'Movimiento rectilíneo'}, {label:'La derivada como razón de cambio'},
    {label:'Crecimiento y decrecimiento de funciones'}, {label:'Máximos y mínimos de una función'},
    {label:'Regla de L’Hôpital'}, {label:'Concavidad y puntos de inflexión'},
    {label:'Asíntotas verticales, horizontales y oblicuas de una función'},
    {label:'Cuadros de variación y trazo de curvas'}, {label:'Problemas de máximos y mínimos'},
    {label:'Método de Newton para hallar ceros de funciones'}]},
  {id:'4',title:'Unidad 4. Integral indefinida',items:[
    {label:'Introducción a las integrales',topic:'introduccion'},
    {label:'Reglas de integración'},
    {label:'Técnicas de integración',children:[
      {label:'Integración por sustitución',topic:'sustitucion'},
      {label:'Integración por partes'}, {label:'Integración por funciones parciales'},
      {label:'Integración por sustitución trigonométrica'}, {label:'Sustitución tan (θ/2)'}]}]},
  {id:'5',title:'Unidad 5. Integral definida',items:[
    {label:'Integral definida'}, {label:'Teorema fundamental del cálculo'}, {label:'Propiedades de la integral definida'},
    {label:'Aplicaciones de la integral definida',children:[{label:'Área entre curvas'},{label:'Longitud de una curva'},{label:'Trabajo efectuado por una fuerza (ley de Hooke)'}]}]},
  {id:'6',title:'Unidad 6. Integrales impropias',items:[
    {label:'Integrales impropias de primera y segunda especies'},
    {label:'Convergencia de una integral impropia'},
    {label:'Criterios de convergencia para integrales impropias de primera especie'}]}
];

export function topicInUnit(unit,topic){
  const contains=items=>items.some(item=>item.topic===topic || (item.children && contains(item.children)));
  return contains(unit.items);
}

export function renderCurriculumItems(items){
  return items.map(item=>`<li>${item.topic
    ? `<a data-topic="${item.topic}" href="#${item.topic}--tema">${item.label}<span class="current-tag" hidden>Tema actual</span></a>`
    : item.children ? `<span class="curriculum-group">${item.label}</span>`
    : `<span class="pending">${item.label}<small>Pendiente de contenido</small></span>`
  }${item.children?`<ul>${renderCurriculumItems(item.children)}</ul>`:''}</li>`).join('');
}
