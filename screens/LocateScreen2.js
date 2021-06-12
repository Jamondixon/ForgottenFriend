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
      comments: [],
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
          source={require("../assets/bluegold.jpg")}
        >
          <Text style={styles.locateHeading}>Locate Item</Text>
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
    backgroundColor: "ivory",
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
    fontFamily: "Geeza Pro",
    fontSize: 14,
  },
  locateHeading: {
    textAlign: "center",
    top: 30,
    fontFamily: "Georgia",
    fontSize: 30,
    fontWeight: "900",
    color: "lightcyan",
  },
  remarks: {
    left: 20,
    fontFamily: "Gill Sans",
    fontSize: 20,
  },
})

