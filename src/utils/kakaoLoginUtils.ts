import { initializeKakaoSDK } from "@react-native-kakao/core";
import { getAccessToken, KakaoAccessTokenInfo, KakaoUser, login, logout, me, unlink } from "@react-native-kakao/user";

import { getKakaoNativeAppKey } from "./env";

type Status = "success" | "error";

interface AuthResultBase {
  status: Status;
}

interface KakaoLoginInfo extends AuthResultBase {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  userInfo: KakaoUser | undefined;
  // add more fields if needed(ex. expiredAt)
}
interface KakaoUserInfo extends AuthResultBase {
  userInfo: KakaoUser | undefined;
}

interface KakaoTokenInfo extends AuthResultBase {
  tokenInfo: KakaoAccessTokenInfo | undefined;
}

export const initializeKakao = (): AuthResultBase => {
  const kakaoNativeAppKey = getKakaoNativeAppKey();

  try {
    initializeKakaoSDK(kakaoNativeAppKey);
    console.log("Kakao SDK initialized successfully");
    return {
      status: "success",
    };
  } catch (error) {
    console.error("Failed to initialize Kakao SDK", error);
    return {
      status: "error",
    };
  }
};

// 카카오 로그인
export const signInWithKakao = async (): Promise<KakaoLoginInfo> => {
  try {
    const token = await login();
    const { accessToken, refreshToken } = token;

    const userInfo = await me();

    return {
      status: "success",
      accessToken,
      refreshToken,
      userInfo,
    };
  } catch (error) {
    console.error("Kakao login failed", error);
    return {
      status: "error",
      accessToken: undefined,
      refreshToken: undefined,
      userInfo: undefined,
    };
  }
};

// 카카오 로그아웃
export const signOutWithKakao = async (): Promise<AuthResultBase> => {
  try {
    await logout();
    console.log("Kakao logout successful");
    return {
      status: "success",
    };
  } catch (error) {
    console.error("Kakao logout failed", error);
    return {
      status: "error",
    };
  }
};

// 카카오 연결 끊기
export const unlinkKakao = async (): Promise<AuthResultBase> => {
  try {
    await unlink();
    console.log("Kakao unlink successful");
    return {
      status: "success",
    };
  } catch (error) {
    console.error("Kakao unlink failed", error);
    return {
      status: "error",
    };
  }
};

// 카카오 유저 정보 조회 (동의 항목에 따라 다름)
export const getKakaoUserInfo = async (): Promise<KakaoUserInfo> => {
  try {
    const userInfo = await me();

    console.log("Kakao user info retrieved successfully", userInfo);
    return {
      status: "success",
      userInfo,
    };
  } catch (error) {
    console.error("Failed to retrieve Kakao user info", error);
    return {
      status: "error",
      userInfo: undefined,
    };
  }
};

// 토큰 정보 확인
export const getKakaoTokenInfo = async (): Promise<KakaoTokenInfo> => {
  try {
    const tokenInfo = await getAccessToken();

    console.log("Kakao token info retrieved successfully", tokenInfo);
    return {
      status: "success",
      tokenInfo: tokenInfo,
    };
  } catch (error) {
    console.log("Failed to retrieve Kakao token info", error);
    return {
      status: "error",
      tokenInfo: undefined,
    };
  }
};
