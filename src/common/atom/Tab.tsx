import React, { useState } from "react";
import styled from "styled-components/native";

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
    background-color: #ffffff;
  `;

  const TabList = styled.View`
    flex-direction: row;
    border-bottom-color: grey;
  `;

  const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
    flex: 1;
    align-items: center;
    padding: 12px 0;
    background-color: ${({ isActive }) => (isActive ? "transparent" : "#fff")};
  `;

  const TabLabel = styled.Text<{ isActive: boolean }>`
    padding: 14px 16px;
    border-bottom-width: ${({ isActive }) => (isActive ? "2px" : "0px")};
    font-weight: 600;
    font-size: 14px;
    color: ${({ isActive }) => (isActive ? "#262626" : "grey")};
  `;

  // TODO: 최종결정 시 추가
  const TabAlarm = styled.Text`
    color: #ff6d59;
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
            <TabLabel isActive={tab.value === currentTab}>{tab.label}</TabLabel>
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
