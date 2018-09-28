import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import Text from './MyText';

const NewPhrazeOptions = [
  {
    title: 'Add new phraze',
    icon: { name: 'translate', color: 'black' },
    navigateScreen: 'NewPhrazeScreen'
  },
  {
    title: 'Add new category',
    icon: { name: 'list', color: 'black' },
    navigateScreen: 'NewPhrazeScreen'
  },
  {
    title: 'Add new library',
    icon: { name: 'local-library', color: 'black' },
    navigateScreen: 'NewPhrazeScreen'
  }
];

class AddButtonWithModal extends Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  onPressButton = navigateScreen => {
    this.hideModal();
    this.props.navigation.navigate(navigateScreen);
  };

  render() {
    return (
      <React.Fragment>
        <Icon
          name="add"
          containerStyle={{
            position: 'absolute',
            bottom: 15,
            right: 15
          }}
          color="#33AAAA"
          reverse
          raised
          onPress={this.showModal}
        />
        <Modal
          isVisible={this.state.showModal}
          onBackdropPress={this.hideModal}
          style={styles.bottomModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Option</Text>
            {NewPhrazeOptions.map(el => (
              <Button
                title={el.title}
                icon={el.icon}
                containerViewStyle={styles.buttonContainerStyle}
                buttonStyle={{ justifyContent: 'flex-start' }}
                key={el.title}
                color="black"
                backgroundColor="white"
                onPress={() => this.onPressButton(el.navigateScreen)}
              />
            ))}
          </View>
        </Modal>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalTitle: {
    color: '#727272',
    padding: 10
  },
  modalContent: {
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingVertical: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  buttonContainerStyle: {
    alignSelf: 'stretch'
  },
  buttonStyle: {
    justifyContent: 'flex-start'
  }
});

export default AddButtonWithModal;
