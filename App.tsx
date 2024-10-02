import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, View } from "react-native";
import { ThemeContext, ThemeProvider } from "styled-components/native";
import ThemeStyle from "./src/styles/ThemeStyle";
import ListScreen from "./src/screens/ListScreen";
import MapScreen from "./src/screens/MapScreen";
import { RootStackParamList, RouteNames } from "./src/utils/routes";
import MypageScreen from "./src/screens/MypageScreen";
import BrowserScreen from "./src/screens/BrowserScreen";
import { ArrowLeft } from "./src/assets/icons/arrow/normal";

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}>
    {/* <ArrowLeft /> */}
  </TouchableOpacity>
);

const ActionButton = () => (
  <TouchableOpacity onPress={() => alert("Action clicked!")}>
    <Text style={{ fontSize: 18 }}>Action</Text>
  </TouchableOpacity>
);

const DefaultScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
  </View>
);

export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: any) => void;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RouteNames.HOME}
        component={DefaultScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={RouteNames.LIST} component={ListScreen} />
      <Tab.Screen name={RouteNames.MAP} component={MapScreen} />
      <Tab.Screen name={RouteNames.MYPAGE} component={MypageScreen} />
    </Tab.Navigator>
  );
};

const App: React.FC<Props> = ({ label, onPress, color, ...rest }) => {
  const theme = useContext(ThemeContext) || ThemeStyle;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={RouteNames.HOME_TAB}
            component={HomeTab}
            options={({ navigation }) => ({
              title: "Title",
              headerLeft: () => <BackButton navigation={navigation} />,
              headerRight: () => <ActionButton />,
              headerTitleAlign: "center",
              headerStyle: {
                height: 48,
                backgroundColor: "#ffffff",
              },
            })}
          />
          <Stack.Screen name={RouteNames.BROWSER} component={BrowserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
