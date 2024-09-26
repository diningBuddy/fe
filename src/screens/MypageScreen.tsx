import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, RouteNames } from "../utils/routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const MypageScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>MypageScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>Go to Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MypageScreen;
