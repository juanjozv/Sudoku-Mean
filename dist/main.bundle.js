webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n-->\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<div ALIGN=\"center\">\r\n    <h4>SUDOKU</h4>\r\n</div>\r\n<hr>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row content\">\r\n        <div class=\"col-sm-3 sidenav\">\r\n            <app-buttons-panel></app-buttons-panel>\r\n        </div>\r\n        <div class=\"col-sm-4\" style=\"margin-left:5%; margin-right: 100px;\">\r\n            <app-sudoku></app-sudoku>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <app-time></app-time>\r\n            <app-values></app-values>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sudoku_sudoku_component__ = __webpack_require__("../../../../../src/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_time_time_component__ = __webpack_require__("../../../../../src/app/components/time/time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_buttons_panel_buttons_panel_component__ = __webpack_require__("../../../../../src/app/components/buttons-panel/buttons-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_values_values_component__ = __webpack_require__("../../../../../src/app/components/values/values.component.ts");
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_sudoku_sudoku_component__["a" /* SudokuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_time_time_component__["a" /* TimeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_buttons_panel_buttons_panel_component__["a" /* ButtonsPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_values_values_component__["a" /* ValuesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/buttons-panel/buttons-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buttons-panel/buttons-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n   \r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n\r\n-->\r\n\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" ALIGN=\"center\">\r\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Sudoku Options\r\n    </div>\r\n    <div class=\"panel-body \">\r\n        <div class=\"dropup btn btn-block\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\" data-toggle=\"dropdown\">\r\n                <span class=\"glyphicon glyphicon-play\"></span> New Sudoku\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n                <li class=\"disabled\">\r\n\r\n                    <a>Difficulty</a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a (click)=\"loadByLevelSudoku('easy')\"><i  class=\"fa fa-heart\" aria-hidden=\"true\"></i> Easy</a>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"loadByLevelSudoku('normal')\"><i  class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i> Medium</a>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"loadByLevelSudoku('hard')\"><i  class=\"fa fa-ambulance\" aria-hidden=\"true\"></i> God</a>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"generateNewSudoku()\"><i class=\"fa fa-random\" aria-hidden=\"true\"></i> Random</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"btn btn-block\">\r\n            <button (click)=\"reload()\" type=\"button\" class=\"btn btn-primary btn-block\">\r\n                <span class=\"glyphicon glyphicon-repeat\"></span> Restart</button>\r\n        </div>\r\n        <div class=\"btn btn-block\">\r\n            <button (click)=\"checkSudoku()\" type=\"button\" class=\"btn btn-primary btn-block\">\r\n                <span class=\"glyphicon glyphicon-check\"></span> Check Solution</button>\r\n        </div>\r\n        <div class=\"btn btn-block\">\r\n            <button (click)=\"solveSudoku()\" type=\"button\" class=\"btn btn-primary btn-block\">\r\n                <span class=\"glyphicon glyphicon-flash\"></span> Solve</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" ALIGN=\"center\">\r\n        <i class=\"\tglyphicon glyphicon-user\"></i> User Options\r\n    </div>\r\n    <div class=\"panel-body \">\r\n        <div class=\"btn btn-block\">\r\n            <button type=\"button\" (click)=\"loadSudokus()\" class=\"btn btn-primary btn-block\">\r\n                <span class=\"glyphicon glyphicon-open\"></span> Load Game</button>\r\n        </div>\r\n        <div class=\"btn btn-block\">\r\n            <button type=\"button\" (click)=\"saveGame()\" class=\"btn btn-primary btn-block\">\r\n            <span class=\"glyphicon glyphicon-save\"></span> Save Game</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"checkModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#loginModal\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n            <h2>Sudoku Checked!</h2>\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br>\r\n            <br>\r\n            <p id=\"msgCheck\" style=\"font-family: 'Bemis'; font-size: 30px; color:black\"></p>\r\n            <br>\r\n            <br>\r\n            <div class=\"btn-group btn-group-lg\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\r\n            </div>\r\n            <br>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"loadModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#loadModal\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n            <h2>Choose your game</h2>\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br>\r\n            <br>\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Games</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>Difficulty</th>\r\n                        <th>Date</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody id=\"userGames\">\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"saveModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#saveModal\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br>\r\n            <h2 text-aling=\"center\"> Game Saved! </h2>\r\n            <br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"warningLogin\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#warningLogin\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br>\r\n            <h2 text-aling=\"center\"> You must be logged in ! </h2>\r\n            <br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"warningModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#warningModal\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br>\r\n            <h2 text-aling=\"center\" id='warningText'></h2>\r\n            <br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/buttons-panel/buttons-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__ = __webpack_require__("../../../../../src/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__ = __webpack_require__("../../../../../src/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_time_component__ = __webpack_require__("../../../../../src/app/components/time/time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_assets_javascripts_userOptionsView__ = __webpack_require__("../../../../../src/assets/javascripts/userOptionsView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_assets_javascripts_userOptionsView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_assets_javascripts_userOptionsView__);
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// In case of adding a new component in SudokuComponent, it should be added here too.
var ButtonsPanelComponent = (function () {
    function ButtonsPanelComponent(_sudokuService, _sudokuComponent, _timeComponent) {
        this._sudokuService = _sudokuService;
        this._sudokuComponent = _sudokuComponent;
        this._timeComponent = _timeComponent;
        this.newMatrix = Array.from({ length: 9 }, function () { return new Array(9); });
        this._userOptionsView = new __WEBPACK_IMPORTED_MODULE_5__src_assets_javascripts_userOptionsView__();
    }
    ButtonsPanelComponent.prototype.ngOnInit = function () { };
    ButtonsPanelComponent.prototype.generateNewSudoku = function () {
        this._sudokuComponent.createNewSudoku();
        this._timeComponent.stopTimer();
        this._timeComponent.startTimer();
        this._userOptionsView.setStorageDifficulty('random');
        this._userOptionsView.setStorageSudokuId('na', 'true');
    };
    ButtonsPanelComponent.prototype.checkSudoku = function () {
        if (this._sudokuComponent.hasBegun())
            this._sudokuComponent.checkSudoku();
        else
            this._userOptionsView.warning('You must create a new sudoku!');
    };
    ButtonsPanelComponent.prototype.reload = function () {
        if (this._sudokuComponent.hasBegun()) {
            this._sudokuComponent.reload();
            this._timeComponent.stopTimer();
            this._timeComponent.startTimer();
        }
    };
    ButtonsPanelComponent.prototype.solveSudoku = function () {
        if (this._sudokuComponent.hasBegun()) {
            this._sudokuComponent.solveSudoku();
            this._timeComponent.showLastTime();
        }
        else
            this._userOptionsView.warning('You must create a new sudoku!');
    };
    ButtonsPanelComponent.prototype.loadByLevelSudoku = function (d) {
        this._userOptionsView.setStorageDifficulty(d);
        this._sudokuComponent.loadSudokuByDifficulty(d);
        this._timeComponent.stopTimer();
        this._timeComponent.startTimer();
        this._userOptionsView.setStorageSudokuId('na', 'true');
    };
    //------------------------------- User Options ----------
    ButtonsPanelComponent.prototype.loadSudokus = function () {
        var _this = this;
        var user = this._userOptionsView.getUser();
        if (user != "empty") {
            this._sudokuService.loadUserSudokus(user).subscribe(function (res) { return _this.showSudokus(res); }, function (err) { return _this.showSudokus(_this._userOptionsView.getStorageClientByUser(user)); });
        }
    };
    // Load Saved Games
    ButtonsPanelComponent.prototype.repaintLoadMatrix = function (res) {
        this._sudokuComponent.paint(res);
    };
    ButtonsPanelComponent.prototype.loadSavedGameInMatrix = function (id) {
        var _this = this;
        this._sudokuService.loadSudoku(id).subscribe(function (res) { return _this.repaintLoadMatrix(res); }, function (err) { return _this.repaintLoadMatrix(_this._userOptionsView.getSudokuIdStorage(id)); });
    };
    ButtonsPanelComponent.prototype.showSudokus = function (sudokusList) {
        var row;
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#userGames').html('');
        for (var _i = 0, sudokusList_1 = sudokusList; _i < sudokusList_1.length; _i++) {
            var sudoku = sudokusList_1[_i];
            row = this._userOptionsView.createRow(sudoku);
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#userGames').append(row);
            this.onclickEvent(sudoku);
        }
        this._userOptionsView.showModal();
    };
    ButtonsPanelComponent.prototype.onclickEvent = function (sudo) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#' + sudo._id).click(function () {
            _this.loadSavedGameInMatrix(sudo._id);
            _this._timeComponent.stopTimer();
            _this._timeComponent.startTimer();
            _this._userOptionsView.setStorageSudokuId(sudo._id, 'false');
        });
    };
    ButtonsPanelComponent.prototype.showSaveModal = function () {
        this._userOptionsView.showSaveGameModal();
    };
    ButtonsPanelComponent.prototype.saveGame = function () {
        var _this = this;
        var gameUser = this._userOptionsView.getUser();
        var gameDifficulty = this._userOptionsView.getStorageDifficulty();
        var gameDate = this._userOptionsView.getCurrentDate();
        var matrixAux = this._sudokuComponent._sudokuView.getPlayableSudoku();
        var gameId = this._userOptionsView.getStorageSudokuId();
        var isNewGame = this._userOptionsView.getIsNewGame(); //returns true or false
        var saveObject = { _id: gameId, user: gameUser, difficulty: gameDifficulty, lastPlayed: gameDate, playableSudoku: matrixAux };
        if (gameUser != "empty") {
            if (this._sudokuComponent.hasBegun()) {
                this._sudokuService.saveSudoku(saveObject, isNewGame).subscribe(function (res) {
                    _this.showSaveModal();
                    _this._userOptionsView.setStorageSudokuId(res.sudokuId, 'false');
                    saveObject._id = res.sudokuId;
                    _this.saveGameClient(saveObject);
                }, function (err) {
                    if (saveObject._id == 'na')
                        saveObject._id = window.localStorage.length;
                    _this.saveGameClient(saveObject);
                });
            }
            else
                this._userOptionsView.warning('You must create a new sudoku!');
        }
    };
    ButtonsPanelComponent.prototype.saveGameClient = function (obj) {
        this._userOptionsView.storageClient(obj);
        this._userOptionsView.showSaveGameModal();
    };
    return ButtonsPanelComponent;
}());
ButtonsPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-buttons-panel',
        template: __webpack_require__("../../../../../src/app/components/buttons-panel/buttons-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/buttons-panel/buttons-panel.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */], __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */], __WEBPACK_IMPORTED_MODULE_3__time_time_component__["a" /* TimeComponent */], __WEBPACK_IMPORTED_MODULE_5__src_assets_javascripts_userOptionsView__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__time_time_component__["a" /* TimeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__time_time_component__["a" /* TimeComponent */]) === "function" && _c || Object])
], ButtonsPanelComponent);

