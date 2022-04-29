/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "createMenuItem": () => (/* binding */ createMenuItem)
/* harmony export */ });
const createMenuItem = function (name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("hero");

  const menuText = document.createElement("div");
  menuText.classList.add("hero-text");
  menuItem.appendChild(menuText);

  const dishName = document.createElement("h2");
  dishName.textContent = name;
  menuText.appendChild(dishName);

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;
  menuText.appendChild(dishDescription);

  const dishImage = document.createElement("img");
  dishImage.classList.add("hero-image");
  dishImage.src = `../src/menu/${name}.jpg`;
  menuItem.appendChild(dishImage);

  return menuItem;
};

const createMenu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Sushi Deluxe",
      "premium crowd pleaser, the Sushi Deluxe has something for everyone with a delicious 16 piece combination of fresh Salmon Sashimi, cooked Prawn, etc. Includes soy sauce, wasabi, ginger and chopsticks"
    )
  );

  menu.appendChild(
    createMenuItem(
      "Signature Rolls",
      "Our chef's specialty signature rolls. Only the premium ingredients are used to make the finest rolls."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Supreme Rolls",
      "Our chef's specialty signature rolls with cream cheese. Only the premium ingredients are used to make the finest rolls."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Sashimi Bowl",
      "Light, refreshing, and tasty, Salmon Sashimi Bowl will satisfy your sushi craving!"
    )
  );

  content.appendChild(menu);
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlTWVudUl0ZW0gPSBmdW5jdGlvbiAobmFtZSwgZGVzY3JpcHRpb24pIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcblxyXG4gIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVyby10ZXh0XCIpO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcclxuXHJcbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIG1lbnVUZXh0LmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuXHJcbiAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3QgZGlzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkaXNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm8taW1hZ2VcIik7XHJcbiAgZGlzaEltYWdlLnNyYyA9IGAuLi9zcmMvbWVudS8ke25hbWV9LmpwZ2A7XHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGlzaEltYWdlKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJTdXNoaSBEZWx1eGVcIixcclxuICAgICAgXCJwcmVtaXVtIGNyb3dkIHBsZWFzZXIsIHRoZSBTdXNoaSBEZWx1eGUgaGFzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUgd2l0aCBhIGRlbGljaW91cyAxNiBwaWVjZSBjb21iaW5hdGlvbiBvZiBmcmVzaCBTYWxtb24gU2FzaGltaSwgY29va2VkIFByYXduLCBldGMuIEluY2x1ZGVzIHNveSBzYXVjZSwgd2FzYWJpLCBnaW5nZXIgYW5kIGNob3BzdGlja3NcIlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJTaWduYXR1cmUgUm9sbHNcIixcclxuICAgICAgXCJPdXIgY2hlZidzIHNwZWNpYWx0eSBzaWduYXR1cmUgcm9sbHMuIE9ubHkgdGhlIHByZW1pdW0gaW5ncmVkaWVudHMgYXJlIHVzZWQgdG8gbWFrZSB0aGUgZmluZXN0IHJvbGxzLlwiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlN1cHJlbWUgUm9sbHNcIixcclxuICAgICAgXCJPdXIgY2hlZidzIHNwZWNpYWx0eSBzaWduYXR1cmUgcm9sbHMgd2l0aCBjcmVhbSBjaGVlc2UuIE9ubHkgdGhlIHByZW1pdW0gaW5ncmVkaWVudHMgYXJlIHVzZWQgdG8gbWFrZSB0aGUgZmluZXN0IHJvbGxzLlwiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlNhc2hpbWkgQm93bFwiLFxyXG4gICAgICBcIkxpZ2h0LCByZWZyZXNoaW5nLCBhbmQgdGFzdHksIFNhbG1vbiBTYXNoaW1pIEJvd2wgd2lsbCBzYXRpc2Z5IHlvdXIgc3VzaGkgY3JhdmluZyFcIlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51SXRlbSwgY3JlYXRlTWVudSB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=