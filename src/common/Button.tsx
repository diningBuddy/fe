import React, { useState } from "react";
import styled from "styled-components/native";
import Svg, { Circle } from "react-native-svg";
interface ButtonStyle {
  mode: string;
  children?: React.ReactNode;
  margin?: string;
  height?: "sm" | "md" | "lg";
  color?: string;
  isIcon?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
  fontSize?: "sm" | "md" | "lg";
  isUnderLine?: boolean;
  isDisabled?: boolean;
}

const MAIN = "main";
const SECONDARY = "secondary";
const OUTLINE_RED = "outlineRed";
const OUTLINE_GRAY = "outlineGray";
const OUTLINE = "outline";
const TEXT = "text";

export const Button = (props: ButtonStyle) => {
  const [isPressed, setIsPressed] = useState(false);

  const loadingFill1 = props.mode === OUTLINE ? "#727272" : "#BEBEBE";
  const loadingFill2 = props.mode === OUTLINE ? "#BEBEBE" : "white";

  return (
    <StyledButton
      {...props}
      isPressed={isPressed}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {props.isLoading && (
        <IconContainer>
          <Svg
            width="36"
            height="19"
            viewBox="0 0 36 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="4" cy="10" r="4" fill={loadingFill1} />
            <Circle cx="18" cy="10" r="4" fill={loadingFill2} />
            <Circle cx="32" cy="10" r="4" fill={loadingFill2} />
          </Svg>
        </IconContainer>
      )}
      {!props.isLoading && (
        <ButtonText {...props} isPressed={isPressed}>
          {props.children}
        </ButtonText>
      )}
    </StyledButton>
  );
};

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${(props) =>
    props.height === "lg" ? "48px" : props.height === "md" ? "42px" : "34px"};
  padding: ${(props) =>
    props.height === "lg"
      ? "14px 16px"
      : props.height === "md"
      ? "12px 14px"
      : "10px 12px"};
  margin: ${(props) => props.margin || "0"};

  border: ${(props) => {
    if (props.isDisabled) {
      if (props.mode === TEXT) {
        return "none";
      }
      return "1px solid #D9D9D9";
    } else if (props.isPressed && props.mode === OUTLINE) {
      return `1px solid ${props.theme.color.primary.main}`;
    } else if (props.mode === OUTLINE) {
      return `1px solid ${props.theme.color.tertiary.main}`;
    } else {
      return "none";
    }
  }};

  border-radius: 6px;

  background: ${(props) => {
    if (props.isDisabled) {
      if (props.mode === TEXT) {
        return "transparent";
      }
      return props.theme.color.secondary.disabled;
    } else if (props.isPressed && props.mode === MAIN) {
      return props.theme.color.primary.active;
    } else if (props.isPressed && props.mode === SECONDARY) {
      return props.theme.color.secondary.active;
    } else if (props.isPressed && props.mode === OUTLINE) {
      return props.theme.color.theme.defaultWhite;
    }

    switch (props.mode) {
      case MAIN:
        return props.theme.color.primary.main;
      case SECONDARY:
        return props.theme.color.secondary.pressed;
      case OUTLINE_RED:
        return props.theme.color.theme.layoutBg;
      case OUTLINE:
        return props.theme.color.theme.defaultWhite;
      case TEXT:
        return "transparent";
      default:
        return props.theme.color.theme.layoutBg;
    }
  }};

  opacity: ${(props) => (props.isPressed ? 1 : 0.9)};
`;

export const ButtonText = styled.Text<ButtonStyle>`
  color: ${(props) => {
    if (props.isDisabled) {
      return "#D9D9D9";
    }
    if (props.isPressed && props.mode === OUTLINE) {
      return props.theme.color.primary.main;
    }
    if (props.isPressed && props.mode === OUTLINE_RED) {
      return props.theme.color.primary.active;
    }

    if (props.isPressed && props.mode === OUTLINE_GRAY) {
      return props.theme.color.primary.main;
    }

    if (props.isPressed && props.mode === TEXT) {
      return props.theme.color.secondary.active;
    }

    switch (props.mode) {
      case MAIN:
        return props.theme.color.theme.defaultWhite;
      case OUTLINE_RED:
        return props.theme.color.primary.main;
      case OUTLINE_GRAY:
        return props.theme.color.tertiary.main;
      case OUTLINE:
        return props.theme.color.theme.textMain;
      case TEXT:
        return props.theme.color.primary.main;
      default:
        return props.color || props.theme.color.theme.defaultWhite;
    }
  }};

  font-size: ${(props) =>
    props.fontSize === "lg"
      ? "16px"
      : props.fontSize === "sm"
      ? "12px"
      : "14px"};
  font-weight: 600;

  text-decoration: ${(props) => (props.isUnderLine ? "underline" : "none")};
`;

Button.defaultProps = {
  mode: MAIN,
  height: "md",
  fontSize: "md",
  isUnderLine: false,
};
