import { useState } from "react";
import { View } from "react-native";

import RadioGroup from "../../common/RadioGroup";

export default function RadioGroupExample() {
  const [selectedValueOne, setSelectedValueOne] = useState("one");
  const [selectedValueTwo, setSelectedValueTwo] = useState("one");
  const [selectedValueThree, setSelectedValueThree] = useState("one");

  const optionsOne = [
    { label: "영리목적/홍보성", value: "one" },
    { label: "저작권침해", value: "two" },
  ];

  const optionsTwo = [
    { label: "음란성/선정성", value: "one" },
    { label: "개인정보노출", value: "two" },
  ];

  const optionsThree = [
    { label: "같은내용 반복게시", value: "one" },
    { label: "기타", value: "two" },
  ];

  return (
    <View>
      <RadioGroup
        isMainColor
        value={selectedValueOne}
        options={optionsOne}
        onChange={(value) => setSelectedValueOne(value)}
      />
      <RadioGroup
        isMainColor={false}
        value={selectedValueTwo}
        options={optionsTwo}
        onChange={(value) => setSelectedValueTwo(value)}
      />
      <RadioGroup
        isMainColor
        value={selectedValueThree}
        options={optionsThree}
        onChange={(value) => setSelectedValueThree(value)}
      />
    </View>
  );
}
