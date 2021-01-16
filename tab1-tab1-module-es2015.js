(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "7VA0":
/*!***************************************************************!*\
  !*** ./src/app/components/slideshow/slideshow.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJzbGlkZXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJke1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-title slot=\"primary\" class=\"ion-text-left\">\n      <img [src]=logoUrl class=\"logo-header\">\n    </ion-title>\n\n    <ion-buttons slot=\"end\" *ngIf=\"auth\">\n      <ion-button (click)=\"loginOptions()\" color=\"primary\" class=\"login-btn\" >\n          <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n        {{userInitials}}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" *ngIf=\"!auth\">\n      <ion-button (click)=\"login()\" color=\"primary\" class=\"login-btn\" >\n        <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h4>Estrenos</h4>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-big [films]=\"recentFilms\"></app-slideshow-big>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Últimas Tendencias</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingAll\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Películas Populares</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow-pares [films]=\"popularFilms\"\n                        (loadMore)=\"loadMorePopularFilms()\"\n  ></app-slideshow-pares>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n        <h6>Series más vistas esta semana</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"trendingSeries\"></app-slideshow>\n\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n          <h6>Series más populares</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n  <app-slideshow [films]=\"populartSeries\"></app-slideshow>\n\n  <br>\n  <br>\n\n</ion-content>\n");

/***/ }),

/***/ "GAXj":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow/slideshow.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "GIdR":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-pares/slideshow-pares.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let pares of films | pares\">\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let film of pares\">\n        <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n          <img [src]=\"film.poster_path | image: 'w200'\" class=\"poster\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-slide>\n\n  <ion-slide class=\"slide-pares-mas\">\n\n    <ion-button expand=\"full\"\n                class=\"btn-mas\"\n                size=\"large\"\n                (click)=\"load()\"\n                color=\"primary\">\n                <ion-icon name=\"add\"\n                          slot=\"icon-only\"\n                ></ion-icon>\n    </ion-button>\n\n\n  </ion-slide>\n\n</ion-slides>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tmdb.service */ "CuVg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/pages/login/login.page */ "TJhT");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/pages/login-options/login-options.page */ "vQQy");









const screenWidthBreakPoint = 420;
let Tab1Page = class Tab1Page {
    constructor(tmdb, modalController, authService) {
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
    ngOnInit() {
        this.getRecentFilms();
        this.getPopularFilms();
        this.getTrendings();
        this.getTrendingSeries();
        this.getPopularSeries();
        this.setLoginText();
        this.isAuth();
    }
    isAuth() {
        this.authService.whoAmI().subscribe(res => {
            this.auth = true;
            if (this.auth) {
                this.userInitials = this.authService.usuario.firstName[0] + this.authService.usuario.lastName[0];
            }
        }, err => {
            this.userInitials = '';
        });
    }
    setLoginText(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > screenWidthBreakPoint) {
            this.loginText = "Login";
        }
        else {
            this.loginText = "";
        }
    }
    getRecentFilms() {
        this.tmdb.getMoviesOfMonth().subscribe(res => {
            this.recentFilms = res.results.filter(this.filmfilter);
        });
    }
    getTrendings() {
        this.tmdb.getTrendings().subscribe(res => {
            this.trendingAll = res.results.filter(this.filmfilter);
        });
    }
    getPopularFilms() {
        this.tmdb.getPopularFilms().subscribe(res => {
            const tempArr = [...this.popularFilms, ...res.results];
            this.popularFilms = tempArr.filter(this.filmfilter);
        });
    }
    getTrendingSeries() {
        this.tmdb.getTrendingSeries().subscribe(res => {
            this.trendingSeries = res.results.filter(this.filmfilter);
        });
    }
    getPopularSeries() {
        this.tmdb.getPopularSeries().subscribe(res => {
            this.populartSeries = res.results.filter(this.filmfilter);
        });
    }
    loadMorePopularFilms() {
        this.getPopularFilms();
    }
    filmfilter(film) {
        if (film.poster_path) {
            return true;
        }
        else {
            return false;
        }
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loginOptionsModal = yield this.modalController.create({
                component: _auth_pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
            });
            loginOptionsModal.onDidDismiss().then(data => { this.isAuth(); });
            return yield loginOptionsModal.present();
        });
    }
    loginOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loginModal = yield this.modalController.create({
                component: _auth_pages_login_options_login_options_page__WEBPACK_IMPORTED_MODULE_8__["LoginOptionsPage"],
            });
            loginModal.onDidDismiss().then(data => { this.isAuth(); });
            return yield loginModal.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TmdbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
