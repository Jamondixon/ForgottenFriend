import React, { useRef } from "react";
import { Animated, StyleSheet } from "react-native";

export default function FadeInView(props) {
  const fadeIn = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  return (
    <Animated.View style={{ ...StyleSheet.container, opacity: fadeIn }}>
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
