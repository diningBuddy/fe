import React from "react";
import { ScrollView, StyleSheet, ImageBackground, Text, View, FlatList, Alert, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

import { Divider } from "react-native-paper";
import CarouselBanner from "../assets/images/sample/carousels/banner1.png";
import CarouselBanner2 from "../assets/images/sample/carousels/banner2.png";
import CarouselBanner3 from "../assets/images/sample/carousels/banner3.png";

import { categoryItems, lunchToday } from "../mock/DiningMockData";
import { useNavigation } from "@react-navigation/native";
import Card from "../common/atom/Card";
import { FlexBox } from "../common/FlexBox";
import BannerCarousel from "../components/Carousel/BannerCarousel";
import { RootStackParamList, RouteNames } from "../utils/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NavigationHeader from "../common/atom/NavigationHeader";
import SwipeableCard from "../common/atom/SwipeableCard";
import SwipeableCardList from "../components/SwipeableCardList";

function MainScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <NavigationHeader title="성균관대" isGoBackButton isSearchButton />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.bannerContainer}>
          {/* <BannerCarousel /> */}
          <ImageBackground source={CarouselBanner} style={styles.bannerWrap} imageStyle={styles.bannerImage}>
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
            columnWrapperStyle={styles.categoryRow}
          />
        </View>

        <Divider size="thin" orientation="horizontal" color="#000000" />

        <View style={styles.foodListContainer}>
          <FlexBox justifyContent="space-between" marginBottom={16}>
            <Text style={styles.mainTitle}>점심 맛집 정복, 오늘은 뭐 먹지?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(RouteNames.CONTENT_LIST)}>
              <Text style={styles.totalView}>전체보기</Text>
            </TouchableOpacity>
          </FlexBox>

          <SwipeableCardList
            data={lunchToday.map((item) => ({
              ...item,
              onPress: () => Alert.alert(`${item.title} 선택됨`),
            }))}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  bannerImage: {
    borderRadius: 12,
  },
  bannerWrap: {
    borderRadius: 12,
    minHeight: 180,
  },
  categoryContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
  },
  categoryItem: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 4,
  },
  categoryRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  categoryText: {
    color: "#444",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 8,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 20,
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
  totalView: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8C8C8C",
  },
});

export default MainScreen;
