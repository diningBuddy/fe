import React, {useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components/native";
import {TextInput, TouchableOpacity} from "react-native";

const InputButton = ({
                       variant = "default",
                       state = "initial",
                       label = "",
                       description = "",
                     }) => {
  const theme = useContext(ThemeContext);

  // State to manage the value of the input fields
  const [inputValue, setInputValue] = useState("");

  // Function to clear the input field
  const clearInput = () => {
    setInputValue("");
  };

  return (
      <InputRow>
        {label && <Label>{label}</Label>}
        <InputWrapper variant={variant} state={state} theme={theme}>
          <InputContainer>
            <StyledInput
                placeholder="Type your message here"
                value={inputValue}
                onChangeText={setInputValue}
                editable={state !== "disabled"}
            />
            <CloseButton onPress={clearInput} disabled={state === "disabled"}>
              <CloseButtonText>✕</CloseButtonText>
            </CloseButton>
          </InputContainer>
        </InputWrapper>
        {description && (
            <DescriptionText variant={variant} theme={theme}>
              {description}
            </DescriptionText>
        )}
      </InputRow>
  );
};

const InputRow = styled.View`
  margin-bottom: 24px; /* Increased margin to accommodate the description text */
`;

const Label = styled.Text`
  margin-bottom: 6px;
  margin-left: 3px;
  color: #333;
`;

const InputWrapper = styled.View`
  border: 1px solid ${({variant, state, theme}) => {
    if (variant === "destructive") {
      return state === "focused"
          ? theme.color.destructive.active
          : theme.color.destructive.main;
    } else {
      return state === "focused"
          ? theme.color.primary.main
          : theme.color.theme.border;
    }
  }};
  width: 328px;
  border-radius: 6px;
  background-color: ${({state}) =>
      state === "disabled" ? "#e0e0e0" : "#fff"};
`;

const InputContainer = styled.View`
  display: flex;
  padding: 12px 14px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
`;

const StyledInput = styled(TextInput)`
  display: flex;
  font-size: 14px;
  border-radius: 6px;
  color: ${({state}) => (state === "disabled" ? "#888" : "#000")};
`;

const CloseButton = styled(TouchableOpacity)`
`;

const CloseButtonText = styled.Text`
  font-size: 16px;
  color: #888;
`;

const DescriptionText = styled.Text`
  margin-left: 3px;
  margin-top: 6px;
  font-size: 12px;
  color: ${({variant, theme}) =>
      variant === "destructive"
          ? theme.color.destructive.main
          : theme.color.theme.textSecondary};
`;

export default InputButton;
