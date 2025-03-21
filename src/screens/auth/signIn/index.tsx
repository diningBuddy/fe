import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import styled from "styled-components/native";

import { Logo } from "../../../assets/icons/common";
import { Apple, Kakao } from "../../../assets/icons/sns";

export const SignIn = () => {
  const navigation = useNavigation();

  const handleInquiry = () => {
    navigation.navigate("Inquiry");
  };

  const handlePhoneSignIn = () => {
    navigation.navigate("VerifyPhone");
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
        <Kakao />
        <Apple />
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
