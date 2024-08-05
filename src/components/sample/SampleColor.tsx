import React, { useContext } from "react";
import styled, {
  ThemeProvider,
  ThemeContext,
  DefaultTheme,
} from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import ThemeStyle from "../../styles/ThemeStyle";

const SampleColor = () => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <View style={styles.container}>
      <StyledText>Primary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.primary.main} label="Main" />
        <ColorItem color={theme.color.primary.pressed} label="Pressed" />
        <ColorItem color={theme.color.primary.active} label="Active" />
        <ColorItem color={theme.color.primary.disabled} label="Disabled" />
      </ColorWrap>
      <StyledText>Secondary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.secondary.main} label="Main" />
        <ColorItem color={theme.color.secondary.pressed} label="Pressed" />
        <ColorItem color={theme.color.secondary.active} label="Active" />
        <ColorItem color={theme.color.secondary.disabled} label="Disabled" />
      </ColorWrap>
      <StyledText>Tertiary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.tertiary.main} label="Main" />
        <ColorItem color={theme.color.tertiary.pressed} label="Pressed" />
        <ColorItem color={theme.color.tertiary.active} label="Active" />
        <ColorItem color={theme.color.tertiary.disabled} label="Disabled" />
      </ColorWrap>

      <StyledText>Destructive</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.destructive.main} label="Main" />
        <ColorItem color={theme.color.destructive.pressed} label="Pressed" />
        <ColorItem color={theme.color.destructive.active} label="Active" />
        <ColorItem color={theme.color.destructive.disabled} label="Disabled" />
      </ColorWrap>

      <StyledText>Theme</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.theme.textMain} label="Main" />
        <ColorItem color={theme.color.theme.textSecondary} label="Pressed" />
        <ColorItem color={theme.color.theme.textDisabled} label="Active" />
        <ColorItem color={theme.color.theme.border} label="Disabled" />
      </ColorWrap>
      <ColorWrap>
        <ColorItem color={theme.color.theme.dividers} label="Disabled" />
        <ColorItem color={theme.color.theme.layoutBg} label="Disabled" />
        <ColorItem color={theme.color.theme.tableHeader} label="Disabled" />
      </ColorWrap>
    </View>
  );
};

const ColorItem: React.FC<{ color: string; label: string }> = ({
  color,
  label,
}) => (
  <ColorContainer>
    <StyledColor color={color} />
    <Text>{label}</Text>
  </ColorContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ColorWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ColorContainer = styled.View`
  align-items: center;
  margin: 12px;
`;

const StyledText = styled.Text`
  margin-top: 18px;
  font-size: 18px;
  color: black;
`;

const StyledColor = styled(TouchableOpacity)<{ color?: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color, theme }) =>
    color ? color : theme.color.primary.main};
`;

export default SampleColor;
