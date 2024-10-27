import React, { useContext } from "react";
import { Modal, View, Text, Dimensions } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import {BodyMedium14, BodySemibold14, BodySemibold16} from "./Typo";

const Popup = ({ visible, onClose }) => {
    const windowWidth = Dimensions.get("window").width;
    const theme = useContext(ThemeContext) || {}; // ThemeContext에서 theme 가져오기

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Overlay>
                <PopupContainer style={{ width: windowWidth * 0.85 }}>
                    <PopupContent>
                        <Title>다음부터 자동으로 로그인됩니다</Title>
                        <Description>
                            비밀번호 설정 이후, 디바이스가
                            바뀌지 않으면 자동 로그인 됩니다.
                        </Description>
                    </PopupContent>
                    <ButtonContainer>
                        <CancelButton onPress={onClose} theme={theme}>
                            <CancelText>취소</CancelText>
                        </CancelButton>
                        <ConfirmButton onPress={onClose}>
                            <ConfirmText>알겠어요</ConfirmText>
                        </ConfirmButton>
                    </ButtonContainer>
                </PopupContainer>
            </Overlay>
        </Modal>
    );
};

const Overlay = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

const PopupContainer = styled(View)`
    background-color: ${({ theme }) => theme.color.global.neutral[100]};
    border-radius: 12px;
    padding: 20px 16px 16px 16px;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

const PopupContent = styled(View)`
    margin-bottom: 16px;
    align-items: center;
`;

const Title = styled(BodySemibold16)`
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.global.neutral[1300]};
    text-align: center;
    line-height: 24px;
`;

const Description = styled(BodyMedium14)`
    color: ${({ theme }) => theme.color.global.neutral[800]};
    text-align: center;
    line-height: 20px;
    max-width: 220px;
`;

const ButtonContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const CancelButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.color.global.neutral[100]};
    border: 1px solid ${({ theme }) => theme.color.theme.border};
    padding: 12px 14px;
    border-radius: 6px;
    margin-right: 8px;
    flex: 1;
`;

const ConfirmButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.color.sys.primary.default};
    padding: 12px 14px;
    border-radius: 6px;
    flex: 1;
`;

const CancelText = styled(BodySemibold14)`
    color: ${({ theme }) => theme.color.theme.headingText};
    text-align: center;
    line-height: 20px;
`;

const ConfirmText = styled(BodySemibold14)`
    color: ${({ theme }) => theme.color.global.neutral[100]};
    text-align: center;
    line-height: 20px;
`;

export default Popup;