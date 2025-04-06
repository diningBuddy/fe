import { View } from "react-native";

import NavigationHeader from "../../common/atom/NavigationHeader";

export default function SampleNavigationHeader() {
  return (
    <View>
      <NavigationHeader title="Title" isGoBackButton />
      <NavigationHeader
        title="Title"
        isSearchButton
        rightIconName="search"
        onRightIconPress={() => alert("검색 클릭")}
      />
      <NavigationHeader title="Title" isGoBackButton isSearchButton />
    </View>
  );
}
