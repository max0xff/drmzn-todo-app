importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

declare let workbox;

if (workbox) {
  // console.log(`Yay! Workbox is loaded 🎉`);
  workbox.setConfig({ debug: true });

  workbox.precaching.precacheAndRoute([
    { url: '/js/main.0.0.5.min.js', revision: '0.0.5' },
    { url: '/sw.0.0.5.min.js', revision: '0.0.5' },
    { url: '/index.html', revision: '0.0.5' },
    { url: '/css/app.css', revision: '0.0.5' },
    { url: '/css/base.css', revision: '0.0.5' },
    { url: '/css/index.css', revision: '0.0.5' },
    { url: '/css/main.min.css', revision: '0.0.5' },
    { url: '/favicon.ico', revision: '0.0.5' }
  ]);

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css|woff2|woff|ttf|json|xml|ico)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'static-resources'
    })
  );

} else {
  console.log("Boo! Workbox didn't load 😬");
}

self.addEventListener('install', (event) => {
  console.log('service worker installing...');
});

self.addEventListener('activate', async (event) => {
  (<any>self).clients.claim();
  console.log('service worker activated');
});
