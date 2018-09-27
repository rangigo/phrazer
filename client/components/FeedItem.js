import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import Text from "./MyText";

const FeedItem = ({ item, onPressCheckBox }) => {
  return (
    <View>
      <View style={styles.phrazeContainer}>
        <View style={styles.col1}>
          <Icon name="face" />
        </View>
        <View style={styles.col2}>
          <Text>{item.phraze}</Text>
          <Text style={{ color: "#B2B2B2" }}>{item.translated}</Text>
        </View>
        <View style={styles.col3}>
          <Icon name="volume-mute" color="#ccc" size={30} />
        </View>
        <View style={styles.col4}>
          <Icon name="more-horiz" />
        </View>
      </View>
      <View>
        <Button
          title="Add +"
          buttonStyle={{
            backgroundColor: "#FF5E00",
            width: 0.2,
            height: 0.2,
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
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
    flex: 0.6,
    paddingHorizontal: 10
  },
  col3: {
    flex: 0.1,
    paddingHorizontal: 10
  },
  col4: {
    flex: 0.1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
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
