import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { OutlineChip } from "../../../../common/atom/Chip";
import { FlexBox } from "../../../../common/FlexBox";
import { facilityList, modeList } from "../../../../mock/OnboardingMockData";

const OnboardingMain = () => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const isIncludes = (chipId: string): boolean => selectedChips.includes(chipId);

  const handleChipList = (value: string) => {
    setSelectedChips((prev) => (prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlexBox direction="column" alignItems="flex-start" gap={28}>
          <Text style={styles.sectionTitle}>시설</Text>
          <View style={styles.chipGroupList}>
            {facilityList.map((item) => (
              <OutlineChip key={item.id} isSelected={isIncludes(item.title)} onPress={() => handleChipList(item.title)}>
                {item.title}
              </OutlineChip>
            ))}
          </View>
          {/* 분위기 선택 영역 */}
          <Text style={styles.sectionTitle}>분위기</Text>
          <View style={styles.chipGroupList}>
            {modeList.map((item) => (
              <OutlineChip key={item.id} isSelected={isIncludes(item.title)} onPress={() => handleChipList(item.title)}>
                {item.title}
              </OutlineChip>
            ))}
          </View>
        </FlexBox>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#595959",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  chipGroupList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});

export default OnboardingMain;
