import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
async function voice(page){await page.addInitScript(()=>{window.instances=[];window.SpeechRecognition=class{constructor(){window.recognition=this;window.instances.push(this);}start(){}abort(){this.aborted=true;}};});}
async function say(page,text){await page.evaluate(text=>{const r=[[{transcript:text}]];r[0].isFinal=false;window.recognition.onresult({results:r});},text);}
test('voz: silencio automático, anuncio completo y un clic al destino',async({page})=>{
 await voice(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();await page.evaluate(()=>window.recognition.onstart());
 await say(page,'buscar derivación implícita');await page.clock.fastForward(3000);await expect(page.locator('#home-voice-stop')).toBeVisible();await page.clock.fastForward(501);
 await expect(page.locator('#home-search-status')).toContainText('Texto reconocido: «buscar derivación implícita»');await expect(page.locator('#home-search-status')).toHaveAttribute('aria-atomic','true');await expect(page.locator('#inicio')).toBeVisible();
 await expect(page.locator('#home-search-results a')).toHaveCount(1);await expect(page.locator('#home-voice-start')).toBeFocused();await page.keyboard.press('Tab');await expect(page.locator('#home-search-results a')).toBeFocused();await page.locator('#home-search-results a').click();await expect(page.locator('#implicita--tema')).toBeFocused();
});
test('voz: actividad nueva reinicia espera y cierre del proveedor conserva texto',async({page})=>{
 await voice(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();await say(page,'regla');await page.clock.fastForward(3000);await say(page,'regla de la cadena');await page.clock.fastForward(3000);await expect(page.locator('#home-voice-stop')).toBeVisible();await page.evaluate(()=>window.recognition.onend());await page.clock.fastForward(3501);await expect(page.locator('#home-search-results a')).toHaveAttribute('href','#cadena--tema');
});
test('voz: perfil del jueves, sin reinicio automático y alternativa escrita',async({page})=>{
 await voice(page);await page.goto('/');await page.locator('#home-voice-start').click();
 expect(await page.evaluate(()=>({lang:window.recognition.lang,continuous:window.recognition.continuous,interim:window.recognition.interimResults}))).toEqual({lang:'es',continuous:false,interim:true});
 await page.evaluate(()=>{window.recognition.onend();window.instances[0].onresult({results:[[{transcript:'tardío'}]]});});await expect(page.locator('#home-search-query')).toHaveValue('');
 expect(await page.evaluate(()=>window.instances.length)).toBe(1);await expect(page.locator('#home-search-status')).toContainText('sin devolver texto');
 await page.locator('#home-voice-start').click();await page.evaluate(()=>window.recognition.onerror({error:'network'}));await expect(page.locator('#home-search-status')).toContainText('otro navegador');await page.locator('#home-search-query').fill('derivación implícita');await page.locator('#home-search-query').press('Enter');await expect(page.locator('#implicita--tema')).toBeFocused();
});
test('voz: cancelar, Escape, edición y navegación descartan transcripciones tardías',async({page})=>{
 await voice(page);await page.goto('/');await page.clock.install();
 for(const method of ['cancel','escape','edit']){
  await page.locator('#home-voice-start').click();await say(page,'derivación implícita');
  if(method==='cancel')await page.locator('#home-voice-stop').click();else if(method==='escape')await page.keyboard.press('Escape');else await page.locator('#home-search-query').fill('regla de la cadena');
  await say(page,'sustitución');await page.clock.fastForward(4000);await expect(page.locator('#home-search-results a')).toHaveCount(0);await expect(page.locator('#inicio')).toBeVisible();
 }
 await page.locator('#home-voice-start').click();await page.evaluate(()=>location.hash='cadena--tema');await expect(page.locator('#cadena--tema')).toBeVisible();await say(page,'derivación implícita');await page.clock.fastForward(4000);await expect(page.locator('#cadena--tema')).toBeVisible();
});
test('soluciones junto al enunciado, teclado y marcadores antiguos',async({page})=>{
 await page.goto('/#sustitucion--ejercicio-p4');const solution=page.locator('#sustitucion--solucion-p4');await expect(solution.locator('..')).not.toHaveAttribute('open','');await solution.focus();await page.keyboard.press('Enter');await expect(solution.locator('..')).toHaveAttribute('open','');await expect(solution.locator('..').locator('math')).not.toHaveCount(0);
 await page.locator('.exercise-solution a[href="#sustitucion--ejercicio-p4"]').click();await expect(page.locator('#sustitucion--ejercicio-p4')).toBeFocused();await page.goto('/#sustitucion--solucion-p4');await expect(solution).toBeFocused();await expect(solution.locator('..')).toHaveAttribute('open','');
 const r=await page.evaluate(()=>[...document.querySelectorAll('.exercise-solution')].every(d=>d.closest('.academic-item').querySelector('h3[id*="--ejercicio-"]')));expect(r).toBe(true);
});
test('atajos activos, elección persistente y exclusiones de edición y diálogo',async({page})=>{
 await page.goto('/#cadena--tema');await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).toBeVisible();await page.keyboard.press('Escape');await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#search-query').press('Alt+Shift+h');await expect(page.locator('#tools')).not.toBeVisible();await page.keyboard.press('Escape');
 await page.locator('.header-actions [data-dialog="preferences"]').click();await page.locator('#shortcuts').uncheck();await page.keyboard.press('Escape');await page.reload();await page.keyboard.press('Alt+Shift+h');await expect(page.locator('#tools')).not.toBeVisible();
});
test('presentación uniforme, sin notas internas y HTML por tema',async({page})=>{
 await page.goto('/');const report=await page.evaluate(()=>({bad:[...document.querySelectorAll('[data-view]')].some(v=>/revisión docente|no se ha verificado|Ejemplo suspendido|Prototipo/.test(v.textContent)),ids:[...document.querySelectorAll('[id]')].map(e=>e.id)}));expect(report.bad).toBe(false);expect(new Set(report.ids).size).toBe(report.ids.length);
 await page.goto('/#cadena--ejemplo-e8');await expect(page.locator('#cadena--ejemplo-e9')).toBeFocused();
 await page.goto('/materials/portafolio-calculo/html/sustitucion.html#sustitucion--solucion-p4');await expect(page.locator('#sustitucion--solucion-p4').locator('..')).toHaveAttribute('open','');
});
test('diagnóstico axe de inicio, solución abierta y ayuda; reflujo móvil',async({page})=>{
 for(const route of ['inicio','sustitucion--solucion-p4','ayuda']){
  await page.goto('/#'+route);const r=await new AxeBuilder({page}).include('main').withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(r.violations).toEqual([]);
  await page.setViewportSize({width:320,height:850});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});
