(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-servico-servico-list-servico-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-list/servico-list.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-list/servico-list.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n\n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title *ngIf=\"!isShowSearch\">{{messages.servico_list_title}}</ion-title>\n\n        <ion-buttons *ngIf=\"!isShowSearch && isEntities\" slot=\"end\">\n            <ion-button (click)=\"inicializeList()\">\n                <ion-icon slot=\"icon-only\" name=\"reload\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"showSearchBar()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-buttons *ngIf=\"isShowSearch\" style=\"width: 100%;\">\n\n            <ion-button slot=\"start\" (click)=\"hideSearchBar()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-input autofocus=\"true\" placeHolder=\"Pesquisar\" #inputSearch debounce=\"200\"\n                (ionChange)=\"changeSearch($event.target.value)\">\n            </ion-input>\n\n            <ion-button *ngIf=\"isShowBottomClose\" slot=\"end\" (click)=\"deleteSearch()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/servico-cad']\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-list>\n        <ion-item *ngFor=\"let entity of getEntities()\">\n            <ion-icon name=\"build-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\" style=\"margin-left: 12px;\">\n                <ion-text>\n                    <h2> {{entity.nome }}</h2>\n                </ion-text>\n                <p> R$ {{formatToBrl(entity.preco)}}</p>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"alterar(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"excluir(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf=\"!isEntities\" class=\"image-center\">\n        <ion-row>\n            <img src=\"assets/ilustrations/list-servicos.png\" />\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h6>{{messages.servico_list_no_dados}}</h6>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-list/servico-list-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-list/servico-list-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ServicoListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoListPageRoutingModule", function() { return ServicoListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servico_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servico-list.page */ "./src/app/pages/cadastro/servico/servico-list/servico-list.page.ts");




const routes = [
    {
        path: '',
        component: _servico_list_page__WEBPACK_IMPORTED_MODULE_3__["ServicoListPage"]
    }
];
let ServicoListPageRoutingModule = class ServicoListPageRoutingModule {
};
ServicoListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicoListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-list/servico-list.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-list/servico-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: ServicoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoListPageModule", function() { return ServicoListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servico_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servico-list-routing.module */ "./src/app/pages/cadastro/servico/servico-list/servico-list-routing.module.ts");
/* harmony import */ var _servico_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servico-list.page */ "./src/app/pages/cadastro/servico/servico-list/servico-list.page.ts");







let ServicoListPageModule = class ServicoListPageModule {
};
ServicoListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servico_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicoListPageRoutingModule"]
        ],
        declarations: [_servico_list_page__WEBPACK_IMPORTED_MODULE_6__["ServicoListPage"]]
    })
], ServicoListPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-list/servico-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-list/servico-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: ServicoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoListPage", function() { return ServicoListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/UtilApp */ "./src/app/utils/UtilApp.ts");
/* harmony import */ var _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-list/generic-list.page */ "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts");




let ServicoListPage = class ServicoListPage extends _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_3__["GenericListPage"] {
    ngOnInit() { }
    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }
    novo() {
        this.navigate('servico-cad');
    }
    buscarTodos() {
        this.showLoading();
        this.servicoController.buscarTodos().subscribe((result) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }
    excluir(entity) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
            if (!result)
                return;
            this.showLoading();
            this.servicoController.excluir(entity).subscribe(() => {
                this.removeItemLists(entity.id);
                this.messageController.showMessageToast(this.messages.dialogs_register_delete);
                this.hideLoading();
                this.showPanelCad();
            });
        });
    }
    alterar(entity) {
        const _super = Object.create(null, {
            navigatePostParams: { get: () => super.navigatePostParams }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showLoading();
            const index = this.entities.indexOf(entity);
            this.servicoController.buscarPorId(entity.id).subscribe((result) => {
                if (result.length > 0) {
                    entity = result[0];
                    _super.navigatePostParams.call(this, 'servico-cad', entity, index);
                    this.hideLoading();
                }
                else {
                    this.messageController.showMessageToast(this.messages.dialogs_register_no_exists);
                    this.refreshList();
                    this.hideLoading();
                }
            });
        });
    }
    changeSearch(value) {
        this.searchStr = value;
        this.filter('nome', 'preco', null, null);
        this.isShowBottomClose = this.searchStr.length > 0;
    }
    inicializeList() {
        this.entities = [];
        this.entitiesFiltradas = [];
        this.buscarTodos();
    }
    formatToBrl(value) {
        return src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_2__["UtilApp"].formatCurrencyToBRL(value);
    }
};
ServicoListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servico-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servico-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-list/servico-list.page.html")).default
    })
], ServicoListPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-servico-servico-list-servico-list-module-es2015.js.map