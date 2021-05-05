import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { Button } from "react-native-elements"

export default function LoginForm(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.setUser({
      username,
      password,
    })
  }

  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        style={styles.formInput}
        placeholder="username"
        value={username}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.formInput}
        placeholder="password"
        value={password}
        secureTextEntry={true}
      />
      <Button
        style={styles.submitButton}
        title="Submit"
        onPress={handleSubmit}
      />
      <Button
        style={styles.registerButton}
        title="Register"
        onPress={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 0,
  },
  formInput: {
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 40 / 2,
    marginTop: 10,
    padding: 10,
    backgroundColor: "honeydew",
    fontFamily: "Futura-MediumItalic",
  },
  submitButton: {
    width: 140,
    alignSelf: "center",
    padding: 4,
  },
  registerButton: {
    width: 140,
    alignSelf: "center",
    padding: 4,
  },
})