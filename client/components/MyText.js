import React from 'React'

import { Text } from 'react-native-elements'

const MyText = ({ children, ...rest }) => {
  return <Text style={{fontFamily: 'Roboto'}} {...rest}>{children}</Text>
}

export default MyText