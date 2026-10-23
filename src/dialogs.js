const returnTargets = new WeakMap();
export function closeDialog(dialog, restore = true) {
  const target = returnTargets.get(dialog);
  dialog.close();
  if(restore && target?.isConnected && !target.closest('[hidden]')) target.focus();
}
export function openDialog(id, origin = document.activeElement) {
  const previous = document.querySelector('dialog[open]');
  if(previous) { origin = returnTargets.get(previous) || origin; closeDialog(previous,false); }
  const dialog = document.getElementById(id);
  returnTargets.set(dialog,origin);
  dialog.showModal();
  (dialog.querySelector('button, a, input, select') || dialog).focus();
}
export function initDialogs() {
  document.querySelectorAll('dialog').forEach(dialog=> {
    // Algunos navegadores permiten que Tab alcance la interfaz del navegador
    // en los extremos de un dialog nativo. Mantener aquí el ciclo solicitado.
    dialog.addEventListener('keydown',e=>{
      if(e.key!=='Tab' || e.altKey || e.ctrlKey || e.metaKey)return;
      const controls=[...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),summary,[tabindex="0"]')].filter(el=>el.getClientRects().length);
      const first=controls[0],last=controls.at(-1);
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}
    });
    dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog(dialog);});
    dialog.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>closeDialog(dialog)));
  });
  document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>openDialog(button.dataset.dialog)));
}
