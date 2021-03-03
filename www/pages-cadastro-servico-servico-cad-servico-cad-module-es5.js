(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-servico-servico-cad-servico-cad-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroServicoServicoCadServicoCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.servico_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_nome}}</ion-label>\n                    <ion-input formControlName=\"nome\" #focusInit [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n\n            </ion-col>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_preco}}</ion-label>\n                    <ion-input formControlName=\"preco\" (keyup)=\"formatPreco($event.target)\"\n                        [attr.maxLength]=\"entity.preco_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.servico_cad_field_label_observacao}}</ion-label>\n                    <ion-input formControlName=\"observacao\" [attr.maxLength]=\"entity.observacao_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/constants/Constants.ts":
    /*!****************************************!*\
      !*** ./src/app/constants/Constants.ts ***!
      \****************************************/

    /*! exports provided: Constants */

    /***/
    function srcAppConstantsConstantsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.UFS = [{
        codigo_uf: 27,
        uf: 'AL',
        nome: 'Alagoas'
      }, {
        codigo_uf: 12,
        uf: 'AC',
        nome: 'Acre'
      }, {
        codigo_uf: 16,
        uf: 'AP',
        nome: 'Amapá'
      }, {
        codigo_uf: 13,
        uf: 'AM',
        nome: 'Amazonas'
      }, {
        codigo_uf: 29,
        uf: 'BA',
        nome: 'Bahia'
      }, {
        codigo_uf: 23,
        uf: 'CE',
        nome: 'Ceará'
      }, {
        codigo_uf: 53,
        uf: 'DF',
        nome: 'Distrito Federal'
      }, {
        codigo_uf: 32,
        uf: 'ES',
        nome: 'Espírito Santo'
      }, {
        codigo_uf: 52,
        uf: 'GO',
        nome: 'Goías'
      }, {
        codigo_uf: 21,
        uf: 'MA',
        nome: 'Maranhão'
      }, {
        codigo_uf: 51,
        uf: 'MT',
        nome: 'Mato Grosso'
      }, {
        codigo_uf: 50,
        uf: 'MS',
        nome: 'Mato G. do Sul'
      }, {
        codigo_uf: 31,
        uf: 'MG',
        nome: 'Minas Gerais'
      }, {
        codigo_uf: 15,
        uf: 'PA',
        nome: 'Pará'
      }, {
        codigo_uf: 25,
        uf: 'PB',
        nome: 'Paraíba'
      }, {
        codigo_uf: 41,
        uf: 'PR',
        nome: 'Paraná'
      }, {
        codigo_uf: 26,
        uf: 'PE',
        nome: 'Pernambuco'
      }, {
        codigo_uf: 22,
        uf: 'PI',
        nome: 'Piauí'
      }, {
        codigo_uf: 33,
        uf: 'RJ',
        nome: 'Rio de Janeiro'
      }, {
        codigo_uf: 24,
        uf: 'RN',
        nome: 'Rio G. do Norte'
      }, {
        codigo_uf: 43,
        uf: 'RS',
        nome: 'Rio G. do Sul'
      }, {
        codigo_uf: 11,
        uf: 'RO',
        nome: 'Rondônia'
      }, {
        codigo_uf: 14,
        uf: 'RR',
        nome: 'Roraíma'
      }, {
        codigo_uf: 42,
        uf: 'SC',
        nome: 'Santa Catarina'
      }, {
        codigo_uf: 35,
        uf: 'SP',
        nome: 'São Paulo'
      }, {
        codigo_uf: 28,
        uf: 'SE',
        nome: 'Sergipe'
      }, {
        codigo_uf: 17,
        uf: 'TO',
        nome: 'Tocantins'
      }];
      /***/
    },

    /***/
    "./src/app/entity/Entity.ts":
    /*!**********************************!*\
      !*** ./src/app/entity/Entity.ts ***!
      \**********************************/

    /*! exports provided: Entity */

    /***/
    function srcAppEntityEntityTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Entity", function () {
        return Entity;
      });

      var Entity = /*#__PURE__*/function () {
        function Entity() {
          _classCallCheck(this, Entity);

          this.url_base = 'http://api-geatec-com-br.umbler.net';
        }

        _createClass(Entity, [{
          key: "toObject",
          value: function toObject(json) {
            return Object.assign(json, this);
          }
        }]);

        return Entity;
      }();
      /***/

    },

    /***/
    "./src/app/entity/Servico.ts":
    /*!***********************************!*\
      !*** ./src/app/entity/Servico.ts ***!
      \***********************************/

    /*! exports provided: Servico */

    /***/
    function srcAppEntityServicoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Servico", function () {
        return Servico;
      });
      /* harmony import */


      var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Entity */
      "./src/app/entity/Entity.ts");

      var Servico = /*#__PURE__*/function (_Entity__WEBPACK_IMPO) {
        _inherits(Servico, _Entity__WEBPACK_IMPO);

        var _super = _createSuper(Servico);

        function Servico() {
          var _this;

          _classCallCheck(this, Servico);

          _this = _super.apply(this, arguments);
          /**  FIELDS LENGTH's */

          _this.nome_length = 50;
          _this.preco_length = 9;
          _this.observacao_length = 100;
          return _this;
        }

        return Servico;
      }(_Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/constants/Constants */
      "./src/app/constants/Constants.ts");
      /* harmony import */


      var src_app_constants_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/constants/Messages */
      "./src/app/constants/Messages.ts");
      /* harmony import */


      var src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/controller/ClienteController */
      "./src/app/controller/ClienteController.ts");
      /* harmony import */


      var src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/controller/FabricanteController */
      "./src/app/controller/FabricanteController.ts");
      /* harmony import */


      var src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/controller/LoadController */
      "./src/app/controller/LoadController.ts");
      /* harmony import */


      var src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/controller/MessageController */
      "./src/app/controller/MessageController.ts");
      /* harmony import */


      var src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/controller/ProdutoCategoriaController */
      "./src/app/controller/ProdutoCategoriaController.ts");
      /* harmony import */


      var src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/controller/ServicoController */
      "./src/app/controller/ServicoController.ts");
      /* harmony import */


      var src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/controller/UnidadeController */
      "./src/app/controller/UnidadeController.ts");
      /* harmony import */


      var src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/controller/ProdutoController */
      "./src/app/controller/ProdutoController.ts"); //import { CurrencyPipe } from '@angular/common';


      var GenericCadPage = /*#__PURE__*/function () {
        /**************************************** */
        function GenericCadPage(unidadeController, clienteController, produtoCategoriaController, fabricanteController, servicoController, produtoController, navCtrl, router, messageController, currencyPipe, routerActive, loadingController) {
          _classCallCheck(this, GenericCadPage);

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

        _createClass(GenericCadPage, [{
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
          key: "isAlterForm",
          value: function isAlterForm() {
            return this.entity.id != null;
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.navCtrl.back();
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return this.loadingController.showLoading();
          }
        }, {
          key: "focusInit",
          value: function focusInit() {
            var _this2 = this;

            setTimeout(function () {
              return _this2.inputFocusInit.setFocus();
            }, 400);
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
            var _this3 = this;

            this.routerActive.params.subscribe(function (params) {
              var getNav = _this3.router.getCurrentNavigation();

              if (getNav.extras.state) {
                var result = getNav.extras.state.postParams;
                _this3.entity = result.entity;
                _this3.entityIndex = result.index;
              }
            });
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.navCtrl.navigateForward('/' + url);
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.hideLoading();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeValidation",
          value: function removeValidation(nameField) {
            this.form.get(nameField).clearValidators();
            this.form.get(nameField).updateValueAndValidity();
          }
        }, {
          key: "addValidation",
          value: function addValidation(nameField, validatiors) {
            this.form.get(nameField).setValidators(validatiors);
            this.form.get(nameField).updateValueAndValidity();
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
          type: src_app_controller_UnidadeController__WEBPACK_IMPORTED_MODULE_13__["UnidadeController"]
        }, {
          type: src_app_controller_ClienteController__WEBPACK_IMPORTED_MODULE_7__["ClienteController"]
        }, {
          type: src_app_controller_ProdutoCategoriaController__WEBPACK_IMPORTED_MODULE_11__["ProdutoCategoriaController"]
        }, {
          type: src_app_controller_FabricanteController__WEBPACK_IMPORTED_MODULE_8__["FabricanteController"]
        }, {
          type: src_app_controller_ServicoController__WEBPACK_IMPORTED_MODULE_12__["ServicoController"]
        }, {
          type: src_app_controller_ProdutoController__WEBPACK_IMPORTED_MODULE_14__["ProdutoController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_controller_MessageController__WEBPACK_IMPORTED_MODULE_10__["MessageController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_controller_LoadController__WEBPACK_IMPORTED_MODULE_9__["LoadController"]
        }];
      };

      GenericCadPage.propDecorators = {
        inputFocusInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['focusInit', {
            "static": false
          }]
        }]
      };
      GenericCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-generic-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generic-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.html"))["default"]
      })], GenericCadPage);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ServicoCadPageRoutingModule */

    /***/
    function srcAppPagesCadastroServicoServicoCadServicoCadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicoCadPageRoutingModule", function () {
        return ServicoCadPageRoutingModule;
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


      var _servico_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servico-cad.page */
      "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts");

      var routes = [{
        path: '',
        component: _servico_cad_page__WEBPACK_IMPORTED_MODULE_3__["ServicoCadPage"]
      }];

      var ServicoCadPageRoutingModule = function ServicoCadPageRoutingModule() {
        _classCallCheck(this, ServicoCadPageRoutingModule);
      };

      ServicoCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicoCadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/servico/servico-cad/servico-cad.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ServicoCadPageModule */

    /***/
    function srcAppPagesCadastroServicoServicoCadServicoCadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicoCadPageModule", function () {
        return ServicoCadPageModule;
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


      var _servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servico-cad-routing.module */
      "./src/app/pages/cadastro/servico/servico-cad/servico-cad-routing.module.ts");
      /* harmony import */


      var _servico_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./servico-cad.page */
      "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts");

      var ServicoCadPageModule = function ServicoCadPageModule() {
        _classCallCheck(this, ServicoCadPageModule);
      };

      ServicoCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicoCadPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__["ServicoCadPage"]]
      })], ServicoCadPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.ts ***!
      \************************************************************************/

    /*! exports provided: ServicoCadPage */

    /***/
    function srcAppPagesCadastroServicoServicoCadServicoCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicoCadPage", function () {
        return ServicoCadPage;
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
      /* harmony import */


      var src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/entity/Servico */
      "./src/app/entity/Servico.ts");
      /* harmony import */


      var src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/UtilApp */
      "./src/app/utils/UtilApp.ts");

      var ServicoCadPage = /*#__PURE__*/function (_generic_generic_cad_) {
        _inherits(ServicoCadPage, _generic_generic_cad_);

        var _super2 = _createSuper(ServicoCadPage);

        function ServicoCadPage() {
          _classCallCheck(this, ServicoCadPage);

          return _super2.apply(this, arguments);
        }

        _createClass(ServicoCadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormFields();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.focusInit();
          }
        }, {
          key: "createFormFields",
          value: function createFormFields() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              preco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.preco),
              observacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.observacao)
            });
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            if (this.isAlterForm()) {
              this.entityToForm();
            } else {
              this.entity = new src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__["Servico"]();
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.validForm()) {
                        this.showLoading();
                        this.formToEntity();
                        this.servicoController.salvarOuAlterar(this.entity).subscribe(function (data) {
                          if (!_this4.entity.id) _this4.entity.id = data.id;

                          _this4.messageController.showMessageToast(_this4.messages.dialogs_register_save);

                          _this4.navigatePostParams('servico-list', _this4.entity, _this4.entityIndex);

                          _this4.hideLoading();
                        });
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "formatPreco",
          value: function formatPreco(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrlAsync(event.value);

                    case 2:
                      event.value = _context3.sent;
                      this.precoFormatted = event.value;

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "formToEntity",
          value: function formToEntity() {
            this.entity.preco = src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToDecimal(this.precoFormatted);
          }
        }, {
          key: "entityToForm",
          value: function entityToForm() {
            this.entity = Object.assign(new src_app_entity_Servico__WEBPACK_IMPORTED_MODULE_4__["Servico"](), this.entity);
            this.entity.preco = src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrl(this.entity.preco);
            this.precoFormatted = this.entity.preco;
          }
        }]);

        return ServicoCadPage;
      }(_generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"]);

      ServicoCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servico-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./servico-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/servico/servico-cad/servico-cad.page.html"))["default"]
      })], ServicoCadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-servico-servico-cad-servico-cad-module-es5.js.map