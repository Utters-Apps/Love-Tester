self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("love-tester-cache").then(cache => {
      return cache.addAll([
        "/Love-Tester/",
        "/Love-Tester/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
