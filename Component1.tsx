import { View, Text } from 'react-native'
import React from 'react'

// 0.
type MessageProps = {
  message: string;
}

const Component1 = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
      {/* First Component */}
      <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 20 }}>WelCome to CodeMobiles</Text>
      {/* Second Component */}
      {/* // 2. */}
      <ChildComponent1 message="1234" />
    </View>
  )
}

// 1.
const ChildComponent1 = (props:MessageProps ) => {
  return (
    <View>
      <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 20 }}>WelCome to CodeMobiles {props.message}</Text>
    </View>
  )
}

export default Component1