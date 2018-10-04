import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {CheckBox, Icon} from "react-native-elements";
import Text from "./MyText";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardButtonIcon
} from "./../material-cards-custom";

class Phraze extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, onPressCheckBox, onPressPhraze} = this.props;

    const inactiveButtonColor = "#CCC";
    const activeButtonColor = "#33AAAA";
    const activeStarColor = "#F6BF26";

    const currentButtonsState = {
      public: {
        color: item.public
          ? activeButtonColor
          : inactiveButtonColor,
        icon: "people"
      },
      learned: {
        color: item.phrazed
          ? activeButtonColor
          : inactiveButtonColor,
        icon: item.phrazed
          ? "check-box"
          : "check-box-outline-blank"
      },
      favorite: {
        color: item.favorite
          ? activeStarColor
          : inactiveButtonColor,
        icon: item.favorite
          ? "star"
          : "star-border"
      }
    };

    const foreign = item.translated
      ? (<CardContent text={item.translated}/>)
      : (<View/>);

    return (<Card>
      <CardTitle title={item.phraze} subtitleAbove={true}/> {foreign}
      <CardAction separator={false} inColumn={false} style={styles.actions}>
        <CardButtonIcon onPress={() => onPressCheckBox(item.key, "public")} icon={currentButtonsState.public.icon} color={currentButtonsState.public.color}/>
        <CardButtonIcon onPress={() => onPressCheckBox(item.key, "phrazed")} icon={currentButtonsState.learned.icon} color={currentButtonsState.learned.color}/>
        <CardButtonIcon onPress={() => {}} icon="volume-mute" color={inactiveButtonColor}/>
        <CardButtonIcon onPress={() => onPressCheckBox(item.key, "favorite")} icon={currentButtonsState.favorite.icon} color={currentButtonsState.favorite.color}/>
        <CardButtonIcon onPress={() => onPressPhraze(item)} icon="create" color={inactiveButtonColor}/>
      </CardAction>
    </Card>);
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
