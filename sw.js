self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('unitconverter-v1').then((cache) => cache.addAll([
      '/',
      '/index.html',  // Your HTML file
      '/manifest.json',
      // Add CSS/JS if extracted
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});