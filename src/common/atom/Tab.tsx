import React, { useState } from "react";
import styled from "styled-components/native";

import { color } from "../../styles/ThemeStyle";
import { BodySemibold14 } from "./Typo";

interface TabContentProps {
  label: string;
  value: string;
  recentAlarm?: string | React.ReactNode;
}

interface TabsProps {
  tabs: TabContentProps[];
  children: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const Container = styled.View`
    flex: 1;
    background-color: ${color.global.neutral[100]};
  `;

  const TabList = styled.View`
    flex-direction: row;
    border-bottom-color: grey;
  `;

  const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
    flex: 1;
    align-items: center;
    padding: 12px 0;
    background-color: ${({ isActive }) => (isActive ? "transparent" : color.global.neutral[100])};
  `;

  const TabLabel = styled.Text<{ isActive: boolean }>`
    padding: 14px 16px;
    border-bottom-width: ${({ isActive }) => (isActive ? "2px" : "0px")};
    color: ${({ isActive }) => (isActive ? color.sys.secondary.default : color.global.neutral[600])};
  `;

  // TODO: 최종결정 시 추가
  const TabAlarm = styled.Text`
    color: ${color.global.orange[500]};
  `;

  const TabContent = styled.View`
    flex: 1;
    padding: 16px;
  `;

  const TabPanel = styled.View`
    flex: 1;
  `;

  return (
    <Container>
      <TabList>
        {tabs.map((tab) => (
          <TabButton key={tab.value} isActive={tab.value === currentTab} onPress={() => handleTabChange(tab.value)}>
            <TabLabel isActive={tab.value === currentTab}>
              <BodySemibold14>{tab.label}</BodySemibold14>
            </TabLabel>
            {/* {tab.recentAlarm && <TabAlarm>{tab.recentAlarm}</TabAlarm>} */}
          </TabButton>
        ))}
      </TabList>
      <TabContent>
        {tabs.map((tab, index) => tab.value === currentTab && <TabPanel key={tab.value}>{children[index]}</TabPanel>)}
      </TabContent>
    </Container>
  );
};

export default Tabs;
