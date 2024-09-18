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
  >
    <StyledText>{children}</StyledText>
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
    <StyledText color={isSelected ? "black" : "red"}>{children}</StyledText>
  </ChipBox>
);

export const OutlineChipGray = ({
  margin = "0",
  isSelected = false,
  onPress,
  children,
}: ChipProps) => (
  <ChipBoxGray
    margin={margin}
    isSelected={isSelected}
    isOutline
    onPress={onPress}
  >
    <StyledText>{children}</StyledText>
  </ChipBoxGray>
);

const ChipBox = styled(TouchableOpacity)<ChipProps>`
  justify-content: center;
  align-items: center;

  height: ${(props) =>
    props.height === "lg" ? "40px" : props.height === "md" ? "36px" : "28px"};

  padding: ${({ isOutline }) => (isOutline ? "12px 16px" : "8px 12px")};

  background-color: ${({ isDisabled, isSelected, isOutline }) =>
    isDisabled ? "pink" : isSelected ? (isOutline ? "red" : "black") : "pink"};

  background: ${({ theme, isDisabled, mode, isPressed }) => {
    if (isDisabled) return theme.color.sys.tertiary.pressed;
    if (mode === MAIN && isPressed) return theme.color.sys.secondary.disabled;
    if (mode === SECONDARY && isPressed)
      return theme.color.sys.tertiary.default;
    if (mode === SECONDARY) return theme.color.global.neutral[300];
    if (mode === MAIN) return theme.color.global.neutral[100];
    return "transparent";
  }};
  border-width: ${({ isOutline }) => (isOutline ? "1px" : 0)};

  border-color: ${({ theme, isOutline }) =>
    isOutline ? theme.color.global.neutral[700] : "transparent"};

  border-radius: ${({ isSquared }) => (isSquared ? "6px" : "72px")};

  margin: ${({ margin }) => margin};

  ${({ isDisabled }) => isDisabled && `pointer-events: none;`}
`;

const ChipBoxGray = styled(ChipBox)`
  border-color: ${({ isSelected }) => (isSelected ? "green" : "gray")};
`;

const StyledText = styled.Text<{
  color?: string;
  isDisabled?: boolean;
  isPressed?: boolean;
  mode?: string;
  isSquared?: boolean;
  fontSize?: "sm" | "md" | "lg";
}>`
  color: ${({ theme, isDisabled, isPressed, mode, isSquared }) => {
    if (isDisabled) return "#D9D9D9";
    // if (isPressed && mode === OUTLINE_RED) return theme.color.theme.disabled;
    if (isPressed && mode === OUTLINE_RED) return theme.color.theme.headingText;

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
