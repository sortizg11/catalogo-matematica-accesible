import {topics,renderTopic,home,help} from './content.js';
import {initPreferences} from './preferences.js';
import {buildNavigation,initNavigation,toggleMenu,navigate,topicId} from './navigation.js';
import {initDialogs,openDialog} from './dialogs.js';
import {initShortcuts} from './shortcuts.js';
document.getElementById('views').innerHTML=home+topics.map(renderTopic).join('')+help;
buildNavigation();
initDialogs();
initPreferences();
initNavigation();
document.getElementById('tools-open').addEventListener('click',()=>openDialog('tools'));
initShortcuts({h:()=>openDialog('tools'),m:toggleMenu,...Object.fromEntries(Object.entries({t:'teoria',e:'ejemplos',p:'practica',s:'soluciones',i:'tema'}).map(([key,section])=>[key,()=>navigate(`${topicId()}--${section}`)]))});
// Extensión futura: Explorador estructural de integrales. Sin comportamiento
// hasta contar con especificación docente; deberá complementar MathCAT.
