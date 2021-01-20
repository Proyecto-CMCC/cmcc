(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"], {
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


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJke1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";
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
    "Ls9r":
    /*!*********************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Ls9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";
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
    "QQAA":
    /*!******************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.ts ***!
      \******************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function QQAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "m1kx");
      /* harmony import */


      var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./explore-container.component.scss */
      "huSS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExploreContainerComponent);
      /***/
    },

    /***/
    "RMOD":
    /*!************************************!*\
      !*** ./src/app/pipes/hour.pipe.ts ***!
      \************************************/

    /*! exports provided: HourPipe */

    /***/
    function RMOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HourPipe", function () {
        return HourPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HourPipe = /*#__PURE__*/function () {
        function HourPipe() {
          _classCallCheck(this, HourPipe);
        }

        _createClass(HourPipe, [{
          key: "transform",
          value: function transform(minutes) {
            var htext = " horas ";
            var mtext = " minutos ";

            if (minutes > 59) {
              var hours = minutes / 60;
              var rhours = Math.floor(hours);
              var mins = (hours - rhours) * 60;
              var rmins = Math.round(mins);

              if (rhours < 2) {
                htext = " hora ";
              }

              if (rmins < 2) {
                mtext = " minuto ";
              }

              return rhours + htext + rmins + mtext;
            }

            return minutes.toString() + mtext;
          }
        }]);

        return HourPipe;
      }();

      HourPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hour'
      })], HourPipe);
      /***/
    },

    /***/
    "S6iF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function S6iF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-title slot=\"primary\" class=\"ion-text-left\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n\n    <ion-buttons slot=\"end\" *ngIf=\"auth\">\n      <ion-button (click)=\"loginOptions()\" color=\"primary\" class=\"login-btn\" >\n          <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n        {{userInitials}}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" *ngIf=\"!auth\">\n      <ion-button (click)=\"login()\" color=\"primary\" class=\"login-btn\" >\n        <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n";
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


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXNob3ctcGFyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGVzaG93LXBhcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "SGa8":
    /*!*******************************************!*\
      !*** ./src/app/pipes/url-favicon.pipe.ts ***!
      \*******************************************/

    /*! exports provided: UrlFaviconPipe */

    /***/
    function SGa8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlFaviconPipe", function () {
        return UrlFaviconPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UrlFaviconPipe = /*#__PURE__*/function () {
        function UrlFaviconPipe() {
          _classCallCheck(this, UrlFaviconPipe);
        }

        _createClass(UrlFaviconPipe, [{
          key: "transform",
          value: function transform(img) {
            var faviconUrl = img;

            if (faviconUrl.indexOf('netflix') > 0) {
              return './assets/netflix_icon.png';
            }

            if (faviconUrl.indexOf('hbo') > 0) {
              return './assets/hbo_icon.png';
            }

            if (faviconUrl.indexOf('movistar') > 0) {
              return './assets/movistar_icon.png';
            }

            if (faviconUrl.indexOf('primevideo') > 0) {
              return './assets/amazon_icon.png';
            }

            if (faviconUrl.indexOf('apple') > 0) {
              return './assets/apple_icon.png';
            }

            if (faviconUrl.indexOf('filmin') > 0) {
              return './assets/filmin_icon.png';
            }

            if (faviconUrl.indexOf('google') > 0) {
              return './assets/google_icon.png';
            }

            if (faviconUrl.indexOf('microsoft') > 0) {
              return './assets/microsoft_icon.png';
            }

            return "https://www.google.com/s2/favicons?domain=" + img;
          }
        }]);

        return UrlFaviconPipe;
      }();

      UrlFaviconPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'urlFavicon'
      })], UrlFaviconPipe);
      /***/
    },

    /***/
    "Sh9B":
    /*!*************************************!*\
      !*** ./src/app/pipes/pares.pipe.ts ***!
      \*************************************/

    /*! exports provided: ParesPipe */

    /***/
    function Sh9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParesPipe", function () {
        return ParesPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ParesPipe = /*#__PURE__*/function () {
        function ParesPipe() {
          _classCallCheck(this, ParesPipe);
        }

        _createClass(ParesPipe, [{
          key: "transform",
          value: function transform(arr) {
            if (arr == undefined) {
              return;
            }

            var pares = arr.reduce(function (result, value, index, array) {
              if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
              }

              return result;
            }, []);
            return pares;
          }
        }]);

        return ParesPipe;
      }();

      ParesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pares'
      })], ParesPipe);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var style, _name;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
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
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXNob3ctYmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNsaWRlc2hvdy1iaWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "bruO":
    /*!*************************************!*\
      !*** ./src/app/pipes/image.pipe.ts ***!
      \*************************************/

    /*! exports provided: ImagePipe */

    /***/
    function bruO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePipe", function () {
        return ImagePipe;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tmdbImagePath;

      var ImagePipe = /*#__PURE__*/function () {
        function ImagePipe() {
          _classCallCheck(this, ImagePipe);
        }

        _createClass(ImagePipe, [{
          key: "transform",
          value: function transform(img) {
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'original';

            if (!img) {
              return './assets/no-image-banner.jpg';
            }

            var imgUrl = "".concat(URL, "/").concat(size, "/").concat(img);
            return imgUrl;
          }
        }]);

        return ImagePipe;
      }();

      ImagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'image'
      })], ImagePipe);
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


      __webpack_exports__["default"] = ".user-logo {\n  width: 60%;\n}\n\nion-card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.close-sesion-btn {\n  width: 100%;\n  margin: 40px 0 55px 0;\n}\n\n.delete-btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUYiLCJmaWxlIjoibG9naW4tb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1sb2dve1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5jbG9zZS1zZXNpb24tYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCAwIDU1cHggMDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "S6iF");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "Ls9r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var src_app_auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/auth/pages/login/login.page */
      "TJhT");
      /* harmony import */


      var src_app_auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/pages/login-options/login-options.page */
      "vQQy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(authService, modalController) {
          _classCallCheck(this, NavbarComponent);

          this.authService = authService;
          this.modalController = modalController;
          this.logoUrl = "../../assets/logo.svg";
          this.auth = false;
          this.userInitials = '';
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var loginOptionsModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
                      });

                    case 2:
                      loginOptionsModal = _context3.sent;
                      loginOptionsModal.onDidDismiss().then(function (data) {
                        _this2.isAuth();
                      });
                      _context3.next = 6;
                      return loginOptionsModal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loginOptions",
          value: function loginOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var loginModal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: src_app_auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_6__["LoginOptionsPage"]
                      });

                    case 2:
                      loginModal = _context4.sent;
                      loginModal.onDidDismiss().then(function (data) {
                        _this3.isAuth();
                      });
                      _context4.next = 6;
                      return loginModal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "huSS":
    /*!********************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function huSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
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
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _image_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image.pipe */
      "bruO");
      /* harmony import */


      var _pares_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pares.pipe */
      "Sh9B");
      /* harmony import */


      var _year_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./year.pipe */
      "xhhz");
      /* harmony import */


      var _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./url-favicon.pipe */
      "SGa8");
      /* harmony import */


      var _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./url-website-name.pipe */
      "vx+v");
      /* harmony import */


      var _hour_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hour.pipe */
      "RMOD");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"], _pares_pipe__WEBPACK_IMPORTED_MODULE_4__["ParesPipe"], _year_pipe__WEBPACK_IMPORTED_MODULE_5__["YearPipe"], _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__["UrlFaviconPipe"], _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__["UrlWebsiteNamePipe"], _hour_pipe__WEBPACK_IMPORTED_MODULE_8__["HourPipe"]],
        exports: [_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"], _pares_pipe__WEBPACK_IMPORTED_MODULE_4__["ParesPipe"], _year_pipe__WEBPACK_IMPORTED_MODULE_5__["YearPipe"], _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__["UrlFaviconPipe"], _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__["UrlWebsiteNamePipe"], _hour_pipe__WEBPACK_IMPORTED_MODULE_8__["HourPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], PipesModule);
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
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "hrlM");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
        declarations: [_slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
        exports: [_slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"], _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "m1kx":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m1kx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n    <ion-button type=\"submit\" color=\"primary\">Iniciar Sesión</ion-button>\n</div>\n";
      /***/
    },

    /***/
    "qtYk":
    /*!***************************************************************!*\
      !*** ./src/app/explore-container/explore-container.module.ts ***!
      \***************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function qtYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-container.component */
      "QQAA");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
      })], ExploreContainerComponentModule);
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
    "vx+v":
    /*!************************************************!*\
      !*** ./src/app/pipes/url-website-name.pipe.ts ***!
      \************************************************/

    /*! exports provided: UrlWebsiteNamePipe */

    /***/
    function vxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlWebsiteNamePipe", function () {
        return UrlWebsiteNamePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UrlWebsiteNamePipe = /*#__PURE__*/function () {
        function UrlWebsiteNamePipe() {
          _classCallCheck(this, UrlWebsiteNamePipe);
        }

        _createClass(UrlWebsiteNamePipe, [{
          key: "transform",
          value: function transform(url) {
            var urlWithoutHttp = url.substring(url.indexOf("//") + 2);
            var finalUrl = urlWithoutHttp.substring(0, urlWithoutHttp.indexOf("/"));
            finalUrl = finalUrl.replace('www.', '');
            finalUrl = finalUrl.replace('.es', '');
            finalUrl = finalUrl.replace('.com', '');
            finalUrl = finalUrl.replace('ver.', '');
            finalUrl = finalUrl.replace('plus', '+');
            finalUrl = finalUrl.replace('.', ' ');
            finalUrl = finalUrl.replace('play google', 'google play');
            finalUrl = finalUrl.replace('app primevideo', 'amazon prime');
            finalUrl = finalUrl.toUpperCase();
            return finalUrl;
          }
        }]);

        return UrlWebsiteNamePipe;
      }();

      UrlWebsiteNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'urlWebsiteName'
      })], UrlWebsiteNamePipe);
      /***/
    },

    /***/
    "xhhz":
    /*!************************************!*\
      !*** ./src/app/pipes/year.pipe.ts ***!
      \************************************/

    /*! exports provided: YearPipe */

    /***/
    function xhhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YearPipe", function () {
        return YearPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var YearPipe = /*#__PURE__*/function () {
        function YearPipe() {
          _classCallCheck(this, YearPipe);
        }

        _createClass(YearPipe, [{
          key: "transform",
          value: function transform(date) {
            var _date = new Date(date);

            return _date.getFullYear();
          }
        }]);

        return YearPipe;
      }();

      YearPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'year'
      })], YearPipe);
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
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es5.js.map