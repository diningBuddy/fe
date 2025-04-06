import { ImageBackground, TouchableOpacity, View, StyleSheet, Text, FlatList } from "react-native";

import { Bookmark } from "../../../../assets/icons/general";
import { HeartBlank } from "../../../../assets/icons/shape";
import { OutlineChip } from "../../../../common/atom/Chip";
import Star from "../../../../common/atom/Star";
import { BodyMedium14, BodyMedium16, BodyRegular12, BodySemibold16 } from "../../../../common/atom/Typo";
import { categoryList } from "../../../../mock/DiningMockData";

export const DiningDetailHeader = () => {
  return (
    <View style={styles.container}>
      {/* 배너 섹션 */}
      <ImageBackground source={{ uri: "https://example.com/banner-image.jpg" }} style={styles.bannerContainer}>
        <TouchableOpacity style={styles.likeWrap}>
          <HeartBlank />
        </TouchableOpacity>
      </ImageBackground>

      {/* 매장 이름 및 리뷰 섹션 */}
      <View style={styles.headerContent}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          흑도토리편백집현대프리미엄아울렛글자길이가길경우는줄바꿈이일어남
        </Text>
        <View style={styles.reviewSection}>
          <Star />
          <BodySemibold16 style={styles.rating}>0.0</BodySemibold16>
          <BodyMedium16 style={styles.reviewText}>0개의 리뷰</BodyMedium16>
          <Bookmark />
        </View>
      </View>

      {/* 카테고리 리스트 */}
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <OutlineChip>
            <Text>{item.title}</Text>
          </OutlineChip>
        )}
      />

      {/* 섹션 정보 */}
      <View style={styles.infoSection}>
        <Text>영업정보</Text>
        <Text>위치정보</Text>
        <Text>편의시설</Text>
        <Text>매장소개</Text>
        <BodyMedium14 style={styles.infoContent}>
          이곳은 매장 소개 섹션입니다. 여기에는 매장에 대한 간단한 정보가 표시됩니다.
        </BodyMedium14>
        <BodyRegular12>더보기</BodyRegular12>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "flex-end",
    height: 200,
    justifyContent: "flex-end",
    padding: 16,
    width: "100%",
  },
  categoryList: {
    marginVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  headerContent: {
    marginVertical: 16,
  },
  infoContent: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  infoSection: {
    marginTop: 16,
  },
  likeWrap: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
  },
  rating: {
    marginHorizontal: 8,
    fontSize: 16,
    color: "#333",
  },
  reviewSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  reviewText: {
    marginRight: 8,
    fontSize: 14,
    color: "#555",
  },
});

export default DiningDetailHeader;
