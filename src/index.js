import _ from "lodash";
import "./style.css";
import { createHeader, createHero, createInfo } from "./home.js";

function component() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  return content;
}

document.body.appendChild(component());
createHeader();
createHero();
createInfo();
