import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

interface RadioProps {
  children: React.ReactNode;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  mode?: "main" | "secondary";
  onChange: (value: string) => void;
}

export default function Radio({ children, id, name, value, checked = false, mode = "main", onChange }: RadioProps) {
  const handlePress = () => {
    onChange(value);
  };

  return (
    <Container>
      <RadioCircle
        checked={checked}
        mode={mode}
        onPress={handlePress}
        accessibilityRole="radio"
        accessibilityState={{ selected: checked }}>
        {checked && <InnerCircle mode={mode} />}
      </RadioCircle>
      <Label>{children}</Label>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const RadioCircle = styled(TouchableOpacity)<{ checked: boolean; mode: "main" | "secondary" }>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: ${({ mode }) => (mode === "main" ? "2px" : "1px")};
  border-color: ${({ checked, mode }) =>
    checked ? (mode === "main" ? "#FF4D4F" : "#BFBFBF") : mode === "main" ? "#595959" : "#D9D9D9"};
  background-color: ${({ checked, mode }) => (checked ? (mode === "main" ? "#FF4D4F" : "#BFBFBF") : "transparent")};
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.View<{ mode: "main" | "secondary" }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ mode }) => (mode === "main" ? "white" : "#D9D9D9")};
`;

const Label = styled(Text)`
  font-size: 14px;
  color: #333;
`;
