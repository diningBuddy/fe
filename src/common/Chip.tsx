import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import ThemeStyle from "../styles/ThemeStyle";

interface ChipProps {
  mode?: string;
  margin?: string;
  isSelected?: boolean;
  padding?: "sm" | "md" | "lg";
  height?: "sm" | "md" | "lg";
  theme?: (typeof ThemeStyle)["color"];
  isOutline?: boolean;
  children: React.ReactNode;
  color?: string;
  isPressed?: boolean;
  fontSize?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isSquared?: boolean;
  onPress?: () => void;
}

const MAIN = "main";
const SECONDARY = "secondary";
const OUTLINE_RED = "outlineRed";
const OUTLINE = "outline";

export const TextChip = ({
  mode = MAIN,
  margin = "0",
  isSelected = false,
  children,
  height = "md",
  isOutline = true,
  isDisabled = false,
  isSquared = false,
  fontSize = "md",
  onPress,
}: ChipProps) => (
  <ChipBox
    margin={margin}
    isSelected={isSelected}
    mode={mode}
    isOutline={isOutline}
    height={height}
    isDisabled={isDisabled}
    isSquared={isSquared}
    fontSize={fontSize}
    onPress={onPress}
  >
    <StyledText isSelected={isSelected} mode={mode}>
      {children}
    </StyledText>
  </ChipBox>
);

export const OutlineChip = ({
  mode = SECONDARY,
  margin = "0",
  isSelected = false,
  height = "md",
  isDisabled = false,
  onPress,
  children,
  isSquared = false,
  isOutline = false,
  fontSize = "md",
}: ChipProps) => (
  <ChipBox
    margin={margin}
    isSelected={isSelected}
    isOutline={isOutline}
    isDisabled={isDisabled}
    isSquared={isSquared}
    mode={mode}
    onPress={onPress}
    height={height}
    fontSize={fontSize}
  >
    <StyledText isSelected={isSelected} mode={mode}>
      {children}
    </StyledText>
  </ChipBox>
);

const ChipBox = styled(TouchableOpacity)<ChipProps>`
  justify-content: center;
  align-items: center;

  height: ${(props) =>
    props.height === "lg" ? "40px" : props.height === "md" ? "36px" : "28px"};

  padding: ${({ isOutline }) => (isOutline ? "12px 16px" : "8px 12px")};

  background-color: ${({ isDisabled, isSelected, theme }) =>
    isDisabled
      ? "pink"
      : isSelected
        ? theme.color.sys.primary.default
        : "transparent"};

  background: ${({ theme, isDisabled, mode, isPressed, isSelected }) => {
    if (isDisabled) return theme.color.sys.tertiary.pressed;
    if (mode === MAIN && isSelected) return theme.color.sys.primary.disabled;
    if (mode === SECONDARY && isSelected)
      return theme.color.global.neutral[900];
    if (mode === MAIN && isPressed) return theme.color.sys.secondary.disabled;
    if (mode === SECONDARY && isPressed)
      return theme.color.sys.tertiary.default;
    if (mode === SECONDARY) return theme.color.global.neutral[300];
    if (mode === MAIN) return theme.color.global.neutral[100];
    return "transparent";
  }};

  border-width: ${({ isOutline }) => (isOutline ? "1px" : 0)};
  border-color: ${({ theme, isSelected, isOutline }) =>
    isSelected
      ? theme.color.sys.primary.default
      : isOutline
        ? theme.color.global.neutral[700]
        : "transparent"};

  border-radius: ${({ isSquared }) => (isSquared ? "6px" : "72px")};

  margin: ${({ margin }) => margin};

  ${({ isDisabled }) => isDisabled && `pointer-events: none;`}
`;

const StyledText = styled.Text<{
  color?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  isPressed?: boolean;
  mode?: string;
  isSquared?: boolean;
  fontSize?: "sm" | "md" | "lg";
}>`
  color: ${({ theme, isDisabled, isPressed, mode, isSquared, isSelected }) => {
    if (isDisabled) return "#D9D9D9";

    if (isSelected) {
      if (mode === MAIN) return theme.color.sys.primary.default;
      if (mode === SECONDARY) return theme.color.global.neutral[100];
    }
    // if (isPressed && mode === OUTLINE_RED) return theme.color.theme.disabled;
    if (isPressed && mode === OUTLINE_RED) return theme.color.theme.headingText;
    if (mode === MAIN && isSelected) return theme.color.sys.primary.default;
    if (mode === SECONDARY && isSelected)
      return theme.color.global.neutral[100];
    if (mode === OUTLINE || isSquared) return theme.color.theme.headingText;
    return theme.color.theme.headingText;
  }};

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
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
