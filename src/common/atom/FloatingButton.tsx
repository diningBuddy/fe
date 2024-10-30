import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { ChevronUp } from "../../assets/icons/arrow/chevron";
import { PencilEdit } from "../../assets/icons/editor";

interface FloatingButtonProps {
  label: string;
  onPress: () => void;
  icon: React.ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ label, onPress, icon }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => {
    setIsPressed(false);
    setIsSelected(!isSelected);
  };

  const getBackgroundColor = () => {
    if (isSelected) return "#262626";
    if (isPressed) return "#F0F0F0";
    return "#FFF";
  };

  const renderIcon = () => {
    return React.cloneElement(icon as React.ReactElement, {
      fill: isSelected ? "#FFFFFF" : "#000000",
    });
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: getBackgroundColor() }]}
        onPress={handlePressOut}
        onPressIn={handlePressIn}
        accessibilityLabel={label}>
        {renderIcon()}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

// Top Scroll Button
export const TopScrollFloatingButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <FloatingButton label="위로 올라가기" onPress={onPress} icon={<ChevronUp />} />
);

// Edit Button
export const EditFloatingButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <FloatingButton label="리뷰 작성" onPress={onPress} icon={<PencilEdit />} />
);

export default FloatingButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 28,
    elevation: 5,
    height: 56,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 56,
  },
  label: {
    marginTop: 8,
    color: "#555",
    textAlign: "center",
  },
});
