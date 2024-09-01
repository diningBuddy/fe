import React, {useContext, useEffect, useState} from "react";
import styled, {ThemeContext} from "styled-components/native";
import {TextInput, TouchableOpacity} from "react-native";
import {BodyMedium14, BodyRegular12} from "./Typo";
import {CircleClose} from "../assets/icons/shape";

const Input = ({
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
                <InputContainer>
                    <StyledInput
                        theme={theme}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={setValue}
                        editable={state !== "disabled"}
                    />
                    <CloseButton onPress={clearInput} disabled={state === "disabled"}>
                      <CircleClose width={20} height={20}/>
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

const StyledInput = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor: theme.color.theme.textDisabled,
}))`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.94px;

    color: ${({theme}) => theme.color.global.neutral.nine};
`;

const CloseButton = styled(TouchableOpacity)`
`;

const DescriptionText = styled(BodyRegular12)`
    font-style: normal;
    font-weight: 400;

    margin-left: 3px;
    margin-top: 6px;
    color: ${({variant, theme}) =>
            variant === "destructive"
                    ? theme.color.destructive.main
                    : theme.color.theme.textSecondary};
`

export default Input;
