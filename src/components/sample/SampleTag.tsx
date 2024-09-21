import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Tag from "../../common/Tag";

function SampleTag() {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <Tag mode="info" label="Info" />
      <Tag mode="success" label="Success" />
      <Tag mode="error" label="Error" />
      <Tag mode="neutral" label="Neutral" />
      <Tag mode="primary" outline label="Primary" />
    </ScrollViewContainer>
  );
}

const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
})`
  padding: 20px;
  flex: 1;
  background-color: #ffffff;
`;

export default SampleTag;
