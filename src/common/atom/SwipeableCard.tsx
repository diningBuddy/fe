import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { StarPink } from "../../assets/icons/shape";
import { BodySemibold14, BodySemibold16 } from "./Typo";
import { FlexBox } from "../FlexBox";

interface SwipeableCardProps {
  img?: string;
  title: string;
  grade?: string;
  count?: number;
  address?: string;
  onPress: () => void;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ img, title, grade = "0.0", count = 0, address, onPress }) => {
  const imageSource =
    img && typeof img === "string" ? { uri: img } : require("../../assets/images/sample/vertical-food.png");

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${grade}`}
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />

      <FlexBox direction="column" alignItems="flex-start" gap={4} marginTop={12}>
        <BodySemibold16 numberOfLines={1} ellipsizeMode="tail">
          {title}
        </BodySemibold16>

        <FlexBox alignItems="center">
          <StarPink />
          <BodySemibold14>{grade}</BodySemibold14>
          <Text style={styles.countText}>({count})</Text>
        </FlexBox>

        <Text numberOfLines={1} ellipsizeMode="tail">
          {address}
        </Text>
      </FlexBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "transparent",
    marginRight: 12,
    overflow: "hidden",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 180,
  },
  countText: {
    color: "#8C8C8C",
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6,
  },

  image: {
    borderRadius: 8,
    height: 180,
    width: "100%",
  },
});

export default SwipeableCard;
