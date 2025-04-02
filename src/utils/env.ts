import Constants from "expo-constants";

type Environment = "local" | "dev" | "prod";

// 환경 변수 인터페이스 정의
interface EnvVariables {
  ENVIRONMENT: Environment;
  KAKAO_NATIVE_APP_KEY: string;
  DEV_API_HOST: string;
  PROD_API_HOST: string;
}

class EnvironmentError extends Error {
  constructor(envName?: string) {
    super(`You must define ${envName ? `${envName}` : "env variables"}`);
    this.name = "EnvironmentError";
  }
}

/**
 * app.config.ts에서 정의한 환경 변수를 가져옵니다.
 * @returns EnvVariables 환경 변수 객체
 * @throws EnvironmentError 환경 변수가 정의되지 않았을 때
 */
export const getEnv = (): EnvVariables => {
  const env = Constants.expoConfig?.extra?.env;

  if (!env) {
    throw new EnvironmentError();
  }
  // 필수 환경 변수 확인
  if (!env.ENVIRONMENT) {
    throw new EnvironmentError("ENVIRONMENT");
  }

  if (!env.KAKAO_NATIVE_APP_KEY) {
    throw new EnvironmentError("KAKAO_NATIVE_APP_KEY");
  }

  if (!env.DEV_API_HOST) {
    throw new EnvironmentError("DEV_API_HOST");
  }

  if (!env.PROD_API_HOST) {
    throw new EnvironmentError("PROD_API_HOST");
  }

  return env as EnvVariables;
};

/**
 * 현재 실행 환경을 확인합니다.
 * @returns 환경 상태 객체
 */
export const getEnvironment = () => {
  const env = getEnv();

  return {
    environment: env.ENVIRONMENT,
    isLocal: env.ENVIRONMENT === "local",
    isDev: env.ENVIRONMENT === "dev",
    isProd: env.ENVIRONMENT === "prod",
  };
};

/**
 * 카카오 API 키를 가져옵니다.
 * @returns 카카오 API 키
 */
export const getKakaoNativeAppKey = (): string => {
  const env = getEnv();

  return env.KAKAO_NATIVE_APP_KEY;
};

/**
 * 현재 환경에 맞는 API 호스트 주소를 가져옵니다.
 * @returns API 호스트 URL
 * @throws EnvironmentError 환경에 맞는 API 호스트가 정의되지 않았을 때
 */
export const getApiHost = (): string => {
  const { environment } = getEnvironment();
  const env = getEnv();

  switch (environment) {
    case "local":
    case "dev":
      return env.DEV_API_HOST;

    case "prod":
      return env.PROD_API_HOST;

    default:
      throw new EnvironmentError();
  }
};

/**
 * 모든 환경 설정을 한꺼번에 가져옵니다.
 */
export const getConfig = () => {
  const env = getEnv();
  const { isLocal, isDev, isProd } = getEnvironment();

  return {
    kakaoApiKey: env.KAKAO_NATIVE_APP_KEY,
    apiHost: getApiHost(),
    environment: {
      current: env.ENVIRONMENT,
      isLocal,
      isDev,
      isProd,
    },
  };
};
