import "react-native-gesture-handler";
import React from "react";
import { Image, Text, ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_brown.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/ff6.png")} />
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
  logoContainer: {
    position: "absolute",
    top: 90,
  },
  logo: {
    height: 300,
    width: 300,
  },
});
export default WelcomeScreen;
