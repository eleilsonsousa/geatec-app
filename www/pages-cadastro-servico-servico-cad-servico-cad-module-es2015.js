(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-servico-servico-cad-servico-cad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.servico_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_nome}}</ion-label>\n                    <ion-input formControlName=\"nome\" #focusInit [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n\n            </ion-col>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_preco}}</ion-label>\n                    <ion-input formControlName=\"preco\" (keyup)=\"formatPreco($event.target)\"\n                        [attr.maxLength]=\"entity.preco_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_observacao}}</ion-label>\n                    <ion-input formControlName=\"observacao\" [attr.maxLength]=\"entity.observacao_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/entity/Servico.ts":
/*!***********************************!*\
  !*** ./src/app/entity/Servico.ts ***!
  \***********************************/
/*! exports provided: Servico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servico", function() { return Servico; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");

class Servico extends _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor() {
        super(...arguments);
        /**  FIELDS LENGTH's */
        this.nome_length = 50;
        this.preco_length = 9;
        this.observacao_length = 100;
    }
}


/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ServicoCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoCadPageRoutingModule", function() { return ServicoCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servico_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servico-cad.page */ "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts");




const routes = [
    {
        path: '',
        component: _servico_cad_page__WEBPACK_IMPORTED_MODULE_3__["ServicoCadPage"]
    }
];
let ServicoCadPageRoutingModule = class ServicoCadPageRoutingModule {
};
ServicoCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicoCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-cad/servico-cad.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad.module.ts ***!
  \**************************************************************************/
/*! exports provided: ServicoCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoCadPageModule", function() { return ServicoCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servico-cad-routing.module */ "./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts");
/* harmony import */ var _servico_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servico-cad.page */ "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts");







let ServicoCadPageModule = class ServicoCadPageModule {
};
ServicoCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicoCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__["ServicoCadPage"]]
    })
], ServicoCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts ***!
  \************************************************************************/
/*! exports provided: ServicoCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoCadPage", function() { return ServicoCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");
/* harmony import */ var src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entity/Servico */ "./src/app/entity/Servico.ts");
/* harmony import */ var src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/UtilApp */ "./src/app/utils/UtilApp.ts");






let ServicoCadPage = class ServicoCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
    ngOnInit() {
        this.createFormFields();
    }
    ionViewDidEnter() {
        this.focusInit();
    }
    createFormFields() {
        this.initForm();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            preco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.preco),
            observacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.observacao),
        });
    }
    initForm() {
        if (this.isAlterForm()) {
            this.entityToForm();
        }
        else {
            this.entity = new src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__["Servico"]();
        }
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.validForm()) {
                this.showLoading();
                this.formToEntity();
                this.servicoController.salvarOuAlterar(this.entity).subscribe(data => {
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast(this.messages.dialogs_register_save);
                    this.navigatePostParams('servico-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
    formatPreco(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.value = yield src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrlAsync(event.value);
            this.precoFormatted = event.value;
        });
    }
    formToEntity() {
        this.entity.preco = src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToDecimal(this.precoFormatted);
    }
    entityToForm() {
        this.entity = Object.assign(new src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__["Servico"](), this.entity);
        this.precoFormatted = src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrl(this.entity.preco);
        this.entity.preco = this.precoFormatted;
    }
};
ServicoCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servico-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servico-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html")).default
    })
], ServicoCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-servico-servico-cad-servico-cad-module-es2015.js.map