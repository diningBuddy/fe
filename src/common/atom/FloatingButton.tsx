import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { FloatingDefault, FloatingPressed, FloatingSelected } from "../../assets/icons/floating";

interface FloatingButtonProps {
  label: string;
  onPress: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ label, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    setIsSelected(true);
  };

  const getFloatingButton = () => {
    if (isSelected) {
      return <FloatingSelected />;
    } else if (isPressed) {
      return <FloatingPressed />;
    } else {
      return <FloatingDefault />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={label}>
        {getFloatingButton()}
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const SHADOW_COLOR = "rgba(0, 0, 0, 0.1)";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    bottom: 2,
    elevation: 10,
    justifyContent: "center",
    position: "absolute",
    right: 2,
    shadowColor: SHADOW_COLOR,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
  container: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
