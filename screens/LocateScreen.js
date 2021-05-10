import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  TextInput,
} from "react-native"
import CommentForm from "./CommentForm"

export default function LocateScreen(props) {
  const [user, setUser] = useState({})

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wood3.jpeg")}
    >
      <View>
        <Text style={styles.locateHeading}>Locate Item!</Text>
        <ScrollView style={styles.commentsContainer}>
          {/* {showComments()} */}
          {user.username ? (
            <Text style={styles.username}>{user.username}</Text>
          ) : null}
          {user.comment ? (
            <Text style={styles.comment}>{user.comment}</Text>
          ) : null}
        </ScrollView>
        <CommentForm setUser={setUser}></CommentForm>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  commentsContainer: {
    flex: 1,
    height: 400,
    width: 250,
    backgroundColor: "honeydew",
    marginTop: 50,
    borderRadius: 50,
    alignSelf: "center",
    padding: 30,
  },
  username: {
    fontWeight: "500",
    color: "blue",
  },
  locateHeading: {
    textAlign: "center",
    top: 40,
    fontFamily: "Futura-Medium",
    fontSize: 20,
    fontWeight: "900",
    color: "mintcream",
    textShadowColor: "black",
    textShadowRadius: 2,
  },
})
