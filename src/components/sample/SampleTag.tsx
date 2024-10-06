import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import Tag from "../../common/atom/Tag";

function SampleTag() {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <TagGroup>
        <Tag mode="info" label="Info" />
        <Tag mode="success" label="Success" />
        <Tag mode="error" label="Error" />
        <Tag mode="neutral" label="Neutral" />
        <Tag mode="primary" outline label="Primary" />
      </TagGroup>

      <TagGroup>
        <Tag mode="info" label="Info" height="sm" />
        <Tag mode="success" label="Success" height="sm" />
        <Tag mode="error" label="Error" height="sm" />
        <Tag mode="neutral" label="Neutral" height="sm" />
        <Tag mode="primary" outline label="Primary" height="sm" />
      </TagGroup>
    </ScrollViewContainer>
  );
}

const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
})`
  padding: 20px;
  flex: 1;
  background-color: #ffffff;
`;

const TagGroup = styled(View)`
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export default SampleTag;
