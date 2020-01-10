(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n  <div (click)=\"backButton()\" [@openClose]=\"homePage\" id=\"arrow\" style=\"font-size: 48px;position: absolute; cursor: pointer;\">&larr; <span style=\"font-size: 30px;\">BACK</span></div>\n  <div style=\"text-align: center;\">\n    <h1>Moda Signature Generator</h1>\n    <h2>Version {{version}}</h2>\n  </div>\n  <div [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\" >\n    <router-outlet (activate)=\"routeChange()\" #o=\"outlet\"></router-outlet>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\">\n    <div class=\"flexGrid\">\n        <div class=\"flexCol\">\n            <button routerLink=\"/mac-steps\"  class=\"osButton\"><img id=\"apple\" src=\"./assets/apple.png\" alt=\"Apple Logo\">MAC</button></div>\n\n        <div style=\"padding: 5px 0;\" class=\"flexCol\"><span>OR</span></div>\n\n        <div class=\"flexCol\"><button routerLink=\"Toast\" class=\"osButton\"><img src=\"./assets/windows.png\" alt=\"Windows Logo\" id=\"pc\">PC</button></div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mac-steps/mac-steps.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mac-steps/mac-steps.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"instr1\">\n    <ol>\n        <li>Open Mail App</li>\n        <li>Go to <strong>Preferences</strong>\n         <ul>\n             <li>Mail > Preferences (Or press ⌘,)</li>\n         </ul>\n     </li>\n     <img src=\"./assets/preferences.png\" alt=\"\">\n     <li>Select <strong>Signatures</strong> tab</li>\n     <li>Select <strong>Exchange</strong> tab and hit the '+' sign</li>\n     <img src=\"./assets/mail-sig.png\" alt=\"\">\n     <li>Give the newly created signature a unique title like \"New <code> &lt;Your Name&gt;</code> Sig\"</li>\n     <li>Quit out of Mail app (Press ⌘Q or Mail > Quit Mail)</li>\n     <li><a href=\"./assets/mailscript.zip\" download> Click here to download {{ scriptName }}</a></li>\n     <li>Open the folder where <strong>{{ scriptName }}</strong> was downloaded (most likely in Downloads folder)</li>\n     <li>Right click the {{scriptFile}}.zip file and selecet <strong>Open With ></strong> Archive Utility\n        <ul>\n            <li>This will reveal a new application called <strong>{{ scriptFile }}</strong></li>\n        </ul>\n    </li>\n     <img src=\"./assets/archive.png\" alt=\"\">\n     <li>Double click <strong>{{ scriptFile }}</strong>, when prompted, select <strong>Open</strong>.</li>\n     <img src=\"./assets/script-download.png\" alt=\"\">\n     <li><strong>{{ scriptName }}</strong> will open in a new Terminal window, follow instructions in that window to continue</li>\n     <img src=\"./assets/terminal.png\" alt=\"\">\n    </ol> \n    <button routerLink=\"/mac\" class=\"osButton\">Next</button>\n </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mac/mac.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mac/mac.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"macBlock\">\n\n<ol class=\"instr1\">\n  <li>Fill out the Web Signature Generator with your job title and full name</li>\n  <p style=\"font-size: 30px; text-align: center;\">&darr;&darr;&darr;&darr;&darr;</p>\n\n\n\n\n    <div id=\"inputBlock\">\n      <br><br>\n      <p>Job Title:</p>\n      <input type=\"text\" [(ngModel)]=\"job\"><br>\n      <p>Full Name:</p>\n      <input type=\"text\" [(ngModel)]=\"name\">\n    </div>\n    <app-signature [job_title]=\"job\" [full_name]=\"name\"></app-signature>\n\n    <li>Open the <strong>{{ scriptName }}</strong> Terminal and press ⌘V</li>\n    <img src=\"./assets/pasted-terminal.png\" alt=\"\">\n    <li>Press <strong>ENTER</strong> in the Terminal window\n      <ul>\n        <li>The terminal should say \"\"</li>\n      </ul>\n    </li>\n  </ol>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signature/signature.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signature/signature.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sigDisplay\" [innerHTML]=\"htmlCode\"></div>\n    <textarea rows=\"20\" cols=\"52\" id=\"codeBlock\">{{htmlCode}}</textarea><br>\n    <app-toast clipboardType=\"(For Mac Mail)\" (click)=\"copyText('codeBlock')\"></app-toast>\n    <!-- <app-toast clipboardType=\"(For Outlook)\" (click)=\"copyToClipboard('sigDisplay')\"></app-toast> -->\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toast/toast.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toast/toast.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button id=\"copyButton\" (click)=\"onClick()\">Copy to Clipboard {{clipboardType}}</button>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"signature-generator\",\"version\":\"0.0.3\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular-devkit/build-angular\":\"^0.803.21\",\"@angular/animations\":\"^8.2.14\",\"@angular/common\":\"~8.2.14\",\"@angular/compiler\":\"~8.2.14\",\"@angular/core\":\"^8.2.14\",\"@angular/forms\":\"~8.2.14\",\"@angular/platform-browser\":\"~8.2.14\",\"@angular/platform-browser-dynamic\":\"~8.2.14\",\"@angular/router\":\"~8.2.14\",\"core-js\":\"^2.5.4\",\"ngx-toastr\":\"^11.2.1\",\"rxjs\":\"^6.5.4\",\"tslib\":\"^1.9.0\",\"zone.js\":\"~0.9.1\"},\"devDependencies\":{\"@angular/cli\":\"~8.3.21\",\"@angular/compiler-cli\":\"^8.2.14\",\"@angular/language-service\":\"~8.2.14\",\"@types/jasmine\":\"~2.8.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"~8.9.4\",\"codelyzer\":\"^5.0.1\",\"jasmine-core\":\"~2.99.1\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.0.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~1.1.2\",\"karma-jasmine-html-reporter\":\"^0.2.2\",\"protractor\":\"~5.4.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~5.11.0\",\"typescript\":\"~3.5.3\"}}");

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app.global.ts":
/*!***************************!*\
  !*** ./src/app.global.ts ***!
  \***************************/