var _a, _b, _c;
//# sourceMappingURL=buttons-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n-->\r\n<nav class=\"navbar navbar-inverse\" style=\"padding:0.5%\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\">PROGRAMMING PARADIGMS</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-center\">\r\n            <li>\r\n                <a id=\"showUsername\"></a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a data-target=\"#loginModal\" data-toggle=\"modal\" id=\"login\"><span class=\"glyphicon glyphicon-user\"></span> LOGIN</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<div id=\"loginModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <span data-target=\"#loginModal\" data-toggle=\"modal\" id=\"close\">&times;</span>\r\n            <h2>Welcome Stranger!</h2>\r\n        </div>\r\n        <div class=\"modal-body\" ALIGN=\"center\">\r\n            <br><br>\r\n            <img src=\"../../../assets/images/user.png\" style=\"width:135px;height:135px;\">\r\n            <br><br>\r\n            <div class=\"input-group\" id=\"loginInputs\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Enter your username\">\r\n            </div>\r\n            <br>\r\n            <div class=\"btn-group btn-group-lg\">\r\n                <button (click)=\"saveUsername()\" type=\"button\" class=\"btn btn-primary\" id=\"btnLogin\" data-target=\"#loginModal\" data-toggle=\"modal\">LOGIN</button>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_navbarView__ = __webpack_require__("../../../../../src/assets/javascripts/navbarView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_navbarView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_navbarView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__ = __webpack_require__("../../../../../src/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__ = __webpack_require__("../../../../../src/app/services/sudoku.service.ts");
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(_sudokuComponent) {
        this._sudokuComponent = _sudokuComponent;
        this._navbarView = new __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_navbarView__();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.createObject = function (i) {
        return { x: Math.floor(i / 9), y: i % 9, value: null, isClue: false };
    };
    NavbarComponent.prototype.repaintBlancMatrix = function () {
        var _this = this;
        this._sudokuComponent._sudokuView.paint(Array.from({ length: 81 }, function (v, i) { return _this.createObject(i); }), this._sudokuComponent.Matrix);
    };
    NavbarComponent.prototype.saveUsername = function () {
        this._navbarView.setUsername();
        this.repaintBlancMatrix();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_navbarView__, __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */], __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sudoku_sudoku_component__["a" /* SudokuComponent */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sudoku/sudoku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n */\r\n\r\na:link {\r\n    color: #660033;\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    color: #660033;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: #c60;\r\n    text-decoration: underline;\r\n}\r\n\r\n.feldx {\r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    border: black solid 4px;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    font-size: 20px;\r\n}\r\n\r\n.nx,\r\n.lx,\r\n.ox,\r\n.lox {\r\n    border: black solid 1px;\r\n    width: 55px;\r\n    height: 55px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n\r\n.lx,\r\n.lox {\r\n    border-left: black solid 3px;\r\n}\r\n\r\n.ox,\r\n.lox {\r\n    border-top: black solid 3px;\r\n}\r\n\r\n.ziffer,\r\n.hint {\r\n    color: green;\r\n    background-color: white;\r\n    border: 0px solid black;\r\n    width: 55px;\r\n    height: 55px;\r\n    font-weight: normal;\r\n    font-size: 22px;\r\n    font-family: Verdana, Helvetica, Arial, sans-serif;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.hint {\r\n    color: black;\r\n}\r\n\r\n.valTd {\r\n    border: black solid 1px;\r\n    width: 40px;\r\n    height: 40px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n.valHint {\r\n    color: green;\r\n    background-color: white;\r\n    border: 0px solid black;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-weight: normal;\r\n    font-size: 22px;\r\n    font-family: Verdana, Helvetica, Arial, sans-serif;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n.valHint {\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sudoku/sudoku.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n-->\r\n\r\n<div class=\"container\">\r\n    <table class=\"feldx\">\r\n        <tbody id=\"sudoku\">\r\n\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sudoku/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_sudokuView__ = __webpack_require__("../../../../../src/assets/javascripts/sudokuView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_sudokuView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_sudokuView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__ = __webpack_require__("../../../../../src/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_assets_javascripts_userOptionsView_js__ = __webpack_require__("../../../../../src/assets/javascripts/userOptionsView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_assets_javascripts_userOptionsView_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_assets_javascripts_userOptionsView_js__);
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SudokuComponent = (function () {
    function SudokuComponent(_sudokuService) {
        this._sudokuService = _sudokuService;
        this._sudokuView = new __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_sudokuView__();
        this._matrix = Array.from({ length: 9 }, function () { return new Array(9).fill(' '); });
    }
    SudokuComponent.prototype.ngOnInit = function () {
        this._sudokuView.create();
    };
    Object.defineProperty(SudokuComponent.prototype, "Matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: true,
        configurable: true
    });
    // Service methods
    SudokuComponent.prototype.createNewSudoku = function () {
        var _this = this;
        this._sudokuService.getNewSudoku('default', 'random', '01-01-2000').subscribe(function (res) { return _this.paint(res); }, function (err) { return _this.createNewSudokuClient(); });
    };
    SudokuComponent.prototype.loadSudokuByDifficulty = function (d) {
        var _this = this;
        this._sudokuService.loadByLevelSudoku(d).subscribe(function (res) { return _this.paint(res); }, function (err) { return _this.createNewSudokuClient(d); });
    };
    // Responses of server when you request, they run only with server up 
    SudokuComponent.prototype.checkSudoku = function () {
        var _this = this;
        var matrixAux = this._sudokuView.getMatrix();
        this._sudokuService.checkSudoku(matrixAux).subscribe(function (res) { return _this.checkedNotice(res); }, function (err) { return _this.checkSudokuClient(); });
    };
    SudokuComponent.prototype.solveSudoku = function () {
        var _this = this;
        this._sudokuService.solveSudoku(this._matrix).subscribe(function (res) { return _this.reload(res); }, function (err) { return _this.solveSudokuClient(); });
    };
    SudokuComponent.prototype.paint = function (res_) {
        this._sudokuView.paint(res_.playableSudoku, this._matrix);
    };
    SudokuComponent.prototype.checkedNotice = function (_res) {
        this._sudokuView.checkModal(_res.text);
    };
    // Client algorithms, they run only with server down
    SudokuComponent.prototype.checkSudokuClient = function () {
        this._sudokuView.checkModal(this._sudokuView.checkSudoku());
        console.log('Sudoku has checked locally');
    };
    SudokuComponent.prototype.createNewSudokuClient = function (n) {
        if (n === void 0) { n = 'random'; }
        var userOptions = new __WEBPACK_IMPORTED_MODULE_3__src_assets_javascripts_userOptionsView_js__();
        userOptions.setStorageDifficulty(n);
        userOptions.setStorageSudokuId('na', 'true');
        this._sudokuView.generateSudoku(n, this._matrix);
        console.log('Sudoku has created locally');
    };
    SudokuComponent.prototype.solveSudokuClient = function () {
        this._sudokuView.solveSudoku(this._matrix);
        console.log('Sudoku has solved locally');
    };
    //both (server up and down)
    SudokuComponent.prototype.reload = function (sudoku) {
        if (sudoku === void 0) { sudoku = this._matrix; }
        this._sudokuView.reload(sudoku);
    };
    SudokuComponent.prototype.hasBegun = function () {
        return this._sudokuView.hasBegun();
    };
    return SudokuComponent;
}());
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sudoku',
        template: __webpack_require__("../../../../../src/app/components/sudoku/sudoku.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sudoku/sudoku.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */], __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_sudokuView__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */]) === "function" && _a || Object])
], SudokuComponent);

var _a;
//# sourceMappingURL=sudoku.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n * Sudoku Grupo 9  Horario: 1 pm\r\n * @author Juan José Zaldívar Vargas\r\n * @author Oscar Salazar Lizano\r\n * @author Manfred Zúñiga Vargas\r\n * @author Leonel Godínez Sánchez\r\n-->\r\n\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" ALIGN=\"center\">\r\n        <i class=\"glyphicon glyphicon-hourglass\"></i> Time\r\n    </div>\r\n    <div class=\"panel-body\" ALIGN=\"center\">\r\n        <label id=\"hours\">00</label> hours : <label id=\"minutes\">00</label> min : <label id=\"seconds\">00</label> seg : <label id=\"milis\">00</label> milis\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_timerView__ = __webpack_require__("../../../../../src/assets/javascripts/timerView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_timerView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_timerView__);
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeComponent = (function () {
    function TimeComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._myTimer = new __WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_timerView__();
    }
    TimeComponent.prototype.ngOnInit = function () { };
    TimeComponent.prototype.startTimer = function () {
        this._myTimer.startTimer();
    };
    TimeComponent.prototype.stopTimer = function () {
        this._myTimer.stopTimer();
    };
    TimeComponent.prototype.showLastTime = function () {
        this._myTimer.showLastTimer();
    };
    return TimeComponent;
}());
TimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-time',
        template: __webpack_require__("../../../../../src/app/components/time/time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/time/time.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__src_assets_javascripts_timerView__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], TimeComponent);

var _a;
//# sourceMappingURL=time.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/values/values.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/values/values.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" ALIGN=\"center\">\r\n        <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i> Possible Values\r\n    </div>\r\n    <div class=\"panel-body\" ALIGN=\"center\">\r\n        <table id=\"pValues\">\r\n          \r\n        </table>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/values/values.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValuesComponent = (function () {
    function ValuesComponent() {
    }
    ValuesComponent.prototype.ngOnInit = function () {
    };
    return ValuesComponent;
}());
ValuesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-values',
        template: __webpack_require__("../../../../../src/app/components/values/values.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/values/values.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ValuesComponent);

//# sourceMappingURL=values.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SudokuService = (function () {
    function SudokuService(_http) {
        this._http = _http;
    }
    SudokuService.prototype.loadByLevelSudoku = function (d) {
        var _url = './api/newSudokuDifficulty/' + d;
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SudokuService.prototype.getNewSudoku = function (username, difficulty, lastPlayed) {
        return this._http.get('./api/newSudoku', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': '*/*' }) })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SudokuService.prototype.checkSudoku = function (matrix) {
        var _url = './api/checkSudoku/' + JSON.stringify(matrix);
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SudokuService.prototype.solveSudoku = function (matrix) {
        var _url = './api/solveSudoku/' + JSON.stringify(matrix);
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SudokuService.prototype.loadUserSudokus = function (user) {
        var _url = './api/sudokus/' + user;
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SudokuService.prototype.loadSudoku = function (id) {
        var _url = './api/sudoku/' + id;
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SudokuService.prototype.saveSudoku = function (saveObject, isNewGame) {
        var _url = './api/save';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return (isNewGame) ? this._http.post(_url, JSON.stringify(saveObject), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError) :
            this._http.put(_url, JSON.stringify(saveObject), options)
                .map(function (response) { return response.json(); });
    };
    SudokuService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.text() || 'Server error');
    };
    return SudokuService;
}());
SudokuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SudokuService);

var _a;
//# sourceMappingURL=sudoku.service.js.map

/***/ }),

/***/ "../../../../../src/assets/javascripts/navbarView.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

class NavbarView {
    constructor() {}
    setUsername() {
        let usernameTextField = $('#username').val();
        if (usernameTextField != '') $('#showUsername').html(usernameTextField);
        window.sessionStorage.setItem('_id', 'na');
        window.sessionStorage.setItem('newGame', 'true');
    }
}

module.exports = NavbarView

/***/ }),

