import { StyleSheet, ScrollView } from "react-native";

import OnBoardingHeader from "./components/templates/OnBoardingHeader";
import OnBoardingMain from "./components/templates/OnBoardingMain";

const OnboardingPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OnBoardingHeader />
      <OnBoardingMain />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export default OnboardingPage;
