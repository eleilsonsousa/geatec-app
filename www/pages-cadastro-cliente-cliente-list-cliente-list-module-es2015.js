(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cliente-cliente-list-cliente-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Clientes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-searchbar #autofocus placeholder=\"Buscar...\" [(ngModel)]=\"searchStr\" (ionChange)=\"aplicarFiltrarItems()\">\n</ion-searchbar>\n\n<ion-content padding>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"novoCad()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-virtual-scroll [items]=\"getEntities()\">\n        <ion-item *virtualItem=\"let entity\">\n            <ion-label class=\"ion-text-wrap\">\n                <ion-text>\n                    <h2> {{ entity.nome }}</h2>\n                </ion-text>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"alterar(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"excluir(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-virtual-scroll>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-list/cliente-list-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ClienteListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListPageRoutingModule", function() { return ClienteListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cliente_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-list.page */ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.ts");




const routes = [
    {
        path: '',
        component: _cliente_list_page__WEBPACK_IMPORTED_MODULE_3__["ClienteListPage"]
    }
];
let ClienteListPageRoutingModule = class ClienteListPageRoutingModule {
};
ClienteListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-list/cliente-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: ClienteListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListPageModule", function() { return ClienteListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cliente_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-list-routing.module */ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list-routing.module.ts");
/* harmony import */ var _cliente_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-list.page */ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.ts");







let ClienteListPageModule = class ClienteListPageModule {
};
ClienteListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteListPageRoutingModule"]
        ],
        declarations: [_cliente_list_page__WEBPACK_IMPORTED_MODULE_6__["ClienteListPage"]]
    })
], ClienteListPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: ClienteListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListPage", function() { return ClienteListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/generic-list/generic-list.page */ "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts");



let ClienteListPage = class ClienteListPage extends _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__["GenericListPage"] {
    ngOnInit() {
        this.buscarTodos();
    }
    buscarTodos() {
        return this.clienteController.buscarTodos().subscribe((result) => {
            this.entities = result;
            return result;
        });
    }
    novoCad() {
        this.navigate('cliente-cad');
    }
    excluir(entity) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.messageController.showMessageConfirm('Confirma excluir esse registro?');
            if (!result)
                return;
            this.showLoading();
            this.clienteController.excluir(entity).subscribe(() => {
                this.removeItemLists(entity.id);
                this.messageController.showMessageToast('Excluído com sucesso');
            });
        });
    }
    alterar(entity) {
        const index = this.entities.indexOf(entity);
        super.navigatePostParams('cliente-cad', entity, index);
    }
    filtrarItems() {
        return this.entities.filter(entity => {
            return entity.nome.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 ||
                entity.cpf.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1;
        });
    }
    aplicarFiltrarItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.searchStr) {
                this.entitiesFiltradas = null;
                return;
            }
            this.entitiesFiltradas = yield this.filtrarItems();
        });
    }
    getEntities() {
        if (this.entitiesFiltradas != null) {
            return this.entitiesFiltradas;
        }
        else {
            return this.entities;
        }
    }
};
ClienteListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cliente-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-list/cliente-list.page.html")).default
    })
], ClienteListPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cliente-cliente-list-cliente-list-module-es2015.js.map