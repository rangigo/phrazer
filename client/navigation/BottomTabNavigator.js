import React from "react";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import StackWrapper from "./BasicStackNavigatorWrapper";

import { Icon } from "react-native-elements";

import HomeScreen from "./../containers/HomeScreen";
import ChatScreen from "./../containers/ChatScreen";
import FeedScreen from "./../containers/FeedScreen";
import ProfileScreen from "./../containers/ProfileScreen";
import Colors from "../config/colors";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeStack: {
      screen: StackWrapper("menu", "search", "Home", { HomeScreen }),
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      }
    },
    FeedStack: {
      screen: StackWrapper("menu", "search", "Feed", { FeedScreen }),
      navigationOptions: {
        tabBarLabel: "Feed",
        tabBarIcon: ({ tintColor }) => <Icon name="public" color={tintColor} />
      }
    },
    ChatStack: {
      screen: StackWrapper("menu", "search", "Chat", { ChatScreen }),
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="question-answer" color={tintColor} />
        )
      }
    },
    ProfileStack: {
      screen: StackWrapper("menu", null, "Profile", { ProfileScreen }),
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-box" color={tintColor} />
        )
      }
    }
  },
  {
    shifting: false,
    initialRouteName: "HomeStack",
    activeColor: Colors.icon.green.light,
    inactiveColor: Colors.mainColor.dark,
    barStyle: { backgroundColor: Colors.mainColor.light }
  }
);

export default TabNavigator;
