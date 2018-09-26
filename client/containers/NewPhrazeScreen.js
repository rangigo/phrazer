import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/MyText';
import { Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class NewPhrazeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name="close"
        color="white"
        onPress={() => navigation.dismiss()}
        underlayColor="transparent"
        containerStyle={{ marginLeft: 20 }}
      />
    ),
    headerTitle: 'New Phraze',
    headerRight: <Text style={{ marginRight: 20, color: 'white' }}>SAVE</Text>
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Modal screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NewPhrazeScreen;
