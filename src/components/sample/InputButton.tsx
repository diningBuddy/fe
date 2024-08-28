import React, {useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {BodyMedium14} from "../../common/Typo";

const InputButton = ({
                       variant = "default",
                       state = "initial",
                       label = "",
                       description = "",
                       placeholder = "Type your message here",
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
        {label && <Label theme={theme}>{label}</Label>}
        <InputWrapper variant={variant} state={state} theme={theme}>
          <InputContainer>
            <StyledInput
                theme={theme}
                placeholder={placeholder}
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

const Label = styled(BodyMedium14).attrs(({theme}) => ({
  color: theme.color.global.neutral.eight,
}))`
  margin-bottom: 6px;
  margin-left: 3px;
`;

const InputWrapper = styled.View`
  border: 1px solid ${({variant, state, theme}) => {
    return variant == "default" ? theme.color.theme.border : theme.color.sys.destructive.destructive;
  }};
  width: 328px;
  border-radius: 6px;
  background-color: ${({variant, state, theme}) => {
    return state === "disabled" ? theme.color.global.neutral.three : theme.color.global.neutral.one;
  }};
`;

const InputContainer = styled.View`
  display: flex;
  padding: 12px 14px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
`;

const StyledInput = styled(BodyMedium14)`
  font-style: normal;
  color: ${({
              state,
              theme
            }) =>
      (state === "initial" || state === "disabled" ?
          theme.color.theme.textDisabled : theme.color.global.neutral.nine)
  };
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
