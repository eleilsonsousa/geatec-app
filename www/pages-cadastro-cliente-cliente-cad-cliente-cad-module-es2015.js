(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cliente-cliente-cad-cliente-cad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.cliente_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-segment formControlName=\"isPessoaJuridica\" (ionChange)=\"selectTipoPessoa($event)\">\n                    <ion-segment-button value=\"false\"  *ngIf=\"isShowTabPessoaFisica\">\n                        <ion-icon name=\"person\"></ion-icon>\n                        <ion-label class=\"text-no-transformer\">{{messages.cliente_cad_tab_pessoa_fisica_title}}\n                        </ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"true\" *ngIf=\"isShowTabPessoaJuridica\">\n                        <ion-icon name=\"business\"></ion-icon>\n                        <ion-label class=\"text-no-transformer\">{{messages.cliente_cad_tab_pessoa_juridica_title}}\n                        </ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <div *ngIf=\"!isPessoaJuridica\">\n\n                    <ion-item lines=\"full\">\n                        <ion-label position=\"floating\">{{messages.cliente_cad_field_label_nome}}</ion-label>\n                        <ion-input formControlName=\"nome\" #inputNome [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                    </ion-item>\n\n                    <!-- Error messages -->\n                    <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                        {{ messages.field_required }}\n                    </div>\n\n                </div>\n\n                <div *ngIf=\"isPessoaJuridica\">\n\n                    <ion-item lines=\"full\">\n                        <ion-label position=\"floating\">{{messages.cliente_cad_field_label_razao_social}}</ion-label>\n                        <ion-input formControlName=\"razaoSocial\" #inputRazaoSocial\n                            [attr.maxLength]=\"entity.razaoSocial_length\"></ion-input>\n                    </ion-item>\n\n                    <!-- Error messages -->\n                    <div *ngIf=\"isSubmitted && errorControl.razaoSocial.errors?.required\" class=\"error-message\">\n                        {{ messages.field_required }}\n                    </div>\n                </div>\n\n            </ion-col>\n\n            <ion-col *ngIf=\"!isPessoaJuridica\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cpf}}</ion-label>\n                    <ion-input formControlName=\"cpf\" simpleMask=\"999.999.999-99\" class=\"uppercase\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"isSubmitted && errorControl.cpf.errors?.cpfNotValid\" class=\"error-message\">\n                    {{ messages.cpf_invalid }}\n                </div>\n            </ion-col>\n\n            <ion-col *ngIf=\"isPessoaJuridica\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cnpj}}</ion-label>\n                    <ion-input formControlName=\"cnpj\" simpleMask=\"99.999.999/9999-99\" [clearIfNotMatch]=\"true\"\n                        class=\"uppercase\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.cnpj.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"isPessoaJuridica\">\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_fantasia}}\n                    </ion-label>\n                    <ion-input formControlName=\"fantasia\" [attr.maxLength]=\"entity.fantasia_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">\n                        {{messages.cliente_cad_field_label_inscricao_estadual}}</ion-label>\n                    <ion-input formControlName=\"inscricaoEstadual\" [attr.maxLength]=\"entity.inscricaoEstadual_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_endereco}}\n                    </ion-label>\n                    <ion-input formControlName=\"endereco\" [attr.maxLength]=\"entity.endereco_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cidade}}\n                    </ion-label>\n                    <ion-input formControlName=\"cidade\" [attr.maxLength]=\"entity.cidade_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"3\">\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_uf}}</ion-label>\n                    <ion-select formControlName=\"uf\">\n                        <ion-select-option *ngFor=\"let item of listUf\" value=\"{{item.uf}}\">\n                            {{ item.uf }}\n                        </ion-select-option>\n                    </ion-select>\n\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cep}}</ion-label>\n                    <ion-input formControlName=\"cep\" simpleMask=\"99.999-999\" [clearIfNotMatch]=\"true\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_complemento}}</ion-label>\n                    <ion-input formControlName=\"complemento\" [attr.maxLength]=\"entity.complemento_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_telefone}}</ion-label>\n                    <ion-input formControlName=\"telefone\" simpleMask=\"(99) 99999-9999\"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_celular}}</ion-label>\n                    <ion-input formControlName=\"celular\" simpleMask=\"(99) 99999-9999\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_email}}</ion-label>\n                    <ion-input formControlName=\"email\" [attr.maxLength]=\"entity.email_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/controller/ClienteController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/ClienteController.ts ***!
  \*************************************************/
/*! exports provided: ClienteController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteController", function() { return ClienteController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let ClienteController = class ClienteController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/clientes');
    }
};
ClienteController.ctorParameters = () => [];
ClienteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClienteController);



/***/ }),

