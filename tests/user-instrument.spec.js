import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('instrumento HTML: etiquetas, destinos, teclado y axe',async({page})=>{
 await page.goto('/output/evaluacion-usuario-1.5/Instrumento-persona-usuaria-CDI.html');
 await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('main section')).toHaveCount(15);await expect(page.locator('textarea')).toHaveCount(56);
 expect(await page.evaluate(()=>[...document.querySelectorAll('textarea')].every(e=>document.querySelector(`label[for="${e.id}"]`)))).toBe(true);
 await page.locator('textarea').first().focus();await page.keyboard.type('Nota de prueba');await expect(page.locator('textarea').first()).toHaveValue('Nota de prueba');
 const r=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(r.violations).toEqual([]);
 await page.setViewportSize({width:320,height:800});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
