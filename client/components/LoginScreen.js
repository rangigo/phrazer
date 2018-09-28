import React from "react";

import Text from "./MyText";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text h4 style={{ letterSpacing: 3, color: "#616161" }}>
          welcome to
        </Text>
        <Text h1 style={styles.logoTxt}>
          Phrazer!
        </Text>
      </View>
      <Button title="LOG IN" buttonStyle={styles.loginBtn} />
      <Text
        style={{ textDecorationLine: "underline", color: "white" }}
        onPress={() => navigation.navigate("HomeStack")}
      >
        Skip this step
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4AA9A8",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    marginBottom: 35,
    alignItems: "center"
  },
  loginBtn: {
    paddingHorizontal: 25,
    paddingVertical: 14,
    marginBottom: 14,
    backgroundColor: "#3B7A77",
    borderRadius: 3
  },
  logoTxt: {
    color: "white",
    fontStyle: "italic",
    fontSize: 52
  }
});

export default LoginScreen;
