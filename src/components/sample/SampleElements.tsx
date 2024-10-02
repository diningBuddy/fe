import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SampleTextArea from "./SampleTextArea";
import { RouteNames } from "../../utils/routes";
import BrowserScreen from "../../screens/BrowserScreen";
import SampleColor from "./SampleColor";
import SampleFont from "./SampleFont";
import SampleButton from "./SampleButton";
import SampleInput from "./SampleInput";
import SampleTag from "./SampleTag";
import SampleSearch from "./SampleSearch";

// Stack Navigator 분리
const Stack = createNativeStackNavigator();

const SampleElements = () => (
  <Stack.Navigator>
    <Stack.Screen name={RouteNames.BROWSER} component={BrowserScreen} />
    <Stack.Screen name={RouteNames.SAMPLE_COLOR} component={SampleColor} />
    <Stack.Screen name={RouteNames.SAMPLE_FONT} component={SampleFont} />
    <Stack.Screen name={RouteNames.SAMPLE_BUTTON} component={SampleButton} />
    <Stack.Screen name={RouteNames.SAMPLE_INPUT} component={SampleInput} />
    <Stack.Screen name={RouteNames.SAMPLE_TEXTAREA} component={SampleTextArea} />
    <Stack.Screen name={RouteNames.SAMPLE_TAG} component={SampleTag} />
    <Stack.Screen name={RouteNames.SAMPLE_SEARCH} component={SampleSearch} />
  </Stack.Navigator>
);

export default SampleElements;
