import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

interface FloatingButtonProps {
  label: string;
  onPress: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ label, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    setIsSelected(true);
  };

  const getButtonImage = () => {
    if (isSelected) {
      return require("../../assets/images/floating/floating-selected.png");
    } else if (isPressed) {
      return require("../../assets/images/floating/floating-pressed.png");
    } else {
      return require("../../assets/images/floating/floating-default.png");
    }
  };

  return (
    <Container>
      <StyledButton onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} accessibilityLabel={label}>
        <ButtonImage source={getButtonImage()} />
      </StyledButton>
    </Container>
  );
};

export default FloatingButton;

const Container = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const StyledButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const ButtonImage = styled(Image)``;
