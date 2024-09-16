import React from "react";
import {ScrollView} from "react-native";
import Input from "../../common/Input";
import styled from "styled-components/native"; // Import the renamed Input component

const SampleInput = () => {
  return (
      <ScrollViewContainer>
        <Input
            variant="default"
            state="initial"
            label="default + initial"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="default"
            state="focused"
            label="default + focused"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
            inputValue="Type your message here"
        />
        <Input
            variant="default"
            state="filled"
            label="default + filled"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
            inputValue="Type your message here"
        />
        <Input
            variant="default"
            state="disabled"
            label="default + disabled"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="destructive"
            state="initial"
            label="destructive + initial"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="destructive"
            state="focused"
            label="destructive + focused"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
            inputValue="Type your message here"
        />
        <Input
            variant="destructive"
            state="filled"
            label="destructive + filled"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
            inputValue="Type your message here"
        />
        <Input
            variant="default"
            state="initial"
            description="Your message will be copied to the support team."
            placeholder="Type your message here"
        />
        <Input
            variant="default"
            label="no description"
            state="initial"
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
