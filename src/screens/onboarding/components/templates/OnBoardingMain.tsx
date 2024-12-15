import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { facilityList, modeList } from "../../../../mock/OnboardingMockData";
import { OutlineChip } from "../../../../common/atom/Chip";

const OnboardingMain = () => {
  const [pressed, setPressed] = useState<string[]>([]);

  const isIncludes = (chipId: string): boolean => {
    return pressed.includes(chipId);
  };

  const handleChipList = (value: string) => {
    setPressed((prev) => (prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]));
  };

  return (
    <View style={styles.mainContent}>
      {/* 17px 600 #000000 */}
      <Text style={styles.sectionTitle}>시설</Text>
      {facilityList.map((item) => (
        <View key={item.id} style={styles.chipContainer}>
          <OutlineChip isSelected={isIncludes(item.title)} onPress={() => handleChipList(item.title)}>
            {item.title}
          </OutlineChip>
        </View>
      ))}

      <Text style={styles.sectionTitle}>분위기</Text>
      {modeList.map((item) => (
        <View key={item.id} style={styles.chipContainer}>
          <OutlineChip isSelected={isIncludes(item.title)} onPress={() => handleChipList(item.title)}>
            {item.title}
          </OutlineChip>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    marginBottom: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },

  mainContent: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
  },
});

export default OnboardingMain;
