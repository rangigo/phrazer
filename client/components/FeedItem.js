import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import Text from "./MyText";

const FeedItem = ({ item }) => {
  return (
    <View style={styles.phrazeContainer}>
      <View style={styles.col1}>
        <Icon name="account-circle" />
      </View>
      <View style={styles.col2}>
        <Text>{item.native}</Text>
        <Text style={{ color: "#B2B2B2" }}>{item.foreign}</Text>
      </View>
      <View style={styles.col3}>
        <View style={styles.col3row1}>
          <Icon name="volume-mute" color="#ccc" size={30} />
          <Icon name="more-horiz" />
        </View>
        <View style={styles.col3row2}>
          <Button
            title="Add +"
            buttonStyle={{
              backgroundColor: "#FF5E00",
              borderWidth: 0,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 2
            }}
            containerStyle={{ margin: 0 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phrazeContainer: {
    paddingVertical: 23,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10,
    alignItems: "center"
  },
  col2: {
    flex: 0.5,
    paddingHorizontal: 10
  },
  col3: {
    flexDirection: "column",
    flex: 0.3,
    paddingHorizontal: 10
  },
  col3row1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20
  },
  col3row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  checkBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: 24
  }
});

export default FeedItem;