/*! exports provided: AppGlobals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobals", function() { return AppGlobals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppGlobals = class AppGlobals {
    constructor() {
        this.scriptName = 'Mail Script';
        this.scriptFile = 'mailscript';
    }
};
AppGlobals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppGlobals);



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: openClose, fadeAnimation, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openClose", function() { return openClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const openClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ visibility: 'hidden', opacity: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ visibility: 'visible', opacity: '1' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(400))
]);
const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mac_steps_mac_steps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mac-steps/mac-steps.component */ "./src/app/mac-steps/mac-steps.component.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");
/* harmony import */ var _mac_mac_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mac/mac.component */ "./src/app/mac/mac.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'mac-steps', component: _mac_steps_mac_steps_component__WEBPACK_IMPORTED_MODULE_1__["MacStepsComponent"] },
    { path: 'mac', component: _mac_mac_component__WEBPACK_IMPORTED_MODULE_3__["MacComponent"] },
    { path: 'Toast', component: _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let AppComponent = class AppComponent {
    constructor(router, _location) {
        this.router = router;
        this._location = _location;
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
        this.homePage = true;
        this.scriptName = "Mail Script";
        this.title = 'Signature Generator';
    }
    backButton() {
        this._location.back();
    }
    routeChange() {
        if (this.router.url != "/" ? this.homePage = false : this.homePage = true)
            console.log("Current route = " + this.router.url);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"],
            _animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"], _animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signature_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature/signature.component */ "./src/app/signature/signature.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mac_mac_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mac/mac.component */ "./src/app/mac/mac.component.ts");
/* harmony import */ var _mac_steps_mac_steps_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mac-steps/mac-steps.component */ "./src/app/mac-steps/mac-steps.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _signature_signature_component__WEBPACK_IMPORTED_MODULE_6__["SignatureComponent"],
            _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__["ToastComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _mac_mac_component__WEBPACK_IMPORTED_MODULE_11__["MacComponent"],
            _mac_steps_mac_steps_component__WEBPACK_IMPORTED_MODULE_12__["MacStepsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexGrid {\n  max-width: 650px;\n  display: flex;\n  margin: 0 auto;\n}\n\n@media (max-width: 500px) {\n  .flexGrid {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9QRC00L0Rlc2t0b3AvYW5ndWxhci1zaWduYXR1cmUtZ2VuZXJhdG9yL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FES0E7RUFDSTtJQUNFLGNBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhHcmlkIHtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5mbGV4R3JpZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH0iLCIuZmxleEdyaWQge1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mbGV4R3JpZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);



let HomeComponent = class HomeComponent {
    constructor() {
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/mac-steps/mac-steps.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mac-steps/mac-steps.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9QRC00L0Rlc2t0b3AvYW5ndWxhci1zaWduYXR1cmUtZ2VuZXJhdG9yL3NyYy9hcHAvbWFjLXN0ZXBzL21hYy1zdGVwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFjLXN0ZXBzL21hYy1zdGVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFRLGVBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL21hYy1zdGVwcy9tYWMtc3RlcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJ1dHRvbiB7Zm9udC1zaXplOiAzMHB4O30iLCJidXR0b24ge1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/mac-steps/mac-steps.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mac-steps/mac-steps.component.ts ***!
  \**************************************************/
/*! exports provided: MacStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacStepsComponent", function() { return MacStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.global */ "./src/app.global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MacStepsComponent = class MacStepsComponent {
    constructor(_global) {
        this._global = _global;
        this.scriptName = this._global.scriptName;
        this.scriptFile = this._global.scriptFile;
    }
    ngOnInit() {
    }
};
MacStepsComponent.ctorParameters = () => [
    { type: _app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"] }
];
MacStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mac-steps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mac-steps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mac-steps/mac-steps.component.html")).default,
        providers: [_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mac-steps.component.scss */ "./src/app/mac-steps/mac-steps.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"]])
], MacStepsComponent);



/***/ }),

