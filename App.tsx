import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import styled, {
  ThemeProvider,
  ThemeContext,
  DefaultTheme,
} from "styled-components/native";
import ThemeStyle from "./src/styles/ThemeStyle";

export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: any) => void;
} & TouchableOpacityProps;

const App: React.FC<Props> = ({ label, onPress, color, ...rest }) => {
  const theme = useContext(ThemeContext) || ThemeStyle;

  return (
    <ThemeProvider theme={ThemeStyle}>
      <View style={styles.container}>
        <Text>스타일 컴포넌트 적용</Text>
        <StatusBar style="auto" />
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
          <ColorItem
            color={theme.color.destructive.disabled}
            label="Disabled"
          />
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
    </ThemeProvider>
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
  justify-content: space-around; /* Optional: Adjust spacing between items */
`;

const ColorContainer = styled.View`
  align-items: center;
  margin: 12px;
`;

const StyledButton = styled(TouchableOpacity)<{ color?: string }>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme, color }) =>
    color ? color : theme.color.primary.main};
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

export default App;
