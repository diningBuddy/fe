import {ScrollView} from "react-native";
import styled from "styled-components/native";
import Popup from "../../common/atom/Popup";
import {useState} from "react";


const SamplePopup = () => {
    const [visible, setVisible] = useState(true);

    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
            <Popup visible={visible} onClose={() => setVisible(false)} />
        </ScrollViewContainer>
    )
}

const ScrollViewContainer = styled(ScrollView)`
    padding: 20px;
    background-color: #ffffff;
`;

export default SamplePopup;