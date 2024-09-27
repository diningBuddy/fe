import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView, Animated } from "react-native";

// Define a list of radio button colors
const radios = [
  { color: "#FF5E68" }, // Red
  { color: "#999" }, // Gray
];

// Define RadioContainer and InnerCircle components
const RadioContainer = ({ children }) => <View style={styles.radioContainer}>{children}</View>;

const InnerCircle = ({ selected, color }) => (
  <View style={[styles.innerCircle, { backgroundColor: selected ? color : "transparent" }]} />
);

const SampleRadio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scaleAnimations = useRef(radios.map(() => new Animated.Value(1))).current;

  const handlePress = (index: number) => {
    Animated.sequence([
      Animated.timing(scaleAnimations[index], {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimations[index], {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    setSelectedIndex(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RadioContainer>
        {radios.map((radio, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.radio, { borderColor: selectedIndex === index ? radio.color : "#ccc" }]}
            onPress={() => handlePress(index)}>
            <Animated.View style={[{ transform: [{ scale: scaleAnimations[index] }] }]}>
              <InnerCircle selected={selectedIndex === index} color={radio.color} />
            </Animated.View>
          </TouchableOpacity>
        ))}
      </RadioContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },
  radioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    margin: 8,
  },
  radio: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  innerCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
});

export default SampleRadio;
