import React from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import { CheckBox, Divider, Button } from 'react-native-elements';
import Text from './MyText';

const categories = [
  { category: 'Meeting' },
  { category: 'Greeting' },
  { category: 'Hangout' }
];

const FilterModal = ({
  showModal,
  checkedCategory,
  onPressCategory,
  onGetPhrazesByCategory,
  onCancelModal
}) => {
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={onCancelModal}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Categories</Text>
        <Divider style={{ backgroundColor: '#ccc' }} />
        {categories.map(el => (
          <CheckBox
            title={el.category}
            key={el.category}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#33AAAA"
            checked={el.category === checkedCategory}
            containerStyle={styles.radioButtonContainer}
            onPress={() => onPressCategory(el.category)}
            textStyle={{
              color: el.category === checkedCategory ? '#33AAAA' : '#bfbfbf'
            }}
          />
        ))}
        <Divider style={{ backgroundColor: '#ccc' }} />
        <View style={styles.modalFooter}>
          <Button
            title="CANCEL"
            buttonStyle={styles.button}
            color="#33AAAA"
            onPress={onCancelModal}
          />
          <Button
            title="ACCEPT"
            buttonStyle={styles.button}
            color="#33AAAA"
            onPress={onGetPhrazesByCategory}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    backgroundColor: 'white',
    borderWidth: 0
  },
  modalContainer: {
    marginHorizontal: 50
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalTitle: {
    color: '#727272',
    padding: 15,
    fontSize: 20
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 5
  },
  button: {
    backgroundColor: 'transparent'
  }
});

export default FilterModal;
