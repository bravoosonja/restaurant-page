const createMenuItem = function (name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('hero');

  const menuText = document.createElement('div');
  menuText.classList.add('hero-text');
  menuItem.appendChild(menuText);

  const dishName = document.createElement('h2');
  dishName.textContent = name;
  menuText.appendChild(dishName);

  const dishDescription = document.createElement('p');
  dishDescription.textContent = description;
  menuText.appendChild(dishDescription);

  const dishImage = document.createElement('img');
  dishImage.classList.add('hero-image');
  dishImage.src = `~/images/${name}.jpg`;
  menuItem.appendChild(dishImage);

  return menuItem;
};

//dish information
const createMenu = function () {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      'Sushi Deluxe',
      'premium crowd pleaser, the Sushi Deluxe has something for everyone with a delicious 16 piece combination of fresh Salmon Sashimi, cooked Prawn, etc. Includes soy sauce, wasabi, ginger and chopsticks'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Signature Rolls',
      "Our chef's specialty signature rolls. Only the premium ingredients are used to make the finest rolls."
    )
  );

  menu.appendChild(
    createMenuItem(
      'Supreme Rolls',
      "Our chef's specialty signature rolls with cream cheese. Only the premium ingredients are used to make the finest rolls."
    )
  );

  menu.appendChild(
    createMenuItem(
      'Sashimi Bowl',
      'Light, refreshing, and tasty, Salmon Sashimi Bowl will satisfy your sushi craving!'
    )
  );

  content.appendChild(menu);
};

export { createMenuItem, createMenu };
