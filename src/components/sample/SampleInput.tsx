import React, {useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components/native";
import {ScrollView, TextInput, TouchableOpacity} from "react-native";

const SampleInput = () => {
  const theme = useContext(ThemeContext);

  // State to manage the value of the input fields
  const [inputValue, setInputValue] = useState("");

  // Function to clear the input field
  const clearInput = () => {
    setInputValue("");
  };

  return (
      <ScrollViewContainer>
        {/* Default + Initial */}
        <InputRow>
          <Label>default + initial</Label>
          <InputWrapper variant="default" state="initial">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="default">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Default + Focused */}
        <InputRow>
          <Label>default + focused</Label>
          <InputWrapper variant="default" state="focused">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="default">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Default + Filled */}
        <InputRow>
          <Label>default + filled</Label>
          <InputWrapper variant="default" state="filled">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="default">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Default + Disabled */}
        <InputRow>
          <Label>default + disabled</Label>
          <InputWrapper variant="default" state="disabled">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
                  editable={false}
              />
              <CloseButton disabled>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="default">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Destructive + Initial */}
        <InputRow>
          <Label>destructive + initial</Label>
          <InputWrapper variant="destructive" state="initial">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="destructive">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Destructive + Focused */}
        <InputRow>
          <Label>destructive + focused</Label>
          <InputWrapper variant="destructive" state="focused">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="destructive">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Destructive + Filled */}
        <InputRow>
          <Label>destructive + filled</Label>
          <InputWrapper variant="destructive" state="filled">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <CloseButton onPress={clearInput}>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="destructive">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>

        {/* Destructive + Disabled */}
        <InputRow>
          <Label>destructive + disabled</Label>
          <InputWrapper variant="destructive" state="disabled">
            <InputContainer>
              <StyledInput
                  placeholder="Type your message here"
                  value={inputValue}
                  onChangeText={setInputValue}
                  editable={false}
              />
              <CloseButton disabled>
                <CloseButtonText>✕</CloseButtonText>
              </CloseButton>
            </InputContainer>
          </InputWrapper>
          <DescriptionText variant="destructive">
            Your message will be copied to the support team.
          </DescriptionText>
        </InputRow>
      </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #f5f5f5;
`;

const InputRow = styled.View`
  margin-bottom: 24px; /* Increased margin to accommodate the description text */
`;

const Label = styled.Text`
  margin-bottom: 6px;
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
  margin-top: 6px;
  font-size: 12px;
  color: ${({variant, theme}) =>
      variant === "destructive"
          ? theme.color.destructive.main
          : theme.color.theme.textSecondary};
`;

export default SampleInput;
