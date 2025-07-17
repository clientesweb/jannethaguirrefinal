const CACHE_NAME = "janneth-aguirre-cache-v1"
const urlsToCache = [
  "/",
  "/nosotros",
  "/propiedades",
  "/globals.css",
  "/images/logo-janneth-aguirre.webp",
  "/images/janneth-aguirre-inmo-peru-1.webp",
  "/images/og-image-janneth.png",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/manifest.json",
  // Agrega aquí más recursos estáticos que quieras cachear
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
