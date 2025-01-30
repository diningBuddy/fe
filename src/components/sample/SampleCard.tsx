import React from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";

import { lunchToday } from "../../mock/DiningMockData";
import Card from "../../common/atom/Card";

const SampleCard = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled">
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
