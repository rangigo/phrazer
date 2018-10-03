import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#F2F2F2",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 40,
    color: "#2B7A78"
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#33AAAA"
  }
});

export default ProfileScreen;
