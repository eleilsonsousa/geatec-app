(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-produto-produto-cad-produto-cad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.produto_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n\n            <ion-button slot=\"end\" fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_cad_field_label_nome}}</ion-label>\n                    <ion-input formControlName=\"nome\" #inputNome [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n        <ion-row>\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_cad_field_label_preco_compra}}</ion-label>\n                    <ion-input formControlName=\"precoCompra\"   [attr.maxLength]=\"entity.precoCompra_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_cad_field_label_preco_venda}}</ion-label>\n                    <ion-input formControlName=\"precoVenda\" [attr.maxLength]=\"entity.precoVenda_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n\n\n         <!--    <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_cad_field_label_unidade}}</ion-label>\n                    <ion-select formControlName=\"unidade\" [selectedText]=\"item.sigla\">\n                        <ion-select-option *ngFor=\"let item of listUnidades\" value=\"{{item.sigla}}\"\n                            {{ item.sigla }}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col> -->\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.produto_cad_field_label_observacao}}</ion-label>\n                    <ion-input formControlName=\"observacao\" [attr.maxLength]=\"entity.observacao_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/entity/Produto.ts":
/*!***********************************!*\
  !*** ./src/app/entity/Produto.ts ***!
  \***********************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");
/* harmony import */ var _ProdutoCategoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProdutoCategoria */ "./src/app/entity/ProdutoCategoria.ts");
/* harmony import */ var _Unidade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Unidade */ "./src/app/entity/Unidade.ts");



class Produto extends _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor() {
        super(...arguments);
        this.categoria = new _ProdutoCategoria__WEBPACK_IMPORTED_MODULE_1__["ProdutoCategoria"]();
        this.unidade = new _Unidade__WEBPACK_IMPORTED_MODULE_2__["Unidade"]();
        /**  FIELDS LENGTH's */
        this.nome_length = 50;
        this.observacao_length = 100;
        this.precoCompra_length = 6;
        this.precoVenda_length = 6;
        this.unidade_length = 3;
        this.categoria_length = 30;
    }
}


/***/ }),

/***/ "./src/app/pages/cadastro/produto/produto-cad/produto-cad-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto/produto-cad/produto-cad-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProdutoCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadPageRoutingModule", function() { return ProdutoCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _produto_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto-cad.page */ "./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.ts");




const routes = [
    {
        path: '',
        component: _produto_cad_page__WEBPACK_IMPORTED_MODULE_3__["ProdutoCadPage"]
    }
];
let ProdutoCadPageRoutingModule = class ProdutoCadPageRoutingModule {
};
ProdutoCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdutoCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/produto/produto-cad/produto-cad.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto/produto-cad/produto-cad.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProdutoCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadPageModule", function() { return ProdutoCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _produto_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto-cad-routing.module */ "./src/app/pages/cadastro/produto/produto-cad/produto-cad-routing.module.ts");
/* harmony import */ var _produto_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-cad.page */ "./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.ts");







let ProdutoCadPageModule = class ProdutoCadPageModule {
};
ProdutoCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _produto_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutoCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_produto_cad_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoCadPage"]]
    })
], ProdutoCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.ts ***!
  \************************************************************************/
/*! exports provided: ProdutoCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadPage", function() { return ProdutoCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");
/* harmony import */ var src_app_entity_Produto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entity/Produto */ "./src/app/entity/Produto.ts");





let ProdutoCadPage = class ProdutoCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
    constructor() {
        super(...arguments);
        this.listUnidades = [];
        this.listCategorias = [];
    }
    ngOnInit() {
        this.createFormFields();
    }
    ionViewWillEnter() {
        this.getUnidades();
        this.hideLoading();
        this.initForm();
    }
    ionViewDidEnter() {
        this.showFocus();
    }
    initForm() {
        /** NOVO */
        if (!this.isAlterForm()) {
            this.entity = new src_app_entity_Produto__WEBPACK_IMPORTED_MODULE_4__["Produto"]();
        }
        else {
        }
    }
    createFormFields() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            precoCompra: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.precoCompra),
            precoVenda: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.precoVenda),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.unidade),
            observacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.observacao),
        });
        console.log(this.entity.unidade);
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.entity);
            if (this.validForm()) {
                this.showLoading();
                this.produtoController.salvarOuAlterar(this.entity).subscribe(data => {
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast(this.messages.dialogs_register_save);
                    this.navigatePostParams('produto-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }
    formatEntity() {
    }
    compareWith(o1, o2) {
        console.log(o1, o2);
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getUnidades() {
        this.unidadeController.buscarTodos().subscribe((result) => {
            this.listUnidades = result;
            this.entity.unidade.sigla = "LT";
            //this.form.controls.unidade.setValue("UND");
            this.listUnidades.forEach(element => {
                if (element.id == this.entity.unidade.id) {
                    this.entity.unidade = element;
                    // this.form.controls.unidade.setValue("LT");
                    // this.form.get('unidade').updateValueAndValidity();
                    // this.form.get('unidade').updateValueAndValidity();
                    // console.log('achei', this.entity.unidade)
                }
            });
        });
    }
};
ProdutoCadPage.propDecorators = {
    inputNome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputNome', { static: false },] }]
};
ProdutoCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./produto-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/produto/produto-cad/produto-cad.page.html")).default
    })
], ProdutoCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-produto-produto-cad-produto-cad-module-es2015.js.map