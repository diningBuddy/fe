import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View } from "react-native";

// Define tab item interface
interface TabItem {
    label: string;
}

// Define component properties
interface TabProps {
    items: TabItem[];
    onSelect: (index: number) => void;
    isScrollable?: boolean;
}

// Main Tab Component
const Tab: React.FC<TabProps> = ({
                                     items,
                                     onSelect,
                                     isScrollable = false,
                                 }) => {
    const [selectedIndex, setSelectedIndex] = useState(0); // 첫 번째 탭 기본 선택

    const handleSelect = (index: number) => {
        setSelectedIndex(index); // 현재 선택된 인덱스로 업데이트
        onSelect(index); // 부모 컴포넌트로 onSelect 호출
    };

    return (
        <TabContainer isScrollable={isScrollable}>
            {isScrollable ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TabList
                        items={items}
                        onSelect={handleSelect}
                        selectedIndex={selectedIndex}
                        isScrollable={true}
                    />
                </ScrollView>
            ) : (
                <TabList
                    items={items}
                    onSelect={handleSelect}
                    selectedIndex={selectedIndex}
                    isScrollable={false}
                />
            )}
        </TabContainer>
    );
};

// Render individual tabs
const TabList: React.FC<TabProps & { selectedIndex: number }> = ({
                                                                     items,
                                                                     onSelect,
                                                                     selectedIndex,
                                                                     isScrollable,
                                                                 }) => {
    return (
        <>
            {items.map((item, index) => (
                <TabItem
                    key={index}
                    isSelected={index === selectedIndex}
                    onPress={() => onSelect(index)}
                    isScrollable={isScrollable}
                >
                    <TabLabel isSelected={index === selectedIndex}>
                        {item.label}
                    </TabLabel>
                </TabItem>
            ))}
        </>
    );
};

// Styled Components
const TabContainer = styled(View)<{ isScrollable: boolean }>`
    flex-direction: row;
    justify-content: ${({ isScrollable }) => (isScrollable ? "flex-start" : "space-around")};
    margin: 10px 0;
`;

const TabItem = styled(TouchableOpacity)<{ isSelected: boolean; isScrollable: boolean }>`
    flex: ${({isScrollable}) => (isScrollable ? "none" : "1")};
    padding: 14px 16px 12px 16px;
    border-bottom-width: 2px;
    border-bottom-color: ${({isSelected, theme}) =>
            isSelected ? theme.color.sys.secondary.default : theme.color.theme.border};
`;

const TabLabel = styled.Text<{ isSelected: boolean }>`
    font-size: 14px;
    color: ${({ isSelected, theme }) =>
            isSelected ? theme.color.sys.secondary.default : theme.color.theme.disabled};
    font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

export default Tab;
