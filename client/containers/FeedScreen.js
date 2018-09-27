import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/MyText";
import { newPhrazes } from "./data";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import FeedItem from "../components/FeedItem";
import NewPhrazeOption from "../components/NewPhrazeOption";

class FeedScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Feed",
    drawerIcon: ({ tintColor }) => <Icon name="spa" color={tintColor} />
  };

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

  componentDidMount() {
    // this.fetchData();
  }

  fetchData = async () => {
    this.setState({ refreshing: true });

    setTimeout(() => {
      if (this.state.page === 1) {
        this.setState({
          phrazes: this.state.phrazes.concat(newPhrazes),
          page: 2
        });
      }
      this.setState({
        refreshing: false
      });
    }, 1000);
  };

  onPressCheckBox = (key, opt) => {
    const newPhrazes = this.state.phrazes.map(el => {
      if (el.key === key) {
        switch (opt) {
          case "public":
            el.public = !el.public;
            return el;
          case "phrazed":
            el.phrazed = !el.phrazed;
            return el;
          case "favorite":
            el.favorite = !el.favorite;
            return el;
        }
      }
      return el;
    });

    this.setState({ phrazes: newPhrazes });
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
        />
        <Icon
          name="add"
          containerStyle={styles.addButton}
          onPress={() => this.ActionSheet.show()}
          color="#33AAAA"
          reverse
          raised
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={
            <Text style={{ color: "#727272", fontSize: 18 }}>
              Choose option
            </Text>
          }
          options={this.NewPhrazeOptions.map(el => (
            <NewPhrazeOption title={el.title} icon={el.icon} />
          )).concat(<Text>Cancel</Text>)}
          cancelButtonIndex={3}
          onPress={index => {
            switch (index) {
              case 0:
                navigation.navigate("NewPhrazeScreen");
                break;
              case 1:
                navigation.navigate("NewPhrazeScreen");
                break;
              case 2:
                navigation.navigate("NewPhrazeScreen");
                break;
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
