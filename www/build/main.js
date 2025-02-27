webpackJsonp([2],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		687,
		1
	],
	"../pages/register/register.module": [
		688,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.APP_TITLE = 'Freshisha';
        this.BASE_URL = 'http://app.freshisha-wesel.de';
        this.category = [];
        this.selectedTheme = 'dark-theme';
        this.fontSize = 20;
        this.savedNews = [];
        storage.get('settings').then(function (val) {
            if (val !== null && val !== undefined) {
                _this.fontSize = val.fontSize;
                _this.selectedTheme = val.selectedTheme;
            }
            _this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](_this.selectedTheme);
        }).catch(function () {
            _this.selectedTheme = 'light-theme';
            _this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](_this.selectedTheme);
        });
        if (this.savedNews.length == 0) {
            this.getSavedNews();
        }
    }
    ApiProvider.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.BASE_URL + '/appdb/login.php', data, options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.register = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.BASE_URL + '/appdb/register.php', data, options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.fetchProfile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.BASE_URL + '/appdb/register.php', data, options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getData = function (query) {
        return this.http.get(this.BASE_URL + '/api/' + query).map(this.extractData);
    };
    ApiProvider.prototype.extractData = function (res) {
        return res.json();
    };
    ApiProvider.prototype.postData = function (data, query) {
        if (data === void 0) { data = new FormData(); }
        return this.http.post(this.BASE_URL + '/api/' + query, data).map(this.extractData);
    };
    ApiProvider.prototype.setActiveTheme = function (val) {
        this.selectedTheme = val;
        this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](val);
        this.updateSetting();
    };
    ApiProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    ApiProvider.prototype.updateSetting = function () {
        this.storage.set('settings', { fontSize: this.fontSize, selectedTheme: this.selectedTheme });
    };
    ApiProvider.prototype.getSavedNews = function () {
        var _this = this;
        this.storage.get('news').then(function (val) {
            if (val != null && val != undefined) {
                _this.savedNews = val;
            }
        });
    };
    ApiProvider.prototype.saveNews = function (news) {
        if (news != null && news != undefined) {
            if (this.savedNews[news.id] == null || this.savedNews[news.id] == undefined || !this.savedNews[news.id]) {
                this.savedNews[news.id] = news;
            }
            else {
                this.savedNews[news.id] = null;
                delete this.savedNews[news.id];
            }
            this.storage.set('news', this.savedNews);
        }
    };
    ApiProvider.prototype.formatDate = function (date) {
        if (date === void 0) { date = '2017-11-13 12:38:17'; }
        return date.slice(0, 16).replace(' ', 'T');
    };
    ApiProvider.prototype.isLoggedIn = function () {
        var status = localStorage.getItem('status');
        if (status == 'active') {
            return true;
        }
        else {
            return false;
        }
    };
    ApiProvider.prototype.logout = function () {
        localStorage.clear();
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n<ion-tab [root]="tab1Root" tabTitle="" tabIcon="md-home"></ion-tab>\n<ion-tab [root]="tab2Root" tabTitle="" tabIcon="basket"></ion-tab>\n<ion-tab [root]="tab4Root" tabTitle="" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(alertCtrl, api, navCtrl, navParams, http, loading) {
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log('user', this.user);
        console.log('localstorage', localStorage.getItem('user'));
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.username = '';
        localStorage.clear();
        this.user = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]).then(function () {
            _this.alertCtrl.create({
                title: "Logged Out!",
                buttons: ['OK']
            }).present();
        });
        console.log('logging user out');
    };
    ProfilePage.prototype.go = function (page) {
        this.navCtrl.push(page);
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            //means that user exist in storage.
            // this.username = this.navParams.get('username');
            console.log('localStorage-user', user);
            this.username = user.username;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.api.fetchProfile(data_1)
                    .subscribe(function (res) {
                    console.log('res', res);
                    _this.user = data_1;
                    loader_1.dismiss();
                    _this.items = res.server_response;
                });
            });
        }
        else {
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>profile</ion-title>\n      <ion-buttons end>\n          <button ion-button color="secondary"(tap)="logout()" *ngIf="username">Logout</button>\n        </ion-buttons>\n      \n    </ion-navbar>\n \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div  *ngIf="!user">\n        <ion-item text-center no-lines>\n            <h1>Login / Register</h1>\n            <p style="color:white">Please login to continue..</p>\n          </ion-item>\n          <br>\n          <br>\n          <br>\n          <ion-item text-center no-lines>\n              <button ion-button (tap)="go(\'LoginPage\')">LOGIN NOW</button>\n          </ion-item>\n          <ion-item text-center no-lines>\n            <h5>OR</h5>\n          </ion-item>\n          <ion-item text-center no-lines>\n              <button ion-button (tap)="go(\'RegisterPage\')">Register Now</button>\n          </ion-item>\n        \n    </div>\n\n\n<div   *ngIf="user && user !== undefined ">\n<ion-item no-lines>\n  Welcome ! {{user?.username}}\n</ion-item>\n\n  <ion-item *ngFor="let item of items" >\n    <h2>Welcome {{item.username}}</h2>\n    <h3>Your profile information is as follows:</h3>\n    <ion-row>\n      <ion-col col-4>\n       Password\n      </ion-col>\n      <ion-col col-8>\n    {{item.password}}\n      </ion-col>\n   \n  </ion-row>\n  <ion-row>\n      <ion-col col-4>\n        Telephone\n      </ion-col>\n      <ion-col col-8>\n    {{item.telephone}}\n      </ion-col>\n   \n  </ion-row>\n  <ion-row>\n      <ion-col col-4>\n      Email \n      </ion-col>\n      <ion-col col-8>\n    {{item.email}}\n      </ion-col>\n   \n  </ion-row>\n   </ion-item>\n\n  </div>\n  </ion-content>\n\n'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadCategoryList();
    }
    CategoryPage.prototype.changeCategory = function (item) {
        if (typeof (item) === 'object') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { category: item });
        }
    };
    CategoryPage.prototype.loadCategoryList = function () {
        var _this = this;
        this.app.getData('Category').subscribe(function (data) {
            _this.app.category = data.items;
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/category/category.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <button *ngFor="let item of app.category" (click)="changeCategory(item)">\n      {{item.title}}\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__save_save__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, network, zone, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.app = app;
        this.errorMessage = null;
        this.newsList = [];
        this.showFloat = false;
        this.query = '';
        this.scrollToTop = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["throttle"])(this.scrollToTop, 500, { leading: true, trailing: false });
    }
    SearchPage.prototype.loadNewsList = function (infiniteScroll, refresh) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (refresh === void 0) { refresh = false; }
        if (this.network.type !== "none") {
            this.isInternet = false;
            this.errorMessage = null;
            this.app
                .getData('News/0?page=' + (refresh ? 0 : this.newsList.length) + this.query)
                .subscribe(function (data) {
                if (refresh)
                    _this.newsList = [];
                if (data.news.length > 0) {
                    _this.newsList = _this.newsList.concat(data.news);
                }
                else if (_this.newsList.length === 0 && _this.query.length > 0) {
                    _this.errorMessage = 'Sorry, there are no results.';
                }
                if (infiniteScroll != null)
                    infiniteScroll.complete();
            }, function (error) {
                _this.isInternet = true;
                if (infiniteScroll != null)
                    infiniteScroll.complete();
            });
        }
        else {
            this.isInternet = true;
            if (infiniteScroll != null)
                infiniteScroll.complete();
        }
    };
    SearchPage.prototype.onSearch = function (event) {
        this.newsList = [];
        this.query = '&search=' + event.target.value;
        this.loadNewsList();
    };
    SearchPage.prototype.goItemPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */], { news: data });
    };
    SearchPage.prototype.getScrollPosition = function () {
        if (this.content.scrollTop != null && this.content.scrollTop > 200) {
            if (this.showFloat === false) {
                this.showFloat = true;
                this.zone.run(function () { });
            }
        }
        else if (this.showFloat) {
            this.showFloat = false;
            this.zone.run(function () { });
        }
    };
    SearchPage.prototype.scrollToTop = function () {
        var _this = this;
        if (this.showFloat) {
            this.showFloat = false;
            var wait = this.content.isScrolling ? 150 : 0;
            setTimeout(function () { return _this.content.scrollToTop(500); }, wait);
        }
    };
    SearchPage.prototype.goSavedNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__save_save__["a" /* SavePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="onSearch($event)"></ion-searchbar>\n  <ion-refresher (ionRefresh)="loadNewsList($event, true)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="crescent">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let news of newsList" class="news" (click)="goItemPage(news)">\n    <img [src]="news.image" />\n    <ion-row padding-top padding-left [style.font-size]="app.fontSize+\'px\'">{{news.title}}</ion-row>\n    <ion-row padding-bottom padding-left [style.font-size]="(app.fontSize*0.7)+\'px\'">{{app.formatDate(news.published_at)\n      | date:\'dd MMM h:mm\'}}</ion-row>\n  </ion-card>\n\n  <div *ngIf="newsList.length==0 && query.length>0 && !isInternet && errorMessage==null" text-center padding>\n    <ion-spinner name="crescent"></ion-spinner>\n  </div>\n\n  <div *ngIf="errorMessage!=null" text-center>\n    <h3>{{errorMessage}}</h3>\n  </div>\n\n  <div *ngIf="isInternet">\n    <h4 text-center>No internet connection.</h4>\n    <ion-row justify-content-center>\n      <button col-4 ion-button icon-left color="general" (click)="loadNewsList()">\n        <ion-icon name="refresh"></ion-icon>\n        Try again\n      </button>\n      <button ion-button col-4 color="general" (click)="goSavedNews()">\n        Saved News\n      </button>\n    </ion-row>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="loadNewsList($event)">\n    <ion-infinite-scroll-content loadingSpinner="crescent">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom *ngIf="showFloat">\n    <button ion-fab color="general" (click)="scrollToTop()">\n      <ion-icon name="ios-arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_category_category__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_news_news__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_save_save__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_save_save__["a" /* SavePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: ''
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_save_save__["a" /* SavePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, push, alertCtrl) {
        var _this = this;
        this.app = app;
        this.push = push;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initPush();
        });
    }
    MyApp.prototype.initPush = function () {
        var options = {
            android: {
                forceShow: true,
                topics: ['notify']
            },
            ios: {
                alert: 'true',
                badge: true,
                clearBadge: true,
                sound: 'false'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered ID: ', registration.registrationId); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav [root]=\"rootPage\" [class]=\"app.selectedTheme\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_save__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, app, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.nightmode = true;
        this.nightmode = app.selectedTheme === 'dark-theme';
    }
    SettingsPage.prototype.toggleAppTheme = function () {
        if (this.nightmode) {
            this.app.setActiveTheme('dark-theme');
        }
        else {
            this.app.setActiveTheme('light-theme');
        }
    };
    SettingsPage.prototype.changeFont = function (pluse) {
        if (pluse === void 0) { pluse = true; }
        this.app.fontSize = pluse ? this.app.fontSize + 4 : this.app.fontSize - 4;
        this.app.updateSetting();
    };
    SettingsPage.prototype.goSavedNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__save_save__["a" /* SavePage */]);
    };
    SettingsPage.prototype.getUser = function () {
        if (localStorage.getItem('user') == null) {
            return false;
        }
        else {
            return true;
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  </ion-content>'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__save_save__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    // public loggedIn: boolean = false
    function HomePage(navCtrl, api, navParams, network, zone, app) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.app = app;
        this.category = { id: 0, title: '' };
        this.errorMessage = null;
        this.newsList = [];
        this.showFloat = false;
        this.loadMore = true;
        this.loggedIn = false;
        this.scrollToTop = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["throttle"])(this.scrollToTop, 500, { leading: true, trailing: false });
        this.category.title = app.APP_TITLE;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log(localStorage.getItem('status'));
        var item = this.navParams.get('category');
        if (typeof (item) === 'object' && item.id !== undefined) {
            this.changeCategory(item);
        }
        else {
            this.changeCategory(this.category);
        }
    };
    HomePage.prototype.goLogin = function () {
        this.navCtrl.push('RegisterPage');
    };
    HomePage.prototype.loadNewsList = function (infiniteScroll, refresh) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (refresh === void 0) { refresh = false; }
        if (this.network.type !== "none") {
            this.isInternet = false;
            this.errorMessage = null;
            this.app
                .getData('News/' + this.category.id + '?page=' + (refresh ? 0 : this.newsList.length))
                .subscribe(function (data) {
                _this.loadMore = data.news.length >= 8;
                if (refresh)
                    _this.newsList = [];
                if (data.news.length > 0) {
                    _this.newsList = _this.newsList.concat(data.news);
                }
                else if (_this.newsList.length === 0) {
                    _this.errorMessage = 'Sorry, there are no results.';
                }
                if (infiniteScroll != null)
                    infiniteScroll.complete();
            }, function (error) {
                _this.isInternet = true;
                if (infiniteScroll != null)
                    infiniteScroll.complete();
            });
        }
        else {
            this.isInternet = true;
            if (infiniteScroll != null)
                infiniteScroll.complete();
        }
    };
    HomePage.prototype.changeCategory = function (cat) {
        this.category = cat;
        this.loadNewsList(null, true);
    };
    HomePage.prototype.goItemPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */], { news: data });
    };
    HomePage.prototype.getScrollPosition = function () {
        if (this.content.scrollTop != null && this.content.scrollTop > 200) {
            if (this.showFloat === false) {
                this.showFloat = true;
                this.zone.run(function () { });
            }
        }
        else if (this.showFloat) {
            this.showFloat = false;
            this.zone.run(function () { });
        }
    };
    HomePage.prototype.scrollToTop = function () {
        var _this = this;
        if (this.showFloat) {
            this.showFloat = false;
            var wait = this.content.isScrolling ? 150 : 0;
            setTimeout(function () { return _this.content.scrollToTop(500); }, wait);
        }
    };
    HomePage.prototype.goSavedNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__save_save__["a" /* SavePage */]);
    };
    // login(){
    //   this.api.login().subscribe(res=>{
    //       console.log('response', res)
    //       if(res === 'Your Login success'){
    //         localStorage.setItem('status', 'active')
    //         this.isLoggedIn()
    //       }
    //   })
    // }
    HomePage.prototype.isLoggedIn = function () {
        if (localStorage.getItem('status') == 'active') {
            this.loggedIn = true;
            return true;
        }
        else {
            this.loggedIn = true;
            return false;
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('enter');
        this.isLoggedIn();
    };
    HomePage.prototype.logout = function () {
        localStorage.clear();
        this.loggedIn = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{category.title}}</ion-title>\n      \n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="getScrollPosition()">\n\n  <ion-refresher (ionRefresh)="loadNewsList($event, true)">\n      <ion-refresher-content\n              pullingIcon="arrow-dropdown"\n              refreshingSpinner="crescent">\n      </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let news of newsList" class="news" (click)="goItemPage(news)">\n      <img [src]="news.image"/>\n      <ion-row padding-top padding-left [style.font-size]="app.fontSize+\'px\'">{{news.title}}</ion-row>\n      <ion-row padding-bottom padding-left [style.font-size]="(app.fontSize*0.7)+\'px\'">{{app.formatDate(news.published_at) | date:\'dd MMM \'}}</ion-row>\n  </ion-card>\n\n  <div *ngIf="newsList.length==0 && !isInternet && errorMessage==null" text-center padding>\n      <ion-spinner name="crescent"></ion-spinner>\n  </div>\n\n  <div *ngIf="errorMessage!=null" text-center>\n      <h3>{{errorMessage}}</h3>\n  </div>\n\n  <div *ngIf="isInternet">\n      <h4 text-center>Keine Internet Verbindung.</h4>\n      <ion-row justify-content-center>\n          <button col-4 ion-button icon-left color="general" (click)="loadNewsList()">\n              <ion-icon name="refresh"></ion-icon>\n              Erneut versuchen\n          </button>\n      </ion-row>\n  </div>\n\n  <ion-infinite-scroll *ngIf="loadMore" (ionInfinite)="loadNewsList($event)">\n      <ion-infinite-scroll-content loadingSpinner="crescent">\n      </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom *ngIf="showFloat">\n      <button ion-fab color="general" (click)="scrollToTop()"><ion-icon name="ios-arrow-up"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, app, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.news = null;
        this.releated_news = null;
        this.saveIcon = 'ios-bookmark-outline';
        this.news = this.navParams.get('news');
        this.getData();
        this.saveIcon = this.app.savedNews[this.news.id] == null || this.app.savedNews[this.news.id] == undefined || !this.app.savedNews[this.news.id] ? 'ios-bookmark-outline' : 'ios-bookmark';
    }
    NewsPage_1 = NewsPage;
    NewsPage.prototype.getData = function () {
        var _this = this;
        this.app
            .getData('NewsDetail/' + this.news.id)
            .subscribe(function (data) {
            if (data.news != null && data.news != undefined) {
                _this.news.views = data.news.views;
                _this.news.content = data.news.content;
            }
            else if (_this.saveIcon === 'ios-bookmark') {
                _this.app.saveNews(_this.news);
            }
            _this.releated_news = data.releated_news;
        });
    };
    NewsPage.prototype.goItemPage = function (data) {
        this.navCtrl.push(NewsPage_1, { news: data });
    };
    NewsPage.prototype.saveNews = function (news) {
        this.app.saveNews(news);
        this.saveIcon = this.saveIcon === 'ios-bookmark' ? 'ios-bookmark-outline' : 'ios-bookmark';
        this.presentToast(this.saveIcon === 'ios-bookmark' ? 'News saved' : 'News unsaved');
    };
    NewsPage.prototype.presentToast = function (message) {
        if (message === void 0) { message = ''; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NewsPage = NewsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{news.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img [src]="news.image"/>\n    <div padding>\n        <ion-row>\n            <h3 col-11 [style.font-size]="app.fontSize+\'px\'">{{news.title}}</h3>\n          </ion-row>\n        <span>\n          <ion-icon ios="md-time" md="md-time"></ion-icon> {{app.formatDate(news.published_at) | date:\'dd.MM.yyyy\'}}\n          <ion-icon ios="md-eye" md="md-eye" margin-left></ion-icon> {{news.views}}\n        </span>\n        <div class="html" [style.font-size]="app.fontSize+\'px\'" [innerHTML]="news.content"></div>\n    </div>\n\n    <b padding [style.font-size]="app.fontSize+\'px\'">Ähnliche News</b>\n    \n    <ion-card *ngFor="let item of releated_news" class="news" (click)="goItemPage(item)">\n        <img [src]="item.image"/>\n        <ion-row padding-top padding-left [style.font-size]="app.fontSize+\'px\'">{{item.title}}</ion-row>\n        <ion-row padding-bottom padding-left [style.font-size]="(app.fontSize*0.7)+\'px\'">{{app.formatDate(item.published_at) | date:\'dd MMM\'}}</ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
    var NewsPage_1;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SavePage = /** @class */ (function () {
    function SavePage(navCtrl, navParams, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.items = [];
        this.app.getSavedNews();
        this.app.savedNews.forEach(function (element) {
            if (element != null && element != undefined) {
                _this.items.push(element);
            }
        });
    }
    SavePage.prototype.goItemPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */], { news: data });
    };
    SavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-save',template:/*ion-inline-start:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/save/save.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Saved News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 *ngIf="items.length===0" text-center>No saved news</h3>\n  <ion-card *ngFor="let item of items" class="news" (click)="goItemPage(item)">\n      <img [src]="item.image"/>\n      <ion-row padding-top padding-left [style.font-size]="app.fontSize+\'px\'">{{item.title}}</ion-row>\n      <ion-row padding-bottom padding-left [style.font-size]="(app.fontSize*0.7)+\'px\'">{{app.formatDate(item.published_at) | date:\'dd MMM h:mm\'}}</ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/shabeer/projects/testrix/freelancing/ionic3/ionic-app/src/pages/save/save.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], SavePage);
    return SavePage;
}());

//# sourceMappingURL=save.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map