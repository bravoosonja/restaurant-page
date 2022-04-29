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

export { createHeader, createHero, createInfo };
