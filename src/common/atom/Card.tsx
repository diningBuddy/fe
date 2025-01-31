import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

import { StarPink } from "../../assets/icons/shape";
import { BodySemibold14, BodySemibold16 } from "./Typo";
import { FlexBox } from "../FlexBox";

interface CardProps {
  data: Array<{
    id: number;
    img: string;
    title: string;
    grade: string;
    count: number;
    adress: string;
    category?: string;
    onPress: () => void;
  }>;
  isHorizontal?: boolean; // true = "horizontal", false = "vertical"
}

const Card: React.FC<CardProps> = ({ data, isHorizontal = true }) => {
  return (
    <View style={[styles.cardWrapper, !isHorizontal && styles.verticalWrapper]}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={item.onPress}
          activeOpacity={0.7}
          style={[styles.cardContainer, !isHorizontal && styles.verticalCard]}>
          <Image
            source={typeof item.img === "string" ? { uri: item.img } : item.img}
            style={[styles.horizontalImg, !isHorizontal && styles.verticalImg]}
          />

          <FlexBox direction="column" alignItems="flex-start" gap={4}>
            <BodySemibold16>{item.title}</BodySemibold16>

            <FlexBox alignItems="center">
              <StarPink />
              <BodySemibold14>{item.grade}</BodySemibold14>
              <Text style={styles.countText}>({item.count})</Text>
            </FlexBox>

            <Text>{item.adress}</Text>

            {!isHorizontal && item.category && <Text style={styles.categoryText}>{item.category}</Text>}
          </FlexBox>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    flexDirection: "row",
    gap: 12,
    padding: 10,
  },
  cardWrapper: {
    flexDirection: "column",
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
    marginTop: 4,
  },
  countText: {
    color: "#8C8C8C",
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6,
  },
  horizontalImg: {
    borderColor: "#00000026",
    borderRadius: 6,
    borderWidth: 1,
    height: 64,
    width: 64,
  },
  verticalCard: {
    alignItems: "flex-start",
    flexDirection: "column",
    flexGrow: 1,
  },
  verticalImg: {
    height: 158,
    width: "100%",
  },
  verticalWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Card;
