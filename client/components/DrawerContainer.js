import React from "react";
import Text from "./MyText";
import { StyleSheet, View, ScrollView } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import Colors from "../config/colors";

const DrawerContainer = props => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={{ color: Colors.text.white, fontWeight: "bold" }}>
            Categories
          </Text>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  headerContainer: {
    backgroundColor: "#616161",
    padding: 15
  }
});

export default DrawerContainer;
