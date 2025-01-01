import React from "react";
import styled from "styled-components/native";

interface AvatarProps {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string; // 이미지 경로 또는 URL
  showNotification?: boolean; // 알림 여부 표시
  showBadge?: boolean; // 뱃지 여부 표시
}

const Avatar: React.FC<AvatarProps> = ({ size = "md", image, showNotification = false, showBadge = false }) => {
  // 크기별 스타일 정의
  const centerSizeMap = {
    xs: 22,
    sm: 34,
    md: 48,
    lg: 64,
  };

  const avatarSize = centerSizeMap[size];

  return (
    <AvatarContainer>
      <AvatarWrapper size={avatarSize}>
        <Circle size={avatarSize}>{image ? <AvatarImage source={{ uri: image }} size={centerSizeMap} /> : null}</Circle>
        {showNotification && <NotificationDot size={size} />}
        {showBadge && <BadgeIcon size={size} />}
      </AvatarWrapper>
    </AvatarContainer>
  );
};

const Circle = styled.View<{ size: number }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ size }) => size / 2}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0; /* 기본 배경 */
`;

const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const AvatarWrapper = styled.View<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => size / 2}px;
  position: relative;
  overflow: visible; /* 배지와 알림이 잘리지 않도록 */
`;

const AvatarImage = styled.Image<{ size: number }>`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

const NotificationDot = styled.View<{ size: string }>`
  position: absolute;
  top: ${({ size }) => {
    switch (size) {
      case "xs":
        return "2px";
      case "sm":
        return "4px";
      case "md":
        return "5px";
      case "lg":
        return "6px";
      default:
        return "6px";
    }
  }};
  right: ${({ size }) => {
    switch (size) {
      case "xs":
        return "0";
      case "sm":
        return "0";
      case "md":
        return "2px";
      case "lg":
        return "4px";
      default:
        return "4px";
    }
  }};
  width: ${({ size }) => {
    switch (size) {
      case "xs":
        return "5px";
      case "sm":
        return "6px";
      case "md":
        return "6px";
      case "lg":
        return "8px";
      default:
        return "8px";
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case "xs":
        return "5px";
      case "sm":
        return "6px";
      case "md":
        return "6px";
      case "lg":
        return "8px";
      default:
        return "8px";
    }
  }};
  background-color: red;
  border-radius: 50px;
`;

const BadgeIcon = styled.View<{ size: string }>`
  position: absolute;
  bottom: ${({ size }) => {
    switch (size) {
      case "xs":
        return "2px";
      case "sm":
        return "2px";
      case "md":
        return "0";
      case "lg":
        return "0";
      default:
        return "0";
    }
  }};
  left: ${({ size }) => {
    switch (size) {
      case "xs":
        return "24px";
      case "sm":
        return "24px";
      case "md":
        return "34px";
      case "lg":
        return "46px";
      default:
        return "46px";
    }
  }};
  width: ${({ size }) => {
    switch (size) {
      case "xs":
        return "16px";
      case "sm":
        return "16px";
      case "md":
        return "16px";
      case "lg":
        return "20px";
      default:
        return "20px";
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case "xs":
        return "16px";
      case "sm":
        return "16px";
      case "md":
        return "16px";
      case "lg":
        return "20px";
      default:
        return "20px";
    }
  }};
  background-color: #5cb85c;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export default Avatar;
