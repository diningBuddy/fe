import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { RadioFillOne, RadioOutlineOne, RadioFillTwo, RadioOutlineTwo } from "../assets/icons/shape";

interface RadioGroupOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  value: string;
  options: RadioGroupOption[];
  onChange: (value: string) => void;
  isMainColor: boolean;
}

export default function RadioGroup({ value, options, onChange, isMainColor = true }: RadioGroupProps) {
  const RadioFill = isMainColor ? RadioFillOne : RadioFillTwo;
  const RadioOutline = isMainColor ? RadioOutlineOne : RadioOutlineTwo;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        paddingVertical: 6,
      }}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          onPress={() => onChange(option.value)}
          accessibilityLabel={`Select ${option.label}`}>
          {value === option.value ? <RadioFill /> : <RadioOutline />}

          {/* TODO: 폰트컴포넌트 업데이트 후 적용 */}
          <Text style={{ fontSize: 12, color: "#000000D9", marginLeft: 14 }}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
