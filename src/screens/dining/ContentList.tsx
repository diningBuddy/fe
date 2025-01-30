import { StyleSheet, ScrollView, Alert } from "react-native";

import Card from "../../common/atom/Card";
import { lunchToday } from "../../mock/DiningMockData";

export const ContentListPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {/* <NavigationHeader title: 점심 맛집 정복, 오늘은 뭐 먹지? , 야식의 성지 새벽까지 든든하게/>  */}
      <Card
        data={lunchToday.map((item) => ({
          ...item,
          onPress: () => Alert.alert("세로형 카드 컴포넌트"),
        }))}
        isHorizontal={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  cardAddress: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 4,
  },
});

export default ContentListPage;