/***/ "../../../../../src/assets/javascripts/random.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */


class Random {
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}

module.exports = { Random };

/***/ }),

/***/ "../../../../../src/assets/javascripts/sudoku.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

function* sudokuIterator(start = 0, next = x => x + 1, stop = NEVER) {
    for (let i = start; !stop(i);) {
        yield i;
        i = next(i);
    }
}

class Sudoku {
    constructor(obj) {
            this.table = obj.table;
            this.rows = obj.rows;
            this.columns = obj.columns;
            this.sections = obj.sections;
            [this.start, this.delta, this.stop] = [0, i => i + 1, i => i == 9];
        }
        [Symbol.iterator]() {
            this.iter = sudokuIterator(this.start, this.delta, this.stop);
            return this;
        }
    next() {
        return this.iter.next();
    }
    pushNewValue(i, j, number) {
        this.table[i][j] = number;
        this.rows[i].push(number);
        this.columns[j].push(number);
        this.sections[Math.floor(i / 3)][Math.floor(j / 3)].push(number);
    }
    popLastValueInserted(i, j, number) {
        this.table[i][j] = ' ';
        this.rows[i].pop();
        this.columns[j].pop();
        this.sections[Math.floor(i / 3)][Math.floor(j / 3)].pop();
    }
    hasLegalValues(array) {
        return (new Set(array)).size === array.length; // se verifica si hay numeros repetidos en un array cualquiera
    }
    isValueRepeated(position) {
        // se verifica si hay un valor repetido en la fila, columna o cuadrícula en la posicion "position"
        return (!this.hasLegalValues(this.rows[position]) || !this.hasLegalValues(this.columns[position]) ||
            !this.hasLegalValues(this.sections[Math.floor(position / 3)][position % 3]))
    }
    isSudoku() {
        //Se recorren todas las filas, columnas y cuadriculas del sudoku para verificar si algun valor se repite,
        //si se repite no es un sudoku
        for (let i of this) {
            if (this.isValueRepeated(i)) return false;
        }
        return true;
    }


}

