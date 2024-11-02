import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import React from "react";
import Divider from "../../common/atom/Divier";

const SampleDivider = () => {
    return (
        <ScrollViewContainer keyboardShouldPersistTaps="handled">
            <Description>Default Horizontal Divider</Description>
            <Divider size="default" orientation="horizontal" color="#000000" />

            <Description>Thin Horizontal Divider</Description>
            <Divider size="thin" orientation="horizontal" color="#000000" />

            <Description>Thick Horizontal Divider</Description>
            <Divider size="thick" orientation="horizontal" color="#000000" />

            <Description>Default Vertical Divider (height: 100)</Description>
            <Divider size="default" orientation="vertical" color="#000000" style={{ height: 100 }} />

            <Description>Thin Vertical Divider (height: 100)</Description>
            <Divider size="thin" orientation="vertical" color="#000000" style={{ height: 100 }} />

            <Description>Thick Vertical Divider (height: 100)</Description>
            <Divider size="thick" orientation="vertical" color="#000000" style={{ height: 100 }} />
        </ScrollViewContainer>
    );
};

// ScrollView 스타일 설정
const ScrollViewContainer = styled(ScrollView)`
    padding: 20px;
    background-color: #ffffff;
`;

// 설명 텍스트 스타일 설정
const Description = styled(Text)`
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
`;

export default SampleDivider;