import React, { useState } from "react";
import styled from "styled-components/native";

interface ButtonStyle {
  mode: string;
  margin?: string;
  height?: "sm" | "md" | "lg";
  color?: string;
  isIcon?: boolean;
  isPressed?: boolean; // 클릭 상태를 관리하기 위한 속성 추가
  fontSize?: "sm" | "md" | "lg";
  isUnderLine?: boolean;
}

const MAIN = "main";
const SECONDARY = "secondary";
const OUTLINE_RED = "outlineRed";
const OUTLINE_GRAY = "outlineGray";

const OUTLINE = "outline";
const TEXT = "text";

export const Button = styled.TouchableOpacity<ButtonStyle>`
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

  border: ${(props) =>
    props.mode === OUTLINE
      ? `1px solid ${props.theme.color.tertiary.main}`
      : "none"};

  border-radius: 6px;

  background: ${(props) => {
    if (props.isPressed && props.mode === MAIN) {
      return props.theme.color.primary.pressed;
    } else if (props.isPressed && props.mode === SECONDARY) {
      return props.theme.color.secondary.pressed;
    } else if (props.isPressed && props.mode === OUTLINE) {
      return props.theme.color.theme.defaultWhite;
    } else if (props.isPressed && props.mode === TEXT) {
      return "transparent";
    }

    switch (props.mode) {
      case MAIN:
        return props.theme.color.primary.main;
      case SECONDARY:
        return props.theme.color.secondary.main;
      case OUTLINE_RED:
        return props.theme.color.theme.layoutBg; // OUTLINE_RED는 기본 배경색으로 설정
      case OUTLINE:
        return props.theme.color.theme.defaultWhite; // OUTLINE는 기본 배경색으로 설정
      case TEXT:
        return "transparent";
      default:
        return props.theme.color.theme.layoutBg; // 기본 배경색
    }
  }};

  opacity: ${(props) => (props.isPressed ? 1 : 0.9)};
`;

export const ButtonText = styled.Text<ButtonStyle>`
  color: ${(props) => {
    switch (props.mode) {
      case OUTLINE_RED:
        return props.theme.color.primary.main;
      case OUTLINE_GRAY:
        return props.theme.color.tertiary.main;
      case OUTLINE:
        return props.theme.color.theme.textMain;
      case TEXT:
        return props.theme.color.primary.main; // TEXT 모드에서 primary.main
      default:
        return props.color || props.theme.color.theme.defaultWhite; // 기본 색상은 하얀색
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

// export const ButtonIcon = styled.Text<ButtonStyle>`
//   height: "18px";
//   width: "18px";
//   padding: ${(props) =>
//     props.height === "lg"
//       ? "15px 15px"
//       : props.height === "md"
//       ? "13px 13px"
//       : "10px 10px"};
// `;

Button.defaultProps = {
  mode: MAIN,
  height: "md",
  fontSize: "md",
  isUnderLine: false,
};
