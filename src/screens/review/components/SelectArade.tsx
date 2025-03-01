import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import Star from "../../../common/atom/Star";
import { FlexBox } from "../../../common/FlexBox";

const SelectArade = () => {
  const [ratings, setRatings] = useState({
    taste: 5,
    service: 3,
    location: 3,
    quantity: 4,
  });

  const handleStarChange = (category: keyof typeof ratings, rating: number) => {
    setRatings((prev) => ({ ...prev, [category]: rating }));
    console.log(`${category} 점수 선택됨:`, rating);
  };

  return (
    <Container>
      <TitleText>평점을 선택해주세요.</TitleText>
      {Object.entries(ratings).map(([key, value]) => (
        <FlexBox key={key} gap={12} marginBottom={20}>
          <CategoryText>
            {key === "taste" ? "맛" : key === "service" ? "서비스" : key === "location" ? "위치" : "음식량"}
          </CategoryText>
          <Star size="lg" star={value} onChange={(rating) => handleStarChange(key as keyof typeof ratings, rating)} />
        </FlexBox>
      ))}
    </Container>
  );
};

const Container = styled(View)`
  padding: 16px;
`;

const TitleText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
`;

const CategoryText = styled(Text)`
  font-size: 12px;
  font-weight: 600;
`;

export default SelectArade;
