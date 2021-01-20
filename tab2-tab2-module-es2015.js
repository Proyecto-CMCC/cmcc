(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: 200px;\n  height: 420px;\n  margin: auto;\n  box-shadow: 0px 0px 8px 2px rgba(0, 117, 74, 0.43);\n}\n\nion-card > img {\n  height: 300px;\n}\n\nion-col {\n  margin-bottom: 15px;\n}\n\n.noResults {\n  width: 100%;\n  text-align: center;\n  font-size: large;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0RBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY2FyZHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLDExNyw3NCwwLjQzKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZD5pbWd7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLm5vUmVzdWx0c3tcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmNvbG9yLXdoaXRle1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tmdb.service */ "CuVg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let Tab2Page = class Tab2Page {
    constructor(tmdb, router) {
        this.tmdb = tmdb;
        this.router = router;
        this.logoUrl = "../../assets/logo.svg";
        this.sugerencias = ["Spiderman", "La vida es bella", "Star Wars", "Harry Potter", "Vengadores"];
        this.results = [];
        this.searching = false;
        this.noResults = false;
        this.type = '';
    }
    search(event) {
        this.searching = true;
        const value = event.detail.value;
        this.searchText = value;
        this.results = [];
        if (value.length == 0) {
            this.searching = false;
            this.noResults = false;
            return;
        }
        this.tmdb.searchFilms(value).subscribe(res => {
            this.results = [...this.results, ...res.results];
            this.results = this.results.filter(this.filmfilter);
            console.log(this.results);
            if (this.results.length == 0) {
                this.noResults = true;
            }
            else {
                this.noResults = false;
            }
            this.searching = false;
        }, err => {
            this.searching = false;
            this.noResults = true;
        });
        this.tmdb.searchSerie(value).subscribe(res => {
            this.results = [...this.results, ...res.results];
            this.results = this.results.filter(this.filmfilter);
            if (this.results.length == 0) {
                this.noResults = true;
            }
            else {
                this.noResults = false;
            }
            this.searching = false;
        }, err => {
            this.searching = false;
            this.noResults = true;
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
    filmfilter(film) {
        if (film.poster_path) {
            return true;
        }
        else {
            return false;
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TmdbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Buscar Película o Serie\"\n                    animated\n                    debounce=\"700\"\n                    [value]=\"searchText\"\n                    (ionChange)=\"search($event)\"\n                    (search)=\"search($event)\"\n                    color=\"tertiary\"\n                    showCancelButton=\"focus\"\n                    ></ion-searchbar>\n  </ion-toolbar>\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid fixed *ngIf=\"searching\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"noResults\">\n    <ion-list-header>\n      <ion-label class=\"noResults\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        No se encuentran resultados para la búsqueda \"{{searchText}}\"\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-label>\n    </ion-list-header>\n  </ion-list>\n\n  <ion-list *ngIf=\"results.length <= 0\">\n    <ion-list-header>\n      <ion-label>\n        Sugerencias\n      </ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of sugerencias\" (click)=\"searchText = item\">\n      <ion-label color=\"primary\">\n        {{item}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid fixed>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let item of results\" class=\"ion-text-center\">\n        <ion-card (click)=\"showDetails(item.id, item.title, item.name)\">\n          <img [src]=\"item.poster_path | image\">\n          <ion-card-header>\n            <ion-card-subtitle *ngIf=\"item.title\" class=\"color-white\">\n              {{item.title}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\" class=\"color-white\">\n              {{item.name}}\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.release_date\" class=\"color-white\">\n              ({{item.release_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.first_air_date\" class=\"color-white\">\n              ({{item.first_air_date | year}})\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.title\">\n              Película\n            </ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"item.name\">\n              Serie TV\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map