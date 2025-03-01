import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlexBox } from "../FlexBox";

interface NavigationHeaderProps {
  title?: string;
  isGoBackButton?: boolean;
  isSearchButton?: boolean;
  isOpacity?: boolean;
  rightIconName?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  isGoBackButton = false,
  isSearchButton = false,
  rightIconName = "search",
  isOpacity = false,
  onRightIconPress,
}) => {
  const navigation = useNavigation();
  const iconColor = isOpacity ? "#fff" : "#000";
  const textColor = isOpacity ? "#fff" : "#000";

  return (
    <View style={styles.headerBarContainer}>
      <View style={styles.headerBarWrap}>
        <FlexBox>
          {/* left goback icon or close icon */}
          {isGoBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color={iconColor} />
            </TouchableOpacity>
          )}

          <Text style={(styles.title, { color: textColor })}>{title}</Text>
        </FlexBox>

        {/* right icon search */}
        {isSearchButton && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconButton}>
            <Ionicons name={rightIconName} size={24} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarContainer: {
    // borderBottomColor: "#E0E0E0",
    // borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  headerBarWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingVertical: 8,
  },
  iconButton: {
    padding: 8,
  },
  leftIconButton: {
    padding: 8,
    textAlign: "left",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 8,
  },
});

export default NavigationHeader;
