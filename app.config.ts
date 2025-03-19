import { ExpoConfig, ConfigContext } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "fe",
    slug: "fe",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.meokguskku.fe",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.meokguskku.fe",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "22f005d7-35ba-4816-bab5-519e216b3ae9",
      },
      env: {
        KAKAO_API_KEY: process.env.KAKAO_API_KEY,
        ENVIRONMENT: process.env.ENVIRONMENT,
        DEV_API_HOST: process.env.DEV_API_HOST,
        PROD_API_HOST: process.env.PROD_API_HOST,
      },
    },
    owner: "meokguskku",
    plugins: ["expo-build-properties"],
  };
};
