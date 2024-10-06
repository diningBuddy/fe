import styled from "styled-components/native";
import { ScrollView } from "react-native";

import Toast from "../../common/atom/Toast";

const SampleToast = () => {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <ToastWrapper>
        <Toast message="댓글 알림이 활성화 되었습니다." variant="default" />
      </ToastWrapper>
      <ToastWrapper>
        <Toast message="댓글 알림이 활성화 되었습니다." variant="success" />
      </ToastWrapper>
      <ToastWrapper>
        <Toast message="댓글 알림이 활성화 되었습니다." variant="destructive" />
      </ToastWrapper>
      <ToastWrapper>
        <Toast message="댓글 알림이 활성화 되었습니다." variant="informative" />
      </ToastWrapper>
      <ToastWrapper>
        <Toast message="댓글 알림이 활성화 되었습니다." variant="default" isNavigateButton={false} />
      </ToastWrapper>
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

const ToastWrapper = styled.View`
  margin-bottom: 10px;
`;

export default SampleToast;
