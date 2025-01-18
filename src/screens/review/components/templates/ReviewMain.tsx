import { View } from "react-native";

import SelectArade from "../SelectArade";
import RegistPhoto from "../RegistPhoto";
import RegistReview from "../RegistReview";
import Divider from "../../../../common/atom/Divier";

export const ReviewMain = () => {
  return (
    <>
      {/* Banner Container */}
      <View>
        <Divider size="thick" orientation="horizontal" color="#000000" />
        <SelectArade />
        <Divider size="thick" orientation="horizontal" color="#000000" />
        <RegistPhoto />
        <Divider size="thick" orientation="horizontal" color="#000000" />
        <RegistReview />
      </View>
    </>
  );
};

export default ReviewMain;
