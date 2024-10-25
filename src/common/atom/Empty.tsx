import React from "react";
import styled from "styled-components/native";

import { BodyMedium14, BodySemibold12, BodySemibold14 } from "./Typo";
import ThemeStyle from "../../styles/ThemeStyle";
import { CircleQuestion } from "../../assets/icons/general";

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
  innerText = "내 주변 맛집 보러가기",
  onPress,
  buttonColor,
  mode = "main",
}) => {
  const theme = ThemeStyle.color;
  const ButtonBgColor = buttonColor || (mode === "main" ? theme.sys.primary.default : theme.theme.headingText);
  const ButtonTextColor = theme.global.neutral[100];
  return (
    <Container>
      {/* <CircleQuestion width={40} height={40} fillColor={theme.global.neutral[800]} /> */}
      <CircleQuestion width={40} height={40} fill="#595959" />
      <BodySemibold14 margin="8px 0 16px 0">{title}</BodySemibold14>

      {subtitle && <BodyMedium14 margin="0 0 16px 0">{subtitle}</BodyMedium14>}
      {innerText && onPress && (
        <Button onPress={onPress} buttonColor={ButtonBgColor}>
          <BodySemibold12 color={ButtonTextColor}>{innerText}</BodySemibold12>
        </Button>
      )}
    </Container>
  );
};

export default Empty;

const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding: 16px 30px;

  background-color: transparent;
`;

const Button = styled.TouchableOpacity<{ buttonColor: string }>`
  padding: 10px 12px;

  border-radius: 4px;
  background-color: ${({ buttonColor }) => buttonColor};
`;
