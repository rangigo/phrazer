import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "./../config/colors";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sorry.</Text>
        <Text style={styles.description}>The profile is being build.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 40,
    color: Colors.mainColor.dark
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: Colors.text.dark
  }
});

export default ProfileScreen;
