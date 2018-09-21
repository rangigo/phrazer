import React, { Component } from 'react'

import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Text from '../components/MyText'

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: <Icon name='home' color='#4AA9A8' />,
  }
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Hello phraze screen</Text>
        <Text onPress={() => navigation.navigate('LoginScreen')}>go back</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen
