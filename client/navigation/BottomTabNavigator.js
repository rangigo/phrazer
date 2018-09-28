import React from "react";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreenStack from "./HomeScreenStack";
import ChatScreen from "./../containers/ChatScreen";
import FeedScreen from "./../containers/FeedScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeScreenStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      }
    },
    FeedStack: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarLabel: "Feed",
        tabBarIcon: ({ tintColor }) => <Icon name="public" color={tintColor} />
      }
    },
    ChatStack: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="question-answer" color={tintColor} />
        )
      }
    },
    ProfileStack: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-box" color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "HomeStack",
    activeColor: "#DEF2F1",
    inactiveColor: "#2B7A78",
    barStyle: { backgroundColor: "#4AA9A8" }
  }
);

export default TabNavigator;
