(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-fabricante-fabricante-list-fabricante-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroFabricanteFabricanteListFabricanteListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n\n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons *ngIf=\"!isShowSearch\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title *ngIf=\"!isShowSearch\">{{messages.fabricante_list_title}}</ion-title>\n\n        <ion-buttons *ngIf=\"!isShowSearch && isEntities\" slot=\"end\">\n            <ion-button (click)=\"inicializeList()\">\n                <ion-icon slot=\"icon-only\" name=\"reload\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"showSearchBar()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-buttons *ngIf=\"isShowSearch\" style=\"width: 100%;\">\n\n            <ion-button slot=\"start\" (click)=\"hideSearchBar()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-input autofocus=\"true\" placeHolder=\"Pesquisar\" #inputSearch debounce=\"200\"\n                (ionChange)=\"changeSearch($event.target.value)\">\n            </ion-input>\n\n            <ion-button *ngIf=\"isShowBottomClose\" slot=\"end\" (click)=\"deleteSearch()\" style=\"margin-right: 10px\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button  [routerLink]=\"['/fabricante-cad']\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    \n    <ion-list>\n        <ion-item *ngFor=\"let entity of getEntities()\">\n            <ion-icon name=\"cog-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\" style=\"margin-left: 12px;\">\n                <ion-text>\n                    <h2> {{entity.nome }}</h2>\n                </ion-text>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"alterar(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"excluir(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf=\"!isEntities\" class=\"image-center\">\n        <ion-row>\n            <img src=\"assets/ilustrations/list-fabricantes.png\" />\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h6>{{messages.fabricante_list_no_dados}}</h6>\n            </ion-col>\n         \n        </ion-row>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list-routing.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: FabricanteListPageRoutingModule */

    /***/
    function srcAppPagesCadastroFabricanteFabricanteListFabricanteListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricanteListPageRoutingModule", function () {
        return FabricanteListPageRoutingModule;
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


      var _fabricante_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fabricante-list.page */
      "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.ts");

      var routes = [{
        path: '',
        component: _fabricante_list_page__WEBPACK_IMPORTED_MODULE_3__["FabricanteListPage"]
      }];

      var FabricanteListPageRoutingModule = function FabricanteListPageRoutingModule() {
        _classCallCheck(this, FabricanteListPageRoutingModule);
      };

      FabricanteListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FabricanteListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: FabricanteListPageModule */

    /***/
    function srcAppPagesCadastroFabricanteFabricanteListFabricanteListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricanteListPageModule", function () {
        return FabricanteListPageModule;
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


      var _fabricante_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fabricante-list-routing.module */
      "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list-routing.module.ts");
      /* harmony import */


      var _fabricante_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fabricante-list.page */
      "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.ts");

      var FabricanteListPageModule = function FabricanteListPageModule() {
        _classCallCheck(this, FabricanteListPageModule);
      };

      FabricanteListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fabricante_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabricanteListPageRoutingModule"]],
        declarations: [_fabricante_list_page__WEBPACK_IMPORTED_MODULE_6__["FabricanteListPage"]]
      })], FabricanteListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: FabricanteListPage */

    /***/
    function srcAppPagesCadastroFabricanteFabricanteListFabricanteListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricanteListPage", function () {
        return FabricanteListPage;
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


      var _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../generic/generic-list/generic-list.page */
      "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts");

      var FabricanteListPage = /*#__PURE__*/function (_generic_generic_list) {
        _inherits(FabricanteListPage, _generic_generic_list);

        var _super2 = _createSuper(FabricanteListPage);

        function FabricanteListPage() {
          _classCallCheck(this, FabricanteListPage);

          return _super2.apply(this, arguments);
        }

        _createClass(FabricanteListPage, [{
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
          key: "novo",
          value: function novo() {
            this.navigate('fabricante-cad');
          }
        }, {
          key: "buscarTodos",
          value: function buscarTodos() {
            var _this = this;

            this.showLoading();
            this.fabricanteController.buscarTodos().subscribe(function (result) {
              _this.entities = result;

              _this.refreshList();

              _this.hideLoading();

              _this.showPanelCad();
            });
          }
        }, {
          key: "excluir",
          value: function excluir(entity) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);

                    case 2:
                      result = _context.sent;

                      if (result) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.showLoading();
                      this.fabricanteController.excluir(entity).subscribe(function () {
                        _this2.removeItemLists(entity.id);

                        _this2.messageController.showMessageToast(_this2.messages.dialogs_register_delete);

                        _this2.hideLoading();

                        _this2.showPanelCad();
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "alterar",
          value: function alterar(entity) {
            var _this3 = this;

            var _super = Object.create(null, {
              navigatePostParams: {
                get: function get() {
                  return _get(_getPrototypeOf(FabricanteListPage.prototype), "navigatePostParams", _this3);
                }
              }
            });

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var index;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.showLoading();
                      index = this.entities.indexOf(entity);
                      this.fabricanteController.buscarPorId(entity.id).subscribe(function (result) {
                        if (result.length > 0) {
                          entity = result[0];

                          _super.navigatePostParams.call(_this4, 'fabricante-cad', entity, index);

                          _this4.hideLoading();
                        } else {
                          _this4.messageController.showMessageToast(_this4.messages.dialogs_register_no_exists);

                          _this4.refreshList();

                          _this4.hideLoading();
                        }
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeSearch",
          value: function changeSearch(value) {
            this.searchStr = value;
            this.filter('nome', 'sigla', null, null);
            this.isShowBottomClose = this.searchStr.length > 0;
          }
        }, {
          key: "inicializeList",
          value: function inicializeList() {
            this.entities = [];
            this.entitiesFiltradas = [];
            this.buscarTodos();
          }
        }]);

        return FabricanteListPage;
      }(_generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__["GenericListPage"]);

      FabricanteListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fabricante-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./fabricante-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/fabricante/fabricante-list/fabricante-list.page.html"))["default"]
      })], FabricanteListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-fabricante-fabricante-list-fabricante-list-module-es5.js.map