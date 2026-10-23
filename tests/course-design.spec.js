import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('identidad institucional disponible solo al expandir con teclado',async({page})=>{
  await page.goto('/');
  await expect(page.locator('.brand')).toHaveAccessibleName('Cálculo Diferencial e Integral');
  const info=page.locator('#institution');
  await expect(info).not.toHaveAttribute('open','');
  await expect(info.locator('.institution-content')).not.toBeVisible();
  expect(await page.locator('header').ariaSnapshot()).not.toContain('Tecnológico de Costa Rica');
  await info.locator('summary').focus();await page.keyboard.press('Enter');
  await expect(info.locator('summary')).toBeFocused();
  await expect(info.locator('.institution-content')).toBeVisible();
  expect(await page.locator('header').ariaSnapshot()).toContain('Escuela de Matemática - Departamento de Orientación y Psicología');
  expect(await page.locator('header').ariaSnapshot()).toContain('Tecnológico de Costa Rica');
  const results=await new AxeBuilder({page}).include('header').withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
  await page.keyboard.press('Space');await expect(info.locator('.institution-content')).not.toBeVisible();
});

test('temario propio inicia con límites y conserva el bloque de integrales',async({page})=>{
  await page.goto('/');
  await expect(page.locator('.unit-toggle')).toHaveText(['Unidad 1. Límites y continuidad','Unidad 2. Derivada de una función','Unidad 3. Aplicaciones de la derivada','Unidad 4. Integral indefinida','Unidad 5. Integral definida','Unidad 6. Integrales impropias']);
  await page.locator('#unit-1').focus();await page.keyboard.press('Enter');
  await expect(page.locator('#unit-list-1')).toBeVisible();await expect(page.locator('#unit-list-1 a')).toHaveCount(0);
  await expect(page.locator('#unit-list-4')).toContainText('Reglas de integración');
  await page.locator('#temario [data-topic="sustitucion"]').click();await expect(page.locator('#sustitucion--tema')).toBeFocused();
  await expect(page.locator('#breadcrumbs')).toContainText('Unidad 4. Integral indefinida');
  await page.goto('/#ayuda');await page.locator('#tour-unit').click();await expect(page.locator('#unit-4')).toBeFocused();
});

test('encabezado y datos institucionales sin desbordar a 320 px y 200 por ciento',async({page})=>{
  await page.goto('/');
  await page.screenshot({path:'docs/evidencia/encabezado-escritorio.png'});
  await page.setViewportSize({width:320,height:850});
  await page.screenshot({path:'docs/evidencia/encabezado-movil.png'});
  await page.locator('#institution summary').click();
  await page.screenshot({path:'docs/evidencia/institucion-movil.png'});
  for(const scale of ['100%','200%']){
    await page.evaluate(scale=>document.documentElement.style.fontSize=scale,scale);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await expect(page.locator('#institution .institution-content')).toBeVisible();
  }
});
