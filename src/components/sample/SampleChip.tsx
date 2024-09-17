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
      <TextChip>텍스트 영역</TextChip>
      <OutlineChip>텍스트 영역</OutlineChip>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  buttonGroup: {
    flexDirection: "row",
    margin: 8,
    gap: 12,
  },
});

export default SampleChip;
