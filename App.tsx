import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemeContext, ThemeProvider } from "styled-components/native";

import SampleButton from "./src/components/sample/SampleButton";
import SampleCard from "./src/components/sample/SampleCard";
import SampleCheckbox from "./src/components/sample/SampleCheckbox";
import SampleChip from "./src/components/sample/SampleChip";
import SampleColor from "./src/components/sample/SampleColor";
import SampleDivider from "./src/components/sample/SampleDivider";
import SampleDropdown from "./src/components/sample/SampleDropdown";
import SampleEmpty from "./src/components/sample/SampleEmpty";
import SampleFloatingButton from "./src/components/sample/SampleFloatingButton";
import SampleFont from "./src/components/sample/SampleFont";
import SampleInput from "./src/components/sample/SampleInput";
import SampleModal from "./src/components/sample/SampleModal";
import SamplePopup from "./src/components/sample/SamplePopup";
import SampleProgress from "./src/components/sample/SampleProgress";
import SampleRadioGroup from "./src/components/sample/SampleRadioGroup";
import SampleSearch from "./src/components/sample/SampleSearch";
import SampleSpinner from "./src/components/sample/SampleSpinner";
import SampleStar from "./src/components/sample/SampleStar";
import SampleTab from "./src/components/sample/SampleTab";
import SampleTag from "./src/components/sample/SampleTag";
import SampleTextArea from "./src/components/sample/SampleTextArea";
import SampleToast from "./src/components/sample/SampleToast";
import SampleToggle from "./src/components/sample/SampleToggle";
import SampleTooltip from "./src/components/sample/SampleTooltip";
import Inquiry from "./src/screens/auth/Inquiry";
import SignIn from "./src/screens/auth/signIn";
import SignUp from "./src/screens/auth/signup";
import AccessRights from "./src/screens/auth/signup/AccessRights";
import InsertInfo from "./src/screens/auth/signup/InsertInfo";
import VerifyPhone from "./src/screens/auth/VerifyPhone";
import BrowserScreen from "./src/screens/BrowserScreen";
import ContentList from "./src/screens/dining/ContentList";
import RankingList from "./src/screens/dining/RankingList";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import MainScreen from "./src/screens/MainScreen";
import MapScreen from "./src/screens/MapScreen";
import MypageScreen from "./src/screens/MypageScreen";
import OnboardingPage from "./src/screens/onboarding";
import ReviewPage from "./src/screens/review";
import ThemeStyle from "./src/styles/ThemeStyle";
import { RootStackParamList, RouteNames } from "./src/utils/routes";

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

export default function App() {
  const theme = useContext(ThemeContext) || ThemeStyle;

  return (
    <ThemeProvider theme={ThemeStyle}>
      <NavigationContainer>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.container,
              headerShown: false,
            }}>
            {/* TODO: initialRouteName="SignIn" */}
            <Stack.Screen name={RouteNames.HOME_TAB} component={HomeTab} options={{ headerShown: false }} />
            <Stack.Screen name={RouteNames.REVIEWPAGE} component={ReviewPage} options={{ headerShown: false }} />
            <Stack.Screen name={RouteNames.ONBOARDING} component={OnboardingPage} options={{ headerShown: false }} />
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
            <Stack.Screen name={RouteNames.SAMPLE_CARD} component={SampleCard} />
            <Stack.Screen name={RouteNames.CONTENT_LIST} component={ContentList} />
            <Stack.Screen name={RouteNames.MAIN_SCREEN} component={MainScreen} />
          </Stack.Navigator>
        </ScrollView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
});
