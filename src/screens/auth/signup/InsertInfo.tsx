import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../../common/atom/Button";
import Input from "../../../common/atom/Input";

export const InsertInfo = () => {
  const navigation = useNavigation();

  const handleNextStep = () => {
    navigation.navigate("AccessRights");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* fw: 700, fs: 20px, color: #434343 */}
        <Text style={styles.title}>버디님의 정보를 입력해주세요</Text>

        {/* fw:400, fs:14px, color:#595959 */}
        <Text style={styles.infoContent}>회원님의 정보를 통해 맞춤 콘텐츠를 추천해 드려요</Text>

        <Text>성별</Text>
        <View style={styles.genderWrap}>
          <Button>남</Button>
          <Button>여</Button>
          <Text>성별을 선택해주세요</Text>
        </View>

        {/* fw:400, fs:12px #FF6D59 */}

        <Input variant="default" label="생년월일" placeholder="" />
        <Input variant="default" label="이름" placeholder="" />
        <Input variant="default" label="휴대폰 번호" placeholder="" />

        {/* <Popup />
         * 지금 중단 시 모든 정보가 사라집니다.
         */}
      </View>
      <View style={styles.bottomButton}>
        <Button height="lg" onPress={handleNextStep}>
          다음
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#434343",
    marginBottom: 16,
  },
  infoContent: {
    fontSize: 14,
    color: "#555",
    marginBottom: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  genderWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  bottomButton: {
    padding: 16,
  },
});

export default InsertInfo;
