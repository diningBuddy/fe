import { View } from "react-native";

import SelectArade from "../SelectArade";
import RegistPhoto from "../RegistPhoto";
import RegistReview from "../RegistReview";

export const ReviewMain = () => {
  return (
    <>
      {/* Banner Container */}
      <View>
        {/* Divider */}
        <SelectArade />
        {/* Divider */}
        <RegistPhoto />
        {/* Divider */}
        <RegistReview />
      </View>
    </>
  );
};

export default ReviewMain;
