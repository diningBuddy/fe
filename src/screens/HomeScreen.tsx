import React, { useContext, useCallback } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, RouteNames } from "../utils/routes";
import { HeadingSemiBold24 } from "../common/Typo";

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
    { label: "Sample Color", route: RouteNames.SAMPLE_COLOR },
    { label: "Sample Font", route: RouteNames.SAMPLE_FONT },
    { label: "Sample Button", route: RouteNames.SAMPLE_BUTTON },
    { label: "Sample Input", route: RouteNames.SAMPLE_INPUT },
    { label: "Sample Textarea", route: RouteNames.SAMPLE_TEXTAREA },
    { label: "Sample Tag", route: RouteNames.SAMPLE_TAG },
    { label: "Sample Search", route: RouteNames.SAMPLE_SEARCH },
  ];

  return (
    <Container>
      {buttons.map((item) => (
        <SampleBtn key={item.route} onPress={() => navigateTo(item.route)}>
          <HeadingSemiBold24>{item.label}</HeadingSemiBold24>
        </SampleBtn>
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const SampleBtn = styled.TouchableOpacity`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color?.sys?.primary?.default || "#000"};
  border-radius: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

export default HomeScreen;
