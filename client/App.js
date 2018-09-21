import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'
import { Icon } from 'react-native-elements'

import reducers from './reducers'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './containers/HomeScreen'

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    Shop: HomeScreen,
    Conversation: HomeScreen,
  }, {
    contentOptions: {
      labelStyle: {
        color: '#4AA9A8',
        fontFamily: 'Roboto'
      }
    }
  }
)

const Nav = createStackNavigator(
  {
    Drawer
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
)

const Switch = createSwitchNavigator({
  LoginScreen,
  Nav
})

export default () => (
  <Provider store={createStore(reducers)}>
    <Switch />
  </Provider>
)
