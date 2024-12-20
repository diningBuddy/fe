import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { categoryList } from "../../../../mock/DiningMockData";

export const DiningPage = () => {
  return (
    <>
      {/* Banner Container */}
      <View>
        {categoryList.map((item) => (
          <View key={item.id}>{item.title}</View>
        ))}
      </View>
    </>
  );
};

export default DiningPage;
