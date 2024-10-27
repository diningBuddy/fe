import {ScrollView} from "react-native";
import styled from "styled-components/native";
import React, {useState} from "react";
import Tab from "../../common/atom/Tab";

const SampleTab = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const items = [
        { label: "카테고리" },
        { label: "한식" },
        { label: "중식" },
        { label: "일식" },
        { label: "양식" },
        { label: "아시아" },
    ];

    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
            <Tab
                items={items}
                selectedIndex={selectedTab}
                onSelect={setSelectedTab}
                isScrollable={true}
            />

            <Tab
                items={items.slice(0, 4)}
                selectedIndex={selectedTab}
                onSelect={setSelectedTab}
                isScrollable={false}
            />
        </ScrollViewContainer>
    )
}

const ScrollViewContainer = styled(ScrollView)`
    padding: 20px;
    background-color: #ffffff;
`;

export default SampleTab;