module.exports = { Sudoku };

/***/ }),

/***/ "../../../../../src/assets/javascripts/sudokuGen.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */


const numbers = Array.from({ length: 9 }, (v, i) => i + 1);
const coordinates = [];
const { Random } = __webpack_require__("../../../../../src/assets/javascripts/random.js");
const random = new Random();

// este metodo lo que hace es un yield del primer numero con las coordenadas con las que empieza el patron
function* initialSudokuNumberGenerator(start = 0, next = x => x + 3, stop = x => x == 9, possibleValues) {
    // se genera un random de 0 a possibleValues.length de modo que se elija una posicion cualquiera
    //del array y así elegir un número desocupado un numero desocupado
    let pos = random.rand(0, possibleValues.length),
        number = possibleValues[pos],
        row = 0,
        column = 0,
        cell;
    // estructura que va a guardar un array con las coordenadas del primer numero ingresado
    coordinates.push([]);
    for (let i = start; !stop(i);) {
        for (let j = start; !stop(j);) {
            cell = { row: i + row++, col: j + column, num: number }; // así se ingresa el primer numero en las diagonales que les expliqué
            coordinates[0].push(cell); //guarda las coordenadas en el array de coordenadas
            yield cell;
            j = next(j);
        }
        row = 0;
        column++;
        i = next(i);
    }
    possibleValues.splice(pos, 1); // se elimina el numero ingresado para que no se vuelva a repetir
    return { done: true }
}

