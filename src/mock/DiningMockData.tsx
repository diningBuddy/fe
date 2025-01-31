import BibimbapIcon from "../assets/icons/diningCategory/bibimbap.svg";
import PastaIcon from "../assets/icons/diningCategory/pasta.svg";
import OriginiIcon from "../assets/icons/diningCategory/origini.svg";
import BaoIcon from "../assets/icons/diningCategory/bao.svg";
import TokpokkiIcon from "../assets/icons/diningCategory/tokpokki.svg";
import FriedChickenIcon from "../assets/icons/diningCategory/fired-chicken.svg";
import PizzaIcon from "../assets/icons/diningCategory/pizza.svg";
import BurgersIcon from "../assets/icons/diningCategory/burgers.svg";
import TacoIcon from "../assets/icons/diningCategory/taco.svg";
import CoffeeIcon from "../assets/icons/diningCategory/coffee.svg";
import { DiningProps } from "../screens/dining/dining.props";

const categoryItems = [
  { title: "한식", icon: BibimbapIcon },
  { title: "양식", icon: PastaIcon },
  { title: "일식", icon: OriginiIcon },
  { title: "중식", icon: BaoIcon },
  { title: "분식", icon: TokpokkiIcon },
  { title: "치킨", icon: FriedChickenIcon },
  { title: "피자", icon: PizzaIcon },
  { title: "버거", icon: BurgersIcon },
  { title: "아시안", icon: TacoIcon },
  { title: "카페", icon: CoffeeIcon },
];

const horizontalFoodImage = require("../assets/images/sample/horizontal-food.png");

const verticalFoodImage = require("../assets/images/sample/vertical-food.png");

export const categoryList = categoryItems.map((item, index) => ({
  id: index,
  ...item,
}));

const titles = ["한식", "양식", "일식", "중식", "분식", "아시안", "치킨", "피자", "버거", "보쌈"];

const generateDiningData = (): DiningProps[] => {
  return titles.map((title, index) => ({
    id: index,
    title,
    img: horizontalFoodImage,
    grade: "4.8",
    adress: "서울시 강남구 15m",
    count: 9999,
  }));
};

const midnightMealData = (): DiningProps[] => {
  return titles.map((title, index) => ({
    id: index,
    title,
    img: verticalFoodImage,
    grade: "4.8",
    adress: "서울시 강남구 15m",
    count: 9999,
  }));
};

export const lunchToday: DiningProps[] = generateDiningData();

export const midnightMeal: DiningProps[] = midnightMealData();
