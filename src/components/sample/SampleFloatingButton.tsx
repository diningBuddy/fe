import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import FloatingButton from "../../common/atom/FloatingButton";

const FloatingButtonExample = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setMessage("floating 버튼 누름");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>FloatingButton Example</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <FloatingButton label="작성" onPress={handleButtonClick} />
    </ScrollView>
  );
};

export default FloatingButtonExample;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  message: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
