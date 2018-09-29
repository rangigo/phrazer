import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/MyText";

class ChatScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Conversation",
    drawerIcon: ({ tintColor }) => <Icon name="chat" color={tintColor} />
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ messages: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const chatRender = ({ item }) => {
      const chat = item;

      return (
        <View style={styles.conversation}>
          <View style={styles.col1}>
            <Icon name="person" color="grey" />
          </View>
          <View style={styles.col2}>
            <Text>{chat.name}</Text>
            <Text>{chat.email}</Text>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.messages}
          renderItem={chatRender}
          keyExtractor={(item, index) => JSON.stringify(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conversation: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  container: {
    backgroundColor: "white"
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10
  },
  col2: {
    flex: 0.8,
    paddingHorizontal: 10
  }
});

export default ChatScreen;
