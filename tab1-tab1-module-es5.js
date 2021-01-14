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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-big/slideshow-big.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-big/slideshow-big.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlideshowBigSlideshowBigComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w500'\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-pares/slideshow-pares.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-pares/slideshow-pares.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlideshowParesSlideshowParesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let pares of films | pares\">\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let film of pares\">\n        <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n          <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-slide>\n\n  <ion-slide class=\"slide-pares-mas\">\n\n    <ion-button expand=\"full\"\n                class=\"btn-mas\"\n                size=\"large\"\n                (click)=\"load()\"\n                color=\"primary\">\n                <ion-icon name=\"add\"\n                          slot=\"icon-only\"\n                ></ion-icon>\n    </ion-button>\n\n\n  </ion-slide>\n\n</ion-slides>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow/slideshow.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow/slideshow.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlideshowSlideshowComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n    <ion-row>\n      <ion-col>\n        <h4>Estrenos</h4>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-big [films]=\"recentFilms\"></app-slideshow-big>\n\n    <ion-row>\n      <ion-col>\n        <h6>Últimas Tendencias</h6>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingAll\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <h6>Películas Populares</h6>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-pares [films]=\"popularFilms\"\n                        (loadMore)=\"loadMorePopularFilms()\"\n  ></app-slideshow-pares>\n\n    <ion-row>\n      <ion-col>\n        <h6>Series más vistas esta semana</h6>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingSeries\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <h6>Series más populares</h6>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"populartSeries\"></app-slideshow>\n\n  <br>\n  <br>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./slideshow-big/slideshow-big.component */
      "./src/app/components/slideshow-big/slideshow-big.component.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./slideshow/slideshow.component */
      "./src/app/components/slideshow/slideshow.component.ts");
      /* harmony import */


      var _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./slideshow-pares/slideshow-pares.component */
      "./src/app/components/slideshow-pares/slideshow-pares.component.ts");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./detail/detail.component */
      "./src/app/components/detail/detail.component.ts");

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
    "./src/app/components/slideshow-big/slideshow-big.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/slideshow-big/slideshow-big.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSlideshowBigSlideshowBigComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3ctYmlnL3NsaWRlc2hvdy1iaWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlc2hvdy1iaWcvc2xpZGVzaG93LWJpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/slideshow-big/slideshow-big.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/slideshow-big/slideshow-big.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SlideshowBigComponent */

    /***/
    function srcAppComponentsSlideshowBigSlideshowBigComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowBigComponent", function () {
        return SlideshowBigComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../detail/detail.component */
      "./src/app/components/detail/detail.component.ts");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowBigComponent = /*#__PURE__*/function () {
        function SlideshowBigComponent(modalCtrl) {
          _classCallCheck(this, SlideshowBigComponent);

          this.modalCtrl = modalCtrl;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      SlideshowBigComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowBigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slideshow-big',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./slideshow-big.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-big/slideshow-big.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./slideshow-big.component.scss */
        "./src/app/components/slideshow-big/slideshow-big.component.scss"))["default"]]
      })], SlideshowBigComponent);
      /***/
    },

    /***/
    "./src/app/components/slideshow-pares/slideshow-pares.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/slideshow-pares/slideshow-pares.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSlideshowParesSlideshowParesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3ctcGFyZXMvc2xpZGVzaG93LXBhcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3ctcGFyZXMvc2xpZGVzaG93LXBhcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/slideshow-pares/slideshow-pares.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/slideshow-pares/slideshow-pares.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SlideshowParesComponent */

    /***/
    function srcAppComponentsSlideshowParesSlideshowParesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowParesComponent", function () {
        return SlideshowParesComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../detail/detail.component */
      "./src/app/components/detail/detail.component.ts");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowParesComponent = /*#__PURE__*/function () {
        function SlideshowParesComponent(modalCtrl) {
          _classCallCheck(this, SlideshowParesComponent);

          this.modalCtrl = modalCtrl;
          this.films = [];
          this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
                        componentProps: {
                          id: id,
                          title: title,
                          name: name
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();

                    case 4:
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      SlideshowParesComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadMore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowParesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slideshow-pares',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./slideshow-pares.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-pares/slideshow-pares.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./slideshow-pares.component.scss */
        "./src/app/components/slideshow-pares/slideshow-pares.component.scss"))["default"]]
      })], SlideshowParesComponent);
      /***/
    },

    /***/
    "./src/app/components/slideshow/slideshow.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/slideshow/slideshow.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSlideshowSlideshowComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY2FyZHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/slideshow/slideshow.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/slideshow/slideshow.component.ts ***!
      \*************************************************************/

    /*! exports provided: SlideshowComponent */

    /***/
    function srcAppComponentsSlideshowSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
        return SlideshowComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../detail/detail.component */
      "./src/app/components/detail/detail.component.ts");

      var screenWidthBreakPoint = 720;
      var screenWidthBreakPointMid = 420;

      var SlideshowComponent = /*#__PURE__*/function () {
        function SlideshowComponent(modalCtrl) {
          _classCallCheck(this, SlideshowComponent);

          this.modalCtrl = modalCtrl;
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
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
                        componentProps: {
                          id: id,
                          title: title,
                          name: name
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.present();

                    case 4:
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      SlideshowComponent.propDecorators = {
        films: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      SlideshowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slideshow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./slideshow.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow/slideshow.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./slideshow.component.scss */
        "./src/app/components/slideshow/slideshow.component.scss"))["default"]]
      })], SlideshowComponent);
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

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
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

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
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\nh4 {\n  color: #2ffc8d;\n}\n\nh6 {\n  color: #03e370;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLCtCQUFBO0VBQ0Esd0NBQUE7QUFDSDs7QUFFQztFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUFDSDs7QUFFQztFQUNFLGNBQUE7QUFDSDs7QUFFQztFQUNFLGNBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuIH1cblxuIGlvbi10b29sYmFyIHtcbiAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuIH1cblxuIGg0e1xuICAgY29sb3I6ICMyZmZjOGQ7XG4gfVxuXG4gaDZ7XG4gICBjb2xvcjojMDNlMzcwO1xuIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(tmdb) {
          _classCallCheck(this, Tab1Page);

          this.tmdb = tmdb;
          this.logoUrl = "../../assets/logo.svg";
          this.recentFilms = [];
          this.trendingAll = [];
          this.popularFilms = [];
          this.trendingSeries = [];
          this.populartSeries = [];
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRecentFilms();
            this.getPopularFilms();
            this.getTrendings();
            this.getTrendingSeries();
            this.getPopularSeries();
          }
        }, {
          key: "getRecentFilms",
          value: function getRecentFilms() {
            var _this = this;

            this.tmdb.getMoviesOfMonth().subscribe(function (res) {
              _this.recentFilms = res.results.filter(_this.filmfilter);
            });
          }
        }, {
          key: "getTrendings",
          value: function getTrendings() {
            var _this2 = this;

            this.tmdb.getTrendings().subscribe(function (res) {
              _this2.trendingAll = res.results.filter(_this2.filmfilter);
            });
          }
        }, {
          key: "getPopularFilms",
          value: function getPopularFilms() {
            var _this3 = this;

            this.tmdb.getPopularFilms().subscribe(function (res) {
              var tempArr = [].concat(_toConsumableArray(_this3.popularFilms), _toConsumableArray(res.results));
              _this3.popularFilms = tempArr.filter(_this3.filmfilter);
            });
          }
        }, {
          key: "getTrendingSeries",
          value: function getTrendingSeries() {
            var _this4 = this;

            this.tmdb.getTrendingSeries().subscribe(function (res) {
              _this4.trendingSeries = res.results.filter(_this4.filmfilter);
            });
          }
        }, {
          key: "getPopularSeries",
          value: function getPopularSeries() {
            var _this5 = this;

            this.tmdb.getPopularSeries().subscribe(function (res) {
              _this5.populartSeries = res.results.filter(_this5.filmfilter);
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
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map