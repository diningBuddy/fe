import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

export default ListScreen;
