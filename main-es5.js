(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismissLogin()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    <ion-title class=\"ion-text-center\">Inicia Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"loginForm\" #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\"formControlName=\"email\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n        Email incorrecto\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n        Campo Obligatorio\n      </span>\n\n    <p class=\"ion-text-right subtitle\">¿Olvidaste la contraseña?</p>\n\n    <ion-button *ngIf=\"!isLoading\" type=\"submit\" expand=\"full\" color=\"primary\">Entrar</ion-button>\n    <ion-button *ngIf=\"isLoading\" type=\"submit\" expand=\"full\" color=\"primary\"><ion-spinner name=\"bubbles\"></ion-spinner></ion-button>\n</form>\n  <p class=\"ion-text-center subtitle\">¿Eres nuevo aquí?</p>\n  <ion-button expand=\"full\" class=\"secondary-btn\" color=\"secondary\" (click)=\"registerModal()\">Registrate</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismissRegister()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    <ion-title class=\"ion-text-center\">Nuevo Usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"regForm\"  #form=\"ngForm\" (ngSubmit)=\"register(form)\" novalidate>\n    <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" formControlName=\"fName\"></ion-input>\n    </ion-item>\n\n    <!-- Error messages -->\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fName.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fName.errors?.minlength\">\n        Campo demasiado corto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input type=\"text\" formControlName=\"lName\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.lName.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.lName.errors?.minlength\">\n        Campo demasiado corto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\"formControlName=\"email\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n        Email incorrecto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n      Campo Obligatorio\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n      Campo demasiado corto (8 carácteres al menos)\n    </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.confirmPassword.errors?.required\">\n      Campo Obligatorio\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && regForm.hasError('mismatchedPasswords')\">\n      Las contraseñas no coinciden\n    </span>\n\n    <ion-item>\n      <ion-label>Acepto los Términos y Condiciones</ion-label>\n      <ion-checkbox formControlName=\"terms\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.terms.errors?.pattern\">\n      Debes aceptar los términos y condiciones\n    </span>\n\n    <p class=\"ion-text-right subtitle\"><a href=\"https://as.com/\" target=\"_blank\">Ver Términos y Condiciones</a></p>\n    <ion-button *ngIf=\"!isLoading\" type=\"submit\" expand=\"full\" color=\"primary\">Crear Cuenta</ion-button>\n    <ion-button *ngIf=\"isLoading\" type=\"submit\" expand=\"full\" color=\"primary\"><ion-spinner name=\"bubbles\"></ion-spinner></ion-button>\n  </form>\n  <p class=\"ion-text-center subtitle\">¿Ya tienes cuenta?</p>\n  <ion-button expand=\"full\" class=\"secondary-btn\" color=\"secondary\" (click)=\"loginModal()\">Login</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/pages/login/login.page */
      "./src/app/auth/pages/login/login.page.ts");
      /* harmony import */


      var _auth_pages_register_register_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auth/pages/register/register.page */
      "./src/app/auth/pages/register/register.page.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_11__["LoginPage"], _auth_pages_register_register_page__WEBPACK_IMPORTED_MODULE_12__["RegisterPage"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/auth/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models/user */
      "./src/app/auth/models/user.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var URL = "http://127.0.0.1:5000/api/auth";

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
        }

        _createClass(AuthService, [{
          key: "addAuthHeaders",
          value: function addAuthHeaders() {
            var token = this.token;

            if (token != null) {
              return this.httpHeader.append('Authorization', 'Bearer ' + token);
            } else {
              return this.httpHeader;
            }
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post(URL + "/signup", user);
          }
        }, {
          key: "login",
          value: function login(user) {
            return this.http.post(URL + "/signin", user);
          }
        }, {
          key: "guardarToken",
          value: function guardarToken(access_token) {
            this._token = access_token;
            localStorage.setItem('access_token', access_token);
          }
        }, {
          key: "guardarUsuario",
          value: function guardarUsuario(user) {
            localStorage.setItem('usuario', JSON.stringify(user));
          }
        }, {
          key: "whoAmI",
          value: function whoAmI() {
            var _this2 = this;

            return this.http.get(URL + "/signin/whoami", {
              headers: this.addAuthHeaders()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this2.isNotAuth(err);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }));
          }
        }, {
          key: "isNotAuth",
          value: function isNotAuth(e) {
            if (e) {
              localStorage.removeItem('access_token');
              localStorage.removeItem('usuario');
              return true;
            }
          }
        }, {
          key: "usuario",
          get: function get() {
            if (this._usuario != null) {
              return this._usuario;
            } else if (this._usuario == null && localStorage.getItem('usuario') != null) {
              this._usuario = JSON.parse(localStorage.getItem('usuario'));
              return this._usuario;
            } else {
              return new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
            }
          }
        }, {
          key: "token",
          get: function get() {
            if (this._token != null) {
              return this._token;
            } else if (this._token == null && localStorage.getItem('access_token') != null) {
              this._token = localStorage.getItem('access_token');
              return this._token;
            } else {
              return null;
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/auth/models/user.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/models/user.ts ***!
      \*************************************/

    /*! exports provided: User */

    /***/
    function srcAppAuthModelsUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "./src/app/auth/pages/login/login.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/auth/pages/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding: 50px !important;\n}\n\n.input {\n  border-bottom: 1px solid #03e370;\n}\n\n.logo-container-form {\n  padding-top: 10px;\n}\n\n.logo-form {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 40px;\n}\n\n.subtitle {\n  font-size: small;\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwM2UzNzA7XG59XG5cbi5sb2dvLWNvbnRhaW5lci1mb3Jte1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28tZm9ybXtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxle1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/auth/pages/login/login.page.ts":
    /*!************************************************!*\
      !*** ./src/app/auth/pages/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppAuthPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../register/register.page */
      "./src/app/auth/pages/register/register.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth.service */
      "./src/app/auth/auth.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(modalController, navCtrl, formBuilder, authService, alertController) {
          _classCallCheck(this, LoginPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertController = alertController;
          this.logoUrl = "../../assets/logo.svg";
          this.isLoading = false;
          this.isSubmitted = false;
          this.user = {
            email: "",
            password: ""
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "dismissLogin",
          value: function dismissLogin() {
            this.modalController.dismiss();
          }
        }, {
          key: "registerModal",
          value: function registerModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var registerModal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dismissLogin();
                      _context.next = 3;
                      return this.modalController.create({
                        component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                      });

                    case 3:
                      registerModal = _context.sent;
                      _context.next = 6;
                      return registerModal.present();

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
          key: "login",
          value: function login(form) {
            var _this3 = this;

            this.isLoading = true;
            this.isSubmitted = true;

            if (!this.loginForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              this.user.email = form.value.email;
              this.user.password = form.value.password;
              this.authService.login(this.user).subscribe(function (res) {
                console.log(res);

                _this3.authService.guardarToken(res.access_token);

                _this3.authService.whoAmI().subscribe(function (res) {
                  _this3.authService.guardarUsuario(res);

                  _this3.isLoading = false;

                  _this3.presentAlert("Bienvenido " + _this3.authService.usuario.firstName);
                });
              }, function (err) {
                _this3.isLoading = false;

                if (err.error.msg == "Invalid email or password") {
                  _this3.presentAlert("Usuario y/o Contraseña incorrectos");
                } else {
                  _this3.presentAlert("Ha ocurrido un error al iniciar sesión, por favor, intentelo más tarde");
                }
              });
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.dismissLogin();
                      _context2.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: msg,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/auth/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/auth/pages/register/register.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding: 50px !important;\n}\n\n.input {\n  border-bottom: 1px solid #03e370;\n}\n\n.logo-container-form {\n  padding-top: 10px;\n}\n\n.logo-form {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 40px;\n}\n\n.subtitle {\n  font-size: small;\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwM2UzNzA7XG59XG5cbi5sb2dvLWNvbnRhaW5lci1mb3Jte1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28tZm9ybXtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxle1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/auth/pages/register/register.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.ts ***!
      \******************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppAuthPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login/login.page */
      "./src/app/auth/pages/login/login.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth.service */
      "./src/app/auth/auth.service.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalController, navCtrl, formBuilder, authService, alertController) {
          _classCallCheck(this, RegisterPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertController = alertController;
          this.logoUrl = "../../assets/logo.svg";
          this.isLoading = false;
          this.isSubmitted = false;
          this.user = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          };
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regForm = this.formBuilder.group({
              fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
              lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              terms: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('true')]]
            }, {
              validator: this.matchingPasswords('password', 'confirmPassword')
            });
          }
        }, {
          key: "matchingPasswords",
          value: function matchingPasswords(passwordKey, confirmPasswordKey) {
            return function (group) {
              var password = group.controls[passwordKey];
              var confirmPassword = group.controls[confirmPasswordKey];

              if (password.value !== confirmPassword.value) {
                return {
                  mismatchedPasswords: true
                };
              }
            };
          }
        }, {
          key: "dismissRegister",
          value: function dismissRegister() {
            this.modalController.dismiss();
          }
        }, {
          key: "loginModal",
          value: function loginModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loginModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.dismissRegister();
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
                      });

                    case 3:
                      loginModal = _context3.sent;
                      _context3.next = 6;
                      return loginModal.present();

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
          key: "register",
          value: function register(form) {
            var _this4 = this;

            this.isLoading = true;
            this.isSubmitted = true;

            if (!this.regForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              this.user.firstName = form.value.fName;
              this.user.lastName = form.value.lName;
              this.user.email = form.value.email;
              this.user.password = form.value.password;
              this.authService.register(this.user).subscribe(function (res) {
                console.log(res);
                _this4.isLoading = false;

                _this4.presentAlert("Revisa tu correo, te hemos enviado un email de confirmación");
              }, function (err) {
                _this4.isLoading = false;

                if (err.error.msg == "email in use") {
                  _this4.presentAlert("Ya hay un Usuario registrado con esa dirección de correo");
                } else {
                  _this4.presentAlert("Ha ocurrido un error al registrarse, por favor, intentelo más tarde");
                }
              });
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.dismissRegister();
                      _context4.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: msg,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.regForm.controls;
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/auth/pages/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        tmdbUrl: 'https://api.themoviedb.org/3',
        tmdbApiKey: '83b0a0c57a450cf6e50e3d514f2fa2f8',
        tmdbImagePath: 'https://image.tmdb.org/t/p'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/carlos/Documentos/Front-End-1/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map