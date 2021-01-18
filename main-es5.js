(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/R7S":
    /*!********************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function R7S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding: 50px !important;\n}\n\n.input {\n  border-bottom: 1px solid #03e370;\n}\n\n.logo-container-form {\n  padding-top: 10px;\n}\n\n.logo-form {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 40px;\n}\n\n.subtitle {\n  font-size: small;\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0e1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDNlMzcwO1xufVxuXG4ubG9nby1jb250YWluZXItZm9ybXtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5sb2dvLWZvcm17XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "/p3W":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function p3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismissLogin()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    <ion-title class=\"ion-text-center\">Inicia Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"loginForm\" #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\"formControlName=\"email\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n        Email incorrecto\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n        Campo Obligatorio\n      </span>\n\n    <p class=\"ion-text-right subtitle\">¿Olvidaste la contraseña?</p>\n\n    <ion-button *ngIf=\"!isLoading\" type=\"submit\" expand=\"full\" color=\"primary\">Entrar</ion-button>\n    <ion-button *ngIf=\"isLoading\" type=\"submit\" expand=\"full\" color=\"primary\"><ion-spinner name=\"bubbles\"></ion-spinner></ion-button>\n</form>\n  <p class=\"ion-text-center subtitle\">¿Eres nuevo aquí?</p>\n  <ion-button expand=\"full\" class=\"secondary-btn\" color=\"secondary\" (click)=\"registerModal()\">Registrate</ion-button>\n</ion-content>\n";
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
      "zUnb");
      /***/
    },

    /***/
    "8i0C":
    /*!*************************************!*\
      !*** ./src/app/auth/models/user.ts ***!
      \*************************************/

    /*! exports provided: User */

    /***/
    function i0C(module, __webpack_exports__, __webpack_require__) {
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
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "F3fk":
    /*!**************************************************!*\
      !*** ./src/app/auth/pages/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function F3fk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding: 50px !important;\n}\n\n.input {\n  border-bottom: 1px solid #03e370;\n}\n\n.logo-container-form {\n  padding-top: 10px;\n}\n\n.logo-form {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 40px;\n}\n\n.subtitle {\n  font-size: small;\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0e1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDNlMzcwO1xufVxuXG4ubG9nby1jb250YWluZXItZm9ybXtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5sb2dvLWZvcm17XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "HQC2":
    /*!******************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.ts ***!
      \******************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function HQC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "Knpb");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "/R7S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../login/login.page */
      "TJhT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../auth.service */
      "qXBG");

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
              fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)]],
              lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              terms: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('true')]]
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loginModal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dismissRegister();
                      _context.next = 3;
                      return this.modalController.create({
                        component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
                      });

                    case 3:
                      loginModal = _context.sent;
                      _context.next = 6;
                      return loginModal.present();

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
          key: "register",
          value: function register(form) {
            var _this = this;

            this.isSubmitted = true;

            if (!this.regForm.valid) {
              return false;
            } else {
              this.isLoading = true;
              this.user.firstName = form.value.fName;
              this.user.lastName = form.value.lName;
              this.user.email = form.value.email;
              this.user.password = form.value.password;
              this.authService.register(this.user).subscribe(function (res) {
                console.log(res);
                _this.isLoading = false;

                _this.presentAlert("Revisa tu correo, te hemos enviado un email de confirmación");
              }, function (err) {
                _this.isLoading = false;

                if (err.error.msg == "email in use") {
                  _this.presentAlert("Ya hay un Usuario registrado con esa dirección de correo");
                } else {
                  _this.presentAlert("Ha ocurrido un error al registrarse, por favor, intentelo más tarde");
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
                      this.dismissRegister();
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
            return this.regForm.controls;
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "Knpb":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Knpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismissRegister()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    <ion-title class=\"ion-text-center\">Nuevo Usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"regForm\"  #form=\"ngForm\" (ngSubmit)=\"register(form)\" novalidate>\n    <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" formControlName=\"fName\"></ion-input>\n    </ion-item>\n\n    <!-- Error messages -->\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fName.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fName.errors?.minlength\">\n        Campo demasiado corto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input type=\"text\" formControlName=\"lName\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.lName.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.lName.errors?.minlength\">\n        Campo demasiado corto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\"formControlName=\"email\"></ion-input>\n    </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n        Campo Obligatorio\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n        Email incorrecto\n      </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n      Campo Obligatorio\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n      Campo demasiado corto (8 carácteres al menos)\n    </span>\n\n    <ion-item>\n      <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.confirmPassword.errors?.required\">\n      Campo Obligatorio\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && regForm.hasError('mismatchedPasswords')\">\n      Las contraseñas no coinciden\n    </span>\n\n    <ion-item>\n      <ion-label>Acepto los Términos y Condiciones</ion-label>\n      <ion-checkbox formControlName=\"terms\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.terms.errors?.pattern\">\n      Debes aceptar los términos y condiciones\n    </span>\n\n    <p class=\"ion-text-right subtitle\"><a href=\"https://as.com/\" target=\"_blank\">Ver Términos y Condiciones</a></p>\n    <ion-button *ngIf=\"!isLoading\" type=\"submit\" expand=\"full\" color=\"primary\">Crear Cuenta</ion-button>\n    <ion-button *ngIf=\"isLoading\" type=\"submit\" expand=\"full\" color=\"primary\"><ion-spinner name=\"bubbles\"></ion-spinner></ion-button>\n  </form>\n  <p class=\"ion-text-center subtitle\">¿Ya tienes cuenta?</p>\n  <ion-button expand=\"full\" class=\"secondary-btn\" color=\"secondary\" (click)=\"loginModal()\">Login</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

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
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TJhT":
    /*!************************************************!*\
      !*** ./src/app/auth/pages/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function TJhT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "/p3W");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "F3fk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../register/register.page */
      "HQC2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../auth.service */
      "qXBG");

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
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var registerModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.dismissLogin();
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _register_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
                      });

                    case 3:
                      registerModal = _context3.sent;
                      _context3.next = 6;
                      return registerModal.present();

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
          key: "login",
          value: function login(form) {
            var _this3 = this;

            this.isSubmitted = true;

            if (!this.loginForm.valid) {
              return false;
            } else {
              this.isLoading = true;
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
                console.log(err.error.msg);

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.dismissLogin();
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
            return this.loginForm.controls;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/pages/login/login.page */
      "TJhT");
      /* harmony import */


      var _auth_pages_register_register_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auth/pages/register/register.page */
      "HQC2");

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
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
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

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "qXBG":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function qXBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models/user */
      "8i0C");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var URL = "https://api.movin.tk/api/auth";

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
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
          key: "logout",
          value: function logout() {
            this._usuario = null;
            this._token = null;
            localStorage.removeItem('access_token');
            localStorage.removeItem('usuario');
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
            var _this4 = this;

            return this.http.get(URL + "/signin/whoami", {
              headers: this.addAuthHeaders()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this4.isNotAuth(err);

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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
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
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map