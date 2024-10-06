import React from "react";
import styled from "styled-components/native";

import { BodyMedium14, BodySemibold12, BodySemibold14 } from "./Typo";

interface EmptyProps {
  title?: string;
  subtitle?: string;
  innerText?: string;
  onPress?: () => void;
  buttonColor?: string;
  mode?: "main" | "secondary";
}

const Empty: React.FC<EmptyProps> = ({
  title = "앗, 찾으시는 결과가 없네요.",
  subtitle,
  innerText,
  onPress,
  buttonColor,
  mode = "main",
}) => {
  const ButtonBgColor = buttonColor || (mode === "main" ? "#FF6B6B" : "#000000");

  return (
    <Container>
      {/**
       * TODO :
       * FONT 색상추가, 마진추가,
       * 버튼 색상 재설정,
       * 고정텍스트 확인,
       * container padding값 추가
       * */}

      {/* BodySemibold14 - mb: 8px */}
      <BodySemibold14>{title}</BodySemibold14>

      {/* BodyMedium14 - mb: 16px */}
      {subtitle && <BodyMedium14>{subtitle}</BodyMedium14>}
      {innerText && onPress && (
        <Button onPress={onPress} buttonColor={ButtonBgColor}>
          <BodySemibold12>{innerText}</BodySemibold12>
        </Button>
      )}
    </Container>
  );
};

export default Empty;

const Container = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Button = styled.TouchableOpacity<{ buttonColor: string }>`
  background-color: ${({ buttonColor }) => buttonColor};
  padding: 10px 12px;
  border-radius: 4px;
`;
