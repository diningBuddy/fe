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

export const categoryList = categoryItems.map((item, index) => ({
  id: index,
  ...item,
}));

export const lunchToday: DiningProps[] = [
  {
    id: 0,
    title: "한식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 1,
    title: "양식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 2,
    title: "일식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 3,
    title: "중식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 4,
    title: "분식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 5,
    title: "치킨",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 6,
    title: "피자",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 7,
    title: "버거",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
];

export const midnightMeal: DiningProps[] = [
  {
    id: 0,
    title: "한식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 1,
    title: "양식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 2,
    title: "일식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 3,
    title: "중식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 4,
    title: "분식",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 5,
    title: "치킨",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 6,
    title: "피자",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
  {
    id: 7,
    title: "버거",
    img: "",
    grade: "4.8",
    adress: "서울시 강남구 15m",
  },
];
