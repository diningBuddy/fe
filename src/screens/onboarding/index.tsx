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
  chipContainer: {
    marginBottom: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },
  headerText: {
    color: "#595959",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  mainContent: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
  },
});

export default OnboardingPage;
