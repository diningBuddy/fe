import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Toast from "../../common/atom/Toast";

interface ToastHandle {
  showToast: () => void;
}
export const DiningDetailPage = () => {
  const toastRef = React.createRef<ToastHandle>();
  const [toastVariant, setToastVariant] = useState<string | null>(null);

  return (
    // DOTO : 스크롤 공통 스타일 적용
    <ScrollView contentContainerStyle={styles.container}>
      <DiningDetailHeader />
      <DiningDetailMain />

      <Toast ref={toastRef} message="안녕하세요, {닉네임}님!" variant={toastVariant} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 18,
  },
});

export default DiningDetailPage;
