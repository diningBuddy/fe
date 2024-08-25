import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, ButtonText } from "../../common/Button";

const SampleButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Primary */}
      <View style={styles.buttonGroup}>
        <Button height="sm">
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>

        <Button
          isPressed={isPressed}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <ButtonText>MEDIUM</ButtonText>
        </Button>

        <Button height="lg">
          <ButtonText fontSize="lg">LARGE</ButtonText>
        </Button>
      </View>

      {/* Secondary */}
      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm">
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>

        <Button mode="secondary">
          <ButtonText>MEDIUM</ButtonText>
        </Button>
        <Button mode="secondary" height="lg">
          <ButtonText>LARGE</ButtonText>
        </Button>
      </View>

      {/* Outline */}
      <View style={styles.buttonGroup}>
        <Button mode="outline" height="sm">
          <ButtonText mode="outline" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="outline">
          <ButtonText mode="outline">MEDIUM</ButtonText>
        </Button>
        <Button mode="outline" height="lg">
          <ButtonText mode="outline" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_RED Border none, only Text */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineRed" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineRed">MEDIUM</ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineRed" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_RED Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineRed" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineRed" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineRed" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Border none, only Text */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outline" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outline">MEDIUM</ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outline" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outline" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outline" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outline" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_GRAY Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineGray" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineGray" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineGray" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
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