/***/ "./src/app/controller/Controller.ts":
/*!******************************************!*\
  !*** ./src/app/controller/Controller.ts ***!
  \******************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let Controller = class Controller {
    constructor(urlClass) {
        /** URL API */
        this.url_base = 'http://api-geatec-com-br.umbler.net';
        /** HTTP  */
        this.http = this.getHttpClient();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.url_full = this.url_base + urlClass;
    }
    buscarTodos() {
        return this.http.get(this.url_full)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    buscarPorId(id) {
        return this.http.get(this.url_full + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    salvar(t) {
        return this.http.post(this.url_full, JSON.stringify(t), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    alterar(t) {
        return this.http.put(this.url_full, JSON.stringify(t), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    salvarOuAlterar(t) {
        if (t.id) {
            return this.alterar(t);
        }
        else {
            return this.salvar(t);
        }
    }
    excluir(t) {
        return this.http.delete(this.url_full + '/' + t.id, this.httpOptions)
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
    getHttpClient() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXhrBackend"]({ build: () => new XMLHttpRequest() }));
    }
};
Controller.ctorParameters = () => [
    { type: String }
];
Controller = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], Controller);



/***/ }),

/***/ "./src/app/controller/FabricanteController.ts":
/*!****************************************************!*\
  !*** ./src/app/controller/FabricanteController.ts ***!
  \****************************************************/
/*! exports provided: FabricanteController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricanteController", function() { return FabricanteController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let FabricanteController = class FabricanteController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/fabricantes');
    }
};
FabricanteController.ctorParameters = () => [];
FabricanteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FabricanteController);



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
/* harmony import */ var _constants_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/Messages */ "./src/app/constants/Messages.ts");
/* import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoadController {

    constructor(private loadingController: LoadingController) { }

    async showLoading(message: string = null, duration: number = null) {
        const loading = await this.loadingController.create(
            { message, duration, translucent: true, cssClass: "load-controller",backdropDismiss: true });
        return await loading.present();
    }

    async hideLoading() {
        this.loadingController.dismiss();
        /*  setTimeout(() => {
            this.loadingController.dismiss();
         }, 500); */




let LoadController = class LoadController {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_loading,
                cssClass: 'load-controller',
                translucent: false,
                showBackdrop: false,
                spinner: "dots",
                keyboardClose: true,
                backdropDismiss: false
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoadController.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
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
/* harmony import */ var _constants_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/Messages */ "./src/app/constants/Messages.ts");




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
                header: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_title,
                message: message,
                buttons: [
                    {
                        text: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_no,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            result = false;
                        }
                    }, {
                        text: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_yes,
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

/***/ "./src/app/controller/ProdutoCategoriaController.ts":
/*!**********************************************************!*\
  !*** ./src/app/controller/ProdutoCategoriaController.ts ***!
  \**********************************************************/
/*! exports provided: ProdutoCategoriaController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCategoriaController", function() { return ProdutoCategoriaController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let ProdutoCategoriaController = class ProdutoCategoriaController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/produtos-categorias');
    }
};
ProdutoCategoriaController.ctorParameters = () => [];
ProdutoCategoriaController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProdutoCategoriaController);



/***/ }),

/***/ "./src/app/controller/ProdutoController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/ProdutoController.ts ***!
  \*************************************************/
/*! exports provided: ProdutoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoController", function() { return ProdutoController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let ProdutoController = class ProdutoController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/produtos');
    }
};
ProdutoController.ctorParameters = () => [];
ProdutoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProdutoController);



/***/ }),

/***/ "./src/app/controller/ServicoController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/ServicoController.ts ***!
  \*************************************************/
/*! exports provided: ServicoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoController", function() { return ServicoController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let ServicoController = class ServicoController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/servicos');
    }
};
ServicoController.ctorParameters = () => [];
ServicoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicoController);



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
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let UnidadeController = class UnidadeController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/unidades');
    }
};
UnidadeController.ctorParameters = () => [];
UnidadeController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UnidadeController);



/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ClienteCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadPageRoutingModule", function() { return ClienteCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cliente_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-cad.page */ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts");




const routes = [
    {
        path: '',
        component: _cliente_cad_page__WEBPACK_IMPORTED_MODULE_3__["ClienteCadPage"]
    }
];
let ClienteCadPageRoutingModule = class ClienteCadPageRoutingModule {
};
ClienteCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClienteCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadPageModule", function() { return ClienteCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cliente_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-cad-routing.module */ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts");
/* harmony import */ var _cliente_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-cad.page */ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts");
/* harmony import */ var ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ion-simple-mask */ "./node_modules/ngx-ion-simple-mask/__ivy_ngcc__/fesm2015/ngx-ion-simple-mask.js");








let ClienteCadPageModule = class ClienteCadPageModule {
};
ClienteCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteCadPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__["SimpleMaskModule"]
        ],
        declarations: [_cliente_cad_page__WEBPACK_IMPORTED_MODULE_6__["ClienteCadPage"]]
    })
], ClienteCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts ***!
  \************************************************************************/
