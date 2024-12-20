import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { ScrollView, StyleSheet, View } from "react-native";

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
  Typo,
} from "../../common/atom/Typo";

const SampleFont = () => {
  const theme = useContext(ThemeContext) || ThemeStyle;
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Heading start */}
        <Typo type="display1" margin="16px 0" color="gray">
          Headings/Display1/Bold //700
        </Typo>
        <Typo type="display2" margin="16px 0" color="gray">
          Headings/Display2/Bold //700
        </Typo>
        <Typo type="display3" margin="16px 0" color="gray">
          Headings/Display2/Bold //700
        </Typo>

        <Typo type="heading1" margin="16px 0" color="gray">
          Headings/Heading1/Bold //700
        </Typo>

        <Typo type="heading2" margin="16px 0" color="gray" boldSize="700">
          Headings/Heading2/Bold //700
        </Typo>

        <Typo type="heading2" margin="16px 0" color="gray">
          Headings/Heading2/Regular //400
        </Typo>

        <Typo type="heading3" margin="16px 0" color="gray" boldSize="700">
          Headings/Heading3/Bold //700
        </Typo>

        <Typo type="heading3" margin="16px 0" color="gray">
          Headings/Heading3/Regular //400
        </Typo>
        {/* Heading end */}

        {/* Body start */}
        <Typo type="feature" margin="16px 0" color="gray" boldSize="700">
          Body/Feature/SemiBold //600
        </Typo>

        <Typo type="feature" margin="16px 0" color="gray" boldSize="500">
          Body/Feature/Medium //500
        </Typo>

        <Typo type="highlight" margin="16px 0" color="gray">
          Body/Highlight/Regular //400
        </Typo>

        <Typo type="highlight" margin="16px 0" color="gray" boldSize="500">
          Body/Highlight/Medium //500
        </Typo>

        <Typo type="content" margin="16px 0" color="gray" boldSize="600">
          Body/content/SemiBold //700? 600인 것같음 확인 필요
        </Typo>

        <Typo type="content" margin="16px 0" color="gray" boldSize="500">
          Body/content/Medium //500
        </Typo>

        <Typo type="content" margin="16px 0" color="gray">
          Body/content/Regular //400
        </Typo>

        <Typo type="caption" margin="16px 0" color="gray" boldSize="500">
          Body/Caption/Medium //500
        </Typo>

        <Typo type="caption" margin="16px 0" color="gray">
          Body/Caption/Regular //400
        </Typo>

        <Typo type="micro" margin="16px 0" color="gray" boldSize="600">
          Body/Micro/Semibold //600
        </Typo>
        {/* Body end */}

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default SampleFont;
