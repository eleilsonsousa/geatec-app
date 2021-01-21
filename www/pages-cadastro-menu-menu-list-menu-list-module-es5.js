(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-menu-menu-list-menu-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/menu/menu-list/menu-list.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/menu/menu-list/menu-list.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroMenuMenuListMenuListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-title>Cadastros</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-icon name=\"people\" slot=\"end\"></ion-icon>\n                        <h4>\n                            <ion-label>Meus Clientes</ion-label>\n                        </h4>\n                    </ion-item>\n\n                    <ion-card-content>\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cliente-list']\">\n                                    Clientes\n                                </ion-router-link>\n                            </h4>\n                            <ion-button routerLink=\"/cadastro-cliente/tab-pessoa-fisica\" shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n                                    Relatórios\n                                </ion-router-link>\n                            </h4>\n                        </ion-item>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-icon name=\"build\" slot=\"end\"></ion-icon>\n                        <h4>\n                            <ion-label>Meus Serviços</ion-label>\n                        </h4>\n                    </ion-item>\n\n                    <ion-card-content >\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n                                    Serviços\n                                </ion-router-link>\n                            </h4>\n\n                            <ion-button routerLink=\"/cadastro-servico\" shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n\n                                </ion-router-link>\n                            </h4>\n                        </ion-item>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-icon name=\"cube\" slot=\"end\"></ion-icon>\n                        <h4>\n                            <ion-label>Estoque</ion-label>\n                        </h4>\n                    </ion-item>\n\n                    <ion-card-content>\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n                                    Produtos\n                                </ion-router-link>\n                            </h4>\n                            <ion-button routerLink=\"/cadastro-produto\" shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n                                    Fabricantes\n                                </ion-router-link>\n                            </h4>\n                            <ion-button shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/cadastro-servico']\">\n                                    Categorias\n                                </ion-router-link>\n                            </h4>\n                            <ion-button shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n\n                        <ion-item lines=\"none\">\n                            <h4>\n                                <ion-router-link class='font-large' [routerLink]=\"['/unidade-list']\">\n                                    Unidades\n                                </ion-router-link>\n                            </h4>\n                            <ion-button  [routerLink]=\"['/unidade-cady']\"  shape=\"round\" size=\"small\" slot=\"end\">\n                                <ion-icon name=\"add\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/cadastro/menu/menu-list/menu-list-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cadastro/menu/menu-list/menu-list-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MenuListPageRoutingModule */

    /***/
    function srcAppPagesCadastroMenuMenuListMenuListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuListPageRoutingModule", function () {
        return MenuListPageRoutingModule;
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


      var _menu_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-list.page */
      "./src/app/pages/cadastro/menu/menu-list/menu-list.page.ts");

      var routes = [{
        path: '',
        component: _menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]
      }];

      var MenuListPageRoutingModule = function MenuListPageRoutingModule() {
        _classCallCheck(this, MenuListPageRoutingModule);
      };

      MenuListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/menu/menu-list/menu-list.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cadastro/menu/menu-list/menu-list.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MenuListPageModule */

    /***/
    function srcAppPagesCadastroMenuMenuListMenuListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function () {
        return MenuListPageModule;
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


      var _menu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-list-routing.module */
      "./src/app/pages/cadastro/menu/menu-list/menu-list-routing.module.ts");
      /* harmony import */


      var _menu_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-list.page */
      "./src/app/pages/cadastro/menu/menu-list/menu-list.page.ts");

      var MenuListPageModule = function MenuListPageModule() {
        _classCallCheck(this, MenuListPageModule);
      };

      MenuListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuListPageRoutingModule"]],
        declarations: [_menu_list_page__WEBPACK_IMPORTED_MODULE_6__["MenuListPage"]]
      })], MenuListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/menu/menu-list/menu-list.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cadastro/menu/menu-list/menu-list.page.ts ***!
      \*****************************************************************/

    /*! exports provided: MenuListPage */

    /***/
    function srcAppPagesCadastroMenuMenuListMenuListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuListPage", function () {
        return MenuListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MenuListPage = /*#__PURE__*/function () {
        function MenuListPage() {
          _classCallCheck(this, MenuListPage);
        }

        _createClass(MenuListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuListPage;
      }();

      MenuListPage.ctorParameters = function () {
        return [];
      };

      MenuListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/menu/menu-list/menu-list.page.html"))["default"]
      })], MenuListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-menu-menu-list-menu-list-module-es5.js.map