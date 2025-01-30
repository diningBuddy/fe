import styled from "styled-components/native";
import { View } from "react-native";

export interface FlexBoxProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  position?: "relative" | "absolute";
  margin?: string;
  padding?: string;
  bgColor?: string;
  borderColor?: string;
  gap?: number;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  shadow?: {
    color?: string;
    offsetY?: number;
    opacity?: number;
    radius?: number;
    elevation?: number;
    borderRadius?: number;
  };
}

export const FlexBox = styled(View).attrs<FlexBoxProps>((props) => ({
  style: {
    margin: props.margin || "0",
    padding: props.padding || "0",
    justifyContent: props.justifyContent || "center",
    alignItems: props.alignItems || "center",
    backgroundColor: props.bgColor || "transparent",
    borderWidth: props.borderColor ? 1 : 0,
    borderColor: props.borderColor || "transparent",
    marginBottom: props.marginBottom || "0",
    marginTop: props.marginTop || "0",
    marginLeft: props.marginLeft || "0",
    marginRight: props.marginRight || "0",
    ...(props.gap && { rowGap: props.gap, columnGap: props.gap }),
    ...(props.shadow && {
      shadowColor: props.shadow.color || "#000",
      shadowOffset: { width: 0, height: props.shadow.offsetY ?? 2 },
      shadowOpacity: props.shadow.opacity ?? 0.2,
      shadowRadius: props.shadow.radius ?? 4,
      elevation: props.shadow.elevation ?? 5,
      borderRadius: props.shadow.borderRadius ?? 0,
    }),
  },
}))<FlexBoxProps>`
  position: ${({ position = "relative" }) => position};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
`;
