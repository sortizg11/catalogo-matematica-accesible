import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const step='sustitucion--ejemplo-e2--paso-2';
test('marcador explícito de paso persiste, gana al desplazamiento y abre el paso',async({page})=>{
 await page.goto('/#'+step); await expect(page.locator('#'+step)).toBeFocused();
 await page.locator(`[data-save="${step}"]`).click();await expect(page.locator('#saved-text')).toBeFocused();await expect(page.locator('#saved-text')).toContainText('Paso 2');await page.keyboard.press('Escape');
 await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
 await page.goto('/#introduccion--teoria');await page.goto('/');await page.locator('[data-view="inicio"] [data-continue]').click();
 await expect(page.locator('#'+step)).toBeFocused();await expect(page.locator('#'+step).locator('..')).toHaveAttribute('open','');
});
test('ubicación jerárquica, retorno al paso y preferencias sin cerrar pasos',async({page})=>{
 await page.goto('/#'+step);await page.locator('#tools-open').click();await page.locator('#where-open').click();
 await expect(page.locator('#where-text')).toBeFocused();await expect(page.locator('#where-text')).toContainText('Unidad 4');await expect(page.locator('#where-text')).toContainText('Ejemplo 2');await expect(page.locator('#where-text')).toContainText('Paso 2');
 await page.locator('#where-return').click();await expect(page.locator('#'+step)).toBeFocused();
 await page.locator('.header-actions [data-dialog="preferences"]').click();await page.locator('#contrast').check();await page.keyboard.press('Escape');await expect(page.locator('#'+step).locator('..')).toHaveAttribute('open','');
});
test('marcador en memoria cuando el almacenamiento está bloqueado',async({page})=>{
 await page.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}}));
 await page.goto('/#'+step);await page.locator(`[data-save="${step}"]`).click();await expect(page.locator('#saved-text')).toContainText('solo para esta sesión');await page.keyboard.press('Escape');
 await page.locator('.brand').click();await page.locator('[data-view="inicio"] [data-continue]').click();await expect(page.locator('#'+step)).toBeFocused();
});
test('búsqueda escrita: único destino, ambigüedad, pendiente, desconocido y texto seguro',async({page})=>{
 await page.goto('/');const open=()=>page.locator('.header-actions [data-dialog="search"]').click();
 await open();await expect(page.locator('#search-query')).toBeFocused();await page.locator('#search-query').fill('concepto de integral indefinida');await page.locator('#search-query').press('Enter');await expect(page.locator('#introduccion--concepto')).toBeFocused();
 await open();await page.locator('#search-query').fill('teoría');await page.locator('#search-query').press('Enter');await expect(page.locator('#search-results a')).toHaveCount(2);
 await page.locator('#search-query').fill('integración por partes');await page.locator('#search-query').press('Enter');await expect(page.locator('#search-status')).toContainText('pendiente');
 await page.locator('#search-query').fill('<img src=x onerror=alert(1)>');await page.locator('#search-query').press('Enter');await expect(page.locator('#search-status')).toContainText('No se encontró');await expect(page.locator('#search-results img')).toHaveCount(0);
 await page.keyboard.press('Escape');await expect(page.locator('.header-actions [data-dialog="search"]')).toBeFocused();
});
async function mockVoice(page){await page.addInitScript(()=>{window.SpeechRecognition=class {constructor(){window.recognition=this;}start(){window.startCount=(window.startCount||0)+1;}abort(){window.aborted=true;} };});}
test('voz simulada: permiso explícito de inicio, destino real, cancelación y eventos tardíos',async({page})=>{
 await mockVoice(page);await page.goto('/');await page.locator('.header-actions [data-dialog="search"]').click();expect(await page.evaluate(()=>window.startCount||0)).toBe(0);
 await page.locator('#voice-start').click();await expect(page.locator('#voice-stop')).toBeFocused();
 await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'integración por sustitución'}]]}));await expect(page.locator('#sustitucion--tema')).toBeFocused();
 await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#voice-start').click();await page.keyboard.press('Escape');
 await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'concepto de integral indefinida'}]]}));await expect(page.locator('#sustitucion--tema')).toBeVisible();expect(await page.evaluate(()=>window.aborted)).toBe(true);
});
test('voz simulada: error de permiso y alternativa escrita',async({page})=>{
 await mockVoice(page);await page.goto('/');await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#voice-start').click();await page.evaluate(()=>window.recognition.onerror({error:'not-allowed'}));await expect(page.locator('#search-query')).toBeFocused();await expect(page.locator('#search-status')).toContainText('No se permitió');
 await page.locator('#search-query').fill('sustitución');await page.locator('#search-query').press('Enter');await expect(page.locator('#search-results a')).not.toHaveCount(0);
});
test('búsqueda sin API y nuevos diálogos sin infracciones axe',async({page})=>{
 await page.addInitScript(()=>{window.SpeechRecognition=undefined;window.webkitSpeechRecognition=undefined;});await page.goto('/#introduccion--concepto');await page.locator('.header-actions [data-dialog="search"]').click();await expect(page.locator('#voice-start')).toBeDisabled();
 expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
 await page.keyboard.press('Escape');await page.locator('[data-save="introduccion--concepto"]').click();expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
 await page.keyboard.press('Escape');await page.locator('#tools-open').click();await page.locator('#where-open').click();expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
});
test('MathML intacto, envoltorios sin etiquetas técnicas, edición y búsqueda sin desbordamiento',async({page})=>{
 await page.goto('/#sustitucion--ejemplo-e2');await expect(page.locator('[data-view="sustitucion"] [data-source-id="e2"] math').first().locator('mfrac')).toHaveCount(2);
 const texts=await page.locator('#views').innerText();expect(texts).not.toMatch(/documento original|imagen manuscrita|resaltado rosa|numeración del documento/);
 await page.setViewportSize({width:320,height:850});await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#search-query').fill('teoría');await page.locator('#search-query').press('Enter');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('instrumento HTML con estructura accesible y casos matemáticos aislados',async({page})=>{
 await page.goto('/output/pdf/CDI-instrumento-prueba-2.html');
 await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('main section')).toHaveCount(18);
 expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
 await page.goto('/tests/fixtures/math-baseline.html');await expect(page.locator('main section')).toHaveCount(6);await expect(page.locator('#M01').locator('..').locator('mfrac')).toHaveCount(2);
 expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
});
