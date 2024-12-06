import { View } from "react-native";

import Empty from "../../../../common/atom/Empty";

export const MypageMain = () => {
  const handleButtonClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <View>
      {/* #000000D9 500 14px  */}
      <span>전체</span>

      {/* Tab1 찜한 매장 */}
      <Empty
        title="찜한 가게가 없어요"
        subtitle="가게을 찜하고 즐겨찾기 할 수 있어요"
        innerText="내 주변 맛집 보기"
        mode="secondary"
        onPress={handleButtonClick}
      />

      {/* Tab2  내가 쓴 리뷰 */}
      <Empty
        title="아직 등록된 리뷰가 없어요"
        subtitle="리뷰를 작성하면 포인트를 얻을 수 있어요."
        innerText="리뷰 작성하기"
        mode="secondary"
        onPress={handleButtonClick}
      />
    </View>
  );
};

export default MypageMain;
