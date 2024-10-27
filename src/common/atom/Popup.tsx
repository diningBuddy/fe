import React, {useContext, useState} from "react";
import {Dimensions, Modal, View, Image} from "react-native";
import styled, {DefaultTheme, ThemeContext} from "styled-components/native";
import {BodyMedium14, BodySemibold14, BodySemibold16} from "./Typo";

interface PopupProps {
    visible: boolean;
    onClose: () => void;
    isSimple: boolean;
    isTwoButton: boolean;
    isShowImage: boolean;
    imageUrl?: string;
}

const Popup: React.FC<PopupProps> = ({
                                         visible = true,
                                         onClose,
                                         isSimple = false,
                                         isTwoButton = true,
                                         isShowImage = false,
                                         imageUrl,
                                     }) => {
    const windowWidth = Dimensions.get("window").width;
    const theme = useContext(ThemeContext) || {};
    const [imageError, setImageError] = useState(false);

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Overlay>
                <PopupContainer style={{width: windowWidth * 0.85}}>
                    {isShowImage && (
                        <ImageContainer>
                            {!imageError && imageUrl ? (
                                <StyledImage
                                    source={{uri: imageUrl}}
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <PlaceholderView theme={theme}/>
                            )}
                        </ImageContainer>
                    )}
                    <PopupContent>
                        <Title>다음부터 자동으로 로그인됩니다</Title>
                        <Description>
                            비밀번호 설정 이후, 디바이스가
                            바뀌지 않으면 자동 로그인 됩니다.
                        </Description>
                    </PopupContent>
                    <ButtonContainer>
                        {isTwoButton ? (
                            <>
                                <CancelButton onPress={onClose} theme={theme} isSimple={isSimple}>
                                    <CancelText theme={theme} isSimple={isSimple}>
                                        {isSimple ? "다음" : "취소"}
                                    </CancelText>
                                </CancelButton>
                                <ConfirmButton onPress={onClose} theme={theme} isSimple={isSimple}>
                                    <ConfirmText theme={theme} isSimple={isSimple}>알겠어요</ConfirmText>
                                </ConfirmButton>
                            </>
                        ) : (
                            <CancelButton onPress={onClose} theme={theme} isSimple={true}>
                                <CancelText theme={theme} isSimple={true}>
                                    알겠어요
                                </CancelText>
                            </CancelButton>
                        )}
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
    background-color: ${({theme}) => theme.color.global.neutral[100]};
    border-radius: 12px;
    padding: 20px 16px 16px 16px;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled(View)`
    width: 100%;
    height: 128px;
    border-radius: 6px;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 6px;
`;

const PlaceholderView = styled(View)`
    background-color: ${({theme}) => theme.color.global.neutral[600]};
    width: 100%;
    height: 100%;
    border-radius: 6px;
`;

const PopupContent = styled(View)`
    margin-bottom: 16px;
    align-items: center;
`;

const Title = styled(BodySemibold16)`
    margin-bottom: 8px;
    color: ${({theme}) => theme.color.global.neutral[1300]};
    text-align: center;
    line-height: 24px;
`;

const Description = styled(BodyMedium14)`
    color: ${({theme}) => theme.color.global.neutral[800]};
    text-align: center;
    line-height: 20px;
    max-width: 67%;
`;

const ButtonContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const CancelButton = styled.TouchableOpacity<PopupProps & { theme: DefaultTheme }>`
    background-color: ${({theme, isSimple}) => isSimple ? 'transparent' : theme.color.global.neutral[100]};
    border: ${({theme, isSimple}) => isSimple ? 'none' : `1px solid ${theme.color.theme.border}`};
    padding: 12px 14px;
    border-radius: 6px;
    margin-right: 8px;
    flex: 1;
`;

const ConfirmButton = styled.TouchableOpacity<PopupProps & { theme: DefaultTheme }>`
    background-color: ${({theme, isSimple}) => isSimple ? 'transparent' : theme.color.sys.primary.default};
    padding: 12px 14px;
    border-radius: 6px;
    flex: 1;
`;

const CancelText = styled(BodySemibold14)<PopupProps & { theme: DefaultTheme }>`
    color: ${({theme, isSimple}) => isSimple ? theme.color.sys.secondary.pressed : theme.color.theme.headingText};
    font-weight: ${({isSimple}) => isSimple ? 500 : 600};
    text-align: center;
    line-height: 20px;
`;

const ConfirmText = styled(BodySemibold14)<PopupProps & { theme: DefaultTheme }>`
    color: ${({theme, isSimple}) => isSimple ? theme.color.sys.primary.default : theme.color.global.neutral[100]};
    font-weight: ${({isSimple}) => isSimple ? 500 : 600};
    text-align: center;
    line-height: 20px;
`;

export default Popup;