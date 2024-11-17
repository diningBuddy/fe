import { Button, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";

import Dropdown from "../../common/atom/Dropdown";

const SampleDropdown = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleDropdownPress = () => {
    setFocused(true);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setFocused(false);
    setModalVisible(false);
  };

  const handleSelectValue = (value: string) => {
    setSelectedValue(value);
    handleModalClose();
  };

  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <Dropdown
        variant="default"
        label="default"
        description="Your message will be copied to the support team."
        placeholder="선택해주세요"
        selectedValue={selectedValue}
        isFocused={isFocused}
        onPress={handleDropdownPress}
      />

      <Dropdown
        variant="destructive"
        label="destructive"
        description="Your message will be copied to the support team."
        placeholder="선택해주세요"
        selectedValue={selectedValue}
        isFocused={isFocused}
        onPress={handleDropdownPress}
      />

      <Dropdown
        variant="default"
        label="default + disabled"
        description="Your message will be copied to the support team."
        placeholder="선택해주세요"
        isDisabled
      />

      <Modal visible={isModalVisible} transparent animationType="slide" onRequestClose={handleModalClose}>
        <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Select an option</Text>
            {/* 선택 가능한 텍스트 리스트 */}
            <TouchableOpacity onPress={() => handleSelectValue("Option 1")}>
              <Text style={{ padding: 10, fontSize: 16 }}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectValue("Option 2")}>
              <Text style={{ padding: 10, fontSize: 16 }}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectValue("Option 3")}>
              <Text style={{ padding: 10, fontSize: 16 }}>Option 3</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={handleModalClose} />
          </View>
        </View>
      </Modal>
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleDropdown;
