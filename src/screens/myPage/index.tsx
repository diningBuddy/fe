import { StyleSheet, ScrollView } from "react-native";

import { MypageMain } from "./components/templates/MypageMain";
import { MypageHeader } from "./components/templates/MypageHeader";

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
