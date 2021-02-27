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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-ordem-servico-ordem-servico-cad-ordem-servico-cad-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroOrdemServicoOrdemServicoCadOrdemServicoCadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{messages.ordem_servico_cad_title}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n          <ion-tab-button tab=\"ordem-servico-cad-cabecalho\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label>  {{messages.ordem_servico_cad_tab_cabecalho_title}}</ion-label>\n          </ion-tab-button>\n      \n          \n      \n       \n        </ion-tab-bar>\n      </ion-tabs>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: OrdemServicoCadPageRoutingModule */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrdemServicoCadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPageRoutingModule", function () {
        return OrdemServicoCadPageRoutingModule;
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


      var _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ordem-servico-cad.page */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts");

      var routes = [{
        path: "",
        component: _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_3__["OrdemServicoCadPage"],
        children: [{
          path: "ordem-servico-cad-cabecalho",
          children: [{
            path: "",
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | order-servico-cad-cabecalho-order-servico-cad-cabecalho-module */
              "order-servico-cad-cabecalho-order-servico-cad-cabecalho-module").then(__webpack_require__.bind(null,
              /*! ./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module */
              "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/order-servico-cad-cabecalho/order-servico-cad-cabecalho.module.ts")).then(function (m) {
                return m.OrderServicoCadCabecalhoPageModule;
              });
            }
          }]
        }]
      }, {
        path: "",
        redirectTo: "cadastro-cliente/tab-pessoa-fisica",
        pathMatch: "full"
      }];
      /* const routes: Routes = [
        {
          path: '',
          component: OrdemServicoCadPage
        },
        {
          path: 'order-servico-cad-cabecalho',
          loadChildren: () => import('./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module').then( m => m.OrderServicoCadCabecalhoPageModule)
        }
      ];
       */

      var OrdemServicoCadPageRoutingModule = function OrdemServicoCadPageRoutingModule() {
        _classCallCheck(this, OrdemServicoCadPageRoutingModule);
      };

      OrdemServicoCadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdemServicoCadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.module.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: OrdemServicoCadPageModule */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrdemServicoCadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPageModule", function () {
        return OrdemServicoCadPageModule;
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


      var _ordem_servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ordem-servico-cad-routing.module */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad-routing.module.ts");
      /* harmony import */


      var _ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ordem-servico-cad.page */
      "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts");

      var OrdemServicoCadPageModule = function OrdemServicoCadPageModule() {
        _classCallCheck(this, OrdemServicoCadPageModule);
      };

      OrdemServicoCadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ordem_servico_cad_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdemServicoCadPageRoutingModule"]],
        declarations: [_ordem_servico_cad_page__WEBPACK_IMPORTED_MODULE_6__["OrdemServicoCadPage"]]
      })], OrdemServicoCadPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.ts ***!
      \******************************************************************************************/

    /*! exports provided: OrdemServicoCadPage */

    /***/
    function srcAppPagesCadastroOrdemServicoOrdemServicoCadOrdemServicoCadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdemServicoCadPage", function () {
        return OrdemServicoCadPage;
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


      var _generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../generic/generic-cad/generic-cad.page */
      "./src/app/pages/cadastro/generic/generic-cad/generic-cad.page.ts");

      var OrdemServicoCadPage = /*#__PURE__*/function (_generic_generic_cad_) {
        _inherits(OrdemServicoCadPage, _generic_generic_cad_);

        var _super = _createSuper(OrdemServicoCadPage);

        function OrdemServicoCadPage() {
          _classCallCheck(this, OrdemServicoCadPage);

          return _super.apply(this, arguments);
        }

        _createClass(OrdemServicoCadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdemServicoCadPage;
      }(_generic_generic_cad_generic_cad_page__WEBPACK_IMPORTED_MODULE_2__["GenericCadPage"]);

      OrdemServicoCadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordem-servico-cad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ordem-servico-cad.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/ordem-servico/ordem-servico-cad/ordem-servico-cad.page.html"))["default"]
      })], OrdemServicoCadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-ordem-servico-ordem-servico-cad-ordem-servico-cad-module-es5.js.map