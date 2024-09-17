import React from "react";
import {ScrollView} from "react-native";
import Input from "../../common/Input";
import styled from "styled-components/native";

const SampleInput = () => {
  return (
      <ScrollViewContainer keyboardShouldPersistTaps="handled">
        <Input
            variant="default"
            label="default"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="default"
            label="default + disabled"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
            isDisabled={true}
        />
        <Input
            variant="destructive"
            label="destructive"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="default"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="default"
            label="no description"
            placeholder="Type your message here"
        />
      </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleInput;
