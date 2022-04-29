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
  homeButton.setAttribute("id", "home-button");
  header.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.classList.add("header-btn");
  menuButton.textContent = "Menu";
  menuButton.setAttribute("id", "menu-button");
  header.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.classList.add("header-btn");
  contactButton.textContent = "Contact";
  contactButton.setAttribute("id", "contact-button");
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
    "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is sushi rice, also referred to as shari or sumeshi. The inventor of modern sushi is believed to be Hanaya Yohei, who invented nigiri - zushi, a type of sushi most known today, in which seafood is placed on hand - pressed vinegared rice, around 1824 in the Edo period(1603－1867).It was the fast food of the chōnin class in the Edo period. Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat.";
  heroText.appendChild(heroPara);

  const heroImage = document.createElement("img");
  heroImage.src = "../src/hero-image.jpg";
  heroImage.classList.add("hero-image");
  hero.appendChild(heroImage);

  content.appendChild(hero);
};

const createInfo = function () {
  const content = document.querySelector("#content");
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  const info = document.createElement("div");
  info.classList.add("info");
  infoContainer.appendChild(info);

  const infoPara = document.createElement("p");
  infoPara.classList.add("info-para");
  infoPara.textContent = "Hungry for sushi? Make a reservation now!";
  info.appendChild(infoPara);

  const bookButton = document.createElement("button");
  bookButton.classList.add("book-button");
  bookButton.textContent = "BOOK A TABLE";
  info.appendChild(bookButton);

  content.appendChild(infoContainer);
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlSGVhZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuXCIpO1xyXG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1idXR0b25cIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG5cclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuXCIpO1xyXG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuXCIpO1xyXG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1idXR0b25cIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVybyA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcclxuXHJcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcblxyXG4gIGNvbnN0IGhlcm9IMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZXJvSDEudGV4dENvbnRlbnQgPSBcIlN1c2hpIPCfkpsgU3VzaGlcIjtcclxuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvSDEpO1xyXG5cclxuICBjb25zdCBoZXJvUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhlcm9QYXJhLnRleHRDb250ZW50ID1cclxuICAgIFwiU3VzaGkgaXMgYSBKYXBhbmVzZSBkaXNoIG9mIHByZXBhcmVkIHZpbmVnYXJlZCByaWNlLCB1c3VhbGx5IHdpdGggc29tZSBzdWdhciBhbmQgc2FsdCwgYWNjb21wYW5pZWQgYnkgYSB2YXJpZXR5IG9mIGluZ3JlZGllbnRzIHN1Y2ggYXMgc2VhZm9vZCwgb2Z0ZW4gcmF3LCBhbmQgdmVnZXRhYmxlcy4gU3R5bGVzIG9mIHN1c2hpIGFuZCBpdHMgcHJlc2VudGF0aW9uIHZhcnkgd2lkZWx5LCBidXQgdGhlIG9uZSBrZXkgaW5ncmVkaWVudCBpcyBzdXNoaSByaWNlLCBhbHNvIHJlZmVycmVkIHRvIGFzIHNoYXJpIG9yIHN1bWVzaGkuIFRoZSBpbnZlbnRvciBvZiBtb2Rlcm4gc3VzaGkgaXMgYmVsaWV2ZWQgdG8gYmUgSGFuYXlhIFlvaGVpLCB3aG8gaW52ZW50ZWQgbmlnaXJpIC0genVzaGksIGEgdHlwZSBvZiBzdXNoaSBtb3N0IGtub3duIHRvZGF5LCBpbiB3aGljaCBzZWFmb29kIGlzIHBsYWNlZCBvbiBoYW5kIC0gcHJlc3NlZCB2aW5lZ2FyZWQgcmljZSwgYXJvdW5kIDE4MjQgaW4gdGhlIEVkbyBwZXJpb2QoMTYwM++8jTE4NjcpLkl0IHdhcyB0aGUgZmFzdCBmb29kIG9mIHRoZSBjaMWNbmluIGNsYXNzIGluIHRoZSBFZG8gcGVyaW9kLiBTdXNoaSBpcyB0cmFkaXRpb25hbGx5IG1hZGUgd2l0aCBtZWRpdW0tZ3JhaW4gd2hpdGUgcmljZSwgdGhvdWdoIGl0IGNhbiBiZSBwcmVwYXJlZCB3aXRoIGJyb3duIHJpY2Ugb3Igc2hvcnQtZ3JhaW4gcmljZS4gSXQgaXMgdmVyeSBvZnRlbiBwcmVwYXJlZCB3aXRoIHNlYWZvb2QsIHN1Y2ggYXMgc3F1aWQsIGVlbCwgeWVsbG93dGFpbCwgc2FsbW9uLCB0dW5hIG9yIGltaXRhdGlvbiBjcmFiIG1lYXQuXCI7XHJcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1BhcmEpO1xyXG5cclxuICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGhlcm9JbWFnZS5zcmMgPSBcIi4uL3NyYy9oZXJvLWltYWdlLmpwZ1wiO1xyXG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgY29uc3QgaW5mb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvUGFyYS5jbGFzc0xpc3QuYWRkKFwiaW5mby1wYXJhXCIpO1xyXG4gIGluZm9QYXJhLnRleHRDb250ZW50ID0gXCJIdW5ncnkgZm9yIHN1c2hpPyBNYWtlIGEgcmVzZXJ2YXRpb24gbm93IVwiO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb1BhcmEpO1xyXG5cclxuICBjb25zdCBib29rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJib29rLWJ1dHRvblwiKTtcclxuICBib29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJCT09LIEEgVEFCTEVcIjtcclxuICBpbmZvLmFwcGVuZENoaWxkKGJvb2tCdXR0b24pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVIZXJvLCBjcmVhdGVJbmZvIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==