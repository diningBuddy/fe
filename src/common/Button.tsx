import React, { useState } from "react";
import styled from "styled-components/native";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import ThemeStyle from "../styles/ThemeStyle";

interface ButtonStyle {
  mode?: string;
  theme?: (typeof ThemeStyle)["color"];
  children?: React.ReactNode;
  margin?: string;
  height?: "sm" | "md" | "lg";
  color?: string;
  isPencil?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
  fontSize?: "sm" | "md" | "lg";
  isUnderLine?: boolean;
  isDisabled?: boolean;
  isCircle?: boolean;
  iconR?: React.ComponentType<SvgProps>;
  iconL?: React.ComponentType<SvgProps>;
  iconColor?: string;
}

const MAIN = "main";
const SECONDARY = "secondary";
const OUTLINE_RED = "outlineRed";
const OUTLINE_GRAY = "outlineGray";
const OUTLINE = "outline";
const TEXT = "text";

export const Button: React.FC<ButtonStyle> = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  const loadingFill1 = props.mode === OUTLINE ? "#727272" : "#BEBEBE";
  const loadingFill2 = props.mode === OUTLINE ? "#BEBEBE" : "white";
  const theme = props.theme || ThemeStyle.color;

  const pencilIconFill = props.isDisabled
    ? "#434343"
    : isPressed && props.mode == OUTLINE
    ? theme.sys.primary.default
    : props.mode === OUTLINE
    ? "black"
    : "white";
  const iconOpacity = props.isDisabled ? "0.25" : "1";

  const getSvgSize = (height: string) => {
    switch (height) {
      case "lg":
        return 20;
      case "md":
        return 18;
      case "sm":
        return 16;
      default:
        return 18;
    }
  };

  const renderIcon = (
    IconComponent: React.ComponentType<SvgProps> | undefined
  ) => {
    if (IconComponent) {
      return (
        <IconComponent
          width={getSvgSize(props.height || "md")}
          height={getSvgSize(props.height || "md")}
          fill={props.iconColor || "currentColor"}
        />
      );
    }
    return null;
  };

  return (
    <StyledButton
      {...props}
      isPressed={isPressed}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {props.isLoading && (
        <IconContainer>
          <LoadingIcon fill1={loadingFill1} fill2={loadingFill2} />
        </IconContainer>
      )}
      {!props.isLoading && props.isPencil && (
        <Svg
          width={getSvgSize(props.height || "md")}
          height={getSvgSize(props.height || "md")}
          viewBox="0 0 18 18"
          fill="none"
        >
          <Path
            d="M16.2984 1.70163C15.5295 0.932789 14.283 0.932789 13.5141 1.70163L12.6463 2.5695L15.4305 5.35373L16.2984 4.48587C17.0672 3.71702 17.0672 2.47048 16.2984 1.70163Z"
            fill={pencilIconFill}
            fillOpacity={iconOpacity}
          />
          <Path
            d="M14.635 6.14923L11.8508 3.365L2.73766 12.4781C2.27507 12.9407 1.93502 13.5113 1.74826 14.1383L1.14842 16.1519C1.08946 16.3499 1.14372 16.5642 1.28977 16.7102C1.43581 16.8563 1.65015 16.9106 1.8481 16.8516L3.86177 16.2517C4.48875 16.065 5.05931 15.7249 5.5219 15.2623L14.635 6.14923Z"
            fill={pencilIconFill}
            fillOpacity={iconOpacity}
          />
        </Svg>
      )}
      <ContentContainer>
        <IconContainer>{renderIcon(props.iconL)}</IconContainer>
        {!props.isLoading && !props.isPencil && (
          <ButtonText {...props} isPressed={isPressed}>
            {props.children}
          </ButtonText>
        )}
        <IconContainer>{renderIcon(props.iconR)}</IconContainer>
      </ContentContainer>
    </StyledButton>
  );
};

const LoadingIcon = ({ fill1, fill2 }: { fill1: string; fill2: string }) => {
  return (
    <Svg width="36" height="19" viewBox="0 0 36 19" fill="none">
      <Circle cx="4" cy="10" r="4" fill={fill1} />
      <Circle cx="18" cy="10" r="4" fill={fill2} />
      <Circle cx="32" cy="10" r="4" fill={fill2} />
    </Svg>
  );
};

const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props: { height: string; isCircle: boolean }) =>
    props.isCircle
      ? props.height === "lg"
        ? "48px"
        : props.height === "md"
        ? "42px"
        : "34px"
      : "auto"};

  height: ${(props: { height: string }) =>
    props.height === "lg" ? "48px" : props.height === "md" ? "42px" : "34px"};

  padding: ${(props: { isCircle: boolean }) =>
    props.isCircle ? "0" : "12px 14px"};

  margin: ${(props: { margin: any }) => props.margin || "0"};

  border: ${(props) => {
    if (props.isPencil && (props.mode === MAIN || props.mode === SECONDARY)) {
      return "0";
    }
    if (props.isDisabled) {
      if (props.mode === TEXT) {
        return "none";
      }
      return `1px solid ${props.theme.color.sys.tertiary.default}`;
    } else if (props.isPressed && props.mode === OUTLINE) {
      return `1px solid ${props.theme.color.sys.primary.default}`;
    } else if (props.mode === OUTLINE) {
      return `1px solid ${props.theme.color.sys.tertiary.default}`;
    } else {
      return "none";
    }
  }};

  border-radius: ${(props) =>
    props.isCircle
      ? props.height === "lg"
        ? "24px"
        : props.height === "md"
        ? "21px"
        : "17px"
      : "6px"};

  background: ${(props) => {
    if (props.isPencil && props.mode === MAIN && !props.isDisabled) {
      return props.theme.color.sys.primary.default;
    } else if (props.isPencil && props.mode === MAIN) {
      return "white";
    } else if (props.isPencil && props.mode === SECONDARY && props.isDisabled) {
      return "white";
    } else if (props.isDisabled) {
      if (props.mode === TEXT) {
        return "transparent";
      }
      return props.theme.color.sys.secondary.disabled;
    } else if (props.isPressed && props.mode === MAIN) {
      return props.theme.color.sys.primary.active;
    } else if (props.isPressed && props.mode === SECONDARY) {
      return props.theme.color.sys.secondary.active;
    } else if (props.isPressed && props.mode === OUTLINE) {
      return "white";
    }

    switch (props.mode) {
      case MAIN:
        return props.isPencil ? "white" : props.theme.color.sys.primary.default;

      case SECONDARY:
        return props.theme.color.sys.secondary.pressed;

      case OUTLINE_RED:
        return props.theme.color.theme.headingText;
      case OUTLINE:
        return "white";
      case TEXT:
        return "transparent";
      default:
        return props.theme.color.theme.headingText;
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
      return props.theme.color.sys.primary.default;
    }
    if (props.isPressed && props.mode === OUTLINE_RED) {
      return props.theme.color.sys.primary.active;
    }
    if (props.isPressed && props.mode === OUTLINE_GRAY) {
      return props.theme.color.sys.primary.default;
    }
    if (props.isPressed && props.mode === TEXT) {
      return props.theme.color.sys.secondary.active;
    }

    switch (props.mode) {
      case OUTLINE_RED:
        return props.theme.color.sys.primary.default;

      case OUTLINE_GRAY:
        return props.theme.color.sys.tertiary.default;

      case OUTLINE:
        return props.theme.color.theme.headingText;
      case TEXT:
        return props.theme.color.sys.primary.default;

      default:
        return props.color || "white";
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
  iconColor: "#ffffff",
};
