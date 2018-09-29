import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Text from "./MyText";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";

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

    const mainActionIcon = added ? "Added" : "Add";

    if (item.foreign) {
      return (
        <Card>
          <CardTitle
            subtitle={item.author.fullName}
            title={item.native}
            subtitleAbove={true}
          />
          <CardContent text={item.foreign} />
          <CardAction separator={false} inColumn={false} style={styles.actions}>
            <CardButton onPress={() => {}} title="Translate" color="#2B7A78" />
            <CardButton
              onPress={this.onMainAction}
              title={mainActionIcon}
              color="#2B7A78"
            />
          </CardAction>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardTitle
            subtitle={item.author.fullName}
            title={item.native}
            subtitleAbove={true}
          />
          <CardAction separator={false} inColumn={false} style={styles.actions}>
            <CardButton onPress={() => {}} title="Translate" color="#2B7A78" />
            <CardButton
              onPress={this.onMainAction}
              title={mainActionIcon}
              color="#2B7A78"
            />
          </CardAction>
        </Card>
      );
    }
  }
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10
  },
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
