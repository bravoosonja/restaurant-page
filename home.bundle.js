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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHome = function () {
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
  document.body.appendChild(content);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcmVuZGVySG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ0blwiKTtcclxuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG5cclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuXCIpO1xyXG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idG5cIik7XHJcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xyXG5cclxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuXHJcbiAgY29uc3QgaGVyb0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlcm9IMS50ZXh0Q29udGVudCA9IFwiU3VzaGkg8J+SmyBTdXNoaVwiO1xyXG4gIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9IMSk7XHJcblxyXG4gIGNvbnN0IGhlcm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaGVyb1BhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJTdXNoaSBpcyBhIEphcGFuZXNlIGRpc2ggb2YgcHJlcGFyZWQgdmluZWdhcmVkIHJpY2UsIHVzdWFsbHkgd2l0aCBzb21lIHN1Z2FyIGFuZCBzYWx0LCBhY2NvbXBhbmllZCBieSBhIHZhcmlldHkgb2YgaW5ncmVkaWVudHMgc3VjaCBhcyBzZWFmb29kLCBvZnRlbiByYXcsIGFuZCB2ZWdldGFibGVzLiBTdHlsZXMgb2Ygc3VzaGkgYW5kIGl0cyBwcmVzZW50YXRpb24gdmFyeSB3aWRlbHksIGJ1dCB0aGUgb25lIGtleSBpbmdyZWRpZW50IGlzIHN1c2hpIHJpY2UsIGFsc28gcmVmZXJyZWQgdG8gYXMgc2hhcmkgb3Igc3VtZXNoaS4gVGhlIGludmVudG9yIG9mIG1vZGVybiBzdXNoaSBpcyBiZWxpZXZlZCB0byBiZSBIYW5heWEgWW9oZWksIHdobyBpbnZlbnRlZCBuaWdpcmkgLSB6dXNoaSwgYSB0eXBlIG9mIHN1c2hpIG1vc3Qga25vd24gdG9kYXksIGluIHdoaWNoIHNlYWZvb2QgaXMgcGxhY2VkIG9uIGhhbmQgLSBwcmVzc2VkIHZpbmVnYXJlZCByaWNlLCBhcm91bmQgMTgyNCBpbiB0aGUgRWRvIHBlcmlvZCgxNjAz77yNMTg2NykuSXQgd2FzIHRoZSBmYXN0IGZvb2Qgb2YgdGhlIGNoxY1uaW4gY2xhc3MgaW4gdGhlIEVkbyBwZXJpb2QuIFN1c2hpIGlzIHRyYWRpdGlvbmFsbHkgbWFkZSB3aXRoIG1lZGl1bS1ncmFpbiB3aGl0ZSByaWNlLCB0aG91Z2ggaXQgY2FuIGJlIHByZXBhcmVkIHdpdGggYnJvd24gcmljZSBvciBzaG9ydC1ncmFpbiByaWNlLiBJdCBpcyB2ZXJ5IG9mdGVuIHByZXBhcmVkIHdpdGggc2VhZm9vZCwgc3VjaCBhcyBzcXVpZCwgZWVsLCB5ZWxsb3d0YWlsLCBzYWxtb24sIHR1bmEgb3IgaW1pdGF0aW9uIGNyYWIgbWVhdC4gTWFueSB0eXBlcyBvZiBzdXNoaSBhcmUgdmVnZXRhcmlhbi4gSXQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggcGlja2xlZCBnaW5nZXIgKGdhcmkpLCB3YXNhYmksIGFuZCBzb3kgc2F1Y2UuIERhaWtvbiByYWRpc2ggb3IgcGlja2xlZCBkYWlrb24gKHRha3VhbikgYXJlIHBvcHVsYXIgZ2FybmlzaGVzIGZvciB0aGUgZGlzaC4gU3VzaGkgaXMgc29tZXRpbWVzIGNvbmZ1c2VkIHdpdGggc2FzaGltaSwgYSByZWxhdGVkIGRpc2ggaW4gSmFwYW5lc2UgY3Vpc2luZSB0aGF0IGNvbnNpc3RzIG9mIHRoaW5seSBzbGljZWQgcmF3IGZpc2ggb3Igb2NjYXNpb25hbGx5IG1lYXQuXCI7XHJcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1BhcmEpO1xyXG5cclxuICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGhlcm9JbWFnZS5zcmMgPSBcIi4uL3NyYy9oZXJvLWltYWdlLmpwZ1wiO1xyXG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XHJcblxyXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgY29uc3QgaW5mb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvUGFyYS5jbGFzc0xpc3QuYWRkKFwiaW5mby1wYXJhXCIpO1xyXG4gIGluZm9QYXJhLnRleHRDb250ZW50ID0gXCJIdW5ncnkgZm9yIHN1c2hpPyBNYWtlIGEgcmVzZXJ2YXRpb24gbm93IVwiO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb1BhcmEpO1xyXG5cclxuICBjb25zdCBib29rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJib29rLWJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJCT09LIEEgVEFCTEVcIjtcclxuICBpbmZvLmFwcGVuZENoaWxkKGJvb2tCdXR0b24pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=