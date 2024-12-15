import { Button, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";

import Spinner from "../../common/atom/Spinner"; // Spinner 컴포넌트 import

const SampleSpinner = () => {
  const [loadingSmallBlack, setLoadingSmallBlack] = useState(false);
  const [loadingSmallPrimary, setLoadingLargePrimary] = useState(false);

  const handleSpinner = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1초 뒤에 Spinner 멈추게
  };

  return (
    <Container>
      <ScrollViewContainer keyboardShouldPersistTaps="handled">
        <View>
          <Button title="Show Small Black Spinner" onPress={() => handleSpinner(setLoadingSmallBlack)} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Show Large Primary Spinner" onPress={() => handleSpinner(setLoadingLargePrimary)} />
        </View>
      </ScrollViewContainer>

      {/* Spinner 컴포넌트는 화면 전체를 덮을 수 있도록 */}
      {loadingSmallBlack && <Spinner size="small" color="black" />}
      {loadingSmallPrimary && <Spinner size="large" color="primary" />}
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
`;

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
  flex: 1;
`;

export default SampleSpinner;
