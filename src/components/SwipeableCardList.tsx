import { ChevronRight } from "lucide-react-native";
import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";

import SwipeableCard from "../common/atom/SwipeableCard";

interface SwipeableCardListProps {
  data: Array<{
    id: number;
    img: string;
    title: string;
    grade: string;
    count: number;
    address: string;
    category?: string;
    onPress: () => void;
  }>;
  onMorePress: () => void;
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = ({ data, onMorePress }) => {
  const extendedData = [
    ...data,
    {
      id: -1,
      img: "",
      title: "더보기",
      grade: "",
      count: 0,
      address: "",
      category: "",
      onPress: onMorePress,
    },
  ];

  return (
    <FlatList
      data={extendedData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>
        item.id !== -1 ? (
          <SwipeableCard {...item} />
        ) : (
          <View style={styles.moreButtonWrapper}>
            <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
              <ChevronRight size={18} color="#000" />
            </TouchableOpacity>
            <Text style={styles.moreText}>더보기</Text>
          </View>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  moreButton: {
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 50,
    borderWidth: 1,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  moreButtonWrapper: {
    alignItems: "center",
    flex: 1,
    gap: 6,
    justifyContent: "center",
    marginLeft: 20,
  },
  moreText: {
    color: "#8C8C8C",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default SwipeableCardList;
