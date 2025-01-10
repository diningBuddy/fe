import React from "react";
import { View } from "react-native";

import { BodyMedium14 } from "../../../common/atom/Typo";
import Tag from "../../../common/atom/Tag";

export const RegistPhoto = () => {
  return (
    <View>
      {/* <FlexBox> TODO common style */}
      {/* #000000D9 400 14px */}
      <BodyMedium14>사진 등록 (선택)</BodyMedium14>
      <Tag mode="primary" outline label="사진 등록시 12P 지급!" height="sm" />
      {/* </FlexBox> */}

      {/* PhotoContent */}
    </View>
  );
};

export default RegistPhoto;
