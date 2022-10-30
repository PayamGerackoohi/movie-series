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
    "url": "assets/general.174ad88d.js",
    "revision": null
  }, {
    "url": "assets/general.74dfcfff.css",
    "revision": null
  }, {
    "url": "assets/home.13dc55ca.css",
    "revision": null
  }, {
    "url": "assets/home.f0b90287.js",
    "revision": null
  }, {
    "url": "assets/index.861b2887.js",
    "revision": null
  }, {
    "url": "assets/index.c00921f5.css",
    "revision": null
  }, {
    "url": "assets/serie.34295ce3.js",
    "revision": null
  }, {
    "url": "assets/serie.44fa864c.css",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5.6954f450.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "053193ad59a92c200ff395e7c291c372"
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
    "url": "add.svg",
    "revision": "12bae7fa6ba8cbe9c2cfe7f2eadd28f4"
  }, {
    "url": "check.svg",
    "revision": "df04d25bb19f0d95c7758cf0c348d6d4"
  }, {
    "url": "close.svg",
    "revision": "be98d64ed058b3a810c6aef9ac556a91"
  }, {
    "url": "edit.svg",
    "revision": "c27e68b855044387b6d9ca774e61c43c"
  }, {
    "url": "left-arrow.svg",
    "revision": "2fda836d494228d0ca0f97072afeb82c"
  }, {
    "url": "logo.svg",
    "revision": "2be7a61a1b41e2d88c3130948efad4a3"
  }, {
    "url": "remove.svg",
    "revision": "194198e1565210438d38292e4aeb821f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "4db47d2442bc427d66611cd189c3d52f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map
