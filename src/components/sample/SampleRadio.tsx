import React, { useState } from "react";
import { View } from "react-native";

import Radio from "../../common/Radio";

export default function RadioGroupExample() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View>
      <Radio
        id="apple"
        name="fruit"
        value="Apple"
        checked={selectedValue === "Apple"}
        mode="main"
        onChange={setSelectedValue}>
        Apple
      </Radio>
      <Radio
        id="banana"
        name="fruit"
        value="Banana"
        checked={selectedValue === "Banana"}
        mode="secondary"
        onChange={setSelectedValue}>
        Banana
      </Radio>
    </View>
  );
}
