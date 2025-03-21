import { View } from "react-native";

import { categoryList } from "../../../../mock/DiningMockData";

export const DiningHeader = () => {
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

export default DiningHeader;
