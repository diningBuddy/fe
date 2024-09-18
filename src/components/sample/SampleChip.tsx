import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { OutlineChip, TextChip } from "../../common/Chip";

const SampleChip = () => {
  const [pressedChip, setPressedChip] = useState<string | null>(null);

  const handlePress = (chipId: string) => {
    setPressedChip(chipId === pressedChip ? null : chipId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 둥근 팁 */}
      <View style={styles.chipGroupWrap}>
        <View style={styles.buttonGroup}>
          <TextChip height="sm">텍스트영역</TextChip>
          <TextChip>텍스트영역</TextChip>
          <TextChip height="lg">텍스트영역</TextChip>
          <TextChip height="lg" isDisabled>
            텍스트영역
          </TextChip>
        </View>

        {/* 네모 팁 */}
        <View style={styles.buttonGroup}>
          <TextChip isSquared height="sm">
            텍스트영역
          </TextChip>
          <TextChip isSquared>텍스트영역</TextChip>
          <TextChip isSquared height="lg">
            텍스트영역
          </TextChip>
          <TextChip isSquared height="lg" isDisabled>
            텍스트영역
          </TextChip>
        </View>
      </View>
      <View style={styles.chipGroupWrap}>
        {/* 둥근 칩 */}
        <View style={styles.buttonGroup}>
          <OutlineChip height="sm">텍스트 SM</OutlineChip>
          <OutlineChip>텍스트 MD</OutlineChip>
          <OutlineChip height="lg">텍스트 LG</OutlineChip>
          <OutlineChip height="lg" isDisabled>
            텍스트영역
          </OutlineChip>
        </View>

        {/* 네모 칩 */}
        <View style={styles.buttonGroup}>
          <OutlineChip isSquared height="sm">
            텍스트영역
          </OutlineChip>
          <OutlineChip isSquared>텍스트영역</OutlineChip>
          <OutlineChip height="lg" isSquared>
            텍스트영역
          </OutlineChip>
          <OutlineChip height="lg" isSquared isDisabled>
            텍스트영역
          </OutlineChip>
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
