import React, { useState } from "react";
import styled from "styled-components/native";

interface ButtonStyle {
  mode: string;
  margin?: string;
  size?: "sm" | "md" | "lg";
  fontColor?: string;
  isIcon?: boolean;
  isPressed?: boolean; // 클릭 상태를 관리하기 위한 속성 추가
}

const MAIN = "main";
const SECONDARY = "secondary";
const OUTLINE_RED = "outlineRed";
const OUTLINE = "outline";
const TEXT = "text";

export const Button = styled.TouchableOpacity<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${(props) =>
    props.size === "lg" ? "48px" : props.size === "md" ? "42px" : "34px"};
  padding: ${(props) =>
    props.size === "lg"
      ? "14px 16px"
      : props.size === "md"
      ? "12px 14px"
      : "10px 12px"};
  margin: ${(props) => props.margin || "0"};

  border: ${(props) =>
    props.mode === OUTLINE_RED
      ? `1px solid ${props.theme.color.destructive.main}`
      : props.mode === OUTLINE
      ? `1px solid ${props.theme.color.tertiary.main}`
      : "none"};

  border-radius: 6px;

  background: ${(props) => {
    if (props.isPressed) {
      return props.theme.color.primary.pressed;
    }

    switch (props.mode) {
      case MAIN:
        return props.theme.color.primary.main;
      case SECONDARY:
        return props.theme.color.secondary.main;
      case OUTLINE_RED:
        return props.theme.color.theme.layoutBg; // OUTLINE_RED는 기본 배경색으로 설정
      case OUTLINE:
        return props.theme.color.theme.layoutBg; // OUTLINE는 기본 배경색으로 설정
      default:
        return props.theme.color.theme.layoutBg; // 기본 배경색
    }
  }};

  opacity: ${(props) => (props.isPressed ? 1 : 0.9)};
`;

export const ButtonText = styled.Text<ButtonStyle>`
  color: ${(props) =>
    props.fontColor ||
    props.theme.color.theme.defaultWhite ||
    (props.mode === MAIN
      ? props.theme.color.theme.defaultWhite
      : [OUTLINE, TEXT].includes(props.mode)
      ? props.theme.color.theme.textSecondary
      : props.theme.color.destructive.main)};
  font-size: ${(props) =>
    props.size === "lg" ? "16px" : props.size === "md" ? "14px" : "12px"};
  font-weight: 600;
`;

Button.defaultProps = {
  mode: MAIN,
  size: "md",
};
