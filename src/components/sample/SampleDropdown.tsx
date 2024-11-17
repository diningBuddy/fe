import { ScrollView } from "react-native";
import styled from "styled-components/native";
import React from "react";

import Dropdown from "../../common/atom/Dropdown";

const SampleDropdown = () => {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <Dropdown
        variant="default"
        label="default"
        description="Your message will be copied to the support team."
        placeholder="선택해주세요"
      />

      <Dropdown
          variant="destructive"
          label="destructive"
          description="Your message will be copied to the support team."
          placeholder="선택해주세요"
      />

      <Dropdown
        variant="default"
        label="default + disabled"
        description="Your message will be copied to the support team."
        placeholder="선택해주세요"
        isDisabled
      />
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleDropdown;
