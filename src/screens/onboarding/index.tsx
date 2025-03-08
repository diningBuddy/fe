import { StyleSheet, ScrollView } from "react-native";

import OnBoardingHeader from "./components/templates/OnBoardingHeader";
import OnBoardingMain from "./components/templates/OnBoardingMain";
import NavigationHeader from "../../common/atom/NavigationHeader";

const OnboardingPage = () => {
  return (
    <>
      <NavigationHeader isGoBackButton />
      <OnBoardingHeader />
      <OnBoardingMain />
    </>
  );
};

export default OnboardingPage;
