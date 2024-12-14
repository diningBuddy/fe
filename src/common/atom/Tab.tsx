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
    border-bottom-width: 1px;
    border-bottom-color: ${color.global.neutral[400]};
  `;

  const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
    flex: 1;
    align-items: center;
    padding-top: 12px;
    background-color: ${({ isActive }: { isActive: boolean }) =>
      isActive ? "transparent" : color.global.neutral[100]};
  `;

  const TabLabel = styled.Text<{ isActive: boolean }>`
    padding: 14px 16px;
    border-bottom-width: ${({ isActive }: { isActive: boolean }) => (isActive ? "2px" : "0px")};
    border-bottom-color: ${({ isActive }: { isActive: boolean }) =>
      isActive ? color.sys.secondary.default : color.global.neutral[400]};
    color: ${({ isActive }: { isActive: boolean }) =>
      isActive ? color.sys.secondary.default : color.global.neutral[600]};
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
