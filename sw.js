importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2.ee0840d0731d0fd306ef.js",
    "revision": "28675d2aeaff5f9425bb49dde2e389c7"
  },
  {
    "url": "/_nuxt/3.98065eda9dc68cc46166.js",
    "revision": "51e83931407df60b7eaa5cb639ea822e"
  },
  {
    "url": "/_nuxt/5.5279def2022bb427df0a.js",
    "revision": "e8344da350f53deb52fb951c5f6cf9cf"
  },
  {
    "url": "/_nuxt/6.e9754fbe0d5f8cc39161.js",
    "revision": "01a6a7eeafe697a1c07689193d7f17ac"
  },
  {
    "url": "/_nuxt/7.61e2c86e1b5ad88fb47a.js",
    "revision": "8f54a9c187ed3e52b0431c736d0cbf70"
  },
  {
    "url": "/_nuxt/8.e12297236cc602a98d1a.js",
    "revision": "ebf3efd58ace92b37fc43022cf56d642"
  },
  {
    "url": "/_nuxt/9.6f6be21ce4c67305d2a6.js",
    "revision": "35da91a7d01fba3b72860864792e9923"
  },
  {
    "url": "/_nuxt/app.0f5aae444d2b56f4cb6f.js",
    "revision": "814c835e88fabbeb653336095f345747"
  },
  {
    "url": "/_nuxt/app.61a5042fd9dd71334397ac79633d7157.css",
    "revision": "61a5042fd9dd71334397ac79633d7157"
  },
  {
    "url": "/_nuxt/lang-en.6910d3e75bb61699dd9f.js",
    "revision": "20e543c3c4d1b2b95068f9e192155243"
  },
  {
    "url": "/_nuxt/lang-zh.9b1aff1fe573303bea58.js",
    "revision": "1681dafc4fc7e849dc7dcbdacd21c009"
  },
  {
    "url": "/_nuxt/layouts_default.48d50f4dd9d18017ccc1.js",
    "revision": "69321e38dcca0082d5c94a2b5b8af60e"
  },
  {
    "url": "/_nuxt/manifest.3d2ef685eb9b47fea49f.js",
    "revision": "f78f38321f9b948d336f3ade087d10e1"
  },
  {
    "url": "/_nuxt/pointSet.d29600ab838fb92f2496.js",
    "revision": "88240af620410cb3221bee3a3e24c544"
  },
  {
    "url": "/_nuxt/three.ef83373b6271ffc2033a.js",
    "revision": "d944375e38a504e4fba9d9f57b2eb8b3"
  },
  {
    "url": "/_nuxt/vendor.64c718124f96c3bf4870.js",
    "revision": "e8332188998f5b16e2025bef58c13419"
  }
], {
  "cacheId": "vite.org",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