function* sudokuGenerator(start = 0, next = x => x + 1, stoprow = i => i == 8, stopcol = j => j == 9) {
    let row, col, pos, number, lastNumberCoordinates, cell, possibleValues = Array.from({ length: 9 }, (v, i) => i + 1);
    yield* initialSudokuNumberGenerator(0, x => x + 3, x => x == 9, possibleValues); // se hace yield del primer paso del patron
    for (let i = start; !stoprow(i);) { // i < 8 debido a que ya se ingresó un número de los 9 posibles en la matriz
        pos = random.rand(0, possibleValues.length), // lo mismo que el anterior, se elije una posicion random y su respectivo numero
            number = possibleValues[pos],
            lastNumberCoordinates = coordinates.pop(), // se le hace pop a el array de cordenadas para así tener todas las coordenadas del numero ingresado anteriormente

            coordinates.push([]), // se ingresa un array que tendrá las coordenadas del numero ingresado actualmente
            possibleValues.splice(pos, 1); // se elimina el numero ingresado para que no se repita

        for (let j = start; !stopcol(j);) {
            if ((j + 1) % 3 == 0) { // si la cuadricula de referencia a la actual está debajo de la que se está llenando actualmente

                // si es diferente de 9 es porque no es la última cuadrícula, entonces solo se tomarán
                //de referencia las coordenadas de la cuadrícula de abajo, pero si es 9 se tomarán de referencia
                // las coordenadas de la primer cuadrícula de la matriz, aquí es cuando se termina de colocar
                //el numero actual en todas las cuadriculas de la matriz
                ((j + 1) != 9) ? row = lastNumberCoordinates[j + 1].row - 3: row = lastNumberCoordinates[0].row + 6;
                ((j + 1) != 9) ? col = lastNumberCoordinates[j + 1].col + 6: col = lastNumberCoordinates[0].col + 6;
            }
            // si la cuadrícula de referencia está a la derecha de la actual
            else {
                row = lastNumberCoordinates[j + 1].row;
                col = lastNumberCoordinates[j + 1].col - 3;
            }
            // numero y coordenadas en la respectiva casilla
            cell = { row: row, col: col, num: number };
            yield cell;
            // se ingresa en las coordenadas todas las referencias del numero ingresado actualmente
            coordinates[0].push(cell);
            j = next(j);
        }
        // se vuelve a repetir el ciclo hasta que se agoten los numeros
        i = next(i);
    }
    coordinates.pop();
    return { done: true }
}



