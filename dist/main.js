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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n// import { homePage } from \"./home\";\r\n\r\n\r\nconsole.log(\"Yoooooooooooooooo\")\n\n//# sourceURL=webpack://resturant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// Parallax backgrounds\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    var elems = document.querySelectorAll('.parallax');\r\n    var instances = M.Parallax.init(elems, {});\r\n});\r\n\r\n// Zoom on menu\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    var elems = document.querySelectorAll('.materialboxed');\r\n    var instances = M.Materialbox.init(elems, {});\r\n});\r\n\r\nconst menu = (() => {\r\n    // Obtain container\r\n    const content = document.getElementById('content')\r\n\r\n    // Create new elements\r\n    const menu = document.createElement('div')\r\n    menu.setAttribute('id', 'menuPage')\r\n    menu.setAttribute('data-tab-content','')\r\n    menu.innerHTML = `\r\n    <!-- Intro -->\r\n    <div class=\"parallax-container\">\r\n      <div class=\"parallax\"><img src=\"/dist/img/homebackground.jpg\" id=\"parallaxBackground\"></div>\r\n    </div>\r\n    <div class=\"section grey lighten-3 z-depth-5\">\r\n      <div class=\"row container\" id=\"menu\">\r\n        <i class=\"medium material-icons\" id=\"menuLogo\">local_dining</i>\r\n        <h2 class=\"header\">Let our food take you away</h2>\r\n        <p class=\"grey-text text-darken-3 lighten-3\">Oh. So. Delicious.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Appetisers -->\r\n    <div class=\"parallax-container\">\r\n      <div class=\"parallax\"><img src=\"/dist/img/appetisers/starter.jpg\" id=\"starter\"></div>\r\n    </div>\r\n    \r\n    <div class=\"section grey lighten-3 z-depth-5\">\r\n      <div class=\"row container\">\r\n        <h2 class=\"header\" id=\"headers\">Appetisers</h2>\r\n      <!-- Appetiser cards -->\r\n        <div class=\"row\">\r\n          <div class=\"col s12 m4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-image\">\r\n                <img class=\"materialboxed\" src=\"/dist/img/appetisers/salad.jpg\">\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <p>Vegeterian Salad</p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <p>£4.99</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/appetisers/haloumi.jpg\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <p>Halloumi</p>\r\n                </div>\r\n                <div class=\"card-action\">\r\n                  <p>£3.99</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/appetisers/salmon-biscuits.jpg\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <p>Salmon Bites</p>\r\n                </div>\r\n                <div class=\"card-action\">\r\n                  <p>£5.49</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/appetisers/minipizza.jpg\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <p>Pizza Bites</p>\r\n                </div>\r\n                <div class=\"card-action\">\r\n                  <p>£4.49</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/appetisers/dumplings.jpg\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <p>Dumplings</p>\r\n                </div>\r\n                <div class=\"card-action\">\r\n                  <p>£4.99</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/appetisers/prawns.jpg\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <p>Butter Prawn</p>\r\n                </div>\r\n                <div class=\"card-action\">\r\n                  <p>£6.99</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Main -->\r\n    <div class=\"parallax-container\">\r\n      <div class=\"parallax\"><img src=\"/dist/img/mains/mains.jpg\"></div>\r\n    </div>\r\n    <div class=\"section grey lighten-3 z-depth-5\">\r\n      <div class=\"row container\">\r\n        <h2 class=\"header\" id=\"headers\">Mains</h2>\r\n          <!-- Main Cards -->\r\n          <div class=\"row\">\r\n              <div class=\"col s12 m4\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                  <img class=\"materialboxed\" src=\"/dist/img/mains/pizzaveg.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                  <p>House Pizza</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                  <p>£9.99</p>\r\n                  </div>\r\n              </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/quesadillaveg.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Quesadilla (Veg)</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£8.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/salmon.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Salmon</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£11.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/chickentacos.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Chicken Tacos</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£7.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/chickenshish.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Chicken Shish</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£10.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/chickencurry.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Chicken Curry</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£13.49</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/lambbiryani.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Lamb Biryani</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£12.49</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/burger.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Wagyu Burger</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£14.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/mains/steak.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                      <p>Fillet Steak</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                      <p>£26.99</p>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          </div>\r\n      </div>\r\n      <!-- Desert / Beverage -->\r\n    <div class=\"parallax-container\">\r\n      <div class=\"parallax\"><img src=\"/dist/img/deserts/deserts.jpg\"></div>\r\n    </div>\r\n    <div class=\"section grey lighten-3 z-depth-5\">\r\n      <div class=\"row container\">\r\n        <h2 class=\"header\" id=\"headers\">Desert</h2>\r\n          <!-- Desert Cards -->\r\n          <div class=\"row\">\r\n              <div class=\"col s12 m4\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                    <img class=\"materialboxed\" src=\"/dist/img/deserts/carrotcake.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                    <p>Carrot Cake</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                    <p>£4.99</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/deserts/chocolatefudge.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <p>Chocolate Fudge</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <p>£7.99</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/deserts/chocolatecheesecake.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <p>Chocolate Cheesecake</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <p>£7.49</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/deserts/rasberrycake.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <p>Rasberry Cake</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <p>£4.49</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/deserts/icecream.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <p>Icecream</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <p>£5.99</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img class=\"materialboxed\" src=\"/dist/img/deserts/milkshake.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <p>Fererro Milkshake</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <p>£6.99</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    `\r\n\r\n    content.appendChild(menu)\r\n\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({menu});\n\n//# sourceURL=webpack://resturant_page/./src/menu.js?");

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