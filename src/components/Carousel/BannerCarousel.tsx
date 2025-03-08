import React, { useRef, useEffect, useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

const banners = [
  {
    id: "1",
    storeName: "차이홍",
    schoolName: "성균관대",
    category: "중식",
    image: require("../../assets/images/sample/carousels/banner1.png"),
  },
  {
    id: "2",
    storeName: "스시냠냠",
    schoolName: "중앙대",
    category: "일식",
    image: require("../../assets/images/sample/carousels/banner2.png"),
  },
  {
    id: "3",
    storeName: "타코타코",
    schoolName: "한양대",
    category: "아시안",
    image: require("../../assets/images/sample/carousels/banner3.png"),
  },
];

const BannerCarousel = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let page = 0;
    const interval = setInterval(() => {
      page = (page + 1) % banners.length;
      pagerRef.current?.setPage(page);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        {banners.map((item) => (
          <View key={item.id} style={styles.page}>
            <Image source={item.image} style={styles.bannerImage} resizeMode="cover" />

            <View style={styles.bannerTextWrap}>
              <Text style={styles.storeName}>{item.storeName}</Text>
              <Text style={styles.schoolCategory}>
                {item.schoolName} • {item.category}
              </Text>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View key={index} style={[styles.indicatorDot, currentPage === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: "#fff",
  },
  bannerImage: {
    borderRadius: 12,
    height: 180,
    width: width - 32,
  },
  bannerTextWrap: {
    left: 16,
    position: "absolute",
    top: 16,
  },
  container: {
    alignItems: "center",
  },
  indicatorContainer: {
    alignSelf: "flex-end",
    bottom: 16,
    flexDirection: "row",
    paddingRight: 32,
    position: "absolute",
  },
  indicatorDot: {
    backgroundColor: "#00000026",
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  pagerView: {
    height: 180,
    width: width - 32,
  },
  schoolCategory: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  storeName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default BannerCarousel;
