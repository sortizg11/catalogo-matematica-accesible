import {test,expect} from '@playwright/test';
test('texto y voz abren los mismos capítulos sin diálogo conversacional',async({page})=>{
 await page.addInitScript(()=>{window.SpeechRecognition=class{constructor(){window.recognition=this;}start(){}abort(){window.voiceAborted=true;}};});
 await page.goto('/');
 for(const [query,id] of [['buscar derivación implícita','implicita'],['abrir el capítulo de regla de la cadena','cadena'],['por favor quiero buscar derivación implícita','implicita']]){
  await page.locator('.header-actions [data-dialog="search"]').click();
  await page.locator('#search-query').fill(query);await page.locator('#search-form').evaluate(form=>form.requestSubmit());
  await expect(page.locator('#'+id+'--tema')).toBeFocused();
  await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#voice-start').click();
  await page.evaluate(query=>window.recognition.onresult({results:[[{transcript:query}]]}),query);
  await expect(page.locator('#'+id+'--tema')).toBeFocused();
 }
 await page.locator('.header-actions [data-dialog="search"]').click();await page.locator('#voice-start').click();await page.locator('#voice-stop').click();
 await page.evaluate(()=>window.recognition.onresult({results:[[{transcript:'buscar derivación implícita'}]]}));
 await expect(page.locator('#search')).toBeVisible();await expect(page.locator('#search-status')).toHaveText('Escucha cancelada.');
});
test('los ejemplos comparten indicación y no muestran controles de pasos inexistentes',async({page})=>{
 await page.goto('/');
 const result=await page.evaluate(()=>[...document.querySelectorAll('.procedure')].every(p=>p.textContent.includes('El resultado está disponible al final. Cuando hay desarrollo, puedes abrir los pasos que necesites.') && Boolean(p.querySelector('.mode-toggle'))===Boolean(p.querySelector('details.step'))));
 expect(result).toBe(true);
});
