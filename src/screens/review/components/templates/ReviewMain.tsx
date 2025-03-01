import { View } from "react-native";

import SelectArade from "../SelectArade";
import RegistPhoto from "../RegistPhoto";
import RegistReview from "../RegistReview";
import Divider from "../../../../common/atom/Divier";
import { Button, ButtonText } from "../../../../common/atom/Button";

export const ReviewMain = () => {
  return (
    <>
      {/* Banner Container */}
      <View>
        <Divider size="thick" orientation="horizontal" color="#D9D9D9" />
        <SelectArade />
        <Divider size="thick" orientation="horizontal" color="#D9D9D9" />
        <RegistPhoto />
        <Divider size="thick" orientation="horizontal" color="#D9D9D9" />
        <RegistReview />
      </View>

      <Button height="lg">
        <ButtonText fontSize="lg">완료</ButtonText>
      </Button>
    </>
  );
};

export default ReviewMain;
