(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-unidade-unidade-cad-unidade-cad-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroGenericGenericCadGenericCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>generic-cad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroUnidadeUnidadeCadUnidadeCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Unidade</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Nome</ion-label>\n                    <ion-input formControlName=\"nome\" #autofocus maxlength=\"20\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div class=\"error-message\" *ngIf=\"isSubmitted && errorControl.nome.errors?.required\">\n                    * campo obrigatório\n                </div>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">Sigla</ion-label>\n                    <ion-input formControlName=\"sigla\" maxlength=\"5\" class=\"upper-case\" ></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div class=\"error-message\" *ngIf=\"isSubmitted && errorControl.sigla.errors?.required\">\n                    * campo obrigatório\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Descrição</ion-label>\n                    <ion-input formControlName=\"descricao\" maxlength=\"80\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n</ion-content>";
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
    "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts ***!
      \************************************************************************/

    /*! exports provided: GenericCadPage */

    /***/
    function srcAppPagesCadastroGenericGenericCadGenericCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericCadPage", function () {
        return GenericCadPage;
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


      var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/controller/LoadController */
      "./src/app/controller/LoadController.ts");
      /* harmony import */


      var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/controller/MessageController */
      "./src/app/controller/MessageController.ts");
      /* harmony import */


      var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/controller/UnidadeController */
      "./src/app/controller/UnidadeController.ts");

      var GenericCadPage = /*#__PURE__*/function () {
        /**************************************** */
        function GenericCadPage(unidadeController, navCtrl, router, messageController, routerActive, loadingController) {
          _classCallCheck(this, GenericCadPage);

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

        _createClass(GenericCadPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            setTimeout(function () {
              return _this.autofocuInputs.setFocus();
            }, 300);
          }
        }, {
          key: "validForm",
          value: function validForm() {
            this.isSubmitted = true;
            if (!this.form.valid) return false;else {
              var id = this.entity.id;
              this.entity = this.form.value;
              this.entity.id = id;
              return true;
            }
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
          key: "navigateGetParams",
          value: function navigateGetParams() {
            var _this2 = this;

            this.routerActive.params.subscribe(function (params) {
              var getNav = _this2.router.getCurrentNavigation();

              if (getNav.extras.state) {
                var result = getNav.extras.state.postParams;
                _this2.entity = result.entity;
                _this2.entityIndex = result.index;
              }
            });
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return this.loadingController.showLoading('Aguarde, por favor...');
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
          key: "errorControl",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return GenericCadPage;
      }();

      GenericCadPage.ctorParameters = function () {
        return [{
          type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_6__["UnidadeController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_5__["MessageController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_4__["LoadController"]
        }];
      };

      GenericCadPage.propDecorators = {
        autofocuInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autofocus', {
            "static": false
          }]
        }]
      };
      GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generic-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html"))["default"]
      })], GenericCadPage);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: UnidadeCadPageRoutingModule */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeCadUnidadeCadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeCadPageRoutingModule", function () {
        return UnidadeCadPageRoutingModule;
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


      var _unidade_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./unidade-cad.page */
      "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts");

      var routes = [{
        path: '',
        component: _unidade_cad_page__WEBPACK_IMPORTED_MODULE_3__["UnidadeCadPage"]
      }];

      var UnidadeCadPageRoutingModule = function UnidadeCadPageRoutingModule() {
        _classCallCheck(this, UnidadeCadPageRoutingModule);
      };

      UnidadeCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UnidadeCadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.module.ts ***!
      \**************************************************************************/

    /*! exports provided: UnidadeCadPageModule */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeCadUnidadeCadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeCadPageModule", function () {
        return UnidadeCadPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _unidade_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./unidade-cad-routing.module */
      "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad-routing.module.ts");
      /* harmony import */


      var _unidade_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./unidade-cad.page */
      "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts");
      /* harmony import */


      var ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-ion-simple-mask */
      "./node_modules/ngx-ion-simple-mask/__ivy_ngcc__/fesm2015/ngx-ion-simple-mask.js");

      var UnidadeCadPageModule = function UnidadeCadPageModule() {
        _classCallCheck(this, UnidadeCadPageModule);
      };

      UnidadeCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _unidade_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnidadeCadPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__["SimpleMaskModule"]],
        declarations: [_unidade_cad_page__WEBPACK_IMPORTED_MODULE_6__["UnidadeCadPage"]]
      })], UnidadeCadPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.ts ***!
      \************************************************************************/

    /*! exports provided: UnidadeCadPage */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeCadUnidadeCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeCadPage", function () {
        return UnidadeCadPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../generic/generic-cad/generic-cad.page */
      "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");

      var UnidadeCadPage = /*#__PURE__*/function (_generic_generic_cad_) {
        _inherits(UnidadeCadPage, _generic_generic_cad_);

        var _super = _createSuper(UnidadeCadPage);

        function UnidadeCadPage() {
          _classCallCheck(this, UnidadeCadPage);

          return _super.apply(this, arguments);
        }

        _createClass(UnidadeCadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormFields();
          }
        }, {
          key: "createFormFields",
          value: function createFormFields() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              sigla: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.sigla, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.descricao)
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this3 = this;

              var validForm, unidade;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      validForm = this.validForm();

                      if (validForm) {
                        this.showLoading(); //MELHORAR ISSO //

                        unidade = this.entity;
                        unidade.sigla = unidade.sigla.toUpperCase();
                        this.unidadeController.salvarOuAlterar(unidade).subscribe(function (data) {
                          // NOVO REGISTRO//
                          if (!_this3.entity.id) _this3.entity.id = data.id;

                          _this3.messageController.showMessageToast('Registro salvo');

                          _this3.navigatePostParams('unidade-list', _this3.entity, _this3.entityIndex);

                          _this3.hideLoading();
                        });
                      }

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return UnidadeCadPage;
      }(_generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"]);

      UnidadeCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unidade-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unidade-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-cad/unidade-cad.page.html"))["default"]
      })], UnidadeCadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-unidade-unidade-cad-unidade-cad-module-es5.js.map