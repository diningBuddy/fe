import { View, StyleSheet, ScrollView, Text } from "react-native";

import { BodySemibold14, BodySemibold16 } from "../../common/atom/Typo";
import contentList from "../../mock/ContentListMockData";

export const ContentListPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      <View>
        {/* <NavigationHeader title: 점심 맛집 정복, 오늘은 뭐 먹지? , 야식의 성지 새벽까지 든든하게/>  */}

        {/* TODO： <Card /> 추가 */}
        {contentList.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* <Image source={item.img} style={styles.cardImage} /> */}
            <View style={styles.cardContent}>
              <BodySemibold16>{item.title}</BodySemibold16>
              <BodySemibold14>
                {/* <star />  TODO: icon 추가 */} {item.grade}
              </BodySemibold14>
              <Text style={styles.cardAddress}>{item.adress}</Text>
            </View>
          </View>
        ))}
      </View>
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
