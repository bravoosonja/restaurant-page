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
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createHero": () => (/* binding */ createHero),
/* harmony export */   "createInfo": () => (/* binding */ createInfo)
/* harmony export */ });
const createHeader = function () {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const homeButton = document.createElement("button");
  homeButton.classList.add("header-btn");
  homeButton.textContent = "Home";
  header.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.classList.add("header-btn");
  menuButton.textContent = "Menu";
  header.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.classList.add("header-btn");
  contactButton.textContent = "Contact";
  header.appendChild(contactButton);
};

const createHero = function () {
  const content = document.querySelector("#content");
  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.appendChild(hero);

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  hero.appendChild(heroText);

  const heroH1 = document.createElement("h1");
  heroH1.textContent = "Sushi 💛 Sushi";
  heroText.appendChild(heroH1);

  const heroPara = document.createElement("p");
  heroPara.textContent =
    "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is sushi rice, also referred to as shari or sumeshi. The inventor of modern sushi is believed to be Hanaya Yohei, who invented nigiri - zushi, a type of sushi most known today, in which seafood is placed on hand - pressed vinegared rice, around 1824 in the Edo period(1603－1867).It was the fast food of the chōnin class in the Edo period. Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish. Sushi is sometimes confused with sashimi, a related dish in Japanese cuisine that consists of thinly sliced raw fish or occasionally meat.";
  heroText.appendChild(heroPara);

  const heroImage = document.createElement("img");
  heroImage.src = "../src/hero-image.jpg";
  heroImage.classList.add("hero-image");
  hero.appendChild(heroImage);

  content.appendChild(hero);
};

const createInfo = function () {
  const content = document.querySelector("#content");

  const info = document.createElement("div");
  info.classList.add("info");
  content.appendChild(info);

  const infoPara = document.createElement("p");
  infoPara.classList.add("info-para");
  infoPara.textContent = "Hungry for sushi? Make a reservation now!";
  info.appendChild(infoPara);

  const bookButton = document.createElement("button");
  bookButton.classList.add("book-button");
  bookButton.textContent = "BOOK A TABLE";
  info.appendChild(bookButton);

  content.appendChild(info);
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idG5cIik7XHJcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ0blwiKTtcclxuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuXCIpO1xyXG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xyXG5cclxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuXHJcbiAgY29uc3QgaGVyb0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlcm9IMS50ZXh0Q29udGVudCA9IFwiU3VzaGkg8J+SmyBTdXNoaVwiO1xyXG4gIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9IMSk7XHJcblxyXG4gIGNvbnN0IGhlcm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaGVyb1BhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJTdXNoaSBpcyBhIEphcGFuZXNlIGRpc2ggb2YgcHJlcGFyZWQgdmluZWdhcmVkIHJpY2UsIHVzdWFsbHkgd2l0aCBzb21lIHN1Z2FyIGFuZCBzYWx0LCBhY2NvbXBhbmllZCBieSBhIHZhcmlldHkgb2YgaW5ncmVkaWVudHMgc3VjaCBhcyBzZWFmb29kLCBvZnRlbiByYXcsIGFuZCB2ZWdldGFibGVzLiBTdHlsZXMgb2Ygc3VzaGkgYW5kIGl0cyBwcmVzZW50YXRpb24gdmFyeSB3aWRlbHksIGJ1dCB0aGUgb25lIGtleSBpbmdyZWRpZW50IGlzIHN1c2hpIHJpY2UsIGFsc28gcmVmZXJyZWQgdG8gYXMgc2hhcmkgb3Igc3VtZXNoaS4gVGhlIGludmVudG9yIG9mIG1vZGVybiBzdXNoaSBpcyBiZWxpZXZlZCB0byBiZSBIYW5heWEgWW9oZWksIHdobyBpbnZlbnRlZCBuaWdpcmkgLSB6dXNoaSwgYSB0eXBlIG9mIHN1c2hpIG1vc3Qga25vd24gdG9kYXksIGluIHdoaWNoIHNlYWZvb2QgaXMgcGxhY2VkIG9uIGhhbmQgLSBwcmVzc2VkIHZpbmVnYXJlZCByaWNlLCBhcm91bmQgMTgyNCBpbiB0aGUgRWRvIHBlcmlvZCgxNjAz77yNMTg2NykuSXQgd2FzIHRoZSBmYXN0IGZvb2Qgb2YgdGhlIGNoxY1uaW4gY2xhc3MgaW4gdGhlIEVkbyBwZXJpb2QuIFN1c2hpIGlzIHRyYWRpdGlvbmFsbHkgbWFkZSB3aXRoIG1lZGl1bS1ncmFpbiB3aGl0ZSByaWNlLCB0aG91Z2ggaXQgY2FuIGJlIHByZXBhcmVkIHdpdGggYnJvd24gcmljZSBvciBzaG9ydC1ncmFpbiByaWNlLiBJdCBpcyB2ZXJ5IG9mdGVuIHByZXBhcmVkIHdpdGggc2VhZm9vZCwgc3VjaCBhcyBzcXVpZCwgZWVsLCB5ZWxsb3d0YWlsLCBzYWxtb24sIHR1bmEgb3IgaW1pdGF0aW9uIGNyYWIgbWVhdC4gTWFueSB0eXBlcyBvZiBzdXNoaSBhcmUgdmVnZXRhcmlhbi4gSXQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggcGlja2xlZCBnaW5nZXIgKGdhcmkpLCB3YXNhYmksIGFuZCBzb3kgc2F1Y2UuIERhaWtvbiByYWRpc2ggb3IgcGlja2xlZCBkYWlrb24gKHRha3VhbikgYXJlIHBvcHVsYXIgZ2FybmlzaGVzIGZvciB0aGUgZGlzaC4gU3VzaGkgaXMgc29tZXRpbWVzIGNvbmZ1c2VkIHdpdGggc2FzaGltaSwgYSByZWxhdGVkIGRpc2ggaW4gSmFwYW5lc2UgY3Vpc2luZSB0aGF0IGNvbnNpc3RzIG9mIHRoaW5seSBzbGljZWQgcmF3IGZpc2ggb3Igb2NjYXNpb25hbGx5IG1lYXQuXCI7XHJcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1BhcmEpO1xyXG5cclxuICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGhlcm9JbWFnZS5zcmMgPSBcIi4uL3NyYy9oZXJvLWltYWdlLmpwZ1wiO1xyXG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgY29uc3QgaW5mb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvUGFyYS5jbGFzc0xpc3QuYWRkKFwiaW5mby1wYXJhXCIpO1xyXG4gIGluZm9QYXJhLnRleHRDb250ZW50ID0gXCJIdW5ncnkgZm9yIHN1c2hpPyBNYWtlIGEgcmVzZXJ2YXRpb24gbm93IVwiO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb1BhcmEpO1xyXG5cclxuICBjb25zdCBib29rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJib29rLWJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJCT09LIEEgVEFCTEVcIjtcclxuICBpbmZvLmFwcGVuZENoaWxkKGJvb2tCdXR0b24pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVIZXJvLCBjcmVhdGVJbmZvIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==