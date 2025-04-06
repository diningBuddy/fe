import { View, Button } from "react-native";

import { ButtonText } from "../../../../common/atom/Button";
import Divider from "../../../../common/atom/Divier";
import searchList from "../../../../mock/SearchMockData";

export const SearchHeader = () => {
  return (
    <View>
      {/* <NavigationHeader  />  */}

      {/* #000000D9 400 14px */}
      {/* <FlexBox> */}
      <span>최근 검색어</span>

      <Button mode="text" height="sm">
        <ButtonText mode="outlineGray" fontSize="sm" isUnderLine>
          전체 삭제
        </ButtonText>
      </Button>
      {searchList.map((item) => (
        <View key={item.id}>{item.title}</View>
      ))}
      {/* </FlexBox> */}

      <Divider size="thick" orientation="horizontal" />
    </View>
  );
};

export default SearchHeader;
