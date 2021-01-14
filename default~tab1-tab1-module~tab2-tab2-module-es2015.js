(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail/detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail/detail.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n      -------------- PELICULAS -------------\n-->\n<ion-content *ngIf=\"film\">\n  <ion-label class=\"titulo\">\n     <h1> {{ film.title }} </h1>\n   </ion-label>\n\n   <img [src]=\"film.backdrop_path | image: 'w500'\" class=\"back_img\">\n\n   <ion-grid>\n     <ion-row>\n\n       <ion-col size=\"4\" class=\"poster-detalle-sobre\">\n\n         <ion-card class=\"poster\">\n           <img [src]=\"film.poster_path | image\"\n                class=\"poster\"\n                *ngIf=\"film.poster_path\">\n         </ion-card>\n\n       </ion-col>\n\n       <ion-col>\n         <ion-item class=\"border-bottom\">\n           <ion-icon slot=\"start\" name=\"thumbs-up\" color=\"primary\"></ion-icon>\n           <ion-label>Rating</ion-label>\n           <ion-note slot=\"end\" color=\"primary\">{{ film.vote_average }}</ion-note>\n         </ion-item>\n         <ion-item class=\"border-bottom\">\n           <ion-icon slot=\"start\" name=\"people\" color=\"primary\"></ion-icon>\n           <ion-label>Votos</ion-label>\n           <ion-note slot=\"end\" color=\"primary\">{{ film.vote_count }}</ion-note>\n         </ion-item>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed class=\"tagline\" *ngIf=\"film.tagline\">\n     <ion-label>\"{{film.tagline}}\"</ion-label>\n   </ion-grid>\n\n   <ion-grid fixed class=\"main-details\">\n     <ion-row>\n        <ion-col  class=\"main-detail\">\n          <ion-label>Pelicula</ion-label>\n        </ion-col>\n        <ion-col  class=\"main-detail\">\n          <ion-label>{{film.release_date | year}}</ion-label>\n        </ion-col>\n        <ion-col  class=\"main-detail\">\n          <ion-label>{{film.runtime | hour}}</ion-label>\n        </ion-col>\n      </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed *ngIf=\"justWatchProviders.length == 0\" class=\"providers-notfound\">\n     <ion-label>\n       <ion-icon name=\"alert-circle-outline\"></ion-icon>\n       No disponible en ninguna plataforma por el momento</ion-label>\n   </ion-grid>\n  <ion-grid fixed *ngIf=\"justWatchProviders.length > 0\" class=\"providers\">\n     <ion-grid fixed *ngIf=\"streamingProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Streaming</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"streamingProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of streamingProviders\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n     <ion-grid fixed *ngIf=\"rentProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Alquilar</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"rentProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of rentProviders\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n     <ion-grid fixed *ngIf=\"buyProviders.length > 0\">\n       <ion-row>\n         <ion-col>\n           <ion-label class=\"provider-opt\">Comprar</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n     <ion-slides [options]=\"slideOptProviders\" *ngIf=\"buyProviders.length > 0\">\n       <ion-slide *ngFor=\"let film of buyProviders\">\n         <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n           <div>\n             <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n            </div>\n            <div>\n             <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n            </div>\n           <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n</ion-grid>\n\n   <ion-grid fixed>\n     <ion-row>\n       <ion-col>\n         <ion-label>Resumen</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-grid fixed>\n     <ion-row *ngIf=\"film.overview\">\n       <ion-col size=12>\n         <ion-label> {{ film.overview | slice: 0: oculto }}<span *ngIf=\"oculto !== 5000\">... </span></ion-label>\n         <ion-label color=\"primary\"\n                    (click)=\"oculto = 5000\"\n                    *ngIf=\"oculto !== 5000\"\n                    class=\"read-more\">Leer más!</ion-label>\n       </ion-col>\n     </ion-row>\n\n     <ion-row >\n       <ion-col size=\"12\">\n         <ion-chip *ngFor=\"let genero of film.genres\"\n                   color=\"primary\">\n           <ion-label>{{ genero.name }}</ion-label>\n         </ion-chip>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n\n   <ion-grid fixed *ngIf=\"actors.length > 0\">\n     <ion-row>\n       <ion-col>\n         <ion-label>Actores</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-grid fixed>\n     <ion-slides [options]=\"slideOptActores\">\n       <ion-slide *ngFor=\"let actor of actors\">\n         <ion-card class=\"card-actor\">\n           <img *ngIf=\"!actor.profile_path\" src=\"/assets/no-avatar.jpg\">\n           <img *ngIf=\"actor.profile_path\" [src]=\"actor.profile_path | image\">\n           <ion-label class=\"actor-name\"> {{ actor.name }}</ion-label>\n         </ion-card>\n       </ion-slide>\n     </ion-slides>\n    </ion-grid>\n\n\n    <ion-grid fixed *ngIf=\"director?.name\">\n     <ion-row>\n       <ion-col>\n         <ion-label>Dirección</ion-label>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <ion-slides *ngIf=\"director?.name\">\n     <ion-slide class=\"director-slide\">\n         <ion-card class=\"card-actor\">\n           <img *ngIf=\"!director.profile_path\" src=\"/assets/no-avatar.jpg\">\n           <img *ngIf=\"director.profile_path\" [src]=\"director.profile_path | image\">\n           <ion-label class=\"actor-name\">{{director?.name}}</ion-label>\n         </ion-card>\n     </ion-slide>\n   </ion-slides>\n </ion-content>\n\n\n <!--\n       -------------- SERIES -------------\n -->\n\n <ion-content *ngIf=\"serie\">\n   <ion-label class=\"titulo\">\n      <h1> {{ serie.name }} </h1>\n    </ion-label>\n\n    <img [src]=\"serie.backdrop_path | image: 'w500'\" class=\"back_img\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" class=\"poster-detalle-sobre\">\n          <ion-card class=\"poster\">\n            <img [src]=\"serie.poster_path | image\"\n                 class=\"poster\"\n                 *ngIf=\"serie.poster_path\">\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-item class=\"border-bottom\">\n            <ion-icon slot=\"start\" name=\"thumbs-up\" color=\"primary\"></ion-icon>\n            <ion-label>Rating</ion-label>\n            <ion-note slot=\"end\" color=\"primary\">{{ serie.vote_average }}</ion-note>\n          </ion-item>\n          <ion-item class=\"border-bottom\">\n            <ion-icon slot=\"start\" name=\"people\" color=\"primary\"></ion-icon>\n            <ion-label>Votos</ion-label>\n            <ion-note slot=\"end\" color=\"primary\">{{ serie.vote_count }}</ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed class=\"tagline\" *ngIf=\"serie.tagline\">\n      <ion-label>\"{{serie.tagline}}\"</ion-label>\n    </ion-grid>\n    <ion-grid fixed class=\"main-details\">\n      <ion-row>\n         <ion-col  class=\"main-detail\">\n           <ion-label>Serie</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\">\n           <ion-label>{{serie.first_air_date | year}} - {{serie.last_air_date | year}}</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\" *ngIf=\"serie.number_of_seasons == 1\">\n           <ion-label>{{ serie.number_of_seasons}} temporada</ion-label>\n         </ion-col>\n         <ion-col  class=\"main-detail\" *ngIf=\"serie.number_of_seasons > 1\">\n           <ion-label>{{ serie.number_of_seasons}} temporadas</ion-label>\n         </ion-col>\n       </ion-row>\n    </ion-grid>\n\n    <ion-grid fixed *ngIf=\"justWatchProviders.length == 0\" class=\"providers-notfound\">\n      <ion-label>\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n        No disponible en ninguna plataforma por el momento</ion-label>\n    </ion-grid>\n    <ion-grid fixed *ngIf=\"justWatchProviders.length > 0\" class=\"providers\">\n       <ion-grid fixed *ngIf=\"streamingProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Streaming</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"streamingProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of streamingProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n       <ion-grid fixed *ngIf=\"rentProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Alquilar</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"rentProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of rentProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n             <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n       <ion-grid fixed *ngIf=\"buyProviders.length > 0\">\n         <ion-row>\n           <ion-col>\n             <ion-label class=\"provider-opt\">Comprar</ion-label>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       <ion-slides [options]=\"slideOptProviders\" *ngIf=\"buyProviders.length > 0\">\n         <ion-slide *ngFor=\"let film of buyProviders\">\n           <ion-card class=\"provider-card\" [href]=\"film.urls.standard_web\" target=\"_blank\">\n             <div>\n               <img [src]=\"film.urls.standard_web | urlFavicon\" class=\"provider-img\">\n              </div>\n              <div>\n               <ion-label class=\"\"> {{ film.urls.standard_web | urlWebsiteName }}</ion-label>\n              </div>\n             <ion-label class=\"\"> {{ film.presentation_type }}</ion-label>\n             <ion-label class=\"\"> {{ film.retail_price }}€</ion-label>\n           </ion-card>\n         </ion-slide>\n       </ion-slides>\n  </ion-grid>\n\n     <ion-grid fixed>\n       <ion-row>\n         <ion-col>\n           <ion-label>Resumen</ion-label>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n    <ion-grid fixed>\n\n      <ion-row *ngIf=\"serie.overview\">\n        <ion-col size=12>\n          <ion-label> {{ serie.overview | slice: 0: oculto }}<span *ngIf=\"oculto !== 5000\">... </span></ion-label>\n          <ion-label color=\"primary\"\n                     (click)=\"oculto = 5000\"\n                     *ngIf=\"oculto !== 5000\"\n                     class=\"read-more\">Leer más!</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-chip *ngFor=\"let genero of serie.genres\"\n                    color=\"primary\">\n            <ion-label>{{ genero.name }}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid fixed *ngIf=\"actors.length > 0\">\n      <ion-row>\n        <ion-col>\n          <ion-label>Actores</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed>\n      <ion-slides [options]=\"slideOptActores\">\n        <ion-slide *ngFor=\"let actor of actors\">\n          <ion-card class=\"card-actor\">\n            <img *ngIf=\"!actor.profile_path\" src=\"/assets/no-avatar.jpg\">\n            <img *ngIf=\"actor.profile_path\" [src]=\"actor.profile_path | image\">\n            <ion-label class=\"actor-name\"> {{ actor.name }}</ion-label>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n     </ion-grid>\n  </ion-content>\n\n\n <ion-footer no-border>\n   <ion-toolbar>\n\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"return()\">\n         <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n         <ion-label>Regresar</ion-label>\n       </ion-button>\n     </ion-buttons>\n\n     <ion-buttons slot=\"end\">\n       <ion-button (click)=\"save()\">\n         <ion-label>Guardar</ion-label>\n         <ion-icon slot=\"end\" name=\"bookmark-outline\"></ion-icon>\n       </ion-button>\n     </ion-buttons>\n\n\n   </ion-toolbar>\n </ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "./src/app/components/detail/detail.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/detail/detail.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back_img {\n  width: 100%;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #03e370;\n}\n\n.poster-detalle-sobre {\n  position: relative;\n  top: -75px;\n  left: -10px;\n  margin-bottom: -75px;\n}\n\n.titulo {\n  width: 100%;\n  position: absolute;\n  color: white;\n  padding: 0px 15px 50px 15px;\n  height: 70px;\n  background: black;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.787552521) 37%);\n}\n\n.titulo h1 {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.card-actor {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 0px 8px 2px rgba(0, 117, 74, 0.43);\n}\n\n.card-actor > img {\n  height: 150px;\n  width: 100px;\n}\n\n.read-more {\n  cursor: pointer;\n}\n\n.actor-name {\n  padding: 10px;\n}\n\n.providers {\n  margin-bottom: 20px;\n}\n\n.providers-notfound {\n  margin: 20px;\n  text-align: center;\n  color: #03e370;\n}\n\n.providers ion-slide {\n  background-color: #001309;\n  margin-right: 5px;\n}\n\n.provider-card {\n  background-color: #001309;\n  padding: 5px;\n  box-shadow: none !important;\n}\n\n.provider-img {\n  height: 25px;\n}\n\n.provider-opt {\n  font-size: small;\n  color: darkgray;\n}\n\n.main-detail {\n  text-align: center;\n  font-size: smaller;\n}\n\n.main-details {\n  margin: 10px 0px 10px;\n}\n\n.tagline {\n  font-style: oblique;\n  text-align: center;\n  margin-bottom: 20px 0 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBR0Esd0ZBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrREFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9yZGVyLWJvdHRvbXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwM2UzNzA7XG59XG5cbi5wb3N0ZXItZGV0YWxsZS1zb2JyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTc1cHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTc1cHg7XG59XG5cbi50aXR1bG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDE1cHggNTBweCAxNXB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc4NzU1MjUyMTAwODQwMzMpIDM3JSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc4NzU1MjUyMTAwODQwMzMpIDM3JSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc4NzU1MjUyMTAwODQwMzMpIDM3JSk7XG4gIH1cblxuLnRpdHVsbyBoMXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY2FyZC1hY3RvcntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLDExNyw3NCwwLjQzKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsMTE3LDc0LDAuNDMpO1xufVxuXG4uY2FyZC1hY3Rvcj5pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5yZWFkLW1vcmV7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuXG4uYWN0b3ItbmFtZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm92aWRlcnN7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wcm92aWRlcnMtbm90Zm91bmR7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAzZTM3MDtcbn1cblxuLnByb3ZpZGVycyBpb24tc2xpZGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEzMDk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvdmlkZXItY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTMwOTtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wcm92aWRlci1pbWd7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnByb3ZpZGVyLW9wdHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IGRhcmtncmF5O1xufVxuXG4ubWFpbi1kZXRhaWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4ubWFpbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4O1xufVxuXG4udGFnbGluZXtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4IDAgMjBweCAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/detail/detail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tmdb.service */ "./src/app/services/tmdb.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_justwatch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/justwatch.service */ "./src/app/services/justwatch.service.ts");





const screenWidthBreakPoint = 1234;
const screenWidthBreakPointMid = 720;
let DetailComponent = class DetailComponent {
    constructor(tmdb, modalCtrl, justWatch) {
        this.tmdb = tmdb;
        this.modalCtrl = modalCtrl;
        this.justWatch = justWatch;
        this.actors = [];
        this.oculto = 150;
        this.justWatchPostBody = {
            country: 'ES',
            search: '',
            idtmdb: this.id,
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
        this.loadJustWatchPostBody();
        this.slideOptActores = {
            slidesPerView: 3.3,
            centeredSlides: true,
            centeredSlidesBounds: true,
            freeMode: true
        };
        this.slideOptProviders = {
            slidesPerView: 2.3,
            scrollbar: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            freeMode: true
        };
        this.getScreenSize();
        this.loadDetails();
    }
    loadDetails() {
        if (this.title) {
            this.tmdb.getMovieDetail(this.id).subscribe(res => {
                this.film = res;
                console.log(res);
            });
            this.tmdb.getMovieCredits(this.id).subscribe(res => {
                this.actors = res.cast;
                let crew = res.crew;
                this.director = crew.filter(element => element.job == "Director")[0];
                console.log(this.director);
            });
        }
        else if (this.name) {
            this.tmdb.getSerieDetail(this.id).subscribe(res => {
                this.serie = res;
                console.log(res);
            });
            this.tmdb.getSerieCredits(this.id).subscribe(res => {
                this.actors = res.cast;
            });
        }
    }
    loadJustWatchPostBody() {
        this.justWatchPostBody.idtmdb = this.id;
        if (this.title) {
            this.justWatchPostBody.search = this.title;
            this.justWatchPostBody.type = "movie";
        }
        else if (this.name) {
            this.justWatchPostBody.search = this.name;
            this.justWatchPostBody.type = "tv";
        }
        console.log("justçwatch", this.justWatchPostBody);
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
                slidesPerView: 4.5,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
        else if (this.screenWidth > screenWidthBreakPointMid) {
            this.slideOptActores = {
                slidesPerView: 4.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
        else {
            this.slideOptActores = {
                slidesPerView: 3.3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true
            };
        }
    }
    return() {
        this.modalCtrl.dismiss();
    }
};
DetailComponent.ctorParameters = () => [
    { type: src_app_services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_justwatch_service__WEBPACK_IMPORTED_MODULE_4__["JustwatchService"] }
];
DetailComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['name',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['title',] }],
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize', ['$event'],] }]
};
DetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail/detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail.component.scss */ "./src/app/components/detail/detail.component.scss")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "./src/app/pipes/hour.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/hour.pipe.ts ***!
  \************************************/
/*! exports provided: HourPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourPipe", function() { return HourPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HourPipe = class HourPipe {
    transform(minutes) {
        let htext = " horas ";
        let mtext = " minutos ";
        if (minutes > 59) {
            let hours = minutes / 60;
            let rhours = Math.floor(hours);
            let mins = (hours - rhours) * 60;
            let rmins = Math.round(mins);
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
};
HourPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hour'
    })
], HourPipe);



/***/ }),

/***/ "./src/app/pipes/image.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/image.pipe.ts ***!
  \*************************************/
/*! exports provided: ImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePipe", function() { return ImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tmdbImagePath;
let ImagePipe = class ImagePipe {
    transform(img, size = 'w200') {
        if (!img) {
            return './assets/no-image-banner.jpg';
        }
        const imgUrl = `${URL}/${size}/${img}`;
        return imgUrl;
    }
};
ImagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'image'
    })
], ImagePipe);



/***/ }),

/***/ "./src/app/pipes/pares.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/pares.pipe.ts ***!
  \*************************************/
/*! exports provided: ParesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParesPipe", function() { return ParesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParesPipe = class ParesPipe {
    transform(arr) {
        if (arr == undefined) {
            return;
        }
        const pares = arr.reduce((result, value, index, array) => {
            if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
            }
            return result;
        }, []);
        return pares;
    }
};
ParesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pares'
    })
], ParesPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _image_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.pipe */ "./src/app/pipes/image.pipe.ts");
/* harmony import */ var _pares_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pares.pipe */ "./src/app/pipes/pares.pipe.ts");
/* harmony import */ var _year_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./year.pipe */ "./src/app/pipes/year.pipe.ts");
/* harmony import */ var _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-favicon.pipe */ "./src/app/pipes/url-favicon.pipe.ts");
/* harmony import */ var _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-website-name.pipe */ "./src/app/pipes/url-website-name.pipe.ts");
/* harmony import */ var _hour_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hour.pipe */ "./src/app/pipes/hour.pipe.ts");









let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"], _pares_pipe__WEBPACK_IMPORTED_MODULE_4__["ParesPipe"], _year_pipe__WEBPACK_IMPORTED_MODULE_5__["YearPipe"], _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__["UrlFaviconPipe"], _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__["UrlWebsiteNamePipe"], _hour_pipe__WEBPACK_IMPORTED_MODULE_8__["HourPipe"]],
        exports: [
            _image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"],
            _pares_pipe__WEBPACK_IMPORTED_MODULE_4__["ParesPipe"],
            _year_pipe__WEBPACK_IMPORTED_MODULE_5__["YearPipe"],
            _url_favicon_pipe__WEBPACK_IMPORTED_MODULE_6__["UrlFaviconPipe"],
            _url_website_name_pipe__WEBPACK_IMPORTED_MODULE_7__["UrlWebsiteNamePipe"],
            _hour_pipe__WEBPACK_IMPORTED_MODULE_8__["HourPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/url-favicon.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/url-favicon.pipe.ts ***!
  \*******************************************/
/*! exports provided: UrlFaviconPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFaviconPipe", function() { return UrlFaviconPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UrlFaviconPipe = class UrlFaviconPipe {
    transform(img) {
        let faviconUrl = img;
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
};
UrlFaviconPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'urlFavicon'
    })
], UrlFaviconPipe);



/***/ }),

/***/ "./src/app/pipes/url-website-name.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/url-website-name.pipe.ts ***!
  \************************************************/
/*! exports provided: UrlWebsiteNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlWebsiteNamePipe", function() { return UrlWebsiteNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UrlWebsiteNamePipe = class UrlWebsiteNamePipe {
    transform(url) {
        let urlWithoutHttp = url.substring(url.indexOf("//") + 2);
        let finalUrl = urlWithoutHttp.substring(0, urlWithoutHttp.indexOf("/"));
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
};
UrlWebsiteNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'urlWebsiteName'
    })
], UrlWebsiteNamePipe);



/***/ }),

/***/ "./src/app/pipes/year.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/year.pipe.ts ***!
  \************************************/
/*! exports provided: YearPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPipe", function() { return YearPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let YearPipe = class YearPipe {
    transform(date) {
        let _date = new Date(date);
        return _date.getFullYear();
    }
};
YearPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'year'
    })
], YearPipe);



/***/ }),

/***/ "./src/app/services/justwatch.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/justwatch.service.ts ***!
  \***********************************************/
/*! exports provided: JustwatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustwatchService", function() { return JustwatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const URL = "http://127.0.0.1:5000/api/search";
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

/***/ "./src/app/services/tmdb.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tmdb.service.ts ***!
  \******************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




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



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module-es2015.js.map