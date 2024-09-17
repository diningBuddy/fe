import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ThemeStyle from "../../styles/ThemeStyle";

const SampleColor = () => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <View style={styles.container}>
      <StyledText>Sys Primary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.sys.primary.default} label="Default" />
        <ColorItem color={theme.color.sys.primary.pressed} label="Pressed" />
        <ColorItem color={theme.color.sys.primary.active} label="Active" />
        <ColorItem color={theme.color.sys.primary.disabled} label="Disabled" />
      </ColorWrap>
      <StyledText>Sys Secondary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.sys.secondary.default} label="Default" />
        <ColorItem color={theme.color.sys.secondary.pressed} label="Pressed" />
        <ColorItem color={theme.color.sys.secondary.active} label="Active" />
        <ColorItem color={theme.color.sys.secondary.disabled} label="Disabled" />
      </ColorWrap>
      <StyledText>Sys Tertiary</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.sys.tertiary.default} label="Default" />
        <ColorItem color={theme.color.sys.tertiary.pressed} label="Pressed" />
        <ColorItem color={theme.color.sys.tertiary.active} label="Active" />
        <ColorItem color={theme.color.sys.tertiary.disabled} label="Disabled" />
      </ColorWrap>

      <StyledText>Sys Destructive</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.sys.destructive.default} label="Default" />
        <ColorItem color={theme.color.sys.destructive.pressed} label="Pressed" />
        <ColorItem color={theme.color.sys.destructive.active} label="Active" />
        <ColorItem color={theme.color.sys.destructive.disabled} label="Disabled" />
      </ColorWrap>

      <StyledText>Theme</StyledText>
      <ColorWrap>
        <ColorItem color={theme.color.theme.headingText} label="headingText" />
        <ColorItem color={theme.color.theme.text} label="text" />
        <ColorItem color={theme.color.theme.secondaryText} label="secondaryText" />
        <ColorItem color={theme.color.theme.disabled} label="disabled" />
        <ColorItem color={theme.color.theme.border} label="border" />
        <ColorItem color={theme.color.theme.dividers} label="dividers" />
        <ColorItem color={theme.color.theme.layoutBackground} label="layoutBackground" />
      </ColorWrap>
    </View>
  );
};

const ColorItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
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
  background-color: ${({ color, theme }) => (color ? color : theme.color.sys.primary.default)};
`;

export default SampleColor;
