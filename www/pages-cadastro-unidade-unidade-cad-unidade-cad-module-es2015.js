(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-unidade-unidade-cad-unidade-cad-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Unidade</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Nome</ion-label>\n                    <ion-input formControlName=\"nome\" #autofocus maxlength=\"20\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div class=\"error-message\" *ngIf=\"isSubmitted && errorControl.nome.errors?.required\">\n                    * campo obrigatório\n                </div>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">Sigla</ion-label>\n                    <ion-input formControlName=\"sigla\" maxlength=\"5\" class=\"upper-case\" ></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div class=\"error-message\" *ngIf=\"isSubmitted && errorControl.sigla.errors?.required\">\n                    * campo obrigatório\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Descrição</ion-label>\n                    <ion-input formControlName=\"descricao\" maxlength=\"80\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/controller/LoadController.ts":
/*!**********************************************!*\
  !*** ./src/app/controller/LoadController.ts ***!
  \**********************************************/
/*! exports provided: LoadController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadController", function() { return LoadController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LoadController = class LoadController {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    showLoading(message = null, duration = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message, duration });
            return yield loading.present();
        });
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingController.dismiss();
            /*  setTimeout(() => {
                this.loadingController.dismiss();
             }, 500); */
        });
    }
};
LoadController.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LoadController);



/***/ }),

/***/ "./src/app/controller/MessageController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/MessageController.ts ***!
  \*************************************************/
/*! exports provided: MessageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageController", function() { return MessageController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let MessageController = class MessageController {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    showMessage(title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: '',
                message: message,
                buttons: ['OK'],
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    showMessageToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                cssClass: 'toast-message'
            });
            toast.present();
        });
    }
    showMessageConfirm(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmação!',
                message: message,
                buttons: [
                    {
                        text: 'Não',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            result = false;
                        }
                    }, {
                        text: 'Sim',
                        handler: () => {
                            result = true;
                        }
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss();
            return result;
        });
    }
};
MessageController.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
MessageController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageController);



/***/ }),

/***/ "./src/app/controller/UnidadeController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/UnidadeController.ts ***!
  \*************************************************/
/*! exports provided: UnidadeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeController", function() { return UnidadeController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UnidadeController = class UnidadeController {
    // injetando o HttpClient
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://geatec-com-br.umbler.net/unidades'; // api rest fake
        // Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Obtem todos os carros
    buscarTodos() {
        return this.httpClient.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Obtem um carro pelo id
    buscarPorId(id) {
        return this.httpClient.get(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /** SALVAR  */
    salvar(unidade) {
        return this.httpClient.post(this.url, JSON.stringify(unidade), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    alterar(unidade) {
        return this.httpClient.put(this.url, JSON.stringify(unidade), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    salvarOuAlterar(unidade) {
        if (unidade.id) {
            return this.alterar(unidade);
        }
        else {
            return this.salvar(unidade);
        }
    }
    excluir(unidade) {
        return this.httpClient.delete(this.url + '/' + unidade.id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Manipulação de erros
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    ;
};
UnidadeController.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UnidadeController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UnidadeController);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");







let GenericCadPage = class GenericCadPage {
    /**************************************** */
    constructor(unidadeController, navCtrl, router, messageController, routerActive, loadingController) {
        this.unidadeController = unidadeController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.messageController = messageController;
        this.routerActive = routerActive;
        this.loadingController = loadingController;
        this.entity = {};
        this.isSubmitted = false;
        this.navigateGetParams();
    }
    ionViewWillEnter() {
        setTimeout(() => this.autofocuInputs.setFocus(), 300);
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
    showLoading() {
        return this.loadingController.showLoading('Aguarde, por favor...');
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
};
GenericCadPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_6__["UnidadeController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_5__["MessageController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_4__["LoadController"] }
];
GenericCadPage.propDecorators = {
    autofocuInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['autofocus', { static: false },] }]
};
GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html")).default
    })
], GenericCadPage);



/***/ }),

/***/ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UnidadeCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeCadPageRoutingModule", function() { return UnidadeCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _unidade_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidade-cad.page */ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts");




const routes = [
    {
        path: '',
        component: _unidade_cad_page__WEBPACK_IMPORTED_MODULE_3__["UnidadeCadPage"]
    }
];
let UnidadeCadPageRoutingModule = class UnidadeCadPageRoutingModule {
};
UnidadeCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UnidadeCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.module.ts ***!
  \**************************************************************************/
/*! exports provided: UnidadeCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeCadPageModule", function() { return UnidadeCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _unidade_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unidade-cad-routing.module */ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts");
/* harmony import */ var _unidade_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidade-cad.page */ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts");
/* harmony import */ var ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ion-simple-mask */ "./node_modules/ngx-ion-simple-mask/__ivy_ngcc__/fesm2015/ngx-ion-simple-mask.js");








let UnidadeCadPageModule = class UnidadeCadPageModule {
};
UnidadeCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _unidade_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnidadeCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__["SimpleMaskModule"]
        ],
        declarations: [_unidade_cad_page__WEBPACK_IMPORTED_MODULE_6__["UnidadeCadPage"]]
    })
], UnidadeCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts ***!
  \************************************************************************/
/*! exports provided: UnidadeCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeCadPage", function() { return UnidadeCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");




let UnidadeCadPage = class UnidadeCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
    ngOnInit() {
        this.createFormFields();
    }
    createFormFields() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sigla: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.sigla, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.descricao),
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validForm = this.validForm();
            if (validForm) {
                this.showLoading();
                //MELHORAR ISSO //
                let unidade = this.entity;
                unidade.sigla = unidade.sigla.toUpperCase();
                this.unidadeController.salvarOuAlterar(unidade).subscribe(data => {
                    // NOVO REGISTRO//
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast('Registro salvo');
                    this.navigatePostParams('unidade-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
};
UnidadeCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unidade-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unidade-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html")).default
    })
], UnidadeCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-unidade-unidade-cad-unidade-cad-module-es2015.js.map