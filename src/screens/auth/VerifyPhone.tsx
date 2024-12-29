import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../common/atom/Input";
import Toast from "../../common/atom/Toast";
import { Button } from "../../common/atom/Button";

export const VerifyPhone = () => {
  const isVerifySuccess = true;
  return (
    // TODO: input + button 형태 컴포넌트 작업
    // Button 인증 전송 후 시간 초 작업
    <View style={styles.container}>
      {/* fw: 700, fs: 20px, color: #434343 */}
      <Text>휴대폰 번호 인증하기</Text>
      <Text style={styles.infoContent}>로그인을 위해 휴대폰 인증을 진행해 주세요</Text>
      {/* <FlexBox> */}
      <Input variant="default" label="휴대폰 번호" placeholder="- 제외하고 숫자만 입력" />
      <Button>인증요청</Button>
      {isVerifySuccess && (
        // <FlexBox>
        <>
          {/* <FlexBox> */}
          <Input variant="default" label="인증코드" placeholder="인증코드를 입력해 주세요" />
          <Button>확인</Button> {/* </FlexBox> */}
        </>
      )}
      {/* </FlexBox> */}
      <Toast message="인증번호가 전송되었어요!" />

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

const commonStyles = {
  marginVertical: 16,
  fontSize: 14,
  color: "#555",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  infoContent: {
    ...commonStyles,
    marginBottom: 16,
  },
});

export default VerifyPhone;
