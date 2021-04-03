(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-buscar-buscar-cliente-buscar-cliente-list-buscar-cliente-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBuscarBuscarClienteBuscarClienteListBuscarClienteListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        \n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title *ngIf=\"!isShowSearch\">{{messages.ordem_servico_cad_tab_cabecalho_select_cliente}}</ion-title>\n\n        <ion-buttons *ngIf=\"!isShowSearch && isEntities\" slot=\"end\">\n            <ion-button (click)=\"inicializeList()\">\n                <ion-icon slot=\"icon-only\" name=\"reload\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"showSearchBar()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-buttons *ngIf=\"isShowSearch\" style=\"width: 100%;\">\n\n            <ion-button slot=\"start\" (click)=\"hideSearchBar()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-input autofocus=\"true\" placeHolder=\"Pesquisar\" #inputSearch debounce=\"200\"\n                (ionChange)=\"changeSearch($event.target.value)\">\n            </ion-input>\n\n            <ion-button *ngIf=\"isShowBottomClose\" slot=\"end\" (click)=\"deleteSearch()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let entity of getEntities()\"  (click)=\"selecionar(entity)\" >\n            <ion-icon name=\"{{entity.isPessoaJuridica? 'business-outline': 'person-outline'}}\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\" style=\"margin-left: 12px;\">\n                <ion-text>\n                    <h2> {{ entity.isPessoaJuridica? entity.razaoSocial : entity.nome }}</h2>\n                </ion-text>\n                <p> {{ entity.isPessoaJuridica? 'CNPJ: ' + entity.cnpj : 'CPF: '+entity.cpf }}</p>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" >\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n            </ion-button>\n           \n        </ion-item>\n    </ion-list>\n\n    <div *ngIf=\"!isEntities\" class=\"image-center\">\n        <ion-row>\n            <img src=\"assets/ilustrations/list-clientes.png\" />\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h6>{{messages.cliente_list_no_dados}}</h6>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list-routing.module.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list-routing.module.ts ***!
      \************************************************************************************************************/

    /*! exports provided: BuscarClienteListPageRoutingModule */

    /***/
    function srcAppComponentsBuscarBuscarClienteBuscarClienteListBuscarClienteListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuscarClienteListPageRoutingModule", function () {
        return BuscarClienteListPageRoutingModule;
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


      var _buscar_cliente_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buscar-cliente-list.page */
      "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.ts");

      var routes = [{
        path: '',
        component: _buscar_cliente_list_page__WEBPACK_IMPORTED_MODULE_3__["BuscarClienteListPage"]
      }];

      var BuscarClienteListPageRoutingModule = function BuscarClienteListPageRoutingModule() {
        _classCallCheck(this, BuscarClienteListPageRoutingModule);
      };

      BuscarClienteListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuscarClienteListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.module.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: BuscarClienteListPageModule */

    /***/
    function srcAppComponentsBuscarBuscarClienteBuscarClienteListBuscarClienteListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuscarClienteListPageModule", function () {
        return BuscarClienteListPageModule;
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


      var _buscar_cliente_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buscar-cliente-list-routing.module */
      "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list-routing.module.ts");
      /* harmony import */


      var _buscar_cliente_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buscar-cliente-list.page */
      "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.ts");

      var BuscarClienteListPageModule = function BuscarClienteListPageModule() {
        _classCallCheck(this, BuscarClienteListPageModule);
      };

      BuscarClienteListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buscar_cliente_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscarClienteListPageRoutingModule"]],
        declarations: [_buscar_cliente_list_page__WEBPACK_IMPORTED_MODULE_6__["BuscarClienteListPage"]]
      })], BuscarClienteListPageModule);
      /***/
    },

    /***/
    "./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.ts ***!
      \**************************************************************************************************/

    /*! exports provided: BuscarClienteListPage */

    /***/
    function srcAppComponentsBuscarBuscarClienteBuscarClienteListBuscarClienteListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuscarClienteListPage", function () {
        return BuscarClienteListPage;
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


      var src_app_pages_cadastro_generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/cadastro/generic/generic-list/generic-list.page */
      "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts");
      /* harmony import */


      var _buscar_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../buscar-cliente.component */
      "./src/app/components/buscar/buscar-cliente/buscar-cliente.component.ts");

      var BuscarClienteListPage = /*#__PURE__*/function (_src_app_pages_cadast) {
        _inherits(BuscarClienteListPage, _src_app_pages_cadast);

        var _super = _createSuper(BuscarClienteListPage);

        function BuscarClienteListPage() {
          _classCallCheck(this, BuscarClienteListPage);

          return _super.apply(this, arguments);
        }

        _createClass(BuscarClienteListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.isShowSearch = false;

            if (this.entities.length <= 0) {
              this.buscarTodos();
            }
          }
        }, {
          key: "buscarTodos",
          value: function buscarTodos() {
            var _this = this;

            this.showLoading();
            this.clienteController.buscarTodos().subscribe(function (result) {
              _this.entities = result;

              _this.refreshList();

              _this.hideLoading();

              _this.showPanelCad();

              _this.inputSearch.setFocus();
            });
          }
        }, {
          key: "changeSearch",
          value: function changeSearch(value) {
            this.searchStr = value;
            this.filter('cpf', 'cnpj', 'nome', 'razaoSocial');
            this.isShowBottomClose = this.searchStr.length > 0;
          }
        }, {
          key: "inicializeList",
          value: function inicializeList() {
            this.entities = [];
            this.entitiesFiltradas = [];
            this.buscarTodos();
          }
        }, {
          key: "selecionar",
          value: function selecionar(entity) {
            _buscar_cliente_component__WEBPACK_IMPORTED_MODULE_3__["BuscarClienteComponent"].clienteSelected = entity;
            this.navigateBack();
          }
        }]);

        return BuscarClienteListPage;
      }(src_app_pages_cadastro_generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__["GenericListPage"]);

      BuscarClienteListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buscar-cliente-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./buscar-cliente-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar-cliente/buscar-cliente-list/buscar-cliente-list.page.html"))["default"]
      })], BuscarClienteListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-buscar-buscar-cliente-buscar-cliente-list-buscar-cliente-list-module-es5.js.map