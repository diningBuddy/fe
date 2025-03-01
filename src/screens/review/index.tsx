import { StyleSheet, ScrollView } from "react-native";

import ReviewHeader from "./components/templates/ReviewHeader";
import ReviewMain from "./components/templates/ReviewMain";

const ReviewPage = () => {
  return (
    <ScrollView>
      <ReviewHeader />
      <ReviewMain />
    </ScrollView>
  );
};

export default ReviewPage;
