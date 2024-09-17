import React, { useContext, useEffect, useState } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";
import { BodyMedium14, BodyRegular12 } from "./Typo";
import { CircleClose } from "../assets/icons/shape";

interface InputProps {
  variant?: "default" | "destructive";
  state?: "initial" | "focused" | "disabled";
  label?: string;
  description?: string;
  inputValue?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  variant = "default",
  state = "initial",
  label = "",
  description = "",
  inputValue = "",
  placeholder = "Type your message here",
}) => {
  const theme = useContext(ThemeContext);

  // State to manage the value of the input fields
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  // Function to clear the input field
  const clearInput = () => {
    setValue("");
  };

  return (
    <InputRow>
      {label && <Label theme={theme}>{label}</Label>}
      <InputWrapper variant={variant} state={state} theme={theme}>
        <InputContainer variant={variant} state={state} theme={theme}>
          <StyledInput
            theme={theme}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            editable={state !== "disabled"}
          />

          <CloseButton onPress={clearInput} disabled={state === "disabled"}>
            <CircleClose />
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

const Label = styled(BodyMedium14).attrs(({ theme }: { theme: DefaultTheme }) => ({
  color: theme.color.global.neutral[800],
}))`
  margin: 6px 0 0 3px;
`;

const InputWrapper = styled.View<InputProps & { theme: DefaultTheme }>`
  border: 1px solid
    ${({ variant, state, theme }) => {
      if (variant === "default") {
        return state === "focused" ? "transparent" : theme.color.theme.border;
      } else if (variant === "destructive") {
        return state === "focused" ? "transparent" : theme.color.sys.destructive.default;
      }
    }};
  border-radius: 6px;
  background-color: ${({ variant, state, theme }) => {
    if (state === "disabled") {
      return theme.color.global.neutral[300];
    } else {
      if (variant === "default") {
        return theme.color.sys.secondary.disabled;
      } else {
        return theme.color.sys.destructive.disabled;
      }
    }
  }};
  padding: ${({ state }) => {
    return state === "focused" ? "4px" : "0px";
  }};
`;

const InputContainer = styled.View<InputProps & { theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  padding: 12px 14px;
  border: ${({ state, variant, theme }) => {
    if (state === "focused") {
      return `1px solid ${
        variant === "default" ? theme.color.sys.secondary.default : theme.color.sys.destructive.default
      }`;
    } else {
      return "none";
    }
  }};
  background-color: ${({ variant, state, theme }) => {
    return state === "disabled" ? theme.color.global.neutral[300] : theme.color.global.neutral[100];
  }};
  border-radius: 6px;
`;

const StyledInput = styled(TextInput).attrs(({ theme }: { theme: DefaultTheme }) => ({
  placeholderTextColor: theme.color.theme.disabled,
}))`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;

  color: ${({ theme }) => theme.color.global.neutral[900]};
`;

const CloseButton = styled(TouchableOpacity)``;

const DescriptionText = styled(BodyRegular12)<InputProps & { theme: DefaultTheme }>`
  font-style: normal;
  font-weight: 400;

  margin-left: 3px;
  margin-top: 5px;
  color: ${({ variant, theme }) =>
    variant === "destructive" ? theme.color.sys.destructive.default : theme.color.global.neutral[700]};
`;

export default Input;
