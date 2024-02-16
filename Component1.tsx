import { View, Text } from 'react-native'
import React, {Component} from 'react'

const Component1 = () => {
  return (
    <View style={{ flex:1, flexDirection:'column' , backgroundColor:'#000000', alignItems:'center', justifyContent:'center'}}>
      {/* First Component */}
      <Text style={{ textAlign:'center', color:'#FFFFFF', fontSize:20 }}>WelCome to CodeMobiles</Text>
      {/* Second Component */}
      <SecondComponent/>
    </View>
  )
}

class SecondComponent extends Component{
  render(){
    return(
      <Text style={{ textAlign:'center', color:'#FFFFFF', fontSize: 20 }}>WelCome to CodeMobiles 2</Text>
    );
  }
}

export default Component1