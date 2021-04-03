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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-servico-cad-cabecalho-order-servico-cad-cabecalho-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroOrdemServicoOrdemServicoCadOrderServicoCadCabecalhoOrderServicoCadCabecalhoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <ion-row>\n            <ion-col>\n                <app-buscar-cliente  (clienteSelected)=\"onClienteSelected($event)\" ></app-buscar-cliente>\n            </ion-col>\n        </ion-row>\n\n      \n    </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/entity/OrdemServico.ts":
    /*!****************************************!*\
      !*** ./src/app/entity/OrdemServico.ts ***!
      \****************************************/

    /*! exports provided: OrdemServico */

    /***/
    function srcAppEntityOrdemServicoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdemServico", function () {
        return OrdemServico;
      });
      /* harmony import */


      var _Cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Cliente */
      "./src/app/entity/Cliente.ts");
      /* harmony import */


      var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Entity */
      "./src/app/entity/Entity.ts");

      var OrdemServico = /*#__PURE__*/function (_Entity__WEBPACK_IMPO) {
        _inherits(OrdemServico, _Entity__WEBPACK_IMPO);

        var _super = _createSuper(OrdemServico);

        function OrdemServico() {
          var _this;

          _classCallCheck(this, OrdemServico);

          _this = _super.apply(this, arguments);
          _this.itensProdutos = [];
          _this.itensServicos = [];
          _this.cliente = new _Cliente__WEBPACK_IMPORTED_MODULE_0__["Cliente"]();
          return _this;
        }

        return OrdemServico;
      }(_Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]);
      /***/

    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: OrderServicoCadCabecalhoPageRoutingModule */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrderServicoCadCabecalhoOrderServicoCadCabecalhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPageRoutingModule", function () {
        return OrderServicoCadCabecalhoPageRoutingModule;
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


      var _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-servico-cad-cabecalho.page */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts");

      var routes = [{
        path: '',
        component: _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_3__["OrderServicoCadCabecalhoPage"]
      }];

      var OrderServicoCadCabecalhoPageRoutingModule = function OrderServicoCadCabecalhoPageRoutingModule() {
        _classCallCheck(this, OrderServicoCadCabecalhoPageRoutingModule);
      };

      OrderServicoCadCabecalhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderServicoCadCabecalhoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: OrderServicoCadCabecalhoPageModule */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrderServicoCadCabecalhoOrderServicoCadCabecalhoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPageModule", function () {
        return OrderServicoCadCabecalhoPageModule;
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


      var _order_servico_cad_cabecalho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-servico-cad-cabecalho-routing.module */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho-routing.module.ts");
      /* harmony import */


      var _order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-servico-cad-cabecalho.page */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts");
      /* harmony import */


      var src_app_components_buscar_buscar_cliente_buscar_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/buscar/buscar-cliente/buscar-cliente.component */
      "./src/app/components/buscar/buscar-cliente/buscar-cliente.component.ts");

      var OrderServicoCadCabecalhoPageModule = function OrderServicoCadCabecalhoPageModule() {
        _classCallCheck(this, OrderServicoCadCabecalhoPageModule);
      };

      OrderServicoCadCabecalhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_servico_cad_cabecalho_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServicoCadCabecalhoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_order_servico_cad_cabecalho_page__WEBPACK_IMPORTED_MODULE_6__["OrderServicoCadCabecalhoPage"], src_app_components_buscar_buscar_cliente_buscar_cliente_component__WEBPACK_IMPORTED_MODULE_7__["BuscarClienteComponent"]]
      })], OrderServicoCadCabecalhoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: OrderServicoCadCabecalhoPage */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrderServicoCadCabecalhoOrderServicoCadCabecalhoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServicoCadCabecalhoPage", function () {
        return OrderServicoCadCabecalhoPage;
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


      var src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/entity/OrdemServico */
      "./src/app/entity/OrdemServico.ts");
      /* harmony import */


      var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../generic/generic-cad/generic-cad.page */
      "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");

      var OrderServicoCadCabecalhoPage = /*#__PURE__*/function (_generic_generic_cad_) {
        _inherits(OrderServicoCadCabecalhoPage, _generic_generic_cad_);

        var _super2 = _createSuper(OrderServicoCadCabecalhoPage);

        function OrderServicoCadCabecalhoPage() {
          _classCallCheck(this, OrderServicoCadCabecalhoPage);

          return _super2.apply(this, arguments);
        }

        _createClass(OrderServicoCadCabecalhoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            if (this.isAlterForm()) {
              this.entityToForm();
            } else {
              this.entity = new src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__["OrdemServico"]();
            } // CRIANDO CAMPOS//


            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.entity.cliente.nome)
            });
          }
        }, {
          key: "entityToForm",
          value: function entityToForm() {
            this.entity = Object.assign(new src_app_entity_OrdemServico__WEBPACK_IMPORTED_MODULE_3__["OrdemServico"](), this.entity);
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.validForm()) {}

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onClienteSelected",
          value: function onClienteSelected(event) {
            this.entity.cliente = event;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            console.log(this.entity.cliente);
          }
        }]);

        return OrderServicoCadCabecalhoPage;
      }(_generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_4__["GenericCadPage"]);

      OrderServicoCadCabecalhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-servico-cad-cabecalho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-servico-cad-cabecalho.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.page.html"))["default"]
      })], OrderServicoCadCabecalhoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-servico-cad-cabecalho-order-servico-cad-cabecalho-module-es5.js.map