import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Tabs from "../../common/atom/Tab";
import { Filter } from "../../assets/icons/time";
import { OutlineChip } from "../../common/atom/Chip";

const RankingList = () => {
  const [pressed, setPressed] = useState<string[]>([]);

  const tabs = [
    { label: "전체", value: "total" },
    { label: "한식", value: "korean", recentAlarm: <Text>알람</Text> },
    { label: "양식", value: "western" },
    { label: "일식", value: "japanese" },
    { label: "중식", value: "chinese" },
    { label: "분식", value: "snack" },
  ];

  const itemList = [
    { id: 0, title: "동물출입" },
    { id: 1, title: "WIFI" },
    { id: 2, title: "놀이방" },
    { id: 3, title: "흡연실" },
    { id: 4, title: "주차장" },
    { id: 5, title: "휠체어사용" },
    { id: 6, title: "자전거" },
  ];

  const isIncludes = (chipId: string): boolean => pressed.includes(chipId);

  const handleChipList = (value: string) => {
    setPressed((prev) => (prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]));
  };

  return (
    <Tabs tabs={tabs}>
      {/* Tab 1 Content */}
      <View style={styles.container}>
        <FlatList
          data={itemList}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <OutlineChip isSelected={isIncludes(item.title)} onPress={() => handleChipList(item.title)}>
              {item.title}
            </OutlineChip>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipGroupList}
        />
        <Filter />
      </View>

      {/* Tab 2 Content */}
      <View>
        <Text>Tab 2 한식</Text>
      </View>

      {/* Tab 3 Content */}
      <View>
        <Text>Tab 3 중식</Text>
      </View>

      {/* Tab 4 Content */}
      <View>
        <Text>Tab 4 일식</Text>
      </View>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  chipGroupList: {
    gap: 8,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
});

export default RankingList;
