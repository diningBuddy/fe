import styled from "styled-components/native";
import { Button, ScrollView, View } from "react-native";
import React, { useRef, useState } from "react";

import Toast from "../../common/atom/Toast";

const SampleToast = () => {
  const toastRef = useRef(null);
  const [toastVariant, setToastVariant] = useState<string | null>(null);

  const showToast = (variant: string) => {
    setToastVariant(variant);
    // Toast 컴포넌트의 애니메이션을 실행
    if (toastRef.current) {
      (toastRef.current as any).showToast();
    }
  };

  return (
    <View>
      {toastVariant && <Toast ref={toastRef} message="댓글 알림이 활성화 되었습니다." variant={toastVariant} />}
      <ScrollViewContainer keyboardShouldPersistTaps="handled">
        <ButtonContainer>
          <Button title="Success Toast" onPress={() => showToast("success")} />
          <Button title="Destructive Toast" onPress={() => showToast("destructive")} />
          <Button title="Informative Toast" onPress={() => showToast("informative")} />
          <Button title="Default Toast" onPress={() => showToast("default")} />
        </ButtonContainer>
      </ScrollViewContainer>
    </View>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
  overflow: visible;
`;

const ButtonContainer = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export default SampleToast;
