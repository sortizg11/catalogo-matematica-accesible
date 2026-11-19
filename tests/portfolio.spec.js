import {test,expect} from '@playwright/test';
import {topics} from '../src/content.js';
test('temas importados: destinos, matemática, teclado y reflujo',async({page})=>{
 test.setTimeout(240000);
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 for(const topic of topics.filter(t=>!['introduccion','sustitucion'].includes(t.id))){
  await page.goto('/#'+topic.id+'--tema');
  await expect(page.locator('#'+topic.id+'--tema')).toBeVisible();
  const article=page.locator(`[data-view="${topic.id}"]`);
  expect(await article.locator('math').count()).toBeGreaterThan(0);
  expect(await article.innerText()).not.toMatch(/\\(?:begin|end|frac|dfrac|textbf|lim|subsection)\b|@@M\d/);
  if(topic.exercises.length){
   await page.goto('/#'+topic.id+'--ejercicio-p1');
   await article.getByRole('link',{name:'Consultar la solución del ejercicio 1',exact:true}).click();
   await expect(page.locator('#'+topic.id+'--solucion-p1')).toBeFocused();
  }
  await page.setViewportSize({width:320,height:800});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),topic.id).toBe(true);
  await page.setViewportSize({width:1440,height:1000});
 }
 expect(errors).toEqual([]);
});
