import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Animated, TouchableWithoutFeedback } from "react-native";

import ThemeStyle from "../../styles/ThemeStyle";

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  mode?: "main" | "secondary"; // mode 속성 추가
}

const ToggleWrap = styled.View<{ isOn: boolean; onColor: string; offColor: string }>`
  position: relative;
  width: 44px;
  height: 24px;

  justify-content: center;

  padding: 2px;

  border-radius: 50px;
  background-color: ${(props) => (props.isOn ? props.onColor : props.offColor)};
`;

const ToggleBox = styled(Animated.View)<{ thumbColor: string }>`
  position: absolute;
  width: 20px;
  height: 20px;

  border-radius: 12px;
  background-color: ${(props) => props.thumbColor};

  elevation: 3;
`;

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle, mode = "main" }) => {
  const colors = {
    main: {
      onColor: ThemeStyle.color.sys.primary.default,
      offColor: ThemeStyle.color.sys.tertiary.default,
      thumbColor: ThemeStyle.color.global.neutral[100],
    },
    secondary: {
      onColor: ThemeStyle.color.sys.primary.disabled,
      offColor: ThemeStyle.color.sys.secondary.disabled,
      thumbColor: ThemeStyle.color.global.neutral[100],
    },
  };

  const { onColor, offColor, thumbColor } = colors[mode];

  const translateX = useRef(new Animated.Value(isOn ? 22 : 2)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn ? 22 : 2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn]);

  return (
    <TouchableWithoutFeedback onPress={onToggle}>
      <ToggleWrap isOn={isOn} onColor={onColor} offColor={offColor}>
        <ToggleBox style={{ transform: [{ translateX }] }} thumbColor={thumbColor} />
      </ToggleWrap>
    </TouchableWithoutFeedback>
  );
};

export default Toggle;
