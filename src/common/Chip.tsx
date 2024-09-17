import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import ThemeStyle from "../styles/ThemeStyle";

interface ChipProps {
  mode?: string;
  margin?: string;
  selected?: boolean;
  padding?: "sm" | "md" | "lg";
  height?: "sm" | "md" | "lg";
  theme?: (typeof ThemeStyle)["color"];
  outline?: boolean;
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
  selected = false,
  children,
}: ChipProps) => (
  <ChipBox margin={margin} selected={selected} mode={mode}>
    <StyledText>{children}</StyledText>
  </ChipBox>
);

export const OutlineChip = ({
  mode = SECONDARY,
  margin = "0",
  selected = false,
  onPress,
  children,
}: ChipProps) => (
  <ChipBox
    margin={margin}
    selected={selected}
    outline
    mode={mode}
    onPress={onPress}
  >
    <StyledText color={selected ? "black" : "red"}>{children}</StyledText>
  </ChipBox>
);

export const OutlineChipGray = ({
  margin = "0",
  selected = false,
  onPress,
  children,
}: ChipProps) => (
  <ChipBoxGray margin={margin} selected={selected} outline onPress={onPress}>
    <StyledText>{children}</StyledText>
  </ChipBoxGray>
);

const ChipBox = styled(TouchableOpacity)<ChipProps>`
  justify-content: center;
  align-items: center;
  padding: ${({ outline }) => (outline ? "12px 16px" : "8px 12px")};
  background-color: ${({ selected, outline }) =>
    selected ? (outline ? "red" : "black") : "pink"};
  background: ${({ theme, isDisabled, mode, isPressed }) => {
    if (isDisabled) return theme.color.tertiary.pressed;
    if (mode === MAIN && isPressed) return theme.color.sys.secondary.disabled;
    if (mode === SECONDARY && isPressed) return theme.color.tertiary.active;
    if (mode === MAIN) return theme.color.global.neutral[100];
    return "transparent";
  }};
  border-width: ${({ outline }) => (outline ? "1px" : 0)};
  border-color: red;
  border-radius: ${({ outline }) => (outline ? "24px" : "16px")};
  margin: ${({ margin }) => margin};
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

const ChipBoxGray = styled(ChipBox)`
  border-color: ${({ selected }) => (selected ? "green" : "gray")};
`;

const StyledText = styled.Text<{
  color?: string;
  isDisabled?: boolean;
  isPressed?: boolean;
  mode?: string;
  isSquared?: boolean;
}>`
  color: ${({ theme, isDisabled, isPressed, mode, isSquared }) => {
    if (isDisabled) return "#D9D9D9";
    if (isPressed && mode === OUTLINE_RED) return theme.color.theme.disabled;
    if (mode === OUTLINE || isSquared) return theme.color.theme.headingText;
    return theme.color.theme.textMain || theme.color.theme.headingText;
  }};
`;
