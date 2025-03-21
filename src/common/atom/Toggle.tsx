import React, { useEffect, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

import ThemeStyle from "../../styles/ThemeStyle";

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  isDisabled?: boolean;
}

const ToggleWrap = styled.View<{ isOn: boolean; onColor: string; offColor: string; isDisabled: boolean }>`
  position: relative;
  width: 44px;
  height: 24px;

  justify-content: center;

  padding: 2px;

  border-radius: 50px;
  background-color: ${(props) =>
    props.isDisabled ? ThemeStyle.color.sys.primary.disabled : props.isOn ? props.onColor : props.offColor};
`;

const ToggleBox = styled(Animated.View)<{ thumbColor: string }>`
  position: absolute;
  width: 20px;
  height: 20px;

  border-radius: 12px;
  background-color: ${(props) => props.thumbColor};

  elevation: 3;
`;

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle, isDisabled = false }) => {
  const colors = {
    onColor: ThemeStyle.color.sys.primary.default,
    offColor: ThemeStyle.color.sys.tertiary.default,
    thumbColor: ThemeStyle.color.global.neutral[100],
  };

  const { onColor, offColor, thumbColor } = colors;

  const translateX = useRef(new Animated.Value(isOn ? 22 : 2)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn ? 22 : 2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn]);

  return (
    <TouchableWithoutFeedback onPress={!isDisabled ? onToggle : undefined}>
      <ToggleWrap isOn={isOn} onColor={onColor} offColor={offColor} isDisabled={isDisabled}>
        <ToggleBox style={{ transform: [{ translateX }] }} thumbColor={thumbColor} />
      </ToggleWrap>
    </TouchableWithoutFeedback>
  );
};

export default Toggle;
