import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";

import { HeroiconsSolidXmark } from "../../assets/icons/shape";
import ThemeStyle from "../../styles/ThemeStyle";

interface TooltipProps {
  message: string;
  position?: "bottomCenter" | "bottomLeft" | "bottomRight" | "topCenter" | "topLeft" | "topRight" | "right" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ message, position = "bottomCenter" }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <View style={[styles.tooltipContainer, styles[position]]}>
      <View style={styles.tooltipBox}>
        <View style={styles.tooltipContentRow}>
          <Text style={styles.tooltipText}>{message}</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <HeroiconsSolidXmark />
          </TouchableOpacity>
        </View>
        <View style={[styles.tooltipArrow, styles[`${position}Arrow`]]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCenter: {
    alignItems: "center",
  },
  bottomCenterArrow: {
    borderBottomColor: ThemeStyle.color.global.neutral[1000],
    borderBottomWidth: 5,
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    left: "25%",
    marginLeft: -5,
    top: -5,
  },
  bottomLeft: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  bottomLeftArrow: {
    borderBottomColor: ThemeStyle.color.global.neutral[1000],
    borderBottomWidth: 5,
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    left: 12,
    top: -5,
  },
  bottomRight: {
    alignItems: "flex-end",
    flexDirection: "column",
  },
  bottomRightArrow: {
    borderBottomColor: ThemeStyle.color.global.neutral[1000],
    borderBottomWidth: 5,
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    right: 15,
    top: -5,
  },
  left: {
    flexDirection: "row-reverse",
  },
  leftArrow: {
    borderBottomColor: "transparent",
    borderBottomWidth: 5,
    borderLeftColor: ThemeStyle.color.global.neutral[1000],
    borderLeftWidth: 5,
    borderTopColor: "transparent",
    borderTopWidth: 5,
    marginTop: 3,
    right: -5,
    top: "50%",
  },
  right: {
    flexDirection: "row",
  },
  rightArrow: {
    borderBottomColor: "transparent",
    borderBottomWidth: 5,
    borderRightColor: ThemeStyle.color.global.neutral[1000],
    borderRightWidth: 5,
    borderTopColor: "transparent",
    borderTopWidth: 5,
    left: -5,
    marginTop: 3,
    top: "50%",
  },
  tooltipArrow: {
    height: 0,
    position: "absolute",
    width: 0,
  },
  tooltipBox: {
    backgroundColor: ThemeStyle.color.global.neutral[1000],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: "relative",
    ...Platform.select({
      android: {
        elevation: 6,
      },
    }),
  },
  tooltipContainer: {
    marginVertical: 10,
  },
  tooltipContentRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
  tooltipText: {
    color: ThemeStyle.color.global.neutral[100],
    fontSize: 11,
    fontWeight: "600",
  },
  topCenter: {
    alignItems: "center",
  },
  topCenterArrow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    borderTopColor: ThemeStyle.color.global.neutral[1000],
    borderTopWidth: 5,
    bottom: -5,
    left: "25%",
    marginLeft: -5,
  },
  topLeft: {
    alignItems: "flex-start",
  },
  topLeftArrow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    borderTopColor: ThemeStyle.color.global.neutral[1000],
    borderTopWidth: 5,
    bottom: -5,
    left: 12,
  },
  topRight: {
    alignItems: "flex-end",
  },
  topRightArrow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 5,
    borderTopColor: ThemeStyle.color.global.neutral[1000],
    borderTopWidth: 5,
    bottom: -5,
    right: 12,
  },
});

export default Tooltip;
