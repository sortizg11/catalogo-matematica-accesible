import {chromium} from '@playwright/test';
import fs from 'node:fs';
import {topics} from '../src/content.js';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
for(const topic of topics){
 await page.goto('http://127.0.0.1:4173/#'+topic.id+'--tema');
 await page.waitForSelector(`[data-view="${topic.id}"]:not([hidden])`);
 const result=await page.evaluate(id=>{
  const a=document.querySelector(`[data-view="${id}"]`);
  const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
  const broken=[...a.querySelectorAll('a[href^="#"]')].filter(e=>!document.getElementById(e.hash.slice(1))).map(e=>e.hash);
  const tex=a.textContent.match(/\\(?:begin|end|frac|dfrac|textbf|lim|subsection)\b/g);
  return {id,math:a.querySelectorAll('math').length,duplicates:ids.filter((v,i)=>ids.indexOf(v)!==i),broken,tex};
 },topic.id);
 await page.setViewportSize({width:320,height:800});
 result.reflow=await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth);
 await page.setViewportSize({width:1440,height:1000});
 results.push(result);
}
await page.goto('http://127.0.0.1:4173/');await page.screenshot({path:'docs/evidencia/catalogo-ampliado-inicio.png'});
await page.goto('http://127.0.0.1:4173/#derivada--ejemplos');await page.screenshot({path:'docs/evidencia/catalogo-ampliado-derivada.png'});
fs.writeFileSync('docs/evidencia/portafolio-verificacion.json',JSON.stringify({date:'2026-11-18',results,errors},null,2));
console.log(JSON.stringify({results,errors}));await browser.close();
if(errors.length||results.some(r=>r.duplicates.length||r.broken.length||r.tex||!r.reflow))process.exitCode=1;
