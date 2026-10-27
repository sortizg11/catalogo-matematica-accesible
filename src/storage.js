const prefix = 'catalogo-v1:';
const session = new Map();
export let storageAvailable = true;
export function read(key, fallback) {
  try { const value = localStorage.getItem(prefix + key); return value ? JSON.parse(value) : fallback; }
  catch { storageAvailable = false; return session.has(key) ? session.get(key) : fallback; }
}
export function write(key, value) {
  session.set(key,value);
  try { localStorage.setItem(prefix + key, JSON.stringify(value)); return true; }
  catch { storageAvailable = false; return false; }
}
