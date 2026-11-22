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
// INICIO PORTAFOLIO IMPORTADO
topics.unshift(...[
  {
    "id": "limites",
    "number": "1.1",
    "unit": "Unidad 1. Límites y continuidad",
    "title": "Límite de una función en un punto",
    "description": "Noción de límite, límites laterales, valor absoluto y práctica de límites.",
    "objective": "Interpretar límites y comparar aproximaciones laterales.",
    "readiness": "Recuerda funciones, factorización y operaciones algebraicas.",
    "theory": "<p>El límite de una función describe el comportamiento de dicha función cuando la variable independiente se aproxima a un valor determinado, sin que necesariamente la función esté definida en ese punto.</p><p>De manera intuitiva, se escribe: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mrow></math></div> si a medida que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> se acerca a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math> (por la izquierda y por la derecha), los valores de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> se acercan cada vez más a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>L</mi></mrow></math>.</p><h3>Definición intuitiva</h3><p>El límite responde a la pregunta: <em>¿A qué valor se aproxima <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> se aproxima a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math>?</em> No importa si la función existe o no en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>a</mi></mrow></math>; lo que interesa es su comportamiento alrededor de ese punto.</p><h3>Definición formal (épsilon-delta)</h3><p>Se dice que: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mrow></math></div> si para todo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B5;</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> existe un <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B4;</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> tal que, siempre que: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>0</mn><mo>&#x0003C;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mi>a</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003C;</mo><mi>&#x003B4;</mi></mrow></math></div> se cumple que: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>L</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003C;</mo><mi>&#x003B5;</mi></mrow></math></div><h3>Límites laterales</h3><ul><li><strong>Límite por la izquierda:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mi>a</mi><mo>&#x02212;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mstyle></mrow></math></li><li><strong>Límite por la derecha:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mi>a</mi><mo>&#x0002B;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mstyle></mrow></math></li></ul><p>El límite de una función en un punto existe si y solo si los límites laterales existen y son iguales: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mi>a</mi><mo>&#x02212;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mi>a</mi><mo>&#x0002B;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mrow></math></div><h3>Propiedades básicas de los límites</h3><p>Sean <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> funciones tales que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>M</mi></mrow></math>. Entonces:</p><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x000B1;</mi><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>L</mi><mi>&#x000B1;</mi><mi>M</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>L</mi><mo>&#x000B7;</mo><mi>M</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mi>L</mi></mrow><mrow><mi>M</mi></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"1em\" /><mi>M</mi><mo>&#x02260;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mo stretchy=\"false\">[</mo><mi>k</mi><mo>&#x000B7;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>k</mi><mo>&#x000B7;</mo><mi>L</mi><mo>&#x0002C;</mo><mspace width=\"1em\" /><mi>k</mi><mo>&#x02208;</mo><mi>&#x0211D;</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>n</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>L</mi><mi>n</mi></msup></mtd></mtr></mtable></mrow></math></div><h3>Límites con valor absoluto</h3><p>Recuerda que el valor absoluto se define por partes: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x0007B;</mo><mtable><mtr><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>x</mi><mo>&#x02265;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\"><mo>&#x02212;</mo><mi>x</mi><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0003C;</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"2em\" /><mtext>y&#x000A0;en&#x000A0;general</mtext><mspace width=\"2em\" /><mo stretchy=\"false\">&#x0007C;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x0007B;</mo><mtable><mtr><mtd columnalign=\"left\"><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02265;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\"><mo>&#x02212;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math></div><p>Para calcular un límite que contiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo></mrow></math> cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></math> se analiza el signo de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> cerca de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math>: <ul><li>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi></mrow></math> es continua en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02260;</mo><mn>0</mn></mrow></math>, el signo de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> no cambia cerca de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math>, así que se sustituye <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo></mrow></math> por <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> o por <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> según corresponda.</li><li>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, el signo puede cambiar a cada lado de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math>, por lo que se deben calcular los <strong>límites laterales</strong> por separado.</li></ul><p>Además, si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mstyle></mrow></math>, entonces: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mo stretchy=\"false\">&#x0007C;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>L</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math></div><p>En matemáticas, decir que una cantidad <strong>tiende a</strong> un valor significa que se acerca cada vez más a ese valor, tanto como se quiera, sin necesariamente llegar a alcanzarlo. Esta idea de aproximación progresiva es, precisamente, la esencia misma del límite.</p><p>Por ejemplo, si se toman valores de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> cada vez más cercanos a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math>, como: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>1.9</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>1.99</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>1.999</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>1.9999</mn><mo>&#x0002C;</mo><mi>&#x02026;</mi></mrow></math></div> se dice que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> <strong>tiende a</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math>, y se escribe <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></math>. Lo mismo ocurre si nos acercamos por el otro lado: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2.1</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>2.01</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>2.001</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mn>2.0001</mn><mo>&#x0002C;</mo><mi>&#x02026;</mi></mrow></math></div><p>En ambos casos, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> se aproxima a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> sin necesidad de ser exactamente igual a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math>.</p><h3>Toda tendencia es, en esencia, un límite</h3><p>Cuando se dice que una función, una sucesión o una cantidad <strong>tiende a</strong> un valor, se está describiendo el comportamiento de un límite. Es decir:</p><ul><li>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></math>, se está describiendo el comportamiento de la variable en el eje horizontal.</li><li>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02192;</mo><mi>L</mi></mrow></math> cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></math>, se está describiendo el comportamiento de la función, y esto es justamente lo que expresa la notación:     <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>L</mi></mrow></math></div></li></ul><p>Esta idea también se aplica a otros contextos:</p><ul><li>En sucesiones: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>&#x02192;</mo><mi>L</mi></mrow></math> cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></math> significa que los términos de la sucesión se acercan a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>L</mi></mrow></math> a medida que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math> crece indefinidamente.</li></ul><p>En resumen, cada vez que se habla de un proceso de acercamiento progresivo hacia un valor determinado, sin necesariamente alcanzarlo, se está hablando de un límite. Esto convierte al límite en la herramienta matemática formal para describir cualquier tipo de tendencia o aproximación.</p><p>Los ejercicios de práctica fueron tomados de: S. Schmidt et al. <em>Práctica del curso Cálculo Diferencial e Integral. Selección de ejercicios.</em> Revista digital Matemática, Educación e Internet.</p>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1",
        "statement": "<p>Calcular <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow><mrow><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Como <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math> se anula en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, se calculan los límites laterales: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>0</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>0</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><mo>&#x02212;</mo><mi>x</mi></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>0</mn><mo>&#x0002B;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>0</mn><mo>&#x0002B;</mo></msup></mrow></msub><mfrac><mrow><mi>x</mi></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>1</mn></mrow></math></div> Como los límites laterales son distintos, el límite no existe.</p>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2",
        "statement": "<p>Calcular <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>3</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>9</mn></mrow><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x0007C;</mo></mrow></mfrac></mstyle></mrow></math></span>.</p>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003C;</mo><mn>3</mn></mrow></math>, entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>; si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>3</mn></mrow></math>, entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>3</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>3</mn><mo>&#x02212;</mo></msup></mrow></msub><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>6</mn></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>3</mn><mo>&#x0002B;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>3</mn></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>3</mn><mo>&#x0002B;</mo></msup></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>6</mn></mrow></math></div> Los límites laterales son distintos, por lo que el límite no existe.</p>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3",
        "statement": "<p>Calcular <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x02212;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></span>.</p>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Al sustituir se obtiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mrow></math>. Cerca de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math> se cumple que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo>&#x0003C;</mo><mn>0</mn></mrow></math>, así que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><mo>&#x02212;</mo><mi>x</mi></mrow></math> a ambos lados de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><mn>4</mn><mo>&#x02212;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><mi>x</mi></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4",
        "statement": "<p>Calcular <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn></mrow><mrow><mo stretchy=\"false\">&#x0007C;</mo><mn>2</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></mfrac></mstyle></mrow></math></span>.</p>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003C;</mo><mn>2</mn></mrow></math>, entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mo>&#x02212;</mo><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, así que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mn>2</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><mn>2</mn><mo>&#x02212;</mo><mi>x</mi></mrow></math>: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><mo>&#x02212;</mo><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x02212;</mo></msup></mrow></msub><mfrac><mrow><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><mo>&#x02212;</mo><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x02212;</mo></msup></mrow></msub><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>4</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejercicio 1",
        "statement": "<p>Calcular: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>5</mn><mo>&#x0003D;</mo><mn>11</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejercicio 2",
        "statement": "<p>Calcular: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>3</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>3</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>9</mn><mo>&#x02212;</mo><mn>12</mn><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e7",
        "title": "Ejercicio 3 (indeterminación )",
        "statement": "<p>Calcular: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mrow></math></div>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se factoriza el numerador: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math></div> Por lo tanto: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e8",
        "title": "Ejercicio 4 (límites laterales)",
        "statement": "<p>Sea la función: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x0007B;</mo><mtable><mtr><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0003C;</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\"><mn>5</mn><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0003D;</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\"><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo></mtd><mtd columnalign=\"left\"><mi>x</mi><mo>&#x0003E;</mo><mn>2</mn></mtd></mtr></mtable></mrow></mrow></math></div> Determinar si existe <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x02212;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>3</mn></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><msup><mn>2</mn><mo>&#x0002B;</mo></msup></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>3</mn></mrow></math></div> Como los límites laterales coinciden, el límite existe: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></msub><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn></mrow></math></div> (Nótese que este valor no coincide con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>5</mn></mrow></math>, lo cual ilustra que el límite no depende del valor de la función en el punto.)</p>",
        "notes": ""
      },
      {
        "sourceId": "e9",
        "title": "Ejercicio 5 (límite al infinito)",
        "statement": "<p>Calcular: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mrow></math></div>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se divide numerador y denominador entre la mayor potencia de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>, es decir <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>2</mn><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mstyle></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mo>&#x0002B;</mo><mn>0</mn></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mn>0</mn></mrow></mfrac><mo>&#x0003D;</mo><mn>2</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e10",
        "title": "Ejercicio 6 (límite trigonométrico notable)",
        "statement": "<p>Calcular: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mi>x</mi></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div>",
        "review": "",
        "analysis": "<p>Compara los límites laterales cuando el valor absoluto o la definición por partes cambien la expresión. Si simplificas un cociente, conserva la exclusión del punto donde el denominador se anula.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Con el ángulo medido en radianes, este límite notable tiene el valor: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mi>x</mi></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>1</mn></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>3</mn></mrow></msub><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x02212;</mo><mn>3</mn></mrow><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>5</mn><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>15</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>2</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x02212;</mo><mn>6</mn></mrow><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>5</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>t</mi><mo>&#x02192;</mo><mfrac><mrow><mn>5</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></msub><mfrac><mrow><mn>4</mn><mo>&#x02212;</mo><msqrt><mrow><mn>2</mn><mi>t</mi><mo>&#x0002B;</mo><mn>11</mn></mrow></msqrt></mrow><mrow><mn>2</mn><mi>t</mi><mo>&#x02212;</mo><mn>5</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>8</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>t</mi><mo>&#x02192;</mo><mn>4</mn></mrow></msub><mfrac><mrow><mn>3</mn><mo>&#x02212;</mo><msqrt><mrow><mn>5</mn><mo>&#x0002B;</mo><mi>t</mi></mrow></msqrt></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><msqrt><mrow><mn>5</mn><mo>&#x02212;</mo><mi>t</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>a</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>8</mn><mi>a</mi></mrow></msqrt><mo>&#x02212;</mo><mn>3</mn></mrow><mrow><msqrt><mrow><mn>4</mn><mi>a</mi></mrow></msqrt><mo>&#x02212;</mo><mn>2</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>4</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p6",
        "title": "Ejercicio 6 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mroot><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>x</mi></mrow><mn>3</mn></mroot><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p7",
        "title": "Ejercicio 7 · Límites en un punto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>t</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>2</mn><mi>t</mi><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>&#x02212;</mo><msup><mi>t</mi><mn>4</mn></msup></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p8",
        "title": "Ejercicio 8 · Límites con valor absoluto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>y</mi><mo>&#x02192;</mo><mn>4</mn></mrow></msub><mfrac><mrow><msqrt><mrow><mi>y</mi></mrow></msqrt><mo>&#x02212;</mo><mo stretchy=\"false\">&#x0007C;</mo><mn>2</mn><mo>&#x02212;</mo><mi>y</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow><mrow><mi>y</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p9",
        "title": "Ejercicio 9 · Límites con valor absoluto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>z</mi><mo>&#x02192;</mo><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0002B;</mo></msup></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x02212;</mo><mn>3</mn><mi>z</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x0007C;</mo></mrow><mrow><mn>18</mn><msup><mi>z</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>8</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>8</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p10",
        "title": "Ejercicio 10 · Límites con valor absoluto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>b</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></msub><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>5</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mrow><mfrac><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>b</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>b</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></msup></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>4</mn></mrow><mrow><mn>5</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p11",
        "title": "Ejercicio 11 · Límites con valor absoluto",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mn>2</mn></mrow></msub><mfrac><mrow><mroot><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup></mrow><mn>4</mn></mroot></mrow><mrow><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p12",
        "title": "Ejercicio 12 · Límites trigonométricos",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>t</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>t</mi><mo>&#x02212;</mo><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>t</mi><mo>&#x0002B;</mo><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p13",
        "title": "Ejercicio 13 · Límites trigonométricos",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>n</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>cos</mi><mn>3</mn></msup><mi>n</mi></mrow><mrow><msup><mi>sin</mi><mn>2</mn></msup><mi>n</mi></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p14",
        "title": "Ejercicio 14 · Límites trigonométricos",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><msqrt><mrow><mi>x</mi></mrow></msqrt><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p15",
        "title": "Ejercicio 15 · Límites trigonométricos",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>&#x003B2;</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mn>5</mn><mi>&#x003B2;</mi></mrow><mrow><mi>&#x003B2;</mi></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>5</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p16",
        "title": "Ejercicio 16 · Límites trigonométricos",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>z</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>5</mn><msup><mi>sin</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>45</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p17",
        "title": "Ejercicio 17 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn></mrow><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p18",
        "title": "Ejercicio 18 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>r</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>3</mn><mi>r</mi><mo>&#x0002B;</mo><mn>2</mn></mrow><mrow><msqrt><mrow><mn>4</mn><msup><mi>r</mi><mn>2</mn></msup><mo>&#x02212;</mo><mi>r</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p19",
        "title": "Ejercicio 19 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>14</mn></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi></mrow><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>7</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p20",
        "title": "Ejercicio 20 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0002B;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mo>&#x02212;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p21",
        "title": "Ejercicio 21 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>6</mn></mrow></msqrt><mo>&#x02212;</mo><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mi>x</mi></mrow></msqrt><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p22",
        "title": "Ejercicio 22 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p23",
        "title": "Ejercicio 23 · Límites al infinito",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0002B;</mo><mo>&#x0221E;</mo></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt><mo>&#x02212;</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "limites-algebraicos",
    "number": "1.3",
    "unit": "Unidad 1. Límites y continuidad",
    "title": "Cálculo de límites e indeterminaciones",
    "description": "Formas indeterminadas y estrategias de factorización, racionalización y límites al infinito.",
    "objective": "Reconocer formas indeterminadas y analizar transformaciones válidas.",
    "readiness": "Revisa la noción de límite y las operaciones algebraicas.",
    "theory": "<p>Al calcular un límite, en ocasiones la sustitución directa del valor al que tiende la variable produce una expresión que <strong>no tiene un valor numérico definido</strong>. A estas expresiones se les llama <strong>formas indeterminadas</strong>, y su aparición no significa que el límite no exista, sino que se requiere de un procedimiento algebraico adicional (factorización, racionalización, simplificación, entre otros) para poder determinarlo.</p><h3>Principales formas indeterminadas</h3><p>Las formas indeterminadas más comunes son: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mfrac><mrow><mo>&#x0221E;</mo></mrow><mrow><mo>&#x0221E;</mo></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo>&#x0221E;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><mn>0</mn><mo>&#x000B7;</mo><mo>&#x0221E;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mn>1</mn><mrow><mo>&#x0221E;</mo></mrow></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mn>0</mn><mn>0</mn></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mo>&#x0221E;</mo><mn>0</mn></msup></mrow></math></div><h3>¿Por qué se llaman «indeterminadas&#x27;&#x27;?</h3><p>Se llaman así porque, a diferencia de operaciones como <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>5</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mstyle></mrow></math> (que no está definida; el comportamiento de un cociente cuyo denominador tiende a cero debe analizarse por separado) o <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>0</mn></mrow><mrow><mn>5</mn></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mn>0</mn></mrow></math> (que sí tiene un resultado claro), expresiones como <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mstyle></mrow></math> no tienen un único valor posible: dependiendo de las funciones involucradas, el límite puede dar como resultado cualquier número, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0221E;</mo></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></math>, o incluso no existir. Por ello, la sustitución directa no es válida y es necesario transformar la expresión antes de evaluar el límite.</p><h3>Forma indeterminada <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mstyle></mrow></math></h3><p>Ocurre cuando, al sustituir el valor de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>, tanto el numerador como el denominador se anulan. Por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mrow></math></div> Al sustituir <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math> se obtiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mstyle></mrow></math>, lo cual es indeterminado. Sin embargo, factorizando el numerador: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math></div> se elimina la indeterminación y se obtiene: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn></mrow></math></div><h3>Forma indeterminada <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x0221E;</mo></mrow><mrow><mo>&#x0221E;</mo></mrow></mfrac></mstyle></mrow></math></h3><p>Se presenta cuando tanto el numerador como el denominador tienden a infinito. Un método común para resolverla es dividir cada término entre la mayor potencia de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> presente en la expresión. Por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mrow></math></div> Dividiendo numerador y denominador entre <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>2</mn><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mstyle></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mo>&#x0002B;</mo><mn>0</mn></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mn>0</mn></mrow></mfrac><mo>&#x0003D;</mo><mn>2</mn></mrow></math></div><h3>Forma indeterminada <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0221E;</mo><mo>&#x02212;</mo><mo>&#x0221E;</mo></mrow></math></h3><p>Aparece al restar dos expresiones que, por separado, tienden a infinito. Suele resolverse combinando las expresiones en una sola fracción, racionalizando, o factorizando. Por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></div> Racionalizando (multiplicando y dividiendo por el conjugado): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mi>x</mi></mrow><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>x</mi></mrow></msqrt><mo>&#x0002B;</mo><mi>x</mi></mrow></mfrac></mrow></math></div> Dividiendo entre <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mo>&#x0221E;</mo></mrow></msub><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mstyle></mrow></msqrt><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div><h3>Estrategias generales para resolver indeterminaciones</h3><ul><li><strong>Factorización:</strong> útil cuando aparecen polinomios que comparten raíces comunes.</li><li><strong>Racionalización:</strong> se emplea cuando hay raíces cuadradas involucradas, multiplicando por el conjugado.</li><li><strong>División entre la mayor potencia de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>:</strong> apropiada para límites al infinito con cocientes de polinomios.</li><li><strong>Simplificación algebraica:</strong> eliminar factores comunes o simplificar fracciones complejas.</li></ul><p>Es importante recordar que una forma indeterminada no implica la inexistencia del límite; simplemente señala que se requiere un análisis más detallado para conocer su verdadero valor.</p><p>Los ejemplos de este apartado están integrados en la explicación. La práctica disponible se encuentra en <a href=\"#limites--practica\">Práctica de límites</a>.</p>",
    "examples": [],
    "exercises": []
  },
  {
    "id": "derivada",
    "number": "2.1",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Derivada de una función en un punto",
    "description": "Pendiente de secantes, definición de derivada y ejemplos de cálculo por definición.",
    "objective": "Interpretar y calcular la derivada por definición.",
    "readiness": "Recuerda límites y pendientes.",
    "theory": "<h3>De la recta secante a la recta tangente</h3><p>La pendiente de una recta es una razón de cambio. Si se toman dos puntos de la gráfica de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002C;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><msub><mi>x</mi><mn>2</mn></msub><mo>&#x02212;</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, la recta que los une es <strong>secante</strong> a la gráfica y su pendiente es: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mrow><mtext>secante</mtext></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac></mrow></math></div> Cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></math>, analiza el límite de las pendientes de las secantes. Si existe y es finito, determina la pendiente de la recta tangente.</p><h3>Definición formal de derivada</h3><p>Cuando el límite existe y es finito, la derivada de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> determina la pendiente de la recta tangente: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mrow><mtext>tangente</mtext></mrow></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac></mrow></math></div> De forma equivalente, en un punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>a</mi></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mrow><mtext>tangente</mtext></mrow></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>x</mi><mo>&#x02192;</mo><mi>a</mi></mrow></msub><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mi>a</mi></mrow></mfrac></mrow></math></div> La derivada representa la <strong>razón de cambio instantánea</strong> de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> con respecto a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>. Otras notaciones son <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1 (derivada por definición)",
        "statement": "<p>Calcular <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>7</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>7</mn><mo>&#x0003D;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn><mi>h</mi><mo>&#x02212;</mo><mn>7</mn></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn><mi>h</mi><mo>&#x02212;</mo><mn>7</mn><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn><mi>h</mi><mo>&#x02212;</mo><mn>7</mn><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn></mrow><mrow><mi>h</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>4</mn><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mn>4</mn><mo>&#x0003D;</mo><mn>4</mn></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2 (derivada por definición)",
        "statement": "<p>Calcular <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mi>h</mi><mo>&#x0002B;</mo><msup><mi>h</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mi>h</mi><mo>&#x02212;</mo><mn>1</mn></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mi>h</mi><mo>&#x0002B;</mo><msup><mi>h</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mi>h</mi><mo>&#x02212;</mo><mn>1</mn><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>2</mn><mi>x</mi><mi>h</mi><mo>&#x0002B;</mo><msup><mi>h</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mtd></mtr></mtable></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x02234;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3 (pendiente de la tangente en un punto)",
        "statement": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle></mrow></math>. Calcular la pendiente de la recta tangente en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>3</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mi>h</mi><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x02212;</mo><mn>8</mn><mi>h</mi><mo>&#x02212;</mo><mn>12</mn><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mi>h</mi><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mi>h</mi><mo>&#x02212;</mo><mn>12</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn><mi>h</mi></mrow><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable></mrow></math></div> Por lo tanto: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mrow><mtext>tangente</mtext></mrow></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>11</mn></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4 (por definición, con racionalización)",
        "statement": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow></math>. Calcular <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Al sustituir <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> se obtiene la forma <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mn>0</mn></mrow><mrow><mn>0</mn></mrow></mfrac></mrow></math>, así que se racionaliza: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x02212;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x000B7;</mo><mfrac><mrow><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow><mrow><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></mfrac><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>h</mi></mrow><mrow><mi>h</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow></mfrac></mtd></mtr></mtable></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>3</mn></mrow></msqrt></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5 (por definición, función trigonométrica)",
        "statement": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mi>cos</mi><mi>x</mi></mrow></math>. Calcular <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Forma el cociente incremental y simplifica para incrementos distintos de cero. Después calcula su límite.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se usan las identidades y límites notables: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi><mi>cos</mi><mi>h</mi><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><mi>sin</mi><mi>h</mi><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mi>cos</mi><mi>h</mi><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mi>sin</mi><mi>h</mi></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><mi>cos</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>0</mn></mrow></math></div> Separando el límite en dos partes: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><munder><munder><mrow><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi></mrow><mrow><mi>h</mi></mrow></mfrac></mrow><mo>&#x23DF;</mo></munder><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></munder><mo>&#x0002B;</mo><mn>3</mn><mo>&#x000B7;</mo><munder><munder><mrow><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>cos</mi><mi>x</mi><mo>&#x02212;</mo><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>h</mi></mrow></mfrac></mrow><mo>&#x23DF;</mo></munder><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></munder></mrow></math></div> Para (1): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>sin</mi><mi>x</mi><mi>cos</mi><mi>h</mi><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><mi>sin</mi><mi>h</mi><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi></mrow><mrow><mi>h</mi></mrow></mfrac></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mi>cos</mi><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mi>sin</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><mi>cos</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x000B7;</mo><mn>1</mn><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mo>&#x000B7;</mo><mn>0</mn><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi></mtd></mtr></mtable></mrow></math></div> Para (2): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>cos</mi><mi>x</mi><mo>&#x02212;</mo><mi>cos</mi><mi>x</mi><mi>cos</mi><mi>h</mi><mo>&#x0002B;</mo><mi>sin</mi><mi>x</mi><mi>sin</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msub><mo>lim</mo><mrow><mi>h</mi><mo>&#x02192;</mo><mn>0</mn></mrow></msub><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mi>cos</mi><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><mi>cos</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo>&#x0002B;</mo><mi>sin</mi><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mi>sin</mi><mi>h</mi></mrow><mrow><mi>h</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x000B7;</mo><mn>0</mn><mo>&#x0002B;</mo><mi>sin</mi><mi>x</mi><mo>&#x000B7;</mo><mn>1</mn><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi></mtd></mtr></mtable></mrow></math></div> Entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mi>sin</mi><mi>x</mi></mrow></math> y: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mi>cos</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0002B;</mo><mn>3</mn><mi>sin</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mn>3</mn><mo>&#x000B7;</mo><mfrac><mrow><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>3</mn><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>1</mn><mo>&#x02212;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>6</mn></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>15</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msqrt><mrow><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn></mrow></msqrt></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>4</mn></mrow><mrow><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>5</mn><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mi>&#x003C0;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>&#x003C0;</mi></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003C0;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mi>x</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p6",
        "title": "Ejercicio 6 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "tangente-normal",
    "number": "2.2.1",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Recta tangente y recta normal",
    "description": "Pendientes y ecuaciones de las rectas tangente y normal.",
    "objective": "Relacionar la derivada con las ecuaciones tangente y normal.",
    "readiness": "Recuerda pendientes y ecuaciones de rectas.",
    "theory": "<p>La derivada evaluada en un punto da la pendiente de la recta tangente en ese punto: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> La <strong>recta normal</strong> es perpendicular a la recta tangente en el mismo punto. Si la pendiente tangente es finita y distinta de cero, la pendiente normal es la recíproca y opuesta. Si la tangente es horizontal, la normal es vertical: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mi>n</mi></msub><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msub><mi>m</mi><mi>t</mi></msub></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><msub><mi>m</mi><mi>t</mi></msub><mo>&#x000B7;</mo><msub><mi>m</mi><mi>n</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math></div> Ambas rectas tienen la forma <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>m</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow></math>, y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi></mrow></math> se calcula con el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><msub><mi>x</mi><mn>1</mn></msub><mo>&#x0002C;</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>b</mi><mo>&#x0003D;</mo><msub><mi>y</mi><mn>1</mn></msub><mo>&#x02212;</mo><mi>m</mi><mspace width=\"0.167em\" /><msub><mi>x</mi><mn>1</mn></msub></mrow></math></div> Recuerda además: <ul><li>Rectas <strong>paralelas</strong> tienen la misma pendiente.</li><li>Una recta tangente <strong>horizontal</strong> tiene pendiente <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math>, es decir, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math>.</li></ul>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1",
        "statement": "<p>Encontrar la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt></mrow></math> en el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>8</mn><mo>&#x0002C;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>8</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mn>9</mn></mrow></msqrt></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>6</mn></mrow></mfrac></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mn>3</mn><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>6</mn></mrow></mfrac><mo>&#x000B7;</mo><mn>8</mn><mo>&#x0003D;</mo><mfrac><mrow><mn>5</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x02234;</mo><mi>y</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>6</mn></mrow></mfrac><mi>x</mi><mo>&#x0002B;</mo><mfrac><mrow><mn>5</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2",
        "statement": "<p>Encontrar la recta tangente y la recta normal a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> en el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>4</mn></mrow></math></div> Recta tangente: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>3</mn><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>5</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>y</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></math></div> Recta normal: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mi>n</mi></msub><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>b</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>3</mn><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mo>&#x000B7;</mo><mn>2</mn><mo>&#x0003D;</mo><mo>&#x02212;</mo><mfrac><mrow><mn>7</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>y</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mi>x</mi><mo>&#x02212;</mo><mfrac><mrow><mn>7</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div> Si se usa otro punto de la misma curva, por ejemplo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>3</mn><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>8</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>6</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>8</mn><mo>&#x02212;</mo><mn>6</mn><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>10</mn></mrow></math>, y la recta tangente es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>6</mn><mi>x</mi><mo>&#x0002B;</mo><mn>10</mn></mrow></math>.</p>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3 (encontrar la función)",
        "statement": "<p>Encontrar una parábola <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>b</mi><mi>x</mi></mrow></math> cuya recta tangente en el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>2</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Usando la pendiente (la tangente tiene pendiente <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math>): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mi>a</mi><mo>&#x0002B;</mo><mi>b</mi><mo>&#x0003D;</mo><mn>3</mn></mrow></math></div> Usando el punto (el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> pertenece a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math>): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>a</mi><mo>&#x0002B;</mo><mi>b</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math></div> Resolviendo el sistema: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x0007B;</mo><mtable><mtr><mtd columnalign=\"left\"><mn>2</mn><mi>a</mi><mo>&#x0002B;</mo><mi>b</mi><mo>&#x0003D;</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\"><mi>a</mi><mo>&#x0002B;</mo><mi>b</mi><mo>&#x0003D;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>a</mi><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002C;</mo><mspace width=\"1em\" /><mi>b</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x02234;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mi>x</mi></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4 (recta normal paralela a otra recta)",
        "statement": "<p>Encontrar la recta normal a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>x</mi><mi>ln</mi><mi>x</mi></mrow></math> que sea paralela a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>2</mn><mi>y</mi><mo>&#x0002B;</mo><mn>3</mn><mo>&#x0003D;</mo><mn>0</mn></mrow></math>. ¿En qué punto la gráfica tiene tangente horizontal?</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Despejando, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math>, así que su pendiente es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>. Como la normal es paralela, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>m</mi><mi>n</mi></msub><mo>&#x0003D;</mo><mn>1</mn></mrow></math> y entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math>. <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>ln</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup></mrow></math></div> El punto es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>2</mn><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math> y: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02212;</mo><mn>1</mn><mo>&#x000B7;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>y</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup></mrow></math></div> Para la tangente horizontal, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math>: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></div> El punto es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x0002C;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5 (tangente paralela a una recta)",
        "statement": "<p>Encontrar el punto donde la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>4</mn><msup><mi>u</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>u</mi><mo>&#x0002B;</mo><mn>6</mn></mrow></math> es paralela a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>7</mn><mi>u</mi><mo>&#x02212;</mo><mn>2</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se necesita <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><mn>7</mn></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>8</mn><mi>u</mi><mo>&#x02212;</mo><mn>5</mn><mo>&#x0003D;</mo><mn>7</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>u</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>12</mn></mrow><mrow><mn>8</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mn>4</mn><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0002B;</mo><mn>6</mn><mo>&#x0003D;</mo><mn>9</mn><mo>&#x02212;</mo><mfrac><mrow><mn>15</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mn>6</mn><mo>&#x0003D;</mo><mfrac><mrow><mn>15</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div> El punto es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002C;</mo><mfrac><mrow><mn>15</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math>.</p>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejemplo 6 (con derivación implícita)",
        "statement": "<p>Encontrar la recta tangente a la elipse <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mn>48</mn></mrow></math> en el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica el punto de la curva y calcula la pendiente tangente mediante la derivada. Usa la perpendicularidad solo cuando corresponda hallar la normal.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>6</mn><mi>x</mi><mo>&#x0002B;</mo><mn>10</mn><mi>y</mi><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>0</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>6</mn><mi>x</mi></mrow><mrow><mn>10</mn><mi>y</mi></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>3</mn><mi>x</mi></mrow><mrow><mn>5</mn><mi>y</mi></mrow></mfrac></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>m</mi><mi>t</mi></msub><mo>&#x0003D;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>5</mn><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>5</mn></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mn>3</mn><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>5</mn></mrow></mfrac><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>16</mn></mrow><mrow><mn>5</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>y</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>5</mn></mrow></mfrac><mi>x</mi><mo>&#x0002B;</mo><mfrac><mrow><mn>16</mn></mrow><mrow><mn>5</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p>¿Para qué valores de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi></mrow></math> la recta <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo>&#x0003D;</mo><mi>b</mi></mrow></math> es tangente a la parábola <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math>?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p>Encuentra la ecuación de la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>w</mi><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>2</mn><mi>u</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></msqrt></mrow></mfrac></mstyle></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>w</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>u</mi><mo>&#x02212;</mo><mn>1</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p>Encuentra la ecuación de la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mroot><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></mrow></mfrac></mstyle></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>8</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>48</mn></mrow></mfrac></mstyle><mi>x</mi><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>5</mn></mrow><mrow><mn>12</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p>Encuentra la ecuación de la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mi>cos</mi><mi>x</mi></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>&#x003C0;</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p>Encuentra los puntos donde la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math> es paralela a la recta <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>10</mn><mi>x</mi><mo>&#x02212;</mo><mi>y</mi><mo>&#x0003D;</mo><mn>5</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002C;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p6",
        "title": "Ejercicio 6 · Práctica",
        "statement": "<p>Encuentra los puntos donde la recta tangente a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>u</mi></mrow></msup></mrow></math> es horizontal.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p7",
        "title": "Ejercicio 7 · Práctica",
        "statement": "<p>Encuentra la ecuación de la recta perpendicular a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>y</mi></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>6</mn></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mn>0</mn></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>9</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle><mi>x</mi><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>35</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p8",
        "title": "Ejercicio 8 · Práctica",
        "statement": "<p>Halla los puntos de la curva <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x02212;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></math> en los que la recta tangente es perpendicular a la recta <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><mn>9</mn></mrow></mfrac></mrow></math>. ¿En cuáles puntos la gráfica de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> posee rectas tangentes horizontales?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p>Tangente perpendicular en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002C;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002C;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Tangentes horizontales en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002C;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "reglas-derivacion",
    "number": "2.3",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Teoremas y reglas sobre derivadas",
    "description": "Derivadas básicas y reglas de suma, producto y cociente.",
    "objective": "Aplicar reglas de derivación justificando su elección.",
    "readiness": "Revisa la definición de derivada.",
    "theory": "<p>Calcular derivadas por definición es largo, por eso se usan reglas que se deducen de ella.</p><h3>Derivadas básicas</h3><p>Sean <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math> constantes reales. Aplica las fórmulas en los puntos donde las funciones son derivables. Para logaritmos reales se requiere argumento positivo; la base cumple <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x02260;</mo><mn>1</mn></mrow></math>. Para potencias reales, revisa el dominio antes de usar la regla: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>k</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>0</mn></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msup><mi>x</mi><mi>n</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>n</mi><mspace width=\"0.167em\" /><msup><mi>x</mi><mrow><mi>n</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>e</mi><mi>x</mi></msup></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msup><mi>a</mi><mi>x</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>a</mi><mi>x</mi></msup><mi>ln</mi><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msub><mi>log</mi><mi>a</mi></msub><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi><mi>ln</mi><mi>a</mi></mrow></mfrac></mtd></mtr></mtable></mrow></math></div><h3>Propiedades</h3><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>k</mi><mo>&#x000B7;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>k</mi><mo>&#x000B7;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x000B1;</mi><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x000B1;</mi><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd></mtr></mtable></mrow></math></div><h3>Regla del producto</h3><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div><h3>Regla del cociente</h3><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo stretchy=\"false\">[</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02260;</mo><mn>0</mn></mrow></math></div>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1 (suma de funciones)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>8</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>5</mn><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><msub><mi>log</mi><mn>3</mn></msub><mi>x</mi></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>24</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi><mi>ln</mi><mn>3</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2 (simplificar antes de derivar)",
        "statement": "<p>Derivar <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>6</mn><msqrt><mrow><msup><mi>x</mi><mn>5</mn></msup></mrow></msqrt><mo>&#x02212;</mo><mn>9</mn><msqrt><mrow><mi>x</mi></mrow></msqrt></mrow><mrow><mn>3</mn><msqrt><mrow><msup><mi>x</mi><mn>3</mn></msup></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se escribe con exponentes y se simplifica: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>6</mn><msup><mi>x</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow><mrow><mn>3</mn><msup><mi>x</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></mfrac><mo>&#x02212;</mo><mfrac><mrow><mn>9</mn><msup><mi>x</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow><mrow><mn>3</mn><msup><mi>x</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></mfrac><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002B;</mo><mn>3</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002B;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3 (regla del producto)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>1</mn></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>12</mn><mi>x</mi></mrow></math></div> (También se puede multiplicar primero los polinomios y luego derivar.)</p>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4 (regla del producto)",
        "statement": "<p>Derivar <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mroot><mrow><mi>x</mi></mrow><mn>3</mn></mroot><mo>&#x000B7;</mo><mi>ln</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x000B7;</mo><mi>ln</mi><mi>x</mi></mrow></math></span>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn></mrow></mfrac><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn><mroot><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn><mroot><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></mrow></mfrac><mo>&#x000B7;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mroot><mrow><mi>x</mi></mrow><mn>3</mn></mroot><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5 (regla del cociente)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></mfrac></mstyle></mrow></math> y evaluar en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>3</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>1</mn></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>8</mn><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>11</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x02212;</mo><mn>4</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>11</mn></mrow></math></div> Se obtiene el mismo resultado que por definición, pero con mucho menos trabajo.</p>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejemplo 6 (regla del cociente)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>ln</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002B;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e7",
        "title": "Ejemplo 7 (cociente con un producto en el numerador)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>x</mi><mi>ln</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Reconoce las operaciones que relacionan las funciones y elige las reglas correspondientes antes de simplificar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>El numerador es un producto, así que se deriva con la regla del producto: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mi>x</mi><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>1</mn><mo>&#x000B7;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mi>ln</mi><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><msup><mi>x</mi><mn>8</mn></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>x</mi><mn>5</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>16</mn><msup><mi>x</mi><mn>7</mn></msup><mo>&#x02212;</mo><mn>15</mn><msup><mi>x</mi><mn>4</mn></msup></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><msup><mi>x</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x02212;</mo><mn>6</mn><msup><mi>x</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x02212;</mo><mn>2</mn></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><msup><mi>x</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x02212;</mo><mn>4</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msqrt><mrow><mi>z</mi></mrow></msqrt><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mi>z</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><msqrt><mrow><mi>z</mi></mrow></msqrt></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><mi>z</mi><msqrt><mrow><mi>z</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><mi>z</mi><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>z</mi></mrow></mfrac></mstyle><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn></mrow><mrow><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mroot><mrow><mi>z</mi></mrow><mn>3</mn></mroot></mrow></mfrac></mstyle></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><mo>&#x02212;</mo><msup><mi>z</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0002B;</mo><mn>4</mn><msup><mi>z</mi><mrow><mo>&#x02212;</mo><mn>3</mn></mrow></msup><mo>&#x02212;</mo><msup><mi>z</mi><mrow><mo>&#x02212;</mo><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>s</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>s</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>s</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><msup><mi>s</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mi>s</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>6</mn><mi>s</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p6",
        "title": "Ejercicio 6 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow><mrow><mi>c</mi><mi>x</mi><mo>&#x0002B;</mo><mi>d</mi></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>a</mi><mi>d</mi><mo>&#x02212;</mo><mi>b</mi><mi>c</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>c</mi><mi>x</mi><mo>&#x0002B;</mo><mi>d</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p7",
        "title": "Ejercicio 7 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>u</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>u</mi><mo>&#x02212;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>u</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mi>u</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>u</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>8</mn><mi>u</mi><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>u</mi><mo>&#x0002B;</mo><mn>2</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p8",
        "title": "Ejercicio 8 · Práctica",
        "statement": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></span></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>10</mn><mo>&#x02212;</mo><mn>2</mn><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p9",
        "title": "Ejercicio 9 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>4</mn><mi>t</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p10",
        "title": "Ejercicio 10 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>ln</mi><mi>t</mi></mrow><mrow><mi>t</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>t</mi><mo>&#x02212;</mo><mi>t</mi><mi>ln</mi><mi>t</mi></mrow><mrow><mi>t</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "cadena",
    "number": "2.4",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Derivada de una función compuesta",
    "description": "Derivación de composiciones y combinación con otras reglas.",
    "objective": "Identificar composiciones y aplicar la regla de la cadena.",
    "readiness": "Recuerda derivadas básicas y composición.",
    "theory": "<p>Aplica la regla en puntos donde la función interior y la exterior sean derivables. En logaritmos reales el argumento debe ser positivo; en cocientes, el denominador no puede anularse.</p><p>La regla de la cadena se usa para derivar una <strong>composición de funciones</strong>, es decir, una función dentro de otra. Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, entonces: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> Se deriva la función «de afuera&#x27;&#x27; dejando igual la de adentro, y se multiplica por la derivada de la función «de adentro&#x27;&#x27;.</p><h3>Formas generales</h3><p>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msup><mi>u</mi><mi>n</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>n</mi><mspace width=\"0.167em\" /><msup><mi>u</mi><mrow><mi>n</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x000B7;</mo><msup><mi>u</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><msup><mi>e</mi><mi>u</mi></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>e</mi><mi>u</mi></msup><mo>&#x000B7;</mo><msup><mi>u</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>ln</mi><mi>u</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>u</mi><mi>&#x02032;</mi></msup></mrow><mrow><mi>u</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>sin</mi><mi>u</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>cos</mi><mi>u</mi><mo>&#x000B7;</mo><msup><mi>u</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>cos</mi><mi>u</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>u</mi><mo>&#x000B7;</mo><msup><mi>u</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>arctan</mi><mi>u</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>u</mi><mi>&#x02032;</mi></msup></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>&#x000B7;</mo><mn>2</mn><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>6</mn></msup></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>6</mn><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>5</mn></msup><mo>&#x000B7;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>20</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x02212;</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3 (comprobación)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math> de dos formas.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Desarrollando primero: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>8</mn><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></math></div> Con la regla de la cadena: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mn>2</mn><mo>&#x0003D;</mo><mn>4</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>8</mn><mi>x</mi><mo>&#x02212;</mo><mn>4</mn></mrow></math></div> Ambos resultados coinciden.</p>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>9</mn></mrow></msup></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mi>x</mi></mrow></msup></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>9</mn></mrow></msup><mo>&#x000B7;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x02212;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mi>x</mi></mrow></msup><mo>&#x000B7;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mrow><mo>&#x02212;</mo><mi>x</mi></mrow></msup></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>5</mn></msup></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>5</mn><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>4</mn></msup><mo>&#x000B7;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mn>5</mn><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejemplo 6 (con una función  desconocida)",
        "statement": "<p>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi></mrow></math> es derivable, derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mspace width=\"0.167em\" /><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>ln</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Recuerda que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>ln</mi><mn>2</mn></msup><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02260;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Es un producto, y cada factor requiere la regla de la cadena: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>3</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mi>g</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><msup><mi>g</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x000B7;</mo><mn>2</mn><mi>ln</mi><mi>x</mi><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mspace width=\"0.167em\" /><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>ln</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mspace width=\"0.167em\" /><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mi>ln</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mfrac><mrow><mn>2</mn><mi>ln</mi><mi>x</mi></mrow><mrow><mi>x</mi></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e7",
        "title": "Ejemplo 7 (cadena y cociente)",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msqrt><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></msqrt></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Se escribe <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span>. Derivadas auxiliares: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x000B7;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> Entonces: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mrow /></mtd><mtd columnalign=\"left\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x000B7;</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>7</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e8",
        "title": "Ejemplo 8 (usando propiedades de logaritmos)",
        "statement": "<p>Derivar <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>ln</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>e</mi><mrow><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><mn>5</mn><mi>x</mi></mrow></msqrt></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>.</p>",
        "review": "<p><strong>Pendiente de revisión docente.</strong> El argumento del logaritmo no es positivo en ningún punto de su dominio real. Este ejemplo no se propone como procedimiento válido en los reales.</p>",
        "analysis": "",
        "steps": [],
        "answer": "<p>Ejemplo suspendido: pendiente de reformulación docente. Consulta el registro de revisión.</p>",
        "notes": ""
      },
      {
        "sourceId": "e9",
        "title": "Ejemplo 9 (verificación de una derivada)",
        "statement": "<p>Verificar que si <span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>arctan</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mi>x</mi></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x02212;</mo><mi>arctan</mi><mi>x</mi></mrow></math></span>, entonces <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función exterior y su argumento. Deriva la exterior y multiplica por la derivada de la interior.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>La derivada del cociente interno es: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn><mo>&#x000B7;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div> Aplicando la regla de la cadena: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x02212;</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x000B7;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x000B7;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" /><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn></mrow></mfrac><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0003D;</mo><mn>0</mn></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>sec</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>5</mn><mi>sec</mi><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>10</mn><msup><mi>sin</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>sec</mi><mn>3</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>x</mi><mo>&#x02212;</mo><mn>7</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>3</mn></msup></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>27</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>7</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>3</mn><msup><mi>t</mi><mn>4</mn></msup></mrow><mrow><msqrt><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>t</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>18</mn><msup><mi>t</mi><mn>5</mn></msup><mo>&#x02212;</mo><mn>105</mn><msup><mi>t</mi><mn>4</mn></msup></mrow><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><msup><mi>t</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>t</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msup></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>4</mn><mi>x</mi><mo>&#x02212;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>e</mi><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></msup></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><msup><mi>e</mi><mi>x</mi></msup></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p6",
        "title": "Ejercicio 6 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>ln</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>t</mi><msqrt><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>t</mi></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>t</mi></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p7",
        "title": "Ejercicio 7 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>ln</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>y</mi><mo>&#x0002B;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>2</mn><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>y</mi><mo>&#x0002B;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>y</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p8",
        "title": "Ejercicio 8 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>sec</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msup><mi>e</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>2</mn><mi>z</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>2</mn><mi>z</mi></mrow></msup><mi>sec</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msup><mi>e</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>2</mn><mi>z</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mi>tan</mi><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msup><mi>e</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>2</mn><mi>z</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p9",
        "title": "Ejercicio 9 · Práctica",
        "statement": "<p>Si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> es derivable, derive <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>z</mi><msup><mi>e</mi><mi>z</mi></msup></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><msup><mi>z</mi><mn>2</mn></msup><msup><mi>e</mi><mi>z</mi></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "derivadas-trigonometricas",
    "number": "2.5",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Derivadas trigonométricas e inversas",
    "description": "Reglas y ejemplos de derivadas trigonométricas y funciones inversas.",
    "objective": "Derivar expresiones trigonométricas y sus inversas.",
    "readiness": "Recuerda producto, cociente y notación trigonométrica.",
    "theory": "<p>Trabaja con ángulos en radianes. Las reglas de arcoseno y arcocoseno se aplican para argumentos entre −1 y 1, sin incluir los extremos. Las demás expresiones requieren respetar los dominios y los denominadores de cada función. Se usa la rama decreciente habitual de la arcocotangente.</p><h3>Funciones trigonométricas</h3><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>sin</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>cos</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>tan</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><msup><mi>sec</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>cot</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><msup><mi>csc</mi><mn>2</mn></msup><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>sec</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mi>sec</mi><mi>x</mi><mi>tan</mi><mi>x</mi></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>csc</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>csc</mi><mi>x</mi><mi>cot</mi><mi>x</mi></mtd></mtr></mtable></mrow></math></div><h3>Funciones trigonométricas inversas</h3><div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>arcsin</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>arccos</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mi>arctan</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mo>arccot</mo><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mi>cos</mi><mi>x</mi></mrow></math> y evaluar en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mi>sin</mi><mi>x</mi></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mn>3</mn><mo>&#x000B7;</mo><mfrac><mrow><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>3</mn><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div> Coincide con el resultado obtenido por definición.</p>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mi>sec</mi><mi>x</mi></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>6</mn><mi>x</mi><mo>&#x02212;</mo><mn>5</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>sec</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mi>sec</mi><mi>x</mi><mi>tan</mi><mi>x</mi></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>6</mn><mi>x</mi><mo>&#x02212;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mi>sec</mi><mi>x</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mi>sec</mi><mi>x</mi><mi>tan</mi><mi>x</mi></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>arctan</mi><mi>x</mi></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>4</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>3</mn></mrow></msup><mi>arctan</mi><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x000B7;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>sin</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mi>sin</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mi>cos</mi><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><msup><mi>cos</mi><mn>2</mn></msup><mi>x</mi><mo>&#x0002B;</mo><msup><mi>sin</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup></mrow><mrow><mi>arccos</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mi>arccos</mi><mi>x</mi><mo>&#x02212;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x000B7;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mstyle></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>arccos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mi>arccos</mi><mi>x</mi><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mstyle></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>arccos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejemplo 6",
        "statement": "<p>Derivar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>x</mi><mi>ln</mi><mi>x</mi></mrow><mrow><mi>tan</mi><mi>x</mi><mo>&#x02212;</mo><mi>arccos</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Identifica la función trigonométrica o inversa y las operaciones de producto o cociente que intervienen.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mi>x</mi><mi>ln</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>tan</mi><mi>x</mi><mo>&#x02212;</mo><mi>arccos</mi><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><msup><mi>sec</mi><mn>2</mn></msup><mi>x</mi><mo>&#x0002B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>f</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>tan</mi><mi>x</mi><mo>&#x02212;</mo><mi>arccos</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msup><mi>sec</mi><mn>2</mn></msup><mi>x</mi><mo>&#x0002B;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mstyle><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>tan</mi><mi>x</mi><mo>&#x02212;</mo><mi>arccos</mi><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>arccos</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>arcsin</mi><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>g</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>arccos</mi><mi>x</mi><mo>&#x02212;</mo><mi>arcsin</mi><mi>x</mi></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>tan</mi><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mi>sec</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mi>sin</mi><mi>x</mi></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>e</mi><mi>z</mi></msup></mrow><mrow><mi>arccos</mi><mi>z</mi></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>e</mi><mi>z</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>arccos</mi><mi>z</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\" /><mo stretchy=\"false\">&#x00028;</mo><mi>arccos</mi><mi>z</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>arccot</mo><mi>z</mi></mrow><mrow><msqrt><mrow><mi>z</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><msqrt><mrow><mi>z</mi></mrow></msqrt><mspace width=\"0.167em\" /><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mstyle><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>arccot</mo><mi>z</mi></mrow><mrow><mn>2</mn><mi>z</mi><msqrt><mrow><mi>z</mi></mrow></msqrt></mrow></mfrac></mstyle></mrow></math></span></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "implicita",
    "number": "2.8",
    "unit": "Unidad 2. Derivada de una función",
    "title": "Derivación implícita",
    "description": "Derivación de relaciones sin despejar la variable dependiente.",
    "objective": "Derivar relaciones implícitas y despejar la derivada.",
    "readiness": "Revisa producto y regla de la cadena.",
    "theory": "<p>El procedimiento supone que la relación define localmente una función derivable de la variable elegida. Comprueba las restricciones de raíces y logaritmos y no dividas entre una expresión que se anule.</p><h3>Funciones explícitas e implícitas</h3><p>Una función es <strong>explícita</strong> cuando la variable dependiente está despejada, por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>4</mn><msup><mi>x</mi><mn>5</mn></msup><mo>&#x02212;</mo><mn>7</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>11</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>y</mi><mo>&#x0003D;</mo><mn>7</mn><msup><mi>e</mi><mrow><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn></mrow></msup></mrow></math></div> Una función es <strong>implícita</strong> cuando la variable dependiente no está despejada, por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>3</mn><mi>x</mi><mi>y</mi><mo>&#x0003D;</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math></div><h3>Idea principal</h3><p>En la derivación implícita se deriva ambos lados de la ecuación con respecto a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>, considerando que: <ul><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> es la variable, por lo que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>x</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>1</mn></mrow></math>.</li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> es una función de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, aunque no se conozca su fórmula. Por eso, cada vez que se deriva una expresión con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> se aplica la regla de la cadena y aparece <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>.</li></ul> Por ejemplo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">[</mo><mn>5</mn><mi>y</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>5</mn><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><msup><mi>y</mi><mn>2</mn></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mi>y</mi><mo>&#x000B7;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">[</mo><mi>cos</mi><mi>y</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>sin</mi><mi>y</mi><mo>&#x000B7;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math></div> Al final se agrupan los términos con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math> a un lado y se despeja.</p>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo 1",
        "statement": "<p>Determinar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mi>y</mi><mo>&#x0003D;</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mo stretchy=\"false\">[</mo><mn>3</mn><mi>y</mi><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo stretchy=\"false\">[</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mo stretchy=\"false\">]</mo><mi>&#x02032;</mi></msup></mtd></mtr><mtr><mtd columnalign=\"right\"><mn>3</mn><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>4</mn><mi>y</mi><mo>&#x000B7;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>8</mn><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><mn>3</mn><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><mn>4</mn><mi>y</mi><mo>&#x000B7;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>8</mn><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x02212;</mo><mn>4</mn><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>8</mn><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>8</mn><mi>x</mi></mrow><mrow><mn>3</mn><mo>&#x02212;</mo><mn>4</mn><mi>y</mi></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 2",
        "statement": "<p>Determinar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>&#x0003D;</mo><msup><mi>y</mi><mn>3</mn></msup><mo>&#x02212;</mo><mi>x</mi></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>El exponente <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> es un producto, así que se deriva con la regla del producto: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x000B7;</mo><mi>y</mi><mo>&#x0002B;</mo><mi>x</mi><mo>&#x000B7;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>&#x0002B;</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x02212;</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>y</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x02212;</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>y</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x02212;</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup></mrow><mrow><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>&#x02212;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 3",
        "statement": "<p>Determinar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msqrt><mrow><mi>y</mi></mrow></msqrt><mspace width=\"0.167em\" /><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>El lado derecho es un producto: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow><mrow><mn>2</mn><msqrt><mrow><mi>y</mi></mrow></msqrt></mrow></mfrac><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><msqrt><mrow><mi>y</mi></mrow></msqrt><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mo>&#x02212;</mo><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo stretchy=\"false\">&#x00028;</mo><mi>y</mi><mo>&#x0002B;</mo><mi>x</mi><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> Distribuyendo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><msqrt><mrow><mi>y</mi></mrow></msqrt></mrow></mfrac><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><mi>y</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>x</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math></div> Agrupando los términos con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math>: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mfrac><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><msqrt><mrow><mi>y</mi></mrow></msqrt></mrow></mfrac><mo>&#x0002B;</mo><mi>x</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>y</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mi>y</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>cos</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mn>2</mn><msqrt><mrow><mi>y</mi></mrow></msqrt></mrow></mfrac></mstyle><mo>&#x0002B;</mo><mi>x</mi><msqrt><mrow><mi>y</mi></mrow></msqrt><mi>sin</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 4 (evaluar en un punto)",
        "statement": "<p>Determinar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mstyle></mrow></math> en el punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x0002C;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>4</mn><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo>&#x0003D;</mo><mn>1</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Aquí <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi></mrow></math> es la variable y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> es la función: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><msup><mi>x</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo>&#x02212;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>x</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>x</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mtd></mtr></mtable></mrow></math></div> Por lo tanto, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00028;</mo><mn>4</mn><mo>&#x0002C;</mo><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math>.</p>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 5",
        "statement": "<p>Determinar <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>w</mi></mrow></mfrac></mstyle></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</p>",
        "review": "",
        "analysis": "<p>Deriva ambos lados respecto de la variable independiente. Agrupa los términos con la derivada buscada antes de despejar.</p>",
        "steps": [],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtable><mtr><mtd columnalign=\"right\"><mn>2</mn><mi>z</mi><mo>&#x000B7;</mo><msup><mi>z</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi></mrow></mfrac><mo>&#x000B7;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>z</mi><mi>&#x02032;</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mtd></mtr><mtr><mtd columnalign=\"right\"><mn>2</mn><mi>z</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>z</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>z</mi><mi>&#x02032;</mi></msup></mtd></mtr><mtr><mtd columnalign=\"right\"><mn>2</mn><mi>z</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>z</mi><mi>&#x02032;</mi></msup><mo>&#x02212;</mo><msup><mi>z</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>z</mi><mi>&#x02032;</mi></msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">]</mo></mrow></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\"><msup><mi>z</mi><mi>&#x02032;</mi></msup></mtd><mtd columnalign=\"left\"><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn><mi>z</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo>&#x0002B;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p>Calcula <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>3</mn><mo>&#x0002C;</mo><mn>0</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, dado <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>z</mi><mo>&#x0002B;</mo><mi>x</mi><msup><mi>z</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>9</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p>Calcula <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac></mstyle></mrow></math>, dado <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mi>x</mi><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><span class=\"math-region math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi></mrow></mfrac></mstyle></mrow></math></span></p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p>Suponga que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>e</mi><mi>y</mi></msup><mo>&#x0003D;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x000B7;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> define a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> como función de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>. Determina <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></math> en términos de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>y</mi></mrow><mrow><mi>y</mi><mo>&#x02212;</mo><mn>2</mn></mrow></mfrac></mstyle></mrow></math> \\quad y \\quad <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mstyle><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mo>&#x02212;</mo><mn>2</mn><mi>y</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>y</mi><mo>&#x02212;</mo><mn>2</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>3</mn></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p>Obtén <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0003D;</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>sin</mi><mi>x</mi><mo>&#x02212;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mo>&#x02212;</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p>Obtén <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math> si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>&#x02212;</mo><msup><mi>y</mi><mn>3</mn></msup><mo>&#x02212;</mo><mi>y</mi><mo>&#x0003D;</mo><mn>3</mn></mrow></math>.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>&#x02212;</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup></mrow></mfrac></mstyle></mrow></math></p>",
        "notes": ""
      }
    ]
  },
  {
    "id": "razones-cambio",
    "number": "3.2",
    "unit": "Unidad 3. Aplicaciones de la derivada",
    "title": "La derivada como razón de cambio",
    "description": "Razón de cambio promedio y problemas de magnitudes relacionadas.",
    "objective": "Relacionar magnitudes variables y calcular sus razones de cambio.",
    "readiness": "Revisa derivación implícita, unidades y modelos geométricos.",
    "theory": "<p>Una <strong>razón de cambio</strong> compara cuánto cambia una cantidad con respecto a otra. La velocidad media compara el desplazamiento con el tiempo transcurrido. La rapidez media compara la distancia recorrida con el tiempo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>velocidad&#x000A0;media</mtext><mo>&#x0003D;</mo><mfrac><mrow><mtext>posición&#x000A0;final</mtext><mo>&#x02212;</mo><mtext>posición&#x000A0;inicial</mtext></mrow><mrow><mtext>tiempo&#x000A0;final</mtext><mo>&#x02212;</mo><mtext>tiempo&#x000A0;inicial</mtext></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x00394;</mi><mspace width=\"0.167em\" /><mtext>posición</mtext></mrow><mrow><mi>&#x00394;</mi><mspace width=\"0.167em\" /><mtext>tiempo</mtext></mrow></mfrac></mrow></math></div><p>En general, si <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, la <strong>razón de cambio promedio</strong> de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> entre <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub></mrow></math> es: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>&#x00394;</mi><mi>y</mi></mrow><mrow><mi>&#x00394;</mi><mi>x</mi></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>&#x02212;</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac></mrow></math></div><p>En estos problemas varias cantidades cambian con el tiempo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi></mrow></math> y están relacionadas por una ecuación. Se conoce la razón de cambio de una de ellas y se pide la de otra en un instante determinado.</p><h3>Procedimiento</h3><ol><li>Hacer un dibujo e identificar las variables.</li><li><strong>Tasa de cambio conocida:</strong> escribirla como derivada con respecto al tiempo (por ejemplo, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mstyle></mrow></math>). Las unidades ayudan a identificarla. Si la cantidad disminuye, la derivada es negativa.</li><li><strong>¿Qué se solicita?:</strong> escribir la derivada buscada (por ejemplo, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mstyle></mrow></math>).</li><li><strong>Ecuación:</strong> buscar una fórmula que relacione las variables (volumen, área, Pitágoras, trigonometría). Si tiene variables de más, usar una ecuación auxiliar (por ejemplo, triángulos semejantes).</li><li><strong>Derivar implícitamente</strong> con respecto a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi></mrow></math>.</li><li><strong>Sustituir los datos del instante pedido</strong> y despejar la incógnita. Es importante sustituir después de derivar, nunca antes.</li></ol>",
    "examples": [
      {
        "sourceId": "e1",
        "title": "Ejemplo",
        "statement": "<p>Tres personas recorren la misma distancia de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>16</mn></mrow></math> km: una caminando en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>48</mn></mrow></math> horas, otra corriendo en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> horas y otra en motocicleta en <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mrow></math> de hora. Sus rapideces son: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>&#x0003D;</mo><mfrac><mrow><mn>16</mn><mtext>&#x000A0;</mtext><mtext>km</mtext></mrow><mrow><mn>48</mn><mtext>&#x000A0;</mtext><mtext>h</mtext></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>3</mn></mrow></mfrac><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>km</mtext></mrow><mrow><mtext>h</mtext></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><msub><mi>r</mi><mn>2</mn></msub><mo>&#x0003D;</mo><mfrac><mrow><mn>16</mn><mtext>&#x000A0;</mtext><mtext>km</mtext></mrow><mrow><mn>2</mn><mtext>&#x000A0;</mtext><mtext>h</mtext></mrow></mfrac><mo>&#x0003D;</mo><mn>8</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>km</mtext></mrow><mrow><mtext>h</mtext></mrow></mfrac><mo>&#x0002C;</mo><mspace width=\"2em\" /><msub><mi>r</mi><mn>3</mn></msub><mo>&#x0003D;</mo><mfrac><mrow><mn>16</mn><mtext>&#x000A0;</mtext><mtext>km</mtext></mrow><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mtext>&#x000A0;</mtext><mtext>h</mtext></mrow></mfrac><mo>&#x0003D;</mo><mn>64</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>km</mtext></mrow><mrow><mtext>h</mtext></mrow></mfrac></mrow></math></div> Entre menor es el tiempo para recorrer la misma distancia, mayor es la razón de cambio. A partir de las razones se pueden establecer conjeturas sobre cómo se comporta una cantidad.</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Aplicar el procedimiento",
            "body": ""
          }
        ],
        "answer": "<p>El desarrollo anterior contiene el resultado de la fuente.</p>",
        "notes": ""
      },
      {
        "sourceId": "e2",
        "title": "Ejemplo 1 (globo esférico)",
        "statement": "<p>Se bombea aire a un globo esférico de modo que su volumen aumenta a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>100</mn><mtext>&#x000A0;</mtext><msup><mtext>cm</mtext><mn>3</mn></msup><mo>&#x0002F;</mo><mtext>s</mtext></mrow></math>. ¿Con qué rapidez aumenta el radio cuando el diámetro es de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>50</mn></mrow></math> cm?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>100</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>r</mi><mo>&#x0003D;</mo><mn>25</mn><mtext>&#x000A0;</mtext><mtext>cm</mtext><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>V</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>4</mn></mrow><mrow><mn>3</mn></mrow></mfrac><mi>&#x003C0;</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math></div> Derivando con respecto al tiempo: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>V</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>4</mn></mrow><mrow><mn>3</mn></mrow></mfrac><mi>&#x003C0;</mi><mo>&#x000B7;</mo><mn>3</mn><msup><mi>r</mi><mn>2</mn></msup><mo>&#x000B7;</mo><msup><mi>r</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>4</mn><mi>&#x003C0;</mi><msup><mi>r</mi><mn>2</mn></msup><mo>&#x000B7;</mo><msup><mi>r</mi><mi>&#x02032;</mi></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>100</mn><mo>&#x0003D;</mo><mn>4</mn><mi>&#x003C0;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>25</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mspace width=\"0.167em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2500</mn><mi>&#x003C0;</mi><mspace width=\"0.167em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>25</mn><mi>&#x003C0;</mi></mrow></mfrac><mo>&#x02248;</mo><mn>0.013</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>cm</mtext></mrow><mrow><mtext>s</mtext></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e3",
        "title": "Ejemplo 2 (escalera que resbala)",
        "statement": "<p>Una escalera de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>10</mn></mrow></math> m se apoya en un muro vertical. Su extremo inferior se aleja de la pared a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math> m/s. ¿Con qué velocidad baja el extremo superior cuando el inferior está a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>6</mn></mrow></math> m de la pared?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> la distancia del pie a la pared y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> la altura del extremo superior: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mn>100</mn></mrow></math></div> Cuando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>6</mn></mrow></math>: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>36</mn><mo>&#x0002B;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mn>100</mn><mo>&#x021D2;</mo><mi>y</mi><mo>&#x0003D;</mo><mn>8</mn></mrow></math>. Derivando: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>2</mn><mi>y</mi><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>0</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>8</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>0</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>12</mn></mrow><mrow><mn>16</mn></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>0.75</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>m</mtext></mrow><mrow><mtext>s</mtext></mrow></mfrac></mrow></math></div> El extremo superior baja a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.75</mn></mrow></math> m/s.</p>",
        "notes": ""
      },
      {
        "sourceId": "e4",
        "title": "Ejemplo 3 (tanque cónico)",
        "statement": "<p>Un tanque en forma de cono invertido tiene radio <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> m y altura <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn></mrow></math> m. Se bombea agua a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mtext>&#x000A0;</mtext><msup><mtext>m</mtext><mn>3</mn></msup><mo>&#x0002F;</mo><mtext>min</mtext></mrow></math>. ¿Con qué velocidad sube el nivel cuando el agua alcanza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math> m?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mfrac><mrow><mi>d</mi><mi>h</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>V</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math></div> Como no se conoce <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>r</mi><mi>&#x02032;</mi></msup></mrow></math>, se usa una ecuación auxiliar por triángulos semejantes: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>r</mi></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>h</mi></mrow><mrow><mn>4</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>r</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>h</mi></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>V</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi><msup><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mfrac><mrow><mi>h</mi></mrow><mrow><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mn>2</mn></msup><mi>h</mi></mrow><mrow><mn>3</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>V</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>3</mn><mi>&#x003C0;</mi><msup><mi>h</mi><mn>2</mn></msup><mspace width=\"0.167em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup></mrow><mrow><mn>12</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi><msup><mi>h</mi><mn>2</mn></msup><mspace width=\"0.167em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup></mrow><mrow><mn>4</mn></mrow></mfrac></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mspace width=\"0.167em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup></mrow><mrow><mn>4</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>8</mn></mrow><mrow><mn>9</mn><mi>&#x003C0;</mi></mrow></mfrac><mo>&#x02248;</mo><mn>0.28</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>m</mtext></mrow><mrow><mtext>min</mtext></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e5",
        "title": "Ejemplo 4 (dos automóviles hacia un cruce)",
        "statement": "<p>El automóvil A viaja al oeste a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>50</mn></mrow></math> km/h y el B al norte a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>60</mn></mrow></math> km/h, ambos hacia el mismo cruce. ¿A qué velocidad se acercan cuando A está a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.3</mn></mrow></math> km y B a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.4</mn></mrow></math> km del cruce?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Sean <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi></mrow></math> las distancias al cruce y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>c</mi></mrow></math> la distancia entre los autos. Como las distancias disminuyen: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>a</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>50</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>b</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>60</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>c</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>c</mi><mn>2</mn></msup><mo>&#x0003D;</mo><msup><mi>a</mi><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math></div> En el instante pedido: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>c</mi><mo>&#x0003D;</mo><msqrt><mrow><msup><mn>0.3</mn><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mn>0.4</mn><mn>2</mn></msup></mrow></msqrt><mo>&#x0003D;</mo><mn>0.5</mn></mrow></math> km. Derivando: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mi>c</mi><mspace width=\"0.167em\" /><msup><mi>c</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mi>a</mi><mspace width=\"0.167em\" /><msup><mi>a</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>2</mn><mi>b</mi><mspace width=\"0.167em\" /><msup><mi>b</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>0.5</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>c</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>0.3</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>50</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>0.4</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>60</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>c</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>30</mn><mo>&#x02212;</mo><mn>48</mn><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>78</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>km</mtext></mrow><mrow><mtext>h</mtext></mrow></mfrac></mrow></math></div> La distancia entre los autos disminuye a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>78</mn></mrow></math> km/h.</p>",
        "notes": ""
      },
      {
        "sourceId": "e6",
        "title": "Ejemplo 5 (esfera de hielo)",
        "statement": "<p>Una esfera de hielo se derrite de modo que su superficie decrece a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mtext>&#x000A0;</mtext><msup><mtext>cm</mtext><mn>2</mn></msup><mo>&#x0002F;</mo><mtext>min</mtext></mrow></math>. ¿A qué velocidad disminuye el radio cuando mide <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>15</mn></mrow></math> cm?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>A</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>A</mi><mo>&#x0003D;</mo><mn>4</mn><mi>&#x003C0;</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>A</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>8</mn><mi>&#x003C0;</mi><mi>r</mi><mspace width=\"0.167em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mo>&#x02212;</mo><mn>2</mn><mo>&#x0003D;</mo><mn>8</mn><mi>&#x003C0;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>15</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>r</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mrow><mn>60</mn><mi>&#x003C0;</mi></mrow></mfrac><mo>&#x02248;</mo><mo>&#x02212;</mo><mn>0.0053</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>cm</mtext></mrow><mrow><mtext>min</mtext></mrow></mfrac></mrow></math></div> El radio disminuye a razón de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.0053</mn></mrow></math> cm/min.</p>",
        "notes": ""
      },
      {
        "sourceId": "e7",
        "title": "Ejemplo 6 (ángulo entre la escalera y la pared)",
        "statement": "<p>Una escalera de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn></mrow></math> m está apoyada en una pared. Su pie se aleja de la pared a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>25</mn></mrow></math> cm/s. ¿A qué velocidad aumenta el ángulo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B2;</mi></mrow></math> entre la pared y la escalera cuando el extremo superior está a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> m del suelo?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Trabajando en centímetros: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>25</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>&#x003B2;</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mtext>&#x000A0;</mtext><mo>&#x0003F;</mo><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>sin</mi><mi>&#x003B2;</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><mn>400</mn></mrow></mfrac></mrow></math></div> En el instante pedido, la altura es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>200</mn></mrow></math> cm, así que: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>cos</mi><mi>&#x003B2;</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>200</mn></mrow><mrow><mn>400</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>&#x003B2;</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math></div> Derivando: "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>cos</mi><mi>&#x003B2;</mi><mo>&#x000B7;</mo><msup><mi>&#x003B2;</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>400</mn></mrow></mfrac><mspace width=\"0.167em\" /><msup><mi>x</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mspace width=\"0.167em\" /><msup><mi>&#x003B2;</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>25</mn></mrow><mrow><mn>400</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>16</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>&#x003B2;</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>8</mn></mrow></mfrac><mo>&#x0003D;</mo><mn>0.125</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>rad</mtext></mrow><mrow><mtext>s</mtext></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e8",
        "title": "Ejemplo 7 (canoa de desagüe)",
        "statement": "<p>Una canoa mide <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math> m de largo y sus extremos son triángulos isósceles de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>10</mn></mrow></math> cm de base y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>10</mn></mrow></math> cm de altura, con el vértice hacia abajo. Recibe agua a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>50</mn><mtext>&#x000A0;</mtext><msup><mtext>cm</mtext><mn>3</mn></msup><mo>&#x0002F;</mo><mtext>s</mtext></mrow></math>. ¿A qué velocidad sube el nivel cuando alcanza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>8</mn></mrow></math> cm?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> el ancho de la superficie del agua y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi></mrow></math> su altura. El volumen es el área del triángulo por el largo (<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>300</mn></mrow></math> cm): <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>V</mi><mo>&#x0003D;</mo><mfrac><mrow><mi>x</mi><mspace width=\"0.167em\" /><mi>h</mi></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x000B7;</mo><mn>300</mn><mo>&#x0003D;</mo><mn>150</mn><mspace width=\"0.167em\" /><mi>x</mi><mspace width=\"0.167em\" /><mi>h</mi></mrow></math></div> Ecuación auxiliar por semejanza: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>h</mi></mrow><mrow><mn>10</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>x</mi><mo>&#x0002F;</mo><mn>2</mn></mrow><mrow><mn>5</mn></mrow></mfrac><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><mi>h</mi><mo>&#x0003D;</mo><mi>x</mi></mrow></math></div> <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>V</mi><mo>&#x0003D;</mo><mn>150</mn><msup><mi>h</mi><mn>2</mn></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>V</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>300</mn><mi>h</mi><mspace width=\"0.167em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>50</mn><mo>&#x0003D;</mo><mn>300</mn><mo stretchy=\"false\">&#x00028;</mo><mn>8</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>h</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>50</mn></mrow><mrow><mn>2400</mn></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>48</mn></mrow></mfrac><mo>&#x02248;</mo><mn>0.0208</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>cm</mtext></mrow><mrow><mtext>s</mtext></mrow></mfrac></mrow></math></div>",
        "notes": ""
      },
      {
        "sourceId": "e9",
        "title": "Ejemplo 8 (automóvil y camión)",
        "statement": "<p>Un auto se acerca a un cruce a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>9</mn></mrow></math> m/s. Cuando está a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>36</mn></mrow></math> m del cruce, un camión que viaja a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>12</mn></mrow></math> m/s pasa por el cruce en dirección perpendicular. ¿Con qué rapidez se separan <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> s después?</p>",
        "review": "",
        "analysis": "<p>Identifica las magnitudes y sus unidades. Relaciónalas mediante una ecuación y, cuando dependan del tiempo, deriva antes de sustituir los datos del instante.</p>",
        "steps": [
          {
            "title": "Paso 1. Desarrollar el cálculo",
            "body": "<p>Sea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> la distancia recorrida por el auto y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> la del camión: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>12</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>9</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><msup><mi>d</mi><mn>2</mn></msup><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>36</mn><mo>&#x02212;</mo><mi>y</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math></div> A los <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> s: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>24</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>18</mn></mrow></math>, así que <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>36</mn><mo>&#x02212;</mo><mi>y</mi><mo>&#x0003D;</mo><mn>18</mn></mrow></math> y <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mo>&#x0003D;</mo><msqrt><mrow><msup><mn>24</mn><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mn>18</mn><mn>2</mn></msup></mrow></msqrt><mo>&#x0003D;</mo><mn>30</mn></mrow></math> m. Derivando: <div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mi>d</mi><mspace width=\"0.167em\" /><msup><mi>d</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><msup><mi>x</mi><mi>&#x02032;</mi></msup><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>36</mn><mo>&#x02212;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>y</mi><mi>&#x02032;</mi></msup></mrow></math></div> "
          }
        ],
        "answer": "<div class=\"math-region\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>30</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mi>d</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>24</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>12</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>18</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>9</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>576</mn><mo>&#x02212;</mo><mn>324</mn><mo>&#x0003D;</mo><mn>252</mn><mspace width=\"1em\" /><mo>&#x021D2;</mo><mspace width=\"1em\" /><msup><mi>d</mi><mi>&#x02032;</mi></msup><mo>&#x0003D;</mo><mfrac><mrow><mn>252</mn></mrow><mrow><mn>60</mn></mrow></mfrac><mo>&#x0003D;</mo><mn>4.2</mn><mtext>&#x000A0;</mtext><mfrac><mrow><mtext>m</mtext></mrow><mrow><mtext>s</mtext></mrow></mfrac></mrow></math></div>",
        "notes": ""
      }
    ],
    "exercises": [
      {
        "sourceId": "p1",
        "title": "Ejercicio 1 · Práctica",
        "statement": "<p>Un hombre está parado en el borde de un muelle, remolcando hacia sí con una cuerda una lancha. Él recoge la cuerda a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>40</mn></mrow></math> cm/s, y sus manos se mantienen <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> m más altas que el punto en que la cuerda está atada a la lancha. ¿A qué velocidad se acerca la lancha al muelle cuando le faltan <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math> m para llegar?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p>Se acerca a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.4807</mn></mrow></math> m/s aproximadamente.</p>",
        "notes": ""
      },
      {
        "sourceId": "p2",
        "title": "Ejercicio 2 · Práctica",
        "statement": "<p>Una piedra cae en una laguna, creando una onda circular centrada en el punto de contacto. El radio de la onda aumenta a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>30</mn></mrow></math> cm/s. ¿A qué velocidad crece el área del círculo encerrado por la onda cuando su radio es <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math> m?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p>Crece a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>6000</mn><mi>&#x003C0;</mi><mo>&#x02248;</mo><mn>18</mn><mspace width=\"0.167em\" /><mn>849.6</mn><mtext>&#x000A0;</mtext><msup><mtext>cm</mtext><mn>2</mn></msup><mo>&#x0002F;</mo><mtext>s</mtext></mrow></math>.</p>",
        "notes": ""
      },
      {
        "sourceId": "p3",
        "title": "Ejercicio 3 · Práctica",
        "statement": "<p>De un tubo sale arena a razón de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>16</mn><mtext>&#x000A0;</mtext><msup><mtext>dm</mtext><mn>3</mn></msup><mo>&#x0002F;</mo><mtext>s</mtext></mrow></math>. Si la arena forma una pirámide cónica en el suelo cuya altura es siempre <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn></mrow></mfrac></mrow></math> del diámetro de la base, ¿con qué rapidez aumenta la altura de la pirámide cuando tiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn></mrow></math> dm de altura?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p>Aumenta a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>4</mn><mi>&#x003C0;</mi></mrow></mfrac></mstyle><mo>&#x02248;</mo><mn>0.0796</mn></mrow></math> dm/s.</p>",
        "notes": ""
      },
      {
        "sourceId": "p4",
        "title": "Ejercicio 4 · Práctica",
        "statement": "<p>Una mujer, en un muelle, tira de un bote a razón de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>15</mn></mrow></math> m/min sirviéndose de una soga amarrada al bote a nivel del agua. Si las manos de la mujer se hallan a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4.8</mn></mrow></math> m por arriba del nivel del agua, ¿con qué rapidez se aproxima el bote al muelle cuando le falta por recoger <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>6</mn></mrow></math> m de cuerda?</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p>Se acerca a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>25</mn></mrow></math> m/min.</p>",
        "notes": ""
      },
      {
        "sourceId": "p5",
        "title": "Ejercicio 5 · Práctica",
        "statement": "<p>Un avión vuela con velocidad constante, a una altura de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3000</mn></mrow></math> m, en una trayectoria recta que lo llevará directamente sobre un observador en tierra. En un instante dado, el observador advierte que el ángulo de elevación del avión es de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mi>&#x003C0;</mi></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></math> radianes y aumenta a razón de <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mn>60</mn></mrow></mfrac></mrow></math> rad/s. Determina la velocidad del avión.</p>",
        "review": "",
        "analysis": "",
        "steps": [],
        "answer": "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mrow><mn>200</mn></mrow><mrow><mn>3</mn></mrow></mfrac></mstyle><mo>&#x02248;</mo><mo>&#x02212;</mo><mn>66.67</mn></mrow></math> m/s, es decir, el avión vuela a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>66.67</mn></mrow></math> m/s hacia el observador.</p>",
        "notes": ""
      }
    ]
  }
]);
// FIN PORTAFOLIO IMPORTADO
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
routeAliases['cadena--ejemplo-e8']='cadena--ejemplo-e9';
const sourceNote='';
function analysis(item){
  if(!item.analysis) return '';
  return item.analysis.includes('<h4>') ? item.analysis : `<div class="analisis"><h4>Esquema de análisis</h4>${item.analysis}</div>`;
}
function procedure(item, topic, kind){
  const steps = item.steps.length ? `<div class="procedure"><h4>Desarrollo paso a paso</h4><div class="procedure-header"><p>Abre los pasos que necesites. El resultado está disponible al final.</p><button class="mode-toggle">Mostrar todos los pasos</button></div>${item.steps.map((step,i)=>{const id=`${topic}--${kind}-${item.sourceId}--paso-${i+1}`;return `<details class="step"><summary id="${id}">${step.title}</summary><div class="step-body">${step.body}<button data-save="${id}">Guardar este paso como punto de estudio</button></div></details>`;}).join('')}</div>` : '';
  return `${steps}<h4>Resultado</h4>${item.answer}`;
}
function indexList(topic,items,kind,label){
  return `<nav class="item-index" aria-label="${label}"><p><strong>${label}</strong></p><ol>${items.map(item=>`<li><a href="#${topic}--${kind}-${item.sourceId}">${item.title}</a></li>`).join('')}</ol></nav>`;
}
function examples(source){
  const t = {...source, examples:source.examples.filter(e=>!(source.id==='cadena' && e.sourceId==='e8'))};
  if(!t.examples.length) return '<p>Los ejemplos disponibles están integrados en la explicación teórica de este tema.</p>';
  const relations = t.relations ? `<p>Lee cada relación en este orden: función original, derivada y familia de primitivas. Las relaciones 10, 11 y 12 permiten comparar distintas constantes.</p>${indexList(t.id,t.relations,'relacion','Relaciones de la noción intuitiva')}${t.relations.map(r=>`<div class="academic-item" data-source-id="${r.sourceId}"><h3 id="${t.id}--relacion-${r.sourceId}" tabindex="-1">${r.title}</h3>${r.body}<a href="#${t.id}--ejemplos">Volver al índice de relaciones</a></div>`).join('')}` : '';
  return `${relations}<p>El esquema de análisis precede al desarrollo y explica por qué se elige cada procedimiento.</p>${indexList(t.id,t.examples,'ejemplo','Índice de ejemplos')}${t.examples.map((e,i)=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejemplo-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}${analysis(e)}${procedure(e,t.id,"ejemplo")}${e.notes}<div class="inline-actions"><a href="#${t.id}--ejemplos">Volver al índice de ejemplos</a>${t.examples[i+1]?`<a href="#${t.id}--ejemplo-${t.examples[i+1].sourceId}">Siguiente: ${t.examples[i+1].title}</a>`:''}</div></div>`).join('')}`;
}
function practice(t){
  if(!t.exercises.length)return '<p>Consulta las actividades incluidas en la teoría y los ejemplos de este tema.</p>';
  return `<p>Intenta resolver cada ejercicio. Después, abre su solución para comparar el resultado.</p>${indexList(t.id,t.exercises,'ejercicio','Índice de ejercicios')}${t.exercises.map(e=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejercicio-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}<details class="exercise-solution"><summary id="${t.id}--solucion-${e.sourceId}">Ver solución: ${e.title}</summary><div class="solution-body">${e.review && t.id==='introduccion' && e.sourceId==='p1' ? '<p>Atiende al signo al integrar: la primitiva tiene más uno dividido entre dos x al cuadrado.</p>' : ''}${analysis(e)}${procedure(e,t.id,"solucion")}${e.notes}<a href="#${t.id}--ejercicio-${e.sourceId}">Volver al enunciado: ${e.title}</a></div></details><a href="#${t.id}--practica">Volver al índice de ejercicios</a></div>`).join('')}`;
}
function solutions(t){
  return `<p>Las soluciones están junto a sus ejercicios. Selecciona uno para abrir su solución.</p>${indexList(t.id,t.exercises,'solucion','Soluciones de la práctica')}`;
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
export const home = `<article data-view="inicio"><div class="home-hero"><p class="home-kicker">CATÁLOGO DE ESTUDIO</p><h1 id="inicio" tabindex="-1">Cálculo Diferencial e Integral</h1><p class="lead">¿Qué tema quieres estudiar?</p></div><section class="home-search" aria-labelledby="home-search-title"><h2 id="home-search-title">Buscar un tema</h2><form id="home-search-form" role="search" aria-label="Buscar en el catálogo"><label for="home-search-query">Tema, apartado o ejemplo</label><div class="search-input-row"><input id="home-search-query" type="search" placeholder="Por ejemplo, derivación implícita" autocomplete="off"><button type="submit" class="primary">Buscar</button></div></form><div class="inline-actions"><button id="home-voice-start" aria-describedby="home-voice-note">Buscar por voz</button><button id="home-voice-stop" hidden>Cancelar escucha</button></div><p id="home-search-status" role="status"></p><ul id="home-search-results"></ul><details class="voice-privacy"><summary>Acerca del micrófono</summary><p id="home-voice-note">El navegador puede enviar audio a su proveedor de reconocimiento. El catálogo no guarda grabaciones ni consultas. Si el servicio no responde, escribe o usa el dictado del dispositivo en el campo de búsqueda.</p></details></section><div class="inline-actions"><button data-continue>Continuar donde quedé</button><a href="#home-topics">Explorar temas disponibles</a></div><details class="home-topics"><summary id="home-topics">Temas disponibles</summary><ol class="topic-list">${topics.map(t=>`<li><h3><a href="#${t.id}--tema">${t.title}</a></h3><p>${t.description}</p></li>`).join('')}</ol></details><p>También puedes usar el temario por unidades. Los contenidos sin material están identificados como pendientes.</p><a href="#ayuda">Ayuda para utilizar el curso</a></article>`;
