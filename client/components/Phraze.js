import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import Text from './MyText';

const Phraze = ({ item, onPressCheckBox }) => {
  return (
    <View style={styles.phrazeContainer}>
      <View style={styles.col1}>
        <CheckBox
          containerStyle={styles.checkBoxContainer}
          iconType="material"
          checkedIcon="people"
          uncheckedIcon="people"
          checkedColor="#33AAAA"
          checked={item.public}
          onPress={() => onPressCheckBox(item.key, 'public')}
        />
        <CheckBox
          containerStyle={styles.checkBoxContainer}
          iconType="material"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          checkedColor="#33AAAA"
          checked={item.phrazed}
          onPress={() => onPressCheckBox(item.key, 'phrazed')}
        />
      </View>
      <View style={styles.col2}>
        <Text>{item.phraze}</Text>
        <Text style={{ color: '#B2B2B2' }}>{item.translated}</Text>
      </View>
      <View style={styles.col3}>
        <Icon name="volume-mute" color="#ccc" size={30} />
      </View>
      <View style={styles.col4}>
        <Icon name="more-horiz" />
        <CheckBox
          containerStyle={styles.checkBoxContainer}
          iconType="material"
          checkedIcon="star"
          uncheckedIcon="star-border"
          checkedColor="#F6BF26"
          checked={item.favorite}
          onPress={() => onPressCheckBox(item.key, 'favorite')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phrazeContainer: {
    paddingVertical: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  col2: {
    flex: 0.6,
    paddingHorizontal: 10
  },
  col3: {
    flex: 0.1,
    paddingHorizontal: 10
  },
  col4: {
    flex: 0.1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkBoxContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: 24
  }
});

export default Phraze;
