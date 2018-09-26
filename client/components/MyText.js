import React from 'React';

import { Text } from 'react-native-elements';

const MyText = ({ children, ...rest }) => {
  return (
    <Text style={{ fontFamily: 'Roboto', fontSize: 16 }} {...rest}>
      {children}
    </Text>
  );
};

export default MyText;
