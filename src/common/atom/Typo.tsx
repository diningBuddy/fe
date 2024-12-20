import styled from "styled-components/native";
import { Text } from "react-native";

import { Typography, typography } from "../../styles/Typography";

interface TypoStyle {
  type: Typography;
  margin?: string;
  color?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  boldSize?: number;
  // boldSize?: 400 | 500 | 600 | 700;
}

const defaultFontSize = 16;
const defaultLineHeight = 1.2;
const defaultFontWeight = 400;

export const Typo = styled(Text)<TypoStyle>`
  ${({ type }) => typography[type]}
  margin: ${({ margin = "0" }) => margin};
  color: ${({ color, theme }) => color || theme.color.theme.text};
  text-align: ${({ textAlign = "left" }) => textAlign};
  font-weight: ${({ boldSize = defaultFontWeight }) => boldSize};
`;

// Headings
export const HeadingSemiBold44 = styled(Typo)`
  font-size: 44px;
  line-height: 52.51px;
  font-weight: 600;
`;

export const HeadingSemiBold40 = styled(Typo)`
  font-size: 40px;
  line-height: 47.73px;
  font-weight: 600;
`;

export const HeadingSemiBold32 = styled(Typo)`
  font-size: 32px;
  line-height: 38.19px;
  font-weight: 600;
`;

export const HeadingSemiBold28 = styled(Typo)`
  font-size: 28px;
  line-height: 33.41px;
  font-weight: 600;
`;

export const HeadingSemiBold24 = styled(Typo)`
  font-size: 24px;
  line-height: 28.64px;
  font-weight: 600;
`;

export const HeadingRegular24 = styled(Typo)`
  font-size: 24px;
  line-height: 28.64px;
`;

export const HeadingRegular20 = styled(Typo)`
  font-size: 20px;
  line-height: 23.87px;
`;

// Body
export const BodySemibold18 = styled(Typo)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodySemibold16 = styled(Typo)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
`;

export const BodySemibold14 = styled(Typo)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
`;

export const BodySemibold12 = styled(Typo)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14.4px;
`;

export const BodySemibold10 = styled(Typo)`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

export const BodyMedium18 = styled(Typo)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodyMedium16 = styled(Typo)`
  font-size: 16px;
  line-height: 19.2px;
`;

export const BodyMedium14 = styled(Typo)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
`;

export const BodyRegular18 = styled(Typo)`
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodyRegular12 = styled(Typo)`
  font-size: 12px;
  line-height: 14.4px;
`;
