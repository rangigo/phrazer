import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Text from '../components/MyText'

class ChatScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Conversation',
    drawerIcon: ({ tintColor }) => <Icon name="chat" color={tintColor} />,
  };

  state = {
    refreshing: false,
    chats: [
      {
        name: 'Martynas Gudaitis',
        message: "Are you planing to go to the party tomorrow?",
        key: '90',
      }
    ]
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <View style={styles.col1}>
            <Icon name="person" color="grey" />
          </View>
          <View style={styles.col2}>
            <Text>User ghkjghkjhk</Text>
            <Text>User message</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    paddingVertical: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  col2: {
    flex: 0.8,
    paddingHorizontal: 10
  }
})

export default ChatScreen