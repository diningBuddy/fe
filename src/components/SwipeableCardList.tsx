import React from "react";
import { FlatList } from "react-native";

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
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <SwipeableCard {...item} />}
    />
  );
};

export default SwipeableCardList;
