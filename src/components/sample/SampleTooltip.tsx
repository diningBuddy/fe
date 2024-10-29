import React from "react";
import { View, StyleSheet } from "react-native";

import Tooltip from "../../common/atom/Tooltip";

const SampleTooltip: React.FC = () => {
  return (
    <View style={styles.container}>
      <Tooltip message="내용을 전달 할게요" position="bottomCenter" />
      <Tooltip message="내용을 전달 할게요" position="bottomLeft" />
      <Tooltip message="내용을 전달 할게요" position="bottomRight" />
      <Tooltip message="내용을 전달 할게요" position="topCenter" />
      <Tooltip message="내용을 전달 할게요" position="topLeft" />
      <Tooltip message="내용을 전달 할게요" position="topRight" />
      <Tooltip message="내용을 전달 할게요" position="left" />
      <Tooltip message="내용을 전달 할게요" position="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

export default SampleTooltip;
