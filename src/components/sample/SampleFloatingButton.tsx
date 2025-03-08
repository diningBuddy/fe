import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { FloatingEditButton } from "../../common/atom/FloatingButton";
import NavigationHeader from "../../common/atom/NavigationHeader";

const FloatingButtonSample = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleEditClick = () => {
    alert("수정 버튼 클릭");
  };

  return (
    <View style={styles.container}>
      <NavigationHeader title="FloatingButtonSample" isGoBackButton isSearchButton />

      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.content} scrollEventThrottle={16}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Text key={index}>스크롤 내린 후 버튼 클릭</Text>
        ))}
      </ScrollView>

      <FloatingEditButton onEditPress={handleEditClick} />
    </View>
  );
};

export default FloatingButtonSample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingVertical: 16,
  },
});
