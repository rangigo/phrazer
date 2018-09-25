import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Text from '../components/MyText'

class ChatScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Conversation',
    drawerIcon: ({ tintColor }) => <Icon name="chat" color={tintColor} />,
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Chat screen</Text>
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

export default ChatScreen
