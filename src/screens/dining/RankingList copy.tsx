import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Button, Text, TouchableOpacity } from "react-native";

import { BodySemibold14, BodySemibold16, HeadingRegular20 } from "../../common/atom/Typo";
import Toast from "../../common/atom/Toast";
import Tabs from "../../common/atom/Tab";

interface ToastHandle {
  showToast: () => void;
}

export const RankingList = () => {
  const tabs = [
    { label: "카테고리", value: "category" },
    { label: "한식", value: "korean", recentAlarm: <Text>알람</Text> },
    { label: "중식", value: "chinese" },
    { label: "일식", value: "japen" },
  ];

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
    { id: 0, title: "한식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
    { id: 1, title: "양식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
    { id: 2, title: "일식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
    { id: 3, title: "중식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
  ];

  const midnightMeal = [
    { id: 0, title: "한식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
    { id: 1, title: "양식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
    { id: 2, title: "일식", icon: "", grade: "4.8", address: "서울시 강남구 15m" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tabs tabs={tabs}>
        <Text>Tab 1 카테고리</Text>
        <Text>Tab 2 한식</Text>
        <Text>Tab 3 중식</Text>
        <Text>Tab 4 일식</Text>
      </Tabs>
      {/* Category Items */}
      {/* <View style={styles.categoryContainer}>
        {categoryItems.map((item) => (
          <Text key={item.id} style={styles.categoryText}>
            {item.title}
          </Text>
        ))}
      </View> */}

      {/* Lunch Section */}
      {/* <View style={styles.section}>
        <HeadingRegular20>점심 맛집 정복, 오늘은 뭐 먹지?</HeadingRegular20>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>전체보기</Text>
        </TouchableOpacity>
        {lunchToday.map((item) => (
          <View key={item.id} style={styles.card}>
            <BodySemibold16>{item.title}</BodySemibold16>
            <BodySemibold14>{item.grade}</BodySemibold14>
            <Text>{item.address}</Text>
          </View>
        ))}
      </View> */}

      {/* Midnight Meal Section */}
      <View style={styles.section}>
        <HeadingRegular20>야식의 성지 새벽까지 든든하게</HeadingRegular20>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>전체보기</Text>
        </TouchableOpacity>
        {midnightMeal.map((item) => (
          <View key={item.id} style={styles.card}>
            <BodySemibold16>{item.title}</BodySemibold16>
            <BodySemibold14>{item.grade}</BodySemibold14>
            <Text>{item.address}</Text>
          </View>
        ))}
      </View>

      <Toast ref={toastRef} message="안녕하세요, {닉네임}님!" variant={toastVariant} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 18,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 12,
  },
  categoryText: {
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  section: {
    width: "100%",
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    width: "100%",
  },
});

export default RankingList;
