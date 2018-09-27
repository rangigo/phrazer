import React from 'react';
import { Icon } from 'react-native-elements';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import NewPhrazeOption from '../components/NewPhrazeOption';
import Text from '../components/MyText';

const NewPhrazeOptions = [
  { title: 'Add new phraze', icon: 'translate' },
  { title: 'Add new category', icon: 'list' },
  { title: 'Add new library', icon: 'local-library' }
];

const WithAddButton = WrappedComponent => props => {
  const { navigation } = props;

  return (
    <React.Fragment>
      <WrappedComponent {...props} />
      <Icon
        name="add"
        containerStyle={{
          position: 'absolute',
          bottom: 15,
          right: 15
        }}
        onPress={() => this.ActionSheet.show()}
        color="#33AAAA"
        reverse
        raised
      />
      <ActionSheet
        ref={o => (this.ActionSheet = o)}
        title={
          <Text style={{ color: '#727272', fontSize: 18 }}>Choose option</Text>
        }
        options={NewPhrazeOptions.map(el => (
          <NewPhrazeOption title={el.title} icon={el.icon} />
        )).concat(<Text>Cancel</Text>)}
        cancelButtonIndex={3}
        onPress={index => {
          switch (index) {
            case 0:
              navigation.navigate('NewPhrazeScreen');
              break;
            case 1:
              navigation.navigate('NewPhrazeScreen');
              break;
            case 2:
              navigation.navigate('NewPhrazeScreen');
              break;
          }
        }}
      />
    </React.Fragment>
  );
};

export default WithAddButton;
