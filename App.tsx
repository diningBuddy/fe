import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacityProps } from "react-native";
import { ThemeContext, ThemeProvider } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ThemeStyle from "./src/styles/ThemeStyle";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import MapScreen from "./src/screens/MapScreen";
import { RootStackParamList, RouteNames } from "./src/utils/routes";
import MypageScreen from "./src/screens/MypageScreen";
import BrowserScreen from "./src/screens/BrowserScreen";
import SampleColor from "./src/components/sample/SampleColor";
import SampleFont from "./src/components/sample/SampleFont";
import SampleButton from "./src/components/sample/SampleButton";
import SampleInput from "./src/components/sample/SampleInput";
import SampleTextArea from "./src/components/sample/SampleTextArea";
import SampleTag from "./src/components/sample/SampleTag";
import SampleSearch from "./src/components/sample/SampleSearch";
import SampleChip from "./src/components/sample/SampleChip";
import SampleCheckbox from "./src/components/sample/SampleCheckbox";
import SampleTooltip from "./src/components/sample/SampleTooltip";

export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: unknown) => void;
} & TouchableOpacityProps;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteNames.HOME} component={HomeScreen} />
      <Tab.Screen name={RouteNames.LIST} component={ListScreen} />
      <Tab.Screen name={RouteNames.MAP} component={MapScreen} />
      <Tab.Screen name={RouteNames.MYPAGE} component={MypageScreen} />
    </Tab.Navigator>
  );
};

const App: React.FC<Props> = ({ label, onPress, color, ...rest }) => {
  const theme = useContext(ThemeContext) || ThemeStyle;

  return (
    <ThemeProvider theme={ThemeStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={RouteNames.HOME_TAB} component={HomeTab} options={{ headerShown: false }} />
          <Stack.Screen name={RouteNames.BROWSER} component={BrowserScreen} />
          <Stack.Screen name={RouteNames.SAMPLE_COLOR} component={SampleColor} />
          <Stack.Screen name={RouteNames.SAMPLE_FONT} component={SampleFont} />
          <Stack.Screen name={RouteNames.SAMPLE_BUTTON} component={SampleButton} />
          <Stack.Screen name={RouteNames.SAMPLE_INPUT} component={SampleInput} />
          <Stack.Screen name={RouteNames.SAMPLE_TEXTAREA} component={SampleTextArea} />
          <Stack.Screen name={RouteNames.SAMPLE_TAG} component={SampleTag} />
          <Stack.Screen name={RouteNames.SAMPLE_SEARCH} component={SampleSearch} />
          <Stack.Screen name={RouteNames.SAMPLE_CHIP} component={SampleChip} />
          <Stack.Screen name={RouteNames.SAMPLE_CHECKBOX} component={SampleCheckbox} />
          <Stack.Screen name={RouteNames.SAMPLE_TOOLTIP} component={SampleTooltip} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
