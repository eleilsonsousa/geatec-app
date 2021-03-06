(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-cad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/constants/Constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/Constants.ts ***!
  \****************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.UFS = [
    { codigo_uf: 27, uf: 'AL', nome: 'Alagoas' },
    { codigo_uf: 12, uf: 'AC', nome: 'Acre' },
    { codigo_uf: 16, uf: 'AP', nome: 'Amapá' },
    { codigo_uf: 13, uf: 'AM', nome: 'Amazonas' },
    { codigo_uf: 29, uf: 'BA', nome: 'Bahia' },
    { codigo_uf: 23, uf: 'CE', nome: 'Ceará' },
    { codigo_uf: 53, uf: 'DF', nome: 'Distrito Federal' },
    { codigo_uf: 32, uf: 'ES', nome: 'Espírito Santo' },
    { codigo_uf: 52, uf: 'GO', nome: 'Goías' },
    { codigo_uf: 21, uf: 'MA', nome: 'Maranhão' },
    { codigo_uf: 51, uf: 'MT', nome: 'Mato Grosso' },
    { codigo_uf: 50, uf: 'MS', nome: 'Mato G. do Sul' },
    { codigo_uf: 31, uf: 'MG', nome: 'Minas Gerais' },
    { codigo_uf: 15, uf: 'PA', nome: 'Pará' },
    { codigo_uf: 25, uf: 'PB', nome: 'Paraíba' },
    { codigo_uf: 41, uf: 'PR', nome: 'Paraná' },
    { codigo_uf: 26, uf: 'PE', nome: 'Pernambuco' },
    { codigo_uf: 22, uf: 'PI', nome: 'Piauí' },
    { codigo_uf: 33, uf: 'RJ', nome: 'Rio de Janeiro' },
    { codigo_uf: 24, uf: 'RN', nome: 'Rio G. do Norte' },
    { codigo_uf: 43, uf: 'RS', nome: 'Rio G. do Sul' },
    { codigo_uf: 11, uf: 'RO', nome: 'Rondônia' },
    { codigo_uf: 14, uf: 'RR', nome: 'Roraíma' },
    { codigo_uf: 42, uf: 'SC', nome: 'Santa Catarina' },
    { codigo_uf: 35, uf: 'SP', nome: 'São Paulo' },
    { codigo_uf: 28, uf: 'SE', nome: 'Sergipe' },
    { codigo_uf: 17, uf: 'TO', nome: 'Tocantins' },
];


/***/ }),

/***/ "./src/app/controller/OrdemServicoController.ts":
/*!******************************************************!*\
  !*** ./src/app/controller/OrdemServicoController.ts ***!
  \******************************************************/
/*! exports provided: OrdemServicoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServicoController", function() { return OrdemServicoController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let OrdemServicoController = class OrdemServicoController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/ordens-servicos');
    }
};
OrdemServicoController.ctorParameters = () => [];
OrdemServicoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdemServicoController);



/***/ }),

/***/ "./src/app/entity/Entity.ts":
/*!**********************************!*\
  !*** ./src/app/entity/Entity.ts ***!
  \**********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
class Entity {
    constructor() {
        this.url_base = 'http://api-geatec-com-br.umbler.net';
    }
    toObject(json) {
        return Object.assign(json, this);
    }
}


/***/ }),

/***/ "./src/app/entity/ProdutoCategoria.ts":
/*!********************************************!*\
  !*** ./src/app/entity/ProdutoCategoria.ts ***!
  \********************************************/
/*! exports provided: ProdutoCategoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCategoria", function() { return ProdutoCategoria; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");

class ProdutoCategoria extends _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor() {
        super(...arguments);
        /**  FIELDS LENGTH's */
        this.nome_length = 30;
    }
}


/***/ }),

/***/ "./src/app/entity/Unidade.ts":
/*!***********************************!*\
  !*** ./src/app/entity/Unidade.ts ***!
  \***********************************/
/*! exports provided: Unidade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidade", function() { return Unidade; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");

class Unidade extends _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor() {
        super(...arguments);
        /**  FIELDS LENGTH's */
        this.nome_length = 50;
        this.sigla_length = 3;
        this.descricao_length = 80;
    }
}


/***/ }),

/***/ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts ***!
  \************************************************************************/
/*! exports provided: GenericCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericCadPage", function() { return GenericCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/Constants */ "./src/app/constants/Constants.ts");
/* harmony import */ var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/Messages */ "./src/app/constants/Messages.ts");
/* harmony import */ var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/controller/ClienteController */ "./src/app/controller/ClienteController.ts");
/* harmony import */ var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/controller/FabricanteController */ "./src/app/controller/FabricanteController.ts");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/controller/ProdutoCategoriaController */ "./src/app/controller/ProdutoCategoriaController.ts");
/* harmony import */ var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/controller/ServicoController */ "./src/app/controller/ServicoController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");
/* harmony import */ var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/controller/ProdutoController */ "./src/app/controller/ProdutoController.ts");

//import { CurrencyPipe } from '@angular/common';














