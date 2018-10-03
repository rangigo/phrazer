import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Expo from "expo";

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
    backgroundColor: "#F2F2F2"
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: "#33AAAA"
  }
});
