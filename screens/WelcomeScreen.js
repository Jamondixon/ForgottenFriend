import "react-native-gesture-handler"
import React, { useState } from "react"
import { Image, Text, ImageBackground, StyleSheet, View } from "react-native"
import LoginForm from "./LoginForm"
import FadeInView from "./FadeInView"

function WelcomeScreen(props) {
  const [user, setUser] = useState({})

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bluegold.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/NewFF.png")} />
      </View>
      <FadeInView>
        <View style={styles.container}>
          {user.username ? (
            <Text style={styles.text}>Welcome {user.username}!</Text>
          ) : (
            <Text style={styles.text}>Please Sign In</Text>
          )}
          <LoginForm setUser={setUser} />
        </View>
      </FadeInView>
    </ImageBackground>
  )
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40 / 2,
    paddingTop: 0,
  },
  text: {
    fontFamily: "Futura-MediumItalic",
    color: "ivory",
    fontSize: 25,
    fontWeight: "900",
    paddingBottom: 10,
  },
})
export default WelcomeScreen
