import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../common/atom/Input";
import TextArea from "../../common/atom/TextAre";
import { Button } from "../../common/atom/Button";

export const Inquiry = () => {
  return (
    <View style={styles.container}>
      {/* header title font은 다 같아서 별도로 커스텀해도 좋을 것같음 */}
      {/* fw: 700, fs: 20px, color: #434343 */}
      <Text>무엇을 도와드릴까요?</Text>
      <Text style={styles.infoContent}>로그인을 위해 휴대폰 인증을 진행해 주세요</Text>
      <Input variant="default" label="이메일" placeholder="답변을 받을 이메일을 입력해주세요" />
      <Input variant="default" label="제목" placeholder="제목을 입력해주세요 (30자 이내)" />
      <TextArea variant="default" label="내용" placeholder="내용을 입력해 주세요. 특수문자는 입력하실 수 없습니다." />
      <Button>접수</Button>
    </View>
  );
};

const commonStyles = {
  marginVertical: 16,
  fontSize: 14,
  color: "#555",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  infoContent: {
    ...commonStyles,
    marginBottom: 16,
  },
});

export default Inquiry;
