import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Form } from "react-native"
import { Button } from "react-native-elements"

export default function CommentForm(props) {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      email: [],
      comment: [],
    })
  }
  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.formInput}
        placeholder="email"
        value={email}
      />
      <TextInput
        onChangeText={(text) => setComment(text)}
        style={styles.formInput}
        placeholder="comment"
        value={comment}
      />
      <Button style={styles.button} title="Submit" />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 0.5,
  },
  formInput: {
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 40 / 2,
    marginTop: 10,
    padding: 10,
    backgroundColor: "lightcyan",
    fontFamily: "Futura-MediumItalic",
    borderColor: "mediumturquoise",
  },
  button: {
    width: 120,
    alignSelf: "center",
    padding: 4,
    paddingTop: 10,
  },
})
