// MathML de presentación estructural, sin sustitutos de texto ni árboles duplicados.
export const mi = value => `<mi>${value}</mi>`;
export const mn = value => `<mn>${value}</mn>`;
export const mo = value => `<mo>${value}</mo>`;
export const row = value => `<mrow>${value}</mrow>`;
export const power = (base, exponent) => `<msup>${base}${typeof exponent==='number'?mn(exponent):exponent==='n'?mi('n'):exponent==='n + 1'?row(mi('n')+mo('+')+mn(1)):mo(exponent)}</msup>`;
export const fraction = (top, bottom) => `<mfrac>${row(top)}${row(bottom)}</mfrac>`;
export const parens = value => row(mo('(') + value + mo(')'));
export const integral = value => mo('∫') + row(value) + mo('⁢') + mi('d') + mi('x');
export const constant = mo('+') + mi('C');
export function formula(id, body) {
  return `<div class="math-region" role="region" aria-label="Expresión matemática ${id}" tabindex="0"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">${row(body)}</math></div>`;
}
