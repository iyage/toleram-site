const staticDisplay_Win = "power-oil-v1"
const assets = [
  "/**",
  "index.html",
  "icon.png",
  "tolaram-the-difference-2.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDisplay_Win).then(cache => {
      cache.addAll(assets)
    })
  )
})
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })