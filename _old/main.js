(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aboutus {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#aboutus h1 {\r\n  width: 100%;\r\n}\r\n\r\n.aboutus {\r\n  width: 60%;\r\n  padding: 5px;\r\n}\r\n\r\n.sidebar {\r\n  width: 40%;\r\n  padding: 5px;\r\n}\r\n\r\n.sidebar img {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .aboutus, .sidebar {\r\n    width: 100%;\r\n    padding: 5px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutus\">\n  <h1>O nas</h1>\n\n  <div class=\"aboutus\">\n    <p>\n      Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.\n    </p>\n    <p>\n      Praca jest dla nas pasją, dlatego zdobytą wiedzę przenosimy wprost do gabinetów, by służyć Wam – Pacjentom, by szybko i rzetelnie rozwiązywać złożone problemy z zakresu stomatologii zachowawczej, estetycznej, ortodoncji, pedodoncji, protetyki, implantologii i periodontologii.\n    </p>\n    <p>\n      Praktyka grupowa w Prodentice, w której opiekę nad Pacjentem sprawuje kilku lekarzy – każdy w swoim wyspecjalizowanym zakresie – pozwala na wprowadzenie wszystkich  specjalności stomatologii i możliwość traktowania leczenia uzębienia kompleksowo – od dzieci do dorosłych.\n    </p>\n    <p>\n    Oddajemy Pacjentów pod opiekę lekarzy i pielęgniarek. W rejestracji pomoże i udzieli informacji zespół recepcjonistek.\n    </p>\n  </div>\n\n  <div class=\"sidebar\">\n    <img src=\"./assets/images/onas600x400.jpg\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        })
        /** Class representing a About us component. */
        ,
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Fonts */\r\n@font-face {\r\n    font-family: 'latoregular';\r\n    src: url('/assets/fonts/latoregular.ttf') format('ttf');\r\n}\r\n@font-face {\r\n    font-family: 'latolight';\r\n    src: url('/assets/fonts/latolight.ttf') format('ttf');\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  color: #8b8b8b;\r\n  background: linear-gradient(#e7e7e7 50px, white 100px);\r\n  background-repeat: no-repeat;\r\n  margin: 0;\r\n  font-family: latolight;\r\n}\r\nhr {\r\n   border-top: 1px solid #cccbcb;\r\n}\r\n#app {\r\n  font-family: latolight, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-align: left;\r\n  margin-top: 60px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.main {\r\n  width: 1000px;\r\n  margin: auto;\r\n}\r\nh1, h2 {\r\n  font-family: latoregular, sans-serif;\r\n  font-weight: normal;\r\n  text-align: left;\r\n  color: #71d759;\r\n}\r\n.active {\r\n  font-weight: bold;\r\n  font-size: 1.5em;\r\n}\r\nheader {\r\n  height: 150px;      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #8b8b8b;\r\n}\r\n.header-contact {\r\n  text-align: right;\r\n}\r\n.header-image {\r\n  margin: 0;\r\n  width: 20%;\r\n}\r\n.header-image img {\r\n  margin-bottom: -6px;\r\n}\r\n.qr {\r\n  width: 150px !important;\r\n  margin-left: 5px !important;\r\n  padding: 0;\r\n  float: right;\r\n}\r\n.contact-data {\r\n  height: 150px;\r\n  width: 100%;\r\n}\r\n.contact-data-txt {\r\n  padding-top: 80px;\r\n}\r\n.header-contact a {\r\n  color: #8b8b8b;\r\n  font-size: 0.9em;\r\n}\r\nheader h3 {\r\n  font-family: latoregular, sans-serif;\r\n}\r\nheader div {\r\n  width: 40%;\r\n}\r\nnav {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n}\r\n.bars {\r\n  display: none;\r\n}\r\n.nav-links-block {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.nav-home {\r\n  width: 388px;\r\n  height: 300px;\r\n  padding: 15px;\r\n  margin: 2px;\r\n}\r\n.nav-link {\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: #f9f9f9;\r\n  border: solid 1px grey;\r\n  color: #8b8b8b;\r\n  padding: 15px;\r\n  margin: 1px;\r\n}\r\n.radial-gradient {\r\n  background-image: radial-gradient(\r\n      #00c23a 0%, #009f30 100%);\r\n  color: white;\r\n}\r\n.radial-gradient-grey {\r\n  background-image: radial-gradient(\r\n    #ffffff 0%, #f9f9f9 50%, #f9f9f9 100%);\r\n  color: white;\r\n}\r\n.radial-gradient:hover {\r\n  transition: color 0.5s, -webkit-transform 0.2s;\r\n  transition: color 0.5s, transform 0.2s;\r\n  transition: color 0.5s, transform 0.2s, -webkit-transform 0.2s;\r\n  color: #71d759;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n.nav-link:hover {\r\n  transition: -webkit-transform 0.2s;\r\n  transition: transform 0.2s;\r\n  transition: transform 0.2s, -webkit-transform 0.2s;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n.gradient-footer {\r\n  background: linear-gradient(#e4e4e4 50px, white 100px);\r\n  color: grey;\r\n}\r\nul {\r\n  list-style-type: circle;\r\n}\r\nli {\r\n  //display: inline-block;\r\n  margin: 0 10px;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\nfooter {\r\n  height: 100px;\r\n  padding: 15px;\r\n  margin-top: 25px;\r\n  font-size: 0.9em;\r\n  color: #656665;\r\n}\r\n.footer-menu {\r\n  width: 1000px;\r\n  margin: auto;\r\n}\r\n.footer-menu a{\r\n  color: #656665;\r\n}\r\n.copyright {\r\n  text-align: right;\r\n}\r\n@media screen and (max-width: 599px) {\r\n  .main {\r\n    width: 100%;\r\n    margin: auto;\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .header-image, .header-logo {\r\n    width: 50%;\r\n    height: 70%;\r\n  }\r\n\r\n  .header-logo {\r\n    text-align: right;\r\n  }\r\n\r\n  .header-logo h1, .header-logo h3{\r\n    margin: 0 !important;\r\n    padding: 5px !important;\r\n    text-align: right;\r\n  }\r\n\r\n  .header-contact {\r\n    width: 100% !important;\r\n    text-align: center;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n  }\r\n\r\n  .header-contact p {\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .qr {\r\n    display: none;\r\n  }\r\n\r\n  .contact-data {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  .contact-data-txt {\r\n    padding-top: 0;\r\n}\r\n\r\n  nav {\r\n    width: 300px;\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 99;\r\n  }\r\n\r\n  .bars {\r\n    text-align: right;\r\n    display: block;\r\n    font-size: 2em;\r\n    cursor: pointer;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .nav-close {\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-310px, 0);\r\n    transform: translate(-310px, 0);\r\n    /* Optionally, we animate the drawer. */\r\n    transition: -webkit-transform 0.3s ease;\r\n    transition: transform 0.3s ease;\r\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\r\n  }\r\n\r\n  .nav-open {\r\n    /* This trasform moves the drawer on canvas. */\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n    /* Optionally, we animate the drawer. */\r\n    transition: -webkit-transform 0.3s ease;\r\n    transition: transform 0.3s ease;\r\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\r\n  }\r\n\r\n  .nav-home {\r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    padding: 15px;\r\n    margin: 2px;\r\n  }\r\n\r\n  .nav-links-block {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n\r\n  .nav-links-block a {\r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n  }\r\n\r\n  .nav-link {\r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background-image: radial-gradient(\r\n      #00c23a 0%, #009f30 100%);\r\n      color: white;\r\n  }\r\n\r\n  .active {\r\n    font-weight: bold;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .radial-gradient {\r\n    background-image: radial-gradient(\r\n        #00c23a 0%, #009f30 100%);\r\n    color: white;\r\n  }\r\n\r\n  .radial-gradient-grey {\r\n    background-image: radial-gradient(\r\n      #00c23a 0%, #009f30 100%);\r\n    color: white;\r\n  }\r\n\r\n  .radial-gradient:hover {\r\n    transition: color 0.5s, -webkit-transform 0.2s;\r\n    transition: color 0.5s, transform 0.2s;\r\n    transition: color 0.5s, transform 0.2s, -webkit-transform 0.2s;\r\n    color: #71d759;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n  .nav-link:hover {\r\n    transition: -webkit-transform 0.2s;\r\n    transition: transform 0.2s;\r\n    transition: transform 0.2s, -webkit-transform 0.2s;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    color: #71d759;\r\n  }\r\n\r\n  .footer-menu {\r\n    width: 100%;\r\n  }\r\n\r\n  .footer-menu {\r\n    font-size: 0.7em;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n  .main {\r\n    width: 600px;\r\n    margin: auto;\r\n  }\r\n\r\n  .nav-home {\r\n    width: 150px;\r\n    height: 222px;\r\n    padding: 15px;\r\n    margin: 2px;\r\n  }\r\n\r\n  .nav-link {\r\n    width: 109px;\r\n    height: 109px;\r\n  }\r\n\r\n  .active {\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .header-logo h1, .header-logo h3 {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .qr {\r\n    float: none;\r\n    width: 120px !important;\r\n  }\r\n\r\n  .contact-data {\r\n    height: 10px;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .contact-data-txt {\r\n    padding-top: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  .footer-menu {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n\n  <div class=\"main\">\n\n\n\n  <header>\n    <div class=\"header-image\">\n      <img src=\"./assets/images/headerimg.png\">\n\n    </div>\n    <div class=\"header-logo\">\n      <h1>ProDentica</h1>\n      <h3>Gabinet stomatologiczny</h3>\n    </div>\n    <div class=\"header-contact\">\n      <img class=\"qr\" src=\"./assets/images/qrcode.png\">\n      <div class=\"contact-data\">\n        <p class=\"contact-data-txt\">\n          <a href=\"tel:081 742 68 24\">081 742 68 24 <i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n          <a href=\"mailto:sykutjanusz@gmail.com\"> sykutjanusz@gmail.com <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n        </p>\n\n      </div>\n\n    </div>\n\n  </header>\n\n  <div class=\"bars\"  (click)=\"toggleNav()\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n  </div>\n\n  <nav [className]=\"navState ? 'nav-close': 'nav-open'\">\n\n\n\n    <div class=\"nav-home-block\" (click)=\"toggleNav()\">\n\n      <a routerLink=\"/\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <div class=\"nav-home radial-gradient\">Home</div>\n      </a>\n\n    </div>\n\n\n    <div class=\"nav-links-block\" (click)=\"toggleNav()\">\n      <a routerLink=\"/onas\" routerLinkActive=\"active\" ><div class=\"nav-link\">O nas</div></a>\n\n      <a routerLink=\"/uslugi\" routerLinkActive=\"active\"><div class=\"nav-link radial-gradient\">Usługi</div></a>\n\n      <a routerLink=\"/galeria\" routerLinkActive=\"active\"><div class=\"nav-link\">Galeria</div></a>\n\n      <a routerLink=\"/przypadki\" routerLinkActive=\"active\"><div class=\"nav-link radial-gradient\">Nasze przypadki</div></a>\n\n      <a routerLink=\"/zespol\" routerLinkActive=\"active\"><div class=\"nav-link radial-gradient\">Nasz zespół</div></a>\n\n      <a routerLink=\"/publikacje\" routerLinkActive=\"active\"><div class=\"nav-link\">Nasze publikacje</div></a>\n\n      <a routerLink=\"/sprzet\" routerLinkActive=\"active\"><div class=\"nav-link radial-gradient\">Czym pracujemy</div></a>\n\n      <a routerLink=\"/kontakt\" routerLinkActive=\"active\"><div class=\"nav-link\">Kontakt</div></a>\n    </div>\n\n\n\n\n  </nav>\n  <hr>\n\n  <router-outlet></router-outlet>\n\n  </div>\n\n  <footer class=\"gradient-footer\">\n\n      <div class=\"footer-menu\">\n        <a routerLink=\"/\">Home</a><span> | </span>\n        <a routerLink=\"/onas\">O nas</a><span> | </span>\n        <a routerLink=\"/przypadki\">Nasze przypadki</a><span> | </span>\n        <a routerLink=\"/galeria\">Galeria</a><span> | </span>\n        <a routerLink=\"/zespol\">Nasz zespół</a><span> | </span>\n        <a routerLink=\"/kontakt\">Kontakt</a>\n      </div>\n\n    <hr>\n\n    <div class=\"copyright\">\n      <p>Copyright &copy; {{ year }} by Prodentica</p>\n    </div>\n\n\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.year = new Date().getFullYear();
        this.navState = true;
    }
    /**
     * Toggle main navigation to active.
     */
    AppComponent.prototype.toggleNav = function () {
        this.navState = !this.navState;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
        /** Class representing a Main component. */
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cases/cases.component */ "./src/app/cases/cases.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/equipment/equipment.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _certyfications_certyfications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./certyfications/certyfications.component */ "./src/app/certyfications/certyfications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'onas', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"] },
    { path: 'uslugi', component: _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"] },
    { path: 'galeria', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
    { path: 'przypadki', component: _cases_cases_component__WEBPACK_IMPORTED_MODULE_10__["CasesComponent"] },
    { path: 'zespol', component: _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"] },
    { path: 'publikacje', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_12__["PublicationsComponent"] },
    { path: 'sprzet', component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentComponent"] },
    { path: 'kontakt', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
    { path: 'certyfikaty', component: _certyfications_certyfications_component__WEBPACK_IMPORTED_MODULE_15__["CertyficationsComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _cases_cases_component__WEBPACK_IMPORTED_MODULE_10__["CasesComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
                _publications_publications_component__WEBPACK_IMPORTED_MODULE_12__["PublicationsComponent"],
                _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _certyfications_certyfications_component__WEBPACK_IMPORTED_MODULE_15__["CertyficationsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //RouterModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA0CNfYubMCK65RWVnI8TzIRw1ROhSZLzc'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cases/cases.component.css":
/*!*******************************************!*\
  !*** ./src/app/cases/cases.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cases button {\r\n  background-color: #71d759;\r\n  border: none;\r\n  height: 30px;\r\n  width: 150px;\r\n  border-radius: 5px 5px 0 0;\r\n  margin: 0;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n#cases hr {\r\n  margin-top: -2px;\r\n  border-top: 1px solid #71d759;\r\n}\r\n\r\n.case {\r\n  padding: 15px 0 15px 0;\r\n}\r\n\r\n#cases .btnActive {\r\n  background-color: white !important;\r\n  color: grey !important;\r\n  border: solid 1px #71d759 !important;\r\n  border-bottom: none !important;\r\n}\r\n\r\n.darkbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.loader-container, .loader-container-thumbs {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.loader, .loader-thumbs {\r\n  width: 200px !important;\r\n}\r\n\r\n.img-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.darkbox-container img {\r\n  width: 20%;\r\n  border: 2px solid white;\r\n}\r\n\r\n.img-container img {\r\n  border: 15px solid black;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  max-height:100%;\r\n}\r\n\r\n.darkbox-box {\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  display: none;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.darkbox-box i {\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .darkbox-container img {\r\n    width: 100%;\r\n  }\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n  .darkbox-container img {\r\n    width: 49.5%;\r\n  }\r\n\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/cases/cases.component.html":
/*!********************************************!*\
  !*** ./src/app/cases/cases.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cases\" >\n  <h1>Przypadki</h1>\n\n  <div class=\"darkbox-container\">\n\n    <div id=\"loader\" class=\"loader-container-thumbs\">\n      <img class=\"loader-thumbs\"  src=\"./assets/static/loader/loader.svg\" alt=\"prodentica loader\">\n    </div>\n\n    <a *ngFor=\"let el of cases\" [href]=\"'./assets/static/cases/' + el.name + '.jpg'\" data-lightbox=\"image\" data-title=\"Przypadki\">\n      <img class=\"gallery-img\" [src]=\"'./assets/static/cases/thumbs/' + el.name + '.jpg'\" alt=\"prodentica nasze przypadki\">\n    </a>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/cases/cases.component.ts":
/*!******************************************!*\
  !*** ./src/app/cases/cases.component.ts ***!
  \******************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prodentica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prodentica.service */ "./src/app/prodentica.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CasesComponent = /** @class */ (function () {
    function CasesComponent(prodecticaService) {
        this.prodecticaService = prodecticaService;
        //case: number = 1;
        this.cases = [];
    }
    CasesComponent.prototype.ngOnInit = function () {
        this.cases = this.prodecticaService.cases;
        this.preloadThumbs();
    };
    CasesComponent.prototype.preloadThumbs = function () {
        /** Get gallery elements. */
        var darkbox = document.querySelectorAll('.gallery-img');
        var loader = document.getElementById('loader');
        var _imgs = [];
        var remaining = this.cases.length;
        /** Show preloader icon. */
        loader.style.display = 'block';
        /** Preload thumbnails. */
        for (var a = 1; a < remaining; a++) {
            _imgs[a] = new Image();
            _imgs[a].onload = function () {
                --remaining;
                if (remaining <= 1) {
                    /** Hide preloader icon. */
                    loader.style.display = 'none';
                }
            };
            _imgs[a].src = './assets/static/cases/thumbs/' + this.cases[a].name + '.jpg';
        }
    };
    CasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cases',
            template: __webpack_require__(/*! ./cases.component.html */ "./src/app/cases/cases.component.html"),
            styles: [__webpack_require__(/*! ./cases.component.css */ "./src/app/cases/cases.component.css")],
            providers: [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]]
        })
        /** Class representing a Cases component. */
        ,
        __metadata("design:paramtypes", [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]])
    ], CasesComponent);
    return CasesComponent;
}());



/***/ }),

/***/ "./src/app/certyfications/certyfications.component.css":
/*!*************************************************************!*\
  !*** ./src/app/certyfications/certyfications.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  box-sizing: border-box;\r\n}\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n  }\r\n#cerifications a i {\r\n    position: absolute;\r\n    display: block;\r\n    left: 5px;\r\n    bottom: 8px;\r\n    color: #71d759;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n  }\r\n#cerifications {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n#cerifications a {\r\n  margin: 5px;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n#cerifications h1 {\r\n  width: 100%;\r\n}\r\n.cert-thumb {\r\n  border: 2px solid #71d759;\r\n  width: 190px;\r\n}\r\n#cases button {\r\n  background-color: #71d759;\r\n  border: none;\r\n  height: 30px;\r\n  width: 150px;\r\n  border-radius: 5px 5px 0 0;\r\n  margin: 0;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n#cases hr {\r\n  margin-top: -2px;\r\n  border-top: 1px solid #71d759;\r\n}\r\n.case {\r\n  padding: 15px 0 15px 0;\r\n}\r\n#cases .btnActive {\r\n  background-color: white !important;\r\n  color: grey !important;\r\n  border: solid 1px #71d759 !important;\r\n  border-bottom: none !important;\r\n}\r\n@media screen and (max-width: 599px) {\r\n  .aboutus, .sidebar {\r\n    width: 100%;\r\n    padding: 5px;\r\n  }\r\n\r\n  .cert-container {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/certyfications/certyfications.component.html":
/*!**************************************************************!*\
  !*** ./src/app/certyfications/certyfications.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cases\" [ngSwitch]=\"case\">\n  <h1>Certyfikaty</h1>\n  <button type=\"button\" name=\"button\" (click)=\"showCase(1)\" [ngClass]=\"{'btnActive': case === 1}\">Dr Sykut</button><button type=\"button\" name=\"button\" (click)=\"showCase(2)\" [ngClass]=\"{'btnActive': case === 2}\">Dr Kopeć</button><button type=\"button\" name=\"button\" (click)=\"showCase(3)\" [ngClass]=\"{'btnActive': case === 3}\">Dr Radej</button>\n  <hr>\n\n  <div class=\"case\" *ngSwitchCase=\"1\">\n\n    <div id=\"cerifications\">\n      <div class=\"cert-container\" *ngFor=\"let el of certs\">\n        <a [href]=\"'./assets/static/certs/' + el + '.pdf'\" download>\n          <img class=\"cert-thumb\" [src]=\"'./assets/static/certs/' + el + '.jpg'\" alt=\"prodentica gabinet\" width=\"190\" height=\"143.5\">\n          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"case\" *ngSwitchCase=\"2\">\n\n    <div id=\"cerifications\">\n      <div class=\"cert-container\" *ngFor=\"let el of certKopec\">\n        <a [href]=\"'./assets/static/certs/kopec/' + el.name + '.pdf'\" download>\n          <img class=\"cert-thumb\" [src]=\"'./assets/static/certs/kopec/' + el.name + '.jpg'\" alt=\"prodentica gabinet\" width=\"190\" height=\"143.5\">\n          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"case\" *ngSwitchCase=\"3\">\n\n    <div id=\"cerifications\">\n      <div class=\"cert-container\" *ngFor=\"let el of certRadej\">\n        <a [href]=\"'./assets/static/certs/radej/' + el.name + '.pdf'\" download>\n          <img class=\"cert-thumb\" [src]=\"'./assets/static/certs/radej/' + el.name + '.jpg'\" alt=\"prodentica gabinet\" width=\"190\" height=\"143.5\">\n          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/certyfications/certyfications.component.ts":
/*!************************************************************!*\
  !*** ./src/app/certyfications/certyfications.component.ts ***!
  \************************************************************/
/*! exports provided: CertyficationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertyficationsComponent", function() { return CertyficationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prodentica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prodentica.service */ "./src/app/prodentica.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertyficationsComponent = /** @class */ (function () {
    function CertyficationsComponent(prodecticaService) {
        this.prodecticaService = prodecticaService;
        this.certs = [];
        this.certKopec = [];
        this.certRadej = [];
        this.case = 1;
    }
    CertyficationsComponent.prototype.ngOnInit = function () {
        /** Set Dr Kopec thumbnails. */
        this.certKopec = this.prodecticaService.certKopec;
        /** Set Dr Radej thumbnails. */
        this.certRadej = this.prodecticaService.certRadej;
        /** Set number of certification thumbnails. */
        for (var i = 1; i <= 70; i++) {
            this.certs.push(i);
        }
    };
    /**
     * Toggle between cases.
     */
    CertyficationsComponent.prototype.showCase = function (num) {
        this.case = num;
    };
    CertyficationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certyfications',
            template: __webpack_require__(/*! ./certyfications.component.html */ "./src/app/certyfications/certyfications.component.html"),
            styles: [__webpack_require__(/*! ./certyfications.component.css */ "./src/app/certyfications/certyfications.component.css")],
            providers: [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]]
        })
        /** Class representing a Certyfications component. */
        ,
        __metadata("design:paramtypes", [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]])
    ], CertyficationsComponent);
    return CertyficationsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#kontakt, #kontakt h1 {\r\n  text-align: center;\r\n}\r\n\r\nagm-map {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"kontakt\">\n  <div>\n\n    <h1>SKONTAKTUJ SIĘ Z NAMI:</h1>\n    <p>Prodentica</p>\n    <p>ul. Altanowa 4/U6</p>\n    <p>20-819 Lublin</p>\n    <p>tel.: 570 727 676</p>\n\n  </div>\n\n  <agm-map [zoom]=\"zoom\" [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        /** Set Google Map variables. */
        this.title = 'Prodentica';
        this.lat = 51.2656239;
        this.lng = 22.5195762;
        this.zoom = 14;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        })
        /** Class representing a Contact component. */
        ,
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/equipment/equipment.component.css":
/*!***************************************************!*\
  !*** ./src/app/equipment/equipment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".darkbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.loader-container, .loader-container-thumbs {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.loader, .loader-thumbs {\r\n  width: 200px !important;\r\n}\r\n\r\n.img-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.darkbox-container img {\r\n  width: 33.33%;\r\n}\r\n\r\n.img-container img {\r\n  border: 15px solid black;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  max-height:100%;\r\n}\r\n\r\n.darkbox-box {\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  display: none;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.darkbox-box i {\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .darkbox-container img {\r\n    width: 100%;\r\n  }\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n  .darkbox-container img {\r\n    width: 49.5%;\r\n  }\r\n\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/equipment/equipment.component.html":
/*!****************************************************!*\
  !*** ./src/app/equipment/equipment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"equipment\" >\n  <h1>Wyposażenie</h1>\n\n  <div class=\"darkbox-container\">\n\n    <div id=\"loader\" class=\"loader-container-thumbs\">\n      <img class=\"loader-thumbs\"  src=\"./assets/static/loader/loader.svg\" alt=\"prodentica loader\">\n    </div>\n\n    <a *ngFor=\"let el of equipment\" [href]=\"'./assets/static/images/' + el.name + '.jpg'\" data-lightbox=\"image\" data-title=\"Wyposażenie\">\n      <img class=\"gallery-img\" [src]=\"'./assets/static/images/thumbs/' + el.name + '.jpg'\" alt=\"prodentica nasz sprzęt\">\n    </a>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/equipment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/equipment/equipment.component.ts ***!
  \**************************************************/
/*! exports provided: EquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function() { return EquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prodentica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prodentica.service */ "./src/app/prodentica.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent(prodecticaService) {
        this.prodecticaService = prodecticaService;
        this.equipment = [];
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.equipment = this.prodecticaService.equipment;
        this.preloadThumbs();
    };
    EquipmentComponent.prototype.preloadThumbs = function () {
        /** Get gallery elements. */
        var darkbox = document.querySelectorAll('.gallery-img');
        var loader = document.getElementById('loader');
        var _imgs = [];
        var remaining = this.equipment.length;
        /** Show preloader icon. */
        loader.style.display = 'block';
        /** Preload thumbnails. */
        for (var a = 1; a < remaining; a++) {
            _imgs[a] = new Image();
            _imgs[a].onload = function () {
                --remaining;
                if (remaining <= 1) {
                    /** Hide preloader icon. */
                    loader.style.display = 'none';
                }
            };
            _imgs[a].src = './assets/static/images/thumbs/' + this.equipment[a].name + '.jpg';
        }
    };
    EquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./equipment.component.html */ "./src/app/equipment/equipment.component.html"),
            styles: [__webpack_require__(/*! ./equipment.component.css */ "./src/app/equipment/equipment.component.css")],
            providers: [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]]
        })
        /** Class representing a Equipment component. */
        ,
        __metadata("design:paramtypes", [_prodentica_service__WEBPACK_IMPORTED_MODULE_1__["ProdecticaService"]])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.darkbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.loader-container, .loader-container-thumbs {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.loader, .loader-thumbs {\r\n  width: 200px !important;\r\n}\r\n\r\n.img-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.darkbox-container img {\r\n  width: 33%;\r\n}\r\n\r\n.img-container img {\r\n  border: 15px solid black;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  max-height:100%;\r\n}\r\n\r\n.darkbox-box {\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  display: none;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.darkbox-box i {\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.fade-in {\r\n\t-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n\t        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2018-3-19 9:1:59\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation fade-in\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .darkbox-container img {\r\n    width: 100%;\r\n  }\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n  .darkbox-container img {\r\n    width: 49.5%;\r\n  }\r\n\r\n  .img-container, .img-container img {\r\n    width: 90%;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"galeria\" >\n  <h1>Galeria</h1>\n\n  <div class=\"darkbox-container\">\n\n    <div id=\"loader\" class=\"loader-container-thumbs\" ref=\"lt\">\n      <img class=\"loader-thumbs\"  src=\"./assets/static/loader/loader.svg\" alt=\"prodentica loader\">\n    </div>\n\n    <a href=\"./assets/static/images/galeria01.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria01.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria02.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria02.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria03.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria03.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria04.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria04.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria05.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria05.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria06.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria06.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria07.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria07.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria08.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria08.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria09.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria09.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria010.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria010.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria011.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria011.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria012.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria012.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria013.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria013.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria014.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria014.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria015.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria015.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria016.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria016.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria017.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria017.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria018.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria018.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria019.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria019.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria020.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria020.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria021.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria021.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria022.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria022.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria023.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria023.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria024.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria024.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria025.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria025.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n    <a href=\"./assets/static/images/galeria026.jpg\" data-lightbox=\"image\" data-title=\"Nasz sprzęt\">\n      <img class=\"gallery-img\" src=\"./assets/static/images/thumbs/galeria026.jpg\" alt=\"prodentica galeria zdjęć\">\n    </a>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        /** Get gallery elements. */
        var darkbox = document.querySelectorAll('.gallery-img');
        var loader = document.getElementById('loader');
        var _imgs = [];
        var remaining = darkbox.length;
        /** Show preloader icon. */
        loader.style.display = 'block';
        /** Preload thumbnails. */
        for (var a = 1; a < remaining; a++) {
            _imgs[a] = new Image();
            _imgs[a].onload = function () {
                --remaining;
                if (remaining <= 1) {
                    /** Hide preloader icon. */
                    loader.style.display = 'none';
                }
            };
            _imgs[a].src = './assets/static/images/thumbs/galeria0' + a + '.jpg';
        }
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        })
        /** Class representing a Gallery component. */
        ,
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  width: 100%;\r\n}\r\n\r\n#home {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.home {\r\n  width: 33.3%;\r\n  padding: 10px;\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .home {\r\n    width: 100%;\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n  <h1>Home</h1>\n\n  <div class=\"home\">\n    <h2>Firma</h2>\n    <div class=\"swiper-container\">\n    <!-- Additional required wrapper -->\n      <div class=\"swiper-wrapper\">\n          <!-- Slides -->\n          <div class=\"swiper-slide\"><img src=\"./assets/images/home-firma600x400.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria022.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria024.jpg\"></div>\n      </div>\n    </div>\n    <p>\n      Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.\n    </p>\n  </div>\n\n  <div class=\"home\">\n    <h2>Zadowolenie Pacjentów</h2>\n    <div class=\"swiper-container\">\n    <!-- Additional required wrapper -->\n      <div class=\"swiper-wrapper\">\n          <!-- Slides -->\n          <div class=\"swiper-slide\"><img src=\"./assets/images/home-zadowolenie600x400.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria08.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria016.jpg\"></div>\n      </div>\n    </div>\n    <p>\n      Pacjenci wracają i rekomendują nas znajomym. Bardzo dziękujemy za lojalność i stałe polecenia usług Prodentica.\n    </p>\n  </div>\n\n  <div class=\"home\">\n    <a routerLink=\"/certyfikaty\" active-class=\"active\"><h2>Doświadczenie</h2></a>\n    <div class=\"swiper-container\">\n    <!-- Additional required wrapper -->\n      <div class=\"swiper-wrapper\">\n          <!-- Slides -->\n          <div class=\"swiper-slide\"><img src=\"./assets/images/home-gabinet600x400.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria011.jpg\"></div>\n          <div class=\"swiper-slide\"><img src=\"./assets/static/images/galeria013.jpg\"></div>\n      </div>\n    </div>\n    <p>\n      Każdy z nas przyjmuje Pacjentów od ponad dekady, asystentki medyczne mają równie bogate doświadczenie. Udane zabiegi możemy liczyć w dziesiątkach tysięcy.\n    </p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        /**
         * Run swiper to slide images.
         */
        var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
        /** Class representing a Home component. */
        ,
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Taka strona nie istnieje!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        })
        /** Class representing a Not found component. */
        ,
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/prodentica.service.ts":
/*!***************************************!*\
  !*** ./src/app/prodentica.service.ts ***!
  \***************************************/
