import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import Progress from "../../common/atom/Progress";

const SampleProgress = () => {
  const [progress, setProgress] = useState(0); // 진행 상태 초기값은 0

  // 진행 상태를 0에서 100까지 증가시키는 함수
  useEffect(() => {
    // 1초마다 진행 상태를 1씩 증가
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // 100에 도달하면 진행 상태 증가를 멈춤
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20); // 20ms마다 1씩 증가

    return () => clearInterval(interval); // 컴포넌트가 unmount 될 때 interval을 정리
  }, []);

  return (
    <ScrollViewContainer keyboardShouldPersistTaps="handled">
      <View style={{ marginTop: 20 }}>
        <Progress
          value={progress} // 진행 상태 (0~100)
          size="sm"
          label="80% complete"
          description="2 / 10"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Progress
          value={progress} // 진행 상태 (0~100)
          size="md"
          label="80% complete"
          description="2 / 10"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Progress
          value={progress} // 진행 상태 (0~100)
          size="lg"
          label="80% complete"
          description="2 / 10"
        />
      </View>
    </ScrollViewContainer>
  );
};

const ScrollViewContainer = styled(ScrollView)`
  padding: 20px;
  background-color: #ffffff;
`;

export default SampleProgress;
