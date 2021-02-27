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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cliente-cliente-cad-cliente-cad-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroClienteClienteCadClienteCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{messages.cliente_cad_title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"submitForm()\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <ion-row>\n            <ion-col>\n                <ion-segment formControlName=\"isPessoaJuridica\" (ionChange)=\"selectTipoPessoa($event)\">\n                    <ion-segment-button value=\"false\"  *ngIf=\"isShowTabPessoaFisica\">\n                        <ion-icon name=\"person\"></ion-icon>\n                        <ion-label class=\"text-no-transformer\">{{messages.cliente_cad_tab_pessoa_fisica_title}}\n                        </ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"true\" *ngIf=\"isShowTabPessoaJuridica\">\n                        <ion-icon name=\"business\"></ion-icon>\n                        <ion-label class=\"text-no-transformer\">{{messages.cliente_cad_tab_pessoa_juridica_title}}\n                        </ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <div *ngIf=\"!isPessoaJuridica\">\n\n                    <ion-item lines=\"full\">\n                        <ion-label position=\"floating\">{{messages.cliente_cad_field_label_nome}}</ion-label>\n                        <ion-input formControlName=\"nome\" #inputNome [attr.maxLength]=\"entity.nome_length\"></ion-input>\n                    </ion-item>\n\n                    <!-- Error messages -->\n                    <div *ngIf=\"isSubmitted && errorControl.nome.errors?.required\" class=\"error-message\">\n                        {{ messages.field_required }}\n                    </div>\n\n                </div>\n\n                <div *ngIf=\"isPessoaJuridica\">\n\n                    <ion-item lines=\"full\">\n                        <ion-label position=\"floating\">{{messages.cliente_cad_field_label_razao_social}}</ion-label>\n                        <ion-input formControlName=\"razaoSocial\" #inputRazaoSocial\n                            [attr.maxLength]=\"entity.razaoSocial_length\"></ion-input>\n                    </ion-item>\n\n                    <!-- Error messages -->\n                    <div *ngIf=\"isSubmitted && errorControl.razaoSocial.errors?.required\" class=\"error-message\">\n                        {{ messages.field_required }}\n                    </div>\n                </div>\n\n            </ion-col>\n\n            <ion-col *ngIf=\"!isPessoaJuridica\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cpf}}</ion-label>\n                    <ion-input formControlName=\"cpf\" simpleMask=\"999.999.999-99\" class=\"uppercase\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"isSubmitted && errorControl.cpf.errors?.cpfNotValid\" class=\"error-message\">\n                    {{ messages.cpf_invalid }}\n                </div>\n            </ion-col>\n\n            <ion-col *ngIf=\"isPessoaJuridica\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cnpj}}</ion-label>\n                    <ion-input formControlName=\"cnpj\" simpleMask=\"99.999.999/9999-99\" [clearIfNotMatch]=\"true\"\n                        class=\"uppercase\"></ion-input>\n                </ion-item>\n\n                <!-- Error messages -->\n                <div *ngIf=\"isSubmitted && errorControl.cnpj.errors?.required\" class=\"error-message\">\n                    {{ messages.field_required }}\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"isPessoaJuridica\">\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_fantasia}}\n                    </ion-label>\n                    <ion-input formControlName=\"fantasia\" [attr.maxLength]=\"entity.fantasia_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">\n                        {{messages.cliente_cad_field_label_inscricao_estadual}}</ion-label>\n                    <ion-input formControlName=\"inscricaoEstadual\" [attr.maxLength]=\"entity.inscricaoEstadual_length\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_endereco}}\n                    </ion-label>\n                    <ion-input formControlName=\"endereco\" [attr.maxLength]=\"entity.endereco_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cidade}}\n                    </ion-label>\n                    <ion-input formControlName=\"cidade\" [attr.maxLength]=\"entity.cidade_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"3\">\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_uf}}</ion-label>\n                    <ion-select formControlName=\"uf\">\n                        <ion-select-option *ngFor=\"let item of listUf\" value=\"{{item.uf}}\">\n                            {{ item.uf }}\n                        </ion-select-option>\n                    </ion-select>\n\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_cep}}</ion-label>\n                    <ion-input formControlName=\"cep\" simpleMask=\"99.999-999\" [clearIfNotMatch]=\"true\">\n                    </ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_complemento}}</ion-label>\n                    <ion-input formControlName=\"complemento\" [attr.maxLength]=\"entity.complemento_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_telefone}}</ion-label>\n                    <ion-input formControlName=\"telefone\" simpleMask=\"(99) 99999-9999\"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_celular}}</ion-label>\n                    <ion-input formControlName=\"celular\" simpleMask=\"(99) 99999-9999\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">{{messages.cliente_cad_field_label_email}}</ion-label>\n                    <ion-input formControlName=\"email\" [attr.maxLength]=\"entity.email_length\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/entity/Cliente.ts":
    /*!***********************************!*\
      !*** ./src/app/entity/Cliente.ts ***!
      \***********************************/

    /*! exports provided: Cliente */

    /***/
    function srcAppEntityClienteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cliente", function () {
        return Cliente;
      });
      /* harmony import */


      var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Entity */
      "./src/app/entity/Entity.ts");

      var Cliente = /*#__PURE__*/function (_Entity__WEBPACK_IMPO) {
        _inherits(Cliente, _Entity__WEBPACK_IMPO);

        var _super = _createSuper(Cliente);

        function Cliente() {
          var _this;

          _classCallCheck(this, Cliente);

          _this = _super.apply(this, arguments);
          /**  FIELDS LENGTH's */

          _this.nome_length = 100;
          _this.endereco_length = 150;
          _this.cidade_length = 30;
          _this.uf_length = 2;
          _this.cep_length = 10;
          _this.cpf_length = 14;
          _this.cnpj_length = 18;
          _this.razaoSocial_length = 100;
          _this.fantasia_length = 100;
          _this.telefone_length = 15;
          _this.celular_length = 15;
          _this.email_length = 100;
          _this.complemento_length = 100;
          return _this;
        }

        return Cliente;
      }(_Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ClienteCadPageRoutingModule */

    /***/
    function srcAppPagesCadastroClienteClienteCadClienteCadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteCadPageRoutingModule", function () {
        return ClienteCadPageRoutingModule;
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


      var _cliente_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cliente-cad.page */
      "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts");

      var routes = [{
        path: '',
        component: _cliente_cad_page__WEBPACK_IMPORTED_MODULE_3__["ClienteCadPage"]
      }];

      var ClienteCadPageRoutingModule = function ClienteCadPageRoutingModule() {
        _classCallCheck(this, ClienteCadPageRoutingModule);
      };

      ClienteCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ClienteCadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ClienteCadPageModule */

    /***/
    function srcAppPagesCadastroClienteClienteCadClienteCadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteCadPageModule", function () {
        return ClienteCadPageModule;
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


      var _cliente_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cliente-cad-routing.module */
      "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad-routing.module.ts");
      /* harmony import */


      var _cliente_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cliente-cad.page */
      "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts");
      /* harmony import */


      var ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-ion-simple-mask */
      "./node_modules/ngx-ion-simple-mask/__ivy_ngcc__/fesm2015/ngx-ion-simple-mask.js");

      var ClienteCadPageModule = function ClienteCadPageModule() {
        _classCallCheck(this, ClienteCadPageModule);
      };

      ClienteCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cliente_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteCadPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_7__["SimpleMaskModule"]],
        declarations: [_cliente_cad_page__WEBPACK_IMPORTED_MODULE_6__["ClienteCadPage"]]
      })], ClienteCadPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.ts ***!
      \************************************************************************/

    /*! exports provided: ClienteCadPage */

    /***/
    function srcAppPagesCadastroClienteClienteCadClienteCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteCadPage", function () {
        return ClienteCadPage;
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


      var src_app_utils_UtilValidators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/UtilValidators */
      "./src/app/utils/UtilValidators.ts");
      /* harmony import */


      var src_app_entity_Cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/entity/Cliente */
      "./src/app/entity/Cliente.ts");

      var ClienteCadPage = /*#__PURE__*/function (_generic_generic_cad_) {
        _inherits(ClienteCadPage, _generic_generic_cad_);

        var _super2 = _createSuper(ClienteCadPage);

        function ClienteCadPage() {
          var _this2;

          _classCallCheck(this, ClienteCadPage);

          _this2 = _super2.apply(this, arguments);
          _this2.isPessoaJuridica = false;
          _this2.isShowTabPessoaFisica = true;
          _this2.isShowTabPessoaJuridica = true;
          return _this2;
        }

        _createClass(ClienteCadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormFields();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.hideLoading();
            this.initForm();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.showFocus();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            /** ALTERAR */
            if (this.isAlterCad()) {
              this.isPessoaJuridica = this.entity.isPessoaJuridica;
              /** Ocultar Tab por tipo de pessoa  */

              this.isShowTabPessoaJuridica = this.isPessoaJuridica;
              this.isShowTabPessoaFisica = !this.isPessoaJuridica;
            } else {
              this.entity = new src_app_entity_Cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
            }
          }
        }, {
          key: "createFormFields",
          value: function createFormFields() {
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
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.configValidations();

                      if (this.validForm()) {
                        this.showLoading();
                        /** PJ OU PF */

                        this.entity.isPessoaJuridica = this.isPessoaJuridica;
                        this.clearEntity();
                        this.clienteController.salvarOuAlterar(this.entity).subscribe(function (data) {
                          // NOVO REGISTRO//
                          if (!_this3.entity.id) _this3.entity.id = data.id;

                          _this3.messageController.showMessageToast(_this3.messages.dialogs_register_save);

                          _this3.navigatePostParams('cliente-list', _this3.entity, _this3.entityIndex);

                          _this3.hideLoading();
                        });
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectTipoPessoa",
          value: function selectTipoPessoa(event) {
            this.isPessoaJuridica = !this.isPessoaJuridica;
            this.showFocus();
          }
        }, {
          key: "showFocus",
          value: function showFocus() {
            var _this4 = this;

            if (this.isPessoaJuridica) {
              setTimeout(function () {
                return _this4.inputRazaoSocial.setFocus();
              }, 400);
            } else {
              setTimeout(function () {
                return _this4.inputNome.setFocus();
              }, 400);
            }
          }
        }, {
          key: "clearEntity",
          value: function clearEntity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.isPessoaJuridica) {
                        this.entity.nome = null;
                        this.entity.cpf = null;
                      } else {
                        this.entity.razaoSocial = null;
                        this.entity.fantasia = null;
                        this.entity.inscricaoEstadual = null;
                        this.entity.cnpj = null;
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
          key: "configValidations",
          value: function configValidations() {
            if (this.isPessoaJuridica) {
              this.addValidation('razaoSocial', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
              this.addValidation('cnpj', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
              this.removeValidation('nome');
              this.removeValidation('cpf');
            } else {
              this.addValidation('nome', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
              this.addValidation('cpf', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_utils_UtilValidators__WEBPACK_IMPORTED_MODULE_4__["UtilValidators"].ValidaCpf]));
              this.removeValidation('razaoSocial');
              this.removeValidation('cnpj');
            }
          }
        }]);

        return ClienteCadPage;
      }(_generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_3__["GenericCadPage"]);

      ClienteCadPage.propDecorators = {
        inputNome: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputNome', {
            "static": false
          }]
        }],
        inputRazaoSocial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputRazaoSocial', {
            "static": false
          }]
        }]
      };
      ClienteCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cliente-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cliente/cliente-cad/cliente-cad.page.html"))["default"]
      })], ClienteCadPage);
      /***/
    },

    /***/
    "./src/app/utils/UtilValidators.ts":
    /*!*****************************************!*\
      !*** ./src/app/utils/UtilValidators.ts ***!
      \*****************************************/

    /*! exports provided: UtilValidators */

    /***/
    function srcAppUtilsUtilValidatorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilValidators", function () {
        return UtilValidators;
      });

      var UtilValidators = /*#__PURE__*/function () {
        function UtilValidators() {
          _classCallCheck(this, UtilValidators);
        }

        _createClass(UtilValidators, null, [{
          key: "ValidaCpf",
          value: function ValidaCpf(controle) {
            var cpf = controle.value + '';
            cpf = cpf.split('.').join('');
            cpf = cpf.split('-').join('');

            if (cpf) {
              var numbers, digits, sum, i, result, equalDigits;
              equalDigits = 1;

              if (cpf.length < 11) {
                return {
                  cpfNotValid: true
                };
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

                result = sum % 11 < 2 ? 0 : 11 - sum % 11;

                if (result !== Number(digits.charAt(0))) {
                  return {
                    cpfNotValid: true
                  };
                }

                numbers = cpf.substring(0, 10);
                sum = 0;

                for (i = 11; i > 1; i--) {
                  sum += numbers.charAt(11 - i) * i;
                }

                result = sum % 11 < 2 ? 0 : 11 - sum % 11;

                if (result !== Number(digits.charAt(1))) {
                  return {
                    cpfNotValid: true
                  };
                }

                return null;
              } else {
                return {
                  cpfNotValid: true
                };
              }
            }

            return null;
          }
        }]);

        return UtilValidators;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-cliente-cliente-cad-cliente-cad-module-es5.js.map