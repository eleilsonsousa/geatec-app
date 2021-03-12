(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-servico-cad-cabecalho-order-servico-cad-cabecalho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>order-servico-cad-cabecalho</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: OrderServicoCadCabecalhoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPageRoutingModule", function() { return OrderServicoCadCabecalhoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-servico-cad-cabecalho.page */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts");




const routes = [
    {
        path: '',
        component: _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_3__["OrderServicoCadCabecalhoPage"]
    }
];
let OrderServicoCadCabecalhoPageRoutingModule = class OrderServicoCadCabecalhoPageRoutingModule {
};
OrderServicoCadCabecalhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderServicoCadCabecalhoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: OrderServicoCadCabecalhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPageModule", function() { return OrderServicoCadCabecalhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_servico_cad_cabecalho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-servico-cad-cabecalho-routing.module */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts");
/* harmony import */ var _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-servico-cad-cabecalho.page */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts");







let OrderServicoCadCabecalhoPageModule = class OrderServicoCadCabecalhoPageModule {
};
OrderServicoCadCabecalhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_servico_cad_cabecalho_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServicoCadCabecalhoPageRoutingModule"]
        ],
        declarations: [_order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_6__["OrderServicoCadCabecalhoPage"]]
    })
], OrderServicoCadCabecalhoPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: OrderServicoCadCabecalhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPage", function() { return OrderServicoCadCabecalhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderServicoCadCabecalhoPage = class OrderServicoCadCabecalhoPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderServicoCadCabecalhoPage.ctorParameters = () => [];
OrderServicoCadCabecalhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-servico-cad-cabecalho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-servico-cad-cabecalho.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html")).default
    })
], OrderServicoCadCabecalhoPage);



/***/ })

}]);
//# sourceMappingURL=order-servico-cad-cabecalho-order-servico-cad-cabecalho-module-es2015.js.map