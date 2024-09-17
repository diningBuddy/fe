import React, { useContext } from "react";
import styled, { ThemeProvider, ThemeContext, DefaultTheme } from "styled-components/native";
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ThemeStyle from "../styles/ThemeStyle";
import SampleColor from "../components/sample/SampleColor";
import { RootStackParamList, RouteNames } from "../utils/routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const ListScreen = ({ navigation }: Props) => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>SampleColor</Text>
      </TouchableOpacity>
      <SampleColor />
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
  background-color: ${({ theme, color }) => (color ? color : theme.color.sys.primary.default)};
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

export default ListScreen;
