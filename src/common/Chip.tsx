import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import ThemeStyle from "../styles/ThemeStyle";

interface ChipProps {
  children: React.ReactNode;
  mode?: "outline" | "noOutline";
  theme?: (typeof ThemeStyle)["color"];
  color?: string;
  padding?: "sm" | "md" | "lg";
  height?: "sm" | "md" | "lg";
  fontSize?: "sm" | "md" | "lg";
  isOutline?: boolean;
  isPressed?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isSquared?: boolean;
  onPress?: () => void;
}

export const OutlineChip = ({
  mode = "outline",
  isSelected = false,
  children,
  height = "md",
  isOutline = true,
  isDisabled = false,
  isSquared = false,
  onPress,
}: ChipProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <ChipBox
      isSelected={isSelected}
      mode={mode}
      isOutline={isOutline}
      height={height}
      isDisabled={isDisabled}
      isSquared={isSquared}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      accessible
      accessibilityLabel="Outline Chip">
      <StyledText height={height} isSelected={isSelected} mode={mode} isPressed={isPressed} isDisabled={isDisabled}>
        {children}
      </StyledText>
    </ChipBox>
  );
};

export const TextChip = ({
  mode = "noOutline",
  isSelected = false,
  height = "md",
  isDisabled = false,
  onPress,
  children,
  isSquared = false,
  isOutline = false,
}: ChipProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <ChipBox
      isSelected={isSelected}
      isOutline={isOutline}
      isDisabled={isDisabled}
      isSquared={isSquared}
      mode={mode}
      onPress={onPress}
      height={height}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      accessible
      accessibilityLabel="Text Chip">
      <StyledText height={height} isSelected={isSelected} mode={mode} isPressed={isPressed} isDisabled={isDisabled}>
        {children}
      </StyledText>
    </ChipBox>
  );
};

const getBackgroundColor = (
  theme: string,
  isDisabled: boolean,
  isSelected: boolean,
  isPressed: boolean,
  mode: string
) => {
  if (isDisabled) return theme.color.sys.tertiary.pressed;

  const backgroundMap: Record<"outline" | "noOutline", string> = {
    outline: isSelected
      ? theme?.color?.sys?.primary?.disabled
      : isPressed
        ? theme.color?.sys?.noOutline?.disabled
        : theme.color.global.neutral[100],
    noOutline: isSelected
      ? theme.color.global.neutral[900]
      : isPressed
        ? theme.color.sys.tertiary.default
        : theme.color.global.neutral[300],
  };

  return backgroundMap[mode || "outline"];
};

const ChipBox = styled(TouchableOpacity)<ChipProps>`
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => {
    switch (padding) {
      case "lg":
        return "10px 16px";
      case "sm":
        return "6px 10px";
      default:
        return "8px 12px";
    }
  }};
  background-color: ${({ theme, isDisabled, isSelected, mode, isPressed }) =>
    getBackgroundColor(theme, isDisabled, isSelected, isPressed, mode)};
  border-width: ${({ isOutline }) => (isOutline ? "1px" : 0)};
  border-color: ${({ theme, isSelected, isOutline }) =>
    isSelected ? theme.color.sys.primary.default : isOutline ? theme.color.global.neutral[450] : "transparent"};
  border-radius: ${({ isSquared }) => (isSquared ? "6px" : "72px")};
  ${({ isDisabled }) => isDisabled && `pointer-events: none;`};
`;

const getTextColor = (theme: string, isDisabled: boolean, isSelected: boolean, isPressed: boolean, mode: string) => {
  if (isPressed) return theme.color.theme.headingText;
  if (isDisabled) return "rgba(0, 0, 0, 0.2)";

  const colorMap: Record<"outline" | "noOutline", string> = {
    outline: isSelected ? theme.color.sys.primary.default : theme.color.theme.headingText,
    noOutline: isSelected ? theme.color.global.neutral[100] : theme.color.theme.headingText,
  };

  return colorMap[mode || "outline"];
};

const StyledText = styled.Text<{
  isSelected?: boolean;
  isDisabled?: boolean;
  mode?: string;
  isPressed?: boolean;
  height?: "sm" | "md" | "lg";
}>`
  color: ${({ theme, isDisabled, isSelected, mode, isPressed }) =>
    getTextColor(theme, isDisabled, isSelected, isPressed, mode)};
  font-size: ${({ height }) => {
    switch (height) {
      case "lg":
        return "16px";
      case "sm":
        return "12px";
      default:
        return "14px";
    }
  }};
  font-weight: 500;
`;
