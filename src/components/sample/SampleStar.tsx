import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import React from "react";

import Star from "../../common/atom/Star";
import NavigationHeader from "../../common/atom/NavigationHeader";

const SampleStar = () => {
  const handleStarChange = (rating: number) => {
    console.log("Selected Rating:", rating);
  };
  return (
    <>
      <NavigationHeader title="샘플 버튼" isGoBackButton />
      <ScrollViewContainer keyboardShouldPersistTaps="handled">
        <Text>별점을 선택하세요:</Text>
        <Star size="sm" star={1.5} onChange={handleStarChange} />
        <Star size="lg" star={2} onChange={handleStarChange} />
      </ScrollViewContainer>
    </>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleStar;
