import React, { useRef, useState } from "react";
import { View, StyleSheet, ScrollView, Text, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { EditFloatingButton, TopScrollFloatingButton } from "../../common/atom/FloatingButton";

const FloatingButtonSample = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleEditClick = () => {
    alert("수정 버튼 클릭");
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    setOffsetY(currentOffsetY);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Text key={index}>스크롤 내린 후 버튼 클릭</Text>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TopScrollFloatingButton scrollViewRef={scrollViewRef} offsetY={offsetY} />
        <EditFloatingButton onPress={handleEditClick} />
      </View>
    </View>
  );
};

export default FloatingButtonSample;

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingVertical: 16,
  },
});
