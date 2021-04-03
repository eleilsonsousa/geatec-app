(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-servico-cad-cabecalho-order-servico-cad-cabecalho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <ion-row>\n            <ion-col>\n                <app-buscar-cliente  (clienteSelected)=\"onClienteSelected($event)\" ></app-buscar-cliente>\n            </ion-col>\n        </ion-row>\n\n      \n    </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/entity/OrdemServico.ts":
/*!****************************************!*\
  !*** ./src/app/entity/OrdemServico.ts ***!
  \****************************************/
/*! exports provided: OrdemServico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServico", function() { return OrdemServico; });
/* harmony import */ var _Cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cliente */ "./src/app/entity/Cliente.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");


class OrdemServico extends _Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"] {
    constructor() {
        super(...arguments);
        this.itensProdutos = [];
        this.itensServicos = [];
        this.cliente = new _Cliente__WEBPACK_IMPORTED_MODULE_0__["Cliente"]();
    }
}


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
/* harmony import */ var src_app_components_buscar_buscar_cliente_buscar_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/buscar/buscar-cliente/buscar-cliente.component */ "./src/app/components/buscar/buscar-cliente/buscar-cliente.component.ts");








let OrderServicoCadCabecalhoPageModule = class OrderServicoCadCabecalhoPageModule {
};
OrderServicoCadCabecalhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_servico_cad_cabecalho_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServicoCadCabecalhoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_6__["OrderServicoCadCabecalhoPage"],
            src_app_components_buscar_buscar_cliente_buscar_cliente_component__WEBPACK_IMPORTED_MODULE_7__["BuscarClienteComponent"]]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entity/OrdemServico */ "./src/app/entity/OrdemServico.ts");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");





let OrderServicoCadCabecalhoPage = class OrderServicoCadCabecalhoPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_4__["GenericCadPage"] {
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        if (this.isAlterForm()) {
            this.entityToForm();
        }
        else {
            this.entity = new src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__["OrdemServico"]();
        }
        // CRIANDO CAMPOS//
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cliente.nome),
        });
    }
    entityToForm() {
        this.entity = Object.assign(new src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__["OrdemServico"](), this.entity);
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.validForm()) {
            }
        });
    }
    onClienteSelected(event) {
        this.entity.cliente = event;
    }
    onClick(event) {
        console.log(this.entity.cliente);
    }
};
OrderServicoCadCabecalhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-servico-cad-cabecalho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-servico-cad-cabecalho.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html")).default
    })
], OrderServicoCadCabecalhoPage);



/***/ })

}]);
//# sourceMappingURL=order-servico-cad-cabecalho-order-servico-cad-cabecalho-module-es2015.js.map