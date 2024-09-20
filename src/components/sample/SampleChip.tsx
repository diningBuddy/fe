import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { OutlineChip, TextChip } from "../../common/Chip";

const SampleChip = () => {
  const [pressed, setPressed] = useState<string[]>([]);

  const itemList = [
    { id: 0, title: "동물출입" },
    { id: 1, title: "WIFI" },
    { id: 2, title: "놀이방" },
    { id: 3, title: "흡연실" },
    { id: 4, title: "주차장" },
    { id: 5, title: "휠체어사용" },
    { id: 6, title: "자전거" },
  ];

  const itemList2 = [
    { id: 0, title: "넓은" },
    { id: 1, title: "친절한" },
    { id: 2, title: "신선한" },
    { id: 3, title: "맛있는" },
    { id: 4, title: "많은 양" },
    { id: 5, title: "청결한" },
    { id: 6, title: "특별한 날" },
  ];

  const handlePress = (chipId: string) => {
    setPressed((prev) =>
      prev.includes(chipId)
        ? prev.filter((id) => id !== chipId)
        : [...prev, chipId]
    );
  };

  const isIncludes = (chipId: string): boolean => {
    return pressed.includes(chipId);
  };

  const handleChipList = (value: string) => {
    setPressed((prev) =>
      prev.includes(value)
        ? prev.filter((el) => el !== value)
        : [...prev, value]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* map */}
      <View style={styles.chipGroupList}>
        {itemList.map((item) => (
          <View key={item.id}>
            <OutlineChip
              isSelected={isIncludes(item.title)}
              onPress={() => handleChipList(item.title)}
            >
              {item.title}
            </OutlineChip>
          </View>
        ))}
      </View>

      {/* textChip map */}
      <View style={styles.chipGroupList}>
        {itemList2.map((item) => (
          <View key={item.id}>
            <TextChip
              isSelected={isIncludes(item.title)}
              onPress={() => handleChipList(item.title)}
            >
              {item.title}
            </TextChip>
          </View>
        ))}
      </View>

      <View style={styles.chipGroupWrap}>
        {/* 둥근 칩 */}
        <View style={styles.buttonGroup}>
          <OutlineChip
            height="sm"
            isSelected={pressed.includes("outline1")}
            onPress={() => handlePress("outline1")}
          >
            텍스트 SM
          </OutlineChip>
          <OutlineChip
            isSelected={pressed.includes("outline2")}
            onPress={() => handlePress("outline2")}
          >
            텍스트 MD
          </OutlineChip>
          <OutlineChip
            height="lg"
            isSelected={pressed.includes("outline3")}
            onPress={() => handlePress("outline3")}
          >
            텍스트 LG
          </OutlineChip>
          <OutlineChip height="lg" isDisabled>
            텍스트영역
          </OutlineChip>
        </View>

        {/* 네모 칩 */}
        <View style={styles.buttonGroup}>
          <OutlineChip
            isSquared
            height="sm"
            isSelected={pressed.includes("outlineSquare1")}
            onPress={() => handlePress("outlineSquare1")}
          >
            텍스트SM
          </OutlineChip>
          <OutlineChip
            isSquared
            isSelected={pressed.includes("outlineSquare2")}
            onPress={() => handlePress("outlineSquare2")}
          >
            텍스트MD
          </OutlineChip>
          <OutlineChip
            height="lg"
            isSquared
            isSelected={pressed.includes("outlineSquare3")}
            onPress={() => handlePress("outlineSquare3")}
          >
            텍스트LG
          </OutlineChip>
          <OutlineChip isSquared height="lg" isDisabled>
            텍스트LG
          </OutlineChip>
        </View>
      </View>

      {/* 둥근 팁 */}
      <View style={styles.chipGroupWrap}>
        <View style={styles.buttonGroup}>
          <TextChip
            height="sm"
            isSelected={pressed.includes("text1")}
            onPress={() => handlePress("text1")}
          >
            텍스트SM
          </TextChip>
          <TextChip
            isSelected={pressed.includes("text2")}
            onPress={() => handlePress("text2")}
          >
            텍스트MD
          </TextChip>
          <TextChip
            height="lg"
            isSelected={pressed.includes("text3")}
            onPress={() => handlePress("text3")}
          >
            텍스트LG
          </TextChip>
          <TextChip height="lg" isDisabled>
            텍스트LG
          </TextChip>
        </View>

        {/* 네모 팁 */}
        <View style={styles.buttonGroup}>
          <TextChip
            isSquared
            height="sm"
            isSelected={pressed.includes("square1")}
            onPress={() => handlePress("square1")}
          >
            텍스트SM
          </TextChip>
          <TextChip
            isSquared
            isSelected={pressed.includes("square2")}
            onPress={() => handlePress("square2")}
          >
            텍스트MD
          </TextChip>
          <TextChip
            isSquared
            height="lg"
            isSelected={pressed.includes("square3")}
            onPress={() => handlePress("square3")}
          >
            텍스트LG
          </TextChip>
          <TextChip isSquared height="lg" isDisabled>
            텍스트LG
          </TextChip>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#ffffff",
  },
  chipGroupWrap: {
    flexDirection: "row",
    padding: 12,
    gap: 12,
  },
  chipGroupList: {
    margin: 8,
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  buttonGroup: {
    margin: 8,
    gap: 12,
  },
});

export default SampleChip;
