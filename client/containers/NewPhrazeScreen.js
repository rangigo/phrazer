import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import Text from "../components/MyText";
import { Icon, CheckBox, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import { TextField } from "react-native-material-textfield";

import * as actions from "../actions";
import Colors from "../config/colors";

const data = [
  { value: "Finnish" },
  { value: "German" },
  { value: "Lithuanian" },
  { value: "Czech" }
];

class NewPhrazeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name="close"
        color={Colors.text.white}
        onPress={() => navigation.dismiss()}
        underlayColor="transparent"
        containerStyle={{ marginLeft: 20 }}
      />
    ),
    headerTitle: "New Phraze",
    headerRight: (
      <Button
        buttonStyle={styles.saveButton}
        title="SAVE"
        onPress={() => navigation.state.params.handleSave()}
      />
    )
  });

  state = {
    category: "",
    phraze: "",
    translated: "",
    isPublic: false
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.onPressSave });
  }

  onPressSave = () => {
    const phraze = {
      category: this.state.category,
      phraze: this.state.phraze,
      translated: this.state.translated,
      public: this.state.isPublic,
      phrazed: false,
      favorite: false
    };
    this.props.onSavePhraze(phraze);
    this.props.navigation.dismiss();
  };

  render() {
    const { category, phraze, translated, isPublic } = this.state;

    return (
      <ScrollView style={styles.container}>
        <TextField
          label="Category"
          value={category}
          tintColor={Colors.mainColor.light}
          onChangeText={category => this.setState({ category })}
        />
        <TextField
          label="Phraze"
          value={phraze}
          onChangeText={phraze => this.setState({ phraze })}
          tintColor={Colors.mainColor.light}
          multiline
          fontSize={32}
        />

        <TextField
          label="Translation"
          value={translated}
          onChangeText={translated => this.setState({ translated })}
          tintColor={Colors.mainColor.light}
          multiline
        />

        <View style={styles.recordContainer}>
          <Text style={{ color: Colors.text.dark, fontSize: 18 }}>Record</Text>
          <Icon
            name="mic"
            color={Colors.mainColor.light}
            reverse
            raised
            containerStyle={{ marginVertical: 15 }}
            size={26}
          />
        </View>
        <CheckBox
          containerStyle={styles.checkBoxContainer}
          iconType="material"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          checkedColor={Colors.mainColor.light}
          textStyle={{ color: Colors.icon.grey.dark, fontWeight: "300" }}
          title="Public"
          checked={isPublic}
          onPress={() => this.setState({ isPublic: !isPublic })}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 15
  },
  recordContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15
  },
  checkBoxContainer: {
    backgroundColor: Colors.backgroundColor,
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 0
  },
  saveButton: {
    backgroundColor: "transparent",
    padding: 3
  }
});

const mapDispatchToProps = dispatch => ({
  onSavePhraze: phraze => dispatch(actions.addPhraze(phraze))
});

export default connect(
  null,
  mapDispatchToProps
)(NewPhrazeScreen);
