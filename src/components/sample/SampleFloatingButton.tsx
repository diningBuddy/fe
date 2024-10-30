import React, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { EditFloatingButton, TopScrollFloatingButton } from "../../common/atom/FloatingButton";

const FloatingButtonSample = () => {
  const [message, setMessage] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleTopScrollClick = () => {
    setMessage("TopScroll 버튼 누름");
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleEditClick = () => {
    setMessage("Edit 버튼 누름");
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
      <View style={styles.content}>{message ? <Text style={styles.message}>{message}</Text> : null}</View>
      <View style={styles.buttonContainer}>
        <TopScrollFloatingButton onPress={handleTopScrollClick} />
        <EditFloatingButton onPress={handleEditClick} />
      </View>
    </ScrollView>
  );
};

export default FloatingButtonSample;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    width: "100%",
  },
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "#333",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
});
