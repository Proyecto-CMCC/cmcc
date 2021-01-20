(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_justwatch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/justwatch.service */
      "s1lG");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/tmdb.service */
      "CuVg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(justWatch, authService, tmdb, router) {
          _classCallCheck(this, Tab3Page);

          this.justWatch = justWatch;
          this.authService = authService;
          this.tmdb = tmdb;
          this.router = router;
          this.result = {
            adult: false,
            backdrop_path: "",
            genre_ids: [],
            id: 0,
            original_language: "",
            original_title: "",
            original_name: "",
            first_air_date: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            release_date: "",
            title: "",
            name: "",
            video: false,
            vote_average: 0,
            vote_count: 0
          };
          this.results = [];
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFavs();
            this.isAuth();
          }
        }, {
          key: "loadFavs",
          value: function loadFavs() {
            var _this = this;

            this.justWatch.getFavorites().subscribe(function (res) {
              _this.favs = res;

              _this.favs.favorite.forEach(function (id) {
                _this.tmdb.getMovieDetail(String(id)).subscribe(function (res) {
                  _this.result.id = res.id;
                  _this.result.poster_path = res.poster_path;
                  _this.result.original_title = res.original_title;
                  _this.result.release_date = res.release_date;

                  _this.results.push(_this.result);

                  _this.result = {
                    adult: false,
                    backdrop_path: "",
                    genre_ids: [],
                    id: 0,
                    original_language: "",
                    original_title: "",
                    original_name: "",
                    first_air_date: "",
                    overview: "",
                    popularity: 0,
                    poster_path: "",
                    release_date: "",
                    title: "",
                    name: "",
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  };
                }, function (err) {
                  _this.tmdb.getSerieDetail(String(id)).subscribe(function (res) {
                    _this.result.id = res.id;
                    _this.result.poster_path = res.poster_path;
                    _this.result.original_name = res.original_name;
                    _this.result.first_air_date = res.first_air_date;

                    _this.results.push(_this.result);

                    _this.result = {
                      adult: false,
                      backdrop_path: "",
                      genre_ids: [],
                      id: 0,
                      original_language: "",
                      original_title: "",
                      original_name: "",
                      first_air_date: "",
                      overview: "",
                      popularity: 0,
                      poster_path: "",
                      release_date: "",
                      title: "",
                      name: "",
                      video: false,
                      vote_average: 0,
                      vote_count: 0
                    };
                  });
                });
              });
            });
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            var _this2 = this;

            this.authService.whoAmI().subscribe(function (res) {
              _this2.auth = true;
            }, function (err) {
              _this2.auth = false;
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
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _services_justwatch_service__WEBPACK_IMPORTED_MODULE_4__["JustwatchService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_6__["TmdbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "OcaV":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function OcaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<ion-content  *ngIf=\"!auth\">\n  <app-explore-container>\n  </app-explore-container>\n</ion-content>\n\n<ion-content *ngIf=\"auth\">\n  <ion-grid fixed>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let item of results\">\n        <ion-card (click)=\"showDetails(item.id, item.original_title, item.original_name)\">\n          <img [src]=\"item.poster_path | image\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "OcaV");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map