/*! exports provided: ProdecticaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdecticaService", function() { return ProdecticaService; });
var ProdecticaService = /** @class */ (function () {
    function ProdecticaService() {
        this.certKopec = [
            { id: 1, name: "bhp" },
            { id: 2, name: "czysterece" },
            { id: 3, name: "dylematy" },
            { id: 4, name: "endo" },
            { id: 5, name: "materialy" },
            { id: 6, name: "mip" },
            { id: 7, name: "mip2" },
            { id: 8, name: "mp" },
            { id: 9, name: "mp2" },
            { id: 10, name: "mp3" },
            { id: 11, name: "odbudowa" },
            { id: 12, name: "organizacja" },
            { id: 13, name: "prace" },
            { id: 14, name: "promo" },
            { id: 15, name: "ratownictwo" },
            { id: 16, name: "rtg" },
            { id: 17, name: "rtg2" },
            { id: 18, name: "saf" },
            { id: 19, name: "tkankiokw" },
            { id: 20, name: "zdrowie" }
        ];
        this.certRadej = [
            { id: 1, name: "IMG_20180102_0001_NEW" },
            { id: 2, name: "IMG_20180102_0003_NEW" },
            { id: 3, name: "IMG_20180102_0003_NEW_0001" },
            { id: 4, name: "IMG_20180102_0003_NEW_0002" },
            { id: 5, name: "IMG_20180102_0005_NEW" },
            { id: 6, name: "IMG_20180102_0005_NEW_0001" },
            { id: 7, name: "IMG_20180102_0005_NEW_0002" },
            { id: 8, name: "IMG_20180102_0005_NEW_0003" },
            { id: 9, name: "IMG_20180102_0005_NEW_0004" },
            { id: 10, name: "IMG_20180102_0006_NEW" },
            { id: 11, name: "IMG_20180102_0007_NEW" },
            { id: 12, name: "IMG_20180102_0007_NEW_0001" },
            { id: 13, name: "IMG_20180102_0007_NEW_0002" },
            { id: 14, name: "IMG_20180102_0007_NEW_0003" },
            { id: 15, name: "IMG_20180102_0007_NEW_0004" },
            { id: 16, name: "IMG_20180102_0007_NEW_0005" },
            { id: 17, name: "IMG_20180102_0008_NEW" },
            { id: 18, name: "IMG_20180102_0008_NEW_0001" },
            { id: 19, name: "IMG_20180102_0008_NEW_0002" }
        ];
        this.cases = [
            { id: 1, name: "case1" },
            { id: 2, name: "case2" },
            { id: 3, name: "case3" },
            { id: 4, name: "case4" },
            { id: 5, name: "case5" },
            { id: 6, name: "case6" },
            { id: 7, name: "case7" },
            { id: 8, name: "case8" },
            { id: 9, name: "case9" },
            { id: 10, name: "case10" },
            { id: 11, name: "case11" },
            { id: 12, name: "case12" },
            { id: 13, name: "case13" },
            { id: 14, name: "case14" },
            { id: 15, name: "case15" },
            { id: 16, name: "case16" },
            { id: 17, name: "case17" },
            { id: 18, name: "case18" },
            { id: 19, name: "case19" },
            { id: 20, name: "case20" }
        ];
        this.equipment = [
            { id: 1, name: "galeria01" },
            { id: 2, name: "galeria02" },
            { id: 3, name: "galeria03" },
            { id: 4, name: "galeria04" },
            { id: 5, name: "galeria06" },
            { id: 6, name: "galeria07" },
            { id: 7, name: "galeria010" },
            { id: 8, name: "galeria012" },
            { id: 9, name: "galeria013" },
            { id: 10, name: "galeria014" },
            { id: 11, name: "galeria015" },
            { id: 12, name: "galeria017" },
            { id: 13, name: "galeria018" },
            { id: 14, name: "galeria021" },
            { id: 15, name: "galeria026" }
        ];
    }
    return ProdecticaService;
}());



