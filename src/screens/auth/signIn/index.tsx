import React, { useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { login } from "@react-native-kakao/user";
import { initializeKakaoSDK } from "@react-native-kakao/core";

import { Kakao } from "../../../assets/icons/sns";
import { Logo } from "../../../assets/icons/common";

export const SignIn = () => {
  const navigation = useNavigation();

  const handleInquiry = () => {
    navigation.navigate("Inquiry");
  };

  const handlePhoneSignIn = () => {
    navigation.navigate("VerifyPhone");
  };

  useEffect(() => {
    initializeKakaoSDK("f448dfdb8b369869e7242ba52f05f825");
  }, []);

  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인 실행, 토큰 등의 정보를 반환합니다.
      login().then(console.log);
      console.log("Kakao login token: ");
      // 여기서 백엔드 서버로 토큰을 전달하거나 추가 로직을 구현하면 됩니다.
    } catch (error) {
      console.error("Kakao login error: ", error);
    }
  };

  return (
    <Container>
      <Logo />
      <Title>먹고 연결되는 맛집 플랫폼</Title>

      <ChatContainer>
        <ChatImage source={require("../../../assets/images/signIn/chatOne.png")} />
        <ChatImage source={require("../../../assets/images/signIn/chatTwo.png")} />
        <ChatImage source={require("../../../assets/images/signIn/chatThree.png")} />
      </ChatContainer>
      {/* sns login start */}
      <Image source={require("../../../assets/images/signIn/kakao-login.png")} />
      {/* <Image source={require("../../../assets/images/signIn/apple-login.png")} /> */}
      <LoginButtonGroup>
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Kakao />
        </TouchableOpacity>
      </LoginButtonGroup>
      {/* sns login end */}
      <Footer>
        <FooterButton onPress={handlePhoneSignIn}>휴대폰 로그인 </FooterButton>
        <FooterButton onPress={handleInquiry}>로그인 문의</FooterButton>
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  margin-top: 50px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
`;

const ChatImage = styled.Image`
  max-width: 324px;
  height: 60px;
  /* resize-mode: contain; */
`;

const ChatContainer = styled.View`
  flex: 1;
  gap: 22px;
  margin-top: 52px;
`;

const LoginButtonGroup = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 32px 0;
`;

const FooterButton = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export default SignIn;
