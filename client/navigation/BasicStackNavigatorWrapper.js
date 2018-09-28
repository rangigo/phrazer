import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const BasicStackWrapper = (
  leftHeaderName,
  rightHeaderName,
  title,
  routes,
) => {
  return createStackNavigator(routes, {
    navigationOptions: ({ navigation }) => ({
      title: title,
      headerLeft: <Icon name={leftHeaderName} color="white" onPress={() => navigation.openDrawer() }/>,
      headerRight: <Icon name={rightHeaderName} color="white" />,
      headerStyle: {
        backgroundColor: '#4AA9A8',
      },
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
      headerRightContainerStyle: {
        marginRight: 20,
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        color: 'white',
      },
    }),
  });
};

export default BasicStackWrapper;