/*! exports provided: ClienteCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadPage", function() { return ClienteCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");
/* harmony import */ var src_app_utils_UtilValidators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/UtilValidators */ "./src/app/utils/UtilValidators.ts");
/* harmony import */ var src_app_entity_Cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entity/Cliente */ "./src/app/entity/Cliente.ts");






let ClienteCadPage = class ClienteCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"] {
    constructor() {
        super(...arguments);
        this.isPessoaJuridica = false;
        this.isShowTabPessoaFisica = true;
        this.isShowTabPessoaJuridica = true;
    }
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
        /** ALTERAR */
        if (this.isAlterForm()) {
            this.isPessoaJuridica = this.entity.isPessoaJuridica;
            /** Ocultar Tab por tipo de pessoa  */
            this.isShowTabPessoaJuridica = this.isPessoaJuridica;
            this.isShowTabPessoaFisica = !this.isPessoaJuridica;
        }
        else {
            this.entity = new src_app_entity_Cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        }
    }
    createFormFields() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            razaoSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.razaoSocial, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_utils_UtilValidators__WEBPACK_IMPORTED_MODULE_4__["UtilValidators"].ValidaCpf])),
            cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cnpj, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fantasia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.fantasia),
            inscricaoEstadual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.inscricaoEstadual),
            endereco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.endereco),
            cidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cidade),
            uf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.uf),
            cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cep),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.telefone),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.celular),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.email),
            complemento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.complemento),
            isPessoaJuridica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isPessoaJuridica)
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configValidations();
            if (this.validForm()) {
                this.showLoading();
                /** PJ OU PF */
                this.entity.isPessoaJuridica = this.isPessoaJuridica;
                this.clearEntity();
                this.clienteController.salvarOuAlterar(this.entity).subscribe(data => {
                    // NOVO REGISTRO//
                    if (!this.entity.id)
                        this.entity.id = data.id;
                    this.messageController.showMessageToast(this.messages.dialogs_register_save);
                    this.navigatePostParams('cliente-list', this.entity, this.entityIndex);
                    this.hideLoading();
                });
            }
        });
    }
    selectTipoPessoa(event) {
        this.isPessoaJuridica = !this.isPessoaJuridica;
        this.showFocus();
    }
    showFocus() {
        if (this.isPessoaJuridica) {
            setTimeout(() => this.inputRazaoSocial.setFocus(), 400);
        }
        else {
            setTimeout(() => this.inputNome.setFocus(), 400);
        }
    }
    clearEntity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isPessoaJuridica) {
                this.entity.nome = null;
                this.entity.cpf = null;
            }
            else {
                this.entity.razaoSocial = null;
                this.entity.fantasia = null;
                this.entity.inscricaoEstadual = null;
                this.entity.cnpj = null;
            }
        });
    }
    configValidations() {
        if (this.isPessoaJuridica) {
            this.addValidation('razaoSocial', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.addValidation('cnpj', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.removeValidation('nome');
            this.removeValidation('cpf');
        }
        else {
            this.addValidation('nome', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.addValidation('cpf', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_utils_UtilValidators__WEBPACK_IMPORTED_MODULE_4__["UtilValidators"].ValidaCpf]));
            this.removeValidation('razaoSocial');
            this.removeValidation('cnpj');
        }
    }
};
ClienteCadPage.propDecorators = {
    inputNome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputNome', { static: false },] }],
    inputRazaoSocial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputRazaoSocial', { static: false },] }]
};
ClienteCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cliente-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html")).default
    })
], ClienteCadPage);



/***/ }),

/***/ "./src/app/utils/UtilValidators.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/UtilValidators.ts ***!
  \*****************************************/
/*! exports provided: UtilValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilValidators", function() { return UtilValidators; });
class UtilValidators {
    constructor() { }
    static ValidaCpf(controle) {
        let cpf = controle.value + '';
        cpf = cpf.split('.').join('');
        cpf = cpf.split('-').join('');
        if (cpf) {
            let numbers, digits, sum, i, result, equalDigits;
            equalDigits = 1;
            if (cpf.length < 11) {
                return { cpfNotValid: true };
            }
            for (i = 0; i < cpf.length - 1; i++) {
                if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                    equalDigits = 0;
                    break;
                }
            }
            if (!equalDigits) {
                numbers = cpf.substring(0, 9);
                digits = cpf.substring(9);
                sum = 0;
                for (i = 10; i > 1; i--) {
                    sum += numbers.charAt(10 - i) * i;
                }
                result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
                if (result !== Number(digits.charAt(0))) {
                    return { cpfNotValid: true };
                }
                numbers = cpf.substring(0, 10);
                sum = 0;
                for (i = 11; i > 1; i--) {
                    sum += numbers.charAt(11 - i) * i;
                }
                result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
                if (result !== Number(digits.charAt(1))) {
                    return { cpfNotValid: true };
                }
                return null;
            }
            else {
                return { cpfNotValid: true };
            }
        }
        return null;
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cliente-cliente-cad-cliente-cad-module-es2015.js.map