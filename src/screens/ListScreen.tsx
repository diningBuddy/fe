import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeContext } from "styled-components/native";

import SampleColor from "../components/sample/SampleColor";
import ThemeStyle from "../styles/ThemeStyle";
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
