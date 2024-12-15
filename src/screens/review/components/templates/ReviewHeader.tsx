import React from "react";
import { View, Button } from "react-native";

import { ButtonText } from "../../../../common/atom/Button";
import reviewContent from "../../../../mock/ReviewMockData";

export const ReviewHeader = () => {
  return (
    <>
      {/* Banner Container */}
      <View>
        {/* <img src={} alt="review-img" /> */}
        <div>
          {/* #000000D9 400 12px */}
          <span>{reviewContent.catgegory}</span>
          <span>{reviewContent.title}</span>
        </div>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineGray" fontSize="sm" isUnderLine>
            식당 변경
          </ButtonText>
        </Button>
      </View>
    </>
  );
};

export default ReviewHeader;
