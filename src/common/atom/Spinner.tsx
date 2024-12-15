import React, { useContext, useEffect, useRef } from "react";
import { Animated, View, Dimensions } from "react-native";
import { DefaultTheme, ThemeContext } from "styled-components/native";

import ThemeStyle from "../../styles/ThemeStyle";

interface SpinnerProps {
  size: "small" | "large"; // 크기
  color: "black" | "primary"; // 색상
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const spinValue = useRef(new Animated.Value(0)).current; // 회전 애니메이션을 위한 Animated.Value
  const theme = (useContext(ThemeContext) as DefaultTheme) || ThemeStyle;

  // 애니메이션 설정
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  // 애니메이션 시작 (무한 반복)
  useEffect(() => {
    const startRotation = () => {
      spinValue.setValue(0); // 초기값 설정
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000, // 1초 동안 한 바퀴 회전
          useNativeDriver: true,
        })
      ).start(); // 애니메이션 시작
    };

    startRotation(); // 컴포넌트가 마운트될 때 애니메이션 시작

    return () => {
      spinValue.stopAnimation(); // 컴포넌트 언마운트 시 애니메이션 중지
    };
  }, [spinValue]);

  return (
    <View
      style={{
        position: "absolute", // 절대 위치
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.color.global.alpha.alphaWhite[800], // 반투명 배경
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // 다른 UI 위로 올라가도록 설정
      }}>
      <Animated.View
        style={{
          width: size === "small" ? 24 : 48,
          height: size === "small" ? 24 : 48,
          borderRadius: size === "small" ? 12 : 24,
          borderWidth: size === "small" ? 4 : 6,
          backgroundColor: "none",
          borderRightColor: color === "black" ? theme.color.sys.secondary.default : theme.color.sys.primary.default,
          borderBottomColor: color === "black" ? theme.color.sys.secondary.default : theme.color.sys.primary.default,
          borderLeftColor: color === "black" ? theme.color.sys.secondary.default : theme.color.sys.primary.default,
          borderTopColor: theme.color.global.alpha.alphaWhite[800],
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
};

export default Spinner;
