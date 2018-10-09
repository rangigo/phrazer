import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Expo from "expo";
import Colors from "../config/colors";

export default (PhSelectionListHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.backgroundColor
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: Colors.mainColor.light
  }
});
