import "react-native-gesture-handler";
import React, { useState } from "react";
import { Image, Text, ImageBackground, StyleSheet, View } from "react-native";
import LoginForm from "./LoginForm";

function WelcomeScreen(props) {
  const [user, setUser] = useState({});

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_brown.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/ff6.png")} />
      </View>
      <View style={styles.container}>
        {user.username ? (
          <Text style={styles.text}>Welcome {user.username}!</Text>
        ) : (
          <Text style={styles.text}>Please Sign In</Text>
        )}
        <LoginForm setUser={setUser} />
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
    top: 60,
  },
  logo: {
    height: 300,
    width: 300,
    borderRadius: 40 / 2,
  },
  container: {
    height: 210,
    // backgroundColor: "mintcream",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40 / 2,
    paddingTop: 0,
  },
  text: {
    fontFamily: "Futura-MediumItalic",
    color: "mintcream",
    fontSize: 20,
  },
});
export default WelcomeScreen;