Tab1Page.propDecorators = {
    setLoginText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "QNFj":
/*!*************************************************************!*\
  !*** ./src/app/components/slideshow/slideshow.component.ts ***!
  \*************************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slideshow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slideshow.component.html */ "GAXj");
/* harmony import */ var _slideshow_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow.component.scss */ "7VA0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const screenWidthBreakPoint = 720;
const screenWidthBreakPointMid = 420;
let SlideshowComponent = class SlideshowComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.slideRecentOpts = {};
    }
    ngOnInit() {
        this.getScreenSize();
        this.films.filter(film => {
            if (film.poster_path) {
                return true;
            }
            else if (film.backdrop_path) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    showDetails(id, title, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let style = '';
            let _name = '';
            if (name != undefined) {
                style = 'tv';
                _name = name;
            }
            if (title != undefined) {
                style = 'movie';
                _name = title;
            }
            this.router.navigate([`/app/details/${id}/${style}/${_name}`]);
        });
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > screenWidthBreakPoint) {
            this.slideRecentOpts = {
                slidesPerView: 9.5,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
        else if (this.screenWidth > screenWidthBreakPointMid) {
            this.slideRecentOpts = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
        else {
            this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
    }
};
SlideshowComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SlideshowComponent.propDecorators = {
    films: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
SlideshowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow',
        template: _raw_loader_slideshow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlideshowComponent);



/***/ }),

/***/ "SFns":
/*!***************************************************************************!*\
  !*** ./src/app/components/slideshow-pares/slideshow-pares.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy1wYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzbGlkZXNob3ctcGFyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "TqpM":
/*!*************************************************************************!*\
  !*** ./src/app/components/slideshow-pares/slideshow-pares.component.ts ***!
  \*************************************************************************/
/*! exports provided: SlideshowParesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowParesComponent", function() { return SlideshowParesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slideshow_pares_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slideshow-pares.component.html */ "GIdR");
/* harmony import */ var _slideshow_pares_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow-pares.component.scss */ "SFns");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const screenWidthBreakPoint = 720;
const screenWidthBreakPointMid = 420;
let SlideshowParesComponent = class SlideshowParesComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.films = [];
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.slideRecentOpts = {};
    }
    ngOnInit() {
        this.getScreenSize();
        this.films.filter(film => {
            if (film.poster_path) {
                return true;
            }
            else if (film.backdrop_path) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    showDetails(id, title, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let style = '';
            let _name = '';
            if (name != undefined) {
                style = 'tv';
                _name = name;
            }
            if (title != undefined) {
                style = 'movie';
                _name = title;
            }
            this.router.navigate([`/app/details/${id}/${style}/${_name}`]);
        });
    }
    load() {
        this.loadMore.emit();
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > screenWidthBreakPoint) {
            this.slideRecentOpts = {
                slidesPerView: 9.5,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
            };
        }
        else if (this.screenWidth > screenWidthBreakPointMid) {
            this.slideRecentOpts = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
            };
        }
        else {
            this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: -10
            };
        }
    }
};
SlideshowParesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SlideshowParesComponent.propDecorators = {
    films: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    loadMore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
SlideshowParesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow-pares',
        template: _raw_loader_slideshow_pares_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_pares_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlideshowParesComponent);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "Xkjk":
/*!***********************************************************************!*\
  !*** ./src/app/components/slideshow-big/slideshow-big.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlc2hvdy1iaWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGVzaG93LWJpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "eS5p":
/*!******************************************************************!*\
  !*** ./src/app/auth/pages/login-options/login-options.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-logo {\n  width: 60%;\n}\n\nion-card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.close-sesion-btn {\n  width: 100%;\n  margin: 40px 0 55px 0;\n}\n\n.delete-btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLW9wdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbG9nb3tcbiAgd2lkdGg6IDYwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5jbG9zZS1zZXNpb24tYnRue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0MHB4IDAgNTVweCAwO1xufVxuXG4uZGVsZXRlLWJ0bntcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "iAXz":
/*!*********************************************************************!*\
  !*** ./src/app/components/slideshow-big/slideshow-big.component.ts ***!
  \*********************************************************************/
