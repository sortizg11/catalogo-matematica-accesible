import {chromium} from '@playwright/test';
const browser=await chromium.launch();const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto('http://127.0.0.1:4173/');await page.screenshot({path:'docs/evidencia/inicio-buscador-escritorio.png'});
await page.setViewportSize({width:320,height:850});await page.screenshot({path:'docs/evidencia/inicio-buscador-movil.png'});
await page.setViewportSize({width:1440,height:1000});await page.goto('http://127.0.0.1:4173/docs/estado-cambios-2026-11-19.html');await page.screenshot({path:'docs/evidencia/cuadro-estado.png'});
await browser.close();
