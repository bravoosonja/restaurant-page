import _ from "lodash";
import "./style.css";
import { createHeader, createHero, createInfo } from "./home.js";
import { createMenu, createMenuItem } from "./menu";
import createContact from "./contact";

function component() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  return content;
}

document.body.appendChild(component());
createHeader();
createHero();
createInfo();

function render() {
  const content = document.querySelector("#content");
  content.style = "";
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}

//DOM objects
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

//event listeners
homeButton.addEventListener("click", () => {
  render();
  createHero();
  createInfo();
  return { createHero, createInfo };
});

menuButton.addEventListener("click", () => {
  render();
  createMenu();
  createMenuItem();
  createInfo();
  return { createMenu, createMenuItem, createInfo };
});

contactButton.addEventListener("click", () => {
  render();
  createContact();
  createInfo();
  return { createContact, createInfo };
});
