(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroGenericGenericCadGenericCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-cad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroGenericGenericListGenericListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/constants/Constants.ts":
    /*!****************************************!*\
      !*** ./src/app/constants/Constants.ts ***!
      \****************************************/

    /*! exports provided: Constants */

    /***/
    function srcAppConstantsConstantsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.UFS = [{
        codigo_uf: 27,
        uf: 'AL',
        nome: 'Alagoas'
      }, {
        codigo_uf: 12,
        uf: 'AC',
        nome: 'Acre'
      }, {
        codigo_uf: 16,
        uf: 'AP',
        nome: 'Amapá'
      }, {
        codigo_uf: 13,
        uf: 'AM',
        nome: 'Amazonas'
      }, {
        codigo_uf: 29,
        uf: 'BA',
        nome: 'Bahia'
      }, {
        codigo_uf: 23,
        uf: 'CE',
        nome: 'Ceará'
      }, {
        codigo_uf: 53,
        uf: 'DF',
        nome: 'Distrito Federal'
      }, {
        codigo_uf: 32,
        uf: 'ES',
        nome: 'Espírito Santo'
      }, {
        codigo_uf: 52,
        uf: 'GO',
        nome: 'Goías'
      }, {
        codigo_uf: 21,
        uf: 'MA',
        nome: 'Maranhão'
      }, {
        codigo_uf: 51,
        uf: 'MT',
        nome: 'Mato Grosso'
      }, {
        codigo_uf: 50,
        uf: 'MS',
        nome: 'Mato G. do Sul'
      }, {
        codigo_uf: 31,
        uf: 'MG',
        nome: 'Minas Gerais'
      }, {
        codigo_uf: 15,
        uf: 'PA',
        nome: 'Pará'
      }, {
        codigo_uf: 25,
        uf: 'PB',
        nome: 'Paraíba'
      }, {
        codigo_uf: 41,
        uf: 'PR',
        nome: 'Paraná'
      }, {
        codigo_uf: 26,
        uf: 'PE',
        nome: 'Pernambuco'
      }, {
        codigo_uf: 22,
        uf: 'PI',
        nome: 'Piauí'
      }, {
        codigo_uf: 33,
        uf: 'RJ',
        nome: 'Rio de Janeiro'
      }, {
        codigo_uf: 24,
        uf: 'RN',
        nome: 'Rio G. do Norte'
      }, {
        codigo_uf: 43,
        uf: 'RS',
        nome: 'Rio G. do Sul'
      }, {
        codigo_uf: 11,
        uf: 'RO',
        nome: 'Rondônia'
      }, {
        codigo_uf: 14,
        uf: 'RR',
        nome: 'Roraíma'
      }, {
        codigo_uf: 42,
        uf: 'SC',
        nome: 'Santa Catarina'
      }, {
        codigo_uf: 35,
        uf: 'SP',
        nome: 'São Paulo'
      }, {
        codigo_uf: 28,
        uf: 'SE',
        nome: 'Sergipe'
      }, {
        codigo_uf: 17,
        uf: 'TO',
        nome: 'Tocantins'
      }];
      /***/
    },

    /***/
    "./src/app/controller/OrdemServicoController.ts":
    /*!******************************************************!*\
      !*** ./src/app/controller/OrdemServicoController.ts ***!
      \******************************************************/

    /*! exports provided: OrdemServicoController */

    /***/
    function srcAppControllerOrdemServicoControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdemServicoController", function () {
        return OrdemServicoController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var OrdemServicoController = /*#__PURE__*/function (_Controller__WEBPACK_) {
        _inherits(OrdemServicoController, _Controller__WEBPACK_);

        var _super = _createSuper(OrdemServicoController);

        function OrdemServicoController() {
          _classCallCheck(this, OrdemServicoController);

          return _super.call(this, '/ordens-servicos');
        }

        return OrdemServicoController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      OrdemServicoController.ctorParameters = function () {
        return [];
      };

      OrdemServicoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrdemServicoController);
      /***/
    },

    /***/
    "./src/app/entity/Entity.ts":
    /*!**********************************!*\
      !*** ./src/app/entity/Entity.ts ***!
      \**********************************/

    /*! exports provided: Entity */

    /***/
    function srcAppEntityEntityTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Entity", function () {
        return Entity;
      });

      var Entity = /*#__PURE__*/function () {
        function Entity() {
          _classCallCheck(this, Entity);

          this.url_base = 'http://api-geatec-com-br.umbler.net';
        }

        _createClass(Entity, [{
          key: "toObject",
          value: function toObject(json) {
            return Object.assign(json, this);
          }
        }]);

        return Entity;
      }();
      /***/

    },

    /***/
    "./src/app/entity/ProdutoCategoria.ts":
    /*!********************************************!*\
      !*** ./src/app/entity/ProdutoCategoria.ts ***!
      \********************************************/

    /*! exports provided: ProdutoCategoria */

    /***/
    function srcAppEntityProdutoCategoriaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoCategoria", function () {
        return ProdutoCategoria;
      });
      /* harmony import */


      var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Entity */
      "./src/app/entity/Entity.ts");

      var ProdutoCategoria = /*#__PURE__*/function (_Entity__WEBPACK_IMPO) {
        _inherits(ProdutoCategoria, _Entity__WEBPACK_IMPO);

        var _super2 = _createSuper(ProdutoCategoria);

        function ProdutoCategoria() {
          var _this;

          _classCallCheck(this, ProdutoCategoria);

          _this = _super2.apply(this, arguments);
          /**  FIELDS LENGTH's */

          _this.nome_length = 30;
          return _this;
        }

        return ProdutoCategoria;
      }(_Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entity/Unidade.ts":
    /*!***********************************!*\
      !*** ./src/app/entity/Unidade.ts ***!
      \***********************************/

    /*! exports provided: Unidade */

    /***/
    function srcAppEntityUnidadeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Unidade", function () {
        return Unidade;
      });
      /* harmony import */


      var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Entity */
      "./src/app/entity/Entity.ts");

      var Unidade = /*#__PURE__*/function (_Entity__WEBPACK_IMPO2) {
        _inherits(Unidade, _Entity__WEBPACK_IMPO2);

        var _super3 = _createSuper(Unidade);

        function Unidade() {
          var _this2;

          _classCallCheck(this, Unidade);

          _this2 = _super3.apply(this, arguments);
          /**  FIELDS LENGTH's */

          _this2.nome_length = 50;
          _this2.sigla_length = 3;
          _this2.descricao_length = 80;
          return _this2;
        }

        return Unidade;
      }(_Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts ***!
      \************************************************************************/

    /*! exports provided: GenericCadPage */

    /***/
    function srcAppPagesCadastroGenericGenericCadGenericCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericCadPage", function () {
        return GenericCadPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/constants/Constants */
      "./src/app/constants/Constants.ts");
      /* harmony import */


      var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/constants/Messages */
      "./src/app/constants/Messages.ts");
      /* harmony import */


      var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/controller/ClienteController */
      "./src/app/controller/ClienteController.ts");
      /* harmony import */


      var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/controller/FabricanteController */
      "./src/app/controller/FabricanteController.ts");
      /* harmony import */


      var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/controller/LoadController */
      "./src/app/controller/LoadController.ts");
      /* harmony import */


      var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/controller/MessageController */
      "./src/app/controller/MessageController.ts");
      /* harmony import */


      var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/controller/ProdutoCategoriaController */
      "./src/app/controller/ProdutoCategoriaController.ts");
      /* harmony import */


      var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/controller/ServicoController */
      "./src/app/controller/ServicoController.ts");
      /* harmony import */


      var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/controller/UnidadeController */
      "./src/app/controller/UnidadeController.ts");
      /* harmony import */


      var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/controller/ProdutoController */
      "./src/app/controller/ProdutoController.ts"); //import { CurrencyPipe } from '@angular/common';


      var GenericCadPage = /*#__PURE__*/function () {
        /**************************************** */
        function GenericCadPage(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, navCtrl, router, messageController, currencyPipe, routerActive, loadingController) {
          _classCallCheck(this, GenericCadPage);

          this.unidadeController = unidadeController;
          this.clienteController = clienteController;
          this.produtoCategoriaController = produtoCategoriaController;
          this.fabricanteController = fabricanteController;
          this.servicoController = servicoController;
          this.produtoController = produtoController;
          this.navCtrl = navCtrl;
          this.router = router;
          this.messageController = messageController;
          this.currencyPipe = currencyPipe;
          this.routerActive = routerActive;
          this.loadingController = loadingController;
          this.entity = {};
          this.isSubmitted = false;
          this.isSaveAndBack = false;
          this.listUf = src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].UFS;
          this.messages = src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__["Messages"];
          this.navigateGetParams();
        }

        _createClass(GenericCadPage, [{
          key: "validForm",
          value: function validForm() {
            this.isSubmitted = true;
            if (!this.form.valid) return false;else {
              var id = this.entity.id;
              this.entity = this.form.value;
              this.entity.id = id;
              return true;
            }
          }
        }, {
          key: "isAlterForm",
          value: function isAlterForm() {
            return this.entity.id != null;
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.navCtrl.back();
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return this.loadingController.showLoading();
          }
        }, {
          key: "focusInit",
          value: function focusInit() {
            var _this3 = this;

            setTimeout(function () {
              return _this3.inputFocusInit.setFocus();
            }, 400);
          }
        }, {
          key: "navigatePostParams",
          value: function navigatePostParams(url, entity, index) {
            var navigationExtras = {
              state: {
                postParams: {
                  entity: entity,
                  index: index
                }
              }
            };
            this.router.navigate(['/' + url], navigationExtras);
          }
        }, {
          key: "navigateGetParams",
          value: function navigateGetParams() {
            var _this4 = this;

            this.routerActive.params.subscribe(function (params) {
              var getNav = _this4.router.getCurrentNavigation();

              if (getNav.extras.state) {
                var result = getNav.extras.state.postParams;
                _this4.entity = result.entity;
                _this4.entityIndex = result.index;
              }
            });
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.navCtrl.navigateForward('/' + url);
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.hideLoading();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "removeValidation",
          value: function removeValidation(nameField) {
            this.form.get(nameField).clearValidators();
            this.form.get(nameField).updateValueAndValidity();
          }
        }, {
          key: "addValidation",
          value: function addValidation(nameField, validatiors) {
            this.form.get(nameField).setValidators(validatiors);
            this.form.get(nameField).updateValueAndValidity();
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return GenericCadPage;
      }();

      GenericCadPage.ctorParameters = function () {
        return [{
          type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"]
        }, {
          type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__["ClienteController"]
        }, {
          type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__["ProdutoCategoriaController"]
        }, {
          type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__["FabricanteController"]
        }, {
          type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"]
        }, {
          type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__["ProdutoController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__["MessageController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__["LoadController"]
        }];
      };

      GenericCadPage.propDecorators = {
        inputFocusInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['focusInit', {
            "static": false
          }]
        }]
      };
      GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generic-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html"))["default"]
      })], GenericCadPage);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: GenericListPage */

    /***/
    function srcAppPagesCadastroGenericGenericListGenericListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericListPage", function () {
        return GenericListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/constants/Messages */
      "./src/app/constants/Messages.ts");
      /* harmony import */


      var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/controller/ClienteController */
      "./src/app/controller/ClienteController.ts");
      /* harmony import */


      var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/controller/FabricanteController */
      "./src/app/controller/FabricanteController.ts");
      /* harmony import */


      var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/controller/LoadController */
      "./src/app/controller/LoadController.ts");
      /* harmony import */


      var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/controller/MessageController */
      "./src/app/controller/MessageController.ts");
      /* harmony import */


      var src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/controller/OrdemServicoController */
      "./src/app/controller/OrdemServicoController.ts");
      /* harmony import */


      var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/controller/ProdutoCategoriaController */
      "./src/app/controller/ProdutoCategoriaController.ts");
      /* harmony import */


      var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/controller/ProdutoController */
      "./src/app/controller/ProdutoController.ts");
      /* harmony import */


      var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/controller/ServicoController */
      "./src/app/controller/ServicoController.ts");
      /* harmony import */


      var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/controller/UnidadeController */
      "./src/app/controller/UnidadeController.ts");
      /* harmony import */


      var src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/utils/UtilApp */
      "./src/app/utils/UtilApp.ts");

      var GenericListPage = /*#__PURE__*/function () {
        function GenericListPage(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, ordemServicoController, toastController, navCtrl, router, messageController, routerActive, loadingController) {
          _classCallCheck(this, GenericListPage);

          this.unidadeController = unidadeController;
          this.clienteController = clienteController;
          this.produtoCategoriaController = produtoCategoriaController;
          this.fabricanteController = fabricanteController;
          this.servicoController = servicoController;
          this.produtoController = produtoController;
          this.ordemServicoController = ordemServicoController;
          this.toastController = toastController;
          this.navCtrl = navCtrl;
          this.router = router;
          this.messageController = messageController;
          this.routerActive = routerActive;
          this.loadingController = loadingController; // @ViewChild('inputSearch') inputSearch: ElementRef;

          this.searchStr = "";
          this.entities = [];
          this.entitiesFiltradas = [];
          this.isShowSearch = true;
          this.isShowBottomClose = false;
          this.isEntities = true;
          this.messages = src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_4__["Messages"];
          this.listUnidades = [];
          this.navigateGetParams();
        }

        _createClass(GenericListPage, [{
          key: "navigateGetParams",
          value: function navigateGetParams() {
            var _this5 = this;

            this.routerActive.params.subscribe(function (params) {
              var getNav = _this5.router.getCurrentNavigation();

              if (getNav.extras.state) {
                var result = getNav.extras.state.postParams;
                /** result.index --> indice do objeto da lista */

                if (result.index == null) {
                  _this5.saveItemLists(result.entity);
                } else {
                  _this5.updateItemLists(result.entity);
                }
              }
            });
          }
        }, {
          key: "navigatePostParams",
          value: function navigatePostParams(url, entity, index) {
            var navigationExtras = {
              state: {
                postParams: {
                  entity: entity,
                  index: index
                }
              }
            };
            this.router.navigate(['/' + url], navigationExtras);
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.navCtrl.navigateForward('/' + url);
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.navCtrl.navigateBack;
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loadingController.showLoading();
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.hideLoading();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "saveItemLists",
          value: function saveItemLists(entity) {
            this.entities.push(entity);

            if (this.searchStr) {
              this.entitiesFiltradas.push(entity);
            }

            this.showPanelCad();
          }
        }, {
          key: "removeItemLists",
          value: function removeItemLists(id) {
            if (this.entities != null) for (var index = 0; index < this.entities.length; index++) {
              var element = this.entities[index];

              if (element.id == id) {
                this.entities.splice(index, 1);
                this.refreshList();
                console.log('Delete ', element);
                break;
              }
            }
            if (this.entitiesFiltradas != null) for (var _index = 0; _index < this.entitiesFiltradas.length; _index++) {
              var _element = this.entitiesFiltradas[_index];

              if (_element.id == id) {
                this.entitiesFiltradas.splice(_index, 1);
                this.refreshList();
                console.log('Delete ', _element);
                break;
              }
            }
          }
        }, {
          key: "updateItemLists",
          value: function updateItemLists(entity) {
            if (this.entities != null) for (var index = 0; index < this.entities.length; index++) {
              var element = this.entities[index];

              if (element.id == entity.id) {
                this.entities.splice(index, 1, entity);
                console.log('Atualizado: ', element);
                this.refreshList();
                break;
              }
            }
            if (this.entitiesFiltradas != null) for (var _index2 = 0; _index2 < this.entitiesFiltradas.length; _index2++) {
              var _element2 = this.entitiesFiltradas[_index2];

              if (_element2.id == entity.id) {
                this.entitiesFiltradas.splice(_index2, 1, entity);
                this.entitiesFiltradas = _toConsumableArray(this.entitiesFiltradas); // REFRESH

                console.log('Atualizado: ', _element2);
                this.refreshList();
                break;
              }
            }
          }
        }, {
          key: "refreshList",
          value: function refreshList() {
            this.entities = _toConsumableArray(this.entities);
            this.entitiesFiltradas = _toConsumableArray(this.entitiesFiltradas);
          }
        }, {
          key: "showPanelCad",
          value: function showPanelCad() {
            this.isEntities = this.entities.length > 0;
          }
        }, {
          key: "formatToBrl",
          value: function formatToBrl(value) {
            return src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_14__["UtilApp"].formatCurrencyToBrl(value);
          }
          /** MAXIMO DE 4 CAMPOS */

        }, {
          key: "execFilter",
          value: function execFilter(field1, field2, field3, field4) {
            var _this6 = this;

            return this.entities.filter(function (entity) {
              var result = (entity[field1] ? entity[field1].toLowerCase().indexOf(_this6.searchStr.toLowerCase()) > -1 : false) || (entity[field2] ? entity[field2].toLowerCase().indexOf(_this6.searchStr.toLowerCase()) > -1 : false) || (entity[field3] ? entity[field3].toLowerCase().indexOf(_this6.searchStr.toLowerCase()) > -1 : false) || (entity[field4] ? entity[field4].toLowerCase().indexOf(_this6.searchStr.toLowerCase()) > -1 : false);
              return result;
            });
          }
        }, {
          key: "filter",
          value: function filter(field1, field2, field3, field4) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.searchStr) {
                        _context5.next = 3;
                        break;
                      }

                      this.entitiesFiltradas = [];
                      return _context5.abrupt("return");

                    case 3:
                      _context5.next = 5;
                      return this.execFilter(field1, field2, field3, field4);

                    case 5:
                      this.entitiesFiltradas = _context5.sent;

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getEntities",
          value: function getEntities() {
            if (this.entitiesFiltradas.length > 0) {
              return this.entitiesFiltradas;
            }

            return this.entities;
          }
        }, {
          key: "showSearchBar",
          value: function showSearchBar() {
            this.isShowSearch = true;
            this.setFocusSearch();
          }
        }, {
          key: "hideSearchBar",
          value: function hideSearchBar() {
            this.isShowSearch = false;
            this.searchStr = null;
          }
        }, {
          key: "deleteSearch",
          value: function deleteSearch() {
            this.inputSearch.value = "";
            this.setFocusSearch();
          }
        }, {
          key: "setFocusSearch",
          value: function setFocusSearch() {
            var _this7 = this;

            setTimeout(function () {
              _this7.inputSearch.setFocus();
            }, 300);
          }
        }]);

        return GenericListPage;
      }();

      GenericListPage.ctorParameters = function () {
        return [{
          type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"]
        }, {
          type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__["ClienteController"]
        }, {
          type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__["ProdutoCategoriaController"]
        }, {
          type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__["FabricanteController"]
        }, {
          type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"]
        }, {
          type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__["ProdutoController"]
        }, {
          type: src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__["OrdemServicoController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__["MessageController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__["LoadController"]
        }];
      };

      GenericListPage.propDecorators = {
        inputSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputSearch']
        }]
      };
      GenericListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generic-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html"))["default"]
      })], GenericListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map