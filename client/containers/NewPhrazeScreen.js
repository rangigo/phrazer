import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/MyText';
import { Icon, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

const data = [
  { value: 'Finnish' },
  { value: 'German' },
  { value: 'Lithuanian' },
  { value: 'Czech' }
];

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

  state = {
    category: '',
    phraze: '',
    translation: '',
    isPublic: false
  };

  render() {
    const { category, phraze, translation, isPublic } = this.state;

    console.log('Category', category);
    console.log('Phraze', phraze);

    return (
      <View style={styles.container}>
        <Dropdown
          label="Categories"
          data={data}
          value={category}
          onChangeText={category => this.setState({ category })}
        />
        <TextField
          label="Phraze"
          value={phraze}
          onChangeText={phraze => this.setState({ phraze })}
          tintColor="#33AAAA"
          multiline
          fontSize={32}
        />

        <TextField
          label="Translation"
          value={translation}
          onChangeText={translation => this.setState({ translation })}
          tintColor="#33AAAA"
          multiline
        />

        <View style={styles.recordContainer}>
          <Text style={{ color: '#586D79', fontSize: 18 }}>Record</Text>
          <Icon
            name="mic"
            color="#33AAAA"
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
          checkedColor="#33AAAA"
          textStyle={{ color: '#777777', fontWeight: '300' }}
          title="Public"
          checked={isPublic}
          onPress={() => this.setState({ isPublic: !isPublic })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  recordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  checkBoxContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 0
  }
});

export default NewPhrazeScreen;
