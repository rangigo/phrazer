import React from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Text from './MyText';

const categories = [
  { category: 'Work' },
  { category: 'Study' },
  { category: 'Hangout' },
];

const FilterModal = ({
  showModal,
  hideModal,
  checkedCategory,
  onPressCategory,
}) => {
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={hideModal}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Categories</Text>
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
            textStyle={{ color: '#727272' }}
          />
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
  modalContainer: {
    marginHorizontal: 80,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    color: '#727272',
    padding: 15,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    fontSize: 20,
  },
});

export default FilterModal;
