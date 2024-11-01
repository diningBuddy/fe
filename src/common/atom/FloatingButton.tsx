import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

import { ChevronUp } from "../../assets/icons/arrow/chevron";
import { PencilEdit } from "../../assets/icons/editor";
import ThemeStyle from "../../styles/ThemeStyle";

interface FloatingButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress, icon }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => {
    setIsPressed(false);
    setIsSelected(!isSelected);
    onPress();
  };

  const getBackgroundColor = () => {
    if (isSelected) return ThemeStyle.color.global.neutral[1000];
    if (isPressed) return ThemeStyle.color.global.neutral[400];
    return ThemeStyle.color.global.neutral[100];
  };

  const renderIcon = () => {
    return React.cloneElement(icon as React.ReactElement, {
      fill: isSelected ? ThemeStyle.color.global.neutral[100] : ThemeStyle.color.global.neutral[1300],
    });
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: getBackgroundColor() }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        {renderIcon()}
      </TouchableOpacity>
    </View>
  );
};

export const TopScrollFloatingButton: React.FC<{ scrollViewRef: React.RefObject<ScrollView> }> = ({
  scrollViewRef,
}) => {
  const handleTopScrollClick = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return <FloatingButton onPress={handleTopScrollClick} icon={<ChevronUp />} />;
};

export const EditFloatingButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <FloatingButton onPress={onPress} icon={<PencilEdit />} />
);

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: ThemeStyle.color.global.neutral[100],
    borderRadius: 50,
    elevation: 5,
    height: 56,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    width: 56,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});
