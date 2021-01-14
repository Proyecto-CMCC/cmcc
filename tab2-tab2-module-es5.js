(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Buscar Película o Serie\"\n                    animated\n                    debounce=\"700\"\n                    [value]=\"searchText\"\n                    (ionChange)=\"search($event)\"\n                    color=\"tertiary\"\n                    showCancelButton=\"focus\"\n                    ></ion-searchbar>\n  </ion-toolbar>\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid fixed *ngIf=\"searching\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"noResults\">\n    <ion-list-header>\n      <ion-label class=\"noResults\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        No se encuentran resultados para la búsqueda \"{{searchText}}\"\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-label>\n    </ion-list-header>\n  </ion-list>\n\n  <ion-list *ngIf=\"results.length <= 0\">\n    <ion-list-header>\n      <ion-label>\n        Sugerencias\n      </ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of sugerencias\" (click)=\"searchText = item\">\n      <ion-label color=\"primary\">\n        {{item}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid fixed>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let item of results\" class=\"ion-text-center\">\n        <ion-card (click)=\"showDetails(item.id, item.title, item.name)\">\n          <img [src]=\"item.poster_path | image\">\n          <ion-card-header>\n            <ion-card-subtitle *ngIf=\"item.title\" class=\"color-white\">\n              {{item.title}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\" class=\"color-white\">\n              {{item.name}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.release_date\" class=\"color-white\">\n              ({{item.release_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.first_air_date\" class=\"color-white\">\n              ({{item.first_air_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.title\">\n              Película\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\">\n              Serie TV\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 200px;\n  height: 420px;\n  margin: auto;\n  box-shadow: 0px 0px 8px 2px rgba(0, 117, 74, 0.43);\n}\n\nion-card > img {\n  height: 300px;\n}\n\nion-col {\n  margin-bottom: 15px;\n}\n\n.noResults {\n  width: 100%;\n  text-align: center;\n  font-size: large;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUdBLGtEQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY2FyZHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwxMTcsNzQsMC40Myk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwxMTcsNzQsMC40Myk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xufVxuXG5pb24tY2FyZD5pbWd7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmlvbi1jb2x7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cblxuLm5vUmVzdWx0c3tcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNvbG9yLXdoaXRle1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
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


      var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/tmdb.service */
      "./src/app/services/tmdb.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/detail/detail.component */
      "./src/app/components/detail/detail.component.ts");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(tmdb, modalCtrl) {
          _classCallCheck(this, Tab2Page);

          this.tmdb = tmdb;
          this.modalCtrl = modalCtrl;
          this.logoUrl = "../../assets/logo.svg";
          this.sugerencias = ["Spiderman", "La vida es bella"];
          this.results = [];
          this.searching = false;
          this.noResults = false;
          this.type = '';
        }

        _createClass(Tab2Page, [{
          key: "search",
          value: function search(event) {
            var _this = this;

            this.searching = true;
            var value = event.detail.value;
            this.searchText = value;
            this.results = [];

            if (value.length == 0) {
              this.searching = false;
              this.noResults = false;
              return;
            }

            this.tmdb.searchFilms(value).subscribe(function (res) {
              _this.results = [].concat(_toConsumableArray(_this.results), _toConsumableArray(res.results));
              _this.results = _this.results.filter(_this.filmfilter);
              console.log(_this.results);

              if (_this.results.length == 0) {
                _this.noResults = true;
              } else {
                _this.noResults = false;
              }

              _this.searching = false;
            }, function (err) {
              _this.searching = false;
              _this.noResults = true;
            });
            this.tmdb.searchSerie(value).subscribe(function (res) {
              _this.results = [].concat(_toConsumableArray(_this.results), _toConsumableArray(res.results));
              _this.results = _this.results.filter(_this.filmfilter);

              if (_this.results.length == 0) {
                _this.noResults = true;
              } else {
                _this.noResults = false;
              }

              _this.searching = false;
            }, function (err) {
              _this.searching = false;
              _this.noResults = true;
            });
          }
        }, {
          key: "showDetails",
          value: function showDetails(id, title, name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
                        componentProps: {
                          id: id,
                          title: title,
                          name: name
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filmfilter",
          value: function filmfilter(film) {
            if (film.poster_path) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map