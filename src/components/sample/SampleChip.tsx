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
      <View style={styles.buttonGroup}>
        <TextChip height="sm">텍스트영역</TextChip>
        <TextChip>텍스트영역</TextChip>
        <TextChip height="lg">텍스트영역</TextChip>
        <TextChip height="lg" isDisabled>
          텍스트영역
        </TextChip>
      </View>

      <View style={styles.buttonGroup}>
        <OutlineChip isSquared height="sm">
          텍스트영역
        </OutlineChip>
        <OutlineChip isSquared>텍스트영역</OutlineChip>
        <OutlineChip isSquared>텍스트영역</OutlineChip>
        <OutlineChip height="lg" isSquared>
          텍스트영역
        </OutlineChip>
        <OutlineChip height="lg" isSquared isDisabled>
          텍스트영역
        </OutlineChip>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  buttonGroup: {
    // flexDirection: "row",
    margin: 8,
    gap: 12,
  },
});

export default SampleChip;
