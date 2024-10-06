import { useContext } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components/native";
import { View } from "react-native";

import { CheckCircleGreen, InformationCircle, Warning } from "../../assets/icons/shape";
import { BodyMedium14, BodySemibold12 } from "./Typo";

interface ToastProps {
  variant?: "default" | "success" | "destructive" | "informative";
  message: string;
  isNavigateButton?: boolean;
}

const Toast: React.FC<ToastProps> = ({ variant = "default", message, isNavigateButton = true }) => {
  const theme = useContext(ThemeContext);

  const renderIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircleGreen />;
      case "destructive":
        return <Warning />;
      case "informative":
        return <InformationCircle />;
      default:
        return null;
    }
  };

  return (
    <ToastContainer theme={theme} variant={variant}>
      <IconWrapper variant={variant}>{renderIcon()}</IconWrapper>
      <Message theme={theme} variant={variant}>
        {message}
      </Message>
      {isNavigateButton && <NavigateText theme={theme}>조회</NavigateText>}
    </ToastContainer>
  );
};

const ToastContainer = styled(View)<{ variant: string; theme: DefaultTheme }>`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 14px 18px;
  border: 1px solid ${({ theme }) => theme.color.global.neutral[900]};
  border-radius: 6px;
  background-color: ${({ theme }) => {
    return theme.color.global.neutral[1000];
  }};
`;

const IconWrapper = styled(View)`
  margin-right: ${({ variant }) => {
    return variant === "default" ? "0px" : "6px";
  }};
`;

const Message = styled(BodyMedium14)`
  flex: 1;
  color: ${({ theme, variant }) => {
    if (variant === "destructive") {
      return theme.color.sys.destructive.default;
    }
    return theme.color.global.neutral[100];
  }};
`;

const NavigateText = styled(BodySemibold12)`
  color: ${({ theme }) => theme.color.global.neutral[100]};
`;

export default Toast;
