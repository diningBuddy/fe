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
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ThemeStyle from "../styles/ThemeStyle";
import SampleFont from "../components/sample/SampleFont";
import { RootStackParamList, RouteNames } from "../utils/routes";
import { HeadingSemiBold24 } from "../common/Typo";

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <View style={styles.container}>
      <SampleBtn
        onPress={() => {
          navigation.navigate(RouteNames.SAMPLE_COLOR);
        }}
      >
        <HeadingSemiBold24>Sample Color</HeadingSemiBold24>
      </SampleBtn>

      <SampleBtn
        onPress={() => {
          navigation.navigate(RouteNames.SAMPLE_FONT);
        }}
      >
        <HeadingSemiBold24>Sample Font</HeadingSemiBold24>
      </SampleBtn>

      <SampleBtn
          onPress={() => {
            navigation.navigate(RouteNames.SAMPLE_INPUT);
          }}
      >
        <HeadingSemiBold24>Sample Input</HeadingSemiBold24>
      </SampleBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SampleBtn = styled(TouchableOpacity)`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.primary.main};
  border-radius: 8px;
  margin-bottom: 12px;
  align-items: center;
`;
const StyledColor = styled(TouchableOpacity)<{ color?: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color, theme }) =>
    color ? color : theme.color.primary.main};
`;

export default HomeScreen;
