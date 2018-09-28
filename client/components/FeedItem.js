import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Text from "./MyText";

class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };
  }

  onMainAction = () => {
    const { item, onImportButtonPressed } = this.props;

    if (this.state.added) return;

    onImportButtonPressed({
      phraze: item.native,
      translated: item.foreign,
      public: false,
      phrazed: false,
      favorite: false
    });

    this.setState({
      added: true
    });
  };

  render() {
    const { item } = this.props;
    const { added } = this.state;

    const mainActionIcon = added ? <Icon name="done" /> : <Icon name="add" />;

    return (
      <View style={styles.phrazeContainer}>
        <View style={styles.col1} onTouchEnd={this.onMainAction}>
          {mainActionIcon}
        </View>
        <View style={styles.col2}>
          <Text>{item.native}</Text>
          <Text style={{ color: "#B2B2B2" }}>{item.foreign}</Text>
        </View>
        <View style={styles.col3}>
          <Icon name="more-horiz" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phrazeContainer: {
    paddingVertical: 0,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center"
  },
  col1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    height: 40,
    width: 40
  },
  col2: {
    flex: 1,
    paddingHorizontal: 0
  },
  col3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    paddingHorizontal: 10
  }
});

export default FeedItem;
