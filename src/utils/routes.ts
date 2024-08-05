export const RouteNames = {
  HOME_TAB: "home-tab" as const,
  HOME: "home" as const,
  MAP: "map" as const,
  LIST: "list" as const,
  MYPAGE: "mypage" as const,
  BROWSER: "browser" as const,

  SAMPLE_FONT: "sample-font" as const,
  SAMPLE_COLOR: "sample-color" as const,
};

export type RootStackParamList = {
  [RouteNames.HOME_TAB]: undefined;
  [RouteNames.BROWSER]: undefined;
  [RouteNames.HOME]: undefined;
  [RouteNames.MAP]: undefined;
  [RouteNames.LIST]: undefined;
  [RouteNames.MYPAGE]: undefined;
  [RouteNames.SAMPLE_FONT]: undefined;
  [RouteNames.SAMPLE_COLOR]: undefined;
};
