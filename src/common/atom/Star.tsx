import React, { useState } from "react";
import styled from "styled-components/native";

import StarIcon from "./StarIcon"; // 별 아이콘 컴포넌트

interface StarProps {
  size?: "sm" | "lg";
  star?: number;
  onChange?: (rating: number) => void;
}

const Star: React.FC<StarProps> = ({ size = "lg", star = 0, onChange }) => {
  const [rating, setRating] = useState(star); // 현재 별점 상태
  const maxStars = 5; // 별의 총 개수

  // 별을 클릭할 때 동작
  const handleStarPress = (index: number) => {
    const newRating = index + 1; // 클릭한 별에 따라 새로운 별점 계산

    setRating(newRating); // 별점 업데이트
    if (onChange) {
      onChange(newRating);
    } // 부모 컴포넌트에 별점 전달
  };

  return (
    <Container>
      {[...Array(maxStars)].map((_, index) => {
        const filled = rating >= index + 1; // 채워진 상태인지 확인

        return (
          <TouchableStar key={index} onPress={() => handleStarPress(index)}>
            {filled ? <StarIcon size={size} type="filled" /> : <StarIcon size={size} type="outline" />}
          </TouchableStar>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TouchableStar = styled.TouchableOpacity`
  margin-right: 2px;
`;

export default Star;
