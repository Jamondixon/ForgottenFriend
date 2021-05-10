import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { Button } from "react-native-elements"

export default function CommentForm(props) {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      input: event.target.value,
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
      <Button style={styles.button} title="Submit" onPress={handleSubmit} />
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
    backgroundColor: "ivory",
    fontFamily: "Futura-MediumItalic",
    borderColor: "mediumturquoise",
  },
  button: {
    width: 140,
    alignSelf: "center",
    padding: 4,
  },
})
