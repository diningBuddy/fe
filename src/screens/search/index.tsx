import { StyleSheet, ScrollView } from "react-native";

import SearchHeader from "./components/templates/SearchHeader";
import SearchMain from "./components/templates/SearchMain";

const SearchPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <NavigationHeader  />  */}
      <SearchHeader />
      <SearchMain />
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
export default SearchPage;
