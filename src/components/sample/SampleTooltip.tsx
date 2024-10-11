import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Tooltip from "../../common/atom/Tooltip";

const SampleTooltip = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Tooltip message="내용을 전달 할게요" position="top" />
        <Tooltip message="내용을 전달 할게요" position="bottom" />
        <Tooltip message="내용을 전달 할게요" position="left" />
        <Tooltip message="내용을 전달 할게요" position="right" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default SampleTooltip;
