import { prefs } from './preferences.js';
export function initShortcuts(actions) {
  document.addEventListener('keydown',e=>{
    if(!prefs.shortcuts || e.defaultPrevented || e.repeat || e.isComposing || !e.altKey || !e.shiftKey || e.ctrlKey || e.metaKey)return;
    if(document.querySelector('dialog[open]') || e.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),math,.math-region,[role="textbox"]'))return;
    const key=e.key.toLowerCase();
    // Option + Shift can produce a symbol instead of a letter on macOS.
    const fallback=/^[a-z]$/.test(key) ? '' : /^Key([A-Z])$/.exec(e.code)?.[1].toLowerCase();
    const action=actions[key] ?? actions[fallback];
    if(action){e.preventDefault();action();}
  });
}