/***/ "./src/app/mac/mac.component.scss":
/*!****************************************!*\
  !*** ./src/app/mac/mac.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputBlock {\n  margin: 0 0 25px 0;\n  font-weight: 400;\n}\n\n#macBlock {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  font-weight: 300;\n}\n\n.instr1 {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9QRC00L0Rlc2t0b3AvYW5ndWxhci1zaWduYXR1cmUtZ2VuZXJhdG9yL3NyYy9hcHAvbWFjL21hYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFjL21hYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFjL21hYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dEJsb2NrIHtcbiAgICBtYXJnaW46IDAgMCAyNXB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI21hY0Jsb2NrIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmluc3RyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufSIsIiNpbnB1dEJsb2NrIHtcbiAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4jbWFjQmxvY2sge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW5zdHIxIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/mac/mac.component.ts":
/*!**************************************!*\
  !*** ./src/app/mac/mac.component.ts ***!
  \**************************************/
/*! exports provided: MacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacComponent", function() { return MacComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.global */ "./src/app.global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);




let MacComponent = class MacComponent {
    constructor(_globals) {
        this._globals = _globals;
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
        this.title = 'Signature Generator';
        this.scriptName = this._globals.scriptName;
    }
    //scriptFile1:string = this._globals.scriptFile;
    ngOnInit() {
    }
};
MacComponent.ctorParameters = () => [
    { type: _app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"] }
];
MacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mac',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mac.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mac/mac.component.html")).default,
        providers: [_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mac.component.scss */ "./src/app/mac/mac.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobals"]])
], MacComponent);



/***/ }),

/***/ "./src/app/signature/signature.component.scss":
/*!****************************************************!*\
  !*** ./src/app/signature/signature.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#codeBlock {\n  font-size: 12px;\n  font-weight: lighter;\n  overflow: auto;\n  border: 1px solid;\n  margin-top: 15px;\n  font-family: \"Courier New\", Courier, monospace;\n  opacity: 0.1;\n}\n\n#sigDisplay {\n  font-family: \"Futura PT\", \"Lato\", \"Helvetica\", \"Tahoma\", \"Times New Roman\", sans-serif;\n  color: #77787b;\n  border: 1px solid;\n  width: 373px;\n  padding: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9QRC00L0Rlc2t0b3AvYW5ndWxhci1zaWduYXR1cmUtZ2VuZXJhdG9yL3NyYy9hcHAvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzRkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2RlQmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgb3BhY2l0eTogLjE7XG59XG5cbiNzaWdEaXNwbGF5IHtcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYSBQVCcsICdMYXRvJywgJ0hlbHZldGljYScsICdUYWhvbWEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzc3Nzg3YjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICB3aWR0aDogMzczcHg7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbn1cbiIsIiNjb2RlQmxvY2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4jc2lnRGlzcGxheSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVFwiLCBcIkxhdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJUYWhvbWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3Nzc4N2I7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogMzczcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/signature/signature.component.ts":
/*!**************************************************!*\
  !*** ./src/app/signature/signature.component.ts ***!
  \**************************************************/