class SudokuGen {
    constructor(n) {
            [this.start, this.delta, this.stopRow, this.stopCol] = [0, x => x + 1, i => i == 8, j => j == 9];
        }
        [Symbol.iterator]() {
            this.iter = sudokuGenerator(this.start, this.delta, this.stopRow, this.stopCol);
            return this;
        }
    next() {
        return this.iter.next();
    }
    createSudokuStructure() {
        return {
            table: Array.from({ length: 9 }, v => new Array(9).fill(' ')),
            rows: Array.from({ length: 9 }, v => []),
            columns: Array.from({ length: 9 }, v => []),
            sections: Array.from({ length: 3 }, (v, i) => Array.from({ length: 3 }, (v, i) => []))
        }
    }
    getSudokuStructure(matrix) {
        let obj = this.createSudokuStructure()
        matrix.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value != " ") {
                    obj.table[i][j] = value;
                    obj.rows[i].push(value);
                    obj.columns[j].push(value);
                    obj.sections[Math.floor(i / 3)][Math.floor(j / 3)].push(value);
                }
            })
        });
        return obj
    }
}

module.exports = {
    SudokuGen
};

/***/ }),

/***/ "../../../../../src/assets/javascripts/sudokuSolver.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */


class SudokuSolver {

    constructor() {

    }

    getNextFreeSquare(row, sudoku) {
        let i = row;
        while (i < 9) {
            if (sudoku.table[i].indexOf(' ') != -1) // se verifica que haya un espacio vacío en la fila correspondiente
                return { row: i, column: sudoku.table[i].indexOf(' ') }; //si lo hay se retorna un objeto con la fila y
            //la columna que corresponden al espacio vacío más cercano
            i++; // se baja a la siguiente fila si no hay espacios desocupados
        }
        return null // se retorna null cuando la matriz ya esté llena
    }
    getPossibleValues(row, column, sudoku) {
        // se unen todos los valores de una fila, columna y cuadricula correspondientes
        var busyValues = sudoku.rows[row].concat(sudoku.columns[column])
            .concat(sudoku.sections[Math.floor(row / 3)][Math.floor(column / 3)]);
        // se le aplica un filter a un array con numeros de 1 a 9,
        // de modo que si el valor actual no se encuentra en ninguno de los arrays
        //anteriores, aplicarle filter y utilizarlo
        return Array.from({ length: 9 }, (v, i) => i + 1)
            .filter(n => busyValues.indexOf(n) == -1);
    }

