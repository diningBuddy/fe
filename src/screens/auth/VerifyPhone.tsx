import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import { Button } from "../../common/atom/Button";
import Input from "../../common/atom/Input";
import Toast from "../../common/atom/Toast";

export const VerifyPhone = () => {
  const [isVerifyRequested, setVerifyRequested] = useState(false);
  const [isSendNumber, setIsSendNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifyNumber, setVerifyNumber] = useState("");

  if (isSendNumber && isVerifyRequested) {
    Alert.alert("인증 완료", "휴대폰 인증이 완료되었습니다.");
  }

  const handleRequestSend = async () => {
    if (!phoneNumber) {
      Alert.alert("오류", "휴대폰 번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("http://144.24.70.249/v1/sms/send-certification-number", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSendNumber(true);
      } else {
        Alert.alert("오류", data.message || "인증 요청에 실패했습니다.");
      }
    } catch (error) {
      Alert.alert("오류", "서버와의 통신 중 문제가 발생했습니다.");
    }
  };

  const handleRequestVerify = async () => {
    if (!verifyNumber) {
      Alert.alert("오류", "휴대폰 번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("http://144.24.70.249/v1/sms/verify-certification-number", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, certificationNumber: verifyNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerifyRequested(true);
      } else {
        Alert.alert("오류", data.message || "인증 요청에 실패했습니다.");
      }
    } catch (error) {
      Alert.alert("오류", "서버와의 통신 중 문제가 발생했습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>휴대폰 번호 인증하기</Text>
      <Text style={styles.infoContent}>가입을 위해 휴대폰 인증을 진행해 주세요</Text>

      <View style={styles.inputContainer}>
        <Input
          variant="default"
          label="휴대폰 번호"
          placeholder="- 제외하고 숫자만 입력"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button onPress={handleRequestSend} height="lg">
          인증요청
        </Button>
      </View>

      {isSendNumber && (
        <View style={styles.inputContainer}>
          <Input
            variant="default"
            label="인증코드"
            placeholder="인증코드를 입력해 주세요"
            value={verifyNumber}
            onChangeText={setVerifyNumber}
          />
          <Button height="lg" onPress={handleRequestVerify}>
            확인
          </Button>
        </View>
      )}
      {isSendNumber && <Toast message="인증번호가 전송되었어요!" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 24,
  },
  infoContent: {
    color: "#555",
    fontSize: 14,
    marginBottom: 40,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  title: {
    color: "#434343",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
});

export default VerifyPhone;
