import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { createStackNavigator } from "@react-navigation/stack";

import Results from "./results.js";

import Context from "../utils/context.js";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const { image, setImage } = useContext(Context);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      navigation.navigate("Results");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: Constants.statusBarHeight,
  },
});

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}