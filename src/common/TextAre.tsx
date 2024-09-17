import React, {useContext, useEffect, useState} from "react";
import styled, {DefaultTheme, ThemeContext} from "styled-components/native";
import {BodyMedium14, BodyRegular12} from "./Typo";
import {TextInput} from "react-native";

interface TextAreaProps {
  variant?: "default" | "destructive";
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
                                             variant = "default",
                                             label = "",
                                             description = "",
                                             placeholder = "Type your message here",
                                             disabled = false,
                                             maxLength = 200,
                                           }) => {
  const theme = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [state, setState] = useState<"initial" | "focused" | "filled" | "disabled">(
      disabled ? "disabled" : "initial"
  );
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (disabled) {
      setState("disabled");
    } else if (value) {
      setState("filled");
    } else if (!value && state === "filled") {
      setState("initial");
    }
  }, [value, disabled]);

  const handleTextChange = (text: string) => {
    setValue(text);
    setCharCount(text.length);
  };

  return (
      <InputRow>
        {label && <Label theme={theme}>{label}</Label>}
        <InputWrapper variant={variant} state={state} theme={theme}>
          <TextAreaContainer variant={variant} state={state} theme={theme}>
            <StyledTextArea
                theme={theme}
                placeholder={placeholder}
                value={value}
                onFocus={() => !disabled && setState("focused")}
                onBlur={() => {
                  if (!value && !disabled) setState("initial");
                  else if (!disabled) setState("filled");
                }}
                onChangeText={handleTextChange}
                editable={state !== "disabled"}
                multiline={true}
                maxLength={maxLength}
            />
          </TextAreaContainer>
        </InputWrapper>
        <DescriptionRow>
          {description && (
              <DescriptionText variant={variant} theme={theme}>
                {description}
              </DescriptionText>
          )}
          <CharCounter theme={theme}>
            {charCount}/{maxLength}
          </CharCounter>
        </DescriptionRow>
      </InputRow>
  );
};

const InputRow = styled.View`
  margin-bottom: 24px;
`;

const Label = styled(BodyMedium14).attrs(({theme}: { theme: DefaultTheme }) => ({
  color: theme.color.global.neutral[800],
}))`
  margin: 6px 0 0 3px;
`;

const InputWrapper = styled.View<TextAreaProps & { theme: DefaultTheme }>`
  border: 1px solid ${({variant, state, theme}) => {
    if (variant === "default") {
      return state === "focused"
          ? "transparent" :
          theme.color.theme.border;
    } else if (variant === "destructive") {
      return state === "focused"
          ? "transparent"
          : theme.color.sys.destructive.default;
    }
  }};
  border-radius: 6px;
  background-color: ${({variant, state, theme}) => {
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
  padding: ${({state}) => {
    return state === "focused" ? "4px" : "0px";
  }};
`;

const TextAreaContainer = styled.View<TextAreaProps & { theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  border: ${({state, variant, theme}) => {
    if (state === "focused") {
      return `1px solid ${
          variant === "default"
              ? theme.color.sys.secondary.default
              : theme.color.sys.destructive.default
      }`;
    } else {
      return 'none';
    }
  }};
  border-radius: 6px;
  padding: 12px 14px;
  background-color: ${({variant, state, theme}) => {
    return state === "disabled" ? theme.color.global.neutral[300] : theme.color.global.neutral[100];
  }};
`;

const StyledTextArea = styled(TextInput).attrs(({theme}: { theme: DefaultTheme }) => ({
  placeholderTextColor: theme.color.theme.disabled,
}))`
  height: 80px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;
  color: ${({theme}) => theme.color.global.neutral[900]};
  text-align-vertical: top; 
  margin: 0 0 -4px 0;
  flex: 1;
`;

const DescriptionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const DescriptionText = styled(BodyRegular12)<TextAreaProps & { theme: DefaultTheme }>`
  margin: 6px 0 0 3px;
  font-style: normal;
  font-weight: 400;
  color: ${({variant, theme}) =>
      variant === "destructive"
          ? theme.color.sys.destructive.default
          : theme.color.global.neutral[700]};
  flex: 3;
  flex-wrap: wrap;
  word-wrap: break-word;
`;

const CharCounter = styled(BodyRegular12)`
  text-align: right;
  color: ${({theme}) => theme.color.global.neutral[600]};
  margin-top: 5px;
  flex: 1;
`;

export default TextArea;

