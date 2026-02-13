const cacheName = 'portfolio-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css', // আপনার CSS ফাইলের নাম দিন
  '/script.js', // আপনার JS ফাইলের নাম দিন
  '/path/to/image.jpg' // আপনার প্রোফাইল ছবি ও অন্যান্য ছবির পাথ দিন
];

// ফাইলগুলো ক্যাশ (Cache) করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// অফলাইনে ফাইলগুলো প্রদর্শন করা
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
