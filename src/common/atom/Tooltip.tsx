import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";

import { HeroiconsSolidXmark } from "../../assets/icons/shape";
import ThemeStyle from "../../styles/ThemeStyle";

interface TooltipProps {
  message: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ message, position = "top" }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <View style={[styles.tooltipContainer, styles[position]]}>
      <View style={styles.tooltipBox}>
        <Text style={styles.tooltipText}>{message}</Text>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <HeroiconsSolidXmark />
        </TouchableOpacity>
      </View>
      <View style={[styles.tooltipArrow, styles[`${position}Arrow`], styles.shadow]} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "column",
  },
  bottomArrow: {
    borderBottomColor: ThemeStyle.color.global.neutral[1300],
    borderBottomWidth: 5,
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    top: -5,
  },
  left: {
    flexDirection: "row-reverse",
  },
  leftArrow: {
    borderBottomColor: "transparent",
    borderBottomWidth: 5,
    borderLeftColor: "",
    borderLeftWidth: 5,
    borderTopColor: "transparent",
    borderTopWidth: 5,
    right: -5,
  },
  right: {
    flexDirection: "row",
  },
  rightArrow: {
    borderBottomColor: "transparent",
    borderBottomWidth: 5,
    borderRightColor: "",
    borderRightWidth: 5,
    borderTopColor: "transparent",
    borderTopWidth: 5,
    left: -5,
  },
  shadow: {
    ...Platform.select({
      android: {
        elevation: 6,
      },
    }),
  },
  tooltipArrow: {
    position: "absolute",
  },
  tooltipBox: {
    alignItems: "center",
    backgroundColor: "",
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 9,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  tooltipContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10, // 배치되는 위치에 따라 다시 한 번 확인 필요 (추후 수정)
    position: "relative",
  },
  tooltipText: {
    color: ThemeStyle.color.global.neutral[100],
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 14,
    marginRight: 10,
  },
  top: {
    flexDirection: "column-reverse",
  },
  topArrow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    borderTopColor: "",
    borderTopWidth: 5,
    bottom: -5,
  },
});

export default Tooltip;
