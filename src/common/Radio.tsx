import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const zoomOut = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Radio = styled.label<{ selected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 3px solid ${(props) => (props.selected ? "#FF5E68" : "#ccc")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  animation: ${(props) => (props.selected ? zoomIn : zoomOut)} 0.3s forwards;
`;

const HiddenRadio = styled.input`
  opacity: 0;
  position: absolute;
`;

const InnerCircle = styled.div<{ selected: boolean }>`
  width: ${(props) => (props.selected ? "30px" : "0px")};
  height: ${(props) => (props.selected ? "30px" : "0px")};
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "#FF5E68" : "transparent")};
  transition:
    width 0.3s ease-in-out,
    height 0.3s ease-in-out;
`;

const RadioButtons = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <RadioContainer>
      {[1, 2, 3, 4].map((_, index) => (
        <Radio key={index} selected={selectedIndex === index} onClick={() => setSelectedIndex(index)}>
          <HiddenRadio type="radio" checked={selectedIndex === index} onChange={() => setSelectedIndex(index)} />
          <InnerCircle selected={selectedIndex === index} />
        </Radio>
      ))}
    </RadioContainer>
  );
};

export default RadioButtons;
