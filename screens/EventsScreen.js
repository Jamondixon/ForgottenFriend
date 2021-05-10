import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Image,
  Card,
  ScrollView,
  TouchableOpacity,
} from "react-native"

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch("http://localhost:3000/events")
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
      let events = this.state.dataSource.map((val, key) => {
        return (
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.itemContainer}>
              <ImageBackground
                source={{ uri: val.image }}
                style={styles.image}
              ></ImageBackground>
              <Text style={styles.name}>{val.name}</Text>
              <Text style={styles.location}>{val.location}</Text>
            </TouchableOpacity>
          </View>
        )
      })
      return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/wood5.jpeg")}
        >
          <Text style={styles.heading}>Events</Text>
          <View style={styles.eventsContainer}>
            <ScrollView>{events}</ScrollView>
          </View>
        </ImageBackground>
      )
    }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    top: 30,
    fontFamily: "Futura-Medium",
    fontSize: 30,
    fontWeight: "900",
    color: "darkseagreen",
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  eventsContainer: {
    flex: 1,
    height: 350,
    width: 300,
    backgroundColor: "lightcyan",
    marginTop: 40,
    borderRadius: 40,
    alignSelf: "center",
    padding: 35,
  },
  itemContainer: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    padding: 5,
    borderStyle: "solid",
    borderColor: "black",
  },
  // imageContainer: {
  //   padding: 20,
  //   margin: 20,
  // },
  image: {
    flex: 1,
    width: 220,
    height: 200,
  },
  name: {
    color: "white",
    fontSize: 20,
    position: "absolute",

    textAlign: "center",
    padding: 5,
    alignSelf: "center",
  },
  location: {
    textAlign: "center",
    fontFamily: "Futura-Medium",
    fontSize: 20,
    fontWeight: "900",
  },
})
