import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './MyText';
import { Icon } from 'react-native-elements';

const NewPhrazeOption = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} containerStyle={styles.col1} />
      <View style={styles.col2}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10
  },
  col2: {
    flex: 0.8,
    paddingHorizontal: 10
  }
});

export default NewPhrazeOption;