let GenericCadPage = class GenericCadPage {
    /**************************************** */
    constructor(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, navCtrl, router, messageController, currencyPipe, routerActive, loadingController) {
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
    get errorControl() {
        return this.form.controls;
    }
    validForm() {
        this.isSubmitted = true;
        if (!this.form.valid)
            return false;
        else {
            const id = this.entity.id;
            this.entity = this.form.value;
            this.entity.id = id;
            return true;
        }
    }
    isAlterForm() {
        return this.entity.id != null;
    }
    navigateBack() {
        this.navCtrl.back();
    }
    showLoading() {
        return this.loadingController.showLoading();
    }
    focusInit() {
        setTimeout(() => this.inputFocusInit.setFocus(), 400);
    }
    navigatePostParams(url, entity, index) {
        let navigationExtras = {
            state: {
                postParams: { entity: entity, index: index }
            }
        };
        this.router.navigate(['/' + url], navigationExtras);
    }
    navigateGetParams() {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                const result = getNav.extras.state.postParams;
                this.entity = result.entity;
                this.entityIndex = result.index;
            }
        });
    }
    navigate(url) {
        this.navCtrl.navigateForward('/' + url);
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
    removeValidation(nameField) {
        this.form.get(nameField).clearValidators();
        this.form.get(nameField).updateValueAndValidity();
    }
    addValidation(nameField, validatiors) {
        this.form.get(nameField).setValidators(validatiors);
        this.form.get(nameField).updateValueAndValidity();
    }
};
GenericCadPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"] },
    { type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__["ClienteController"] },
    { type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__["ProdutoCategoriaController"] },
    { type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__["FabricanteController"] },
    { type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"] },
    { type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__["ProdutoController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__["MessageController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__["LoadController"] }
];
GenericCadPage.propDecorators = {
    inputFocusInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['focusInit', { static: false },] }]
};
GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html")).default
    })
], GenericCadPage);



/***/ }),

/***/ "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: GenericListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericListPage", function() { return GenericListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/Messages */ "./src/app/constants/Messages.ts");
/* harmony import */ var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/controller/ClienteController */ "./src/app/controller/ClienteController.ts");
/* harmony import */ var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/controller/FabricanteController */ "./src/app/controller/FabricanteController.ts");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/controller/OrdemServicoController */ "./src/app/controller/OrdemServicoController.ts");
/* harmony import */ var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/controller/ProdutoCategoriaController */ "./src/app/controller/ProdutoCategoriaController.ts");
/* harmony import */ var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/controller/ProdutoController */ "./src/app/controller/ProdutoController.ts");
/* harmony import */ var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/controller/ServicoController */ "./src/app/controller/ServicoController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");
/* harmony import */ var src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/utils/UtilApp */ "./src/app/utils/UtilApp.ts");















let GenericListPage = class GenericListPage {
    constructor(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, ordemServicoController, toastController, navCtrl, router, messageController, routerActive, loadingController) {
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
        this.loadingController = loadingController;
        // @ViewChild('inputSearch') inputSearch: ElementRef;
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
    navigateGetParams() {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                let result = getNav.extras.state.postParams;
                /** result.index --> indice do objeto da lista */
                if (result.index == null) {
                    this.saveItemLists(result.entity);
                }
                else {
                    this.updateItemLists(result.entity);
                }
            }
        });
    }
    navigatePostParams(url, entity, index) {
        let navigationExtras = {
            state: {
                postParams: { entity: entity, index: index }
            }
        };
        this.router.navigate(['/' + url], navigationExtras);
    }
    navigate(url) {
        this.navCtrl.navigateForward('/' + url);
    }
    navigateBack() {
        this.navCtrl.navigateBack;
    }
    showLoading() {
        this.loadingController.showLoading();
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
    saveItemLists(entity) {
        this.entities.push(entity);
        if (this.searchStr) {
            this.entitiesFiltradas.push(entity);
        }
        this.showPanelCad();
    }
    removeItemLists(id) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == id) {
                    this.entities.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }
        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == id) {
                    this.entitiesFiltradas.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }
    }
    updateItemLists(entity) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == entity.id) {
                    this.entities.splice(index, 1, entity);
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }
        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == entity.id) {
                    this.entitiesFiltradas.splice(index, 1, entity);
                    this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }
    }
    refreshList() {
        this.entities = [...this.entities];
        this.entitiesFiltradas = [...this.entitiesFiltradas];
    }
    showPanelCad() {
        this.isEntities = this.entities.length > 0;
    }
    formatToBrl(value) {
        return src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_14__["UtilApp"].formatCurrencyToBrl(value);
    }
    /** MAXIMO DE 4 CAMPOS */
    execFilter(field1, field2, field3, field4) {
        return this.entities.filter(entity => {
            let result = (entity[field1] ? entity[field1].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field2] ? entity[field2].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field3] ? entity[field3].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field4] ? entity[field4].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false);
            return result;
        });
    }
    filter(field1, field2, field3, field4) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.searchStr) {
                this.entitiesFiltradas = [];
                return;
            }
            this.entitiesFiltradas = yield this.execFilter(field1, field2, field3, field4);
        });
    }
    getEntities() {
        if (this.entitiesFiltradas.length > 0) {
            return this.entitiesFiltradas;
        }
        return this.entities;
    }
    showSearchBar() {
        this.isShowSearch = true;
        this.setFocusSearch();
    }
    hideSearchBar() {
        this.isShowSearch = false;
        this.searchStr = null;
    }
    deleteSearch() {
        this.inputSearch.value = "";
        this.setFocusSearch();
    }
    setFocusSearch() {
        setTimeout(() => {
            this.inputSearch.setFocus();
        }, 300);
    }
};
GenericListPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"] },
    { type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__["ClienteController"] },
    { type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__["ProdutoCategoriaController"] },
    { type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__["FabricanteController"] },
    { type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"] },
    { type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__["ProdutoController"] },
    { type: src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__["OrdemServicoController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__["MessageController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__["LoadController"] }
];
GenericListPage.propDecorators = {
    inputSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputSearch',] }]
};
GenericListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html")).default
    })
], GenericListPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map