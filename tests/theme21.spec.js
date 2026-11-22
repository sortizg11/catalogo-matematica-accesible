import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('alto contraste en búsqueda y solución conserva legibilidad, foco y reflujo',async({page})=>{
 await page.goto('/');await page.locator('.header-actions [data-dialog="preferences"]').click();await page.locator('#contrast').check();await page.keyboard.press('Escape');
 for(const route of ['inicio','sustitucion--solucion-p4']){
  await page.goto('/#'+route);await page.setViewportSize({width:320,height:900});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const r=await new AxeBuilder({page}).include('[data-view]:not([hidden])').include('.topbar').withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(r.violations).toEqual([]);
 }
});
