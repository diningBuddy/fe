import { Pencil } from "lucide-react-native";
import React, { useRef, useEffect } from "react";
import { StyleSheet, Pressable, Animated } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
}

const FloatingButtonIcon: React.FC<FloatingButtonProps> = ({ onPress, icon }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
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

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
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
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}>
      <Pressable style={styles.button} onPress={onPress}>
        {icon}
      </Pressable>
    </Animated.View>
  );
};

interface FloatingEditButtonProps {
  // scrollViewRef?: React.RefObject<ScrollView>;
  onEditPress: () => void;
}

export const FloatingEditButton: React.FC<FloatingEditButtonProps> = ({
  // scrollViewRef,
  onEditPress,
}) => {
  return <FloatingButtonIcon onPress={onEditPress} icon={<Pencil size={24} color="#000" />} />;
};

export default FloatingButtonIcon;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    elevation: 3,
    height: 56,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 18,
    width: 56,
  },
  buttonContainer: {
    bottom: 16,
    position: "absolute",
    right: 16,
  },
});
