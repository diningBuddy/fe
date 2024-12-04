import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import React from "react";

const SampleModal = ({ navigation }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 28,
      textAlign: "center",
    },
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // 기본 헤더 숨기기
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Title" titleStyle={styles.title} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default SampleModal;
