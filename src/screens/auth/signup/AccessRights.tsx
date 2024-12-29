import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { Button } from "../../../common/atom/Button";
import Divider from "../../../common/atom/Divier";

export const AccessRights = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* fw: 700, fs: 20px, color: #434343 */}
        <Text>버디님의 정보를 입력해주세요</Text>

        {/* fw:400, fs:14px, color:#595959 */}
        <Text>회원님의 정보를 통해 맞춤 콘텐츠를 추천해 드려요</Text>

        {/* fw: 600, fs:14px, #000000E5 */}
        <Text>전체 동의</Text>
        <Divider size="thin" orientation="horizontal" color="##0000001A" />

        {/* 임시로 list */}
        <View>
          {[
            "[필수] 서비스 이용약관",
            "[필수] 개인정보 수집ᆞ이용",
            "[필수] 개인정보 처리 방침 1",
            "[필수] 개인정보 처리 방침 2",
          ].map((item, index) => (
            <TouchableOpacity key={index}>
              {/* ListItem common Component */}
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button>확인</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default AccessRights;
