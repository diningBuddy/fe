import React, { useState } from "react";
import styled from "styled-components/native";
import Svg, { Circle, Path } from "react-native-svg";

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
  isCircle?: boolean;
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
  const iconFill = props.isDisabled
    ? "#434343"
    : props.mode === OUTLINE
    ? "black"
    : "white";
  const iconOpacity = props.isDisabled ? "0.25" : "1";

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
      {!props.isLoading && props.isIcon && (
        <Svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M16.2984 1.70163C15.5295 0.932789 14.283 0.932789 13.5141 1.70163L12.6463 2.5695L15.4305 5.35373L16.2984 4.48587C17.0672 3.71702 17.0672 2.47048 16.2984 1.70163Z"
            fill={iconFill}
            fillOpacity={iconOpacity}
          />
          <Path
            d="M14.635 6.14923L11.8508 3.365L2.73766 12.4781C2.27507 12.9407 1.93502 13.5113 1.74826 14.1383L1.14842 16.1519C1.08946 16.3499 1.14372 16.5642 1.28977 16.7102C1.43581 16.8563 1.65015 16.9106 1.8481 16.8516L3.86177 16.2517C4.48875 16.065 5.05931 15.7249 5.5219 15.2623L14.635 6.14923Z"
            fill={iconFill}
            fillOpacity={iconOpacity}
          />
        </Svg>
      )}
      {!props.isLoading && !props.isIcon && (
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
    if (props.isIcon && (props.mode === MAIN || props.mode === SECONDARY)) {
      return "0";
    }
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

  border-radius: ${(props) => (props.isCircle ? "50%" : "6px")};

  background: ${(props) => {
    if (props.isIcon && props.mode === MAIN && !props.isDisabled) {
      return props.theme.color.primary.main;
    } else if (props.isIcon && props.mode === MAIN) {
      return "white";
    } else if (props.isIcon && props.mode === SECONDARY && props.isDisabled) {
      return "white";
    } else if (props.isDisabled) {
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
        if (props.isIcon) {
          return "white";
        } else {
          return props.theme.color.primary.main;
        }
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
  isCircle: false,
};
