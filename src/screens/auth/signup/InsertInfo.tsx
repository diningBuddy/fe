import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Popup from "../../../common/atom/Popup";
import { Button } from "../../../common/atom/Button";
import Input from "../../../common/atom/Input";

export const InsertInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* fw: 700, fs: 20px, color: #434343 */}
        <Text>버디님의 정보를 입력해주세요</Text>

        {/* fw:400, fs:14px, color:#595959 */}
        <Text>회원님의 정보를 통해 맞춤 콘텐츠를 추천해 드려요</Text>

        <View style={styles.genderWrap}>
          <Text>성별</Text>
          {/* <FlexBox gap={8}> */}
          <Button>남</Button>
          <Button>여</Button>
          {/* </FlexBox> */}

          {/* fw:400, fs:12px #FF6D59 */}
          <Text>성별을 선택해주세요</Text>
        </View>

        <Input variant="default" label="생년월일" placeholder="" />
        <Input variant="default" label="이름" placeholder="" />
        <Input variant="default" label="휴대폰 번호" placeholder="" />
        <Button>다음</Button>

        {/* <Popup />
         * 지금 중단 시 모든 정보가 사라집니다.
         */}
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
  genderWrap: {
    marginBottom: 24,
  },
});

export default InsertInfo;
