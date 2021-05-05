import React, { Component } from "react"
import { View, StyleSheet, TextInput } from "react-native"

class Main extends React.Component {
  state = { name: "" }
  onChangeText = (name) => this.setState({ name })
  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder={"Jamon Dixon"}
          value={this.state.name}
        />
      </View>
    )
  }
}
const offset = 24
const styles = StyleSheet.create({})

export default Main
