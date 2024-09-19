import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import ThemeStyle from "../styles/ThemeStyle";

interface ChipProps {
  mode?: "outline" | "noOutline";
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

export const OutlineChip = ({
  mode = "outline",
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

export const TextChip = ({
  mode = "noOutline",
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
      ? "red"
      : isSelected
        ? theme.color.sys.primary.default
        : "transparent"};

  background: ${({ theme, isDisabled, mode, isPressed, isSelected }) => {
    if (isDisabled) return theme.color.sys.tertiary.pressed;

    const backgroundMap: Record<"outline" | "noOutline", string> = {
      outline: isSelected
        ? theme.color.sys.primary.disabled
        : isPressed
          ? theme.color.sys.noOutline.disabled
          : theme.color.global.neutral[100],
      noOutline: isSelected
        ? theme.color.global.neutral[900]
        : isPressed
          ? theme.color.sys.tertiary.default
          : theme.color.global.neutral[300],
    };

    return backgroundMap[mode || "outline"];
  }};

  border-width: ${({ isOutline }) => (isOutline ? "1px" : 0)};
  border-color: ${({ theme, isSelected, isOutline }) =>
    isSelected
      ? theme.color.sys.primary.default
      : isOutline
        ? theme.color.global.neutral[700]
        : "transparent"};

  border-radius: ${({ isSquared }) => (isSquared ? "6px" : "72px")};

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
  color: ${({ theme, isDisabled, isSelected, mode }) => {
    if (isDisabled) return "#D9D9D9";

    const colorMap: Record<"outline" | "noOutline", string> = {
      outline: isSelected
        ? theme.color.sys.primary.default
        : theme.color.theme.headingText,
      noOutline: isSelected
        ? theme.color.global.neutral[100]
        : theme.color.theme.headingText,
    };

    return colorMap[mode || "outline"];
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
