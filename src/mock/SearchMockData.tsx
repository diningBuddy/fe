import { SearchProps } from "../screens/search/Search.Props";

const searchItems: string[] = ["짜장면", "덮밥", "분식", "파스타", "피자", "뼈해장국", "마카롱"];

const searchList: SearchProps[] = searchItems.map((title, id) => ({
  id,
  title,
}));

export default searchList;
