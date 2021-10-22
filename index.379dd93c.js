// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var _collection = require("./collection");
var _functions = require("./functions");
var _storeButtons = require("./store-buttons");
// -------------------------------------------------
//                TITLE
// -------------------------------------------------
const counter = document.querySelector('.counter');
document.title = counter.innerText + " Waffles | Belgian Waffle Clicker";
setInterval(_functions.updateTitleScore, 1000);
setInterval(_functions.wafflesPerSecond, 1000);
function updateTitleScore() {
    document.title = counter.innerText + " Waffles | Belgian Waffle Clicker";
}
function wafflesPerSecond() {
    const allPerSec = document.querySelectorAll('.num-waffles');
    let num = 0;
    for (const onePerSec of allPerSec){
        const number = parseInt(onePerSec.innerText);
        num += number / 2; /* Divide by 2 due to two sets of buttons (buy/sell) with num-waffles class */ 
    }
    document.querySelector('.perSecond').innerText = num;
}
// -------------------------------------------------
//                BUY/SELL BUTTONS
// -------------------------------------------------
const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");
const buySection = document.querySelector(".buy-section");
const sellSection = document.querySelector(".sell-section");
// BUY BTN
buyBtn.addEventListener("click", ()=>{
    buySection.style.display = "flex";
    sellSection.style.display = "none";
    buyBtn.classList.toggle("active");
    if (sellBtn.classList.contains("active")) sellBtn.classList.remove("active");
});
// SELL BTN
sellBtn.addEventListener("click", ()=>{
    sellSection.style.display = "flex";
    buySection.style.display = "none";
    sellBtn.classList.toggle("active");
    if (buyBtn.classList.contains("active")) buyBtn.classList.remove("active");
});
// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
const waffleBTN = document.querySelector(".waffle-img");
waffleBTN.addEventListener("click", ()=>{
    // Update and Display score
    _functions.udpateScore();
    // Create a element with css class : css animation
    _functions.waffleAnimation();
    // Updates items that are affordable or owned
    _storeButtons.canAffordStoreItems();
    _storeButtons.canSell();
});
// -----------------------------------------------------------
//                 BONUS/AUTO-CLICK BTNS
// -----------------------------------------------------------
// BUY SECTION
for(let i = 0; i < _collection.ITEM_LIST.length; i++)_collection.ITEM_LIST[i].name.addEventListener("click", ()=>_functions.autoClickerBUY(i)
);
// SELL SECTION
for(let i1 = 0; i1 < _collection.ITEM_LIST.length; i1++)_collection.ITEM_LIST_SELL[i1].name.addEventListener("click", ()=>_functions.autoClickerSELL(i1)
);

},{"./collection":"dnujb","./functions":"jJknb","./store-buttons":"7mVcA"}],"dnujb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ITEM_LIST", ()=>ITEM_LIST
);
parcelHelpers.export(exports, "ITEM_LIST_SELL", ()=>ITEM_LIST_SELL
);
const ITEM_LIST = [
    {
        name: document.querySelector(".cursorbtn"),
        value: 1,
        price: 10,
        minSellPrice: 5,
        divQuantity: document.querySelector(".num-cursor"),
        divRentability: document.querySelector(".num-cursor-waffles"),
        divPrice: document.querySelector(".priceC"),
        imgCont: document.querySelector(".purchased-cursors")
    },
    {
        name: document.querySelector(".mpbtn"),
        value: 10,
        price: 100,
        minSellPrice: 50,
        divQuantity: document.querySelector(".num-manneken-pis"),
        divRentability: document.querySelector(".num-manneken-pis-waffles"),
        divPrice: document.querySelector(".priceMP"),
        imgCont: document.querySelector(".manneken-pis")
    },
    {
        name: document.querySelector(".jcvdbtn"),
        value: 25,
        price: 250,
        minSellPrice: 125,
        divQuantity: document.querySelector(".num-jean-claude"),
        divRentability: document.querySelector(".num-jean-waffles"),
        divPrice: document.querySelector(".priceJC"),
        imgCont: document.querySelector(".jean-claude")
    },
    {
        name: document.querySelector(".bakerybtn"),
        value: 75,
        price: 750,
        minSellPrice: 375,
        divQuantity: document.querySelector(".num-bakery"),
        divRentability: document.querySelector(".num-bakery-waffles"),
        divPrice: document.querySelector(".priceB"),
        imgCont: document.querySelector(".bakery")
    },
    {
        name: document.querySelector(".atombtn"),
        value: 150,
        price: 1500,
        minSellPrice: 750,
        divQuantity: document.querySelector(".num-atomium"),
        divRentability: document.querySelector(".num-atomium-waffles"),
        divPrice: document.querySelector(".priceA"),
        imgCont: document.querySelector(".atomium")
    },
    {
        name: document.querySelector(".gpbtn"),
        value: 400,
        price: 4000,
        minSellPrice: 2000,
        divQuantity: document.querySelector(".num-grand-place"),
        divRentability: document.querySelector(".num-grand-place-waffles"),
        divPrice: document.querySelector(".priceG"),
        imgCont: document.querySelector(".grand-place")
    }, 
];
const ITEM_LIST_SELL = [
    {
        name: document.querySelector(".cursorbtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-cursorSELL"),
        divRentability: document.querySelector(".num-cursor-wafflesSELL"),
        divPrice: document.querySelector(".priceCSELL")
    },
    {
        name: document.querySelector(".mpbtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-manneken-pisSELL"),
        divRentability: document.querySelector(".num-manneken-pis-wafflesSELL"),
        divPrice: document.querySelector(".priceMPSELL")
    },
    {
        name: document.querySelector(".jcvdbtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-jean-claudeSELL"),
        divRentability: document.querySelector(".num-jean-wafflesSELL"),
        divPrice: document.querySelector(".priceJCSELL")
    },
    {
        name: document.querySelector(".bakerybtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-bakerySELL"),
        divRentability: document.querySelector(".num-bakery-wafflesSELL"),
        divPrice: document.querySelector(".priceBSELL")
    },
    {
        name: document.querySelector(".atombtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-atomiumSELL"),
        divRentability: document.querySelector(".num-atomium-wafflesSELL"),
        divPrice: document.querySelector(".priceASELL")
    },
    {
        name: document.querySelector(".gpbtnSELL"),
        quantity: 0,
        divQuantity: document.querySelector(".num-grand-placeSELL"),
        divRentability: document.querySelector(".num-grand-place-wafflesSELL"),
        divPrice: document.querySelector(".priceGSELL")
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jJknb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "score", ()=>score
);
// -------------------------------------------------
//                  FUNCTIONS
// -------------------------------------------------
parcelHelpers.export(exports, "udpateScore", ()=>udpateScore
);
parcelHelpers.export(exports, "updateTitleScore", ()=>updateTitleScore
);
parcelHelpers.export(exports, "wafflesPerSecond", ()=>wafflesPerSecond
);
parcelHelpers.export(exports, "waffleAnimation", ()=>waffleAnimation
);
parcelHelpers.export(exports, "autoClickerBUY", ()=>autoClickerBUY
);
parcelHelpers.export(exports, "autoClickerSELL", ()=>autoClickerSELL
);
var _collection = require("./collection");
var _wafflePng = require("./images/waffle.png");
var _wafflePngDefault = parcelHelpers.interopDefault(_wafflePng);
var _storeButtons = require("./store-buttons");
// -------------------------------------------------
//                  VARIABLES
// -------------------------------------------------
let scoreLocalStorage = window.localStorage.getItem("score");
let score = Number(scoreLocalStorage);
let bigBossInterval;
let intervalLocalStorage = window.localStorage.getItem("intervalValue");
let intervalValue = Number(intervalLocalStorage);
bigBossInterval = setInterval(()=>{
    // Update and Display score
    score += intervalValue;
    counter.innerHTML = score;
    // Updates items that are affordable or owned
    _storeButtons.canAffordStoreItems();
    _storeButtons.canSell();
    // Local Storage : IntervalValue
    window.localStorage.setItem("intervalValue", JSON.stringify(intervalValue.valueOf()));
    // Local Storage : Score
    window.localStorage.setItem("score", JSON.stringify(score.valueOf()));
}, 1000);
let clickValue = 1;
var counter = document.querySelector(".counter");
function udpateScore() {
    score += clickValue;
    counter.innerHTML = score;
}
function updateTitleScore() {
    document.title = counter.innerText + " Waffles | Belgian Waffle Clicker";
}
function wafflesPerSecond() {
    const allPerSec = document.querySelectorAll('.num-waffles');
    let num = 0;
    for (const onePerSec of allPerSec){
        const number = parseInt(onePerSec.innerText);
        num += number / 2; /* Divide by 2 due to two sets of buttons (buy/sell) with num-waffles class */ 
    }
    document.querySelector('.perSecond').innerText = num;
}
function waffleAnimation() {
    const littleWaffle = document.createElement("div");
    littleWaffle.classList.add("animation");
    const waffleImg = document.createElement("img");
    waffleImg.src = _wafflePngDefault.default;
    setTimeout(()=>{
        littleWaffle.remove();
    }, 2000);
    littleWaffle.appendChild(waffleImg);
    document.querySelector(".waffle-container").appendChild(littleWaffle);
}
function autoClickerBUY(i) {
    if (score >= _collection.ITEM_LIST[i].price) {
        // Update and Display score
        score -= _collection.ITEM_LIST[i].price;
        counter.innerHTML = score;
        // Update quantity
        _collection.ITEM_LIST_SELL[i].quantity++;
        // Display(in buy section AND sell section) quantity
        _collection.ITEM_LIST[i].divQuantity.innerHTML = _collection.ITEM_LIST_SELL[i].quantity;
        _collection.ITEM_LIST_SELL[i].divQuantity.innerHTML = _collection.ITEM_LIST_SELL[i].quantity;
        // Update and Display(in buy section AND sell section) rentability
        _collection.ITEM_LIST[i].divRentability.innerHTML = _collection.ITEM_LIST_SELL[i].quantity * _collection.ITEM_LIST[i].value;
        _collection.ITEM_LIST_SELL[i].divRentability.innerHTML = _collection.ITEM_LIST_SELL[i].quantity * _collection.ITEM_LIST[i].value;
        // Upadate price
        _collection.ITEM_LIST[i].price *= 2;
        // Display(in buy section AND sell section) price
        _collection.ITEM_LIST[i].divPrice.innerHTML = _collection.ITEM_LIST[i].price;
        _collection.ITEM_LIST_SELL[i].divPrice.innerHTML = _collection.ITEM_LIST[i].price / 4;
        // Delete and Update VALUE of bigBossInterval
        clearInterval(bigBossInterval);
        intervalValue += _collection.ITEM_LIST[i].value;
        // Start again bigBossInterval becaus he never die!
        bigBossInterval = setInterval(()=>{
            score += intervalValue;
            counter.innerHTML = score;
            // Updates items that are affordable or owned
            _storeButtons.canAffordStoreItems();
            _storeButtons.canSell();
            // Local Storage : IntervalValue
            window.localStorage.setItem("intervalValue", JSON.stringify(intervalValue.valueOf()));
            // Local Storage : Score
            window.localStorage.setItem("score", JSON.stringify(score.valueOf()));
        }, 1000);
    }
}
function autoClickerSELL(i) {
    if (_collection.ITEM_LIST_SELL[i].quantity > 0) {
        // Update and Display score
        score += _collection.ITEM_LIST[i].price / 4;
        counter.innerHTML = score;
        // Update quantity
        _collection.ITEM_LIST_SELL[i].quantity--;
        // Display(in buy section AND sell section) quantity
        _collection.ITEM_LIST[i].divQuantity.innerHTML = _collection.ITEM_LIST_SELL[i].quantity;
        _collection.ITEM_LIST_SELL[i].divQuantity.innerHTML = _collection.ITEM_LIST_SELL[i].quantity;
        // Update and Display(in buy section AND sell section) rentability
        _collection.ITEM_LIST[i].divRentability.innerHTML = _collection.ITEM_LIST_SELL[i].quantity * _collection.ITEM_LIST[i].value;
        _collection.ITEM_LIST_SELL[i].divRentability.innerHTML = _collection.ITEM_LIST_SELL[i].quantity * _collection.ITEM_LIST[i].value;
        // Update price
        _collection.ITEM_LIST[i].price /= 2;
        // Display(in buy section AND sell section) price
        _collection.ITEM_LIST[i].divPrice.innerHTML = _collection.ITEM_LIST[i].price;
        _collection.ITEM_LIST_SELL[i].divPrice.innerHTML /= 2;
        if (_collection.ITEM_LIST_SELL[i].divPrice.innerHTML < _collection.ITEM_LIST[i].minSellPrice) _collection.ITEM_LIST_SELL[i].divPrice.innerHTML = _collection.ITEM_LIST[i].minSellPrice;
        // // Remove 1 img
        // ITEM_LIST[i].imgCont.children[0].remove();
        // Delete and Update VALUE of bigBossInterval
        clearInterval(bigBossInterval);
        intervalValue -= _collection.ITEM_LIST[i].value;
        // Start again bigBossInterval becaus he never die!
        bigBossInterval = setInterval(()=>{
            // Update and Display score
            score += intervalValue;
            counter.innerHTML = score;
            // Updates items that are affordable or owned
            wafflesPerSecond();
            _storeButtons.canAffordStoreItems();
            _storeButtons.canSell();
            // Local Storage : IntervalValue
            window.localStorage.setItem("intervalValue", JSON.stringify(intervalValue.valueOf()));
            // Local Storage : Score
            window.localStorage.setItem("score", JSON.stringify(score.valueOf()));
        }, 1000);
    }
}

},{"./collection":"dnujb","./images/waffle.png":"c7Kic","./store-buttons":"7mVcA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c7Kic":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "waffle.54619f1a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7mVcA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clickBuy", ()=>clickBuy
);
parcelHelpers.export(exports, "clickSell", ()=>clickSell
);
parcelHelpers.export(exports, "canAffordStoreItems", ()=>canAffordStoreItems
);
parcelHelpers.export(exports, "canSell", ()=>canSell
);
parcelHelpers.export(exports, "itemAvailableToBuy", ()=>itemAvailableToBuy
);
parcelHelpers.export(exports, "refreshAvailability", ()=>refreshAvailability
);
var _shopItems = require("./shop-items");
var _cursorPng = require("./images/cursor.png");
var _cursorPngDefault = parcelHelpers.interopDefault(_cursorPng);
var _mannekenPisPng = require("./images/manneken-pis.png");
var _mannekenPisPngDefault = parcelHelpers.interopDefault(_mannekenPisPng);
var _jeanclaudePng = require("./images/jeanclaude.png");
var _jeanclaudePngDefault = parcelHelpers.interopDefault(_jeanclaudePng);
var _bakeryPng = require("./images/bakery.png");
var _bakeryPngDefault = parcelHelpers.interopDefault(_bakeryPng);
var _atomiumPng = require("./images/atomium.png");
var _atomiumPngDefault = parcelHelpers.interopDefault(_atomiumPng);
var _grandPlacePng = require("./images/grand-place.png");
var _grandPlacePngDefault = parcelHelpers.interopDefault(_grandPlacePng);
var _collection = require("./collection");
var counter = document.querySelector(".counter");
const storeButtons = document.querySelectorAll(".store-button");
// -------------------------------------------------
//           BUY/SELL BUTTON FUNCTIONS
// -------------------------------------------------
const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");
function clickBuy(e) {
    buyBtn.classList.toggle("active");
    if (sellBtn.classList.contains("active")) sellBtn.classList.remove("active");
}
function clickSell(e) {
    sellBtn.classList.toggle("active");
    if (buyBtn.classList.contains("active")) buyBtn.classList.remove("active");
}
// -------------------------------------------------
//                 PURCHASING ITEM
// -------------------------------------------------
function purchaseItem(e) {
    var item = e.target.id;
    addItemtoCity(item);
    canAffordStoreItems();
    canSell();
}
function subtractPriceFromCounter(item) {
    const price = parseInt(item.querySelector(".price").innerText);
    const counterMoney = parseInt(counter.innerText);
    counter.innerText = counterMoney - price;
}
// -------------------------------------------------
//                 SELLING ITEM
// -------------------------------------------------
function sellItem(e) {
    var item = e.target.id;
    removeItemFromCity(item);
    canAffordStoreItems();
    canSell();
}
// -------------------------------------------------
//          DISPLAYING ITEM IN CITY PICTURE
// -------------------------------------------------
function addItemtoCity(item) {
    if (item === "cursor") {
        const newImg = document.createElement("img");
        newImg.src = _cursorPngDefault.default;
        document.querySelector(".purchased-cursors").appendChild(newImg);
    } else {
        const city = document.querySelector(".purchased");
        const cityDiv = city.querySelector("." + item);
        const newImg = document.createElement("img");
        if (item === "jean-claude") newImg.src = _jeanclaudePngDefault.default;
        else if (item === "manneken-pis") newImg.src = _mannekenPisPngDefault.default;
        else if (item === "grand-place") newImg.src = _grandPlacePngDefault.default;
        else if (item === "bakery") newImg.src = _bakeryPngDefault.default;
        else if (item === "atomium") newImg.src = _atomiumPngDefault.default;
        cityDiv.appendChild(newImg);
    }
}
function removeItemFromCity(item) {
    if (item === "cursor") {
        const allCursors = document.querySelector(".purchased-cursors");
        allCursors.removeChild(allCursors.firstChild);
    }
    const city = document.querySelector(".purchased");
    const cityDiv = city.querySelector("." + item);
    cityDiv.removeChild(cityDiv.firstChild);
}
// -------------------------------------------------
//   Change values in description of purchased item
// -------------------------------------------------
function editItemDescription(item) {
    var number = parseInt(item.querySelector(".num").innerText);
    var price = parseInt(item.querySelector(".price").innerText);
    const newNum = number + 1;
    item.querySelector(".num").innerText = newNum;
    item.querySelector(".amount").innerText = newNum;
    item.querySelector(".price").innerText = newNum;
    for (const shopItem of _shopItems.SHOPITEMS)if (shopItem.item === item.id) {
        item.querySelector(".price").innerText = price * shopItem.priceIncrease;
        var newNumWaffles = newNum * shopItem.production;
        if (item.id === "cursor") newNumWaffles = newNumWaffles.toFixed(1);
        item.querySelector(".num-waffles").innerText = newNumWaffles;
    }
}
function increaseCounterfromPurchases() {
    const wafflesPerSec = document.querySelectorAll(".num-waffles");
    const wafflesArr = Array.from(wafflesPerSec);
    for (const wafflesPerItem of wafflesPerSec){
        const intWaffles = parseInt(wafflesPerItem.innerText);
        let toAdd = parseInt(counter.innerText);
        toAdd += intWaffles;
        counter.innerText = toAdd;
    }
    canAffordStoreItems();
}
function canAffordStoreItems() {
    const buySection = document.querySelector(".buy-section");
    const allPrices = buySection.querySelectorAll(".price");
    const affordableItems = [];
    for (const price of allPrices){
        const priceVal = parseInt(price.innerText);
        const counterNum = parseInt(counter.innerText);
        if (priceVal <= counterNum) {
            const item = price.id;
            affordableItems.push(item);
        }
    }
    itemAvailableToBuy(affordableItems);
}
function canSell() {
    // const storeSellButtons = document.querySelectorAll(".sell-store-button");
    // for (const sellStoreBtn of storeSellButtons) {
    //   const amount = sellStoreBtn.document.querySelector(".amount");
    //   if (amount !== "") {
    //     sellStoreBtn.classList.add("available");
    //     sellStoreBtn.addEventListener("click", sellItem);
    //   }
    // }
    for (let item of _collection.ITEM_LIST_SELL)if (item.quantity > 0) {
        item.name.classList.add("available");
        item.name.addEventListener("click", sellItem);
    } else {
        item.name.classList.remove("available");
        item.name.removeEventListener("click", sellItem);
    }
}
function itemAvailableToBuy(affordableItems) {
    const storeButtons = document.querySelectorAll(".store-button");
    refreshAvailability(storeButtons);
    for (const storeBtn of storeButtons){
        for (const affordItem of affordableItems)if (storeBtn.id === affordItem) {
            storeBtn.classList.add("available");
            storeBtn.addEventListener("click", purchaseItem);
        }
    }
}
function refreshAvailability(storeButtons) {
    for (const storeBtn of storeButtons){
        storeBtn.classList.remove("available");
        storeBtn.removeEventListener("click", purchaseItem);
    }
}

},{"./shop-items":"fZ7cP","./images/cursor.png":"8FPR5","./images/manneken-pis.png":"dvg3D","./images/jeanclaude.png":"6h9AT","./images/bakery.png":"f9nYZ","./images/atomium.png":"bfvRo","./images/grand-place.png":"bYSf1","./collection":"dnujb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZ7cP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SHOPITEMS", ()=>SHOPITEMS
);
const SHOPITEMS = [
    {
        'item': 'cursor',
        'priceIncrease': '2',
        'production': '0.1'
    },
    {
        'item': 'manneken-pis',
        'priceIncrease': '2.5',
        'production': '2'
    },
    {
        'item': 'jean-claude',
        'priceIncrease': '3',
        'production': '3'
    },
    {
        'item': 'bakery',
        'priceIncrease': '5',
        'production': '5'
    },
    {
        'item': 'atomium',
        'priceIncrease': '10',
        'production': '10'
    },
    {
        'item': 'grand-place',
        'priceIncrease': '20',
        'production': '15'
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8FPR5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "cursor.7e921620.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dvg3D":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "manneken-pis.2602a576.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6h9AT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "jeanclaude.7c072e0b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"f9nYZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "bakery.960281c6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bfvRo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "atomium.fc3b6223.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bYSf1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "grand-place.a7d587d5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequire3b83")

//# sourceMappingURL=index.379dd93c.js.map
