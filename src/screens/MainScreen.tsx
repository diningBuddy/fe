import React from "react";
import { ScrollView, StyleSheet, ImageBackground, Text, View, FlatList, Alert } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

import { Divider } from "react-native-paper";
import CarouselBanner from "../assets/images/sample/carousels/banner1.png";
import { categoryItems, lunchToday } from "../mock/DiningMockData";

import Card from "../common/atom/Card";

function MainScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 배너 영역 */}
      <View style={styles.bannerContainer}>
        <ImageBackground source={CarouselBanner} style={styles.banner} imageStyle={styles.bannerImage}>
          {/* 아래쪽 그라데이션 효과 */}
          {/* <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)"]} style={styles.gradientOverlay} /> */}

          {/* 배너 안의 텍스트 */}
          <View style={styles.textContainer}>
            <Text style={styles.storeName}>김문재반점</Text>
            <Text style={styles.storeInfo}>성균관대 중국요리 추천 순위</Text>
          </View>
        </ImageBackground>
      </View>

      {/* 카테고리 리스트 */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryItems}
          numColumns={5}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <item.icon width={40} height={40} />
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <Divider size="thin" orientation="horizontal" color="#000000" />

      <View style={styles.foodListContainer}>
        <Text style={styles.mainTitle}>점심 맛집 정복, 오늘은 뭐 먹지?</Text>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <Card
            isHorizontal={false}
            data={lunchToday.map((item) => ({
              ...item,
              onPress: () => Alert.alert("가로형 카드 컴포넌트"),
            }))}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },

  banner: {
    borderRadius: 12,
    minHeight: 180,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  bannerContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  bannerImage: {
    borderRadius: 12,
  },
  categoryContainer: {
    margin: 16,
    padding: 16,
    shadowColor: "#000",
  },
  categoryItem: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  categoryText: {
    color: "#444",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 8,
  },
  container: {
    flexGrow: 1,
  },
  foodListContainer: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  storeInfo: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },

  storeName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  textContainer: {
    left: 16,
    position: "absolute",
    top: 20,
  },
});

export default MainScreen;