/***/ }),

/***/ "./src/app/publications/publications.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publications/publications.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#publications {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  color: #8b8b8b;\r\n}\r\n\r\n#publications h1 {\r\n  width: 100%;\r\n}\r\n\r\n.publications-list {\r\n  width: 100%;\r\n}\r\n\r\n.publications a i {\r\n    position: absolute;\r\n    display: block;\r\n    left: 5px;\r\n    bottom: 8px;\r\n    color: #71d759;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n  }\r\n\r\n.publications a {\r\n  margin: 5px;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n#publications a {\r\n  color: #8b8b8b;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n}\r\n\r\n#publications li:nth-child(odd) span {\r\n  color: white;\r\n}\r\n\r\n#publications li {\r\n  padding: 5px;\r\n}\r\n\r\n#publications li span {\r\n   word-break: keep-all;\r\n}\r\n\r\n#publications li:nth-child(odd) {\r\n  background-color: #71d759;\r\n  color: #71d759;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .aboutus, .sidebar {\r\n    width: 100%;\r\n    padding: 5px;\r\n  }\r\n\r\n  .publications {\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/publications/publications.component.html":
/*!**********************************************************!*\
  !*** ./src/app/publications/publications.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"publications\">\n  <h1>Publikacje</h1>\n  <ol class=\"publications-list\">\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/81847/\" target=\"_blank\"><span\n       >Leczenie implantoprotetyczne braków zębowych w odcinku\n       przednim. (Implantoprosthetic treatment of lack of teeth in anterior\n       region.)</span><span >[AUT.] JANUSZ\n       SYKUT*, GRZEGORZ MICHALCZEWSKI, JUSTYNA OLESZEK, JANUSZ BOROWICZ. <i>Implants</i>\n       2015 vol. 10 nr 4 s. 38-42, bibliogr. sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/69079/\" target=\"_blank\"><span\n       >Uwarunkowania temperamentalne parafunkcji narządu żucia\n       u młodzieży. (Temperamental determinants of oral parafunctions in\n       adolescents.)</span><span >[AUT.]\n       MONIKA LITKO, BARBARA MYKA-LITKO, JANUSZ SYKUT, JACEK SZKUTNIK. <i>Mag.\n       Stomatol.</i> [online] 2012 R. 22 nr 10 s. 158-162, bibliogr. sum,\n       [przeglądany 24 października 2012]. Dostępny w:\n       www.magazyn-stomatologiczny.pl</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/66733/\" target=\"_blank\"><span\n       >Ocena kliniczna żelu do retrakcji dziąsłowej Racegel -\n       doniesienie wstępne. (Clinical evaluation of gingival retraction gel\n       Racegel - preliminary report.)</span><span >[AUT.] PAWEŁ MIESZKOWSKI, JANUSZ SYKUT, JANUSZ BOROWICZ, ANNA STELMASZCZYK,\n       ANNA MIESZKOWSKA. <i>Stomatol. Współcz.</i> 2012 vol. 19 nr 1 s. 39-42,\n       bibliogr. sum.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/65436/\" target=\"_blank\"><span\n       >Pełnoceramiczne uzupełnienia protetyczne - różne drogi\n       do osiągnięcia optymalnej estetyki. Na podstawie przypadków własnych.\n       (All-ceramic laboratory made restorations - various ways of obtaining\n       optimum aesthetics. Based on the authors' own work.)</span><span\n       >[AUT.] PRZEMYSŁAW KLEINROK, JANUSZ\n       SYKUT, MONIKA LITKO, KATARZYNA SARNA-BOŚ, JANUSZ BOROWICZ. <i>Mag.\n       Stomatol.</i> 2011 R. 21 nr 11 s. 32-39.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/59286/\" target=\"_blank\"><span\n       >Style radzenia sobie ze stresem u chorych z\n       dysfunkcjami narządu żucia. (Coping inventory for stressfull situations in\n       patients with temporomandibular dysfunctions.)</span><span\n       >[AUT.] MONIKA LITKO, BARBARA\n       MYKA-LITKO, JANUSZ SYKUT, BEATA PIÓRKOWSKA-SKRABUCHA, JANUSZ BOROWICZ. <i>Implantoprotetyka</i>\n       2010 t. 11 nr 1 s. 33-37, bibliogr. sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/61897/\" target=\"_blank\"><span\n       >Prefabricated post systems. Mechanical strength\n       research of the post-root junction of the tooth of chosen metal passive\n       posts.</span><span > [AUT.]\n       K[ATARZYNA] SARNA-BOŚ, A. RUDAWSKA, A[NNA] SZABELSKA, M[ONIKA] LITKO,\n       J[ANUSZ] SYKUT, M[AGDALENA] BAKALCZUK, J[ANUSZ] BOROWICZ. <i>Pol. J.\n       Environ. Stud.</i> 2010 vol. 19 nr 6A s. 248-251, bibliogr. poz. 22.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/54373/\" target=\"_blank\"><span\n       >Rehabilitacja implantoprotetyczna pacjentów bezzębnych\n       w trudnych sytuacjach klinicznych. Opis przypadków. (Implant-prosthetic\n       rehabilitation of edentulous patients under difficult clinical conditions\n       - cases reports.)</span><span >[AUT.]\n       JANUSZ SYKUT, MONIKA LITKO, PRZEMYSŁAW KLEINROK, INGRID RÓŻYŁO-KALINOWSKA,\n       JANUSZ KLEINROK. <i>Mag. Stomatol.</i> 2009 R. 19 nr 5 s. 80-87.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/54374/\" target=\"_blank\"><span\n       >Zastosowanie rezonansu magnetycznego w diagnostyce i\n       planowaniu leczenia chorych z dysfunkcjami narządu żucia. (Magnetic\n       resonance diagnostics and treatment planning in patients with dysfunction\n       of the chewing apparatus - clinical cases.)</span><span >[AUT.] MONIKA LITKO, JANUSZ SYKUT, JANUSZ KLEINROK. <i>Mag.\n       Stomatol.</i> 2009 R. 19 nr 5 s. 63-69, sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/55672/\" target=\"_blank\"><span\n       >Investigations on bilateral medial TMJ disc\n       displacements. (Badania nad obustronnymi przyśrodkowymi przemieszczeniami\n       krążków ssż.)</span><span >[AUT.]\n       BEATA PIÓRKOWSKA-SKRABUCHA, MONIKA LITKO, ELŻBIETA CZELEJ-PISZCZ, KATARZYNA\n       SARNA-BOŚ, IWONA KUROŃ-OPALIŃSKA, JANUSZ SYKUT, ANNA WIKTOR-STOMA, JANUSZ\n       KLEINROK. <i>Stomatol. Współcz.</i> 2009 vol. 16 nr 4 s. 8-13, bibliogr.\n       poz. 33, streszcz.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/51042/\" target=\"_blank\"><span\n       >Stan uzębienia i leczenia protetycznego u pacjentów z\n       przewlekłą chorobą nerek leczonych hemodializami. Analiza przyczyn\n       ograniczonego zaopatrzenia protetycznego. (Dental and prosthetic devices\n       status of hemodialyzed patients. Reason of prosthetic treatment\n       restriction.)</span><span >[AUT.]\n       IWONA BARANOWICZ-GĄSZCZYK, LUCYNA JÓŹWIAK, JANUSZ SYKUT, ANDRZEJ KSIĄŻEK. <i>Nefrol.\n       Dializoter. Pol.</i> 2008 t. 12 nr 3 s. 171-175, bibliogr. sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47847/\" target=\"_blank\"><span\n       >An analysis of the prevalence of appeals for treatment\n       patients with symptoms of mandibular dysfunction - the comparative\n       studies.</span><span > [AUT.]\n       E[LŻBIETA] CZELEJ-PISZCZ, B[EATA] PIÓRKOWSKA-SKRABUCHA, M[ONIKA] LITKO,\n       B.J. ROBAK, J[ANUSZ] SYKUT, I[WONA] KUROŃ-OPALIŃSKA, M[AGDALENA]\n       BAKALCZUK, J[ANUSZ] KLEINROK. <i>Pol. J. Environ. Stud.</i> 2007 vol. 16\n       nr 6C s. 49-52, bibliogr. poz. 38, IV International Scientific Symposium\n       &quot;Environmental - health risk in dentistry&quot;. Lublin, 23-24\n       November 2007.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47862/\" target=\"_blank\"><span\n       >The changes of immune system parameters as an\n       unfavourable effect of disturb oral hygiene in removable denture wearers.</span><span\n       > [AUT.] J[ANUSZ] SYKUT, M[ONIKA]\n       LITKO, E[LŻBIETA] CZELEJ-PISZCZ, A[GNIESZKA] ZWOLAK, J[ANUSZ] KLEINROK. <i>Pol.\n       J. Environ. Stud.</i> 2007 vol. 16 nr 6C s. 279-283, bibliogr, IV\n       International Scientific Symposium &quot;Environmental - health risk in\n       dentistry&quot;. Lublin, 23-24 November 2007.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47842/\" target=\"_blank\"><span\n       >Temporary mechanical strength research of the post-root\n       junction of the tooth of chosen active prefabricated post systems.</span><span\n       > [AUT.] K[ATARZYNA] SARNA-BOŚ,\n       A[NNA] SZABELSKA, B[EATA] PIÓRKOWSKA-SKRABUCHA, M[ONIKA] LITKO, J[ANUSZ]\n       SYKUT, J[OANNA] BOŻYK, A. RUDAWSKA, J[ANUSZ] KLEINROK. <i>Pol. J. Environ.\n       Stud.</i> 2007 vol. 16 nr 6C s. 261-264, bibliogr. poz. 35, IV\n       International Scientific Symposium &quot;Environmental - health risk in\n       dentistry&quot;. Lublin, 23-24 November 2007.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47850/\" target=\"_blank\"><span\n       >Mandibular pain dysfunction syndrome in youth -\n       analysis of treatment results of managing pain symptoms.</span><span\n       > [AUT.] M[ONIKA] LITKO, J[ANUSZ]\n       SYKUT, E[LŻBIETA] CZELEJ-PISZCZ, B[EATA] PIÓRKOWSKA-SKRABUCHA, K[ATARZYNA]\n       SARNA-BOŚ, J[ANUSZ] KLEINROK. <i>Pol. J. Environ. Stud.</i> 2007 vol. 16\n       nr 6C s. 154-157, bibliogr. poz. 25, IV International Scientific Symposium\n       &quot;Environmental - health risk in dentistry&quot;. Lublin, 23-24\n       November 2007.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47863/\" target=\"_blank\"><span\n       >The influence of removable prosthetic devices on the\n       state of the prosthetic base tissues of the oral cavity.</span><span\n       > [AUT.] J[ANUSZ] SYKUT, M[ONIKA]\n       LITKO, E[LŻBIETA] CZELEJ-PISZCZ, I[WONA] KUROŃ-OPALIŃSKA, K[ATARZYNA]\n       SARNA-BOŚ, J[ANUSZ] KLEINROK. <i>Pol. J. Environ. Stud.</i> 2007 vol. 16\n       nr 6C s. 284-287, bibliogr, IV International Scientific Symposium\n       &quot;Environmental - health risk in dentistry&quot;. Lublin, 23-24\n       November 2007.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47848/\" target=\"_blank\"><span\n       >Comparison of cements for fixing of permanent\n       prosthetic restoration. Resistance for cutting.</span><span\n       > [AUT.] I[WONA] KUROŃ-OPALIŃSKA,\n       E[LŻBIETA] CZELEJ-PISZCZ, B[EATA] PIÓRKOWSKA-SKRABUCHA, A[NDRZEJ] BOŻYK,\n       M[AGDALENA] BAKALCZUK, J[ANUSZ] SYKUT, J[ANUSZ] KLEINROK. <i>Pol. J.\n       Environ. Stud.</i> 2007 vol. 16 nr 6C s. 145-148, bibliogr. poz. 33, IV\n       International Scientific Symposium &quot;Environmental - health risk in\n       dentistry&quot;. Lublin, 23-24 November 2007.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/47157/\" target=\"_blank\"><span\n       >Bólowy zespół dysfunkcji narządu żucia u chorej\n       młodocianej - opis przypadku. (Mandibular pain dysfunction syndrome in a\n       young patient: a case report.)</span><span >[AUT.] MONIKA LITKO, JANUSZ SYKUT, JANUSZ KLEINROK. <i>Protet.\n       Stomatol.</i> 2007 t. 57 nr 6 s. 427-433, bibliogr. sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/42508/\" target=\"_blank\"><span\n       >Zastosowanie preparatu Gengigel w leczeniu stanów\n       patologicznych błony śluzowej jamy ustnej - wstępne obserwacje kliniczne. (The\n       application of Gengigel in the treatment of pathological states of oral\n       mucosa - a preliminary clinical observation.)</span><span\n       >[AUT.] JANUSZ SYKUT, PIOTR SIŁUCH,\n       ANNA ŚWISTAK, KAROL SELWESIUK, ANDRZEJ BOŻYK, JANUSZ KLEINROK. <i>Porad.\n       Stomatol.</i> 2006 R. 6 nr 10 s. 40-44, bibliogr. sum.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/35603/\" target=\"_blank\"><span\n       >Usage of hyaluronic acid in the treatment of\n       pathological state of epithelium of an oral cavity. (Wykorzystanie kwasu\n       hialuronowego w leczeniu stanów patologicznych błony śluzowej jamy\n       ustnej.)</span><span >[AUT.] ANNA\n       ŚWISTAK, KAROL SELWESIUK, PIOTR SIŁUCH, JANUSZ SYKUT, JANUSZ BOROWICZ,\n       BARBARA SKRZYDŁO-RADOMAŃSKA, JANUSZ KLEINROK. <i>Ann. UMCS Sect. D</i>\n       2005 vol. 60 nr 1 s. 13-15, bibliogr. streszcz.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/36974/\" target=\"_blank\"><span\n       >The changes of oral cavity biocenosis in removable\n       denture wearers including their influence on the changes of select\n       peripheral blood parameters. (Zmiany w składzie flory bakteryjnej jamy\n       ustnej u pacjentów użytkujących różne rodzaje ruchomych uzupełnień\n       protetycznych i ich wpływ na wybrane parametry krwi obwodowej.)</span><span\n       >[AUT.] JANUSZ SYKUT, ELŻBIETA PUACZ,\n       JANUSZ KLEINROK. <i>Ann. UMCS Sect. D</i> 2005 vol. 60 nr 2 s. 850-854,\n       bibliogr. streszcz.</span></a></span><span > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/36599/\" target=\"_blank\"><span\n       >The evaluation of the need for prosthetic treatment in\n       dialyzed patients in Nephrology Clinic of PSK 4 clinical hospital of\n       Lublin. (Ocena zapotrzebowania na leczenie protetyczne u pacjentów dializowanych\n       w Klinice Nefrologii SPSK nr 4 w Lublinie.)</span><span >[AUT.] PIOTR SIŁUCH, JOLANTA ROBAK, JANUSZ SYKUT,\n       LUCYNA JÓŹWIAK, IWONA BARANOWICZ, JANUSZ BOROWICZ, EDYTA JAROSZEWICZ,\n       JANUSZ KLEINROK, ANDRZEJ KSIĄŻEK. <i>Ann. UMCS Sect. D</i> 2005 vol. 60 nr\n       2 s. 1036-1040, bibliogr. streszcz.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/31930/\" target=\"_blank\"><span\n       >Diagnostic abilities of three-dimensional electronic\n       axiography on the basis of ARCUSdigma device. (Możliwości diagnostyczne\n       trójwymiarowej aksjografii elektronicznej na podstawie urządzenia\n       ARCUSdigma.)</span><span >[AUT.]\n       MAGDALENA BAKALCZUK, ANDRZEJ BOŻYK, MICHAŁ IWANEK, JANUSZ BOROWICZ, JANUSZ\n       SYKUT, JANUSZ KLEINROK. <i>Ann. UMCS Sect. D</i> 2004 vol. 59 nr 2 s.\n       324-327, bibliogr. streszcz.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/31931/\" target=\"_blank\"><span\n       >Prosthetic rehabilitation of edentulous patients with\n       cleft palate. (Rehabilitacja protetyczna bezzębnych pacjentów z\n       rozszczepem podniebienia.)</span><span >[AUT.]\n       JANUSZ SYKUT, PAWEŁ MIESZKOWSKI, MAGDALENA BAKALCZUK, JANUSZ KLEINROK. <i>Ann.\n       UMCS Sect. D</i> 2004 vol. 59 nr 2 s. 209-212, bibliogr. streszcz.</span></a></span><span\n       > </span></li>\n   <li ><span ><a\n       href=\"http://bpp.umlub.pl/bpp/wydawnictwo_ciagle/30722/\" target=\"_blank\"><span\n       >Ziarniniak szczelinowaty - przerostowa postać zapalenia\n       protetycznego błony śluzowej jamy ustnej - opis przypadku. (Granuloma\n       fissuratum - hypertrophy shape of stomatitis prosthetica of oral mucous\n       membrane - a case report.)</span><span >[AUT.]\n       JANUSZ SYKUT, JANUSZ BOROWICZ, ANNA ŚWISTAK, JANUSZ KLEINROK. <i>Protet.\n       Stomatol.</i> 2004 t. 54 nr 4 s. 268-271, bibliogr. sum.</span></a></span><span\n       > </span></li>\n</ol>\n\n  <h1>Artykuły o nas</h1>\n  <div class=\"publications\" *ngFor=\"let el of publ\">\n    <a [href]=\"'./assets/static/publications/'+ el +'.pdf'\" download>\n      <img class=\"cert-thumb\" [src]=\"'./assets/static/publications/'+ el +'.jpg'\" alt=\"prodentica publikacje\" width=\"190\" height=\"143.5\">\n      <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent() {
        this.publ = [];
    }
    PublicationsComponent.prototype.ngOnInit = function () {
        /**
         * Set pdf publications length.
         */
        for (var i = 1; i <= 3; i++) {
            this.publ.push(i);
        }
    };
    PublicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publications',
            template: __webpack_require__(/*! ./publications.component.html */ "./src/app/publications/publications.component.html"),
            styles: [__webpack_require__(/*! ./publications.component.css */ "./src/app/publications/publications.component.css")]
        })
        /** Class representing a Publications component. */
        ,
        __metadata("design:paramtypes", [])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-hide {\r\n  display: none;\r\n}\r\n\r\n.servicesShow {\r\n  display: block;\r\n}\r\n\r\n.services {\r\n  cursor: pointer;\r\n}\r\n\r\n.services h2:hover {\r\n  color: #8b8b8b !important;\r\n}\r\n\r\n.services ul {\r\n  list-style-type: disc;\r\n}\r\n\r\n.services li {\r\n  //display: block;\r\n}\r\n\r\n.services i {\r\n  float: right;\r\n}\r\n\r\n.services h2 {\r\n  margin: 0;\r\n  padding: 5px;\r\n  border-top: solid 1px #71d759;\r\n  border-bottom: solid 1px #71d759;\r\n}\r\n\r\n.services:nth-child(even) h2 {\r\n  background: #71d759;\r\n  color: white;\r\n}\r\n\r\n.slide-bottom {\r\n -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n         animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n          display: block;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2018-6-20 14:28:51\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation slide-bottom\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes slide-bottom {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(10px);\r\n            transform: translateY(10px);\r\n  }\r\n}\r\n\r\n@keyframes slide-bottom {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(10px);\r\n            transform: translateY(10px);\r\n  }\r\n}\r\n\r\nul.dashed {\r\n    list-style: none;\r\n    //padding-left: 0;\r\n}\r\n\r\nul.dashed > li {\r\n    margin: 0 10px;\r\n}\r\n\r\n/* Prevent nested li's from getting messed up */\r\n\r\nul.dashed > li::before {\r\n    content: \"- \";\r\n    margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"galeria\">\n  <h1>Zakres Usług:</h1>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Profilaktyka <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <ul>\n        <li>usuwanie kamienia i osadów nazębnych</li>\n        <li>piaskowanie osadów</li>\n        <li>znoszenie nadwrażliwości zębów i szyjek zębów</li>\n        <li>lapisowanie ubytków w zębach mlecznych</li>\n        <li>fluoryzacja kontaktowa w profilaktyce próchnicy</li>\n        <li>lakowanie bruzd i lakierowanie zębów</li>\n        <li>instruktaże dotyczące prawidłowej higieny j. ustnej i masażu dziąseł z doborem odpowiedniego osprzętu: szczotek, nici, floserów, irygatorów, preparatów ,past itp.</li>\n        <li>instruktaże ćwiczeń mioterapeutycznych i postępowania: we wczesnej profilaktyce ortodontycznej, przy zaburzeniach połykania, wadach zgryzu, związanych z eliminacją zaburzeń w stawach skroniowożuchwowych</li>\n        <li>plastrowanie/kynesiology taping/</li>\n        <li>stosowanie płytek relaksacyjnych różnej grubości i twardości u pacjentów z obniżoną wysokością zwarcia i przy bruksizmie /”zgrzytanie zębów”/</li>\n        <li>płytki przedsionkowe, płytki ochronne sportowe</li>\n        <p><strong>Skontaktuj się</strong></p>\n        <p><strong>SPECJALISTA DR KATARZYNA RADEJ</strong></p>\n        <p><strong>DR PRZEMYSŁAW KOPEĆ</strong></p>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Stomatologia zachowawcza i estetyczna <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <ul>\n        <li>odbudowy ubytków próchnicowych zębów mlecznych i stałych, żywych i martwych</li>\n        <li>leczenie ubytków szkliwa i zębiny klinowych i innych niepróchnicowego pochodzenia</li>\n        <li>korekty ubytków i niedorozwojów szkliwa</li>\n        <li>rekonstrukcje zębów złamanych po urazach</li>\n        <li>odbudowy rozległych ubytków zębów met. bezpośrednią lub pośrednią z zastosowaniem wkładów i nakładów / inlay, onlay/ kompozytowych lub porcelanowych</li>\n        <li>korekty koloru i kształtu zębów</li>\n        <li>maskowanie przebarwień</li>\n        <li>licowanie zębów kompozytem</li>\n        <li>leczenie przyżyciowe zębów</li>\n        <li>szynowanie kompozytem zębów rozchwianych z zastosowaniem wzmocnień taśmami z włókna szklanego</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n  <h2>Stomatologia Dziecięca <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <h3>Mali Pacjenci</h3>\n      <p>„Częstym błędem popełnianym w lecznictwie dziecięcym jest traktowanie dziecka jako pacjenta, któremu można wykonać zabieg wbrew jego przyzwoleniu, znienacka czy „na siłę” w razie oporu czy pośpiechu. Powoduje to, że powstały w trakcie tak wykonanego zabiegu uraz oraz stres i utracone zaufanie będą naznaczały takiego pacjenta na całe jego dalsze życie.”</p>\n      <p><strong>Skontaktuj się</strong></p>\n      <p><strong>SPECJALISTA DR  KATARZYNA RADEJ</strong></p>\n      <p>Wizyta dziecka w gabinecie stomatologicznym musi przebiegać w sposób pozwalający dziecku nabrać zaufania i przekonania, że nie stanie mu się krzywda w jego odczuciu. Stąd niewskazany jest pośpiech, a więc pierwsze wizyty, których może być kilka zanim dziecko uda się przekonać do zgody na badanie i dalsze leczenie, nie powinny wynikać z nagłej potrzeby interwencji związanej z dolegliwościami bólowymi, w przypadku których, niestety na odkładanie wizyty często nie można sobie pozwolić z uwagi na zaawansowanie problemu.</p>\n      <p><strong>Uspokojenie podtlenkiem azotu</strong></p>\n      <i><p>Leczenie zaniepokojonych pacjentów jest również przyczyną stresu wśród lekarzy dentystów i personelu medycznego, czyniąc kwestię walki z lękiem kluczowym wyzwaniem we współczesnej stomatologii.</p>\n        <p>Sedacja wziewna z użyciem mieszaniny podtlenku azotu i tlenu jest jedną z najskuteczniejszych dostępnych metod uspokajania pacjentów w stomatologii i innych dziedzinach medycyny zabiegowej. Metoda ta jest powszechnie akceptowana i przyjmowana z entuzjazmem przez pacjentów obawiających się wizyt stomatologicznych. System sedacji wziewnej wyróżnia bezpieczeństwo, niezawodność oraz łatwość obsługi potrzebne do bezstresowego leczenia zarówno dla pacjenta, jak i lekarza.</p></i>\n        <p>Gaz rozweselający jest bardzo bezpieczny i nieszkodliwy szczególnie przydatny dla dzieci i dorosłych odczuwających silny lęk przed wizytą u dentysty i leczeniem. Jest stosowant w medycynie i stomatologii od dawna.</p>\n        <p>Zastosowanie gazu antystresowego wprowadza pacjenta w stan rozluźnienia i odprężenia, redukując nieprzyjemne odczucia związane z leczeniem. Dawkę podtlenku azotu dostosowuje się do poziomu stresu u pacjenta, co oznacza, że można pogłębiać bądź spłycać stan relaksacji. Cały czas utrzymywany jest kontakt z pacjentem, który przebywa w stanie przyjemnej euforii. U najmłodszych pacjentów dość często pojawiają się marzenia senne na jawie np. latanie samolotem, rakietą kosmiczną, taniec na balu, itp. Gaz rozweselający wdycha się za pomocą maseczki zakładanej na nos. Każdy pacjent ma swoją własną maseczkę.</p>\n        <p>Ponieważ podtlenek azotu wykazuje działanie zneczulające, małe zabiegi mogą odbyć się bez znieczulenia. Jednak w przypadku bardziej skomplikowanego leczenia nieczulenie miejscowe jest jak najbardziej możliwe.</p>\n       \n      <p><strong>Kiedy podanie gazu rozweselającego daje najlepsze rezultaty</strong></p>\n\n      <ul>\n        <li>jeżeli Ty lub twoje dziecko odczuwacie lęk przed jakimkolwiek leczeniem stomatologicznym;</li>\n        <li>jeżeli Twoje dziecko nie było jeszcze leczone stomatologicznie;</li>\n        <li>jeżeli odczuwasz silny strach przed leczeniem stomatologicznym;</li>\n        <li>jeżeli nie chcesz się bać dentysty;</li>\n        <li>jeżeli pacjent ma silny odruch wymiotny i nie można pobrać wycisku, zrobić zdjęcia rtg;</li>\n        <li>jeżeli wyrwanie zęba wydaje się być czymś trudnym do zniesienia;</li>\n      </ul>\n \n      <p>\n        <strong>Zalecenia dla pacjentów</strong>\n      </p>\n\n      <ul>\n        <li>nie jeść co najmniej 3 godz. przed zabiegiem;</li>\n        <li>dzieci muszą przychodzić z dorosłą osobą towarzyszącą;</li>\n        <li>nie nakładać ciasnych ubrań;</li>\n        <li>wg piśmiennictwa po 30 minutach od zakończenia podawanego gazu można prowadzić pojazdy mechaniczne, jednak ze względu na bezpieczeństwo zalecamy naszym pacjentom, aby w dniu wykonania sedacji nie prowadzili pojazdów mechanicznych</li>\n      </ul>\n\n      <ul class=\"dashed\">\n         <li>wizyty adaptacyjne</li>\n         <li>leczenie próchnicy zębów mlecznych i stałych stałych (wypełnienia kompozytowe kolorowe, białe, wypełnienia glassjonomerowe)</li>\n         <li>lakowanie zębów(laki mogą być białe, kolorowe, uwalniające fluor)</li>\n         <li>usuwanie zębów mlecznych i stałych</li>\n         <li>ozonoterapia</li>\n         <li>fluoryzacje</li>\n         <li>usuwanie złogów nazębnych, piaskowanie</li>\n         <li>bezstresowe leczenie w sedacji wziewnej podtlenkiem azotu(gaz rozweselający)</li>\n         <li>nagrody i dyplomy  dla dzielnych pacjentów</li>\n         <li>w trakcie wizyty dzieci oglądają bajki na ekranie telewizora</li>\n      </ul>\n\n    </div>\n  </div>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Leczenie endodontyczne <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n\n        <p>\n          Leczenie kanałowe jest niezbędne, kiedy miazga, tkanka miękka wypełniająca wnętrze zęba, jest w stanie zapalnym lub jest zakażona. Główne przyczyny to  głęboka próchnica oraz urazy zęba. Nieleczone zapalenie miazgi skutkuje dolegliwościami bólowymi i może prowadzić prowadzi do powstania ropnia.  Częste objawy to zwiększona wrażliwość na ciepło, tkliwość zęba przy nagryzaniu oraz powiększenie okolicznych węzłów chłonnych.\n        </p>\n      <p>\n        Leczenie kanałowe jest przeprowadzane, aby uwolnić pacjenta od bólu. Przy użyciu nowoczesnych metod znieczulania możliwe jest znaczne zredukowanie bólu. Większość pacjentów nie odczuwa dyskomfortu w czasie leczenia. Parę dni po leczeniu ząb może być nadwrażliwy, szczególnie jeśli był leczony z powodu zaawansowanego stanu zapalnego z burzliwymi objawami przed leczeniem. Te dolegliwości można zminimalizować stosując leki zalecone przez dentystę oraz stosując się do jego zaleceń.\n        Endodoncja to inne określenie leczenia kanałowego, które obejmuje usuwanie uszkodzonych lub martwych nerwów i naczyń krwionośnych z korzenia zęba, który został zakażony w skutek działania próchnicy, ukruszenia lub urazu. Przestrzeń pozostała po usunięciu nerwu jest wypełniana materiałem, który uszczelnia ząb i pozwala mu funkcjonować jak dotychczas.\n        Powtórne leczenie kanałowe (reendo) może być skomplikowaną i wymagającą procedurą, obejmującą usunięcie materiału obecnie wypełniającego kanał, ponowne czyszczenie kanału i wypełnienie go nowym materiałem. Mikroskop wykorzystujemy w skomplikowanych przypadkach leczenia kanałowego, w przypadku zębów trudno dostępnych, do znajdywania trudnych do znalezienia wejść do kanałów oraz do usuwania resztek zęba lub instrumentów medycznych i chirurgii kanałowej.\n        Leczenie endodoncyjne może w sposób bezpieczny i komfortowy na wiele lat uratować ząb, który w innych okolicznościach trzeba by usunąć.\n      </p>\n        <p>\n          Pamiętaj, że zdrowy, wyleczony ząb jest zawsze lepszy od sztucznego. Ostateczny wybór zawsze należy do ciebie, ale utrata zęba wiąże się z licznymi niedogodnościami. Kiedy usunięty ząb nie zostanie zastąpiony, zęby sąsiadujące z pustym miejscem po nim zaczynają zmieniać swoje normalne położenie. Może to prowadzić do ich wykrzywienia lub ściśnięcia powodującego utratę skuteczności gryzienia i żucia.\n        </p>\n        <p>\n          Po wykonaniu zdjęcia RTG oraz znieczulenia ząb oczyszcza się z próchnicy. Następnie otwiera się komorę zęba, aby dostać się do zainfekowanej miazgi. Za pomocą endometru  ustalana jest długość kanałów korzeniowych, które odpowiednio kształtuje się i oczyszcza .  Kanały wypełniane są metodą termiczną aby uzyskać doskonałą szczelność.\n        W Studio Uśmiechu w czasie leczenia kanałowego stosujemy nowoczesny sprzęt diagnostyczno terapeutyczny (m.in. mikroskop, mikrosilnik endodontyczny,  endometr)\n      </p>\n\n\n       <ul>\n         <li>Opracowanie i wypełnienie jednego kanału</li>\n         <li>Opracowanie i wypełnienie dwóch kanałów</li>\n         <li>Opracowanie i wypełnienie trzech kanałów</li>\n         <li>Opracowanie i wypełnienie kanałów pod mikroskopem</li>\n         <li>Opracowanie i wypełnienie dodatkowego kanału</li>\n         <li>Usunięcie złamanego narzędzia</li>\n         <li>Usunięcie starego wkładu koronowokorzeniowego</li>\n       </ul>\n\n        <p><strong>Skontaktuj się</strong></p>\n        <p><strong>DR PRZEMYSŁAW KOPEĆ</strong></p>\n\n    </div>\n  </div>\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Protetyka <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <p>Serdecznie zapraszamy na bezpłatną konsultację protetytczną</p>\n\n      <p>Protetyka</p>\n       <ul>\n         <li>wkłady koronowo korzeniowe lane i standardowe</li>\n         <li>korony i mosty porcelanowe napalane na metalu i pełnoceramiczne</li>\n         <li>Korona pełnoceramiczna (bez podbudowy – najwyższa estetyka): – w systemie Empress II, – porcelana skaleniowa, – w systemie Procera</li>\n         <li>licówki ceramiczne lub kompozytowe</li>\n         <li>licówki pełnoceramiczne</li>\n         <li>wkłady, nakłady porcelanowe i kompozytowe</li>\n         <li>korony i mosty tymczasowe akrylowe i kompozytowe</li>\n         <li>protezy osiadające częściowe i całkowite</li>\n         <li>protezy natychmiastowe częściowe i całkowite</li>\n         <li>szynoprotezy i protezy szkieletowe</li>\n         <li>protezy mocowane kosmetycznie na zatrzaskach, zasuwach czy belkach</li>\n         <li>uzupełnienia protetyczne mocowane na implantach</li>\n         <li>protezy nakładkowe /overdenture/mocowane na resztkowym uzębieniu korzeniach zębów z zamocowanymi wkładami koronowo korzeniowymi z zatrzaskami lub na implantach</li>\n         <li>płytki relaksacyjne i ochronne miękkie i twarde o różnej grubości</li>\n         <li>współpraca z ortodontą w sprawach przedprotetycznego leczenia ortodontycznego</li>\n         <li>Modele diagnostyczne</li>\n         <li>Diagnostyczne nawoskowanie (za punkt)</li>\n       </ul>\n\n        <p><strong>Skontaktuj się</strong></p>\n        <p><strong>SPECJALISTA DR N. MED JANUSZ SYKUT</strong></p>\n\n    </div>\n  </div>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Chirurgia stomatologiczna i periodontologiczna <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <ul>\n      <li>usuwanie zębów stałych i mlecznych</li>\n      <li>usuwanie zębów z utrudnionym wyrzynaniem i zębów zatrzymanych /poprzez dłutowanie wewnątrz zębodołowe lub zewnątrz zębodołowe /</li>\n      <li>usuwanie nawisów dziąsłowych zębów z utrudnionym wyrzynaniem</li>\n      <li>zamykanie poekstrakcyjnych połączeń ustno zatokowych i plastyki przetok ustnozatokowych</li>\n      <li>resekcje wierzchołków korzeni zębów</li>\n      <li>hemisekcje, premolaryzacje zębów</li>\n      <li>leczenie chirurgiczne torbieli metodą wyłuszczenia lub wgłobienia</li>\n      <li>wszczepianie preparatów kościotwórczych i kościozastępczych oraz sterowana regeneracja kości</li>\n      <li>plastyka wyrośli kostnych i chirurgiczne przygotowanie wyrostków zębodołowych do protezowania</li>\n      <li>plastyka przerostów tkanek miękkich/usuwanie tzw. „grzebieni kogucich”czy „ziarniniaków szczelinowatych”/</li>\n      <li>leczenie przerostów wędzidełek warg, języka i policzków poprzez wycięcie lub plastykę na „ostro” lub z zastosowaniem elektrokoagulacji</li>\n      <li>pobieranie wycinków tkanek miękkich i twardych do badania hist.pat. , nacięcia ropni, leczenie zapaleń zębodołów/tzw.”suchych czy pustych zębodołów”/</li>\n      <li>pogłębianie przedsionków</li>\n      <li>kiretaże otwarte i zamknięte</li>\n      <li>gingiwektomie</li>\n      <li>chirurgiczne wydłużanie koron dla korekty kosmetycznej i wydłużanie korzeni zębów dla celów odbudowy protetycznej</li>\n      <li>wszczepianie mini implantów stabilizujących protezy całkowite</li>\n      <li>unieruchamianie zębów i stawów skroniowożuchwowych/ssż/ po urazach szczęk</li>\n      <li>repozycja zwichnięć ssż</li>\n      <li>współpraca z implantologami w zakresie leczenia implantologicznego w pełnym zakresie</li>\n      <li>w trudnych przypadkach współpraca ze specjalistami periodontologami lub ortodontami</li>\n      </ul>\n\n      <p><strong>Skontaktuj się</strong></p>\n      <p><strong>SPECJALISTA DR N. MED JANUSZ SYKUT</strong></p>\n\n    </div>\n  </div>\n\n  <div class=\"services\" (click)=\"showService($event)\">\n    <h2>Implanty Lublin – Implantologia <i class=\"fa fa-chevron-circle-down\" ariahidden=\"true\"></i></h2>\n    <div class=\"services-hide\">\n      <p>\n        Implanty – “Nowoczesna implantologia pozwala na osiągnięcie trwałego efektu estetycznego i na poprawę zaburzonej poprzez utratę zębów mechaniki narządu żucia. Zabieg, w czasie którego wstawiane są implanty wykonywany jest w znieczuleniu miejscowym. Może obejmować całość jamy ustnej, bądź pojedynczy ubytek. Wstawienie implantów jest kilkuetapowe. Podstawowym materiałem, z którego wykonywane są implanty stomatologiczne jest tytan (ze względu na swoją biokompatybilność – nie jest rozpoznawany przez organizm jako ciało obce). Ceny wstawienia implantów są bardzo atrakcyjne, szczególnie gdy bierzemy pod uwagę relację ceny leczenia do uzyskanych korzyści, z których główną jest znaczna poprawa jakości życia – zarówno od strony praktycznej jak i estetycznej”.\n      </p>\n      <p><strong>Czym są Mini Implanty?</strong></p>\n      <p>\n        “Mini implanty są to implanty o średnicy mniejszej niż 3 mm. Implanty te stanowią alternatywę dla konwencjonalnych implantów przy zaopatrywaniu bezzębnej żuchwy, wtedy kiedy zanikła kość części zębodołowej żuchwy uniemożliwia instalację implantów o większej średnicy. Jest to alternatywą dla zabiegów augumentacji oraz przeszczepów kości. Wskazaniem do zastosowania mini implantów jest całkowity brak zębów w żuchwie u pacjentów, u których niemożliwe jest wprowadzenie pełnowymiarowych implantów. Mini implanty maja swoich zwolenników ze względu na minimalną inwazyjność zabiegu i możliwość natychmiastowego obciążenia. Niektórzy autorzy podkreślają jednak krótki okres badań nad mini implantami i obserwacji długoterminowego wykorzystania. Określają konieczność dalszych obserwacji, które zweryfikują możliwość zastosowania mini implantów”.\n      </p>\n      <p><strong>Czym jest Zatrzask?</strong></p>\n      <p>\n        “To rodzaj zamocowania protetycznego, przypominający powszechnie stosowane zapięcie w odzieży. Może być montowane w brakach międzyzębowych do pojedynczych zębów filarowych”.\n      </p>\n      <p>\n        <strong>Implanty  spojrzenie bardziej naukowe</strong>\n      </p>\n      <p>\n        “Podobnie jak w przypadku naturalnych zębów, również zdrowe tkanki okalające implant posiadają szerokość biologiczną. Jest to mankiet z tkanki miękkiej, konieczny do stabilizacji przyzębia wokół wspartych na szczepach protez. Jeśli chodzi o wszczepy zębowe, zarówno gruby płaski, jak również girlandowaty tym biologiczny przyzębia posiadają swoje wady i zalety.\n      </p>\n      <p>\n        W przypadku cienkiego girlandowatego przyzębia międzyzębowa objętość tkanki kostnej jest większa – z powodu wąskich, stożkowatych korzeni. Jest to korzystne dla zapewnienia odpowiedniej odległości pomiędzy implantem a zębem oraz pomiędzy sąsiednimi implantami, czyli odpowiednio 1,5 i 3 mm. Jednak ze względu na cienkie i delikatne dziąsło nieumyślny uraz lub niewłaściwie złożony wszczep mogą doprowadzić do recesji dziąsła (odsłaniając sztyft filarowy implantu) lub powstania nieestetycznych “czarnych trójkątów”.\n      </p>\n      <p>\n        Natomiast gdy mamy do czynienia z grubym płaskim biotypem, korzenie są szersze i stożkowate, dlatego pozostawiają mniejszą przestrzeń pomiędzy sąsiednimi zębami lub planowanymi implantami. W tej sytuacji dobrym rozwiązaniem może się okazać zastosowanie węższych wszczepów z równoczesnym mezjalnodestalnym przeszczepem tkanki kostnej lub przeszczepem od strony policzkowej w celu skompresowania zredukowanej przestrzeni mezjalnodestalnej.\n      </p>\n      <p>\n        Zaletą grubego typu biologicznego przyzębia jest to, iż z powodu obszernego, włóknistego dziąsła niebezpieczeństwo powstania recesji jest znacznie mniej prawdopodobne niż w przypadku biotypu cienkiego girlandowatego.\n      </p>\n      <p>\n        Ponadto brzegi wszystkich rekonstrukcji umieszczonych zewnątrzkoronowo (na zębach naturalnych lub implantach) powinny naśladować kontur połączenia szkliwnocementowego i brzegu kostnego wyrostka, z dokoronowanymi szczątkami w przestrzeniach międzyzębowych i dowierzchołkowymi szczytami na powierzchniach policzkowych, wargowych i językowych. Wprowadzenie implantów typu “scalloped” oraz implantów parabolicznych naśladujących naturalny kontur połączenia szkliwnocementowego i brzegu wyrostka miało na celu zminimalizowanie utraty tkanki kostnej w przestrzeni międzyzębowej, co stosunkowo często występuje w wypadku stosowanie wszczepów konsencjonalnych o płaskich platformach łącznikowych. Wszczepienie opisanych powyżej nowoczesnych implantów daje możliwość utworzenia połączania implantdziąsło – na wzór naturalnego połączenia zębowodziąsłowego”.\n      </p>\n      <p>Dobieramy najbardziej odpowiedni kolor implantu</p>\n      <p><strong>Skontaktuj się</strong></p>\n      <p><strong>SPECJALISTA DR N. MED JANUSZ SYKUT</strong></p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.show = false;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    /**
     * Slide down and up content of services.
     */
    ServicesComponent.prototype.showService = function (event) {
        event.stopPropagation();
        if (event.target.parentNode.nodeName === 'DIV') {
            event.target.parentNode.lastElementChild.classList.toggle('slide-bottom');
        }
        else if (event.target.parentNode.nodeName === 'H2') {
            event.target.parentNode.parentNode.lastElementChild.classList.toggle('slide-bottom');
        }
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        })
        /** Class representing a Services component. */
        ,
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team {      /* OLD - iOS 6-, Safari 3.1-6 */         /* OLD - Firefox 19- (buggy but mostly works) */      /* TWEENER - IE 10 */     /* NEW - Chrome */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#team h1, #team h2 {\r\n  width: 100%;\r\n}\r\n\r\n.team {\r\n  width: 33.3%;\r\n  padding: 5px;\r\n}\r\n\r\n.team img {\r\n  width: 100%;\r\n}\r\n\r\n.team-link {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n\r\n  .team {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 999px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\n  <h1>Nasz zespół</h1>\n\n\n  <div class=\"team\">\n    <img src=\"./assets/images/zespol-sykut600x600.jpg\">\n    <h2>DR N. MED JANUSZ SYKUT</h2>\n    <h3>SPECJALNOŚĆ  PROTETYKA, CHIRURGIA, IMPLANTOLOGIA</h3>\n    <p>\n      Absolwent Uniwersytetu Medycznego w Lublinie. Autor publikacji w czasopismach branżowych. Uczestnik licznych krajowych i zagranicznych kursów oraz konferencji naukowych. Janusz Sykut zajmuje się również zabiegami Medycyny Estetycznej. Obecnie adiunkt w Katedrze i Zakładzie Protetyki Stomatologicznej Uniwersytetu Medycznego w Lublinie.\n    </p>\n    <p class=\"team-link\" (click)=\"showSykut = !showSykut\"><strong>Więcej</strong> <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i></p>\n    <div *ngIf=\"showSykut\">\n      <p>\n        W latach 2001-2002 Janusz Sykut był asystentem w Zakładzie Stomatologii Zachowawczej UM w Lublinie. 2001-2007 asystent w Poradni Chirurgii Stomatologicznej Wojewódzkiej Przychodni Stomatologicznej w Lublinie. 2002-2006 rezydent w trakcie specjalizacji w Katedrze i Zakładzie Protetyki Stomatologicznej z Pracownią Implantologii Stomatologicznej i Pracownią Zaburzeń Czynnościowych Narządu Żucia Uniwersytetu Medycznego w Lublinie. W 2004 uzyskał stopień doktora nauk medycznych. W 2006 uzyskał tytuł specjalisty w dziedzinie Protetyki Stomatologicznej. W 2014 roku ukończył czteroletni Implant Continuum Education Program w Collage of Dentistry New York University. W 2015 uzyskał certyfikat Umiejętności w Dziedzinie Implantologii Stomatologicznej EDI OSIS.\n      </p>\n      <p>\n        Prywatne zainteresowania: sporty wodne i zimowe, motoryzacja, film.\n      </p>\n      <p>\n        Janusz Sykut jest pracownikiem naukowym <a href=\"http://www.zakladprotetyki.umlub.pl/pracownicy/\" target=\"_blank\" rel=\"noopener noreferrer\" tabindex=\"0\">Uniwersytetu Medycznego w Lublinie </a>\n      </p>\n      <p>\n        “Zakład Protetyki Stomatologicznej został powołany wraz z Instytutem Stomatologii AM w Lublinie w dniu 1 października 1974 roku. W 1985 roku przy Zakładzie powstała Pracownia Zaburzeń Czynnościowych Narządu Żucia. Pracownia ta była na początku jedyną tego typu wyodrębnioną placówką naukową w kraju, zajmującą się leczeniem chorych z bólami twarzy i głowy na tle dysfunkcji układu stomatognatycznego. W momencie powołania Zakład Protetyki Stomatologicznej zatrudniał 5 pracowników naukowo-dydaktycznych. Obecnie w Zakładzie Protetyki Stomatologicznej jest zatrudnionych 23 nauczycieli akademickich (5 adiunktów i 18 asystentów). Pracownicy Katedry i Zakładu Protetyki Stomatologicznej aktywnie działają w Polskim Towarzystwie Stomatologicznym. Kilku pracowników Zakładu wchodzi w skład Zarządu Oddziału PTS w Lublinie. Lekarze pracujący w Zakładzie Protetyki Stomatologicznej prowadzą szkolenia przeddyplomowe i podyplomowe. Realizowany jest program szkolenia przeddyplomowego z zakresu protetyki stomatologicznej oraz materiałoznawstwa stomatologicznego dla studentów I, III, IV, V roku kierunku lekarsko-dentystycznego (ćwiczenia przedkliniczne, ćwiczenia kliniczne, wykłady).\n      </p>\n    </div>\n  </div>\n\n  <div class=\"team\">\n    <img src=\"./assets/images/zespol-radej600x600.jpg\">\n    <h2>DR KATARZYNA RADEJ</h2>\n    <h3>SPECJALNOŚĆ PEDODOCJA (STOMATOLOGIA  DZIECIĘCA, ZACHOWAWCZA)</h3>\n    <p>\n      Absolwentka Uniwersytetu Medycznego w Lublinie. W 2014 roku uzyskała tytuł specjalisty w dziedzinie stomatologii dziecięcej.\n    </p>\n    <p class=\"team-link\" (click)=\"showRadej = !showRadej\"><strong>Więcej</strong> <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i></p>\n    <div *ngIf=\"showRadej\">\n      <p>\n        Uczestniczka licznych kursów i konferencji. Od 2013 roku zajmuje się pracą z wykorzystaniem podtlenku azotu (gazu rozweselającego). Do małych i dużych pacjentów podchodzi z uśmiechem i cierpliwością. \n      </p>\n      <p>\n        Prywatnie mama dwójki dzieci. Zainteresowania to zdrowa kuchnia, wycieczki rowerowe i film.\n      </p>\n\n    </div>\n  </div>\n\n  <div class=\"team\">\n    <img src=\"./assets/images/zespol-kopec600x600.jpg\">\n    <h2>DR PRZEMYSŁAW KOPEĆ</h2>\n    <h3>SPECJALNOŚĆ ENDODONCJA</h3>\n    <p>\n      Specjalista stomatologii zachowawczej z endodoncją. Absolwent Uniwerytetu Medycznego w Lublinie. Od 2013 do 2016 pracownik w Zakładzie Stomatologii Zachowawczej i Endodoncji Stomatologicznego Centrum Klinicznego w Lublinie w ramach rezydentury.\n    </p>\n    <p class=\"team-link\" (click)=\"showKopec = !showKopec\"><strong>Więcej</strong> <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i></p>\n    <div *ngIf=\"showKopec\">\n      <p>\n        Podczas stażu podyplomowego pracownik wolontaryjny w Zakładzie Stom. Zach. Z Endo. SCK.\n      \tUczestnik wielu konferencji i kursów stomatologicznych.\n      </p>\n    \t<p>\n        Endodonta z zamiłowania i pasji. Miłośnik nowoczesnej motoryzacji oraz militariów.\n      </p>\n\n    </div>\n  </div>\n\n  <h1>Kompleksowe leczenie & profilaktyka</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.showSykut = false;
        this.showRadej = false;
        this.showKopec = false;
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        })
        /** Class representing a Team component. */
        ,
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Zlecenia\prodentica-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map