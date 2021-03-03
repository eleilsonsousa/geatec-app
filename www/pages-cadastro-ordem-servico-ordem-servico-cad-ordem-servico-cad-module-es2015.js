(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-ordem-servico-ordem-servico-cad-ordem-servico-cad-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{messages.ordem_servico_cad_title}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n          <ion-tab-button tab=\"ordem-servico-cad-cabecalho\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label>  {{messages.ordem_servico_cad_tab_cabecalho_title}}</ion-label>\n          </ion-tab-button>\n      \n          \n      \n       \n        </ion-tab-bar>\n      </ion-tabs>\n</ion-content>");

/***/ }),

/***/ "./src/app/constants/Constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/Constants.ts ***!
  \****************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.UFS = [
    { codigo_uf: 27, uf: 'AL', nome: 'Alagoas' },
    { codigo_uf: 12, uf: 'AC', nome: 'Acre' },
    { codigo_uf: 16, uf: 'AP', nome: 'Amapá' },
    { codigo_uf: 13, uf: 'AM', nome: 'Amazonas' },
    { codigo_uf: 29, uf: 'BA', nome: 'Bahia' },
    { codigo_uf: 23, uf: 'CE', nome: 'Ceará' },
    { codigo_uf: 53, uf: 'DF', nome: 'Distrito Federal' },
    { codigo_uf: 32, uf: 'ES', nome: 'Espírito Santo' },
    { codigo_uf: 52, uf: 'GO', nome: 'Goías' },
    { codigo_uf: 21, uf: 'MA', nome: 'Maranhão' },
    { codigo_uf: 51, uf: 'MT', nome: 'Mato Grosso' },
    { codigo_uf: 50, uf: 'MS', nome: 'Mato G. do Sul' },
    { codigo_uf: 31, uf: 'MG', nome: 'Minas Gerais' },
    { codigo_uf: 15, uf: 'PA', nome: 'Pará' },
    { codigo_uf: 25, uf: 'PB', nome: 'Paraíba' },
    { codigo_uf: 41, uf: 'PR', nome: 'Paraná' },
    { codigo_uf: 26, uf: 'PE', nome: 'Pernambuco' },
    { codigo_uf: 22, uf: 'PI', nome: 'Piauí' },
    { codigo_uf: 33, uf: 'RJ', nome: 'Rio de Janeiro' },
    { codigo_uf: 24, uf: 'RN', nome: 'Rio G. do Norte' },
    { codigo_uf: 43, uf: 'RS', nome: 'Rio G. do Sul' },
    { codigo_uf: 11, uf: 'RO', nome: 'Rondônia' },
    { codigo_uf: 14, uf: 'RR', nome: 'Roraíma' },
    { codigo_uf: 42, uf: 'SC', nome: 'Santa Catarina' },
    { codigo_uf: 35, uf: 'SP', nome: 'São Paulo' },
    { codigo_uf: 28, uf: 'SE', nome: 'Sergipe' },
    { codigo_uf: 17, uf: 'TO', nome: 'Tocantins' },
];


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
/* harmony import */ var _controller_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/Controller */ "./src/app/controller/Controller.ts");



let ClienteController = class ClienteController extends _controller_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/Constants */ "./src/app/constants/Constants.ts");
/* harmony import */ var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/Messages */ "./src/app/constants/Messages.ts");
/* harmony import */ var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/controller/ClienteController */ "./src/app/controller/ClienteController.ts");
/* harmony import */ var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/controller/FabricanteController */ "./src/app/controller/FabricanteController.ts");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/controller/ProdutoCategoriaController */ "./src/app/controller/ProdutoCategoriaController.ts");
/* harmony import */ var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/controller/ServicoController */ "./src/app/controller/ServicoController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");
/* harmony import */ var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/controller/ProdutoController */ "./src/app/controller/ProdutoController.ts");

//import { CurrencyPipe } from '@angular/common';














