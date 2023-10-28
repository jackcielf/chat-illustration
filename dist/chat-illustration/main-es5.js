function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-illustration/chat-illustration.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-illustration/chat-illustration.component.html ***!
    \****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatIllustrationChatIllustrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main class=\"chat__container\">\n  <div class=\"background__element\"></div>\n  <div class=\"smartphone__box\">\n    <div class=\"camera-front__element\"></div>\n    <app-header-avatar name=\"Samuel Green\"></app-header-avatar>\n\n    <div class=\"chat-view__container\">\n      <app-chat-receiver\n        chat=\"That sounds great. I’d be happy with that.\"\n      ></app-chat-receiver>\n      <app-chat-receiver\n        chat=\"Could you send over some pictures of your dog, please?\"\n      ></app-chat-receiver>\n\n      <div class=\"images__box\">\n        <img src=\"/assets/images/dog-image-1.jpg\" alt=\"Dog 1\" />\n        <img src=\"/assets/images/dog-image-2.jpg\" alt=\"Dog 2\" />\n        <img src=\"/assets/images/dog-image-3.jpg\" alt=\"Dog 3\" />\n      </div>\n\n      <app-chat-sender\n        chat=\"Here are a few pictures. She’s a happy girl!\"\n      ></app-chat-sender>\n      <app-chat-sender chat=\"Can you make it?\"></app-chat-sender>\n\n      <app-chat-receiver\n        chat=\"She looks so happy! The time we discussed works. How long shall I take her out for?\"\n      ></app-chat-receiver>\n\n      <app-time-chat-price price=\"29\" time=\"30 minute\"></app-time-chat-price>\n      <app-time-chat-price price=\"49\" time=\"1 hour\"></app-time-chat-price>\n    </div>\n\n    <div class=\"chat-field__box\">\n      <div class=\"input__box\">\n        <input type=\"text\" placeholder=\"Type a message...\" />\n        <button class=\"submit__chat\"></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"text__box\">\n    <h1>Simple booking</h1>\n    <p>\n      Stay in touch with our dog walkers through the chat interface. This makes\n      it easy to discuss arrangements and make bookings. Once the walk has been\n      completed you can rate your walker and book again all through the chat.\n    </p>\n  </div>\n</main>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-receiver/chat-receiver.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-receiver/chat-receiver.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsChatReceiverChatReceiverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"chat-receive__box\">\n  <p>{{ chat }}</p>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-sender/chat-sender.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-sender/chat-sender.component.html ***!
    \****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsChatSenderChatSenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"chat-sender__box\">\n  <span>{{ chat }}</span>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header-avatar/header-avatar.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header-avatar/header-avatar.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderAvatarHeaderAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"user__box\">\n  <div class=\"user-name__box\">\n    <div class=\"img-name__box\">\n      <div class=\"img__box\">\n        <img src=\"/assets/images/avatar.jpg\" alt=\"avatar\" />\n      </div>\n      <div class=\"name__box\">\n        <p>{{ name }}</p>\n        <span>Available to Walk</span>\n      </div>\n    </div>\n    <div class=\"options\">\n      <div class=\"item\"></div>\n      <div class=\"item\"></div>\n      <div class=\"item\"></div>\n    </div>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/time-chat-price/time-chat-price.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/time-chat-price/time-chat-price.component.html ***!
    \************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTimeChatPriceTimeChatPriceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"time-chat__box\" [ngClass]=\"sender ? 'sender' : ''\">\n  <div class=\"time__box\">\n    <div class=\"circle__element\"></div>\n    <span>{{ time }} walk</span>\n  </div>\n  <span class=\"price-time__box\">${{ price }}</span>\n</div>\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pages_chat_illustration_chat_illustration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pages/chat-illustration/chat-illustration.component */"./src/app/pages/chat-illustration/chat-illustration.component.ts");
    var routes = [{
      path: "chat-illustration",
      component: _pages_chat_illustration_chat_illustration_component__WEBPACK_IMPORTED_MODULE_3__["ChatIllustrationComponent"]
    }, {
      path: "**",
      redirectTo: "chat-illustration"
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _shared_components_chat_receiver_chat_receiver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./shared/components/chat-receiver/chat-receiver.component */"./src/app/shared/components/chat-receiver/chat-receiver.component.ts");
    /* harmony import */
    var _pages_chat_illustration_chat_illustration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./pages/chat-illustration/chat-illustration.component */"./src/app/pages/chat-illustration/chat-illustration.component.ts");
    /* harmony import */
    var _shared_components_chat_sender_chat_sender_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./shared/components/chat-sender/chat-sender.component */"./src/app/shared/components/chat-sender/chat-sender.component.ts");
    /* harmony import */
    var _shared_components_time_chat_price_time_chat_price_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./shared/components/time-chat-price/time-chat-price.component */"./src/app/shared/components/time-chat-price/time-chat-price.component.ts");
    /* harmony import */
    var _shared_components_header_avatar_header_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./shared/components/header-avatar/header-avatar.component */"./src/app/shared/components/header-avatar/header-avatar.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_components_chat_receiver_chat_receiver_component__WEBPACK_IMPORTED_MODULE_5__["ChatReceiverComponent"], _pages_chat_illustration_chat_illustration_component__WEBPACK_IMPORTED_MODULE_6__["ChatIllustrationComponent"], _shared_components_chat_sender_chat_sender_component__WEBPACK_IMPORTED_MODULE_7__["ChatSenderComponent"], _shared_components_time_chat_price_time_chat_price_component__WEBPACK_IMPORTED_MODULE_8__["TimeChatPriceComponent"], _shared_components_header_avatar_header_avatar_component__WEBPACK_IMPORTED_MODULE_9__["HeaderAvatarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/pages/chat-illustration/chat-illustration.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/chat-illustration/chat-illustration.component.scss ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesChatIllustrationChatIllustrationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".chat__container {\n  min-width: 100%;\n  min-height: 100vh;\n  background-color: var(--violet-back);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-column-gap: 4em;\n       column-gap: 4em;\n}\n.chat__container .background__element {\n  width: 40%;\n  height: 93vh;\n  background: var(--gradient-back);\n  position: absolute;\n  top: 0;\n  left: -10%;\n  border-radius: 0 0 50% 50%;\n}\n.chat__container .smartphone__box {\n  width: 360px;\n  height: 700px;\n  background-color: var(--violet-back);\n  border: 12px solid var(--white);\n  border-radius: 35px;\n  box-shadow: 2em 4em 50px rgba(169, 168, 168, 0.2);\n  position: relative;\n}\n.chat__container .smartphone__box .camera-front__element {\n  width: 55%;\n  height: 28px;\n  border-radius: 0 0 20px 20px;\n  background-color: var(--white);\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.chat__container .smartphone__box .chat-view__container {\n  height: 73.5%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.9em;\n  padding: 1em 1em 0 1em;\n  overflow: hidden scroll;\n  scrollbar-color: transparent transparent;\n  /* Esconder a scrollbar NO FIREFOX */\n}\n.chat__container .smartphone__box .chat-view__container .images__box {\n  display: flex;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n  justify-content: flex-end;\n}\n.chat__container .smartphone__box .chat-view__container .images__box img {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n}\n.chat__container .smartphone__box .chat-view__container::-webkit-scrollbar {\n  display: none;\n  width: 0.5em;\n}\n.chat__container .smartphone__box .chat-view__container::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n.chat__container .smartphone__box .chat-view__container::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.chat__container .smartphone__box .chat-field__box {\n  padding: 0.8em;\n}\n.chat__container .smartphone__box .chat-field__box .input__box {\n  position: relative;\n}\n.chat__container .smartphone__box .chat-field__box .input__box input {\n  width: 100%;\n  padding: 1.2em 4em 1.2em 1.2em;\n  border-radius: 25px;\n  outline: none;\n}\n.chat__container .smartphone__box .chat-field__box .input__box input::-webkit-input-placeholder {\n  color: var(--placeholder-text);\n}\n.chat__container .smartphone__box .chat-field__box .input__box input::-moz-placeholder {\n  color: var(--placeholder-text);\n}\n.chat__container .smartphone__box .chat-field__box .input__box input::-ms-input-placeholder {\n  color: var(--placeholder-text);\n}\n.chat__container .smartphone__box .chat-field__box .input__box input::placeholder {\n  color: var(--placeholder-text);\n}\n.chat__container .smartphone__box .chat-field__box .input__box .submit__chat {\n  width: 37px;\n  height: 37px;\n  background-color: var(--submit-button);\n  position: absolute;\n  right: 0.7em;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  cursor: pointer;\n}\n.chat__container .smartphone__box .chat-field__box .input__box .submit__chat::before {\n  content: \"\";\n  position: absolute;\n  left: 1.1em;\n  bottom: 35%;\n  width: 10px;\n  height: 3px;\n  background-color: var(--white);\n  transform: rotate(130deg);\n  border-radius: 10px;\n}\n.chat__container .smartphone__box .chat-field__box .input__box .submit__chat::after {\n  content: \"\";\n  position: absolute;\n  left: 1.1em;\n  top: 40%;\n  width: 10px;\n  height: 3px;\n  background-color: var(--white);\n  transform: rotate(50deg);\n  border-radius: 10px;\n}\n.chat__container .text__box {\n  width: 450px;\n}\n.chat__container .text__box h1 {\n  font-size: 2.5em;\n  font-weight: 500;\n  margin-bottom: 0.7em;\n}\n.chat__container .text__box p {\n  color: var(--paragraph);\n  line-height: 1.7em;\n}\n@media screen and (max-width: 576px) {\n  .chat__container {\n    flex-direction: column;\n    row-gap: 4em;\n    padding: 3em 0;\n  }\n  .chat__container .background__element {\n    width: 60%;\n    height: 60vh;\n  }\n  .chat__container .text__box {\n    text-align: center;\n    padding: 0 4.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1pbGx1c3RyYXRpb24vQzpcXEFOR1VMQVJcXGNoYXQtaWxsdXN0cmF0aW9uL3NyY1xcYXBwXFxwYWdlc1xcY2hhdC1pbGx1c3RyYXRpb25cXGNoYXQtaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0LWlsbHVzdHJhdGlvbi9jaGF0LWlsbHVzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtBQ0NGO0FEQ0U7RUFDSSxVQUFBO0VBQ0YsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsb0NBQUE7QUNBaEQ7QURFTTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSx5QkFBQTtBQ0FSO0FERVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQVY7QURJTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDRlI7QURLTTtFQUNFLDZCQUFBO0FDSFI7QURNTTtFQUNFLDZCQUFBO0FDSlI7QURRSTtFQUNFLGNBQUE7QUNOTjtBRFFNO0VBQ0Usa0JBQUE7QUNOUjtBRFFRO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDTlY7QURRVTtFQUNFLDhCQUFBO0FDTlo7QURLVTtFQUNFLDhCQUFBO0FDTlo7QURLVTtFQUNFLDhCQUFBO0FDTlo7QURLVTtFQUNFLDhCQUFBO0FDTlo7QURVUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNSVjtBRFVVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEV1U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDVFo7QURnQkU7RUFDRSxZQUFBO0FDZEo7QURnQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNkTjtBRGlCSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRG9CQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2pCRjtFRG1CRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDakJKO0VEb0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ2xCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC1pbGx1c3RyYXRpb24vY2hhdC1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdF9fY29udGFpbmVyIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0LWJhY2spO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogNGVtO1xyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kX19lbGVtZW50IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogOTN2aDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJhY2spO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNtYXJ0cGhvbmVfX2JveCB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0LWJhY2spO1xyXG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3gtc2hhZG93OiAyZW0gNGVtIDUwcHggcmdiYSgxNjksIDE2OCwgMTY4LCAwLjIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5jYW1lcmEtZnJvbnRfX2VsZW1lbnQge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LXZpZXdfX2NvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogNzMuNSU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHJvdy1nYXA6IDAuOWVtO1xyXG4gICAgICBwYWRkaW5nOiAxZW0gMWVtIDAgMWVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtcclxuICAgICAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDsgLyogRXNjb25kZXIgYSBzY3JvbGxiYXIgTk8gRklSRUZPWCAqL1xyXG5cclxuICAgICAgLmltYWdlc19fYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDFlbTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDAuNWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LWZpZWxkX19ib3gge1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbTtcclxuXHJcbiAgICAgIC5pbnB1dF9fYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS4yZW0gNGVtIDEuMmVtIDEuMmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VibWl0X19jaGF0IHtcclxuICAgICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbik7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMC43ZW07XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEuMWVtO1xyXG4gICAgICAgICAgICBib3R0b206IDM1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEuMWVtO1xyXG4gICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDUwZGVnKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0X19ib3gge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wYXJhZ3JhcGgpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jaGF0X19jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDRlbTtcclxuICAgIHBhZGRpbmc6IDNlbSAwO1xyXG5cclxuICAgIC5iYWNrZ3JvdW5kX19lbGVtZW50IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0X19ib3gge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAgNC41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jaGF0X19jb250YWluZXIge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtYmFjayk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDRlbTtcbn1cbi5jaGF0X19jb250YWluZXIgLmJhY2tncm91bmRfX2VsZW1lbnQge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDkzdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJhY2spO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG59XG4uY2hhdF9fY29udGFpbmVyIC5zbWFydHBob25lX19ib3gge1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpb2xldC1iYWNrKTtcbiAgYm9yZGVyOiAxMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogMmVtIDRlbSA1MHB4IHJnYmEoMTY5LCAxNjgsIDE2OCwgMC4yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jYW1lcmEtZnJvbnRfX2VsZW1lbnQge1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LXZpZXdfX2NvbnRhaW5lciB7XG4gIGhlaWdodDogNzMuNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDAuOWVtO1xuICBwYWRkaW5nOiAxZW0gMWVtIDAgMWVtO1xuICBvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgLyogRXNjb25kZXIgYSBzY3JvbGxiYXIgTk8gRklSRUZPWCAqL1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LXZpZXdfX2NvbnRhaW5lciAuaW1hZ2VzX19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2hhdF9fY29udGFpbmVyIC5zbWFydHBob25lX19ib3ggLmNoYXQtdmlld19fY29udGFpbmVyIC5pbWFnZXNfX2JveCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LXZpZXdfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMC41ZW07XG59XG4uY2hhdF9fY29udGFpbmVyIC5zbWFydHBob25lX19ib3ggLmNoYXQtdmlld19fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LXZpZXdfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0X19jb250YWluZXIgLnNtYXJ0cGhvbmVfX2JveCAuY2hhdC1maWVsZF9fYm94IHtcbiAgcGFkZGluZzogMC44ZW07XG59XG4uY2hhdF9fY29udGFpbmVyIC5zbWFydHBob25lX19ib3ggLmNoYXQtZmllbGRfX2JveCAuaW5wdXRfX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGF0X19jb250YWluZXIgLnNtYXJ0cGhvbmVfX2JveCAuY2hhdC1maWVsZF9fYm94IC5pbnB1dF9fYm94IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMmVtIDRlbSAxLjJlbSAxLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jaGF0X19jb250YWluZXIgLnNtYXJ0cGhvbmVfX2JveCAuY2hhdC1maWVsZF9fYm94IC5pbnB1dF9fYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci10ZXh0KTtcbn1cbi5jaGF0X19jb250YWluZXIgLnNtYXJ0cGhvbmVfX2JveCAuY2hhdC1maWVsZF9fYm94IC5pbnB1dF9fYm94IC5zdWJtaXRfX2NoYXQge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC43ZW07XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LWZpZWxkX19ib3ggLmlucHV0X19ib3ggLnN1Ym1pdF9fY2hhdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxLjFlbTtcbiAgYm90dG9tOiAzNSU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNoYXRfX2NvbnRhaW5lciAuc21hcnRwaG9uZV9fYm94IC5jaGF0LWZpZWxkX19ib3ggLmlucHV0X19ib3ggLnN1Ym1pdF9fY2hhdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEuMWVtO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUwZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jaGF0X19jb250YWluZXIgLnRleHRfX2JveCB7XG4gIHdpZHRoOiA0NTBweDtcbn1cbi5jaGF0X19jb250YWluZXIgLnRleHRfX2JveCBoMSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xufVxuLmNoYXRfX2NvbnRhaW5lciAudGV4dF9fYm94IHAge1xuICBjb2xvcjogdmFyKC0tcGFyYWdyYXBoKTtcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2hhdF9fY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDRlbTtcbiAgICBwYWRkaW5nOiAzZW0gMDtcbiAgfVxuICAuY2hhdF9fY29udGFpbmVyIC5iYWNrZ3JvdW5kX19lbGVtZW50IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjB2aDtcbiAgfVxuICAuY2hhdF9fY29udGFpbmVyIC50ZXh0X19ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDQuNWVtO1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/pages/chat-illustration/chat-illustration.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/chat-illustration/chat-illustration.component.ts ***!
    \************************************************************************/
  /*! exports provided: ChatIllustrationComponent */
  /***/
  function srcAppPagesChatIllustrationChatIllustrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChatIllustrationComponent", function () {
      return ChatIllustrationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ChatIllustrationComponent = /*#__PURE__*/function () {
      function ChatIllustrationComponent() {
        _classCallCheck(this, ChatIllustrationComponent);
      }
      _createClass(ChatIllustrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ChatIllustrationComponent;
    }();
    ChatIllustrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-illustration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chat-illustration.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-illustration/chat-illustration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chat-illustration.component.scss */"./src/app/pages/chat-illustration/chat-illustration.component.scss"))["default"]]
    })], ChatIllustrationComponent);

    /***/
  },

  /***/"./src/app/shared/components/chat-receiver/chat-receiver.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/chat-receiver/chat-receiver.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsChatReceiverChatReceiverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".chat-receive__box {\n  max-width: 65%;\n  font-size: 0.8em;\n  color: var(--chat-left);\n  background-color: var(--chat-back);\n  padding: 1em;\n  border-radius: 15px 15px 15px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1yZWNlaXZlci9DOlxcQU5HVUxBUlxcY2hhdC1pbGx1c3RyYXRpb24vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY2hhdC1yZWNlaXZlclxcY2hhdC1yZWNlaXZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1yZWNlaXZlci9jaGF0LXJlY2VpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1yZWNlaXZlci9jaGF0LXJlY2VpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcmVjZWl2ZV9fYm94IHtcclxuICBtYXgtd2lkdGg6IDY1JTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiB2YXIoLS1jaGF0LWxlZnQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXQtYmFjayk7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDVweDtcclxufVxyXG4iLCIuY2hhdC1yZWNlaXZlX19ib3gge1xuICBtYXgtd2lkdGg6IDY1JTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6IHZhcigtLWNoYXQtbGVmdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXQtYmFjayk7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggNXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/shared/components/chat-receiver/chat-receiver.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/chat-receiver/chat-receiver.component.ts ***!
    \****************************************************************************/
  /*! exports provided: ChatReceiverComponent */
  /***/
  function srcAppSharedComponentsChatReceiverChatReceiverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChatReceiverComponent", function () {
      return ChatReceiverComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ChatReceiverComponent = /*#__PURE__*/function () {
      function ChatReceiverComponent() {
        _classCallCheck(this, ChatReceiverComponent);
      }
      _createClass(ChatReceiverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ChatReceiverComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatReceiverComponent.prototype, "chat", void 0);
    ChatReceiverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-receiver',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chat-receiver.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-receiver/chat-receiver.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chat-receiver.component.scss */"./src/app/shared/components/chat-receiver/chat-receiver.component.scss"))["default"]]
    })], ChatReceiverComponent);

    /***/
  },

  /***/"./src/app/shared/components/chat-sender/chat-sender.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/chat-sender/chat-sender.component.scss ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsChatSenderChatSenderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".chat-sender__box {\n  max-width: 67%;\n  font-size: 0.8em;\n  color: var(--chat-right);\n  background-color: var(--white);\n  padding: 1em;\n  border-radius: 15px 15px 5px 15px;\n  float: inline-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1zZW5kZXIvQzpcXEFOR1VMQVJcXGNoYXQtaWxsdXN0cmF0aW9uL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNoYXQtc2VuZGVyXFxjaGF0LXNlbmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC1zZW5kZXIvY2hhdC1zZW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXQtc2VuZGVyL2NoYXQtc2VuZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtc2VuZGVyX19ib3gge1xyXG4gIG1heC13aWR0aDogNjclO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgY29sb3I6IHZhcigtLWNoYXQtcmlnaHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDVweCAxNXB4O1xyXG4gIGZsb2F0OiBpbmxpbmUtZW5kO1xyXG59XHJcbiIsIi5jaGF0LXNlbmRlcl9fYm94IHtcbiAgbWF4LXdpZHRoOiA2NyU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiB2YXIoLS1jaGF0LXJpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCA1cHggMTVweDtcbiAgZmxvYXQ6IGlubGluZS1lbmQ7XG59Il19 */";

    /***/
  },

  /***/"./src/app/shared/components/chat-sender/chat-sender.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/chat-sender/chat-sender.component.ts ***!
    \************************************************************************/
  /*! exports provided: ChatSenderComponent */
  /***/
  function srcAppSharedComponentsChatSenderChatSenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChatSenderComponent", function () {
      return ChatSenderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ChatSenderComponent = /*#__PURE__*/function () {
      function ChatSenderComponent() {
        _classCallCheck(this, ChatSenderComponent);
      }
      _createClass(ChatSenderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ChatSenderComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSenderComponent.prototype, "chat", void 0);
    ChatSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-sender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chat-sender.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat-sender/chat-sender.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chat-sender.component.scss */"./src/app/shared/components/chat-sender/chat-sender.component.scss"))["default"]]
    })], ChatSenderComponent);

    /***/
  },

  /***/"./src/app/shared/components/header-avatar/header-avatar.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/header-avatar/header-avatar.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsHeaderAvatarHeaderAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".user__box {\n  background: var(--gradient-back);\n  border-radius: 25px 25px 10px 10px;\n  padding: 2.8em 1.7em 1em 2.5em;\n}\n.user__box .user-name__box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.user__box .user-name__box .img-name__box {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 0.8em;\n       column-gap: 0.8em;\n}\n.user__box .user-name__box .img-name__box .img__box {\n  position: relative;\n}\n.user__box .user-name__box .img-name__box .img__box img {\n  width: 40px;\n  border-radius: 50%;\n  border: 2px solid var(--white);\n}\n.user__box .user-name__box .img-name__box .img__box::before {\n  content: \"\";\n  position: absolute;\n  left: -1.1em;\n  top: 50%;\n  width: 10px;\n  height: 3px;\n  background-color: var(--white);\n  transform: rotate(60deg);\n  border-radius: 10px;\n  cursor: pointer;\n}\n.user__box .user-name__box .img-name__box .img__box::after {\n  content: \"\";\n  position: absolute;\n  left: -1.1em;\n  top: 35%;\n  width: 10px;\n  height: 3px;\n  background-color: var(--white);\n  transform: rotate(-60deg);\n  border-radius: 10px;\n  cursor: pointer;\n}\n.user__box .user-name__box .img-name__box .name__box {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.2em;\n}\n.user__box .user-name__box .img-name__box .name__box p {\n  color: var(--white);\n  font-weight: 500;\n}\n.user__box .user-name__box .img-name__box .name__box span {\n  font-size: 0.7em;\n  color: rgba(255, 255, 255, 0.5);\n}\n.user__box .user-name__box .options {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 0.15em;\n  cursor: pointer;\n}\n.user__box .user-name__box .options .item {\n  padding: 1.6px;\n  background-color: var(--white);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLWF2YXRhci9DOlxcQU5HVUxBUlxcY2hhdC1pbGx1c3RyYXRpb24vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyLWF2YXRhclxcaGVhZGVyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLWF2YXRhci9oZWFkZXItYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7QUNDTjtBRENNO0VBQ0Usa0JBQUE7QUNDUjtBRENRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDVjtBREVRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBVjtBREdRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEVjtBREtNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNIUjtBREtRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0hWO0FETVE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FDSlY7QURTSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNQTjtBRFNNO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci1hdmF0YXIvaGVhZGVyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX19ib3gge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJhY2spO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMi44ZW0gMS43ZW0gMWVtIDIuNWVtO1xyXG5cclxuICAudXNlci1uYW1lX19ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmltZy1uYW1lX19ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2x1bW4tZ2FwOiAwLjhlbTtcclxuXHJcbiAgICAgIC5pbWdfX2JveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IC0xLjFlbTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogLTEuMWVtO1xyXG4gICAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubmFtZV9fYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHJvdy1nYXA6IDAuMmVtO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3B0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHJvdy1nYXA6IDAuMTVlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgLml0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnVzZXJfX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJhY2spO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiAyLjhlbSAxLjdlbSAxZW0gMi41ZW07XG59XG4udXNlcl9fYm94IC51c2VyLW5hbWVfX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyX19ib3ggLnVzZXItbmFtZV9fYm94IC5pbWctbmFtZV9fYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC44ZW07XG59XG4udXNlcl9fYm94IC51c2VyLW5hbWVfX2JveCAuaW1nLW5hbWVfX2JveCAuaW1nX19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlcl9fYm94IC51c2VyLW5hbWVfX2JveCAuaW1nLW5hbWVfX2JveCAuaW1nX19ib3ggaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xufVxuLnVzZXJfX2JveCAudXNlci1uYW1lX19ib3ggLmltZy1uYW1lX19ib3ggLmltZ19fYm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xLjFlbTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51c2VyX19ib3ggLnVzZXItbmFtZV9fYm94IC5pbWctbmFtZV9fYm94IC5pbWdfX2JveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xLjFlbTtcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXNlcl9fYm94IC51c2VyLW5hbWVfX2JveCAuaW1nLW5hbWVfX2JveCAubmFtZV9fYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAwLjJlbTtcbn1cbi51c2VyX19ib3ggLnVzZXItbmFtZV9fYm94IC5pbWctbmFtZV9fYm94IC5uYW1lX19ib3ggcCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udXNlcl9fYm94IC51c2VyLW5hbWVfX2JveCAuaW1nLW5hbWVfX2JveCAubmFtZV9fYm94IHNwYW4ge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLnVzZXJfX2JveCAudXNlci1uYW1lX19ib3ggLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAwLjE1ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51c2VyX19ib3ggLnVzZXItbmFtZV9fYm94IC5vcHRpb25zIC5pdGVtIHtcbiAgcGFkZGluZzogMS42cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/shared/components/header-avatar/header-avatar.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/header-avatar/header-avatar.component.ts ***!
    \****************************************************************************/
  /*! exports provided: HeaderAvatarComponent */
  /***/
  function srcAppSharedComponentsHeaderAvatarHeaderAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderAvatarComponent", function () {
      return HeaderAvatarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderAvatarComponent = /*#__PURE__*/function () {
      function HeaderAvatarComponent() {
        _classCallCheck(this, HeaderAvatarComponent);
      }
      _createClass(HeaderAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HeaderAvatarComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderAvatarComponent.prototype, "name", void 0);
    HeaderAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header-avatar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header-avatar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header-avatar/header-avatar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header-avatar.component.scss */"./src/app/shared/components/header-avatar/header-avatar.component.scss"))["default"]]
    })], HeaderAvatarComponent);

    /***/
  },

  /***/"./src/app/shared/components/time-chat-price/time-chat-price.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/components/time-chat-price/time-chat-price.component.scss ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsTimeChatPriceTimeChatPriceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".time-chat__box {\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--gradient-back-price);\n  padding: 0.8em 1.3em 0.8em 0.9em;\n  border-radius: 15px 15px 15px 5px;\n}\n.time-chat__box .time__box {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 0.5em;\n       column-gap: 0.5em;\n}\n.time-chat__box .time__box .circle__element {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--button-outline);\n}\n.time-chat__box .time__box span {\n  font-weight: 400;\n  font-size: 0.8em;\n  color: var(--white);\n}\n.time-chat__box span {\n  font-weight: 700;\n  color: var(--white);\n}\n.sender {\n  border-radius: 15px 15px 5px 15px;\n  float: inline-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZS1jaGF0LXByaWNlL0M6XFxBTkdVTEFSXFxjaGF0LWlsbHVzdHJhdGlvbi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0aW1lLWNoYXQtcHJpY2VcXHRpbWUtY2hhdC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZS1jaGF0LXByaWNlL3RpbWUtY2hhdC1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ0NOO0FERUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBTjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FETUE7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90aW1lLWNoYXQtcHJpY2UvdGltZS1jaGF0LXByaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUtY2hhdF9fYm94IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYmFjay1wcmljZSk7XHJcbiAgcGFkZGluZzogMC44ZW0gMS4zZW0gMC44ZW0gMC45ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggNXB4O1xyXG5cclxuICAudGltZV9fYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMC41ZW07XHJcblxyXG4gICAgLmNpcmNsZV9fZWxlbWVudCB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZW5kZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCA1cHggMTVweDtcclxuICBmbG9hdDogaW5saW5lLWVuZDtcclxufVxyXG4iLCIudGltZS1jaGF0X19ib3gge1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJhY2stcHJpY2UpO1xuICBwYWRkaW5nOiAwLjhlbSAxLjNlbSAwLjhlbSAwLjllbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggNXB4O1xufVxuLnRpbWUtY2hhdF9fYm94IC50aW1lX19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVlbTtcbn1cbi50aW1lLWNoYXRfX2JveCAudGltZV9fYm94IC5jaXJjbGVfX2VsZW1lbnQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcbn1cbi50aW1lLWNoYXRfX2JveCAudGltZV9fYm94IHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnRpbWUtY2hhdF9fYm94IHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc2VuZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDVweCAxNXB4O1xuICBmbG9hdDogaW5saW5lLWVuZDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/shared/components/time-chat-price/time-chat-price.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/time-chat-price/time-chat-price.component.ts ***!
    \********************************************************************************/
  /*! exports provided: TimeChatPriceComponent */
  /***/
  function srcAppSharedComponentsTimeChatPriceTimeChatPriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TimeChatPriceComponent", function () {
      return TimeChatPriceComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TimeChatPriceComponent = /*#__PURE__*/function () {
      function TimeChatPriceComponent() {
        _classCallCheck(this, TimeChatPriceComponent);
        this.sender = false;
      }
      _createClass(TimeChatPriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return TimeChatPriceComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeChatPriceComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeChatPriceComponent.prototype, "price", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeChatPriceComponent.prototype, "sender", void 0);
    TimeChatPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-time-chat-price",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./time-chat-price.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/time-chat-price/time-chat-price.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./time-chat-price.component.scss */"./src/app/shared/components/time-chat-price/time-chat-price.component.scss"))["default"]]
    })], TimeChatPriceComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\ANGULAR\chat-illustration\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map