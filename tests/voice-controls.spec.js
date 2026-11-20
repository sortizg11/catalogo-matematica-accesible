import {test,expect} from '@playwright/test';
async function mock(page){await page.addInitScript(()=>{window.SpeechRecognition=class{constructor(){window.recognition=this;}start(){}stop(){window.stopped=true;}abort(){window.aborted=true;}};});}
test('botón estable, aviso real de escucha y terminar con revisión de texto',async({page})=>{
 await mock(page);await page.goto('/');await page.locator('#home-voice-review').check();await page.locator('#home-voice-start').click();
 await expect(page.locator('#home-voice-start')).toBeFocused();await expect(page.locator('#home-search-status')).toContainText('Conectando');
 await page.evaluate(()=>window.recognition.onstart());await expect(page.locator('#home-search-status')).toHaveText('Escuchando. Di el tema.');
 await page.locator('#home-voice-start').click();expect(await page.evaluate(()=>window.stopped)).toBe(true);
 await expect(page.locator('#home-voice-start')).toHaveAttribute('aria-disabled','true');
 await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'derivación implícita'}]]}));
 await expect(page.locator('#home-search-query')).toBeFocused();await expect(page.locator('#home-search-status')).toContainText('Texto reconocido');await expect(page.locator('#inicio')).toBeVisible();
 await page.locator('#home-search-query').press('Enter');await expect(page.locator('#implicita--tema')).toBeFocused();
});
test('buscar mientras escucha aborta y descarta resultados tardíos',async({page})=>{
 await mock(page);await page.goto('/');await page.locator('#home-voice-start').click();await page.locator('#home-search-query').fill('regla de la cadena');await page.locator('#home-search-query').press('Enter');
 await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'derivación implícita'}]]}));await expect(page.locator('#cadena--tema')).toBeVisible();expect(await page.evaluate(()=>window.aborted)).toBe(true);
});
test('terminar sin respuesta conserva el texto y permite recuperar el control',async({page})=>{
 await mock(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();
 await page.evaluate(()=>{const r=[[{transcript:'derivación'}]];r[0].isFinal=false;window.recognition.onresult({results:r});});
 await page.locator('#home-voice-start').click();await page.clock.fastForward(5001);await expect(page.locator('#home-search-query')).toBeFocused();await expect(page.locator('#home-search-query')).toHaveValue('derivación');await expect(page.locator('#home-search-status')).toContainText('No llegó');
 await expect(page.locator('#home-voice-start')).toHaveText('Iniciar búsqueda por voz');
});
test('coincidencias múltiples llevan a enlaces reales con foco',async({page})=>{
 await page.goto('/');await page.locator('#home-search-query').fill('teoría');await page.locator('#home-search-query').press('Enter');await expect(page.locator('#home-search-results a')).toHaveCount(11);await expect(page.locator('#home-search-results a').first()).toBeFocused();
});
test('la espera de conexión no consume los quince segundos de escucha',async({page})=>{
 await mock(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();await page.clock.fastForward(16000);await expect(page.locator('#home-search-status')).toContainText('Conectando');
 await page.evaluate(()=>window.recognition.onstart());await page.clock.fastForward(14000);await expect(page.locator('#home-search-status')).toHaveText('Escuchando. Di el tema.');await page.clock.fastForward(1001);await expect(page.locator('#home-search-status')).toContainText('15 segundos');
});
