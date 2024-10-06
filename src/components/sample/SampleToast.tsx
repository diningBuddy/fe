import styled from "styled-components/native";
import { ScrollView } from "react-native";

import Toast from "../../common/atom/Toast";

const SampleToast = () => {
  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <Toast message="댓글 알림이 활성화 되었습니다." variant="default" />
      <Toast message="댓글 알림이 활성화 되었습니다." variant="success" />
      <Toast message="댓글 알림이 활성화 되었습니다." variant="destructive" />
      <Toast message="댓글 알림이 활성화 되었습니다." variant="informative" />
      <Toast message="댓글 알림이 활성화 되었습니다." variant="default" isNavigateButton={false} />
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleToast;
