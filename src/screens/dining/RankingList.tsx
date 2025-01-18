import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";

import { HeadingRegular20 } from "../../common/atom/Typo";
import { ButtonText } from "../../common/atom/Button";
import Toast from "../../common/atom/Toast";

interface ToastHandle {
  showToast: () => void;
}
export const DiningPage = () => {
  const toastRef = React.createRef<ToastHandle>();
  const [pressed, setPressed] = useState<string[]>([]);
  const [toastVariant, setToastVariant] = useState<string | null>(null);

  const categoryItems = [
    { id: 0, title: "한식", icon: "" },
    { id: 1, title: "양식", icon: "" },
    { id: 2, title: "일식", icon: "" },
    { id: 3, title: "중식", icon: "" },
    { id: 4, title: "분식", icon: "" },
    { id: 5, title: "치킨", icon: "" },
    { id: 6, title: "피자", icon: "" },
    { id: 7, title: "버거", icon: "" },
    { id: 8, title: "아시안", icon: "" },
    { id: 9, title: "카페", icon: "" },
  ];

  const lunchToday = [
    { id: 0, title: "한식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 1, title: "양식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 2, title: "일식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 3, title: "중식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 4, title: "분식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 5, title: "치킨", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 6, title: "피자", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 7, title: "버거", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
  ];

  const midnightMeal = [
    { id: 0, title: "한식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 1, title: "양식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 2, title: "일식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 3, title: "중식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 4, title: "분식", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 5, title: "치킨", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 6, title: "피자", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
    { id: 7, title: "버거", icon: "", grade: "4.8", adress: "서울시 강남구 15m" },
  ];

  return (
    // DOTO : 스크롤 공통 스타일 적용
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {categoryItems.map((item) => (
          <View key={item.id}>{item.title}</View>
        ))}
      </View>

      {/* <Divider /> */}

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
          <div>
            <BodySemibold16>{item.title}</BodySemibold16>
            {/* <star />  TODO: icon 추가 */}
            <BodySemibold14>{item.grade}</BodySemibold14>
            <p>{item.adress}</p>
          </div>
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
          // <div>
          //   <BodySemibold16>{item.title}</BodySemibold16>
          //   {/* <star />  TODO: icon 추가 */}
          //   <BodySemibold14>{item.grade}</BodySemibold14>
          //   <p>{item.adress}</p>
          // </div>
        ))}
      </View>

      <Toast ref={toastRef} message="안녕하세요, {닉네임}님!" variant={toastVariant} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 12,
    margin: 8,
  },
  chipGroupList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    margin: 8,
  },
  chipGroupWrap: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },
});

export default DiningPage;
