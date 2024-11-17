import { ScrollView } from "react-native";
import styled from "styled-components/native";

const SampleStar = () => {
  return <ScrollViewContainer keyboardShouldPersistTaps="handled" />;
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleStar;
