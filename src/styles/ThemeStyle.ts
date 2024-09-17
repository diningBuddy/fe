// theme.ts
export const global = {
  alpha: {
    alphaBlack: {
      100: "#0000001A",
      150: "#00000026",
      200: "#00000033",
      250: "#00000040",
      300: "#0000004D",
      350: "#00000066",
      400: "#00000073",
      450: "#00000080",
      500: "#0000008C",
      600: "#00000099",
      700: "#000000B3",
      800: "#000000CC",
      850: "#000000D9",
      900: "#000000E6",
    },
    alphaWhite: {
      100: "#FFFFFF1A",
      150: "#FFFFFF26",
      200: "#FFFFFF33",
      250: "#FFFFFF40",
      300: "#FFFFFF4D",
      400: "#FFFFFF66",
      450: "#FFFFFF73",
      500: "#FFFFFF80",
      600: "#FFFFFF99",
      700: "#FFFFFFB3",
      800: "#FFFFFFCC",
      850: "#FFFFFFD9",
      900: "#FFFFFFE6",
    },
  },
  neutral: {
    100: "#FFFFFF",
    200: "#FAFAFA",
    300: "#F5F5F5",
    400: "#F0F0F0",
    500: "#D9D9D9",
    600: "#BFBFBF",
    700: "#8C8C8C",
    800: "#595959",
    900: "#434343",
    1000: "#262626",
    1100: "#1F1F1F",
    1200: "#141414",
    1300: "#000000",
  },
  red: {
    100: "#FFF0F0",
    200: "#FFD4D4",
    300: "#FFABAC",
    400: "#FF8288",
    500: "#FF5967",
    600: "#FD3049",
    700: "#D61E3A",
    800: "#B0102D",
    900: "#8A0622",
    1000: "#63031B",
  },
  orange: {
    100: "#FFF4F0",
    200: "#FFDDD4",
    300: "#FFBAAB",
    400: "#FF9582",
    500: "#FF6D59",
    600: "#FD4030",
    700: "#D6271E",
    800: "#B01310",
    900: "#8A0608",
    1000: "#630308",
  },
  green: {
    100: "#E6FFE8",
    200: "#ABFFB7",
    300: "#7EF794",
    400: "#52EB73",
    500: "#2ADE57",
    600: "#06D03F",
    700: "#00AB36",
    800: "#00852E",
    900: "#005E24",
    1000: "#003817",
  },
  blue: {
    100: "#E6F6FF",
    200: "#A6DBFF",
    300: "#7DC7FF",
    400: "#52ACFA",
    500: "#288BED",
    600: "#0369E0",
    700: "#0051BA",
    800: "#003B94",
    900: "#00286E",
    1000: "#001847",
  },
};

export const sys = {
  primary: {
    default: global.red[500],
    pressed: global.red[400],
    active: global.red[600],
    disabled: global.red[100],
  },
  secondary: {
    default: global.neutral[1000],
    pressed: global.neutral[800],
    active: global.neutral[1100],
    disabled: global.neutral[300],
  },
  tertiary: {
    default: global.neutral[500],
    pressed: global.neutral[400],
    active: global.neutral[500],
    disabled: global.neutral[200],
  },
  destructive: {
    default: global.orange[500],
    pressed: global.orange[400],
    active: global.orange[700],
    disabled: global.orange[100],
  },
};

export const theme = {
  headingText: global.alpha.alphaBlack[900],
  text: global.alpha.alphaBlack[850],
  secondaryText: global.alpha.alphaBlack[800],
  disabled: global.alpha.alphaBlack[200],
  border: global.alpha.alphaBlack[150],
  dividers: global.alpha.alphaBlack[100],
  layoutBackground: global.alpha.alphaBlack[800],
};

export const color = {
  global,
  sys,
  theme,
};

const ThemeStyle = { color };
export type Theme = typeof ThemeStyle;

export default ThemeStyle;
