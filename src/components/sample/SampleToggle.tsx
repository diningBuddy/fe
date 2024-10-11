import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Toggle from "../../common/atom/Toggle";

export default function SampleToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toggle isOn={isOn} onToggle={handleToggle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
