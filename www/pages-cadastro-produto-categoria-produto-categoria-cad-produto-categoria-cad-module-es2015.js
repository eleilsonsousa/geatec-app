(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-produto-categoria-produto-categoria-cad-produto-categoria-cad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.produto_categoria_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_categoria_cad_field_label_nome}}</ion-label>\n                    <ion-input formControlName=\"nome\" #inputNome [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ProdutoCategoriaCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCategoriaCadPageRoutingModule", function() { return ProdutoCategoriaCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _produto_categoria_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto-categoria-cad.page */ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.ts");




const routes = [
    {
        path: '',
        component: _produto_categoria_cad_page__WEBPACK_IMPORTED_MODULE_3__["ProdutoCategoriaCadPage"]
    }
];
let ProdutoCategoriaCadPageRoutingModule = class ProdutoCategoriaCadPageRoutingModule {
};
ProdutoCategoriaCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdutoCategoriaCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProdutoCategoriaCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCategoriaCadPageModule", function() { return ProdutoCategoriaCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _produto_categoria_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto-categoria-cad-routing.module */ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad-routing.module.ts");
/* harmony import */ var _produto_categoria_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-categoria-cad.page */ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.ts");







let ProdutoCategoriaCadPageModule = class ProdutoCategoriaCadPageModule {
};
ProdutoCategoriaCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _produto_categoria_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutoCategoriaCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_produto_categoria_cad_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoCategoriaCadPage"]]
    })
], ProdutoCategoriaCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProdutoCategoriaCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCategoriaCadPage", function() { return ProdutoCategoriaCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");
/* harmony import */ var src_app_entity_ProdutoCategoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entity/ProdutoCategoria */ "./src/app/entity/ProdutoCategoria.ts");





let ProdutoCategoriaCadPage = class ProdutoCategoriaCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
    ngOnInit() {
        this.createFormFields();
    }
    ionViewWillEnter() {
        this.hideLoading();
        this.initForm();
    }
    ionViewDidEnter() {
        this.showFocus();
    }
    initForm() {
        /** NOVO */
        if (!this.isAlterCad()) {
            this.entity = new src_app_entity_ProdutoCategoria__WEBPACK_IMPORTED_MODULE_4__["ProdutoCategoria"]();
        }
    }
    createFormFields() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.entity);
            if (this.validForm()) {
                console.log(this.entity);
                this.showLoading();
                this.produtoCategoriaController.salvarOuAlterar(this.entity).subscribe(data => {
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast(this.messages.dialogs_register_save);
                    this.navigatePostParams('produto-categoria-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }
};
ProdutoCategoriaCadPage.propDecorators = {
    inputNome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputNome', { static: false },] }]
};
ProdutoCategoriaCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto-categoria-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./produto-categoria-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto-categoria/produto-categoria-cad/produto-categoria-cad.page.html")).default
    })
], ProdutoCategoriaCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-produto-categoria-produto-categoria-cad-produto-categoria-cad-module-es2015.js.map