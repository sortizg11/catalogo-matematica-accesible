import { prefs } from './preferences.js';
export function initShortcuts(actions) {
  document.addEventListener('keydown',e=>{
    if(!prefs.shortcuts || e.defaultPrevented || e.repeat || e.isComposing || !e.altKey || !e.shiftKey || e.ctrlKey || e.metaKey)return;
    if(document.querySelector('dialog[open]') || e.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),math,.math-region,[role="textbox"]'))return;
    const action=actions[e.key.toLowerCase()];
    if(action){e.preventDefault();action();}
  });
}
