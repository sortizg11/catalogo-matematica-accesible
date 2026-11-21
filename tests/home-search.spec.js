import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
async function voice(page){await page.addInitScript(()=>{window.SpeechRecognition=class{constructor(){window.recognition=this;}start(){}abort(){window.voiceAborted=true;}};});}
test('inicio centrado en búsqueda con resultados, alternativa de temario y foco',async({page})=>{
 await page.goto('/');
 await expect(page.locator('#home-search-query')).toBeVisible();await expect(page.locator('.home-topics')).not.toHaveAttribute('open','');
 await page.locator('#home-search-query').fill('teoría');await page.locator('#home-search-query').press('Enter');await expect(page.locator('#home-search-results a')).toHaveCount(11);
 await page.locator('#home-search-query').fill('buscar derivación implícita');await page.locator('#home-search-query').press('Enter');await expect(page.locator('#implicita--tema')).toBeFocused();
 await page.goto('/#inicio');await page.getByRole('link',{name:'Explorar temas disponibles'}).click();await expect(page.locator('.home-topics')).toHaveAttribute('open','');
 await page.setViewportSize({width:320,height:800});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('voz inicial distingue provisional, red y final; cancela al navegar',async({page})=>{
 await voice(page);await page.goto('/');await page.clock.install();await page.locator('#home-voice-start').click();
 await page.evaluate(()=>{const r=[[{transcript:'derivación'}]];r[0].isFinal=false;window.recognition.onresult({results:r,resultIndex:0});});
 await expect(page.locator('#home-search-query')).toHaveValue('derivación');await expect(page.locator('#home-voice-stop')).toBeVisible();
 await page.evaluate(()=>window.recognition.onerror({error:'network'}));await expect(page.locator('#home-search-status')).toContainText('No se pudo conectar');
 await page.locator('#home-voice-start').click();await page.evaluate(()=>window.recognition.onerror({error:'service-not-allowed'}));await expect(page.locator('#home-search-status')).toContainText('no permite el servicio');
 await page.locator('#home-voice-start').click();await page.evaluate(()=>{window.recognition.onend();window.recognition.onend();});await expect(page.locator('#home-search-status')).toContainText('sin devolver texto');
 await page.locator('#home-voice-start').click();await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'buscar derivación implícita'}]]}));await page.clock.fastForward(3501);await page.locator('#home-search-results a').click();await expect(page.locator('#implicita--tema')).toBeFocused();
 await page.goto('/');await page.locator('#home-voice-start').click();await page.evaluate(()=>{location.hash='sustitucion--tema';});await expect(page.locator('#sustitucion--tema')).toBeVisible();await page.evaluate(()=>window.recognition.onresult?.({results:[[{transcript:'derivación implícita'}]]}));await expect(page.locator('#sustitucion--tema')).toBeVisible();
});
test('inicio sin API y diagnóstico axe acotado al nuevo formulario',async({page})=>{
 await page.addInitScript(()=>{window.SpeechRecognition=undefined;window.webkitSpeechRecognition=undefined;});await page.goto('/');await expect(page.locator('#home-voice-start')).toBeDisabled();
 const r=await new AxeBuilder({page}).include('.home-search').withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(r.violations).toEqual([]);
});
