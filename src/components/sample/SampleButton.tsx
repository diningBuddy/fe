import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, ButtonText } from "../../common/Button";

const SampleButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Primary */}
      <View style={styles.buttonGroup}>
        <Button size="sm">
          <ButtonText>SMALL BUTTON</ButtonText>
        </Button>

        <Button
          isPressed={isPressed}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <ButtonText>BUTTON</ButtonText>
        </Button>

        <Button size="lg">
          <ButtonText>LARGE BUTTON</ButtonText>
        </Button>
      </View>

      {/* Secondary */}
      <View style={styles.buttonGroup}>
        <Button mode="secondary" size="sm">
          <ButtonText>SMALL BUTTON</ButtonText>
        </Button>

        <Button mode="secondary">
          <ButtonText>BUTTON</ButtonText>
        </Button>
        <Button mode="secondary" size="lg">
          <ButtonText>LARGE BUTTON</ButtonText>
        </Button>
      </View>

      {/* Outline */}
      <View style={styles.buttonGroup}>
        <Button mode="outline" size="sm">
          <ButtonText>SMALL BUTTON</ButtonText>
        </Button>

        <Button mode="outline">
          <ButtonText>BUTTON</ButtonText>
        </Button>
        <Button mode="outline" size="lg">
          <ButtonText>LARGE BUTTON</ButtonText>
        </Button>
      </View>

      {/* Border none, only Text */}
      <View style={styles.buttonGroup}>
        <Button mode="text" size="sm">
          <ButtonText>SMALL BUTTON</ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText>BUTTON</ButtonText>
        </Button>
        <Button mode="text" size="lg">
          <ButtonText>LARGE BUTTON</ButtonText>
        </Button>
      </View>
    </View>
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

export default SampleButton;
