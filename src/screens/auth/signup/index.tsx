import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../../common/atom/Input";
import { Button } from "../../../common/atom/Button";

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Input variant="default" label="이름" placeholder="" />
      <Input variant="default" label="휴대폰 번호" placeholder="" />
      <Button>다음</Button>
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

export default SignUp;
