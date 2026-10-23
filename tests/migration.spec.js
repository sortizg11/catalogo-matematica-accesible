import {test,expect} from '@playwright/test';
import {academic} from '../src/academic-content.js';

test('reglas permanece pendiente dentro de introducción',async({page})=>{
  await page.goto('/#introduccion--tema');
  await expect(page.locator('#introduccion--reglas')).toHaveText('Reglas de integración');
  await expect(page.locator('[data-view="introduccion"] [data-source-id]')).toHaveCount(25);
  await expect(page.locator('#unit-list-4')).toContainText('Reglas de integración');
});

test('ejemplos originales, todos los pasos y dominios en su unidad',async({page})=>{
  await page.goto('/#sustitucion--ejemplos');
  for(const item of academic.substitution.examples){
    const block=page.locator(`[data-view="sustitucion"] [data-source-id="${item.sourceId}"]`);
    await expect(block.locator('h3')).toHaveText(item.title);
    await expect(block.locator('details.step')).toHaveCount(item.steps.length);
    await expect(block).toContainText('Dominio real:');
    await expect(block.locator('.step[open]')).toHaveCount(0);
  }
  await page.getByRole('link',{name:'Ejemplo 3 segunda aparición Raíz de uno más x al cuadrado',exact:true}).first().click();
  await expect(page.locator('#sustitucion--ejemplo-e3b')).toBeFocused();
  await page.locator('#sustitucion--ejemplo-e3b').locator('..').getByRole('button',{name:'Mostrar todos los pasos'}).click();
  expect(await page.locator('details.step:not([open])').count()).toBe(0);
});

test('identificadores únicos y jerarquía de encabezados en todas las unidades',async({page})=>{
  for(const topic of ['introduccion','sustitucion']){
    await page.goto(`/#${topic}--tema`);
    const result=await page.evaluate(()=>{
      const ids=[...document.querySelectorAll('[id]')].map(n=>n.id);
      const hs=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(n=>n.getClientRects().length).map(n=>Number(n.tagName[1]));
      return {duplicates:ids.filter((id,i)=>ids.indexOf(id)!==i),skips:hs.filter((h,i)=>i&&h>hs[i-1]+1),h1:hs.filter(h=>h===1).length};
    });expect(result).toEqual({duplicates:[],skips:[],h1:1});
  }
});

test('enlaces antiguos y marcador guardado conservan un destino útil',async({page})=>{
  await page.goto('/#inmediata--tema');await expect(page.locator('#introduccion--tema')).toBeFocused();
  await page.goto('/#sustitucion--ejemplo-1');await expect(page.locator('#sustitucion--ejemplo-e2')).toBeFocused();
  await page.evaluate(()=>localStorage.setItem('catalogo-v1:last-location',JSON.stringify('sustitucion--ejercicio-1')));
  await page.goto('/');await page.locator('[data-view="inicio"] [data-continue]').click();
  await expect(page.locator('#sustitucion--ejercicio-p4')).toBeFocused();
});

test('las cinco prácticas enlazan su solución y conservan el regreso',async({page})=>{
  for(const [topic,data] of [['introduccion',academic.indefinite],['sustitucion',academic.substitution]]){
    await page.goto(`/#${topic}--practica`);
    for(const exercise of data.exercises){
      const number=exercise.sourceId.slice(1);
      await page.getByRole('link',{name:`Consultar la solución del ejercicio ${number}`,exact:true}).click();
      await expect(page.locator(`#${topic}--solucion-${exercise.sourceId}`)).toBeFocused();
      await page.getByRole('link',{name:`Volver al ejercicio ${number}`,exact:true}).click();
      await expect(page.locator(`#${topic}--ejercicio-${exercise.sourceId}`)).toBeFocused();
    }
  }
});

test('recorrido voluntario abre la unidad de técnicas y el ejemplo 2',async({page})=>{
  await page.goto('/#ayuda');await page.locator('#tour-unit').click();await expect(page.locator('#unit-4')).toBeFocused();
  await page.getByRole('link',{name:'Acceder al ejemplo de sustitución'}).click();await expect(page.locator('#sustitucion--ejemplo-e2')).toBeFocused();
});

test('marcador automático persiste sin abrir el tema al volver al inicio',async({page})=>{
  await page.goto('/#sustitucion--practica');
  await expect.poll(()=>page.evaluate(()=>JSON.parse(localStorage.getItem('catalogo-v1:last-location')))).toMatch(/^sustitucion--/);
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('catalogo-v1:last-location')));
  await page.goto('/');
  await expect(page.locator('#inicio')).toBeVisible();
  await page.locator('[data-view="inicio"] [data-continue]').click();
  await expect(page.locator(`[id="${saved}"]`)).toBeFocused();
});

test('el enlace al antiguo concepto abre la introducción unificada',async({page})=>{
  await page.goto('/#indefinida--ejemplo-e1a');
  await expect(page.locator('#introduccion--ejemplo-e1a')).toBeFocused();
  await expect(page.locator('#introduccion--tema')).toHaveText('Introducción a las integrales');
});
