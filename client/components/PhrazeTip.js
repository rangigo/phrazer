import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Text from "./MyText";
import Colors from "../config/colors";

const PhrazeTip = ({ onPressCancel }) => {
  return (
    <View style={styles.phrazeTip}>
      <View style={{ flex: 0.2, paddingHorizontal: 10 }}>
        <Icon name="check-box" color={Colors.icon.white} />
      </View>
      <View
        style={{
          flex: 0.7,
          paddingHorizontal: 10
        }}
      >
        <Text>Tap a select box if you have learned the phraze.</Text>
      </View>
      <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
        <Icon name="cancel" color="#848484" onPress={onPressCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phrazeTip: {
    paddingVertical: 10,
    backgroundColor: Colors.tip.backgroundColor,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default PhrazeTip;
