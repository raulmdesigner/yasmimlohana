const CACHE='yasmim-studio-v4-2-20261016-01';
const ASSETS=['./','./index.html','./style.css','./seed.js','./app.js','./catalog.js','./vendor/jszip.min.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(x=>x!==CACHE&&x.startsWith('yasmim-studio-')).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{try{const res=await fetch(e.request);if(res.ok){const cache=await caches.open(CACHE);cache.put(e.request,res.clone())}return res}catch(e){return await caches.match(e.request)||await caches.match('./index.html')}})())});
