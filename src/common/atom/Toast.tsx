import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

import { CheckCircleGreen, InformationCircle, Warning } from "../../assets/icons/shape";
import { BodyMedium14, BodySemibold12 } from "./Typo";

interface ToastProps {
  variant?: "default" | "success" | "destructive" | "informative";
  message: string;
  isNavigateButton?: boolean;
}

const Toast = forwardRef(({ variant = "default", message, isNavigateButton = true }: ToastProps, ref) => {
  const theme = useContext(ThemeContext) || {};
  const windowHeight = Dimensions.get("window").height;
  const popAnim = useRef(new Animated.Value(windowHeight)).current;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useImperativeHandle(ref, () => ({
    showToast: () => {
      if (isAnimating) {
        popAnim.stopAnimation();
      }

      popIn();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
  }));

  const popIn = () => {
    setIsAnimating(true);
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.75,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      popOut();
    });
  };

  const popOut = () => {
    timeoutRef.current = setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setIsAnimating(false);
      });
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
});

Toast.displayName = "Toast";

const IconWrapper = styled(View)<ToastProps>`
  margin-right: ${({ variant }) => {
    return variant === "default" ? "0px" : "6px";
  }};
`;

const Message = styled(BodyMedium14)<ToastProps>`
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
