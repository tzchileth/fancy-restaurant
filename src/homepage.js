import { homePageContent } from "./contents";

const homePage = () => {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = `Delicious Dishes`;
  p.textContent = homePageContent();

  content.append(h1, p);
};

export { homePage };
