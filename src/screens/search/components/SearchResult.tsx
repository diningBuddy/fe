import React from "react";
import { View } from "react-native";

import searchList from "../../../mock/SearchMockData";
import { FilterOutline } from "../../../assets/icons/time";
import Empty from "../../../common/atom/Empty";

export const SearchResult = () => {
  return (
    <View>
      {/* 매장수 start */}
      {/* <FlexBox> */}
      {/* #000000CC 400 14px */}
      <span>0</span>
      <span>개의 매장</span>
      {/* </FlexBox> */}
      {/* 매장수 end */}

      {searchList.map((item) => (
        <View key={item.id}>{item.title}</View>
      ))}

      {/* 추천순 start */}
      {/* <FlexBox> */}
      <FilterOutline />
      {/* #595959 500 14px */}
      <span>추천순</span>
      {/* </FlexBox> */}
      {/* 추천순 end */}

      <Empty
        title="앗, 찾으시는 결과가 없네요."
        subtitle="혹시 다른 검색어로 찾아보시는 건 어떠세요?
          결과가 없다면 설정>문의하기를 이용해 보세요."
        mode="secondary"
      />
    </View>
  );
};

export default SearchResult;
