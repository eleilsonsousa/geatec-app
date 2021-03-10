(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-fabricante-fabricante~f321a460"], {
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
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _controller_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../controller/Controller */
      "./src/app/controller/Controller.ts");

      var ClienteController = /*#__PURE__*/function (_controller_Controlle) {
        _inherits(ClienteController, _controller_Controlle);

        var _super = _createSuper(ClienteController);

        function ClienteController() {
          _classCallCheck(this, ClienteController);

          return _super.call(this, '/clientes');
        }

        return ClienteController;
      }(_controller_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      ClienteController.ctorParameters = function () {
        return [];
      };

      ClienteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ClienteController);
      /***/
    },

    /***/
    "./src/app/controller/Controller.ts":
    /*!******************************************!*\
      !*** ./src/app/controller/Controller.ts ***!
      \******************************************/

    /*! exports provided: Controller */

    /***/
    function srcAppControllerControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Controller", function () {
        return Controller;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var Controller = /*#__PURE__*/function () {
        function Controller(urlClass) {
          _classCallCheck(this, Controller);

          /** URL API */
          this.url_base = 'http://api-geatec-com-br.umbler.net';
          /** HTTP  */

          this.http = this.getHttpClient();
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          this.url_full = this.url_base + urlClass;
        }

        _createClass(Controller, [{
          key: "buscarTodos",
          value: function buscarTodos() {
            return this.http.get(this.url_full).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "buscarPorId",
          value: function buscarPorId(id) {
            return this.http.get(this.url_full + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "salvar",
          value: function salvar(t) {
            return this.http.post(this.url_full, JSON.stringify(t), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "alterar",
          value: function alterar(t) {
            return this.http.put(this.url_full, JSON.stringify(t), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "salvarOuAlterar",
          value: function salvarOuAlterar(t) {
            if (t.id) {
              return this.alterar(t);
            } else {
              return this.salvar(t);
            }
          }
        }, {
          key: "excluir",
          value: function excluir(t) {
            return this.http["delete"](this.url_full + '/' + t.id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
        }, {
          key: "getHttpClient",
          value: function getHttpClient() {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXhrBackend"]({
              build: function build() {
                return new XMLHttpRequest();
              }
            }));
          }
        }]);

        return Controller;
      }();

      Controller.ctorParameters = function () {
        return [{
          type: String
        }];
      };

      Controller = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], Controller);
      /***/
    },

    /***/
    "./src/app/controller/FabricanteController.ts":
    /*!****************************************************!*\
      !*** ./src/app/controller/FabricanteController.ts ***!
      \****************************************************/

    /*! exports provided: FabricanteController */

    /***/
    function srcAppControllerFabricanteControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricanteController", function () {
        return FabricanteController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var FabricanteController = /*#__PURE__*/function (_Controller__WEBPACK_) {
        _inherits(FabricanteController, _Controller__WEBPACK_);

        var _super2 = _createSuper(FabricanteController);

        function FabricanteController() {
          _classCallCheck(this, FabricanteController);

          return _super2.call(this, '/fabricantes');
        }

        return FabricanteController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      FabricanteController.ctorParameters = function () {
        return [];
      };

      FabricanteController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FabricanteController);
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
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _constants_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constants/Messages */
      "./src/app/constants/Messages.ts");
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


      var LoadController = /*#__PURE__*/function () {
        function LoadController(loadingController) {
          _classCallCheck(this, LoadController);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        _createClass(LoadController, [{
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
                      return this.loadingController.create({
                        message: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_loading,
                        cssClass: 'load-controller',
                        translucent: false,
                        showBackdrop: false,
                        spinner: "dots",
                        keyboardClose: true,
                        backdropDismiss: false
                      }).then(function (a) {
                        a.present().then(function () {
                          if (!_this.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
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
                      this.isLoading = false;
                      _context2.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
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
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _constants_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constants/Messages */
      "./src/app/constants/Messages.ts");

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
                        header: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_title,
                        message: message,
                        buttons: [{
                          text: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_no,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            result = false;
                          }
                        }, {
                          text: _constants_Messages__WEBPACK_IMPORTED_MODULE_3__["Messages"].dialogs_confimation_yes,
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
    "./src/app/controller/ProdutoCategoriaController.ts":
    /*!**********************************************************!*\
      !*** ./src/app/controller/ProdutoCategoriaController.ts ***!
      \**********************************************************/

    /*! exports provided: ProdutoCategoriaController */

    /***/
    function srcAppControllerProdutoCategoriaControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoCategoriaController", function () {
        return ProdutoCategoriaController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var ProdutoCategoriaController = /*#__PURE__*/function (_Controller__WEBPACK_2) {
        _inherits(ProdutoCategoriaController, _Controller__WEBPACK_2);

        var _super3 = _createSuper(ProdutoCategoriaController);

        function ProdutoCategoriaController() {
          _classCallCheck(this, ProdutoCategoriaController);

          return _super3.call(this, '/produtos-categorias');
        }

        return ProdutoCategoriaController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      ProdutoCategoriaController.ctorParameters = function () {
        return [];
      };

      ProdutoCategoriaController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProdutoCategoriaController);
      /***/
    },

    /***/
    "./src/app/controller/ProdutoController.ts":
    /*!*************************************************!*\
      !*** ./src/app/controller/ProdutoController.ts ***!
      \*************************************************/

    /*! exports provided: ProdutoController */

    /***/
    function srcAppControllerProdutoControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoController", function () {
        return ProdutoController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var ProdutoController = /*#__PURE__*/function (_Controller__WEBPACK_3) {
        _inherits(ProdutoController, _Controller__WEBPACK_3);

        var _super4 = _createSuper(ProdutoController);

        function ProdutoController() {
          _classCallCheck(this, ProdutoController);

          return _super4.call(this, '/produtos');
        }

        return ProdutoController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      ProdutoController.ctorParameters = function () {
        return [];
      };

      ProdutoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProdutoController);
      /***/
    },

    /***/
    "./src/app/controller/ServicoController.ts":
    /*!*************************************************!*\
      !*** ./src/app/controller/ServicoController.ts ***!
      \*************************************************/

    /*! exports provided: ServicoController */

    /***/
    function srcAppControllerServicoControllerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicoController", function () {
        return ServicoController;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var ServicoController = /*#__PURE__*/function (_Controller__WEBPACK_4) {
        _inherits(ServicoController, _Controller__WEBPACK_4);

        var _super5 = _createSuper(ServicoController);

        function ServicoController() {
          _classCallCheck(this, ServicoController);

          return _super5.call(this, '/servicos');
        }

        return ServicoController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      ServicoController.ctorParameters = function () {
        return [];
      };

      ServicoController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ServicoController);
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
      "../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Controller */
      "./src/app/controller/Controller.ts");

      var UnidadeController = /*#__PURE__*/function (_Controller__WEBPACK_5) {
        _inherits(UnidadeController, _Controller__WEBPACK_5);

        var _super6 = _createSuper(UnidadeController);

        function UnidadeController() {
          _classCallCheck(this, UnidadeController);

          return _super6.call(this, '/unidades');
        }

        return UnidadeController;
      }(_Controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]);

      UnidadeController.ctorParameters = function () {
        return [];
      };

      UnidadeController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UnidadeController);
      /***/
    },

    /***/
    "./src/app/utils/UtilApp.ts":
    /*!**********************************!*\
      !*** ./src/app/utils/UtilApp.ts ***!
      \**********************************/

    /*! exports provided: UtilApp */

    /***/
    function srcAppUtilsUtilAppTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilApp", function () {
        return UtilApp;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../node_modules/tslib/tslib.es6.js");

      var UtilApp = /*#__PURE__*/function () {
        function UtilApp() {
          _classCallCheck(this, UtilApp);
        }

        _createClass(UtilApp, null, [{
          key: "formatCurrencyToBrlAsync",
          value: function formatCurrencyToBrlAsync(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var promise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        value = value + '';

                        if (!value) {
                          value = 0;
                        }

                        var v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
                        var m = v[0].split('').reverse().join('').match(/.{1,3}/g);

                        for (var i = 0; i < m.length; i++) {
                          m[i] = m[i].split('').reverse().join('') + '.';
                        }

                        var r = m.reverse().join('');
                        var result = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
                        resolve(result);
                      });
                      return _context6.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "formatCurrencyToBrl",
          value: function formatCurrencyToBrl(value) {
            if (!value) {
              return;
            }

            value = value + '';

            if (!value) {
              value = 0;
            }

            var v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
            var m = v[0].split('').reverse().join('').match(/.{1,3}/g);

            for (var i = 0; i < m.length; i++) {
              m[i] = m[i].split('').reverse().join('') + '.';
            }

            var r = m.reverse().join('');
            var result = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
            return result;
          }
          /** FORMATATA CAMPO PARA DECIMAL  - 1000,00 */

        }, {
          key: "formatCurrencyToDecimal",
          value: function formatCurrencyToDecimal(value) {
            value = value + '';
            value = value.replace('.', '');
            value = value.replace(',', '.');
            return value;
          }
          /** FORMATATA CAMPO PARA DECIMAL  - 1000,00 */

        }, {
          key: "formatDate",
          value: function formatDate(value) {
            console.log('dt');
            var date = new Date(value);
            var dd = date.getDate() + 1;
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var ddStr = dd + '';
            var mmStr = mm + '';
            var yyyyStr = yyyy + '';

            if (dd < 10) {
              ddStr = '0' + ddStr;
            }

            if (mm < 10) {
              mmStr = '0' + mmStr;
            }

            var dataStr = ddStr + '/' + mmStr + '/' + yyyyStr;
            return dataStr;
          }
        }]);

        return UtilApp;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-cadastro-cliente-cliente-list-cliente-list-module~pages-cadastro-fabricante-fabricante~f321a460-es5.js.map