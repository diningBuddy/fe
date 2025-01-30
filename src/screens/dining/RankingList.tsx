import React, { useState } from "react";
import { ScrollView, StyleSheet, FlatList, Text, Alert, View, ImageBackground } from "react-native";

import Tabs from "../../common/atom/Tab";
import { Filter } from "../../assets/icons/time";
import { OutlineChip } from "../../common/atom/Chip";
import Card from "../../common/atom/Card";
import { lunchToday } from "../../mock/DiningMockData";
import { FlexBox } from "../../common/FlexBox";
import getRankColor from "../../utils/getRankColor";
import RankingListBanner from "../../assets/images/sample/rankingList-banner.png";
// import { LinearGradient } from "expo-linear-gradient";

const RankingList = () => {
  const [pressed, setPressed] = useState<string[]>([]);

  const tabs = [
    { label: "전체", value: "total" },
    { label: "한식", value: "korean" },
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
    <View style={styles.container}>
      <ImageBackground source={RankingListBanner} style={styles.banner}>
        {/* <LinearGradient
                 colors={["transparent", "rgba(255,255,255,0.8)", "rgba(255,255,255,1)"]} 
              style={styles.gradientOverlay}
               /> */}

        <Text style={styles.headerTitle}>성균관대 추천 순위</Text>
      </ImageBackground>
      <Tabs tabs={tabs}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <FlexBox justifyContent="space-between" gap={8} marginBottom={16}>
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
              scrollEnabled={false}
            />
            <Filter />
          </FlexBox>

          <FlatList
            data={lunchToday.slice(0, 20)}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => {
              const rankColor = getRankColor(index);
              return (
                <FlexBox gap={12} marginLeft={16} justifyContent="flex-start">
                  <Text style={[styles.rankText, { color: rankColor }]}>{index + 1}</Text>
                  <Card
                    data={[
                      {
                        ...item,
                        onPress: () => Alert.alert("클릭 시 상세페이지"),
                      },
                    ]}
                  />
                </FlexBox>
              );
            }}
          />
        </ScrollView>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text>Tab 2 한식</Text>
        </ScrollView>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text>Tab 3 중식</Text>
        </ScrollView>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text>Tab 4 일식</Text>
        </ScrollView>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    justifyContent: "flex-end",
    minHeight: 180,
    position: "relative",
    width: "100%",
  },
  chipGroupList: {
    gap: 8,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    position: "absolute",
    right: 130,
    top: 50,
  },
  rankText: {
    fontSize: 17,
    fontWeight: 600,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default RankingList;
