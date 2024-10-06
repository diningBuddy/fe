import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";

import ThemeStyle from "../../styles/ThemeStyle";
import {
  BodyMedium14,
  BodyMedium16,
  BodyMedium18,
  BodyRegular12,
  BodyRegular18,
  BodySemibold10,
  BodySemibold12,
  BodySemibold14,
  BodySemibold16,
  BodySemibold18,
  HeadingRegular20,
  HeadingRegular24,
  HeadingSemiBold24,
  HeadingSemiBold28,
  HeadingSemiBold32,
  HeadingSemiBold40,
  HeadingSemiBold44,
} from "../../common/Typo";

const SampleFont = () => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <View style={styles.container}>
      <Text>스타일 컴포넌트 적용</Text>
      <HeadingSemiBold44>Display 1 </HeadingSemiBold44>
      <HeadingSemiBold40 color={theme.color.sys.primary.default}>Display 2</HeadingSemiBold40>
      <HeadingSemiBold32 color={theme.color.theme.secondaryText}>Display 3</HeadingSemiBold32>
      <HeadingSemiBold28 color={theme.color.theme.disabled}>Heading 1 Semibold</HeadingSemiBold28>
      <HeadingSemiBold24 color={theme.color.theme.border}>Heading 2 Semibold</HeadingSemiBold24>
      <HeadingRegular24>Heading 2 Regular</HeadingRegular24>
      <HeadingRegular20>Heading 3 Regular</HeadingRegular20>
      <BodySemibold18>Feature SemiBold</BodySemibold18>
      <BodySemibold16>Highlight SemiBold</BodySemibold16>
      <BodySemibold14>Content SemiBold</BodySemibold14>
      <BodySemibold12>Caption SemiBold</BodySemibold12>
      <BodySemibold10>Micro Semibold</BodySemibold10>
      <BodyMedium18>Feature Medium</BodyMedium18>
      <BodyMedium16>Highlight Medium</BodyMedium16>
      <BodyMedium14>Content Medium</BodyMedium14>
      <BodyRegular18>Feature Regular</BodyRegular18>
      <BodyRegular12>Caption Regular</BodyRegular12>
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

export default SampleFont;
