import { homePage } from "./homepage";
import { displayContacts } from "./contactForm";
import { createMenu } from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

homePage();

document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "menu":
      content.textContent = "";
      content.style.width = "";
      createMenu();
      menu.autofocus = true;
      break;

    case "contact":
      content.textContent = "";
      content.style.width = "";
      displayContacts();
      contact.autofocus = true;
      break;

    case "home":
      content.textContent = "";
      content.style.width = "";
      homePage();
      home.autofocus = true;
  }
});
