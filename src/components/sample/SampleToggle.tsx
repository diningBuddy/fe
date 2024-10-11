import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Toggle from "../../common/atom/Toggle";

export default function SampleToggle() {
  const [isOnMain, setIsOnMain] = useState(false);
  const [isOnSecondary, setIsOnSecondary] = useState(false);

  const handleToggleMain = () => {
    setIsOnMain((prev) => !prev);
  };

  const handleToggleSecondary = () => {
    setIsOnSecondary((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toggle isOn={isOnMain} onToggle={handleToggleMain} />
      <Toggle isOn={isOnSecondary} mode="secondary" onToggle={handleToggleSecondary} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    gap: 20,
    justifyContent: "center",
  },
});
