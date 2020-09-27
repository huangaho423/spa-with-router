/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/Router */ \"./src/routes/Router.js\");\n//引入scss\n //Router\n\n //監聽路由&加載事件\n\nwindow.addEventListener('hashchange', _routes_Router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"]);\nwindow.addEventListener('load', _routes_Router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\nvar Home = {\n  render: function render() {\n    return \"<h1>Home page</h1>\";\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/*! exports provided: NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return NotFound; });\nvar NotFound = {\n  render: function render() {\n    return \"<h1>This page not found!</h1>\";\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/NotFound.js?");

/***/ }),

/***/ "./src/pages/Post.js":
/*!***************************!*\
  !*** ./src/pages/Post.js ***!
  \***************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\nvar Post = {\n  render: function render() {\n    return \"<h1>Post page</h1>\";\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Post.js?");

/***/ }),

/***/ "./src/routes/Route.js":
/*!*****************************!*\
  !*** ./src/routes/Route.js ***!
  \*****************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return Route; });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Post */ \"./src/pages/Post.js\");\n//引入Component\n\n //設定路徑並對應Component\n\nvar Route = [{\n  path: '/',\n  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"]\n}, {\n  path: '/post',\n  component: _pages_Post__WEBPACK_IMPORTED_MODULE_1__[\"Post\"]\n}];\n\n//# sourceURL=webpack:///./src/routes/Route.js?");

/***/ }),

/***/ "./src/routes/Router.js":
/*!******************************!*\
  !*** ./src/routes/Router.js ***!
  \******************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\n/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route */ \"./src/routes/Route.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/NotFound */ \"./src/pages/NotFound.js\");\n// 引入路徑模組\n // 找不到頁面\n\n // 找出對應元件\n// path:目前路徑,routes:路徑設定\n\nvar getComponent = function getComponent(path, routes) {\n  var result = routes.find(function (r) {\n    return r.path.match(new RegExp(\"^\".concat(path, \"$\")));\n  }) || {};\n  return result;\n};\n\nvar Router = function Router() {\n  // 0.若沒有hash則強制加入預設路徑\n  if (!location.hash) {\n    location.hash = '/';\n  } // 1.得到目前路徑(對應routes)\n\n\n  var path = location.hash.slice(1).toLowerCase(); // 2.找出對應頁面\n  // ES6 解構賦值\n\n  var _getComponent = getComponent(path, _Route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"]),\n      _getComponent$compone = _getComponent.component,\n      component = _getComponent$compone === void 0 ? _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__[\"NotFound\"] : _getComponent$compone; // 3.將元件內容渲染至畫面\n\n\n  document.querySelector('#wrapper').innerHTML = component.render();\n};\n\n//# sourceURL=webpack:///./src/routes/Router.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });