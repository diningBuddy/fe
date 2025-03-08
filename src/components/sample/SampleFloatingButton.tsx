import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, NativeSyntheticEvent, NativeScrollEvent, Animated } from "react-native";

import { EditFloatingButton, TopScrollFloatingButton } from "../../common/atom/FloatingButton";
import NavigationHeader from "../../common/atom/NavigationHeader";

const FloatingButtonSample = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [offsetY, setOffsetY] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleEditClick = () => {
    alert("수정 버튼 클릭");
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    setOffsetY(currentOffsetY);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 20,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, 300);
    setScrollTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <View style={styles.container}>
      <NavigationHeader title="FloatingButtonSample" isGoBackButton isSearchButton />

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Text key={index}>스크롤 내린 후 버튼 클릭</Text>
        ))}
      </ScrollView>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}>
        {/* <TopScrollFloatingButton scrollViewRef={scrollViewRef} offsetY={offsetY} /> */}
        <EditFloatingButton onPress={handleEditClick} />
      </Animated.View>
    </View>
  );
};

export default FloatingButtonSample;

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingVertical: 16,
  },
});
