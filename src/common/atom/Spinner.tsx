import React, { useEffect, useRef } from "react";
import { Animated, View, Dimensions } from "react-native";

interface SpinnerProps {
  size: "small" | "large"; // 크기
  color: "white" | "primary"; // 색상
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const spinValue = useRef(new Animated.Value(0)).current; // 회전 애니메이션을 위한 Animated.Value

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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // 다른 UI 위로 올라가도록 설정
      }}>
      <Animated.View
        style={{
          width: size === "small" ? 40 : 80,
          height: size === "small" ? 40 : 80,
          borderRadius: 50,
          borderWidth: 5,
          backgroundColor: "#fff", // 회전하는 부분은 흰색
          borderTopColor: color === "white" ? "#fff" : "#FFA500",
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
};

export default Spinner;
