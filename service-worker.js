!function(){"use strict";const e=1608840737569,t="cache"+e,s=["/client/client.aa0478b5.js","/client/inject_styles.5607aec6.js","/client/index.7551fffb.js","/client/index.48d4163b.js","/client/index.3781e800.js","/client/index.d6a6e140.js","/client/about.c1628189.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/sm-base.css"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
