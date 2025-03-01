import React, { useRef } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const Carousel = require("react-native-snap-carousel").default;

const MyCarousel = Carousel as any;

const { width } = Dimensions.get("window");

const banners = [
  { id: "1", image: require("../../assets/images/sample/carousels/banner1.png") },
  { id: "2", image: require("../../assets/images/sample/carousels/banner2.png") },
  { id: "3", image: require("../../assets/images/sample/carousels/banner3.png") },
];

const BannerCarousel = () => {
  const carouselRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <MyCarousel
        ref={carouselRef}
        data={banners}
        renderItem={({ item }: { item: { image: any } }) => <Image source={item.image} style={styles.bannerImage} />}
        sliderWidth={width}
        itemWidth={width - 32}
        loop
        autoplay
        autoplayInterval={5000}
        inactiveSlideScale={0.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  bannerImage: {
    width: width - 32,
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
  },
});

export default BannerCarousel;
