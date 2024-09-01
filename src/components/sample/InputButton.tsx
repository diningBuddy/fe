import React, {useContext, useEffect, useState} from "react";
import styled, {ThemeContext} from "styled-components/native";
import {TextInput, TouchableOpacity} from "react-native";
import {BodyMedium14, BodyRegular12} from "../../common/Typo";
import Svg, {G, Path} from "react-native-svg";

const InputButton = ({
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
                        <Svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                            <G id="Icon/circle-close">
                                <Path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                      d="M2.1001 12C2.1001 6.53236 6.53247 2.09998 12.0001 2.09998C17.4677 2.09998 21.9001 6.53236 21.9001 12C21.9001 17.4676 17.4677 21.9 12.0001 21.9C6.53247 21.9 2.1001 17.4676 2.1001 12ZM8.50009 7.22721L7.22729 8.5L10.7273 12L7.22729 15.5L8.50009 16.7728L12.0001 13.2728L15.5001 16.7728L16.7729 15.5L13.2729 12L16.7729 8.5L15.5001 7.22721L12.0001 10.7272L8.50009 7.22721Z"
                                      fill="gray"/>
                            </G>
                        </Svg>
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

export default InputButton;
