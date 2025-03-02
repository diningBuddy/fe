import React from "react";
import { View, StyleSheet } from "react-native";

import { BodyMedium14 } from "../../../common/atom/Typo";
import Tag from "../../../common/atom/Tag";
import TextArea from "../../../common/atom/TextAre";
import { FlexBox } from "../../../common/FlexBox";

export const RegistReview = () => {
  return (
    <View style={styles.reviewContainer}>
      <FlexBox justifyContent="space-between" marginTop={16} marginBottom={16}>
        <BodyMedium14>리뷰 작성 (선택)</BodyMedium14>
        <Tag mode="primary" outline label="작성 시 포인트 5P 지급!" height="sm" />
      </FlexBox>
      <TextArea
        variant="default"
        placeholder="다녀오신 식당은 어떠셨나요? 사진과 함께 자세히 작어주시면 다른 유저들에게 도움이 돼요! (선택)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    paddingHorizontal: 16,
  },
});

export default RegistReview;
