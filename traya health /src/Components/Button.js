import React from 'react'
import { View,Text ,Pressable} from 'react-native'

export default  
CmpButton = (props) => {
  return (
<View>
<Pressable
        style={{
          backgroundColor: '#99cc00',
          width: props.width??140,
          height: props.height?? 38,
          borderRadius: 30,
          justifyContent: 'center',
        }}
       {...props}>
        <Text
          style={{
            fontSize:props.fontSize?? 12,
            color: 'black',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 900,
          }}>
          {props.name}
        </Text>
      </Pressable>
</View>
  )
}
