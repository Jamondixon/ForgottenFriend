import React from "react"
import { StyleSheet, Text, View } from "react-native"
import WelcomeScreen from "./screens/WelcomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import HomeScreen from "./screens/HomeScreen"
import EventsScreen from "./screens/EventsScreen"
import LocateScreen from "./screens/LocateScreen"
import LocateScreen2 from "./screens/LocateScreen2"
// import LocateScreen3 from "./screens/LocateScreen3"

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "honeydew",
          inactiveTintColor: "darkseagreen",
          activeBackgroundColor: "darkseagreen",
          inactiveBackgroundColor: "honeydew",
          labelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            margin: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="human-greeting"
                color={"mediumturquoise"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-heart"
                color={"mediumturquoise"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-star"
                color={"mediumturquoise"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Locate"
          component={LocateScreen2}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map-marker-check"
                color={"mediumturquoise"}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
