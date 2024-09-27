import styled from "styled-components/native";
import { ScrollView } from "react-native";
import TextArea from "../../common/TextAre";

const SampleTextArea = () => {
  return (
    <ScrollViewContainer>
      <TextArea
        variant="default"
        label="default"
        description="Your message will be copied to the support team."
        placeholder="Type your message here"
      />
      <TextArea
        variant="default"
        label="default"
        description="Your message will be copied to the support team."
        placeholder="Type your message here"
        isSuccess={true}
      />
      <TextArea
        variant="default"
        label="default + disabled"
        description="Your message will be copied to the support team."
        placeholder="Type your message here"
        isDisabled={true}
      />
      <TextArea
        variant="destructive"
        label="destructive"
        description="Your message will be copied to the support team."
        placeholder="Type your message here"
      />
      <TextArea
        variant="default"
        description="Your message will be copied to the support team."
        placeholder="Type your message here"
      />
      <TextArea variant="default" label="no description" placeholder="Type your message here" />
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleTextArea;
