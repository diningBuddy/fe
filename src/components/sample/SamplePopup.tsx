import {ScrollView} from "react-native";
import styled from "styled-components/native";


const SamplePopup = () => {
    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
        </ScrollViewContainer>
    )
}

const ScrollViewContainer = styled(ScrollView)`
    padding: 20px;
    background-color: #ffffff;
`;

export default SamplePopup;