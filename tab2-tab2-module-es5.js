(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "EGAO":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function EGAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 200px;\n  height: 420px;\n  margin: auto;\n  box-shadow: 0px 0px 8px 2px rgba(0, 117, 74, 0.43);\n}\n\nion-card > img {\n  height: 300px;\n}\n\nion-col {\n  margin-bottom: 15px;\n}\n\n.noResults {\n  width: 100%;\n  text-align: center;\n  font-size: large;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0RBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLDExNyw3NCwwLjQzKTtcbn1cblxuaW9uLWNhcmQ+aW1ne1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5pb24tY29se1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5cbi5ub1Jlc3VsdHN7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5jb2xvci13aGl0ZXtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "JZ9U":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function JZ9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "e9nj");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "EGAO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/tmdb.service */
      "CuVg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(tmdb, modalCtrl, router) {
          _classCallCheck(this, Tab2Page);

          this.tmdb = tmdb;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.logoUrl = "../../assets/logo.svg";
          this.sugerencias = ["Spiderman", "La vida es bella", "Star Wars", "Harry Potter", "Vengadores"];
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
              var style, _name;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      style = '';
                      _name = '';

                      if (name != undefined) {
                        style = 'tv';
                        _name = name;
                      }

                      if (title != undefined) {
                        style = 'movie';
                        _name = title;
                      }

                      this.router.navigate(["/app/details/".concat(id, "/").concat(style, "/").concat(_name)]);

                    case 5:
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
          type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TmdbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "TUkU":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function TUkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "UDmF");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

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
    "UDmF":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function UDmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");

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
    "e9nj":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function e9nj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Buscar Película o Serie\"\n                    animated\n                    debounce=\"700\"\n                    [value]=\"searchText\"\n                    (ionChange)=\"search($event)\"\n                    (search)=\"search($event)\"\n                    color=\"tertiary\"\n                    showCancelButton=\"focus\"\n                    ></ion-searchbar>\n  </ion-toolbar>\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid fixed *ngIf=\"searching\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"noResults\">\n    <ion-list-header>\n      <ion-label class=\"noResults\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        No se encuentran resultados para la búsqueda \"{{searchText}}\"\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-label>\n    </ion-list-header>\n  </ion-list>\n\n  <ion-list *ngIf=\"results.length <= 0\">\n    <ion-list-header>\n      <ion-label>\n        Sugerencias\n      </ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of sugerencias\" (click)=\"searchText = item\">\n      <ion-label color=\"primary\">\n        {{item}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid fixed>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let item of results\" class=\"ion-text-center\">\n        <ion-card (click)=\"showDetails(item.id, item.title, item.name)\">\n          <img [src]=\"item.poster_path | image\">\n          <ion-card-header>\n            <ion-card-subtitle *ngIf=\"item.title\" class=\"color-white\">\n              {{item.title}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\" class=\"color-white\">\n              {{item.name}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.release_date\" class=\"color-white\">\n              ({{item.release_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.first_air_date\" class=\"color-white\">\n              ({{item.first_air_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.title\">\n              Película\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\">\n              Serie TV\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map