import React from "react";
import Modal from "react-native-modal";
import { View, StyleSheet } from "react-native";
import { CheckBox, Divider, Button } from "react-native-elements";
import Text from "./MyText";
import Colors from "../config/colors";

const categories = [
  { category: "Meeting" },
  { category: "Greeting" },
  { category: "Hangout" }
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
        <Divider style={styles.divider} />
        {categories.map(el => (
          <CheckBox
            title={el.category}
            key={el.category}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor={Colors.mainColor.light}
            checked={el.category === checkedCategory}
            containerStyle={styles.radioButtonContainer}
            onPress={() => onPressCategory(el.category)}
            textStyle={{
              color:
                el.category === checkedCategory
                  ? Colors.mainColor.light
                  : Colors.icon.grey.light
            }}
          />
        ))}
        <Divider style={styles.divider} />
        <View style={styles.modalFooter}>
          <Button
            title="CANCEL"
            buttonStyle={styles.button}
            color={Colors.mainColor.light}
            onPress={onCancelModal}
          />
          <Button
            title="ACCEPT"
            buttonStyle={styles.button}
            color={Colors.mainColor.light}
            onPress={onGetPhrazesByCategory}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    backgroundColor: Colors.backgroundColor,
    borderWidth: 0
  },
  modalContainer: {
    marginHorizontal: 50
  },
  modalContent: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalTitle: {
    color: Colors.text.dark,
    padding: 15,
    fontSize: 20
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 5
  },
  button: {
    backgroundColor: "transparent"
  },
  divider: {
    backgroundColor: Colors.divider.light
  }
});

export default FilterModal;
