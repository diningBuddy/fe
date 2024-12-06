import { StyleSheet, ScrollView } from "react-native";

const EditProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <NavigationHeader />  */}
      {/* <Profile /> */}

      <p>프로필</p>
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
export default EditProfile;
