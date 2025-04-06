import { View, Text } from "react-native";

import { FilterOutline } from "../../../assets/icons/time";
import Empty from "../../../common/atom/Empty";
import Tabs from "../../../common/atom/Tab";
import searchList from "../../../mock/SearchMockData";

export const SearchResult = () => {
  const tabs = [
    { label: "전체", value: "total" },
    { label: "한식", value: "korean" },
    { label: "중식", value: "chinese" },
    { label: "일식", value: "japen" },
    { label: "양식", value: "western" },
    { label: "아시안", value: "asian" },
  ];

  return (
    <View>
      <Tabs tabs={tabs}>
        <View>
          {/* 매장수 start */}
          {/* <FlexBox> */}
          {/* #000000CC 400 14px */}
          <Text>0</Text>
          <Text>개의 매장</Text>
          {/* </FlexBox> */}
          {/* 매장수 end */}

          {searchList.map((item) => (
            <View key={item.id}>{item.title}</View>
          ))}

          {/* 추천순 start */}
          {/* <FlexBox> */}
          <FilterOutline />
          {/* #595959 500 14px */}
          <Text>추천순</Text>
          {/* </FlexBox> */}
          {/* 추천순 end */}

          <Empty
            title="앗, 찾으시는 결과가 없네요."
            subtitle="혹시 다른 검색어로 찾아보시는 건 어떠세요?
          결과가 없다면 설정>문의하기를 이용해 보세요."
            mode="secondary"
          />
        </View>
      </Tabs>
    </View>
  );
};

export default SearchResult;
