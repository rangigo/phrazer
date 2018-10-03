import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/MyText";
import Colors from "./../config/colors";

const messagesInit = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org"
  }
];

class ChatScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Conversation",
    drawerIcon: ({ tintColor }) => <Icon name="chat" color={tintColor} />
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: messagesInit
    };
  }

  render() {
    const chatRender = ({ item }) => {
      const chat = item;

      return (
        <View style={styles.conversation}>
          <View style={styles.col1}>
            <Icon name="person" style={styles.photoPlaceholder} />
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
  photoPlaceholder: {
    color: Colors.icon.grey.dark
  },
  conversation: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider.light
  },
  container: {
    height: "100%",
    backgroundColor: Colors.backgroundColor
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
