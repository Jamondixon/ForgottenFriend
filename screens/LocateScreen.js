import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function LocateScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wood3.jpeg")}
    >
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
