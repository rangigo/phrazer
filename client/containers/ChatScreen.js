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
    comments: []
  };

  componentWillMount(){
    fetch(https://jsonplaceholder.typicode.com/comments)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        comments: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    console.log(this.state.comments);
    return (
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <View style={styles.col1}>
            <Icon name="person" color="grey" />
          </View>
          <View style={styles.col2}>
            <Text>{this.state.chats.name}</Text>
            <Text>{this.state.chats.message}</Text>
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