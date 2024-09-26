import React, {useContext, useEffect, useState} from "react";
import styled, {DefaultTheme, ThemeContext} from "styled-components/native";
import {TextInput, TouchableOpacity} from "react-native";

import {SearchIcon} from "../assets/icons/general";
import {CircleClose} from "../assets/icons/shape";

interface InputProps {
  placeholder?: string;
  isDisabled?: boolean;
}

const Search: React.FC<InputProps> = ({
                                        placeholder = "원하는 식당을 검색해 보세요",
                                        isDisabled = false,
                                      }) => {
  const theme = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [state, setState] = useState<"initial" | "focused" | "filled" | "disabled">(
      isDisabled ? "disabled" : "initial"
  );

  useEffect(() => {
    if (isDisabled) {
      setState("disabled");
    }
  }, [value, isDisabled]);

  const handleFocus = () => {
    if (!isDisabled) {
      setState("focused");
    }
  };

  const handleBlur = () => {
    if (!value && !isDisabled) {
      setState("initial");
    } else if (!isDisabled) {
      setState("filled");
    }
  };

  return (
      <SearchRow>
        <InputWrapper state={state} theme={theme}>
          <InputContainer state={state} theme={theme}>
            <StyledSearchIcon state={state}/>
            <StyledInput
                theme={theme}
                placeholder={placeholder}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={setValue}
                editable={!isDisabled}
            />
            <CloseButton state={state} value={value} onPress={() => setValue("")}>
              <CircleClose/>
            </CloseButton>
          </InputContainer>
        </InputWrapper>
      </SearchRow>
  );
};

const SearchRow = styled.View`
  margin-bottom: 24px;
`;

const InputWrapper = styled.View<InputProps & { theme: DefaultTheme }>`
  border: 1px solid ${({state, theme}) => state === "focused"
      ? "transparent" :
      theme.color.theme.border};
  border-radius: ${({state, theme}) => {
    if (state === "focused") {
      return "10px";
    }
    return "6px";

  }};
  padding: ${({state}) => state === "focused" ? "4px" : "0px"};
  background-color: ${({state, theme}) => {
    if (state === "disabled") {
      return theme.color.global.neutral[300];
    }
    return theme.color.sys.secondary.disabled;

  }};
`;

const InputContainer = styled.View<InputProps & { theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  padding: 12px 14px;
  border: ${({state, theme}) => {
    if (state === "focused") {
      return `1px solid ${theme.color.sys.secondary.default}`;
    }
    return 'none';

  }};
  border-radius: 6px;
  background-color: ${({
                         state,
                         theme
                       }) => state === "disabled" ? theme.color.global.neutral[300] : theme.color.global.neutral[100]};
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  opacity: ${({state}) => {
    if (state === "initial" || state === "disabled") {
      return 0.5;
    }
    return 0.85;

  }};
  display: "flex";
`;

const StyledInput = styled(TextInput).attrs(({theme}: { theme: DefaultTheme }) => ({
  placeholderTextColor: theme.color.global.alpha.alphaBlack[300],
}))`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;
  color: ${({theme}) => theme.color.global.neutral[900]};
  flex-grow: 1;
  margin-left: 8px;
`;

const CloseButton = styled(TouchableOpacity)`
  display: ${({
                state,
                value
              }) => (state === "initial" || state === "disabled" || value === "" ? "none" : "flex")};
`;

export default Search;