import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";

import * as actions from "../actions";
import Phraze from "../components/Phraze";
import PhrazeTip from "../components/PhrazeTip";
import AddButtonWithModal from "../components/AddButtonWithModal";

class HomeScreen extends Component {
  state = {
    refreshing: false,
    page: 1,
    showTip: true
  };

  renderItem = ({ item }) => {
    return <Phraze item={item} onPressCheckBox={this.props.onCheckBoxPhraze} />;
  };

  render() {
    const phrazeTip = this.state.showTip ? (
      <PhrazeTip onPressCancel={() => this.setState({ showTip: false })} />
    ) : null;

    const { navigation, phrazes } = this.props;

    return (
      <View style={styles.container}>
        {phrazeTip}
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={this.fetchData}
          data={phrazes}
          renderItem={this.renderItem}
        />
        <AddButtonWithModal navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  phrazes: state.phraze.phrazes
});

const mapDispatchToProps = dispatch => ({
  onPhrazeAdded: phraze => dispatch(actions.addPhraze(phraze)),
  onCheckBoxPhraze: (key, opt) => dispatch(actions.checkBoxPhraze(key, opt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
