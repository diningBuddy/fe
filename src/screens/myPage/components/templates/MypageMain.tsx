import { View } from "react-native";

import { ChevronRight } from "../../../../assets/icons/arrow/chevron";
import { Kebob } from "../../../../assets/icons/shape";
import Empty from "../../../../common/atom/Empty";
import Tabs from "../../../../common/atom/Tab";
import { BodyMedium14, BodyRegular12, BodySemibold14 } from "../../../../common/atom/Typo";
import { bookmarkList, myReviewList } from "../../../../mock/MypageMockData";

export const MypageMain = () => {
  const tabs = [
    { label: "찜한 매장", value: "favoriteStores" },
    { label: "내가 쓴 리뷰", value: "myReview" },
  ];

  const handleButtonClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <View>
      {/* #000000D9 500 14px  */}
      <span>전체</span>
      <Tabs tabs={tabs}>
        {/* Tab1 찜한 매장 */}
        <View>
          {/* #000000E5 */}
          {/* <FlexBox > */}
          <BodySemibold14>전체 {bookmarkList.length}</BodySemibold14>
          {/* </FlexBox> */}
          {bookmarkList ? (
            bookmarkList.map((item) => (
              <View key={item.id}>
                {item.title}
                {item.category}
                {item.isLike}
              </View>
            ))
          ) : (
            <Empty
              title="찜한 가게가 없어요"
              subtitle="가게를 찜하고 즐겨찾기 할 수 있어요"
              innerText="내 주변 맛집 보기"
              mode="secondary"
              onPress={handleButtonClick}
            />
          )}
        </View>

        {/* Tab2  내가 쓴 리뷰 */}
        <View>
          {/* test */}
          {/* #000000E5 */}
          {myReviewList ? (
            myReviewList.map((item) => (
              <View key={item.id}>
                {/* <FlexBox justifyContent='space-between'> */}
                <View>
                  {item.category}
                  {item.title}
                </View>
                {/* <FlexBox gap="12"> */}
                {item.mainImg}
                <ChevronRight />
                {/* </FlexBox> */}
                {/* </FlexBox> */}

                {/* <FlexBox justifyContent='space-between'> */}
                {/* <Star/> */}
                {item.createAt}
                <Kebob />
                {/* </FlexBox> */}

                {/* 이미지 */}

                <BodyMedium14>{item.content}</BodyMedium14>

                <BodyRegular12>더보기</BodyRegular12>

                <BodyMedium14>{item.likeCount} 도움돼요.</BodyMedium14>
              </View>
            ))
          ) : (
            <Empty
              title="아직 등록된 리뷰가 없어요"
              subtitle="리뷰를 작성하면 포인트를 얻을 수 있어요."
              innerText="리뷰 작성하기"
              mode="secondary"
              onPress={handleButtonClick}
            />
          )}
          {/* test */}
        </View>
      </Tabs>
    </View>
  );
};

export default MypageMain;
