import React, { component } from "react"
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from "react-native"
import CommentForm from "./CommentForm"

export default class LocateScreen2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    } else {
      let comments = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text style={styles.email}>{val.email}</Text>
            <Text style={styles.remarks}>{val.remarks}</Text>
          </View>
        )
      })
      return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/wood3.jpeg")}
        >
          <Text style={styles.locateHeading}>Locate Item!</Text>
          <ScrollView style={styles.container}>{comments}</ScrollView>
          <CommentForm></CommentForm>
        </ImageBackground>
      )
    }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: 350,
    width: 300,
    backgroundColor: "honeydew",
    marginTop: 50,
    borderRadius: 50,
    alignSelf: "center",
    padding: 30,
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    padding: 15,
  },
  email: {
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
  remarks: {
    left: 10,
  },
})
