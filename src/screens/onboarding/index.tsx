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
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },
});

export default OnboardingPage;
