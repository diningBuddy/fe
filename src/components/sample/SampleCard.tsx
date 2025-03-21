import { Alert, ScrollView, StyleSheet } from "react-native";

import Card from "../../common/atom/Card";
import NavigationHeader from "../../common/atom/NavigationHeader";
import { lunchToday } from "../../mock/DiningMockData";

const SampleCard = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled">
      <NavigationHeader title="샘플 버튼" isGoBackButton />

      <Card
        data={lunchToday.map((item) => ({
          ...item,
          onPress: () => Alert.alert("가로형 카드 컴포넌트"),
        }))}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

export default SampleCard;