    solveSudoku(row, sudoku) {
        var auxRow, auxColumn, possibleValues,
            // método que busca la siguiente celda desocupada de la matriz,
            // y devuelve un object con dos properties: row y column
            nextFreeSquare = this.getNextFreeSquare(row, sudoku);

        // si existe una siguiente celda para llenar
        if (nextFreeSquare) {
            auxRow = nextFreeSquare.row;
            auxColumn = nextFreeSquare.column;

            //método que retorna un array con los posibles valores de una celda
            possibleValues = this.getPossibleValues(auxRow, auxColumn, sudoku);

            //se empiezan a probar los posibles valores a colocar
            for (let number of possibleValues) {
                // se ingresa el valor en la fila, columna y cuadrícula correspondientes
                sudoku.pushNewValue(auxRow, auxColumn, number);
                // hace un llamado recursivo, de modo que se repita el mismo proceso, pero en la
                //siguiente celda de la fila y con posibles valores distintos
                if (this.solveSudoku(auxRow, sudoku)) {
                    return true;

                } else {
                    // en caso de que el array de los posibles valores esté vacío o bien, se termine
                    // de recorrer, se entra en el else y se elimina el valor ingresado anteriormente
                    sudoku.popLastValueInserted(auxRow, auxColumn, number);
                }
            }
            //retorna false en caso de que no se haya podido ingresar un nuevo valor, se sale de la llamada
            //recursiva actual y pasa al else de arriba (aqui empieza el backtrack)
            return false;
        }
        //se retorna true cuando ya no haya una siguiente celda de la matriz que llenar
        return true;
    }
    hasSolution(sudoku) {
        if (sudoku.isSudoku()) {
            return this.solveSudoku(0, sudoku)
        }
        return false
    }
    getSudokuSolution(sudoku) {
        this.solveSudoku(0, sudoku)
        return sudoku.table;
    }


}

module.exports = {
    SudokuSolver
}

/***/ }),

/***/ "../../../../../src/assets/javascripts/sudokuView.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

const NEVER = x => false;
const { Sudoku } = __webpack_require__("../../../../../src/assets/javascripts/sudoku.js");
const { SudokuSolver } = __webpack_require__("../../../../../src/assets/javascripts/sudokuSolver.js");
const { SudokuGen } = __webpack_require__("../../../../../src/assets/javascripts/sudokuGen.js");
const { Random } = __webpack_require__("../../../../../src/assets/javascripts/random.js");
const Solver = new SudokuSolver();
const sudokuGen = new SudokuGen(9);
const random = new Random();
//const view = getSudokuView()

let createFill = (td, tr, id, val = null, fieldClass = 'hint') => {
    return $('<input type="int"/>').attr({
            id: id,
            class: fieldClass,
            maxlength: "1",
            size: "1",
            readonly: "",
            value: val,
            disabled: true
        })
        .appendTo($('<td />')
            .attr({
                class: td
            })
            .appendTo(tr));
}

function* sudokuViewGenerator(start = 0, next = x => x + 1, stop = NEVER) {
    let tr = $('<tr />'),
        tdBorderClass = 'lox',
        tdNormalClass = 'ox',
        td,
        input,
        row = 0;
    for (let column = start; !stop(column);) {
        if (column % 9 == 0 && column != 0) {
            $('#sudoku').append(tr);
            tr = $('<tr />');
            row++;
            (row % 3 == 0) ? tdBorderClass = 'lox': tdBorderClass = 'lx';
            (row % 3 == 0) ? tdNormalClass = 'ox': tdNormalClass = 'nx';
        }
        column % 3 == 0 ? td = tdBorderClass : td = tdNormalClass;
        input = createFill(td, tr, column)
        yield input;
        column = next(column);
    }
    return { done: true }
}

class SudokuView {
    constructor() {
            [this.start, this.delta, this.stop] = [0, x => x + 1, x => x > 81];
        }
        [Symbol.iterator]() {
            this.iter = sudokuViewGenerator(this.start, this.delta, this.stop);
            return this;
        }
    next() {
        return this.iter.next();
    }
    create() {
            for (let i of this);
        }
        // use for reload the sudoku table view with the original sudoku
    reload(sudoku) {
        $('#pValues tr').remove()
            sudoku.forEach((row, i) =>
                row.forEach((num, j) => {
                    $('#' + (j + 9 * i).toString()).val(num)
                }));
        }
        // use for load an existing in view and component
    paint(playableSudoku, sudoku) {
        $('#pValues tr').remove()
        playableSudoku.forEach((elem, i) => {
            //clean position of original sudoku
            sudoku[elem.x][elem.y] = elem.isClue ? elem.value : ' '

            // clean textfields
            elem.isClue || elem.value == null ? $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', true)
                .val(elem.value) : $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', false)
                    .val(elem.value == 0 ? ' ' : elem.value)  
                    .bind('focus', () => {
                        this.getPossibleValues(elem.x, elem.y)
                    })
        });
    }
    getMatrix() {
        return Array.from({ length: 9 }, (row, i) =>
            Array.from({ length: 9 }, (value, j) =>
                ($('#' + (j + 9 * i).toString()).val() != " ") ? parseInt($('#' + (j + 9 * i).toString()).val()) :
                $('#' + (j + 9 * i).toString()).val()));
    }
    checkModal(_res) {
        $('#msgCheck').text(_res);
        $('#checkModal').modal();
    }
    checkSudoku() {
        let obj = sudokuGen.getSudokuStructure(this.getMatrix());
        let sudo = new Sudoku(obj);
        return Solver.hasSolution(sudo) ? 'Sudoku has solution!!' : 'Sudoku has no solution!!';
    }
    cluesForLevel(d) {
        if (d == 'easy') return 40
        if (d == 'normal') return 26
        if (d == 'hard') return 17
        else return random.rand(17, 81);
    }
    generateSudoku(d = 'random', sudoku) {
        $('#pValues tr').remove()
        let id = "",
            clue = 0,
            cluesCount = 0,
            maxClues = this.cluesForLevel(d);
        for (let actualValue of sudokuGen) {
            clue = random.rand(1, 5);
            id = '#' + (actualValue.col + 9 * actualValue.row).toString();

            ((clue == 3 || clue == 1) && cluesCount < maxClues) ?
            $(id).val(actualValue.num)
                .prop('disabled', true) && cluesCount++:
                $(id).val(' ')
                .prop('disabled', false);

            sudoku[actualValue.row][actualValue.col] = ((clue == 3 || clue == 1) && cluesCount < maxClues) ? actualValue.num : ' ';

        }
    }

