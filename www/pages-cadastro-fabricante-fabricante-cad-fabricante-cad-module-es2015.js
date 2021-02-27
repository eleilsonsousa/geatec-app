(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-fabricante-fabricante-cad-fabricante-cad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.fabricante_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.fabricante_cad_field_label_nome}}</ion-label>\n                    <ion-input formControlName=\"nome\" #inputNome [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/entity/Fabricante.ts":
/*!**************************************!*\
  !*** ./src/app/entity/Fabricante.ts ***!
  \**************************************/
/*! exports provided: Fabricante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabricante", function() { return Fabricante; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/app/entity/Entity.ts");

class Fabricante extends _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor() {
        super(...arguments);
        /**  FIELDS LENGTH's */
        this.nome_length = 50;
    }
}


/***/ }),

/***/ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FabricanteCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricanteCadPageRoutingModule", function() { return FabricanteCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fabricante_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fabricante-cad.page */ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.ts");




const routes = [
    {
        path: '',
        component: _fabricante_cad_page__WEBPACK_IMPORTED_MODULE_3__["FabricanteCadPage"]
    }
];
let FabricanteCadPageRoutingModule = class FabricanteCadPageRoutingModule {
};
FabricanteCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FabricanteCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FabricanteCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricanteCadPageModule", function() { return FabricanteCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fabricante_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fabricante-cad-routing.module */ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad-routing.module.ts");
/* harmony import */ var _fabricante_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fabricante-cad.page */ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.ts");







let FabricanteCadPageModule = class FabricanteCadPageModule {
};
FabricanteCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fabricante_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabricanteCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_fabricante_cad_page__WEBPACK_IMPORTED_MODULE_6__["FabricanteCadPage"]]
    })
], FabricanteCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.ts ***!
  \*********************************************************************************/
/*! exports provided: FabricanteCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricanteCadPage", function() { return FabricanteCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");
/* harmony import */ var src_app_entity_Fabricante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entity/Fabricante */ "./src/app/entity/Fabricante.ts");





let FabricanteCadPage = class FabricanteCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
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
            this.entity = new src_app_entity_Fabricante__WEBPACK_IMPORTED_MODULE_4__["Fabricante"]();
        }
    }
    createFormFields() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.validForm()) {
                this.showLoading();
                this.fabricanteController.salvarOuAlterar(this.entity).subscribe(data => {
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast(this.messages.dialogs_register_save);
                    this.navigatePostParams('fabricante-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }
};
FabricanteCadPage.propDecorators = {
    inputNome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputNome', { static: false },] }]
};
FabricanteCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fabricante-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fabricante-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-cad/fabricante-cad.page.html")).default
    })
], FabricanteCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-fabricante-fabricante-cad-fabricante-cad-module-es2015.js.map