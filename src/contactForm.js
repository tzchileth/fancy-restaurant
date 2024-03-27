const displayContacts = () => {
  const content = document.querySelector("#content");
  const contactHeading = document.createElement("h1");
  const btn = document.createElement("button");

  const udaleDiv = document.createElement("div");
  const ravenDiv = document.createElement("div");
  const chillyDiv = document.createElement("div");

  const sections = [udaleDiv, ravenDiv, chillyDiv];
  const contents = [
    ["Udale Mayojo", "Chef", "888-888-990", "udale@bushrestaurant.com"],
    ["Raven Gold", "Manager", "888-888-991", "raven@bushrestaurant.com"],
    ["Chile Bushcat", "Taster", "888-888-992", "chilly@bushrestaurant.com"],
  ];

  btn.textContent = `Contact Us`;
  btn.classList.add("formHeader");
  btn.classList.add("formButton");

  content.style.width = "";

  content.append(btn);

  for (let i = 0; i < sections.length; i++) {
    const header = document.createElement("h1");
    const position = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    header.textContent = contents[i][0];
    position.textContent = contents[i][1];
    phone.textContent = contents[i][2];
    email.textContent = contents[i][3];

    sections.at(i).append(header);
    sections.at(i).append(position);
    sections.at(i).append(phone);
    sections.at(i).append(email);

    sections.at(i).classList.add("card");

    content.append(sections.at(i));
  }

  return content;
};

export { displayContacts };
