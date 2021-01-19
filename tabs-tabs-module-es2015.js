(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "151J":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail.component.html */ "zvUw");
/* harmony import */ var _detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.component.scss */ "8GLH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tmdb.service */ "CuVg");
/* harmony import */ var src_app_services_justwatch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/justwatch.service */ "s1lG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const screenWidthBreakPoint = 1234;
const screenWidthBreakPointMid = 720;
let DetailComponent = class DetailComponent {
    constructor(tmdb, justWatch, route, _location) {
        this.tmdb = tmdb;
        this.justWatch = justWatch;
        this.route = route;
        this._location = _location;
        this.actors = [];
        this.oculto = 150;
        this.justWatchPostBody = {
            country: 'ES',
            search: '',
            idtmdb: 0,
            type: '',
            tmdb_vote: 0,
            tmdb_popularity: 0
        };
        this.justWatchProviders = [];
        this.rentProviders = [];
        this.buyProviders = [];
        this.streamingProviders = [];
        this.slideOptActores = {};
        this.slideOptProviders = {};
    }
    ngOnInit() {
        this.getParams();
        this.loadJustWatchPostBody();
        this.slideOptActores = {
            slidesPerView: 2.8,
            centeredSlides: true,
            centeredSlidesBounds: true,
            freeMode: true
        };
        this.slideOptProviders = {
            slidesPerView: 2.7,
            scrollbar: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            freeMode: true
        };
        this.getScreenSize();
        this.loadDetails();
    }
    getParams() {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.type = this.route.snapshot.paramMap.get("type");
        this.title = this.route.snapshot.paramMap.get("title");
    }
    loadDetails() {
        if (this.type == "movie") {
            this.tmdb.getMovieDetail(String(this.id)).subscribe(res => {
                this.film = res;
            });
            this.tmdb.getMovieCredits(String(this.id)).subscribe(res => {
                this.actors = res.cast;
                let crew = res.crew;
                this.director = crew.filter(element => element.job == "Director")[0];
                console.log(this.director);
            });
        }
        else if (this.type == "tv") {
            this.tmdb.getSerieDetail(String(this.id)).subscribe(res => {
                this.serie = res;
            });
            this.tmdb.getSerieCredits(String(this.id)).subscribe(res => {
                this.actors = res.cast;
            });
        }
    }
    loadJustWatchPostBody() {
        this.justWatchPostBody.idtmdb = this.id;
        this.justWatchPostBody.search = this.title;
        this.justWatchPostBody.type = this.type;
        this.justWatch.getPlatforms(this.justWatchPostBody).subscribe(res => {
            this.justWatchProviders = res;
            this.buyProviders = this.justWatchProviders.filter(e => { return e.monetization_type == "buy"; });
            this.rentProviders = this.justWatchProviders.filter(e => { return e.monetization_type == "rent"; });
            this.streamingProviders = this.justWatchProviders.filter(e => { return e.monetization_type == "flatrate"; });
        });
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > screenWidthBreakPoint) {
            this.slideOptActores = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
        else if (this.screenWidth > screenWidthBreakPointMid) {
            this.slideOptActores = {
                slidesPerView: 3.4,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
        else {
            this.slideOptActores = {
                slidesPerView: 2.8,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
    }
    return() {
        this._location.back();
    }
};
DetailComponent.ctorParameters = () => [
    { type: src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_5__["TmdbService"] },
    { type: src_app_services_justwatch_service__WEBPACK_IMPORTED_MODULE_6__["JustwatchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
DetailComponent.propDecorators = {
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
DetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailComponent);



/***/ }),

/***/ "8GLH":
/*!*********************************************************!*\
  !*** ./src/app/components/detail/detail.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back_img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: -webkit-fill-available;\n  -o-object-position: 50% 10%;\n     object-position: 50% 10%;\n}\n\n.backdrop-img {\n  width: 100%;\n  max-height: 500px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #03e370;\n}\n\n.poster-detalle-sobre {\n  position: relative;\n  top: -75px;\n  left: -10px;\n  margin-bottom: -75px;\n}\n\n.poster {\n  max-width: 200px;\n  margin: auto;\n}\n\n.titulo {\n  width: 100%;\n  position: absolute;\n  color: white;\n  padding: 0px 15px 50px 15px;\n  height: 70px;\n  background: black;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.787552521) 37%);\n}\n\n.titulo h1 {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.card-actor {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 0px 8px 2px #5454546e;\n}\n\n.card-actor > img {\n  height: 150px;\n  width: 100px;\n}\n\n.read-more {\n  cursor: pointer;\n}\n\n.actor-name {\n  padding: 10px;\n}\n\n.providers {\n  margin-bottom: 20px;\n}\n\n.providers-notfound {\n  text-align: center;\n  color: #03e370;\n}\n\n.providers ion-slide {\n  background-color: #5a5a5a;\n  margin-right: 5px;\n}\n\n.provider-card {\n  background-color: #5a5a5a;\n  color: #ffffff;\n  padding: 5px;\n  box-shadow: none !important;\n}\n\n.provider-img {\n  height: 25px;\n}\n\n.provider-opt {\n  font-size: small;\n  color: darkgray;\n}\n\n.main-detail {\n  text-align: center;\n  font-size: smaller;\n}\n\n.main-details {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.tagline {\n  font-style: oblique;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDRiwyQkFBQTtLQUFBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLGdDQUFBO0FBQUY7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBR0Esd0ZBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFHQSxxQ0FBQTtBQUFKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2ltZ3tcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDEwJTtcbn1cblxuLmJhY2tkcm9wLWltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuXG59XG5cbi5ib3JkZXItYm90dG9te1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAzZTM3MDtcbn1cblxuLnBvc3Rlci1kZXRhbGxlLXNvYnJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNzVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNzVweDtcbn1cblxuLnBvc3RlcntcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdHVsbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMTVweCA1MHB4IDE1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzg3NTUyNTIxMDA4NDAzMykgMzclKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzg3NTUyNTIxMDA4NDAzMykgMzclKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzg3NTUyNTIxMDA4NDAzMykgMzclKTtcbiAgfVxuXG4udGl0dWxvIGgxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jYXJkLWFjdG9ye1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjNTQ1NDU0NmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzU0NTQ1NDZlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjNTQ1NDU0NmU7XG59XG5cbi5jYXJkLWFjdG9yPmltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnJlYWQtbW9yZXtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5hY3Rvci1uYW1lIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb3ZpZGVyc3tcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnByb3ZpZGVycy1ub3Rmb3VuZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAzZTM3MDtcbn1cblxuLnByb3ZpZGVycyBpb24tc2xpZGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvdmlkZXItY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvdmlkZXItaW1ne1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wcm92aWRlci1vcHR7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLm1haW4tZGV0YWlse1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLm1haW4tZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi50YWdsaW5le1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\"  class=\"no-border\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"saved\">\n      <ion-icon name=\"bookmark-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "CuVg":
/*!******************************************!*\
  !*** ./src/app/services/tmdb.service.ts ***!
  \******************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tmdbUrl;
const APIKEY = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tmdbApiKey;
let TmdbService = class TmdbService {
    constructor(http) {
        this.http = http;
        this.popularFilmPage = 0;
        this.popularSeriePage = 0;
    }
    executeQuery(query) {
        query = URL + query;
        query += `&api_key=${APIKEY}&language=es&include_image_language=es`;
        return this.http.get(query);
    }
    getMovieDetail(id) {
        return this.executeQuery(`/movie/${id}?a=1`);
    }
    getMovieCredits(id) {
        return this.executeQuery(`/movie/${id}/credits?a=1`);
    }
    getSerieDetail(id) {
        return this.executeQuery(`/tv/${id}?a=1`);
    }
    getSerieCredits(id) {
        return this.executeQuery(`/tv/${id}/credits?a=1`);
    }
    getMoviesOfMonth() {
        const today = new Date();
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        let month = today.getMonth() + 1;
        let monthString;
        if (month < 10) {
            monthString = '0' + month;
        }
        else {
            monthString = month;
        }
        const initDate = `${today.getFullYear()}-${monthString}-01`;
        const lastDate = `${today.getFullYear()}-${monthString}-${lastDay}`;
        return this.executeQuery(`/discover/movie?primary_release_date.gte=${initDate}&primary_release_date.lte=${lastDate}`);
    }
    getTrendings() {
        const query = '/trending/all/week?';
        return this.executeQuery(query);
    }
    getTrendingSeries() {
        const query = '/trending/tv/week?';
        return this.executeQuery(query);
    }
    getPopularFilms() {
        this.popularFilmPage++;
        const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularFilmPage}`;
        return this.executeQuery(query);
    }
    getPopularSeries() {
        this.popularSeriePage++;
        const query = `/discover/tv?sort_by=popularity.desc&page=${this.popularFilmPage}`;
        return this.executeQuery(query);
    }
    searchFilms(text) {
        const query = `/search/movie?query=${text}`;
        return this.executeQuery(query);
    }
    searchSerie(text) {
        const query = `/search/tv?query=${text}`;
        return this.executeQuery(query);
    }
};
TmdbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TmdbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TmdbService);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/detail/detail.component */ "151J");





const routes = [
    {
        path: 'app',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "tmrb")).then(m => m.Tab1PageModule)
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "TUkU")).then(m => m.Tab2PageModule)
            },
            {
                path: 'saved',
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "k+ul")).then(m => m.Tab3PageModule)
            },
            {
                path: 'details/:id/:type/:title',
                component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
            },
            {
                path: '',
                redirectTo: '/app/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "s1lG":
/*!***********************************************!*\
  !*** ./src/app/services/justwatch.service.ts ***!
  \***********************************************/
/*! exports provided: JustwatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustwatchService", function() { return JustwatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const URL = "https://api.movin.tk/api/search";
let JustwatchService = class JustwatchService {
    constructor(http) {
        this.http = http;
    }
    getPlatforms(body) {
        return this.http.post(URL, body);
    }
};
JustwatchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JustwatchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JustwatchService);



/***/ }),

