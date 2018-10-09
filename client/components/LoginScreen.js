import React from "react";

import Text from "./MyText";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Colors from "./../config/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text h4 style={styles.descBeforeLogo}>
          welcome to
        </Text>
        <Text h1 style={styles.logoTxt}>
          Phrazer!
        </Text>
      </View>
      <Button title="LOG IN" buttonStyle={styles.loginBtn} />
      <Text
        style={styles.skipBtn}
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
    backgroundColor: Colors.mainColor.light,
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
    backgroundColor: Colors.mainColor.dark,
    borderRadius: 3
  },
  skipBtn: {
    textDecorationLine: "underline",
    color: Colors.text.white
  },
  descBeforeLogo: {
    letterSpacing: 3,
    color: Colors.text.dark
  },
  logoTxt: {
    color: "white",
    fontStyle: "italic",
    fontSize: 52
  }
});

export default LoginScreen;
