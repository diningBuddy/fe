export const RouteNames = {
  HOME_TAB: "home-tab" as const,
  HOME: "home" as const,
  MAP: "map" as const,
  LIST: "list" as const,
  MYPAGE: "mypage" as const,
  BROWSER: "browser" as const,

  SAMPLE_FONT: "sample-font" as const,
  SAMPLE_COLOR: "sample-color" as const,
  SAMPLE_BUTTON: "sample-button" as const,
  SAMPLE_INPUT: "sample-input" as const,
  SAMPLE_TEXTAREA: "sample-textarea" as const,
  SAMPLE_SEARCH: "sample-search" as const,
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
  [RouteNames.SAMPLE_BUTTON]: undefined;
  [RouteNames.SAMPLE_INPUT]: undefined;
  [RouteNames.SAMPLE_TEXTAREA]: undefined;
  [RouteNames.SAMPLE_SEARCH]: undefined;
};
