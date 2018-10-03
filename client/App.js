import React from "react";
import Expo from "expo";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import createDismissableStackNavigator from "./navigation/helpers/createDissmissableStackNavigator";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

import LoginScreen from "./components/LoginScreen";
import NewPhrazeScreen from "./containers/NewPhrazeScreen";
import PhrazeDetailScreen from "./containers/PhrazeDetailScreen";

Expo.Font.loadAsync({
  Roboto: require("./fonts/Roboto/Roboto-Regular.ttf")
});

const NewPhrazeStack = createDismissableStackNavigator(
  {
    NewPhrazeScreen,
    PhrazeDetailScreen
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

const RootStack = createStackNavigator(
  {
    BottomTabNavigator,
    NewPhrazeStack,
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