/***/ "zvUw":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail/detail.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n      -------------- PELICULAS -------------\n-->\n<ion-content *ngIf=\"film\">\n  <ion-label class=\"titulo\">\n     <h1> {{ film.title }} </h1>\n   </ion-label>\n\n   <div class=\"backdrop-img\">\n     <img [src]=\"film.backdrop_path | image\" class=\"back_img\">\n    </div>\n\n   <ion-grid>\n     <ion-row>\n\n       <ion-col size=\"4\" class=\"poster-detalle-sobre\">\n\n         <ion-card class=\"poster\">\n           <img [src]=\"film.poster_path | image: 'w200'\"\n                *ngIf=\"film.poster_path\">\n         </ion-card>\n\n       </ion-col>\n\n       <ion-col>\n         <ion-item class=\"border-bottom\">\n           <ion-icon slot=\"start\" name=\"thumbs-up\" color=\"primary\"></ion-icon>\n           <ion-label>Rating</ion-label>\n           <ion-note slot=\"end\" color=\"primary\">{{ film.vote_average }}</ion-note>\n         </ion-item>\n         <ion-item class=\"border-bottom\">\n           <ion-icon slot=\"start\" name=\"people\" color=\"primary\"></ion-icon>\n           <ion-label>Votos</ion-label>\n           <ion-note slot=\"end\" color=\"primary\">{{ film.vote_count }}</ion-note>\n         </ion-item>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed class=\"tagline\" *ngIf=\"film.tagline\">\n     <ion-label>\"{{film.tagline}}\"</ion-label>\n   </ion-grid>\n\n   <ion-grid fixed class=\"main-details\">\n     <ion-row>\n        <ion-col  class=\"main-detail\">\n          <ion-label>Pelicula</ion-label>\n        </ion-col>\n        <ion-col  class=\"main-detail\">\n          <ion-label>{{film.release_date | year}}</ion-label>\n        </ion-col>\n        <ion-col  class=\"main-detail\">\n          <ion-label>{{film.runtime | hour}}</ion-label>\n        </ion-col>\n      </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed *ngIf=\"justWatchProviders.length == 0\" class=\"providers-notfound\">\n     <ion-label>\n       <ion-icon name=\"alert-circle-outline\"></ion-icon>\n       No disponible en ninguna plataforma por el momento</ion-label>\n   </ion-grid>\n  <ion-grid fixed *ngIf=\"justWatchProviders.length > 0\" class=\"providers\">\n     <ion-grid fixed *ngIf=\"streamingProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Ver en Streaming</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"streamingProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of streamingProviders\" class=\"provider-slides\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n     <ion-grid fixed *ngIf=\"rentProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Alquilar</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"rentProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of rentProviders\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n     <ion-grid fixed *ngIf=\"buyProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Comprar</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"buyProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of buyProviders\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n</ion-grid>\n\n   <ion-grid fixed *ngIf=\"film.overview\">\n     <ion-row>\n       <ion-col>\n         <ion-label class=\"ion-text-uppercase\">Resumen</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-grid fixed *ngIf=\"film.overview\">\n     <ion-row >\n       <ion-col size=12>\n         <ion-label> {{ film.overview | slice: 0: oculto }}<span *ngIf=\"oculto !== 5000\">... </span></ion-label>\n         <ion-label color=\"primary\"\n                    (click)=\"oculto = 5000\"\n                    *ngIf=\"oculto !== 5000\"\n                    class=\"read-more\">Leer más!</ion-label>\n       </ion-col>\n     </ion-row>\n\n     <ion-row >\n       <ion-col size=\"12\">\n         <ion-chip *ngFor=\"let genero of film.genres\"\n                   color=\"primary\">\n           <ion-label>{{ genero.name }}</ion-label>\n         </ion-chip>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed *ngIf=\"actors.length > 0\">\n     <ion-row>\n       <ion-col>\n         <ion-label class=\"ion-text-uppercase\">Actores</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-grid fixed>\n     <ion-slides [options]=\"slideOptActores\">\n       <ion-slide *ngFor=\"let actor of actors\">\n         <ion-card class=\"card-actor\">\n           <img *ngIf=\"!actor.profile_path\" src=\"/assets/no-avatar.jpg\">\n           <img *ngIf=\"actor.profile_path\" [src]=\"actor.profile_path | image\">\n           <ion-label class=\"actor-name\"> {{ actor.name }}</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n    </ion-grid>\n\n\n    <ion-grid fixed *ngIf=\"director?.name\">\n     <ion-row>\n       <ion-col>\n         <ion-label class=\"ion-text-uppercase\">Dirección</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-slides *ngIf=\"director?.name\">\n     <ion-slide class=\"director-slide\">\n         <ion-card class=\"card-actor\">\n           <img *ngIf=\"!director.profile_path\" src=\"/assets/no-avatar.jpg\">\n           <img *ngIf=\"director.profile_path\" [src]=\"director.profile_path | image\">\n           <ion-label class=\"actor-name\">{{director?.name}}</ion-label>\n         </ion-card>\n     </ion-slide>\n   </ion-slides>\n </ion-content>\n\n\n <!--\n       -------------- SERIES -------------\n -->\n\n <ion-content *ngIf=\"serie\">\n   <ion-label class=\"titulo\">\n      <h1> {{ serie.name }} </h1>\n    </ion-label>\n\n\n    <div class=\"backdrop-img\">\n      <img [src]=\"serie.backdrop_path | image\" class=\"back_img\">\n     </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" class=\"poster-detalle-sobre\">\n          <ion-card class=\"poster\">\n            <img [src]=\"serie.poster_path | image\"\n                 class=\"poster\"\n                 *ngIf=\"serie.poster_path\">\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-item class=\"border-bottom\">\n            <ion-icon slot=\"start\" name=\"thumbs-up\" color=\"primary\"></ion-icon>\n            <ion-label>Rating</ion-label>\n            <ion-note slot=\"end\" color=\"primary\">{{ serie.vote_average }}</ion-note>\n          </ion-item>\n          <ion-item class=\"border-bottom\">\n            <ion-icon slot=\"start\" name=\"people\" color=\"primary\"></ion-icon>\n            <ion-label>Votos</ion-label>\n            <ion-note slot=\"end\" color=\"primary\">{{ serie.vote_count }}</ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed class=\"tagline\" *ngIf=\"serie.tagline\">\n      <ion-label>\"{{serie.tagline}}\"</ion-label>\n    </ion-grid>\n    <ion-grid fixed class=\"main-details\">\n      <ion-row>\n         <ion-col  class=\"main-detail\">\n           <ion-label>Serie</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\">\n           <ion-label>{{serie.first_air_date | year}} - {{serie.last_air_date | year}}</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\" *ngIf=\"serie.number_of_seasons == 1\">\n           <ion-label>{{ serie.number_of_seasons}} temporada</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\" *ngIf=\"serie.number_of_seasons > 1\">\n           <ion-label>{{ serie.number_of_seasons}} temporadas</ion-label>\n         </ion-col>\n       </ion-row>\n    </ion-grid>\n\n    <ion-grid fixed *ngIf=\"justWatchProviders.length == 0\" class=\"providers-notfound\">\n      <ion-label>\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        No disponible en ninguna plataforma por el momento</ion-label>\n    </ion-grid>\n    <ion-grid fixed *ngIf=\"justWatchProviders.length > 0\" class=\"providers\">\n       <ion-grid fixed *ngIf=\"streamingProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Ver en Streaming</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"streamingProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of streamingProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n       <ion-grid fixed *ngIf=\"rentProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Alquilar</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"rentProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of rentProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n             <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n       <ion-grid fixed *ngIf=\"buyProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Comprar</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"buyProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of buyProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n             <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n  </ion-grid>\n\n     <ion-grid fixed *ngIf=\"serie.overview\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"ion-text-uppercase\">Resumen</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n    <ion-grid fixed>\n\n      <ion-row *ngIf=\"serie.overview\">\n        <ion-col size=12>\n          <ion-label> {{ serie.overview | slice: 0: oculto }}<span *ngIf=\"oculto !== 5000\">... </span></ion-label>\n          <ion-label color=\"primary\"\n                     (click)=\"oculto = 5000\"\n                     *ngIf=\"oculto !== 5000\"\n                     class=\"read-more\">Leer más!</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-chip *ngFor=\"let genero of serie.genres\"\n                    color=\"primary\">\n            <ion-label>{{ genero.name }}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid fixed *ngIf=\"actors.length > 0\">\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-uppercase\">Actores</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed>\n      <ion-slides [options]=\"slideOptActores\">\n        <ion-slide *ngFor=\"let actor of actors\">\n          <ion-card class=\"card-actor\">\n            <img *ngIf=\"!actor.profile_path\" src=\"/assets/no-avatar.jpg\">\n            <img *ngIf=\"actor.profile_path\" [src]=\"actor.profile_path | image\">\n            <ion-label class=\"actor-name\"> {{ actor.name }}</ion-label>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n     </ion-grid>\n  </ion-content>\n\n\n <ion-footer no-border>\n   <ion-toolbar>\n\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"return()\">\n         <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n         <ion-label>Regresar</ion-label>\n       </ion-button>\n     </ion-buttons>\n\n     <ion-buttons slot=\"end\">\n       <ion-button (click)=\"save()\">\n         <ion-label>Guardar</ion-label>\n         <ion-icon slot=\"end\" name=\"bookmark-outline\"></ion-icon>\n       </ion-button>\n     </ion-buttons>\n\n\n   </ion-toolbar>\n </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map