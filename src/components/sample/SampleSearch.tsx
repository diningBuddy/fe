import styled from "styled-components/native";
import { ScrollView } from "react-native";
import React from "react";

import Search from "../../common/Search";

const SampleSearch = () => {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <Search placeholder="원하는 식당을 검색해 보세요" />
      <Search placeholder="원하는 식당을 검색해 보세요" isDisabled />
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleSearch;
