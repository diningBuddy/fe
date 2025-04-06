import { TextProps, Text } from "react-native";
import styled from "styled-components/native";

interface TypoStyle extends TextProps {
  margin?: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  textAlign?: "left" | "right" | "center" | "justify";
  size?: 44 | 40 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12 | 10;
}

const defaultFontSize = 16;
const defaultLineHeight = 1.2;

const BaseText = styled(Text)<TypoStyle>`
  margin: ${({ margin = "0" }) => margin};
  color: ${({ color, theme }) => color || theme.color.theme.main};
  font-size: ${({ size, fontSize }) => (size ? `${size}px` : fontSize ? `${fontSize}px` : `${defaultFontSize}px`)};
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  line-height: ${({ lineHeight, fontSize }) =>
    lineHeight
      ? `${lineHeight}px`
      : fontSize
        ? `${fontSize * defaultLineHeight}px`
        : `${defaultFontSize * defaultLineHeight}px`};
  text-align: ${({ textAlign = "left" }) => textAlign};
`;

// Headings
export const HeadingSemiBold44 = styled(BaseText)`
  font-size: 44px;
  line-height: 52.51px;
  font-weight: 600;
`;

export const HeadingSemiBold40 = styled(BaseText)`
  font-size: 40px;
  line-height: 47.73px;
  font-weight: 600;
`;

export const HeadingSemiBold32 = styled(BaseText)`
  font-size: 32px;
  line-height: 38.19px;
  font-weight: 600;
`;

export const HeadingSemiBold28 = styled(BaseText)`
  font-size: 28px;
  line-height: 33.41px;
  font-weight: 600;
`;

export const HeadingSemiBold24 = styled(BaseText)`
  font-size: 24px;
  line-height: 28.64px;
  font-weight: 600;
`;

export const HeadingRegular24 = styled(BaseText)`
  font-size: 24px;
  line-height: 28.64px;
`;

export const HeadingRegular20 = styled(BaseText)`
  font-size: 20px;
  line-height: 23.87px;
`;

// Body
export const BodySemibold18 = styled(BaseText)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodySemibold16 = styled(BaseText)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
`;

export const BodySemibold14 = styled(BaseText)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
`;

export const BodySemibold12 = styled(BaseText)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14.4px;
`;

export const BodySemibold10 = styled(BaseText)`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

export const BodyMedium18 = styled(BaseText)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodyMedium16 = styled(BaseText)`
  font-size: 16px;
  line-height: 19.2px;
`;

export const BodyMedium14 = styled(BaseText)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
`;

export const BodyRegular18 = styled(BaseText)`
  font-size: 18px;
  line-height: 21.48px;
`;

export const BodyRegular12 = styled(BaseText)`
  font-size: 12px;
  line-height: 14.4px;
`;
