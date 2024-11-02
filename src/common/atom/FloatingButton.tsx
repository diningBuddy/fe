import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

import ThemeStyle from "../../styles/ThemeStyle";
import { ChevronUp } from "../../assets/icons/arrow/chevron";
import { PencilEdit } from "../../assets/icons/editor";

interface FloatingButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  isSelectable?: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress, icon, isSelectable = false }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => {
    setIsPressed(false);
    if (isSelectable) setIsSelected(!isSelected);
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

interface TopScrollFloatingButtonProps {
  scrollViewRef: React.RefObject<ScrollView>;
  offsetY: number;
}

export const TopScrollFloatingButton: React.FC<TopScrollFloatingButtonProps> = ({ scrollViewRef, offsetY }) => {
  const handleTopScrollClick = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={[styles.floatingButton, offsetY > 100 ? styles.visible : styles.hidden]}>
      <FloatingButton onPress={handleTopScrollClick} icon={<ChevronUp />} />
    </View>
  );
};

export const EditFloatingButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <FloatingButton onPress={onPress} icon={<PencilEdit />} isSelectable />
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 18,
    width: 56,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  floatingButton: {
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  hidden: {
    opacity: 0,
    transform: [{ translateY: 20 }],
  },
  visible: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
});
