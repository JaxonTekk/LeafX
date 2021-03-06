import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function Item({ onPress, uri, date, status }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image style={styles.image} source={{ uri: uri }} />
      <View style={styles.text}>
        <Text style={styles.largeText}>{date}</Text>
        <Text style={styles.smallText}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 25,
    marginVertical: 0,
    padding: 15,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },

  text: {
    flexDirection: "column",
  },
  largeText: {
    marginLeft: 10,
    fontFamily: "Avenir-Heavy",
    fontSize: 19,
    color: "#7c9982",
  },
  smallText: {
    marginLeft: 10,
    fontFamily: "Avenir-Light",
    fontSize: 15,
    color: "#8D8D8D",
  },
});
