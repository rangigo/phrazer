import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import Colors from "./../config/colors";

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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center"
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
