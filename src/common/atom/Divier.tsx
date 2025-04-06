import React from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";

// DividerProps 인터페이스 정의
interface DividerProps extends ViewProps {
  size?: "default" | "thin" | "thick";
  orientation?: "horizontal" | "vertical";
  color?: string;
}

// Divider 컴포넌트
const Divider: React.FC<DividerProps> = ({
  size = "default",
  orientation = "horizontal",
  color = "#000000",
  style,
  ...props
}) => {
  return <StyledDivider size={size} orientation={orientation} color={color} style={style} {...props} />;
};

const StyledDivider = styled.View<DividerProps>`
  background-color: ${({ color }) => color};
  ${({ orientation, size }) =>
    orientation === "horizontal"
      ? `
          height: ${size === "thin" ? "1px" : size === "thick" ? "8px" : "1px"};
          width: 100%;
        `
      : `
          width: ${size === "thin" ? "1px" : size === "thick" ? "8px" : "1px"};
          height: 100%;
        `};
`;

export default Divider;