/*! exports provided: SlideshowBigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowBigComponent", function() { return SlideshowBigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slideshow_big_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slideshow-big.component.html */ "sNiG");
/* harmony import */ var _slideshow_big_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow-big.component.scss */ "Xkjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const screenWidthBreakPoint = 720;
const screenWidthBreakPointMid = 420;
let SlideshowBigComponent = class SlideshowBigComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.slideRecentOpts = {};
    }
    ngOnInit() {
        this.getScreenSize();
    }
    showDetails(id, title, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let style = '';
            let _name = '';
            if (name != undefined) {
                style = 'tv';
                _name = name;
            }
            if (title != undefined) {
                style = 'movie';
                _name = title;
            }
            this.router.navigate([`/app/details/${id}/${style}/${_name}`]);
        });
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > screenWidthBreakPoint) {
            this.slideRecentOpts = {
                slidesPerView: 5.5,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
        else if (this.screenWidth > screenWidthBreakPointMid) {
            this.slideRecentOpts = {
                slidesPerView: 2.3,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
        else {
            this.slideRecentOpts = {
                slidesPerView: 1.5,
                centeredSlides: true,
                centeredSlidesBounds: true
            };
        }
    }
};
SlideshowBigComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SlideshowBigComponent.propDecorators = {
    films: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
SlideshowBigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slideshow-big',
        template: _raw_loader_slideshow_big_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_big_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlideshowBigComponent);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideshow-big/slideshow-big.component */ "iAXz");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "QNFj");
/* harmony import */ var _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slideshow-pares/slideshow-pares.component */ "TqpM");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "151J");









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]
        ],
        declarations: [
            _slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"],
            _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"],
            _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]
        ],
        exports: [
            _slideshow_big_slideshow_big_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowBigComponent"],
            _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"],
            _slideshow_pares_slideshow_pares_component__WEBPACK_IMPORTED_MODULE_7__["SlideshowParesComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.login-btn {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csK0JBQUE7RUFDQSx3Q0FBQTtBQUNIOztBQUVDO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQUNIOztBQUdBO0VBQ0UsMEJBQUE7QUFBRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuXG4gaW9uLXRvb2xiYXIge1xuICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuXG5cbi5sb2dpbi1idG57XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuIl19 */");

/***/ }),

/***/ "sNiG":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-big/slideshow-big.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [options]=\"slideRecentOpts\">\n  <ion-slide *ngFor=\"let film of films\">\n    <ion-card (click)=\"showDetails(film.id, film.title, film.name)\">\n      <img [src]=\"film.poster_path | image: 'w500'\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "vQQy":
/*!****************************************************************!*\
  !*** ./src/app/auth/pages/login-options/login-options.page.ts ***!
  \****************************************************************/
/*! exports provided: LoginOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOptionsPage", function() { return LoginOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_options_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-options.page.html */ "yLcQ");
/* harmony import */ var _login_options_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-options.page.scss */ "eS5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "qXBG");






let LoginOptionsPage = class LoginOptionsPage {
    constructor(modalController, authService, alertController) {
        this.modalController = modalController;
        this.authService = authService;
        this.alertController = alertController;
        this.logoUrl = "../../assets/cool-user.png";
    }
    ngOnInit() {
    }
    logout() {
        console.log("logout");
        this.authService.logout();
        this.presentAlert("Se ha cerrado la sesión");
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissLoginOptions();
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    dismissLoginOptions() {
        this.modalController.dismiss();
    }
};
LoginOptionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-options',
        template: _raw_loader_login_options_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_options_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginOptionsPage);



/***/ }),

/***/ "yLcQ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login-options/login-options.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-button (click)=\"dismissLoginOptions()\" slot=\"primary\" color=\"secondary\">X</ion-button>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n  <ion-card-header>\n    <img [src]=logoUrl class=\"user-logo\">\n    <ion-card-title><ion-label class=\"name\">{{authService.usuario.firstName}} {{authService.usuario.lastName}}</ion-label></ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-button class=\"close-sesion-btn\" expand=\"full\" color=\"primary\" (click)=\"logout()\">Cerrar Sesion</ion-button>\n    <ion-button expand=\"full\" class=\"secondary-btn delete-btn\" color=\"secondary\" >Eliminar cuenta</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map