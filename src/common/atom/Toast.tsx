import { useContext, useEffect, useRef } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components/native";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

import { CheckCircleGreen, InformationCircle, Warning } from "../../assets/icons/shape";
import { BodyMedium14, BodySemibold12 } from "./Typo";

interface ToastProps {
  variant?: "default" | "success" | "destructive" | "informative";
  message: string;
  isNavigateButton?: boolean;
}

const Toast: React.FC<ToastProps> = ({ variant = "default", message, isNavigateButton = true }) => {
  const theme = useContext(ThemeContext) || {};
  const windowHeight = Dimensions.get("window").height;

  const popAnim = useRef(new Animated.Value(windowHeight)).current;

  useEffect(() => {
    popIn();
  }, []);

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.75,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      popOut();
    });
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, 2000);
  };

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

  const dynamicStyles = StyleSheet.create({
    toastContainer: {
      alignItems: "center",
      backgroundColor: theme.color.global.neutral[1000],
      borderColor: theme.color.global.neutral[900],
      borderRadius: 6,
      borderStyle: "solid",
      borderWidth: 1,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 36,
      paddingHorizontal: 18,
      paddingVertical: 14,
    },
  });

  return (
    <Animated.View style={[dynamicStyles.toastContainer, { transform: [{ translateY: popAnim }] }]}>
      <IconWrapper variant={variant}>{renderIcon()}</IconWrapper>
      <Message theme={theme} variant={variant}>
        {message}
      </Message>
      {isNavigateButton && <NavigateText theme={theme}>조회</NavigateText>}
    </Animated.View>
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
