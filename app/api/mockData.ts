import { IRecipe } from "types";

export const posts = [
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/460/460//uploads/i/Cach-nau-canh-kim-chi-Han-Quoc-nong-hoi-thom-ngon.jpg?v=4.1",
    category: "Table talk",
    title: "How to make Kimchi",
    id: 1,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    featured: true,
    views: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/850/590//uploads/i/Tom-chien-pesto-voi-toi-va-khoai-tay-day-dinh-duong-1.jpg?v=4.1",
    category: "In the kitchen",
    title: "Fired shrimp with potato",
    id: 2,
    views: 130,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Holiday & Seasons",
    title: "Soup",
    id: 3,
    views: 10,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Table talk",
    title: "This Is the Second-Best Chicken at Costco",
    id: 4,
    date: "April 22, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    views: 400,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/o-uKOa3oKyHkrk639YTWDek6Lds=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sister-Colette-Interview-LEAD-f7aba581d2dd459dad591359d6bd5107.jpg",
    category: "In the kitchen",
    title:
      "TikTok Star Sister Colette Cultivates a Can-Do Attitude About Canning",
    id: 5,
    views: 130,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Holiday & Seasons",
    title: "A Love Letter to the City that Kept My Boys Safe",
    id: 6,
    views: 202,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/460/460//uploads/i/Cach-nau-canh-kim-chi-Han-Quoc-nong-hoi-thom-ngon.jpg?v=4.1",
    category: "Table talk",
    title: "How to make Kimchi",
    id: 7,
    date: "April 21, 2022",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    views: 1200,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/850/590//uploads/i/Tom-chien-pesto-voi-toi-va-khoai-tay-day-dinh-duong-1.jpg?v=4.1",
    category: "In the kitchen",
    title: "Fired shrimp with potato",
    id: 8,
    views: 130,
    date: "April 21, 2021",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Holiday & Seasons",
    title: "Soup",
    id: 9,
    views: 20,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/460/460//uploads/i/Cach-nau-canh-kim-chi-Han-Quoc-nong-hoi-thom-ngon.jpg?v=4.1",
    category: "Table talk",
    title: "How to make Kimchi",
    id: 10,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    views: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "http://gl.amthuc365.vn/thumbnails/850/590//uploads/i/Tom-chien-pesto-voi-toi-va-khoai-tay-day-dinh-duong-1.jpg?v=4.1",
    category: "In the kitchen",
    title: "Fired shrimp with potato",
    id: 11,
    views: 130,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Holiday & Seasons",
    title: "Soup",
    id: 12,
    views: 20,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc:
      "https://www.simplyrecipes.com/thmb/F81_sM2H1giqwPIpaj2c4VN0gDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pizza-Casserole-LEAD-4-384048a7cf0c42df95409aef7adfbd55.jpg",
    category: "Holiday & Seasons",
    title: "Soup",
    id: 13,
    views: 20,
    date: "April 21, 2020",
    author: {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      name: "Charlotte Delos",
      profile: "Chef",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const recipes = [
  {
    idMeal: "52771",
    strMeal: "Spicy Arrabiata Penne",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Italian",
    strInstructions:
      "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    strTags: "Pasta,Curry",
    strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
    strIngredient1: "penne rigate",
    strIngredient2: "olive oil",
    strIngredient3: "garlic",
    strIngredient4: "chopped tomatoes",
    strIngredient5: "red chile flakes",
    strIngredient6: "italian seasoning",
    strIngredient7: "basil",
    strIngredient8: "Parmigiano-Reggiano",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "1 pound",
    strMeasure2: "1/4 cup",
    strMeasure3: "3 cloves",
    strMeasure4: "1 tin ",
    strMeasure5: "1/2 teaspoon",
    strMeasure6: "1/2 teaspoon",
    strMeasure7: "6 leaves",
    strMeasure8: "spinkling",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
] as IRecipe[];

export const categories = [
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "2",
    strCategory: "Chicken",
    strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
    strCategoryDescription:
      "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
  },
];
