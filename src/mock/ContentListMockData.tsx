import { DiningProps } from "../screens/dining/dining.props";

const contentList: DiningProps[] = Array.from({ length: 8 }, (_, id) => ({
  id,
  title: "",
  img: "",
  grade: "4.8",
  adress: "서울시 강남구 15m",
}));

export default contentList;
