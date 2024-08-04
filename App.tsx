import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import styled from "styled-components/native";

export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: any) => void;
} & TouchableOpacityProps;

const App: React.FC<Props> = ({ label, onPress, color, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text>스타일 컴포넌트 적용</Text>
      <StatusBar style="auto" />
      <StyledButton onPress={onPress} color={color} {...rest}>
        <StyledText>{label}</StyledText>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StyledButton = styled(TouchableOpacity)<{ color?: string }>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ color }) => (color ? color : "green")};
`;

const StyledText = styled.Text`
  color: white;
`;

export default App;
