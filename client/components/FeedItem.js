import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Text from "./MyText";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton
} from "./../material-cards-custom";
import Colors from "../config/colors";

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
      category: "New",
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

    const addButtonStyle =
      added || !item.foreign ? styles.addButtonDisabled : styles.addButton;
    const addButtonTitle = added ? "Added" : "Add";

    const translateButtonColor = item.foreign
      ? Colors.button.inactive
      : Colors.mainColor.light;
    const translateButtonTitle = item.foreign ? "Translated" : "Translate";

    const foreign = item.foreign ? (
      <CardContent text={item.foreign} />
    ) : (
      <View />
    );

    return (
      <Card>
        <CardTitle
          subtitle={item.author.fullName}
          title={item.native}
          subtitleAbove={true}
        />
        {foreign}
        <CardAction separator={false} inColumn={false} style={styles.actions}>
          <CardButton
            onPress={() => {}}
            title={translateButtonTitle}
            color={translateButtonColor}
          />
          <CardButton
            onPress={this.onMainAction}
            title={addButtonTitle}
            color={Colors.text.white}
            style={addButtonStyle}
          />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Colors.button.action
  },
  addButtonDisabled: {
    backgroundColor: Colors.button.inactive
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10
  },
  phrazeContainer: {
    paddingVertical: 0,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider.light,
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
