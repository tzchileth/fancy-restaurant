import { homePageContent } from "./contents";

const homePage = () => {
  const container = document.querySelector(".container");

  const content = document.querySelector("#content");

  const homeContainer = document.createElement("div");

  homeContainer.classList.add("homeContainer");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  const formButton = document.querySelector(".formButton");

  if (formButton) {
    container.removeChild(formButton);
  }

  h1.textContent = `Delicious Dishes`;
  p.textContent = homePageContent();

  homeContainer.append(h1, p);

  content.append(homeContainer);
};

export { homePage };
