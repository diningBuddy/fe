import styled from "styled-components/native";
import {ScrollView} from "react-native";

const SampleToast = () => {
    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
        </ScrollViewContainer>
    )
}

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleToast;