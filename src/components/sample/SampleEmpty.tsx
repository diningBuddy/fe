import { ScrollView, View } from "react-native";

import Empty from "../../common/atom/Empty";

const SampleEmpty = () => {
  const handleButtonClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <ScrollView>
      <View>
        <Empty />

        <Empty innerText="내 주변 맛집 보러가기" onPress={handleButtonClick} />

        <Empty innerText="내 주변 맛집 보러가기" mode="secondary" onPress={handleButtonClick} />

        <Empty
          title="앗, 찾으시는 결과가 없네요."
          subtitle="혹시 다른 검색어로 찾아보시는 건 어떠세요?"
          mode="secondary"
        />

        <Empty
          subtitle="혹시 다른 검색어로 찾아보시는 건 어떠세요?"
          innerText="내 주변 맛집 보러가기"
          mode="main"
          onPress={handleButtonClick}
        />
      </View>
    </ScrollView>
  );
};

export default SampleEmpty;
