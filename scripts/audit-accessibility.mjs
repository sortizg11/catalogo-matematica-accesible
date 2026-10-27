// Ejecutar con el servidor local activo. Solo diagnóstico automático, no certificación.
import {spawn} from 'node:child_process';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
const base=process.env.AUDIT_URL || 'http://127.0.0.1:4173/';
const output='docs/evidencia/lighthouse';
await mkdir(output,{recursive:true});
const results=[];
for(const profile of ['mobile','desktop']) for(const route of ['inicio','introduccion--concepto','sustitucion--ejemplo-e2','ayuda']){
 const filename=`${output}/${profile}-${route}`;
 const args=['node_modules/lighthouse/cli/index.js',base+'#'+route,'--only-categories=accessibility','--chrome-flags=--headless','--output=json','--output=html','--output-path='+filename,'--quiet'];
 if(profile==='desktop')args.push('--preset=desktop');
 await new Promise((resolve,reject)=>{const proc=spawn(process.execPath,args,{stdio:'inherit'});proc.on('error',reject);proc.on('exit',code=>code===0?resolve():reject(new Error(`Lighthouse terminó con ${code}`)));});
 const report=JSON.parse(await readFile(filename+'.report.json','utf8'));
 const entry={route,profile,requestedUrl:report.requestedUrl,finalUrl:report.finalDisplayedUrl || report.finalUrl,version:report.lighthouseVersion,fetchTime:report.fetchTime,score:report.categories.accessibility.score,failures:Object.entries(report.audits).filter(([,a])=>a.score===0 && report.categories.accessibility.auditRefs.some(r=>r.id===a.id)).map(([id,a])=>({id,title:a.title})),manual:Object.values(report.audits).filter(a=>a.scoreDisplayMode==='manual').map(a=>a.id)};
 results.push(entry);console.log(JSON.stringify(entry));
}
await writeFile(output+'/resumen.json',JSON.stringify(results,null,2)+'\n');
if(results.some(r=>r.score!==1))process.exitCode=1;
