import { StyleSheet, Text } from "react-native";

import { HeadingRegular20 } from "../../../../common/atom/Typo";
import NavigationHeader from "../../../../common/atom/NavigationHeader";

const OnboardingHeader = () => {
  return (
    <>
      <NavigationHeader isGoBackButton />

      <HeadingRegular20>3초만 내어주세요!</HeadingRegular20>
      {/* 12px 500 #595959 */}
      <Text style={styles.headerText}>나와 비슷한 사람들이 많이</Text>
      <Text style={styles.headerText}>찾는 키워드를 만나 볼 수 있어요.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  headerText: {
    color: "#595959",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default OnboardingHeader;
