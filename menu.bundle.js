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

  const dishName = document.createElement("h1");
  dishName.textContent = name;
  menuText.appendChild(dishName);

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;
  menuText.appendChild(dishDescription);

  const dishImage = document.createElement("img");
  dishImage.classList.add("hero-image");
  dishImage.src = `../src/menu/${name}.jpg`;

  menuItem.appendChild(dishName);
  menuItem.appendChild(dishDescription);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gZnVuY3Rpb24gKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xyXG5cclxuICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudVRleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcclxuXHJcbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIG1lbnVUZXh0LmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuXHJcbiAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3QgZGlzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkaXNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm8taW1hZ2VcIik7XHJcbiAgZGlzaEltYWdlLnNyYyA9IGAuLi9zcmMvbWVudS8ke25hbWV9LmpwZ2A7XHJcblxyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpc2hJbWFnZSk7XHJcblxyXG4gIHJldHVybiBtZW51SXRlbTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3VzaGkgRGVsdXhlXCIsXHJcbiAgICAgIFwicHJlbWl1bSBjcm93ZCBwbGVhc2VyLCB0aGUgU3VzaGkgRGVsdXhlIGhhcyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lIHdpdGggYSBkZWxpY2lvdXMgMTYgcGllY2UgY29tYmluYXRpb24gb2YgZnJlc2ggU2FsbW9uIFNhc2hpbWksIGNvb2tlZCBQcmF3biwgZXRjLiBJbmNsdWRlcyBzb3kgc2F1Y2UsIHdhc2FiaSwgZ2luZ2VyIGFuZCBjaG9wc3RpY2tzXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU2lnbmF0dXJlIFJvbGxzXCIsXHJcbiAgICAgIFwiT3VyIGNoZWYncyBzcGVjaWFsdHkgc2lnbmF0dXJlIHJvbGxzLiBPbmx5IHRoZSBwcmVtaXVtIGluZ3JlZGllbnRzIGFyZSB1c2VkIHRvIG1ha2UgdGhlIGZpbmVzdCByb2xscy5cIlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJTdXByZW1lIFJvbGxzXCIsXHJcbiAgICAgIFwiT3VyIGNoZWYncyBzcGVjaWFsdHkgc2lnbmF0dXJlIHJvbGxzIHdpdGggY3JlYW0gY2hlZXNlLiBPbmx5IHRoZSBwcmVtaXVtIGluZ3JlZGllbnRzIGFyZSB1c2VkIHRvIG1ha2UgdGhlIGZpbmVzdCByb2xscy5cIlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJTYXNoaW1pIEJvd2xcIixcclxuICAgICAgXCJMaWdodCwgcmVmcmVzaGluZywgYW5kIHRhc3R5LCBTYWxtb24gU2FzaGltaSBCb3dsIHdpbGwgc2F0aXNmeSB5b3VyIHN1c2hpIGNyYXZpbmchXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudUl0ZW0sIGNyZWF0ZU1lbnUgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9