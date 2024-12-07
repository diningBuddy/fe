import React from "react";
import { Text } from "react-native";

import Tabs from "../../common/atom/Tab";

const SampleTabs = () => {
  const tabs = [
    { label: "카테고리", value: "category" },
    { label: "한식", value: "korean", recentAlarm: <Text>알람</Text> },
    { label: "중식", value: "chinese" },
    { label: "일식", value: "japen" },
  ];

  return (
    <Tabs tabs={tabs}>
      <Text>Tab 1 카테고리</Text>
      <Text>Tab 2 한식</Text>
      <Text>Tab 3 중식</Text>
      <Text>Tab 4 일식</Text>
    </Tabs>
  );
};

export default SampleTabs;
