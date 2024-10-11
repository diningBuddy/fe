import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Animated, TouchableWithoutFeedback } from "react-native";

import ThemeStyle from "../../styles/ThemeStyle";

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
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
`;

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle }) => {
  const onColor = ThemeStyle.color.sys.primary.default;
  const offColor = ThemeStyle.color.sys.tertiary.default;
  const thumbColor = ThemeStyle.color.global.neutral[100];

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