/*! exports provided: SignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureComponent", function() { return SignatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignatureComponent = class SignatureComponent {
    constructor() {
        this.socialImgWidth = ' width="30"';
    }
    ngOnChanges() {
        this.htmlCode = '<style>body{font-family: "Futura PT", "Helvetica", "Tahoma", "Times New Roman", sans-serif; color: #77787b; font-weight: 300; font-size: 12px;}p{margin: 0;}.title{font-weight: 300;}.name{color: #EE202E; font-size: 20px; font-weight: bolder !important; text-transform: uppercase;}.contact span{font-weight: bolder; color: black;}.social img{width: 30px; padding: 3px;}.image img{width: 30px;}</style><body><p>Thank you,</p><br><img width="200" src="https://modalight.com/assets/email/moda-logo.png" alt="Modalight"> <p class="title">' + this.job + '</p><p class="name">' + this.name + '</p><p>3280 W Sunset Road Las Vegas, NV 89118</p><div class="contact"><p><span>T&nbsp;&nbsp;</span>702 407 7775 <span>&nbsp;&nbsp;F&nbsp;&nbsp;</span>702 477 7773</p></div><a style="display: inline;" href="https://modalight.com/#/">www.modalight.com</a> <table class="social"> <tr> <td> <a href="https://www.facebook.com/modalightusa/"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/facebook.png" alt="Facebook"></a> </td><td> <a href="https://www.instagram.com/moda_light/"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/instagram.png" alt="Instagram"></a> </td><td> <a href="https://twitter.com/modalight?lang=en"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/twitter.png" alt="Twitter"></a> </td><td> <a href="https://www.linkedin.com/company/moda-light-usa?trk=similar-companies_org_title"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/linkedin.png" alt="Linkedin"></a> </td></tr><tr> </tr></table> <div style="width: 470px;"> <p>LOVE THE EARTH. Think before you print.</p><p>Notice: This e-mail is intended solely for the use of the individual(s) to whom it is</p><p>addressed and may contain information that is privileged, confidential or</p><p>otherwise exempt from disclosure. If the reader of this e-mail is not the intended</p><p>recipient, you are hereby notified that any dissemination, distribution, or </p><p>copying of this communication is strictly prohibited. If you have received this</p><p> communication in error, please immediately notify us by replying to the original</p><p>message at the listed email address.</p></div></body>';
    }
    copyText(id) {
        var textArea = document.getElementById(id);
        textArea.select();
        document.execCommand('copy');
    }
    copyToClipboard(id) {
        this.clearSelection();
        var sel, range;
        var el = document.getElementById(id); //get element id
        sel = window.getSelection();
        if (sel.toString() == '') { //no text selection
            window.setTimeout(function () {
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range); //add Range to a Selection.
                document.execCommand("copy");
            }, 1);
        }
    }
    clearSelection() {
        window.getSelection().removeAllRanges();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('job_title'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SignatureComponent.prototype, "job", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('full_name'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SignatureComponent.prototype, "name", void 0);
SignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signature/signature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signature.component.scss */ "./src/app/signature/signature.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignatureComponent);



/***/ }),

/***/ "./src/app/toast/toast.component.scss":
/*!********************************************!*\
  !*** ./src/app/toast/toast.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#copyButton {\n  padding: 1em;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9QRC00L0Rlc2t0b3AvYW5ndWxhci1zaWduYXR1cmUtZ2VuZXJhdG9yL3NyYy9hcHAvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90b2FzdC90b2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb3B5QnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn0iLCIjY29weUJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/toast/toast.component.ts":
/*!******************************************!*\
  !*** ./src/app/toast/toast.component.ts ***!
  \******************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let ToastComponent = class ToastComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.copyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.copyEvent.emit(null);
        this.toastr.success('Copied to Clipboard');
    }
};
ToastComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ToastComponent.prototype, "clipboardType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ToastComponent.prototype, "copyEvent", void 0);
ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toast/toast.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toast.component.scss */ "./src/app/toast/toast.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], ToastComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/PD-4/Desktop/angular-signature-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);