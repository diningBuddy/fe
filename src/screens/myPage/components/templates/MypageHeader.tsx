import { Button, View } from "react-native";

import userInfo from "../../../../mock/MypageMockData";
import { ChevronRight } from "../../../../assets/icons/arrow/chevron";
import Toast from "../../../../common/atom/Toast";
import { ButtonText } from "../../../../common/atom/Button";

export const MypageHeader = () => {
  return (
    <View>
      {/* <FlexBox> */}
      {/* <Profile /> */}
      {/* <FlexBox> */}
      {/* #000000D9 600 16px */}
      <span>{userInfo.nick}</span>
      <span>{userInfo.point}</span>
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
