import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList, RouteNames } from "../utils/routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const MapScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>MapScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>Go to Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
