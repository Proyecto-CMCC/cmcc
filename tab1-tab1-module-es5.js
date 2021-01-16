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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "7VA0":
    /*!***************************************************************!*\
      !*** ./src/app/components/slideshow/slideshow.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function VA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJzbGlkZXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJke1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-title slot=\"primary\" class=\"ion-text-left\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n\n    <ion-buttons slot=\"end\" *ngIf=\"auth\">\n      <ion-button (click)=\"loginOptions()\" color=\"primary\" class=\"login-btn\" >\n          <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n        {{userInitials}}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" *ngIf=\"!auth\">\n      <ion-button (click)=\"login()\" color=\"primary\" class=\"login-btn\" >\n        <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h4>Estrenos</h4>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-big [films]=\"recentFilms\"></app-slideshow-big>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Últimas Tendencias</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingAll\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Películas Populares</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-pares [films]=\"popularFilms\"\n                        (loadMore)=\"loadMorePopularFilms()\"\n  ></app-slideshow-pares>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Series más vistas esta semana</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingSeries\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n          <h6>Series más populares</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"populartSeries\"></app-slideshow>\n\n  <br>\n  <br>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "GAXj":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow/slideshow.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GAXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n";
      /***/
    },

    /***/
    "GIdR":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-pares/slideshow-pares.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GIdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let pares of films | pares\">\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let film of pares\">\n        <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n          <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-slide>\n\n  <ion-slide class=\"slide-pares-mas\">\n\n    <ion-button expand=\"full\"\n                class=\"btn-mas\"\n                size=\"large\"\n                (click)=\"load()\"\n                color=\"primary\">\n                <ion-icon name=\"add\"\n                          slot=\"icon-only\"\n                ></ion-icon>\n    </ion-button>\n\n\n  </ion-slide>\n\n</ion-slides>\n";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
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


      var _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth/pages/login/login.page */
      "TJhT");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../auth/pages/login-options/login-options.page */
      "vQQy");

      var screenWidthBreakPoint = 420;

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(tmdb, modalController, authService) {
          _classCallCheck(this, Tab1Page);

          this.tmdb = tmdb;
          this.modalController = modalController;
          this.authService = authService;
          this.logoUrl = "../../assets/logo.svg";
          this.recentFilms = [];
          this.trendingAll = [];
          this.popularFilms = [];
          this.trendingSeries = [];
          this.populartSeries = [];
          this.loginText = "";
          this.auth = false;
          this.userInitials = '';
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRecentFilms();
            this.getPopularFilms();
            this.getTrendings();
            this.getTrendingSeries();
            this.getPopularSeries();
            this.setLoginText();
            this.isAuth();
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            var _this = this;

            this.authService.whoAmI().subscribe(function (res) {
              _this.auth = true;

              if (_this.auth) {
                _this.userInitials = _this.authService.usuario.firstName[0] + _this.authService.usuario.lastName[0];
              }
            }, function (err) {
              _this.userInitials = '';
            });
          }
        }, {
          key: "setLoginText",
          value: function setLoginText(event) {
            this.screenWidth = window.innerWidth;

            if (this.screenWidth > screenWidthBreakPoint) {
              this.loginText = "Login";
            } else {
              this.loginText = "";
            }
          }
        }, {
          key: "getRecentFilms",
          value: function getRecentFilms() {
            var _this2 = this;

            this.tmdb.getMoviesOfMonth().subscribe(function (res) {
              _this2.recentFilms = res.results.filter(_this2.filmfilter);
            });
          }
        }, {
          key: "getTrendings",
          value: function getTrendings() {
            var _this3 = this;

            this.tmdb.getTrendings().subscribe(function (res) {
              _this3.trendingAll = res.results.filter(_this3.filmfilter);
            });
          }
        }, {
          key: "getPopularFilms",
          value: function getPopularFilms() {
            var _this4 = this;

            this.tmdb.getPopularFilms().subscribe(function (res) {
              var tempArr = [].concat(_toConsumableArray(_this4.popularFilms), _toConsumableArray(res.results));
              _this4.popularFilms = tempArr.filter(_this4.filmfilter);
            });
          }
        }, {
          key: "getTrendingSeries",
          value: function getTrendingSeries() {
            var _this5 = this;

            this.tmdb.getTrendingSeries().subscribe(function (res) {
              _this5.trendingSeries = res.results.filter(_this5.filmfilter);
            });
          }
        }, {
          key: "getPopularSeries",
          value: function getPopularSeries() {
            var _this6 = this;

            this.tmdb.getPopularSeries().subscribe(function (res) {
              _this6.populartSeries = res.results.filter(_this6.filmfilter);
            });
          }
        }, {
          key: "loadMorePopularFilms",
          value: function loadMorePopularFilms() {
            this.getPopularFilms();
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
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var loginOptionsModal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                      });

                    case 2:
                      loginOptionsModal = _context.sent;
                      loginOptionsModal.onDidDismiss().then(function (data) {
                        _this7.isAuth();
                      });
                      _context.next = 6;
                      return loginOptionsModal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loginOptions",
          value: function loginOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var loginModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_8__["LoginOptionsPage"]
                      });

                    case 2:
                      loginModal = _context2.sent;
                      loginModal.onDidDismiss().then(function (data) {
                        _this8.isAuth();
                      });
                      _context2.next = 6;
                      return loginModal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TmdbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      Tab1Page.propDecorators = {
        setLoginText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "QNFj":
    /*!*************************************************************!*\
      !*** ./src/app/components/slideshow/slideshow.component.ts ***!
      \*************************************************************/

    /*! exports provided: SlideshowComponent */

    /***/
    function QNFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
        return SlideshowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slideshow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slideshow.component.html */
      "GAXj");
      /* harmony import */


      var _slideshow_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slideshow.component.scss */
      "7VA0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowComponent = /*#__PURE__*/function () {
        function SlideshowComponent(modalCtrl, router) {
          _classCallCheck(this, SlideshowComponent);

          this.modalCtrl = modalCtrl;
          this.router = router;
          this.slideRecentOpts = {};
        }

        _createClass(SlideshowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getScreenSize();
            this.films.filter(function (film) {
              if (film.poster_path) {
                return true;
              } else if (film.backdrop_path) {
                return true;
              } else {
                return false;
              }
            });
          }
        }, {
          key: "showDetails",
          value: function showDetails(id, title, name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var style, _name;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getScreenSize",
          value: function getScreenSize(event) {
            this.screenWidth = window.innerWidth;

            if (this.screenWidth > screenWidthBreakPoint) {
              this.slideRecentOpts = {
                slidesPerView: 9.5,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            } else if (this.screenWidth > screenWidthBreakPointMid) {
              this.slideRecentOpts = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            } else {
              this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            }
          }
        }]);

        return SlideshowComponent;
      }();

      SlideshowComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SlideshowComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow',
        template: _raw_loader_slideshow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlideshowComponent);
      /***/
    },

    /***/
    "SFns":
    /*!***************************************************************************!*\
      !*** ./src/app/components/slideshow-pares/slideshow-pares.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function SFns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy1wYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzbGlkZXNob3ctcGFyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "TqpM":
    /*!*************************************************************************!*\
      !*** ./src/app/components/slideshow-pares/slideshow-pares.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SlideshowParesComponent */

    /***/
    function TqpM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowParesComponent", function () {
        return SlideshowParesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slideshow_pares_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slideshow-pares.component.html */
      "GIdR");
      /* harmony import */


      var _slideshow_pares_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slideshow-pares.component.scss */
      "SFns");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowParesComponent = /*#__PURE__*/function () {
        function SlideshowParesComponent(modalCtrl, router) {
          _classCallCheck(this, SlideshowParesComponent);

          this.modalCtrl = modalCtrl;
          this.router = router;
          this.films = [];
          this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.slideRecentOpts = {};
        }

        _createClass(SlideshowParesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getScreenSize();
            this.films.filter(function (film) {
              if (film.poster_path) {
                return true;
              } else if (film.backdrop_path) {
                return true;
              } else {
                return false;
              }
            });
          }
        }, {
          key: "showDetails",
          value: function showDetails(id, title, name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var style, _name;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
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
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "load",
          value: function load() {
            this.loadMore.emit();
          }
        }, {
          key: "getScreenSize",
          value: function getScreenSize(event) {
            this.screenWidth = window.innerWidth;

            if (this.screenWidth > screenWidthBreakPoint) {
              this.slideRecentOpts = {
                slidesPerView: 9.5,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
              };
            } else if (this.screenWidth > screenWidthBreakPointMid) {
              this.slideRecentOpts = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
              };
            } else {
              this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
              };
            }
          }
        }]);

        return SlideshowParesComponent;
      }();

      SlideshowParesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SlideshowParesComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loadMore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowParesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow-pares',
        template: _raw_loader_slideshow_pares_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_pares_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlideshowParesComponent);
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "Xkjk":
    /*!***********************************************************************!*\
      !*** ./src/app/components/slideshow-big/slideshow-big.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Xkjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy1iaWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGVzaG93LWJpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "eS5p":
    /*!******************************************************************!*\
      !*** ./src/app/auth/pages/login-options/login-options.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function eS5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-logo {\n  width: 60%;\n}\n\nion-card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.close-sesion-btn {\n  width: 100%;\n  margin: 40px 0 55px 0;\n}\n\n.delete-btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLW9wdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbG9nb3tcbiAgd2lkdGg6IDYwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5jbG9zZS1zZXNpb24tYnRue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0MHB4IDAgNTVweCAwO1xufVxuXG4uZGVsZXRlLWJ0bntcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "iAXz":
    /*!*********************************************************************!*\
      !*** ./src/app/components/slideshow-big/slideshow-big.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SlideshowBigComponent */

    /***/
    function iAXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowBigComponent", function () {
        return SlideshowBigComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slideshow_big_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slideshow-big.component.html */
      "sNiG");
      /* harmony import */


      var _slideshow_big_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slideshow-big.component.scss */
      "Xkjk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowBigComponent = /*#__PURE__*/function () {
        function SlideshowBigComponent(modalCtrl, router) {
          _classCallCheck(this, SlideshowBigComponent);

          this.modalCtrl = modalCtrl;
          this.router = router;
          this.slideRecentOpts = {};
        }

        _createClass(SlideshowBigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getScreenSize();
          }
        }, {
          key: "showDetails",
          value: function showDetails(id, title, name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var style, _name;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
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
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getScreenSize",
          value: function getScreenSize(event) {
            this.screenWidth = window.innerWidth;

            if (this.screenWidth > screenWidthBreakPoint) {
              this.slideRecentOpts = {
                slidesPerView: 5.5,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            } else if (this.screenWidth > screenWidthBreakPointMid) {
              this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            } else {
              this.slideRecentOpts = {
                slidesPerView: 1.5,
                centeredSlides: true,
                centeredSlidesBounds: true
              };
            }
          }
        }]);

        return SlideshowBigComponent;
      }();

      SlideshowBigComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SlideshowBigComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowBigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow-big',
        template: _raw_loader_slideshow_big_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_big_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlideshowBigComponent);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./slideshow-big/slideshow-big.component */
      "iAXz");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./slideshow/slideshow.component */
      "QNFj");
      /* harmony import */


      var _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./slideshow-pares/slideshow-pares.component */
      "TqpM");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./detail/detail.component */
      "151J");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
        declarations: [_slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
        exports: [_slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.login-btn {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csK0JBQUE7RUFDQSx3Q0FBQTtBQUNIOztBQUVDO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQUNIOztBQUdBO0VBQ0UsMEJBQUE7QUFBRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuXG4gaW9uLXRvb2xiYXIge1xuICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuXG5cbi5sb2dpbi1idG57XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuIl19 */";
      /***/
    },

    /***/
    "sNiG":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-big/slideshow-big.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sNiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w500'\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "vQQy":
    /*!****************************************************************!*\
      !*** ./src/app/auth/pages/login-options/login-options.page.ts ***!
      \****************************************************************/

    /*! exports provided: LoginOptionsPage */

    /***/
    function vQQy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginOptionsPage", function () {
        return LoginOptionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_options_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-options.page.html */
      "yLcQ");
      /* harmony import */


      var _login_options_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-options.page.scss */
      "eS5p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth.service */
      "qXBG");

      var LoginOptionsPage = /*#__PURE__*/function () {
        function LoginOptionsPage(modalController, authService, alertController) {
          _classCallCheck(this, LoginOptionsPage);

          this.modalController = modalController;
          this.authService = authService;
          this.alertController = alertController;
          this.logoUrl = "../../assets/cool-user.png";
        }

        _createClass(LoginOptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            console.log("logout");
            this.authService.logout();
            this.presentAlert("Se ha cerrado la sesión");
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.dismissLoginOptions();
                      _context6.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: msg,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context6.sent;
                      _context6.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismissLoginOptions",
          value: function dismissLoginOptions() {
            this.modalController.dismiss();
          }
        }]);

        return LoginOptionsPage;
      }();

      LoginOptionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      LoginOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-options',
        template: _raw_loader_login_options_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_options_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginOptionsPage);
      /***/
    },

    /***/
    "yLcQ":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login-options/login-options.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yLcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-button (click)=\"dismissLoginOptions()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n  <ion-card-header>\n    <img [src]=logoUrl class=\"user-logo\">\n    <ion-card-title><ion-label class=\"name\">{{authService.usuario.firstName}} {{authService.usuario.lastName}}</ion-label></ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-button class=\"close-sesion-btn\" expand=\"full\" color=\"primary\" (click)=\"logout()\">Cerrar Sesion</ion-button>\n    <ion-button expand=\"full\" class=\"secondary-btn delete-btn\" color=\"secondary\" >Eliminar cuenta</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map