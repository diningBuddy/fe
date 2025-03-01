import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlexBox } from "../FlexBox";

interface NavigationHeaderProps {
  title: string;
  isGoBackButton?: boolean;
  isSearchButton?: boolean;
  rightIconName?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  isGoBackButton = false,
  isSearchButton = false,
  rightIconName = "search",
  onRightIconPress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerBarContainer}>
      <View style={styles.headerBarWrap}>
        <FlexBox>
          {/* left goback icon or close icon */}
          {isGoBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )}

          <Text style={styles.title}>{title}</Text>
        </FlexBox>

        {/* right icon search */}
        {isSearchButton && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconButton}>
            <Ionicons name={rightIconName} size={24} color="black" />
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
    paddingVertical: 8,
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 8,
  },
});

export default NavigationHeader;
