import { View } from "react-native";

import Tag from "../../../common/atom/Tag";
import { BodyMedium14 } from "../../../common/atom/Typo";
import { FlexBox } from "../../../common/FlexBox";

export const RegistPhoto = () => {
  return (
    <View>
      <FlexBox justifyContent="space-between" margin={16}>
        <BodyMedium14>사진 등록 (선택)</BodyMedium14>
        <Tag mode="primary" outline label="사진 등록시 12P 지급!" height="sm" />
      </FlexBox>

      {/* PhotoContent */}
    </View>
  );
};

export default RegistPhoto;
