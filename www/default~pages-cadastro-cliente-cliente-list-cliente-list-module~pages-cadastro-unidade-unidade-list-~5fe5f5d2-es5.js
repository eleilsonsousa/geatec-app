(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-unidade-unidade-list-~5fe5f5d2"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroGenericGenericListGenericListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/controller/ClienteController.ts":
    /*!*************************************************!*\
      !*** ./src/app/controller/ClienteController.ts ***!
      \*************************************************/

    /*! exports provided: ClienteController */

    /***/
    function srcAppControllerClienteControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteController", function () {
        return ClienteController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ClienteController = /*#__PURE__*/function () {
        // injetando o HttpClient
        function ClienteController(httpClient) {
          _classCallCheck(this, ClienteController);

          this.httpClient = httpClient;
          this.url = 'http://geatec-com-br.umbler.net/clientes'; // api rest fake
          // Headers

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        } // Obtem todos os carros


        _createClass(ClienteController, [{
          key: "buscarTodos",
          value: function buscarTodos() {
            return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Obtem um carro pelo id

        }, {
          key: "buscarPorId",
          value: function buscarPorId(id) {
            return this.httpClient.get(this.url + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
          /** SALVAR  */

        }, {
          key: "salvar",
          value: function salvar(cliente) {
            return this.httpClient.post(this.url, JSON.stringify(cliente), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "alterar",
          value: function alterar(cliente) {
            return this.httpClient.put(this.url, JSON.stringify(cliente), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "salvarOuAlterar",
          value: function salvarOuAlterar(cliente) {
            if (cliente.id) {
              return this.alterar(cliente);
            } else {
              return this.salvar(cliente);
            }
          }
        }, {
          key: "excluir",
          value: function excluir(cliente) {
            return this.httpClient["delete"](this.url + '/' + cliente.id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Manipulação de erros

        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // Erro ocorreu no lado do client
              errorMessage = error.error.message;
            } else {
              // Erro ocorreu no lado do servidor
              errorMessage = "C\xF3digo do erro: ".concat(error.status, ", ") + "menssagem: ".concat(error.message);
            }

            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return ClienteController;
      }();

      ClienteController.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ClienteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ClienteController);
      /***/
    },

    /***/
    "./src/app/controller/LoadController.ts":
    /*!**********************************************!*\
      !*** ./src/app/controller/LoadController.ts ***!
      \**********************************************/

    /*! exports provided: LoadController */

    /***/
    function srcAppControllerLoadControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadController", function () {
        return LoadController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LoadController = /*#__PURE__*/function () {
        function LoadController(loadingController) {
          _classCallCheck(this, LoadController);

          this.loadingController = loadingController;
        }

        _createClass(LoadController, [{
          key: "showLoading",
          value: function showLoading() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: message,
                        duration: duration
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadingController.dismiss();
                      /*  setTimeout(() => {
                          this.loadingController.dismiss();
                       }, 500); */

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoadController;
      }();

      LoadController.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoadController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadController);
      /***/
    },

    /***/
    "./src/app/controller/MessageController.ts":
    /*!*************************************************!*\
      !*** ./src/app/controller/MessageController.ts ***!
      \*************************************************/

    /*! exports provided: MessageController */

    /***/
    function srcAppControllerMessageControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageController", function () {
        return MessageController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var MessageController = /*#__PURE__*/function () {
        function MessageController(alertController, toastController) {
          _classCallCheck(this, MessageController);

          this.alertController = alertController;
          this.toastController = toastController;
        }

        _createClass(MessageController, [{
          key: "showMessage",
          value: function showMessage(title, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: title,
                        subHeader: '',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      result = _context3.sent;
                      console.log(result);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showMessageToast",
          value: function showMessageToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        cssClass: 'toast-message'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "showMessageConfirm",
          value: function showMessageConfirm(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var result, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      result = false;
                      _context5.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmação!',
                        message: message,
                        buttons: [{
                          text: 'Não',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            result = false;
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            result = true;
                          }
                        }]
                      });

                    case 3:
                      alert = _context5.sent;
                      _context5.next = 6;
                      return alert.present();

                    case 6:
                      _context5.next = 8;
                      return alert.onDidDismiss();

                    case 8:
                      return _context5.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return MessageController;
      }();

      MessageController.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      MessageController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MessageController);
      /***/
    },

    /***/
    "./src/app/controller/UnidadeController.ts":
    /*!*************************************************!*\
      !*** ./src/app/controller/UnidadeController.ts ***!
      \*************************************************/

    /*! exports provided: UnidadeController */

    /***/
    function srcAppControllerUnidadeControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeController", function () {
        return UnidadeController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var UnidadeController = /*#__PURE__*/function () {
        // injetando o HttpClient
        function UnidadeController(httpClient) {
          _classCallCheck(this, UnidadeController);

          this.httpClient = httpClient;
          this.url = 'http://geatec-com-br.umbler.net/unidades'; // api rest fake
          // Headers

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        } // Obtem todos os carros


        _createClass(UnidadeController, [{
          key: "buscarTodos",
          value: function buscarTodos() {
            return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Obtem um carro pelo id

        }, {
          key: "buscarPorId",
          value: function buscarPorId(id) {
            return this.httpClient.get(this.url + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
          /** SALVAR  */

        }, {
          key: "salvar",
          value: function salvar(unidade) {
            return this.httpClient.post(this.url, JSON.stringify(unidade), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "alterar",
          value: function alterar(unidade) {
            return this.httpClient.put(this.url, JSON.stringify(unidade), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "salvarOuAlterar",
          value: function salvarOuAlterar(unidade) {
            if (unidade.id) {
              return this.alterar(unidade);
            } else {
              return this.salvar(unidade);
            }
          }
        }, {
          key: "excluir",
          value: function excluir(unidade) {
            return this.httpClient["delete"](this.url + '/' + unidade.id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Manipulação de erros

        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // Erro ocorreu no lado do client
              errorMessage = error.error.message;
            } else {
              // Erro ocorreu no lado do servidor
              errorMessage = "C\xF3digo do erro: ".concat(error.status, ", ") + "menssagem: ".concat(error.message);
            }

            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return UnidadeController;
      }();

      UnidadeController.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UnidadeController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UnidadeController);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: GenericListPage */

    /***/
    function srcAppPagesCadastroGenericGenericListGenericListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericListPage", function () {
        return GenericListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/controller/ClienteController */
      "./src/app/controller/ClienteController.ts");
      /* harmony import */


      var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/controller/LoadController */
      "./src/app/controller/LoadController.ts");
      /* harmony import */


      var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/controller/MessageController */
      "./src/app/controller/MessageController.ts");
      /* harmony import */


      var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/controller/UnidadeController */
      "./src/app/controller/UnidadeController.ts");

      var GenericListPage = /*#__PURE__*/function () {
        function GenericListPage(unidadeController, clienteController, toastController, navCtrl, router, messageController, routerActive, loadingController) {
          _classCallCheck(this, GenericListPage);

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

        _createClass(GenericListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            setTimeout(function () {
              return _this.autofocusSeachBar.setFocus();
            }, 300);
          }
        }, {
          key: "navigateGetParams",
          value: function navigateGetParams() {
            var _this2 = this;

            this.routerActive.params.subscribe(function (params) {
              var getNav = _this2.router.getCurrentNavigation();

              if (getNav.extras.state) {
                var result = getNav.extras.state.postParams;
                console.log('Param', result);
                /** result.index --> indice do objeto da lista */

                if (result.index == null) {
                  _this2.saveItemLists(result.entity);
                } else {
                  _this2.updateItemLists(result.entity);
                }
              }
            });
          }
        }, {
          key: "navigatePostParams",
          value: function navigatePostParams(url, entity, index) {
            var navigationExtras = {
              state: {
                postParams: {
                  entity: entity,
                  index: index
                }
              }
            };
            this.router.navigate(['/' + url], navigationExtras);
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.navCtrl.navigateForward('/' + url);
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loadingController.showLoading('Aguarde, por favor...', 1000);
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingController.hideLoading();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "saveItemLists",
          value: function saveItemLists(entity) {
            this.entities.push(entity);
            this.entities = _toConsumableArray(this.entities); // REFRESH 

            if (this.entitiesFiltradas != null) {
              this.entitiesFiltradas.push(entity);
              this.entitiesFiltradas = _toConsumableArray(this.entitiesFiltradas); // REFRESH 
            }
          }
        }, {
          key: "removeItemLists",
          value: function removeItemLists(id) {
            if (this.entities != null) for (var index = 0; index < this.entities.length; index++) {
              var element = this.entities[index];

              if (element.id == id) {
                this.entities.splice(index, 1);
                this.entities = _toConsumableArray(this.entities); // REFRESH 

                console.log('Delete ', element);
                break;
              }
            }
            if (this.entitiesFiltradas != null) for (var _index = 0; _index < this.entitiesFiltradas.length; _index++) {
              var _element = this.entitiesFiltradas[_index];

              if (_element.id == id) {
                this.entitiesFiltradas.splice(_index, 1);
                this.entitiesFiltradas = _toConsumableArray(this.entitiesFiltradas); // REFRESH 

                console.log('Delete ', _element);
                break;
              }
            }
          }
        }, {
          key: "updateItemLists",
          value: function updateItemLists(entity) {
            if (this.entities != null) for (var index = 0; index < this.entities.length; index++) {
              var element = this.entities[index];

              if (element.id == entity.id) {
                this.entities.splice(index, 1, entity);
                this.entities = _toConsumableArray(this.entities); // REFRESH

                console.log('Atualizado: ', element);
                break;
              }
            }
            if (this.entitiesFiltradas != null) for (var _index2 = 0; _index2 < this.entitiesFiltradas.length; _index2++) {
              var _element2 = this.entitiesFiltradas[_index2];

              if (_element2.id == entity.id) {
                this.entitiesFiltradas.splice(_index2, 1, entity);
                this.entitiesFiltradas = _toConsumableArray(this.entitiesFiltradas); // REFRESH

                console.log('Atualizado: ', _element2);
                break;
              }
            }
          }
        }]);

        return GenericListPage;
      }();

      GenericListPage.ctorParameters = function () {
        return [{
          type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_7__["UnidadeController"]
        }, {
          type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_4__["ClienteController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_6__["MessageController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_5__["LoadController"]
        }];
      };

      GenericListPage.propDecorators = {
        autofocusSeachBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autofocus', {
            "static": false
          }]
        }]
      };
      GenericListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generic-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-list/generic-list.page.html"))["default"]
      })], GenericListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-unidade-unidade-list-~5fe5f5d2-es5.js.map