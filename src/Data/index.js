import featured_1 from "../assets/images/featured-01.png";
import featured_2 from "../assets/images/featured-02.png";
import featured_3 from "../assets/images/featured-03.png";
import featured_4 from "../assets/images/featured-04.png";
// ==========================================
import categories_1 from "../assets/images/categories-01.jpg";
import categories_2 from "../assets/images/categories-02.jpg";
import categories_3 from "../assets/images/categories-03.jpg";
import categories_4 from "../assets/images/categories-04.jpg";
import categories_5 from "../assets/images/categories-05.jpg";
// ==========================================
import topGame_1 from "../assets/images/top-game-01.jpg";
import topGame_2 from "../assets/images/top-game-02.jpg";
import topGame_3 from "../assets/images/top-game-03.jpg";
import topGame_4 from "../assets/images/top-game-04.jpg";
import topGame_5 from "../assets/images/top-game-05.jpg";
import topGame_6 from "../assets/images/top-game-06.jpg";

// ==========================================
import trending_1 from "../assets/images/trending-01.jpg";
import trending_2 from "../assets/images/trending-02.jpg";
import trending_3 from "../assets/images/trending-03.jpg";
import trending_4 from "../assets/images/trending-04.jpg";
// ==========================================
import game_1 from "../assets/images/categories-01.jpg";
import game_2 from "../assets/images/categories-02.jpg";
import game_3 from "../assets/images/categories-04.jpg";
import game_4 from "../assets/images/top-game-02.jpg";
import game_5 from "../assets/images/top-game-03.jpg";
import game_6 from "../assets/images/top-game-04.jpg";
import game_7 from "../assets/images/top-game-05.jpg";
import game_8 from "../assets/images/top-game-06.jpg";
import game_9 from "../assets/images/trending-01.jpg";
import game_10 from "../assets/images/trending-02.jpg";
import game_11 from "../assets/images/trending-04.jpg";
const data = {
  feauters: [
    { id: 1, image: featured_1, title: "free storage" },
    { id: 2, image: featured_2, title: "user more" },
    { id: 3, image: featured_3, title: "replay ready" },
    { id: 4, image: featured_4, title: "Easy layout" },
  ],
  categories: [
    { id: 1, image: categories_1, action: "Action" },
    { id: 2, image: categories_2, action: "Action" },
    { id: 3, image: categories_3, action: "Action" },
    { id: 4, image: categories_4, action: "Action" },
    { id: 5, image: categories_5, action: "Action" },
  ],
  trending: [
    {
      id: 1,
      image: trending_1,
      action: "Action",
      title: "Assasin Creed",
      price: "50$",
      discount: "50%",
    },
    {
      id: 2,
      image: trending_2,
      action: "Action",
      title: "Assasin Creed",
      price: "44$",
      discount: "0%",
    },
    {
      id: 3,
      image: trending_3,
      action: "Action",
      title: "Assasin Creed",
      price: "64$",
      discount: "31%",
    },
    {
      id: 4,
      image: trending_4,
      action: "Action",
      title: "Assasin Creed",
      price: "32$",
      discount: "0%",
    },
  ],
  topGames: [
    { id: 1, image: topGame_1, adventure: "Adventure", title: "Assasin Creed" },
    { id: 2, image: topGame_2, adventure: "Adventure", title: "Assasin Creed" },
    { id: 3, image: topGame_3, adventure: "Adventure", title: "Assasin Creed" },
    { id: 4, image: topGame_4, adventure: "Adventure", title: "Assasin Creed" },
    { id: 5, image: topGame_5, adventure: "Adventure", title: "Assasin Creed" },
    { id: 6, image: topGame_6, adventure: "Adventure", title: "Assasin Creed" },
  ],
  games: [
    {
      id: 1,
      image: game_1,
      title: "assasin creed",
      action: "action",
      price: "40$",
      discount: "25%",
      type: ["adventure", "racing"],
    },
    {
      id: 2,
      image: game_2,
      title: "assasin creed",
      action: "action",
      price: "50$",
      discount: "10%",
      type: ["adventure", "strategy"],
    },
    {
      id: 3,
      image: game_3,
      title: "assasin creed",
      action: "action",
      price: "30$",
      discount: "0%",
      type: ["strategy"],
    },
    {
      id: 4,
      image: game_4,
      title: "assasin creed",
      action: "action",
      price: "120$",
      discount: "40%",
      type: ["strategy"],
    },
    {
      id: 5,
      image: game_5,
      title: "assasin creed",
      action: "action",
      price: "77$",
      discount: "60%",
      type: ["strategy", "racing"],
    },
    {
      id: 6,
      image: game_6,
      title: "assasin creed",
      action: "action",
      price: "35$",
      discount: "0%",
      type: ["racing"],
    },
    {
      id: 7,
      image: game_7,
      title: "assasin creed",
      action: "action",
      price: "22$",
      discount: "0%",
      type: ["strategy"],
    },
    {
      id: 8,
      image: game_8,
      title: "assasin creed",
      action: "action",
      price: "44$",
      discount: "15%",
      type: ["adventure"],
    },
    {
      id: 9,
      image: game_9,
      title: "assasin creed",
      action: "action",
      price: "53$",
      discount: "20%",
      type: ["adventure", "strategy"],
    },
    {
      id: 10,
      image: game_10,
      title: "assasin creed",
      action: "action",
      price: "25$",
      discount: "0%",
      type: ["adventure"],
    },
    {
      id: 11,
      image: game_11,
      title: "assasin creed",
      action: "action",
      price: "52$",
      discount: "33%",
      type: ["strategy", "racing"],
    },
  ],
};

export const { feauters, categories, topGames, trending, games } = data;
