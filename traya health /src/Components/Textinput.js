import React from 'react'
import { View,TextInput,Text } from 'react-native'

export default  CmpTexinput = (props) => {
  return (
<View>
<Text style={{fontSize: 15, color:"black",marginBottom:10,  fontFamily:"sans-serif-medium",}}>{props.label}</Text>

<TextInput style={{borderRadius:10,paddingHorizontal:10,borderColor:'#99cc00',height:props.height??38,borderWidth:1,marginBottom:20,color:"black"}} {...props}  />
   
</View>
  )
}
