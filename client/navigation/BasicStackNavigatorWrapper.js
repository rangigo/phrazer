import React from "react";

import { createStackNavigator } from "react-navigation";

import HomeScreen from "../containers/HomeScreen";

const BasicStackWrapper = (
  leftHeaderButton,
  rightHeaderButton,
  title,
  routes
) => {
  return createStackNavigator(routes, {
    navigationOptions: ({ navigation }) => ({
      title: title,
      headerLeft: leftHeaderButton,
      headerRight: rightHeaderButton,
      headerStyle: {
        backgroundColor: "#4AA9A8"
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerTitleStyle: {
        fontFamily: "Roboto",
        color: "white"
      }
    })
  });
};

export default BasicStackWrapper;
