import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const b=await chromium.launch();const context=await b.newContext();const p=await context.newPage();const out=[];
for(const id of (process.argv.length>2?process.argv.slice(2):['limites','limites-algebraicos','derivada','tangente-normal','reglas-derivacion','cadena','derivadas-trigonometricas','implicita','razones-cambio'])){
 await p.goto('http://127.0.0.1:4173/materials/portafolio-calculo/html/'+id+'.html');
 const result=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
 out.push({id,violations:result.violations}); console.log(id,result.violations.map(v=>v.id));
}
const report='docs/evidencia/portafolio-axe-html.json';const prior=process.argv.length>2&&fs.existsSync(report)?JSON.parse(fs.readFileSync(report)):[];fs.writeFileSync(report,JSON.stringify([...prior.filter(row=>!out.some(next=>next.id===row.id)),...out],null,2));await b.close();
