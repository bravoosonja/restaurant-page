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
  dishImage.src = `./src/menu/${name}.jpg`;
  menuItem.appendChild(dishImage);

  return menuItem;
};

//dish information
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uIChuYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuXHJcbiAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudVRleHQpO1xyXG5cclxuICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbWVudVRleHQuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xyXG5cclxuICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkaXNoRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBtZW51VGV4dC5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xyXG5cclxuICBjb25zdCBkaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGRpc2hJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKTtcclxuICBkaXNoSW1hZ2Uuc3JjID0gYC4vc3JjL21lbnUvJHtuYW1lfS5qcGdgO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpc2hJbWFnZSk7XHJcblxyXG4gIHJldHVybiBtZW51SXRlbTtcclxufTtcclxuXHJcbi8vZGlzaCBpbmZvcm1hdGlvblxyXG5jb25zdCBjcmVhdGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlN1c2hpIERlbHV4ZVwiLFxyXG4gICAgICBcInByZW1pdW0gY3Jvd2QgcGxlYXNlciwgdGhlIFN1c2hpIERlbHV4ZSBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSB3aXRoIGEgZGVsaWNpb3VzIDE2IHBpZWNlIGNvbWJpbmF0aW9uIG9mIGZyZXNoIFNhbG1vbiBTYXNoaW1pLCBjb29rZWQgUHJhd24sIGV0Yy4gSW5jbHVkZXMgc295IHNhdWNlLCB3YXNhYmksIGdpbmdlciBhbmQgY2hvcHN0aWNrc1wiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlNpZ25hdHVyZSBSb2xsc1wiLFxyXG4gICAgICBcIk91ciBjaGVmJ3Mgc3BlY2lhbHR5IHNpZ25hdHVyZSByb2xscy4gT25seSB0aGUgcHJlbWl1bSBpbmdyZWRpZW50cyBhcmUgdXNlZCB0byBtYWtlIHRoZSBmaW5lc3Qgcm9sbHMuXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3VwcmVtZSBSb2xsc1wiLFxyXG4gICAgICBcIk91ciBjaGVmJ3Mgc3BlY2lhbHR5IHNpZ25hdHVyZSByb2xscyB3aXRoIGNyZWFtIGNoZWVzZS4gT25seSB0aGUgcHJlbWl1bSBpbmdyZWRpZW50cyBhcmUgdXNlZCB0byBtYWtlIHRoZSBmaW5lc3Qgcm9sbHMuXCJcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU2FzaGltaSBCb3dsXCIsXHJcbiAgICAgIFwiTGlnaHQsIHJlZnJlc2hpbmcsIGFuZCB0YXN0eSwgU2FsbW9uIFNhc2hpbWkgQm93bCB3aWxsIHNhdGlzZnkgeW91ciBzdXNoaSBjcmF2aW5nIVwiXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnVJdGVtLCBjcmVhdGVNZW51IH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==