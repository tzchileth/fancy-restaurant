import Menu1 from "./img/menu1.webp";
import Menu2 from "./img/menu2.webp";
import Menu3 from "./img/menu3.webp";
import Menu4 from "./img/menu4.webp";
import Menu5 from "./img/menu5.webp";
import Menu6 from "./img/menu6.webp";
import Menu7 from "./img/menu7.webp";
import Menu8 from "./img/menu8.webp";
import Menu9 from "./img/menu9.webp";
import Menu10 from "./img/menu10.webp";
import Menu11 from "./img/menu11.webp";
import Menu12 from "./img/menu12.webp";
import Menu13 from "./img/menu13.webp";
import Menu14 from "./img/menu14.webp";
import Menu15 from "./img/menu15.webp";
import Menu16 from "./img/menu16.webp";

import { menuTitles, pricesAndCalories } from "./contents";

const createMenu = () => {
  const container = document.querySelector(".container");

  const content = document.querySelector("#content");
  const cardContainer = document.createElement("div");
  const formButton = document.querySelector(".formButton");

  if (formButton) {
    container.removeChild(formButton);
  }

  content.style.width = "100%";

  const images = [
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Menu7,
    Menu8,
    Menu9,
    Menu10,
    Menu11,
    Menu12,
    Menu13,
    Menu14,
    Menu15,
    Menu16,
  ];
  const titles = menuTitles();
  const pricesCalories = pricesAndCalories();
  const menuLength = titles.length;

  for (let i = 0; i < menuLength; i++) {
    const card = document.createElement("div");
    const cardImage = document.createElement("div");
    const title = document.createElement("div");
    const priceNCalorie = document.createElement("div");
    const menuDetails = document.createElement("div");
    const price = document.createElement("span");
    const menuButton = document.createElement("button");

    //   button logic -- step 1
    menuButton.classList.add("menu-button");
    menuButton.textContent = `ADD`;

    //   price logic -- step 2
    price.classList.add("price");
    price.textContent = `${pricesCalories[i][0]}`;
    menuDetails.classList.add("menu-details");
    const menuDetailsText = document.createTextNode(`${pricesCalories[i][1]}`);
    menuDetails.append(price, menuDetailsText);

    //   priceNCalorie -- step 3
    priceNCalorie.classList.add("priceNCalorie");
    priceNCalorie.appendChild(menuDetails);

    //   title logic -- step 4
    title.classList.add("title");
    title.textContent = `${titles[i]}`;

    // add img -- step 5
    cardImage.classList.add("card-image");
    const myMenu = new Image();
    myMenu.src = `${images[i]}`;
    cardImage.appendChild(myMenu);
    // add nodes to card -- step 6
    card.classList.add("card");
    card.append(cardImage, title, priceNCalorie, menuButton);

    // add card to cardContainer  -- step 7
    cardContainer.classList.add("card-container");
    cardContainer.appendChild(card);
  }

  return content.append(cardContainer);
};

export { createMenu };
