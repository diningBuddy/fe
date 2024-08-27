import React from "react";
import {ScrollView} from "react-native";
import InputButton from "./InputButton";
import styled from "styled-components/native"; // Import the renamed InputButton component

const SampleInput = () => {
  return (
      <ScrollViewContainer>
        <InputButton
            variant="default"
            state="initial"
            label="default + initial"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="default"
            state="focused"
            label="default + focused"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="default"
            state="filled"
            label="default + filled"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="default"
            state="disabled"
            label="default + disabled"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="destructive"
            state="initial"
            label="destructive + initial"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="destructive"
            state="focused"
            label="destructive + focused"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="destructive"
            state="filled"
            label="destructive + filled"
            description="Your message will be copied to the support team."
        />
        <InputButton
            variant="default"
            state="initial"
            description="Your message will be copied to the support team."
        />
       <InputButton
             variant="default"
             label="no description"
             state="initial"
       />
      </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #f5f5f5;
`;

export default SampleInput;
