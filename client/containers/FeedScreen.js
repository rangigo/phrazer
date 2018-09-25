import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../components/MyText'
import { Icon } from 'react-native-elements'

class FeedScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Feed',
    drawerIcon: ({ tintColor }) => <Icon name="public" color={tintColor} />,
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Feed screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default FeedScreen
