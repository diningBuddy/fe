import { Button, View } from "react-native";

import { ChevronRight } from "../../../../assets/icons/arrow/chevron";
import Toast from "../../../../common/atom/Toast";
import { ButtonText } from "../../../../common/atom/Button";
import Tag from "../../../../common/atom/Tag";
import { BodyMedium14, BodySemibold16 } from "../../../../common/atom/Typo";
import { Coin } from "../../../../assets/icons/shape";
import { userInfo } from "../../../../mock/MypageMockData";

export const MypageHeader = () => {
  return (
    <View>
      {/* <FlexBox> */}
      {/* <Profile /> */}

      {/* <FlexBox> */}
      <BodySemibold16>{userInfo.nick}</BodySemibold16>
      <Tag mode="primary" outline label="성균관대" height="sm" />
      {/* <FlexBox> */}
      <Coin />
      <BodyMedium14>{userInfo.point}</BodyMedium14>
      {/* </FlexBox> */}
      {/* </FlexBox> */}
      <ChevronRight />
      {/* </FlexBox> */}

      {/* bgColor: #F0F0F0 */}
      <Toast message="내 정보 완성하면 추천 정확도가 올라가요." />

      <Button iconL={ChevronRight}>
        <ButtonText>학생 인증하기</ButtonText>
      </Button>
    </View>
  );
};

export default MypageHeader;
