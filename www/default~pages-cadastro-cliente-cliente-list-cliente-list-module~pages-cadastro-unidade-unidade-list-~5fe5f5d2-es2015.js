(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-unidade-unidade-list-~5fe5f5d2"],{

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ClienteController = class ClienteController {
    // injetando o HttpClient
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://geatec-com-br.umbler.net/clientes'; // api rest fake
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
    salvar(cliente) {
        return this.httpClient.post(this.url, JSON.stringify(cliente), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    alterar(cliente) {
        return this.httpClient.put(this.url, JSON.stringify(cliente), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    salvarOuAlterar(cliente) {
        if (cliente.id) {
            return this.alterar(cliente);
        }
        else {
            return this.salvar(cliente);
        }
    }
    excluir(cliente) {
        return this.httpClient.delete(this.url + '/' + cliente.id, this.httpOptions)
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
ClienteController.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClienteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClienteController);



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
/* harmony import */ var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/controller/ClienteController */ "./src/app/controller/ClienteController.ts");
/* harmony import */ var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/controller/LoadController */ "./src/app/controller/LoadController.ts");
/* harmony import */ var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/controller/MessageController */ "./src/app/controller/MessageController.ts");
/* harmony import */ var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/controller/UnidadeController */ "./src/app/controller/UnidadeController.ts");








let GenericListPage = class GenericListPage {
    constructor(unidadeController, clienteController, toastController, navCtrl, router, messageController, routerActive, loadingController) {
        this.unidadeController = unidadeController;
        this.clienteController = clienteController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.messageController = messageController;
        this.routerActive = routerActive;
        this.loadingController = loadingController;
        this.searchStr = "";
        this.entities = [];
        this.showLoading();
        this.navigateGetParams();
    }
    ionViewWillEnter() {
        setTimeout(() => this.autofocusSeachBar.setFocus(), 300);
    }
    navigateGetParams() {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                let result = getNav.extras.state.postParams;
                console.log('Param', result);
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
    showLoading() {
        this.loadingController.showLoading('Aguarde, por favor...', 1000);
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.hideLoading();
        });
    }
    saveItemLists(entity) {
        this.entities.push(entity);
        this.entities = [...this.entities]; // REFRESH 
        if (this.entitiesFiltradas != null) {
            this.entitiesFiltradas.push(entity);
            this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH 
        }
    }
    removeItemLists(id) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == id) {
                    this.entities.splice(index, 1);
                    this.entities = [...this.entities]; // REFRESH 
                    console.log('Delete ', element);
                    break;
                }
            }
        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == id) {
                    this.entitiesFiltradas.splice(index, 1);
                    this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH 
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
                    this.entities = [...this.entities]; // REFRESH
                    console.log('Atualizado: ', element);
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
                    break;
                }
            }
    }
};
GenericListPage.ctorParameters = () => [
    { type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_7__["UnidadeController"] },
    { type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_4__["ClienteController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_6__["MessageController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_5__["LoadController"] }
];
GenericListPage.propDecorators = {
    autofocusSeachBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['autofocus', { static: false },] }]
};
GenericListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html")).default
    })
], GenericListPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-unidade-unidade-list-~5fe5f5d2-es2015.js.map