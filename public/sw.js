/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d2a14864'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/home.a1aa7723.js",
    "revision": null
  }, {
    "url": "assets/home.eec3b9d1.css",
    "revision": null
  }, {
    "url": "assets/index.0a4a5e0e.js",
    "revision": null
  }, {
    "url": "assets/index.5fd4d55f.css",
    "revision": null
  }, {
    "url": "assets/serie.082b1377.css",
    "revision": null
  }, {
    "url": "assets/serie.f95b7128.js",
    "revision": null
  }, {
    "url": "assets/store.2f397816.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5.6954f450.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "149dd9721f2a9b32a7684bb08c0b5e76"
  }, {
    "url": "favicon.ico",
    "revision": "d4988481193e0948badeaf2fae241220"
  }, {
    "url": "ms-192x192.png",
    "revision": "c731112e8812b7cb4c05066a144e1dfc"
  }, {
    "url": "ms-512x512.png",
    "revision": "5d531fed724b87ce5f77f1111a01eb25"
  }, {
    "url": "manifest.webmanifest",
    "revision": "4db47d2442bc427d66611cd189c3d52f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map