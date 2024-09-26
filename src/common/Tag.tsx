import React from "react";
import styled from "styled-components/native";
import ThemeStyle from "../styles/ThemeStyle";
interface TagProps {
  label: string;
  height?: "sm" | "md";
  theme?: (typeof ThemeStyle)["color"];
  fontSize?: "sm" | "md";
  padding?: "sm" | "md";
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  outline?: boolean;
  mode?: "info" | "success" | "error" | "neutral" | "primary";
}

const modeStyles = (theme: string) => ({
  info: {
    textColor: theme.color.global.blue[600],
    bgColor: theme.color.global.blue[100],
    borderColor: theme.color.global.blue[500],
  },
  success: {
    textColor: theme.color.global.neutral[100],
    bgColor: theme.color.global.green[700],
    borderColor: "transparent",
  },
  error: {
    textColor: theme.color.global.neutral[100],
    bgColor: theme.color.global.orange[600],
    borderColor: "transparent",
  },
  neutral: {
    textColor: theme.color.global.neutral[700],
    bgColor: theme.color.global.neutral[400],
    borderColor: "transparent",
  },
  primary: {
    textColor: theme.color.sys.primary.active,
    bgColor: theme.color.sys.primary.disabled,
    borderColor: theme.color.sys.primary.default,
  },
});

const TagWrap = styled.Text<TagProps>`
  padding: ${(props) => (props.height === "sm" ? "3px 4px" : "2px 6px")};
  height: ${(props) => (props.height === "sm" ? "20px" : "28px")};
  font-size: ${(props) => (props.height === "sm" ? "11px" : "16px")};
  border-radius: 4px;
  text-align: center;

  color: ${(props) => modeStyles(props.theme)[props.mode || "info"].textColor};
  background-color: ${(props) => modeStyles(props.theme)[props.mode || "info"].bgColor};
  border: ${(props) =>
    props.outline || props.mode === "info"
      ? `1px solid ${modeStyles(props.theme)[props.mode || "info"].borderColor}`
      : "none"};
`;

const Tag = ({ label, height = "md", fontSize = "md", padding = "md", mode = "info", ...props }: TagProps) => {
  return (
    <TagWrap height={height} fontSize={fontSize} padding={padding} mode={mode} {...props}>
      {label}
    </TagWrap>
  );
};

export default Tag;
