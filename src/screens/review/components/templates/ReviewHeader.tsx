import { View, Text, StyleSheet } from "react-native";

import { Button, ButtonText } from "../../../../common/atom/Button";
import NavigationHeader from "../../../../common/atom/NavigationHeader";
import { FlexBox } from "../../../../common/FlexBox";
import reviewContent from "../../../../mock/ReviewMockData";

export const ReviewHeader = () => {
  return (
    <View>
      <NavigationHeader title="리뷰쓰기" isGoBackButton />

      {/* 배너 이미지 */}
      {/* <Image source={{ uri: reviewContent.imageUrl }} style={styles.image} resizeMode="cover" /> */}
      {/* 텍스트 영역 */}

      <FlexBox justifyContent="space-between" marginBottom={16}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{reviewContent.title}</Text>
        </View>
        {/* 버튼 */}
        <Button mode="outline" height="sm">
          <ButtonText mode="outline" fontSize="sm">
            식당 변경
          </ButtonText>
        </Button>
      </FlexBox>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  textContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000000D9",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
});

export default ReviewHeader;
