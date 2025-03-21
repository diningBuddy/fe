import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import styled, { ThemeContext, DefaultTheme } from "styled-components/native";

import ThemeStyle from "../../styles/ThemeStyle";

const ColorItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <ColorContainer>
    <StyledColor color={color} />
    <Text>{label}</Text>
  </ColorContainer>
);

const SampleColor: React.FC = () => {
  const theme = (useContext(ThemeContext) as DefaultTheme) || ThemeStyle;

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          <ColorItem color={theme.color.theme.headingText} label="heading" />
          <ColorItem color={theme.color.theme.text} label="text" />
          <ColorItem color={theme.color.theme.secondaryText} label="secondary" />
          <ColorItem color={theme.color.theme.disabled} label="disabled" />
        </ColorWrap>

        <ColorWrap>
          <ColorItem color={theme.color.theme.border} label="border" />
          <ColorItem color={theme.color.theme.dividers} label="dividers" />
          <ColorItem color={theme.color.theme.layoutBackground} label="layout" />
        </ColorWrap>
      </View>
    </ScrollView>
  );
};

const StyledText = styled.Text`
  margin-top: 18px;
  font-size: 18px;
  color: black;
`;

const ColorWrap = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ColorContainer = styled.View`
  align-items: center;
  margin: 12px;
`;

const StyledColor = styled(TouchableOpacity)<{ color?: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color, theme }) => color || theme.color.sys.primary.default};
`;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

export default SampleColor;
