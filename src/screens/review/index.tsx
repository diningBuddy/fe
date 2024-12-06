import { StyleSheet, ScrollView } from "react-native";

import ReviewHeader from "./components/templates/ReviewHeader";
import ReviewMain from "./components/templates/ReviewMain";

const ReviewPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <NavigationHeader title: 리뷰쓰기 />  */}
      <ReviewHeader />
      <ReviewMain />
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
export default ReviewPage;
