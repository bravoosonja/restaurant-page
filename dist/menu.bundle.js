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
  dishImage.classList.add("menu-image");
  dishImage.src = `../src/${name}.jpg`;

  menuItem.appendChild(dishName);
  menuItem.appendChild(dishDescription);
  menuItem.appendChild(dishImage);

  return menuItem;
};

const createMenu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add("hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gZnVuY3Rpb24gKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xyXG5cclxuICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudVRleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcclxuXHJcbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIG1lbnVUZXh0LmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuXHJcbiAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3QgZGlzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkaXNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XHJcbiAgZGlzaEltYWdlLnNyYyA9IGAuLi9zcmMvJHtuYW1lfS5qcGdgO1xyXG5cclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNoSW1hZ2UpO1xyXG5cclxuICByZXR1cm4gbWVudUl0ZW07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlN1c2hpIERlbHV4ZVwiLFxyXG4gICAgICBcInByZW1pdW0gY3Jvd2QgcGxlYXNlciwgdGhlIFN1c2hpIERlbHV4ZSBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSB3aXRoIGEgZGVsaWNpb3VzIDE2IHBpZWNlIGNvbWJpbmF0aW9uIG9mIGZyZXNoIFNhbG1vbiBTYXNoaW1pLCBjb29rZWQgUHJhd24sIGV0Yy4gSW5jbHVkZXMgc295IHNhdWNlLCB3YXNhYmksIGdpbmdlciBhbmQgY2hvcHN0aWNrc1wiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlNpZ25hdHVyZSBSb2xsc1wiLFxyXG4gICAgICBcIk91ciBjaGVmJ3Mgc3BlY2lhbHR5IHNpZ25hdHVyZSByb2xscy4gT25seSB0aGUgcHJlbWl1bSBpbmdyZWRpZW50cyBhcmUgdXNlZCB0byBtYWtlIHRoZSBmaW5lc3Qgcm9sbHMuXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3VwcmVtZSBSb2xsc1wiLFxyXG4gICAgICBcIk91ciBjaGVmJ3Mgc3BlY2lhbHR5IHNpZ25hdHVyZSByb2xscyB3aXRoIGNyZWFtIGNoZWVzZS4gT25seSB0aGUgcHJlbWl1bSBpbmdyZWRpZW50cyBhcmUgdXNlZCB0byBtYWtlIHRoZSBmaW5lc3Qgcm9sbHMuXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU2FzaGltaSBCb3dsXCIsXHJcbiAgICAgIFwiTGlnaHQsIHJlZnJlc2hpbmcsIGFuZCB0YXN0eSwgU2FsbW9uIFNhc2hpbWkgQm93bCB3aWxsIHNhdGlzZnkgeW91ciBzdXNoaSBjcmF2aW5nIVwiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnVJdGVtLCBjcmVhdGVNZW51IH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==