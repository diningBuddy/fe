import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../common/atom/Input";
import Toast from "../../common/atom/Toast";
import { Button } from "../../common/atom/Button";

export const VerifyPhone = () => {
  const [isVerifyRequested, setVerifyRequested] = useState(false);
  const [isSendNumber, setIsSendNumber] = useState(false);

  const handleRequestVerify = () => {
    setVerifyRequested(true);
    setIsSendNumber(true);
  };

  return (
    // TODO: input + button 형태 컴포넌트 작업
    // Button 인증 전송 후 시간 초 작업
    <View style={styles.container}>
      {/* fw: 700, fs: 20px, color: #434343 */}
      <Text style={styles.title}>휴대폰 번호 인증하기</Text>
      <Text style={styles.infoContent}>가입을 위해 휴대폰 인증을 진행해 주세요</Text>

      {/* 휴대폰 입력 필드 */}
      <View style={styles.inputContainer}>
        <Input variant="default" label="휴대폰 번호" placeholder="- 제외하고 숫자만 입력" style={styles.input} />
        <Button onPress={handleRequestVerify} height="lg">
          인증요청
        </Button>
      </View>

      {isVerifyRequested && (
        <View style={styles.inputContainer}>
          <Input variant="default" label="인증코드" placeholder="인증코드를 입력해 주세요" />
          <Button height="lg">확인</Button>
        </View>
      )}
      {isSendNumber && <Toast message="인증번호가 전송되었어요!" />}

      {/* <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        isSimple={popupProps.isSimple}
        isTwoButton={popupProps.isTwoButton}
        isShowImage={popupProps.isShowImage}
        title={popupProps.title}
        description={popupProps.description}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
});

export default VerifyPhone;
