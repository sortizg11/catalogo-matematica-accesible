import {test,expect} from '@playwright/test';
async function mock(page){await page.addInitScript(()=>{window.SpeechRecognition=class{constructor(){window.recognition=this;}start(){}abort(){window.aborted=true;}};});}
test('conexión y escucha tienen límites independientes',async({page})=>{
 await mock(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();await page.clock.fastForward(19000);await expect(page.locator('#home-search-status')).toContainText('Conectando');await page.evaluate(()=>window.recognition.onstart());await page.clock.fastForward(19000);await expect(page.locator('#home-search-status')).toContainText('Escuchando');await page.clock.fastForward(1001);await expect(page.locator('#home-search-status')).toContainText('20 segundos');
});
test('cerrar el diálogo aborta y descarta transcripción y temporizador',async({page})=>{
 await mock(page);await page.goto('/');await page.clock.install();await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#voice-start').click();await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'regla de la cadena'}]]}));await page.keyboard.press('Escape');await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'derivación implícita'}]]}));await page.clock.fastForward(4000);await expect(page.locator('#inicio')).toBeVisible();expect(await page.evaluate(()=>window.aborted)).toBe(true);
});
