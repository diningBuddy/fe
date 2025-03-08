import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Alert, ScrollView, View, Text, FlatList, TouchableOpacity } from "react-native";

import { FlexBox } from "../common/FlexBox";
import NavigationHeader from "../common/atom/NavigationHeader";
import { categoryItems, lunchToday } from "../mock/DiningMockData";
import Divider from "../common/atom/Divier";
import SwipeableCardList from "../components/SwipeableCardList";
import { FloatingEditButton } from "../common/atom/FloatingButton";
import BannerCarousel from "../components/Carousel/BannerCarousel";

function MainScreen() {
  const navigation = useNavigation();

  const handleMorePress = () => {
    navigation.navigate("ContentList", { category: "test" });
  };

  const handleEditClick = () => {
    Alert.alert("수정 버튼 클릭됨");
  };

  return (
    <View style={styles.container}>
      <NavigationHeader title="성균관대" isGoBackButton isSearchButton />

      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.textContainer}>
          <Text style={styles.storeName}>김문재반점</Text>
          <Text style={styles.storeInfo}>성균관대 중국요리 추천 순위</Text>
        </View>
        <BannerCarousel />

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

        <Divider size="thin" orientation="horizontal" color="#D9D9D9" />

        {/* 음식 리스트 */}
        <View style={styles.foodListContainer}>
          <FlexBox justifyContent="space-between" marginBottom={16}>
            <Text style={styles.mainTitle}>점심 맛집 정복, 오늘은 뭐 먹지?</Text>
            <TouchableOpacity onPress={handleMorePress}>
              <Text style={styles.totalView}>전체보기</Text>
            </TouchableOpacity>
          </FlexBox>

          <SwipeableCardList
            data={lunchToday.map((item) => ({
              ...item,
              onPress: () => Alert.alert(`${item.title} 선택됨`),
            }))}
            onMorePress={handleMorePress}
          />
        </View>

        <View style={styles.foodListContainer}>
          <FlexBox justifyContent="space-between" marginBottom={16}>
            <Text style={styles.mainTitle}>야식의 성지 새벽까지 든든하게</Text>
            <TouchableOpacity onPress={handleMorePress}>
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

      <FloatingEditButton onEditPress={handleEditClick} />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  categoryContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    shadowColor: "#000",
    width: "100%",
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
  contentContainer: {
    paddingBottom: 100,
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
    color: "#8C8C8C",
    fontSize: 14,
    fontWeight: "500",
  },
});
