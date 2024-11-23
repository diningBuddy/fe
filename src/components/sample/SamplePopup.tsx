import {Button, ScrollView} from "react-native";
import styled from "styled-components/native";
import Popup from "../../common/atom/Popup";
import React, {useState} from "react";


const SamplePopup = () => {
    const [visible, setVisible] = useState(false);
    const [popupProps, setPopupProps] = useState({
        isSimple: false,
        isTwoButton: false,
        isShowImage: false,
    });

    const showPopup = (isSimple: boolean, isTwoButton: boolean, isShowImage: boolean) => {
        setPopupProps({isSimple, isTwoButton, isShowImage});
        setVisible(true);
    };

    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
            <Button
                title="Show Popup: Simple false, TwoButton false, ShowImage false"
                onPress={() => showPopup(false, false, false)}
            />
            {/* 지원하지 않음 */}
            {/*<Button*/}
            {/*    title="Show Popup: Simple true, TwoButton false, ShowImage false"*/}
            {/*    onPress={() => showPopup(true, false, false)}*/}
            {/*/>*/}
            <Button
                title="Show Popup: Simple false, TwoButton true, ShowImage false"
                onPress={() => showPopup(false, true, false)}
            />
            <Button
                title="Show Popup: Simple true, TwoButton true, ShowImage false"
                onPress={() => showPopup(true, true, false)}
            />
            <Button
                title="Show Popup: Simple false, TwoButton false, ShowImage true"
                onPress={() => showPopup(false, false, true)}
            />
            {/* 지원하지 않음 */}
            {/*<Button*/}
            {/*    title="Show Popup: Simple true, TwoButton false, ShowImage true"*/}
            {/*    onPress={() => showPopup(true, false, true)}*/}
            {/*/>*/}
            <Button
                title="Show Popup: Simple false, TwoButton true, ShowImage true"
                onPress={() => showPopup(false, true, true)}
            />
            <Button
                title="Show Popup: Simple true, TwoButton true, ShowImage true"
                onPress={() => showPopup(true, true, true)}
            />

            <Popup
                visible={visible}
                onClose={() => setVisible(false)}
                isSimple={popupProps.isSimple}
                isTwoButton={popupProps.isTwoButton}
                isShowImage={popupProps.isShowImage}
            />
        </ScrollViewContainer>
    );
};

const ScrollViewContainer = styled(ScrollView)`
    padding: 20px;
    background-color: #ffffff;
`;

export default SamplePopup;