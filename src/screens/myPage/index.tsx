import { StyleSheet, ScrollView } from "react-native";

import { MypageHeader } from "./components/templates/MypageHeader";
import { MypageMain } from "./components/templates/MypageMain";

const MyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MypageHeader />
      <MypageMain />
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

export default MyPage;
