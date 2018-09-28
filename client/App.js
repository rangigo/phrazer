import React from "react";
import Expo from "expo";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from "react-navigation";
import createDismissableStackNavigator from "./helpers/createDissmissableStackNavigator";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

import LoginScreen from "./components/LoginScreen";
import NewPhrazeScreen from "./containers/NewPhrazeScreen";
import DrawerContainer from "./components/DrawerContainer";
import HomeScreen from "./containers/HomeScreen";

Expo.Font.loadAsync({
  Roboto: require("./fonts/Roboto/Roboto-Regular.ttf")
});

const NewPhrazeStack = createDismissableStackNavigator(
  {
    NewPhrazeScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4AA9A8"
      },
      headerTitleStyle: {
        fontFamily: "Roboto",
        color: "white"
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  HomeScreen,
}, {
  contentComponent: DrawerContainer
})

const RootStack = createStackNavigator(
  {
    BottomTabNavigator,
    NewPhrazeStack,
    DrawerNavigator,
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const Switch = createSwitchNavigator({
  LoginScreen,
  RootStack
});

export default () => (
  <Provider store={createStore(reducers)}>
    <Switch />
  </Provider>
);
