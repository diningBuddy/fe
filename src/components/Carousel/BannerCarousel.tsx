import React, { useRef, useEffect, useState } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

const banners = [
  { id: "1", image: require("../../assets/images/sample/carousels/banner1.png") },
  { id: "2", image: require("../../assets/images/sample/carousels/banner2.png") },
  { id: "3", image: require("../../assets/images/sample/carousels/banner3.png") },
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
    // borderWidth: 1,
    // borderColor: "#D9D9D9",
  },
  bannerImage: {
    borderRadius: 12,
    height: 180,
    width: width - 32,
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
    // borderWidth: 1,
    // borderColor: "#BFBFBF",
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
  },
  pagerView: {
    height: 180,
    width: width - 32,
  },
});

export default BannerCarousel;
