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
  const sizeMap = {
    xs: 12,
    sm: 18.545,
    md: 26.182,
    lg: 34.909,
  };

  const avatarSize = sizeMap[size];

  return (
    <AvatarContainer>
      <AvatarWrapper size={avatarSize}>
        {image ? <AvatarImage source={{ uri: image }} size={avatarSize} /> : <Placeholder size={avatarSize} />}
        {showNotification && <NotificationDot />}
        {showBadge && <BadgeIcon />}
      </AvatarWrapper>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const AvatarWrapper = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  position: relative;
  overflow: hidden;
`;

const AvatarImage = styled.Image<{ size: number }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ size }) => size / 2}px;
`;

const Placeholder = styled.View<{ size: number }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ size }) => size / 2}px;
  background-color: #e0e0e0;
  justify-content: center;
  align-items: center;
`;

const NotificationDot = styled.View`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 4px;
`;

const BadgeIcon = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background-color: #5cb85c;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export default Avatar;