    solveSudoku(sudoku) {
        let obj = sudokuGen.getSudokuStructure(sudoku);
        let sudo = new Sudoku(obj);
        this.reload(Solver.getSudokuSolution(sudo));
    }
    createClue(textFieldId) {
        let id = '#' + textFieldId.toString(),
            i = Math.floor(textFieldId / 9),
            j = textFieldId % 9
        return { x: i, y: j, value: $(id).val() != ' ' ? parseInt($(id).val()) : 0, isClue: $(id).prop('disabled') ? true : false }
    }
    getPlayableSudoku() {
        return Array.from({ length: 81 }, (value, i) => this.createClue(i))
    }
    hasBegun() {
        if (!$('#0').val()) return false
        return true
    }
    getPossibleValues(row, column){
        $('#pValues tr').remove()
        let sudoku = sudokuGen.getSudokuStructure(this.getMatrix())
        let values = Solver.getPossibleValues(row, column, sudoku)
        let tr = $('<tr />')
        values.forEach((value, i) => createFill('valTd', tr, i, value, 'valHint'))
        tr.appendTo($('#pValues'))
        
    }
    
}

let getSudokuView = () => {
    return new SudokuView()
}

module.exports = SudokuView

/***/ }),

/***/ "../../../../../src/assets/javascripts/timerView.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

let totalSeconds = 0;

let pad = val => {
    let valString = val + "";
    return valString.length < 2 ? "0" + valString : valString;
}

class Timer {
    constructor() {
        this.timerID = 'undef';
        this.restart = false;
    }

    setTime() {
      
        let milisText = pad(++totalSeconds % 100)
        let secondsText = pad(parseInt((totalSeconds / 100) % 60))
        let minutesText = pad(parseInt((totalSeconds / 6000) % 60))
        let hoursText = pad(parseInt(totalSeconds / 360000))
        $('#milis').text(milisText);
        $('#seconds').text(secondsText);
        $('#minutes').text(minutesText);
        $('#hours').text(hoursText);
    }

    startTimer() {
        this.timerID = setInterval(this.setTime, 10);
    }
    stopTimer() {
        totalSeconds = 0;
        $('#milis').text('00');
        $('#seconds').text('00');
        $('#minutes').text('00');
        $('#hours').text('00');
        $('#milis').text('00');
        clearInterval(this.timerID);
    }
    showLastTimer() {
        clearInterval(this.timerID);
    }
}

module.exports = Timer;

/***/ }),

/***/ "../../../../../src/assets/javascripts/userOptionsView.js":
/***/ (function(module, exports) {

/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

class UserOptionsView {

    constructor() {}
    getUser() {
        let user = $('#showUsername').text();
        if (user != "")
            return user;
        $('#warningLogin').modal();
        return "empty";
    }

    showModal() {
        $('#loadModal').modal();
    }

    showSaveGameModal() {
        $('#saveModal').modal();
    }

    setStorageDifficulty(d) {
        window.sessionStorage.setItem('difficulty', d);
    }

    getStorageDifficulty() {
        return window.sessionStorage.getItem('difficulty');
    }

    setStorageSudokuId(newId, newGame) {
        window.sessionStorage.setItem('_id', newId);
        window.sessionStorage.setItem('newGame', newGame);
    }

    getStorageSudokuId() {
        return window.sessionStorage.getItem('_id');
    }

    getIsNewGame() {
        return (window.sessionStorage.getItem('newGame') == 'true') ? true : false;
    }
    storageClient(obj) {
        window.localStorage.setItem(obj._id, JSON.stringify(obj));
    }
    getStorageClient(id) {
        return JSON.parse(window.localStorage.getItem(id));
    }
    getStorageClientByUser(user) {
        return Array.from({ length: window.localStorage.length },
             (v, i) => JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
             .filter(v => v.user == user)
    }
   
    getSudokuIdStorage(id) {
        return Array.from({ length: window.localStorage.length }, 
            (v, i) => JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
        .find(v => v._id === id);
    }

    createRow(sudoku) {
        let icon = '<td><span class="glyphicon glyphicon-user"></span></td>',
            difficulty = '<td>' + sudoku.difficulty + '</td>',
            lastPlayed = '<td>' + sudoku.lastPlayed + '</td>',
            button = '<td><button type="button" data-target="#loadModal" data-toggle="modal" class="btn btn-primary badge" id="' + sudoku._id + '"><span class="glyphicon glyphicon-plus"></button></span>',
            row = '<tr>' + icon + difficulty + lastPlayed + button + '</tr>';
        return row;

    }

    getCurrentDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    warning(text) {
        $('#warningText').text(text);
        $('#warningModal').modal();
    }

}

module.exports = UserOptionsView

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map