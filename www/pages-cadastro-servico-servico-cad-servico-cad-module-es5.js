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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-servico-servico-cad-servico-cad-module"], {
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
      "../node_modules/tslib/tslib.es6.js");
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
      "../node_modules/tslib/tslib.es6.js");
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
      "../node_modules/tslib/tslib.es6.js");
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
            this.initForm();
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              preco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.preco),
              observacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.observacao)
            });
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.validForm()) {
                        this.showLoading();
                        this.formToEntity();
                        this.servicoController.salvarOuAlterar(this.entity).subscribe(function (data) {
                          if (!_this2.entity.id) _this2.entity.id = data.id;

                          _this2.messageController.showMessageToast(_this2.messages.dialogs_register_save);

                          _this2.navigatePostParams('servico-list', _this2.entity, _this2.entityIndex);

                          _this2.hideLoading();
                        });
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "formatPreco",
          value: function formatPreco(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrlAsync(event.value);

                    case 2:
                      event.value = _context2.sent;
                      this.precoFormatted = event.value;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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
            this.precoFormatted = src_app_utils_UtilApp__WEBPACK_IMPORTED_MODULE_5__["UtilApp"].formatCurrencyToBrl(this.entity.preco);
            this.entity.preco = this.precoFormatted;
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