import React from "react";
import { createStackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Colors from "../config/colors";

const BasicStackWrapper = (leftHeaderName, rightHeaderName, title, routes) => {
  return createStackNavigator(routes, {
    navigationOptions: {
      title: title,
      headerLeft: <Icon name={leftHeaderName} color={Colors.icon.white} />,
      headerRight: <Icon name={rightHeaderName} color={Colors.icon.white} />,
      headerStyle: {
        backgroundColor: Colors.mainColor.light
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerTitleStyle: {
        fontFamily: "Roboto",
        color: Colors.text.white
      }
    }
  });
};

export default BasicStackWrapper;
