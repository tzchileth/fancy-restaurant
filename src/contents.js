const homePageContent = () => {
  return `Visit your local Olive Garden located at Huntsville, Alabama for a hearty Italian meal. Whether you're looking for freshly baked breadsticks or perfectly made pasta, Olive Garden has something for any appetite. 
    We are conveniently located near University Dr. and 2 miles east of Madison Square Mall. 
    To start dining on classic Italian recipes, visit our Italian restaurant at 3730 University Dr. NW today!`;
};

const menuTitles = () => {
  const titles = [
    "Chicken Alfredo",
    "Chicken and Shrimp Carbonara",
    "Chicken Parmigiana",
    "Tour of Italy",
    "Shrimp Alfredo",
    "Chicken Marsala Fettucine",
    "Ravioli Carbonara",
    "Lasagna Classico",
    "Family Style Lasagna Bundle",
    "Spaghetti and Meatballs",
    "Spaghetti with Meat Sauce",
    "Spaghetti with Marinara",
    "Fettucine Alfredo",
    "Chicken Tortelloni Alfredo",
    "Shrimp Scampi",
    "Seafood Alfredo",
  ];
  return titles;
};

const pricesAndCalories = () => {
  const priceCalorie = [
    ["$19.49", " | 1,570 cal"],
    ["$21.49", " | 1,370 cal"],
    ["$19.49", " | 1,020 cal"],
    ["$21.49", " | 1,550 cal"],
    ["$20.49", " | 1,470 cal"],
    ["$19.99", " | 1,400 cal"],
    ["$17.99", " | 1,390 cal"],
    ["$17.79", " | 940 cal"],
    ["$58.99", " | 6,700 cal"],
    ["$17.28", " | 1,120 cal"],
    ["$13.49", " | 640 cal"],
    ["$13.49", " | 490 cal"],
    ["$16.29", " | 1,310 cal"],
    ["$21.49", " | 1,980 cal"],
    ["$19.99", " | 490 cal"],
    ["$21.49", " | 1,450"],
  ];

  return priceCalorie;
};

export { homePageContent, menuTitles, pricesAndCalories };
