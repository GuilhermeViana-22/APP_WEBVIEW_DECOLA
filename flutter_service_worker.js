'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b51c938d2f12df02bce76003e6fc001f",
"assets/AssetManifest.bin.json": "62129a9918ef931b0b61e1a1ec2ef126",
"assets/AssetManifest.json": "a5da4e5d124b0d90dfa7f8a4a7553a20",
"assets/assets/fonts/CircularStd-Black.ttf": "6b37ec3ab40ff00c70efe9a9770deac0",
"assets/assets/fonts/CircularStd-Bold.ttf": "145ae1e715558908e29811cba088758e",
"assets/assets/fonts/CircularStd-Medium.ttf": "e4ba63a6345c96f3cb813ef00340beda",
"assets/assets/fonts/CircularStd-Regular.ttf": "9e31161108ad69cc75264c71274e8a58",
"assets/assets/images/academy.png": "5c1c4107b64b2ec49b0a315d0c98f1c3",
"assets/assets/images/chat.png": "26c1d7f6385c0074331c0c89dfecc906",
"assets/assets/images/foguete.png": "7ed22be8f394bc729daae060665f84d8",
"assets/assets/images/hub.png": "6006c447648651bc2198c5e23a1357b4",
"assets/assets/images/logo-app.png": "b828b1242b6da14e038d5ab09d658727",
"assets/assets/images/logo-blue-app.png": "1c3fe098186d8eb7ed71a09368012156",
"assets/assets/images/logo-white-app.png": "baf7094afb6ce5ff4a60968acd48cecb",
"assets/assets/images/logo1.png": "a8f796a4c55ecc97e8225611cff00c3e",
"assets/assets/images/logo2.png": "d07abf02b8ab840ec0265524573549c7",
"assets/assets/images/logo3.png": "34b5f531035b88650292fc8acfe524d9",
"assets/assets/images/order_placed.png": "3e1799ad68512631be423f6a6e6ec7cd",
"assets/assets/images/profile.png": "bfe27b98d004e91cb83def18eca04725",
"assets/assets/images/questionario.png": "f1ce30fd19030946e2a3b2fee617902a",
"assets/assets/images/radio.png": "5ffb9038daf7a322b5ca5ab552a7ae70",
"assets/assets/images/sem_questionarios.jpg": "7aebff99180f8e44e0628301f5b2dc2e",
"assets/assets/images/soft_skills.png": "d815b747ebefbd8740e359883a6e0edb",
"assets/assets/images/streaming.png": "0d7afaa93a343a20be437212c1705d52",
"assets/assets/images/tv.png": "1f593cdcd5a4e2a74ec134d103d2630c",
"assets/assets/images/vazio.png": "9d8ddbbd38cf47d98ad41e03d8d7d193",
"assets/assets/vectors/bag.svg": "36237c41101e54e2f6f9849c645cc401",
"assets/assets/vectors/cart_bag.svg": "3b60f7ff22407c2f795ce0f3f15c15c2",
"assets/assets/vectors/email_sending.svg": "caf1969c351c6b0c9c85290f812c4f32",
"assets/assets/vectors/logo.svg": "aea5caa16a59577d836070d82406d11f",
"assets/assets/vectors/not_found.svg": "09a5c7a43fd7aedecd156c470370dc61",
"assets/assets/vectors/search.svg": "4292fd04b99a411a778c83a3fdd82586",
"assets/FontManifest.json": "c55f2ee054c85156274a90743457291b",
"assets/fonts/MaterialIcons-Regular.otf": "3737fddff574def80f9958f0731cc2bf",
"assets/NOTICES": "a2d993baa21f54a8d81f45e8e6ac4e5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "a487c53ce4158c2cdbe76ae7dd1ffa9d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ffef7a52172e2fb8e170a70abaf849b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "543e87a26d7d125ebaef79989ed9f806",
"/": "543e87a26d7d125ebaef79989ed9f806",
"main.dart.js": "8918ca6edd4819456cd68123d92d5d4d",
"manifest.json": "00af51f9516b3ba7bb3e4c29704109eb",
"version.json": "fe31f9bcbcd85c77b6fe0c8666142cbb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
