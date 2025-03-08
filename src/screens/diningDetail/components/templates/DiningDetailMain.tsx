import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import { BodySemibold14, BodySemibold16, HeadingRegular20 } from "../../../../common/atom/Typo";
import { lunchToday, midnightMeal } from "../../../../mock/DiningMockData";
import { ButtonText } from "../../../../common/atom/Button";

export const DiningDetailMain = () => {
  return (
    <>
      {/* DOTO : 스크롤 공통 스타일 적용 */}
      <View>
        {/* TODO: <FlexBox>  common style 추가 */}
        <HeadingRegular20>점심 맛집 정복, 오늘은 뭐 먹지?</HeadingRegular20>

        {/* TODO: <ButtonText>를 Button 컴포넌트에 적용 */}
        <Button mode="text" height="sm" isDisabled>
          <ButtonText mode="outline" fontSize="sm" isDisabled>
            전체보기
          </ButtonText>
        </Button>
        {/* </FlexBox> */}

        {/* TODO： <Card /> 추가 */}
        {lunchToday.map((item) => (
          <View key={item.id} style={styles.diningItem}>
            <BodySemibold16>{item.title}</BodySemibold16>
            {/* <star />  TODO: icon 추가 */}
            <BodySemibold14>{item.grade}</BodySemibold14>
            <Text>{item.address}</Text>
          </View>
        ))}
      </View>
      <View>
        {/* TODO: <FlexBox>  common style 추가 */}
        <HeadingRegular20>야식의 성지 새벽까지 든든하게 </HeadingRegular20>

        {/* TODO: <ButtonText>를 Button 컴포넌트에 적용 */}
        <Button mode="text" height="sm" isDisabled>
          <ButtonText mode="outline" fontSize="sm" isDisabled>
            전체보기
          </ButtonText>
        </Button>
        {/* </FlexBox> */}

        {/* TODO： <Card /> 추가 */}
        {midnightMeal.map((item) => (
          <View key={item.id} style={styles.diningItem}>
            <BodySemibold16>{item.title}</BodySemibold16>
            {/* <star />  TODO: icon 추가 */}
            <BodySemibold14>{item.grade}</BodySemibold14>
            <Text>{item.address}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  diningItem: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default DiningDetailMain;
