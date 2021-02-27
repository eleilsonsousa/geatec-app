(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-fabricante-fabricante~7947e18f"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

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

/***/ "./src/app/controller/OrdemServicoController.ts":
/*!******************************************************!*\
  !*** ./src/app/controller/OrdemServicoController.ts ***!
  \******************************************************/
/*! exports provided: OrdemServicoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemServicoController", function() { return OrdemServicoController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/controller/Controller.ts");



let OrdemServicoController = class OrdemServicoController extends _Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"] {
    constructor() {
        super('/ordens-servicos');
    }
};
OrdemServicoController.ctorParameters = () => [];
OrdemServicoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdemServicoController);



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

/***/ "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: GenericListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericListPage", function() { return GenericListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/Messages */ "./src/app/constants/Messages.ts");
/* harmony import */ var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/controller/ClienteController */ "./src/app/controller/ClienteController.ts");
/* harmony import */ var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/controller/FabricanteController */ "./src/app/controller/FabricanteController.ts");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/controller/OrdemServicoController */ "./src/app/controller/OrdemServicoController.ts");
/* harmony import */ var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/controller/ProdutoCategoriaController */ "./src/app/controller/ProdutoCategoriaController.ts");
/* harmony import */ var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/controller/ProdutoController */ "./src/app/controller/ProdutoController.ts");
/* harmony import */ var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/controller/ServicoController */ "./src/app/controller/ServicoController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");














let GenericListPage = class GenericListPage {
    constructor(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, ordemServicoController, toastController, navCtrl, router, messageController, routerActive, loadingController) {
        this.unidadeController = unidadeController;
        this.clienteController = clienteController;
        this.produtoCategoriaController = produtoCategoriaController;
        this.fabricanteController = fabricanteController;
        this.servicoController = servicoController;
        this.produtoController = produtoController;
        this.ordemServicoController = ordemServicoController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.messageController = messageController;
        this.routerActive = routerActive;
        this.loadingController = loadingController;
        // @ViewChild('inputSearch') inputSearch: ElementRef;
        this.searchStr = "";
        this.entities = [];
        this.entitiesFiltradas = [];
        this.isShowSearch = true;
        this.isShowBottomClose = false;
        this.isEntities = true;
        this.messages = src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_4__["Messages"];
        this.listUnidades = [];
        this.navigateGetParams();
    }
    navigateGetParams() {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                let result = getNav.extras.state.postParams;
                /** result.index --> indice do objeto da lista */
                if (result.index == null) {
                    this.saveItemLists(result.entity);
                }
                else {
                    this.updateItemLists(result.entity);
                }
            }
        });
    }
    navigatePostParams(url, entity, index) {
        let navigationExtras = {
            state: {
                postParams: { entity: entity, index: index }
            }
        };
        this.router.navigate(['/' + url], navigationExtras);
    }
    navigate(url) {
        this.navCtrl.navigateForward('/' + url);
    }
    navigateBack() {
        this.navCtrl.navigateBack;
    }
    showLoading() {
        this.loadingController.showLoading();
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
    saveItemLists(entity) {
        this.entities.push(entity);
        if (this.searchStr) {
            this.entitiesFiltradas.push(entity);
        }
        this.showPanelCad();
    }
    removeItemLists(id) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == id) {
                    this.entities.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }
        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == id) {
                    this.entitiesFiltradas.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }
    }
    updateItemLists(entity) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == entity.id) {
                    this.entities.splice(index, 1, entity);
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }
        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == entity.id) {
                    this.entitiesFiltradas.splice(index, 1, entity);
                    this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }
    }
    refreshList() {
        this.entities = [...this.entities];
        this.entitiesFiltradas = [...this.entitiesFiltradas];
    }
    showPanelCad() {
        this.isEntities = this.entities.length > 0;
    }
    /** MAXIMO DE 4 CAMPOS */
    execFilter(field1, field2, field3, field4) {
        return this.entities.filter(entity => {
            let result = (entity[field1] ? entity[field1].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field2] ? entity[field2].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field3] ? entity[field3].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field4] ? entity[field4].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false);
            return result;
        });
    }
    filter(field1, field2, field3, field4) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.searchStr) {
                this.entitiesFiltradas = [];
                return;
            }
            this.entitiesFiltradas = yield this.execFilter(field1, field2, field3, field4);
        });
    }
    getEntities() {
        if (this.entitiesFiltradas.length > 0) {
            return this.entitiesFiltradas;
        }
        return this.entities;
    }
    showSearchBar() {
        this.isShowSearch = true;
        this.setFocusSearch();
    }
    hideSearchBar() {
        this.isShowSearch = false;
        this.searchStr = null;
    }
    deleteSearch() {
        this.inputSearch.value = "";
        this.setFocusSearch();
    }
    setFocusSearch() {
        setTimeout(() => {
            this.inputSearch.setFocus();
        }, 300);
    }
};
GenericListPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"] },
    { type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_5__["ClienteController"] },
    { type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_10__["ProdutoCategoriaController"] },
    { type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_6__["FabricanteController"] },
    { type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"] },
    { type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_11__["ProdutoController"] },
    { type: src_app_controller_OrdemServicoController__WEBPACK_IMPORTED_MODULE_9__["OrdemServicoController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_8__["MessageController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_7__["LoadController"] }
];
GenericListPage.propDecorators = {
    inputSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['inputSearch',] }]
};
GenericListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html")).default
    })
], GenericListPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-fabricante-fabricante~7947e18f-es2015.js.map