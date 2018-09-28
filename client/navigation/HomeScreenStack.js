import React from "react";

import { createStackNavigator } from "react-navigation";

import { Icon } from "react-native-elements";

import HomeScreen from "./../containers/HomeScreen";

const HomeScreenStack = createStackNavigator(
  {
    HomeScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Finnish",
      headerLeft: (
        <Icon
          name="menu"
          color="white"
          containerStyle={{ marginLeft: 20 }}
          onPress={() => {}}
          underlayColor="#ffffff00"
        />
      ),
      headerRight: (
        <Icon
          name="search"
          color="white"
          containerStyle={{ marginRight: 20 }}
        />
      ),
      headerStyle: {
        backgroundColor: "#4AA9A8"
      },
      headerTitleStyle: {
        fontFamily: "Roboto",
        color: "white"
      }
    })
  }
);

export default HomeScreenStack;
