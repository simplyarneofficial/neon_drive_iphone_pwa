const CACHE='neondrive-v1';

const FILES=[
'./',
'index.html',
'style.css',
'app.js',
'offline.html',
'manifest.json'
];

self.addEventListener('install',e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>{
return cache.addAll(FILES);
})
);
self.skipWaiting();
});

self.addEventListener('fetch',e=>{
e.respondWith(
fetch(e.request).catch(()=>{
return caches.match(e.request).then(r=>{
return r || caches.match('offline.html');
});
})
);
});
