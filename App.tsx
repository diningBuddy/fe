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
import SampleRadioGroup from "./src/components/sample/SampleRadioGroup";
import SampleTag from "./src/components/sample/SampleTag";
import SampleSearch from "./src/components/sample/SampleSearch";
import SampleChip from "./src/components/sample/SampleChip";
import SampleCheckbox from "./src/components/sample/SampleCheckbox";
import SampleFloatingButton from "./src/components/sample/SampleFloatingButton";
import SampleEmpty from "./src/components/sample/SampleEmpty";
import SampleToggle from "./src/components/sample/SampleToggle";
import SampleTooltip from "./src/components/sample/SampleTooltip";
import SampleToast from "./src/components/sample/SampleToast";
import SampleTab from "./src/components/sample/SampleTab";
import SampleDivider from "./src/components/sample/SampleDivider";
import SampleStar from "./src/components/sample/SampleStar";
import SampleDropdown from "./src/components/sample/SampleDropdown";
import SampleModal from "./src/components/sample/SampleModal";
import SamplePopup from "./src/components/sample/SamplePopup";
import SampleProgress from "./src/components/sample/SampleProgress";
import SignIn from "./src/screens/auth/signIn";
import SignUp from "./src/screens/auth/signup";
import VerifyPhone from "./src/screens/auth/VerifyPhone";
import InsertInfo from "./src/screens/auth/signup/InsertInfo";
import AccessRights from "./src/screens/auth/signup/AccessRights";
import Inquiry from "./src/screens/auth/Inquiry";
import SampleSpinner from "./src/components/sample/SampleSpinner";
import RankingList from "./src/screens/dining/RankingList";

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
        {/* TODO: initialRouteName="SignIn" */}
        <Stack.Navigator>
          <Stack.Screen name={RouteNames.HOME_TAB} component={HomeTab} options={{ headerShown: false }} />
          <Stack.Screen name={RouteNames.BROWSER} component={BrowserScreen} />
          <Stack.Screen name={RouteNames.SAMPLE_MODAL} component={SampleModal} />
          <Stack.Screen name={RouteNames.SAMPLE_COLOR} component={SampleColor} />
          <Stack.Screen name={RouteNames.SAMPLE_FONT} component={SampleFont} />
          <Stack.Screen name={RouteNames.SAMPLE_TAB} component={SampleTab} />
          <Stack.Screen name={RouteNames.SAMPLE_BUTTON} component={SampleButton} />
          <Stack.Screen name={RouteNames.SAMPLE_INPUT} component={SampleInput} />
          <Stack.Screen name={RouteNames.SAMPLE_DROPDOWN} component={SampleDropdown} />
          <Stack.Screen name={RouteNames.SAMPLE_TEXTAREA} component={SampleTextArea} />
          <Stack.Screen name={RouteNames.SAMPLE_RADIO} component={SampleRadioGroup} />
          <Stack.Screen name={RouteNames.SAMPLE_TAG} component={SampleTag} />
          <Stack.Screen name={RouteNames.SAMPLE_SEARCH} component={SampleSearch} />
          <Stack.Screen name={RouteNames.SAMPLE_STAR} component={SampleStar} />
          <Stack.Screen name={RouteNames.SAMPLE_CHIP} component={SampleChip} />
          <Stack.Screen name={RouteNames.SAMPLE_DIVIDER} component={SampleDivider} />
          <Stack.Screen name={RouteNames.SAMPLE_CHECKBOX} component={SampleCheckbox} />
          <Stack.Screen name={RouteNames.SAMPLE_FLOATINGBUTTON} component={SampleFloatingButton} />
          <Stack.Screen name={RouteNames.SAMPLE_EMPTY} component={SampleEmpty} />
          <Stack.Screen name={RouteNames.SAMPLE_TOGGLE} component={SampleToggle} />
          <Stack.Screen name={RouteNames.SAMPLE_TOOLTIP} component={SampleTooltip} />
          <Stack.Screen name={RouteNames.SAMPLE_TOAST} component={SampleToast} />
          <Stack.Screen name={RouteNames.SAMPLE_POPUP} component={SamplePopup} />
          <Stack.Screen name={RouteNames.SAMPLE_PROGRESS} component={SampleProgress} />
          <Stack.Screen name={RouteNames.SIGNIN} component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name={RouteNames.SIGNUP} component={SignUp} />
          <Stack.Screen name={RouteNames.VERIFY_PHONE} component={VerifyPhone} />
          <Stack.Screen name={RouteNames.INSERT_INFO} component={InsertInfo} />
          <Stack.Screen name={RouteNames.ACCESS_RIGHTS} component={AccessRights} />
          <Stack.Screen name={RouteNames.INQUIRY} component={Inquiry} />
          <Stack.Screen name={RouteNames.SAMPLE_SPINNER} component={SampleSpinner} />
          <Stack.Screen name={RouteNames.RANKINGLIST} component={RankingList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
