import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";

import * as actions from "../actions";
import FeedItem from "../components/FeedItem";

class FeedScreen extends Component {
  state = {
    refreshing: false,
    page: 1
  };

  renderItem = ({ item }) => {
    return (
      <FeedItem
        item={item}
        onImportButtonPressed={this.props.onImportButtonPressed}
      />
    );
  };

  render() {
    const { navigation, feed } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={this.fetchData}
          data={feed}
          renderItem={this.renderItem}
          ListFooterComponent={() => <View style={styles.listFooter} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listFooter: {
    height: 100,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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

const mapStateToProps = ({ feed }) => ({
  feed
});

const mapDispatchToProps = dispatch => ({
  onImportButtonPressed: phraze => dispatch(actions.addPhraze(phraze))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedScreen);
