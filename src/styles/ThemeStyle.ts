// theme.ts
export const color = {
  primary: {
    main: "#FF5967", // red-5
    pressed: "#FF8288", // red-4
    active: "#FD3049", // red-6
    disabled: "#FFF0F0", // read-1
  },
  secondary: {
    main: "#262626", // Neutral/10
    pressed: "#595959", // Neutral/8
    active: "#1F1F1F", // Neutral/11
    disabled: "#F5F5F5", // Neutral/3
  },
  tertiary: {
    main: "#D9D9D9", // Neutral/5
    pressed: "#F0F0F0", // Neutral/4
    active: "#D9D9D9", // Neutral/5
    disabled: "#FAFAFA", // Neutral/2
  },
  destructive: {
    main: "#FF6D59", // Orange/5
    pressed: "#FF9582", // Orange/4
    active: "#D6271E", // Orange/7
    disabled: "#FFF4F0", // Orange/1
  },
  theme: {
    textMain: "#000000D9",
    textSecondary: "#00000073",
    textDisabled: "#00000040",
    border: "#00000026",
    dividers: "#0000000F",
    layoutBg: "#000000CC",
    tableHeader: "#00000005",
  },
  sys: {
    destructive: {
      destructive: "#FF6D59"
    },
  },
  global: {
    neutral: {
      8: "#595959",
    }
  }
};

const ThemeStyle = {color};
export type Theme = typeof ThemeStyle;

export default ThemeStyle;
