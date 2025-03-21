import { View } from "react-native";

import { ArrowTrendiingUp } from "../../../../assets/icons/arrow";
import { HeartFill } from "../../../../assets/icons/shape";
import Divider from "../../../../common/atom/Divier";
import searchList from "../../../../mock/SearchMockData";

export const SearchMain = () => {
  return (
    <View>
      {/* #000000D9 400 14px */}
      {/* <FlexBox> */}
      <ArrowTrendiingUp />
      <span>오늘의 인기 검색어</span>
      {/* </FlexBox> */}

      {searchList.map((item) => (
        <View key={item.id}>{item.title}</View>
      ))}

      <Divider size="thick" orientation="horizontal" />

      {/* #000000D9 400 14px */}
      {/* <FlexBox> */}
      <HeartFill />
      <span>매운맛장인님 취향을 반영했어요</span>
      {/* </FlexBox> */}

      {searchList.map((item) => (
        <View key={item.id}>{item.title}</View>
      ))}
    </View>
  );
};

export default SearchMain;
