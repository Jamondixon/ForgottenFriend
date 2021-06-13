import React, { useState } from "react"
import { View, TextInput, StyleSheet, Form, Alert } from "react-native"
import { Button } from "react-native-elements"

export default function CommentForm(props) {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (event) => {
    event.target.reset()
    this.setState({
      email: [],
      comment: [],
    })
  }

  openAlert = () =>{
    alert('Comment added!');
  }
 
  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.formInput}
        placeholder="email"
        value={email}
        clearButtonMode='always'
      />
      <TextInput
        onChangeText={(text) => setComment(text)}
        style={styles.formInput}
        placeholder="comment"
        value={comment}
        clearButtonMode='always'
      />
      <Button style={styles.button} title="Submit"  />
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
