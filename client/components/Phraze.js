import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButtonIcon
} from "./../material-cards-custom";
import Colors from "../config/colors";
import { Icon } from "react-native-elements";

class Phraze extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onPressCheckBox, onPressPhraze } = this.props;

    const inactiveButtonColor = Colors.button.inactive;
    const activeButtonColor = Colors.mainColor.light;
    const activeStarColor = Colors.icon.yellow;

    const currentButtonsState = {
      public: {
        color: item.public ? activeButtonColor : inactiveButtonColor,
        icon: "people"
      },
      learned: {
        color: item.phrazed ? activeButtonColor : inactiveButtonColor,
        icon: item.phrazed ? "check-box" : "check-box-outline-blank"
      },
      favorite: {
        color: item.favorite ? activeStarColor : inactiveButtonColor,
        icon: item.favorite ? "star" : "star-border"
      }
    };

    const foreign = item.translated ? (
      <CardContent text={item.translated} />
    ) : (
      <View />
    );

    const soundBtn = item.sound ? (
      <CardButtonIcon
        onPress={() => {}}
        icon="volume-mute"
        color={inactiveButtonColor}
      />
    ) : (
      <CardButtonIcon
        onPress={() => {}}
        icon="volume-off"
        color={inactiveButtonColor}
      />
    );

    return (
      <Card>
        <CardTitle title={item.phraze} subtitleAbove={true} />
        {foreign}
        <CardAction separator={false} inColumn={false} style={styles.actions}>
          <CardButtonIcon
            onPress={() =>
              item.public
                ? onPressCheckBox(item.key, "public")
                : onPressCheckBox(item.key, "public", item)
            }
            icon={currentButtonsState.public.icon}
            color={currentButtonsState.public.color}
          />
          <CardButtonIcon
            onPress={() => onPressCheckBox(item.key, "phrazed")}
            icon={currentButtonsState.learned.icon}
            color={currentButtonsState.learned.color}
          />
          {soundBtn}
          <CardButtonIcon
            onPress={() => onPressCheckBox(item.key, "favorite")}
            icon={currentButtonsState.favorite.icon}
            color={currentButtonsState.favorite.color}
          />
          <CardButtonIcon
            onPress={() => onPressPhraze(item)}
            icon="create"
            color={inactiveButtonColor}
          />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10
  }
});

export default Phraze;
