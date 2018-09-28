import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import createDismissableStackNavigator from './helpers/createDissmissableStackNavigator';
import { Icon } from 'react-native-elements';

import reducers from './reducers';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './containers/HomeScreen';
import Expo from 'expo';
import DrawerContainer from './components/DrawerContainer';
import ChatScreen from './containers/ChatScreen';
import FeedScreen from './containers/FeedScreen';
import NewPhrazeScreen from './containers/NewPhrazeScreen';

Expo.Font.loadAsync({
  Roboto: require('./fonts/Roboto/Roboto-Regular.ttf')
});

const CategoriesDrawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    Conversation: ChatScreen,
    Feed: FeedScreen
  },
  {
    contentOptions: {
      labelStyle: {
        fontFamily: 'Roboto'
      },
      activeTintColor: '#4AA9A8',
      inactiveTintColor: '#727272'
    },
    contentComponent: DrawerContainer
  }
);

const MainStack = createStackNavigator(
  {
    CategoriesDrawer
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Finnish',
      headerLeft: (
        <Icon
          name="menu"
          color="white"
          containerStyle={{ marginLeft: 20 }}
          onPress={() => navigation.toggleDrawer()}
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
        backgroundColor: '#4AA9A8'
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        color: 'white'
      }
    })
  }
);

const NewPhrazeStack = createDismissableStackNavigator(
  {
    NewPhrazeScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4AA9A8'
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        color: 'white'
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    MainStack,
    NewPhrazeStack
  },
  {
    mode: 'modal',
    headerMode: 'none'
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
