import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/MyText";
import { newPhrazes } from "./data";
import FeedItem from "../components/FeedItem";
import AddButtonWithModal from "../components/AddButtonWithModal";

class FeedScreen extends Component {
  state = {
    refreshing: false,
    phrazes: [
      {
        phraze: "Ban may tuoi va dang lam gi",
        translated: "What's your age and your job?",
        key: "6",
        public: true,
        phrazed: false,
        favorite: true
      },
      {
        phraze: "Ban thich MERN Stack hay khong?",
        translated: "Do you have any experiences in MERN Stack?",
        key: "7",
        public: false,
        phrazed: true,
        favorite: true
      },
      {
        phraze: "Toi dang xem anime Attack on Titan",
        translated: "I am watching Attack on Titan anime.",
        key: "8",
        public: false,
        phrazed: true,
        favorite: false
      }
    ],
    page: 1,
    showTip: true
  };

  renderItem = ({ item }) => {
    return <FeedItem item={item} onPressCheckBox={this.onPressCheckBox} />;
  };

  NewPhrazeOptions = [
    { title: "Add new phraze", icon: "translate" },
    { title: "Add new category", icon: "list" },
    { title: "Add new library", icon: "local-library" }
  ];

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.fetchData}
          data={this.state.phrazes}
          renderItem={this.renderItem}
          ListFooterComponent={() => <View style={styles.listFooter} />}
        />
        <AddButtonWithModal navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listFooter: {
    height: 100
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center"
  },
  phrazeTip: {
    paddingVertical: 10,
    backgroundColor: "#D7D7D7",
    flexDirection: "row",
    alignItems: "center"
  },
  addButton: {
    position: "absolute",
    bottom: 15,
    right: 15
  }
});

export default FeedScreen;
