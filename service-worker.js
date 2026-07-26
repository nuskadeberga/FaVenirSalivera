const CACHE = 'salivera-v1.0.0';
const APP_SHELL = [
  './', './index.html', './style.css', './app.js', './data.js', './manifest.json',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png',
  './assets/icons/favicon.ico', './assets/icons/favicon-16.png', './assets/icons/favicon-32.png', './assets/icons/apple-touch-icon.png'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html'))));
});
