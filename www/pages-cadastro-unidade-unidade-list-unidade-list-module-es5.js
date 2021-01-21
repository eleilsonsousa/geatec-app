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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-unidade-unidade-list-unidade-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroUnidadeUnidadeListUnidadeListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Unidades</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-searchbar #autofocus placeholder=\"Buscar...\" [(ngModel)]=\"searchStr\" (ionChange)=\"aplicarFiltrarItems()\">\n</ion-searchbar>\n\n<ion-content padding>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"novoCad()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-virtual-scroll [items]=\"getEntities()\">\n        <ion-item *virtualItem=\"let entity\">\n            <ion-label class=\"ion-text-wrap\">\n                <ion-text>\n                    <h2>{{ entity.sigla }} - {{ entity.nome }}</h2>\n                </ion-text>\n                <p>{{ entity.descricao }}</p>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"alterar(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"excluir(entity)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-virtual-scroll>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-list/unidade-list-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-list/unidade-list-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: UnidadeListPageRoutingModule */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeListUnidadeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeListPageRoutingModule", function () {
        return UnidadeListPageRoutingModule;
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


      var _unidade_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./unidade-list.page */
      "./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.ts");

      var routes = [{
        path: '',
        component: _unidade_list_page__WEBPACK_IMPORTED_MODULE_3__["UnidadeListPage"]
      }];

      var UnidadeListPageRoutingModule = function UnidadeListPageRoutingModule() {
        _classCallCheck(this, UnidadeListPageRoutingModule);
      };

      UnidadeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UnidadeListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-list/unidade-list.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-list/unidade-list.module.ts ***!
      \****************************************************************************/

    /*! exports provided: UnidadeListPageModule */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeListUnidadeListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeListPageModule", function () {
        return UnidadeListPageModule;
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


      var _unidade_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./unidade-list-routing.module */
      "./src/app/pages/cadastro/unidade/unidade-list/unidade-list-routing.module.ts");
      /* harmony import */


      var _unidade_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./unidade-list.page */
      "./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.ts");

      var UnidadeListPageModule = function UnidadeListPageModule() {
        _classCallCheck(this, UnidadeListPageModule);
      };

      UnidadeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _unidade_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnidadeListPageRoutingModule"]],
        declarations: [_unidade_list_page__WEBPACK_IMPORTED_MODULE_6__["UnidadeListPage"]]
      })], UnidadeListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: UnidadeListPage */

    /***/
    function srcAppPagesCadastroUnidadeUnidadeListUnidadeListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadeListPage", function () {
        return UnidadeListPage;
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


      var _generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../generic/generic-list/generic-list.page */
      "./src/app/pages/cadastro/generic/generic-list/generic-list.page.ts");

      var UnidadeListPage = /*#__PURE__*/function (_generic_generic_list) {
        _inherits(UnidadeListPage, _generic_generic_list);

        var _super = _createSuper(UnidadeListPage);

        function UnidadeListPage() {
          _classCallCheck(this, UnidadeListPage);

          return _super.apply(this, arguments);
        }

        _createClass(UnidadeListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buscarTodos();
          }
        }, {
          key: "buscarTodos",
          value: function buscarTodos() {
            var _this = this;

            return this.unidadeController.buscarTodos().subscribe(function (result) {
              _this.entities = result;
              return result;
            });
          }
        }, {
          key: "novoCad",
          value: function novoCad() {
            this.navigate('unidade-cad');
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
                      return this.messageController.showMessageConfirm('Confirma excluir esse registro?');

                    case 2:
                      result = _context.sent;

                      if (result) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.showLoading();
                      this.unidadeController.excluir(entity).subscribe(function () {
                        _this2.removeItemLists(entity.id);

                        _this2.messageController.showMessageToast('Excluído com sucesso');
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
            var index = this.entities.indexOf(entity);

            _get(_getPrototypeOf(UnidadeListPage.prototype), "navigatePostParams", this).call(this, 'unidade-cad', entity, index);
          }
        }, {
          key: "filtrarItems",
          value: function filtrarItems() {
            var _this3 = this;

            return this.entities.filter(function (entity) {
              return entity.sigla.toLowerCase().indexOf(_this3.searchStr.toLowerCase()) > -1 || entity.nome.toLowerCase().indexOf(_this3.searchStr.toLowerCase()) > -1;
            });
          }
        }, {
          key: "aplicarFiltrarItems",
          value: function aplicarFiltrarItems() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.searchStr) {
                        _context2.next = 3;
                        break;
                      }

                      this.entitiesFiltradas = null;
                      return _context2.abrupt("return");

                    case 3:
                      _context2.next = 5;
                      return this.filtrarItems();

                    case 5:
                      this.entitiesFiltradas = _context2.sent;

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getEntities",
          value: function getEntities() {
            if (this.entitiesFiltradas != null) {
              return this.entitiesFiltradas;
            } else {
              return this.entities;
            }
          }
        }]);

        return UnidadeListPage;
      }(_generic_generic_list_generic_list_page__WEBPACK_IMPORTED_MODULE_2__["GenericListPage"]);

      UnidadeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unidade-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unidade-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/unidade/unidade-list/unidade-list.page.html"))["default"]
      })], UnidadeListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-unidade-unidade-list-unidade-list-module-es5.js.map