/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = (() => {\r\n    // Obtain container\r\n    const content = document.getElementById('content')\r\n\r\n    // Create new div for contact\r\n    const contact = document.createElement('div')\r\n    contact.setAttribute('id','contact')\r\n    contact.setAttribute('data-tab-content','')\r\n    contact.innerHTML = `\r\n        <div class=\"row z-depth-5\" id=\"contact\">\r\n            <div class=\"formMap\">\r\n                <div class=\"col s12 m6\">\r\n                    <form action=\"\">\r\n                        <div class=\"col s12\">\r\n                            <div class=\"input-field col s12\">\r\n                                <i class=\"material-icons prefix\">person</i>\r\n                                <input id=\"title\" type=\"text\" class=\"validate\">\r\n                                <label for=\"title\">Name</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <div class=\"input-field col s12\">\r\n                                <i class=\"material-icons prefix\">email</i>\r\n                                <input id=\"email\" type=\"email\" class=\"validate\">\r\n                                <label for=\"email\">Email</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <div class=\"input-field col s12\">\r\n                                <i class=\"material-icons prefix\">contact_phone</i>\r\n                                <input id=\"title\" type=\"number\" class=\"validate\">\r\n                                <label for=\"title\">Contact Number</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <div class=\"input-field col s12\">\r\n                                <i class=\"material-icons prefix\">comment</i>\r\n                                <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\r\n                                <label for=\"textarea1\"> Message</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-field col s12\">\r\n                            <input type=\"submit\" value=\"Send Message\" class=\"waves-effect waves-light btn addBook\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            <div class=\"col s12 m6\">\r\n                <div class=\"col s12\">\r\n                    <iframe id=\"map\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9917.335416127848!2d-0.0991861!3d51.5804444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79fd13de175e03b9!2sHala%20Restaurant!5e0!3m2!1sen!2suk!4v1639155410844!5m2!1sen!2suk\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"page-footer\" id=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col l6 s12\">\r\n                <h5 class=\"white-text\" id=\"dlishfooter\">D-Lish</h5>\r\n                <p class=\"grey-text text-lighten-4\">Opening times:</p>\r\n                <p class=\"grey-text text-lighten-4\">Monday - Thursday: 8am - 8pm</p>\r\n                <p class=\"grey-text text-lighten-4\">Friday - Sunday: 8am - 11pm</p>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"footer-copyright\">\r\n            <div class=\"container\">\r\n            © 2021 D-Lish developed by M-Afsari\r\n            <a class=\"grey-text text-lighten-4 right\" href=\"https://github.com/Mohammad-Afsari/resturant_page\"><i class=\"material-icons\" id=\"github\">code</i></a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n    `\r\n\r\n    content.appendChild(contact)\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ contact });\n\n//# sourceURL=webpack://resturant_page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n// import { homePage } from \"./home\";\r\n// import { menu } from \"./menu\"\r\n\r\n\r\nconsole.log(\"Yoooooooooooooooo\")\n\n//# sourceURL=webpack://resturant_page/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Hamburger menu functionality using materialisecss\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    var elems = document.querySelectorAll('.sidenav');\r\n    var instances = M.Sidenav.init(elems, {});\r\n});\r\n\r\n\r\n\r\nconst pageLoad = (() => {\r\n    // Obtain container\r\n    const content = document.getElementById('content')\r\n\r\n    // Create div element\r\n    const newDiv = document.createElement('div')\r\n\r\n    newDiv.innerHTML = `    \r\n    <nav>\r\n        <div class=\"nav-wrapper z-depth-5\" id=\"tabs\">       \r\n            <a href=\"index.html\" class=\"brand-logo\" id=\"logo\"><i class=\"material-icons\">local_dining</i></a>\r\n            <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\" id=\"hamburger\">menu</i></a>\r\n        <ul class=\"left hide-on-med-and-down\">\r\n            <li><a href=\"#!\">Home</a></li>\r\n            <li><a href=\"#!\">Menu</a></li>\r\n            <li><a href=\"#!\">Contact</a></li>\r\n        </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <ul class=\"sidenav\" id=\"mobile-demo\">\r\n        <li><a href=\"#!\">Home</a></li>\r\n        <li><a href=\"#!\">Menu</a></li>\r\n        <li><a href=\"#!\">Contact</a></li>\r\n    </ul>\r\n    `\r\n    content.appendChild(newDiv)\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://resturant_page/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;