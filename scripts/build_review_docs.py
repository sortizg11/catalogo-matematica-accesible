"""Exporta los borradores de revisión a HTML semántico, sin dependencias externas."""
from pathlib import Path
import re,html
root=Path(__file__).resolve().parent.parent
def inline(s):
 s=html.escape(s)
 s=re.sub(r'\[([^]]+)\]\(([^)]+)\)',r'<a href="\2">\1</a>',s)
 s=re.sub(r'\*\*([^*]+)\*\*',r'<strong>\1</strong>',s)
 if '<a ' not in s:
  s=re.sub(r'https?://[^\s<>]+',lambda m:'<a href="'+m[0].rstrip('.,;')+'">'+m[0].rstrip('.,;')+'</a>'+m[0][len(m[0].rstrip('.,;')):],s)
 return s
for name in ['manual-usuario-borrador','estado-cambios-2026-11-19','revision-bibliografica-accesibilidad']:
 lines=(root/'docs'/f'{name}.md').read_text().splitlines();out=[];i=0
 while i<len(lines):
  line=lines[i];i+=1
  if not line.strip():continue
  if line.startswith('#'):
   n=len(line)-len(line.lstrip('#'));out.append(f'<h{n}>'+inline(line[n:].strip())+f'</h{n}>');continue
  if line.startswith('|'):
   rows=[line]
   while i<len(lines) and lines[i].startswith('|'):rows.append(lines[i]);i+=1
   out.append('<div class="table-wrap"><table><caption>Resumen de revisión</caption><thead><tr>'+''.join('<th scope="col">'+inline(c.strip())+'</th>' for c in rows[0].strip('|').split('|'))+'</tr></thead><tbody>')
   for row in rows[2:]:out.append('<tr>'+''.join('<td>'+inline(c.strip())+'</td>' for c in row.strip('|').split('|'))+'</tr>')
   out.append('</tbody></table></div>');continue
  if line.startswith('- '):
   items=[line[2:]]
   while i<len(lines) and lines[i].startswith('- '):items.append(lines[i][2:]);i+=1
   out.append('<ul>'+''.join('<li>'+inline(v)+'</li>' for v in items)+'</ul>');continue
  out.append('<p>'+inline(line)+'</p>')
 title=re.sub('<[^>]+>','',out[0])
 page='<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>body{font:1.1rem/1.65 Arial,sans-serif;color:#162b45;max-width:90ch;margin:auto;padding:1.5rem}h1,h2,h3{line-height:1.3}h2{margin-top:2rem}a{color:#17488c}p,li,td{overflow-wrap:anywhere}.table-wrap{overflow-x:auto}table{border-collapse:collapse;min-width:42rem;width:100%}th,td{padding:.7rem;text-align:left;vertical-align:top;border:1px solid #b8c2cd}th{background:#eef2f6}a:focus-visible,[tabindex]:focus-visible{outline:3px solid #17488c;outline-offset:3px}@media print{body{font-size:10.5pt;max-width:none}th,td{padding:.4rem}table{min-width:0}h2,h3{break-after:avoid}tr{break-inside:avoid}}</style></head><body><main>'+''.join(out)+'</main><script>for(const e of document.querySelectorAll(".table-wrap")){if(e.scrollWidth>e.clientWidth){e.tabIndex=0;e.setAttribute("role","region");e.setAttribute("aria-label","Tabla con desplazamiento horizontal");}}</script></body></html>'
 (root/'docs'/f'{name}.html').write_text(page)
 print(name+'.html')
