import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { CheckboxOff1, CheckboxOff2, CheckboxSquare1, CheckboxSquare2 } from "../../assets/icons/shape";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  mode?: "main" | "secondary";
  onToggle?: (checked: boolean) => void;
}

const CheckboxContainer = styled(TouchableOpacity)<{ disabled?: boolean }>`
  justify-content: center;
  margin: 12px;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, disabled = false, mode = "main", onToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    if (disabled) {
      return;
    }
    setIsChecked(!isChecked);
    onToggle && onToggle(!isChecked);
  };

  return (
    <CheckboxContainer disabled={disabled} onPress={toggleCheckbox}>
      {mode === "main" ? (
        isChecked ? (
          <CheckboxSquare1 />
        ) : (
          <CheckboxOff1 />
        )
      ) : isChecked ? (
        <CheckboxSquare2 />
      ) : (
        <CheckboxOff2 />
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
