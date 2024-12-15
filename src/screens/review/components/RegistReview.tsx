import React from "react";
import { View } from "react-native";

import { BodyMedium14 } from "../../../common/atom/Typo";
import Tag from "../../../common/atom/Tag";
import TextArea from "../../../common/atom/TextAre";

export const RegistReview = () => {
  return (
    <View>
      {/* <FlexBox> TODO common style */}
      {/* #000000D9 400 14px */}
      <BodyMedium14>리뷰 작성 (선택)</BodyMedium14>
      <Tag mode="primary" outline label="작성 시 포인트 5P 지급!" height="sm" />
      {/* </FlexBox> */}
      <TextArea
        variant="default"
        description="regist review content"
        placeholder="다녀오신 식당은 어떠셨나요? 사진과 함께 자세히 작어주시면 다른 유저들에게 도움이 돼요! (선택)"
      />
    </View>
  );
};

export default RegistReview;
