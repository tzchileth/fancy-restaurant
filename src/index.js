import { homePage } from "./homepage";
import { displayContacts } from "./contactForm";
import { createMenu } from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "menu":
      content.textContent = "";
      content.style.width = "";
      createMenu();
      break;
    case "contact":
      content.textContent = "";
      content.style.width = "";
      displayContacts();
      break;
    default:
      content.textContent = "";
      content.style.width = "";
      homePage();
  }
});
