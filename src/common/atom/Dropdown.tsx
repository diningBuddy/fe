import React, { useContext, useEffect, useState } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";

import { BodyMedium14, BodyRegular12 } from "./Typo";
import { ChevronDown } from "../../assets/icons/arrow/chevron";

interface DropdownProps {
  variant?: "default" | "destructive";
  label?: string;
  description?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  variant = "default",
  label = "",
  description = "",
  placeholder = "Type your message here",
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
    } else if (value) {
      setState("filled");
    } else if (!value && state === "filled") {
      setState("initial");
    }
  }, [value, isDisabled]);

  return (
    <DropdownRow>
      {label && <Label theme={theme}>{label}</Label>}
      <DropdownWrapper variant={variant} state={state} theme={theme}>
        <DropdownContainer variant={variant} state={state} theme={theme}>
          <StyledDropdown
            theme={theme}
            placeholder={placeholder}
            value={value}
            onFocus={() => !isDisabled && setState("focused")}
            onBlur={() => {
              if (!value && !isDisabled) setState("initial");
            }}
            onChangeText={setValue}
            editable={!isDisabled}
          />
          <DownButton>
            <ChevronDown />
          </DownButton>
        </DropdownContainer>
      </DropdownWrapper>
      {description && (
        <DescriptionText variant={variant} theme={theme}>
          {description}
        </DescriptionText>
      )}
    </DropdownRow>
  );
};

const DropdownRow = styled.View`
  margin-bottom: 24px;
`;

const Label = styled(BodyMedium14).attrs(({ theme }: { theme: DefaultTheme }) => ({
  color: theme.color.global.neutral[800],
}))`
  margin: 0 0 6px 3px;
`;

const DropdownWrapper = styled.View<DropdownProps & { theme: DefaultTheme }>`
  border: 1px solid
    ${({ variant, state, theme }) => {
      if (variant === "default") {
        return state === "focused" ? "transparent" : theme.color.theme.border;
      }
      if (variant === "destructive") {
        return state === "focused" ? "transparent" : theme.color.sys.destructive.default;
      }
    }};
  border-radius: ${({ variant, state, theme }) => {
    if (state === "focused") {
      return "10px";
    }
    return "6px";
  }};
  padding: ${({ state }) => {
    return state === "focused" ? "4px" : "0px";
  }};
  background-color: ${({ variant, state, theme }) => {
    if (state === "disabled") {
      return theme.color.global.neutral[300];
    }
    if (variant === "default") {
      return theme.color.sys.secondary.disabled;
    }
    return theme.color.sys.destructive.disabled;
  }};
`;

const DropdownContainer = styled.View<DropdownProps & { theme: DefaultTheme }>`
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
    }
    return "none";
  }};

  border-radius: 6px;
  background-color: ${({ variant, state, theme }) => {
    return state === "disabled" ? theme.color.global.neutral[300] : theme.color.global.neutral[100];
  }};
`;

const StyledDropdown = styled(TextInput).attrs(({ theme }: { theme: DefaultTheme }) => ({
  placeholderTextColor: theme.color.theme.disabled,
}))`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;

  color: ${({ theme }) => theme.color.global.neutral[900]};
`;

const DownButton = styled(TouchableOpacity)``;

const DescriptionText = styled(BodyRegular12)<DropdownProps & { theme: DefaultTheme }>`
  margin-left: 3px;
  margin-top: 5px;

  font-style: normal;
  font-weight: 400;
  color: ${({ variant, theme }) =>
    variant === "destructive" ? theme.color.sys.destructive.default : theme.color.global.neutral[700]};
`;

export default Dropdown;
