import React, { useCallback, useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet } from "react-native";

import { RootStackParamList, RouteNames } from "../utils/routes";
import { HeadingSemiBold24 } from "../common/atom/Typo";

type Props = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({ navigation }: Props) {
  const theme = useContext(ThemeContext) || {};

  const navigateTo = useCallback(
    (route: keyof RootStackParamList) => {
      navigation.navigate(route);
    },
    [navigation]
  );

  const buttons = [
    { label: "MainScreen", route: RouteNames.MAIN_SCREEN },
    { label: "Onboarding", route: RouteNames.ONBOARDING },
    { label: "Review", route: RouteNames.REVIEWPAGE },
    { label: "RankingList", route: RouteNames.RANKINGLIST },
    { label: "Sample Card", route: RouteNames.SAMPLE_CARD },
    { label: "Sample Color", route: RouteNames.SAMPLE_COLOR },
    { label: "Sample Font", route: RouteNames.SAMPLE_FONT },
    { label: "Sample Tab", route: RouteNames.SAMPLE_TAB },
    { label: "Sample Button", route: RouteNames.SAMPLE_BUTTON },
    { label: "Sample Input", route: RouteNames.SAMPLE_INPUT },
    { label: "Sample Dropdown", route: RouteNames.SAMPLE_DROPDOWN },
    { label: "Sample Textarea", route: RouteNames.SAMPLE_TEXTAREA },
    { label: "Sample Tag", route: RouteNames.SAMPLE_TAG },
    { label: "Sample Search", route: RouteNames.SAMPLE_SEARCH },
    { label: "Sample Star", route: RouteNames.SAMPLE_STAR },
    { label: "Sample Chip", route: RouteNames.SAMPLE_CHIP },
    { label: "Sample Checkbox", route: RouteNames.SAMPLE_CHECKBOX },
    { label: "Sample FloatingButton", route: RouteNames.SAMPLE_FLOATINGBUTTON },
    { label: "Sample Divider", route: RouteNames.SAMPLE_DIVIDER },
    { label: "Sample checkbox", route: RouteNames.SAMPLE_CHECKBOX },
    { label: "Sample empty", route: RouteNames.SAMPLE_EMPTY },
    { label: "Sample toggle", route: RouteNames.SAMPLE_TOGGLE },
    { label: "Sample tooltip", route: RouteNames.SAMPLE_TOOLTIP },
    { label: "Sample Toast", route: RouteNames.SAMPLE_TOAST },
    { label: "Sample Popup", route: RouteNames.SAMPLE_POPUP },
    { label: "Sample Progress", route: RouteNames.SAMPLE_PROGRESS },
    { label: "signIn", route: RouteNames.SIGNIN },
    { label: "signUp", route: RouteNames.SIGNUP },
    { label: "VerifyPhone", route: RouteNames.VERIFY_PHONE },
    { label: "InsertInfo", route: RouteNames.INSERT_INFO },
    { label: "AccessRights", route: RouteNames.ACCESS_RIGHTS },
    { label: "Inquiry", route: RouteNames.INQUIRY },
    { label: "Sample Spinner", route: RouteNames.SAMPLE_SPINNER },
    { label: "Sample radio", route: RouteNames.SAMPLE_RADIO },
    { label: "Content List", route: RouteNames.CONTENT_LIST },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {buttons.map((item) => (
        <SampleBtn key={item.route} onPress={() => navigateTo(item.route)}>
          <HeadingSemiBold24>{item.label}</HeadingSemiBold24>
        </SampleBtn>
      ))}
    </ScrollView>
  );
}

const SampleBtn = styled.TouchableOpacity`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color?.sys?.primary?.default || "#000"};
  border-radius: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

export default HomeScreen;
