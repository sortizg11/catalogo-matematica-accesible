import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('recorrido principal por teclado, pasos, solución y retorno sin errores JS',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await page.keyboard.press('Tab');await expect(page.getByRole('link',{name:'Saltar al contenido principal',exact:true})).toBeFocused();
  await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();
  await page.locator('[data-topic="sustitucion"]').focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--tema')).toBeFocused();
  await page.getByRole('link',{name:'Ejemplos resueltos',exact:true}).focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--ejemplos')).toBeFocused();
  const step=page.locator('[data-view="sustitucion"] summary').first();await step.focus();await page.keyboard.press('Enter');
  await expect(step).toBeFocused();await expect(step.locator('..')).toHaveAttribute('open','');
  await page.getByRole('link',{name:'Práctica',exact:true}).focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--practica')).toBeFocused();
  await page.getByRole('link',{name:'Consultar la solución del ejercicio 1'}).focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--solucion-1')).toBeFocused();
  await page.getByRole('link',{name:'Volver al ejercicio 1',exact:true}).focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--ejercicio-1')).toBeFocused();
  await page.getByRole('link',{name:'Volver al inicio del tema',exact:true}).focus();await page.keyboard.press('Enter');
  await expect(page.locator('#sustitucion--tema')).toBeFocused();expect(errors).toEqual([]);
});
test('centro modal: Tab, Mayús Tab, Escape, foco de destino y diálogo anidado',async({page})=>{
  await page.goto('/#sustitucion--tema');const opener=page.locator('#tools-open');await opener.click();
  await expect(page.locator('#tools')).toBeVisible();await expect(page.locator('#tools [data-close]')).toBeFocused();
  await page.keyboard.press('Shift+Tab');await expect(page.locator('#tools [data-dialog="preferences"]')).toBeFocused();
  await page.keyboard.press('Tab');await expect(page.locator('#tools [data-close]')).toBeFocused();
  await page.keyboard.press('Escape');await expect(opener).toBeFocused();
  await opener.click();await page.locator('#tools [data-section="practica"]').click();await expect(page.locator('#sustitucion--practica')).toBeFocused();await expect(page.locator('#tools')).not.toBeVisible();
  await opener.click();await page.locator('#tools [data-dialog="preferences"]').click();await page.keyboard.press('Escape');await expect(opener).toBeFocused();
});
test('semántica, destinos académicos y MathML estructural',async({page})=>{
  await page.goto('/#sustitucion--tema');
  const report=await page.evaluate(()=>{
    const visible=el=>!!el.getClientRects().length;
    const headings=[...document.querySelectorAll('h1,h2,h3,h4')].filter(visible).map(e=>+e.tagName[1]);
    return {h1:document.querySelectorAll('[data-view]:not([hidden]) h1').length,
      jumps:headings.some((level,i)=>i>0&&level>headings[i-1]+1),
      missing:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute('href').slice(1))).map(a=>a.href),
      math:[...document.querySelectorAll('math')].every(m=>m.namespaceURI==='http://www.w3.org/1998/Math/MathML')};
  });expect(report).toEqual({h1:1,jumps:false,missing:[],math:true});
  await expect(page.locator('math mfrac').first()).toBeAttached();await expect(page.locator('math msqrt')).toHaveCount(1);await expect(page.locator('math msubsup')).toHaveCount(1);
});
test('axe WCAG A/AA en vistas y diálogos',async({page})=>{
  test.setTimeout(120000);
  for(const id of ['inicio','inmediata--tema','sustitucion--tema','ayuda']){
    await page.goto('/#'+id);
    const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa','best-practice']).analyze();
    expect(result.violations,JSON.stringify(result.violations,null,2)).toEqual([]);
  }
  for(const id of ['tools','preferences']){
    await page.goto('/');await page.locator(id==='tools'?'#tools-open':'.header-actions [data-dialog="preferences"]').click();
    const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(result.violations).toEqual([]);
  }
});
test('preferencias persistentes, modo completo y restablecimiento',async({page})=>{
  await page.goto('/#sustitucion--ejemplos');await page.locator('.header-actions [data-dialog="preferences"]').click();
  await page.locator('#contrast').check();await page.locator('#font-size').selectOption('125');await page.locator('#reading-mode').selectOption('full');await page.locator('#shortcuts').check();
  await page.keyboard.press('Escape');await page.reload();
  await expect(page.locator('html')).toHaveClass('high-contrast');await expect(page.locator('html')).toHaveCSS('font-size','20px');
  expect(await page.locator('.step:not([open])').count()).toBe(0);
  await page.locator('.header-actions [data-dialog="preferences"]').click();await expect(page.locator('#shortcuts')).toBeChecked();await page.locator('#reset').click();await expect(page.locator('#shortcuts')).not.toBeChecked();await expect(page.locator('html')).not.toHaveClass('high-contrast');
});
test('menú oculto fuera de Tab y grupos operables con teclado',async({page})=>{
  await page.goto('/');await page.locator('#unit-2').focus();await page.keyboard.press('Enter');await expect(page.locator('#unit-list-2')).not.toBeVisible();await page.keyboard.press('Enter');await expect(page.locator('#unit-list-2')).toBeVisible();
  await page.locator('#menu-toggle').click();await expect(page.locator('#sidebar')).not.toBeVisible();
  for(let i=0;i<20;i++){await page.keyboard.press('Tab');expect(await page.evaluate(()=>!!document.activeElement.closest('#temario'))).toBe(false);}
  await page.locator('#menu-toggle').click();await expect(page.locator('#sidebar')).toBeVisible();
});
test('menú móvil modal, cierre y navegación',async({page})=>{
  await page.setViewportSize({width:320,height:800});await page.goto('/');await page.locator('#menu-toggle').click();await expect(page.locator('#menu-dialog')).toBeVisible();
  await page.keyboard.press('Shift+Tab');expect(await page.evaluate(()=>!!document.activeElement.closest('#menu-dialog'))).toBe(true);
  await page.keyboard.press('Escape');await expect(page.locator('#menu-toggle')).toBeFocused();
  await page.locator('#menu-toggle').click();await page.locator('[data-topic="sustitucion"]').click();await expect(page.locator('#menu-dialog')).not.toBeVisible();await expect(page.locator('#sustitucion--tema')).toBeFocused();
});
test('reflujo a 320 CSS px y texto a 200 %',async({page})=>{
  for(const width of [1440,720,320]){
    await page.setViewportSize({width,height:900});await page.goto('/#sustitucion--tema');
    if(width===720)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.locator('.header-actions [data-dialog="preferences"]').click();
    expect(await page.locator('#preferences').evaluate(el=>el.scrollWidth<=el.clientWidth+1)).toBe(true);
    await page.keyboard.press('Escape');
  }
});
test('continuar explícito y navegación de historial',async({page})=>{
  await page.goto('/#sustitucion--practica');await expect(page.locator('#sustitucion--practica')).toBeFocused();await page.waitForTimeout(150);
  await page.goto('/');await expect(page.locator('#inicio')).toBeVisible();await page.locator('[data-view="inicio"] [data-continue]').click();await expect(page.locator('#sustitucion--practica')).toBeFocused();
  await page.getByRole('link',{name:'Teoría',exact:true}).click();await page.goBack();await expect(page.locator('#sustitucion--practica')).toBeFocused();
});
test('almacenamiento bloqueado no rompe la navegación',async({page})=>{
  await page.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}});});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/#inmediata--tema');await page.locator('.header-actions [data-dialog="preferences"]').click();await page.locator('#contrast').check();await expect(page.locator('#preference-status')).toContainText('almacenamiento no está disponible');await page.keyboard.press('Escape');await page.getByRole('link',{name:'Práctica',exact:true}).click();await expect(page.locator('#inmediata--practica')).toBeFocused();expect(errors).toEqual([]);
});
test('atajos desactivados inicialmente y excluidos en fórmulas y diálogos',async({page})=>{
  await page.goto('/#sustitucion--tema');await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).not.toBeVisible();
  await page.locator('.header-actions [data-dialog="preferences"]').click();await page.locator('#shortcuts').check();await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).not.toBeVisible();await page.keyboard.press('Escape');
  await page.locator('#sustitucion--tema').focus();await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).toBeVisible();await page.keyboard.press('Escape');
  await page.locator('[data-view="sustitucion"] .math-region').first().focus();await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).not.toBeVisible();
});
test('ubicación explícita, todos los pasos y evidencia visual',async({page})=>{
  await page.goto('/#sustitucion--ejercicio-1');await page.locator('#tools-open').click();await page.locator('#where-open').click();await expect(page.locator('#where-text')).toContainText('Ejercicio 1');await page.keyboard.press('Escape');await expect(page.locator('#tools-open')).toBeFocused();
  await page.goto('/#sustitucion--tema');await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'docs/evidencia/escritorio.png',fullPage:false});
  await page.setViewportSize({width:320,height:800});await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'docs/evidencia/movil.png',fullPage:false});
});
