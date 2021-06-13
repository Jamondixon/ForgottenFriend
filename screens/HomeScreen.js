import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"

const defaultUser = {
  name: "Jamon Dixon",
  email: "Jamonadixon@gmail.com",
  age: "34",
  sex: "Male",
  profilePhoto: "../assets/jamon1.jpeg",
  items: [
    {
      image:
        "https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/16:9/w_2560%2Cc_limit/Pullman-Loaf-Lede-new.jpg",
      name: "Loaf of bread",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0274/7315/products/dr_pep_1359x700.jpg?v=1562140549",
      name: "Dr. Pepper 12-pack",
    },
    {
      image: "https://www.kroger.com/product/images/xlarge/front/0004127197120",
      name: "Bag of ice",
    },
    {
      image:
        "https://www.byrdie.com/thmb/cTB6sWY46RuVMsmrZJeVMiGBPK4=/1400x787/smart/filters:no_upscale()/GUEST_2226107b-0865-45a4-9d90-bb078b26b5bd-97a56e6e034b4b8a986783ce7ea33169.jpg",
      name: "Toothpaste",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/35db7a45-b163-444b-ba68-551780d4d395_1.4bacb5cf753d52de366986ae2a8a7e7d.jpeg",
      name: "Tent Stakes",
    },
    {
      image: "https://images.heb.com/is/image/HEBGrocery/002218660",
      name: "Bloody Mary mix",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UjIVo7maL._AC_UX425_.jpg",
      name: "Baseball cap",
    },
    {
      image:
        "https://www.adventure-journal.com/wp-content/uploads/2011/06/dalespaleale.jpg",
      name: "6-pack of Dale's",
    },
  ],
}

export default function HomeScreen() {
  const [user, setUser] = useState(defaultUser)

  const showItems = () =>
    user.items.map((item, i) => {
      console.log(item)
      return (
        <View style={styles.itemImageContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Image
            key={i.id}
            style={styles.itemImage}
            source={{ uri: item.image }}
          />
        </View>
      )
    })

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePhoto}
        source={require("../assets/jamon1.jpeg")}
      ></Image>
      <View style={styles.popUpInfoContainer}>
        <Text style={styles.nameHeading}>{user.name}</Text>
        <Text style={styles.emailHeading}>{user.email}</Text>
        <View style={styles.ageSex}>
          <Text style={styles.sex}>Sex:{user.sex}</Text>
          <Text style={styles.age}>Age:{user.age}</Text>
        </View>
      </View>
      <ScrollView style={styles.itemContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.rowHeading}>Offered Items</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemList}>{showItems()}</View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  profilePhoto: {
    flex: 1,
    width: "100%",
    marginTop: -10,
    borderRadius: 20,
  },
  itemContainer: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
  },
  rowHeading: {
    flex: 1,
    marginLeft: 25,
    color: "ivory",
    fontSize: 23,
    marginTop: 100,
    fontWeight: "700",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  button: {
    width: 70,
    marginRight: 65,
    backgroundColor: "ivory",
    padding: 8,
    borderRadius: 40,
  },
  itemList: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemImageContainer: {
    width: 175,
    marginHorizontal: 2,
  },
  itemImage: {
    flex: 1,
    width: 170,
    height: 100,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  popUpInfoContainer: {
    height: 100,
    width: 240,
    backgroundColor: "lightcyan",
    position: "absolute",
    borderRadius: 30,
    alignSelf: "center",
    top: 190,
  },
  nameHeading: {
    fontFamily: "Futura-Medium",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    paddingTop: 8,
  },
  emailHeading: {
    fontFamily: "Futura-Medium",
    fontSize: 15,
    textAlign: "center",
    color: "grey",
  },
  ageSex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 10,
  },
  age: {
    fontFamily: "Futura-MediumItalic",
    letterSpacing: 1.5,
    color: "mediumturquoise",
  },
  sex: {
    fontFamily: "Futura-MediumItalic",
    letterSpacing: 1.5,
    color: "mediumturquoise",
  },
  itemName: {
    fontSize: 16,
    color: "mediumturquoise",
    alignSelf: "center",
    fontFamily: "Futura-Medium",
    left: 6,
    paddingBottom: 3,
    fontWeight: "700",
  },
  
})
