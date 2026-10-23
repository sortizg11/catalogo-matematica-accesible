import { read, write } from './storage.js';
export const defaults = { shortcuts:false, menu:true, font:'100', contrast:false, mode:'progressive' };
const saved = read('preferences', {});
export const prefs = { ...defaults };
for (const key of ['shortcuts','menu','contrast']) if (typeof saved?.[key] === 'boolean') prefs[key] = saved[key];
if (['100','125','150'].includes(saved?.font)) prefs.font = saved.font;
if (['progressive','full'].includes(saved?.mode)) prefs.mode = saved.mode;
export function applyPreferences() {
  document.documentElement.style.fontSize = `${prefs.font}%`;
  document.documentElement.classList.toggle('high-contrast', prefs.contrast);
  document.querySelector('#shortcuts').checked = prefs.shortcuts;
  document.querySelector('#menu-pref').checked = prefs.menu;
  document.querySelector('#font-size').value = prefs.font;
  document.querySelector('#contrast').checked = prefs.contrast;
  document.querySelector('#reading-mode').value = prefs.mode;
  document.querySelectorAll('.step').forEach(el => el.open = prefs.mode === 'full');
  document.querySelectorAll('.mode-toggle').forEach(el => {el.textContent = prefs.mode === 'full' ? 'Consultar por pasos' : 'Mostrar todos los pasos';});
  document.dispatchEvent(new Event('preferenceschange'));
}
export function setPreference(key, value) {
  prefs[key] = value;
  const ok = write('preferences', prefs);
  applyPreferences();
  document.querySelector('#preference-status').textContent = ok ? 'Preferencias guardadas.' : 'Cambios aplicados en esta sesión; el almacenamiento no está disponible.';
}
export function initPreferences() {
  const controls = {shortcuts:'shortcuts','menu-pref':'menu','font-size':'font',contrast:'contrast','reading-mode':'mode'};
  for(const [id,key] of Object.entries(controls)) document.getElementById(id).addEventListener('change',e=>setPreference(key,e.target.type==='checkbox'?e.target.checked:e.target.value));
  document.querySelector('#reset').addEventListener('click',()=> {Object.assign(prefs,defaults); write('preferences',prefs); applyPreferences();document.querySelector('#preference-status').textContent='Preferencias restablecidas.';});
  document.querySelectorAll('.mode-toggle').forEach(button=>button.addEventListener('click',()=>setPreference('mode',prefs.mode==='full'?'progressive':'full')));
  applyPreferences();
}
