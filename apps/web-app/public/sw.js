if (!self.define) {
    let e
    const s = {}
    const a = (a, n) => (
        (a = new URL(`${a}.js`, n).href),
        s[a] ||
            new Promise((s) => {
                if ("document" in self) {
                    const e = document.createElement("script")
                    ;(e.src = a), (e.onload = s), document.head.appendChild(e)
                } else (e = a), importScripts(a), s()
            }).then(() => {
                const e = s[a]
                if (!e) throw new Error(`Module ${a} didn’t register its module`)
                return e
            })
    )
    self.define = (n, c) => {
        const i = e || ("document" in self ? document.currentScript.src : "") || location.href
        if (s[i]) return
        const t = {}
        const r = (e) => a(e, i)
        const d = { module: { uri: i }, exports: t, require: r }
        s[i] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), t))
    }
}
define(["./workbox-790f51aa"], (e) => {
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: "/_next/static/chunks/0e34585b-ec20f885b44067b2.js", revision: "ec20f885b44067b2" },
                { url: "/_next/static/chunks/28-b075da8aa6d7aae2.js", revision: "b075da8aa6d7aae2" },
                { url: "/_next/static/chunks/292-f8092119bae77fe5.js", revision: "f8092119bae77fe5" },
                { url: "/_next/static/chunks/296.cb137b5c3df54a67.js", revision: "cb137b5c3df54a67" },
                { url: "/_next/static/chunks/425-71e27d89e4a52ae3.js", revision: "71e27d89e4a52ae3" },
                { url: "/_next/static/chunks/500.57712e513e55aba8.js", revision: "57712e513e55aba8" },
                { url: "/_next/static/chunks/524.aa092db5013d5c59.js", revision: "aa092db5013d5c59" },
                { url: "/_next/static/chunks/611-2550ad2540a329bd.js", revision: "2550ad2540a329bd" },
                { url: "/_next/static/chunks/65-aabf751ea843ea99.js", revision: "aabf751ea843ea99" },
                { url: "/_next/static/chunks/656-288f2791ee7cb9f1.js", revision: "288f2791ee7cb9f1" },
                { url: "/_next/static/chunks/672.bc95bc6b03dd424f.js", revision: "bc95bc6b03dd424f" },
                { url: "/_next/static/chunks/844-455103dc240b2aae.js", revision: "455103dc240b2aae" },
                { url: "/_next/static/chunks/869c71b7-f7e4a783a84e4377.js", revision: "f7e4a783a84e4377" },
                { url: "/_next/static/chunks/965-a6a90f877ce1ff1c.js", revision: "a6a90f877ce1ff1c" },
                { url: "/_next/static/chunks/97-b7ef4276c3848870.js", revision: "b7ef4276c3848870" },
                { url: "/_next/static/chunks/adaeb847-a030e0c32d7eb648.js", revision: "a030e0c32d7eb648" },
                { url: "/_next/static/chunks/b54c64c0-0432b2d5b847688b.js", revision: "0432b2d5b847688b" },
                { url: "/_next/static/chunks/ba7db96d-32ff144af59284b2.js", revision: "32ff144af59284b2" },
                { url: "/_next/static/chunks/c8eae200-4014cbb65c710e24.js", revision: "4014cbb65c710e24" },
                { url: "/_next/static/chunks/d045b16b-d83208c33d4e5900.js", revision: "d83208c33d4e5900" },
                { url: "/_next/static/chunks/e893f787-44428e771b2cbe3d.js", revision: "44428e771b2cbe3d" },
                { url: "/_next/static/chunks/f73d8d7a-707e05a29861a549.js", revision: "707e05a29861a549" },
                { url: "/_next/static/chunks/framework-49f1e091cbf6b261.js", revision: "49f1e091cbf6b261" },
                { url: "/_next/static/chunks/main-7becfaeb8c90fd79.js", revision: "7becfaeb8c90fd79" },
                { url: "/_next/static/chunks/pages/_app-cb8ccf99d830456f.js", revision: "cb8ccf99d830456f" },
                { url: "/_next/static/chunks/pages/_error-d63cba356b3aa116.js", revision: "d63cba356b3aa116" },
                {
                    url: "/_next/static/chunks/pages/answers/%5BparentMessageId%5D-be6db47c8abd9129.js",
                    revision: "be6db47c8abd9129"
                },
                { url: "/_next/static/chunks/pages/artBoard-page-d846d36363f31c30.js", revision: "d846d36363f31c30" },
                { url: "/_next/static/chunks/pages/artGallery-page-048826cf81b5c097.js", revision: "048826cf81b5c097" },
                {
                    url: "/_next/static/chunks/pages/experiences-page-08dbad06d61ff92c.js",
                    revision: "08dbad06d61ff92c"
                },
                {
                    url: "/_next/static/chunks/pages/generate-id-page-972824e239b5cac5.js",
                    revision: "972824e239b5cac5"
                },
                { url: "/_next/static/chunks/pages/identity-0382ae46c295f0e9.js", revision: "0382ae46c295f0e9" },
                { url: "/_next/static/chunks/pages/index-79d51d0a8ccd4198.js", revision: "79d51d0a8ccd4198" },
                { url: "/_next/static/chunks/pages/join-588faee5c4b8a2ae.js", revision: "588faee5c4b8a2ae" },
                { url: "/_next/static/chunks/pages/questions-9998490cff6aeece.js", revision: "9998490cff6aeece" },
                { url: "/_next/static/chunks/pages/remove-tile-7a822a697b9310aa.js", revision: "7a822a697b9310aa" },
                {
                    url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
                    revision: "837c0df77fd5009c9e46d446188ecfd0"
                },
                { url: "/_next/static/chunks/webpack-7e7933ea15005a64.js", revision: "7e7933ea15005a64" },
                { url: "/_next/static/css/79484c120694fd58.css", revision: "79484c120694fd58" },
                {
                    url: "/_next/static/g-8cOfU7i-TOmCP3kR7XP/_buildManifest.js",
                    revision: "99066e95502ff876191c2c3f8a867d72"
                },
                {
                    url: "/_next/static/g-8cOfU7i-TOmCP3kR7XP/_ssgManifest.js",
                    revision: "b6652df95db52feb4daf4eca35380933"
                },
                { url: "/canvases/-Sh2dEgS8L5o9RV1bkpr5.png", revision: "9845de07f3c5a5ca3e115f89fe231dc4" },
                { url: "/canvases/0J0d0dKMmN71BZWd5BlRT.png", revision: "4ced3885c4c7955884c27f22c11a8be3" },
                { url: "/canvases/1XQ2Z8BORcu7py6-Fciu4.png", revision: "f88f79a5f31d112d21502e61c0b4e2a6" },
                { url: "/canvases/7LFrayBJvej5KS9DVbWuZ.png", revision: "5cd3a1b922de09ec71e850b172cb82b7" },
                { url: "/canvases/7Leba4PQ7aWdKg5C55EZU.png", revision: "26b54cef8ef28f3f92bad416820fd8db" },
                { url: "/canvases/8sBCW9x5irLJAOwT9lIJA.png", revision: "c30c3e710ff08cd55f555e0273b964de" },
                { url: "/canvases/E4bX2tVZByMGX8nAKhV6d.png", revision: "70dae15c9daa337946d6a72bcb8feb91" },
                { url: "/canvases/GehOl2nCaNUhGoIACblaU.png", revision: "84e6053cd6258f0eb57671fff8b08b51" },
                { url: "/canvases/HN-3bytf5ycFU3J2V-DvT.png", revision: "7c85a0772d4e4bedf68a7c184c8dfeeb" },
                { url: "/canvases/NMt--SFXOTyuc5Ql6XA2p.png", revision: "fa4d4b53a01e7ab041f90fed3d6e2367" },
                { url: "/canvases/Q54jqVJ3FVnqTX98ExkWB.png", revision: "f88f79a5f31d112d21502e61c0b4e2a6" },
                { url: "/canvases/VFAUuztYJEjIMltLItfVb.png", revision: "ab14832679597df1e2987d5b4e65442a" },
                { url: "/canvases/ZbZYvZXj8XhYonR0EFPtH.png", revision: "90e134e6313d83999c442fe3e328aa99" },
                { url: "/canvases/cudzlantBrad5IthnFRnK.png", revision: "687fe686b572aa93a7e3f37c17379779" },
                { url: "/canvases/i7fWlLzeoias0b72ZOz9A.png", revision: "26b54cef8ef28f3f92bad416820fd8db" },
                { url: "/canvases/ipR2gN8kk-9ePVEw4MUzf.png", revision: "fe268a409a4f23afebdef031f44d5e95" },
                { url: "/canvases/lRD9T7RVe11Wwkq16JCfJ.png", revision: "801a11682aa0d438a426515f85ab6e6f" },
                { url: "/canvases/lmUQkN7ueI8gFu53AnhNd.png", revision: "47bcc67048dfd23cd693fe9d8e6e78b3" },
                { url: "/canvases/o8M2pJZT3WSO3egHw3bWy.png", revision: "f030257a50e2ccc2d05ed1ce37941c36" },
                { url: "/canvases/spKlodir9Ders9lscw707.png", revision: "f7a7d02ef80c7eba75eed0a2b767e370" },
                { url: "/canvases/tZBaF4OOllUvDqb8OYbRZ.png", revision: "c365cae3c0b526b398e864e2362dd856" },
                { url: "/canvases/zwLBCl8zBPrSSPF8qJ4xb.png", revision: "75562954d0518605546e4670e49b0773" },
                { url: "/dwg1.png", revision: "5006ca9ed839355b63494f53a789af2c" },
                { url: "/icon-192x192.png", revision: "7a7f006bf8b924c0a4fe241fb9828310" },
                { url: "/icon-256x256.png", revision: "d00d84c63d9acf331d6b742416b234f7" },
                { url: "/icon-384x384.png", revision: "fee6e19bbb2a7b262e0974b8a405d3c5" },
                { url: "/icon-512x512.png", revision: "0fd99d47defe3e77446bcc385d37e136" },
                { url: "/manifest.json", revision: "25356abf2d45e6e1cb3be4f12086348e" },
                { url: "/semaphore.zkey", revision: "955cd320a3df0710931a4db71feda1bc" },
                { url: "/semaphoreWasm.wasm", revision: "225acc73d69c675254998f14f1cedb46" }
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            "/",
            new e.NetworkFirst({
                cacheName: "start-url",
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
                            s && s.type === "opaqueredirect"
                                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                                : s
                    }
                ]
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: "google-fonts-webfonts",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: "google-fonts-stylesheets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-font-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-image-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-image",
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: "static-audio-assets",
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: "static-video-assets",
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-js-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-style-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-data",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: "static-data-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1
                const s = e.pathname
                return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
            },
            new e.NetworkFirst({
                cacheName: "apis",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1
                return !e.pathname.startsWith("/api/")
            },
            new e.NetworkFirst({
                cacheName: "others",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: "cross-origin",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
            }),
            "GET"
        )
})