let GenericCadPage = class GenericCadPage {
    /**************************************** */
    constructor(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, navCtrl, router, messageController, currencyPipe, routerActive, loadingController) {
        this.unidadeController = unidadeController;
        this.clienteController = clienteController;
        this.produtoCategoriaController = produtoCategoriaController;
        this.fabricanteController = fabricanteController;
        this.servicoController = servicoController;
        this.produtoController = produtoController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.messageController = messageController;
        this.currencyPipe = currencyPipe;
        this.routerActive = routerActive;
        this.loadingController = loadingController;
        this.entity = {};
        this.isSubmitted = false;
        this.isSaveAndBack = false;
        this.listUf = src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].UFS;
        this.messages = src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__["Messages"];
        this.navigateGetParams();
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
    isAlterForm() {
        return this.entity.id != null;
    }
    navigateBack() {
        this.navCtrl.back();
    }
    showLoading() {
        return this.loadingController.showLoading();
    }
    focusInit() {
        setTimeout(() => this.inputFocusInit.setFocus(), 400);
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
    navigate(url) {
        this.navCtrl.navigateForward('/' + url);
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
    removeValidation(nameField) {
        this.form.get(nameField).clearValidators();
        this.form.get(nameField).updateValueAndValidity();
    }
    addValidation(nameField, validatiors) {
        this.form.get(nameField).setValidators(validatiors);
        this.form.get(nameField).updateValueAndValidity();
    }
};
GenericCadPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"] },
    { type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__["ClienteController"] },
    { type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__["ProdutoCategoriaController"] },
    { type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__["FabricanteController"] },
    { type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"] },
    { type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__["ProdutoController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__["MessageController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__["LoadController"] }
];
GenericCadPage.propDecorators = {
    inputFocusInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['focusInit', { static: false },] }]
};
GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html")).default
    })
], GenericCadPage);



/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: OrdemServicoCadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPageRoutingModule", function() { return OrdemServicoCadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordem-servico-cad.page */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts");




const routes = [
    {
        path: "",
        component: _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_3__["OrdemServicoCadPage"],
        children: [
            {
                path: "ordem-servico-cad-cabecalho",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() | order-servico-cad-cabecalho-order-servico-cad-cabecalho-module */ "order-servico-cad-cabecalho-order-servico-cad-cabecalho-module").then(__webpack_require__.bind(null, /*! ./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts")).then(m => m.OrderServicoCadCabecalhoPageModule)
                    },
                ],
            },
        ]
    },
    {
        path: "",
        redirectTo: "cadastro-cliente/tab-pessoa-fisica",
        pathMatch: "full"
    }
];
/* const routes: Routes = [
  {
    path: '',
    component: OrdemServicoCadPage
  },
  {
    path: 'order-servico-cad-cabecalho',
    loadChildren: () => import('./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module').then( m => m.OrderServicoCadCabecalhoPageModule)
  }
];
 */
let OrdemServicoCadPageRoutingModule = class OrdemServicoCadPageRoutingModule {
};
OrdemServicoCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdemServicoCadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.module.ts ***!
  \********************************************************************************************/
/*! exports provided: OrdemServicoCadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPageModule", function() { return OrdemServicoCadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ordem_servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordem-servico-cad-routing.module */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts");
/* harmony import */ var _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordem-servico-cad.page */ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts");







let OrdemServicoCadPageModule = class OrdemServicoCadPageModule {
};
OrdemServicoCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ordem_servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdemServicoCadPageRoutingModule"]
        ],
        declarations: [_ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__["OrdemServicoCadPage"]]
    })
], OrdemServicoCadPageModule);



/***/ }),

/***/ "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts ***!
  \******************************************************************************************/
/*! exports provided: OrdemServicoCadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPage", function() { return OrdemServicoCadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/generic-cad/generic-cad.page */ "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");



let OrdemServicoCadPage = class OrdemServicoCadPage extends _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_2__["GenericCadPage"] {
    ngOnInit() {
    }
};
OrdemServicoCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordem-servico-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ordem-servico-cad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html")).default
    })
], OrdemServicoCadPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-ordem-servico-ordem-servico-cad-ordem-servico-cad-module-es2015.js.map