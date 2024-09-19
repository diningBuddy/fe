import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { OutlineChip, TextChip } from "../../common/Chip";

const SampleChip = () => {
  const [pressed, setPressed] = useState<string | null>(null);

  const handlePress = (chipId: string) => {
    setPressed(chipId === pressed ? null : chipId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.chipGroupWrap}>
        {/* 둥근 칩 */}
        <View style={styles.buttonGroup}>
          <OutlineChip
            height="sm"
            isSelected={pressed === "outline1"}
            onPress={() => handlePress("outline1")}
          >
            텍스트 SM
          </OutlineChip>
          <OutlineChip
            isSelected={pressed === "outline2"}
            onPress={() => handlePress("outline2")}
          >
            텍스트 MD
          </OutlineChip>
          <OutlineChip
            height="lg"
            isSelected={pressed === "outline3"}
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
            isSelected={pressed === "outlineSquare1"}
            onPress={() => handlePress("outlineSquare1")}
          >
            텍스트영역
          </OutlineChip>
          <OutlineChip
            isSquared
            isSelected={pressed === "outlineSquare2"}
            onPress={() => handlePress("outlineSquare2")}
          >
            텍스트영역
          </OutlineChip>
          <OutlineChip
            height="lg"
            isSquared
            isSelected={pressed === "outlineSquare3"}
            onPress={() => handlePress("outlineSquare3")}
          >
            텍스트영역
          </OutlineChip>
          <OutlineChip isSquared height="lg" isDisabled>
            텍스트영역
          </OutlineChip>
        </View>
      </View>
      {/* 둥근 팁 */}
      <View style={styles.chipGroupWrap}>
        <View style={styles.buttonGroup}>
          <TextChip
            height="sm"
            isSelected={pressed === "text1"}
            onPress={() => handlePress("text1")}
          >
            텍스트영역
          </TextChip>
          <TextChip
            isSelected={pressed === "text2"}
            onPress={() => handlePress("text2")}
          >
            텍스트영역
          </TextChip>
          <TextChip
            height="lg"
            isSelected={pressed === "text3"}
            onPress={() => handlePress("text3")}
          >
            텍스트영역
          </TextChip>
          <TextChip height="lg" isDisabled>
            텍스트영역
          </TextChip>
        </View>

        {/* 네모 팁 */}
        <View style={styles.buttonGroup}>
          <TextChip
            isSquared
            height="sm"
            isSelected={pressed === "square1"}
            onPress={() => handlePress("square1")}
          >
            텍스트영역
          </TextChip>
          <TextChip
            isSquared
            isSelected={pressed === "square2"}
            onPress={() => handlePress("square2")}
          >
            텍스트영역
          </TextChip>
          <TextChip
            isSquared
            height="lg"
            isSelected={pressed === "square3"}
            onPress={() => handlePress("square3")}
          >
            텍스트영역
          </TextChip>
          <TextChip isSquared height="lg" isDisabled>
            텍스트영역
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
    padding: 24,
    backgroundColor: "#ffffff",
  },
  chipGroupWrap: {
    flexDirection: "row",
    padding: 24,
    gap: 12,
  },
  buttonGroup: {
    margin: 8,
    gap: 12,
  },
});

export default SampleChip;
