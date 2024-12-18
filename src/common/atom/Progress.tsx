import React, { useContext } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components/native";
import { Text, View } from "react-native";

interface ProgressProps {
  value: number; // 0 ~ 100 사이의 숫자 (진행 상태)
  size: "sm" | "md" | "lg";
  label?: string;
  description?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, size, label, description }) => {
  const theme = useContext(ThemeContext);

  return (
    <ProgressWrapper>
      {label && (
        <LabelWrapper>
          <Label theme={theme}>{label}</Label>
        </LabelWrapper>
      )}
      <ProgressBarWrapper size={size}>
        <ProgressBar value={value} />
      </ProgressBarWrapper>
      {description && (
        <DescriptionWrapper>
          <DescriptionText theme={theme}>{description}</DescriptionText>
        </DescriptionWrapper>
      )}
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled(View)`
  margin-bottom: 24px;
`;

const LabelWrapper = styled(View)`
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled(Text)<{ theme: DefaultTheme }>`
  font-size: 14px;
  color: ${({ theme }) => theme.color.global.neutral[800]};
  text-align: center;
`;

const ProgressBarWrapper = styled(View)<{ props: ProgressProps }>`
  width: 100%;
  height: ${({ size }) => {
    if (size === "sm") return "2px";
    if (size === "md") return "4px";
    if (size === "lg") return "8px";
    return "8px";
  }};
  background-color: ${({ theme }) => theme.color.sys.tertiary.default};
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressBar = styled(View)<{ value: number }>`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.sys.primary.default};
`;

const DescriptionWrapper = styled(View)`
  margin-top: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const DescriptionText = styled(Text)<{ theme: DefaultTheme; isSuccess: boolean }>`
  font-size: 12px;
  color: ${({ theme }) => theme.color.global.neutral[800]};
`;

export default Progress;
