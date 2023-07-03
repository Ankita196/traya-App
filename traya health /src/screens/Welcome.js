import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import  Textinput from '../Components/Textinput';


function Welcome(props) {
    const [user_id,setUserid] =useState()
    const [err,seterr]= useState('')
    const apicall = async ()=>{

        try {
          let res = await fetch(`https://traya.onrender.com/user/order?user_id=${user_id}`)
          let response = await res.json()
        //   console.log(response)
          if(response?.status== 200){
          props.navigation.navigate('Orders',{orders:response?.orders,userid:user_id})
          }else {
seterr(response?.msg)
          }
        } catch (error) {
          console.log(error,"error")
        }
        }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>
          {'Welcome to Traya Health'}
        </Text>
      </View>
     
      <Textinput
        
        label={'Enter your user id'}
        value={user_id}
        onChangeText={value => {
            seterr('')
            setUserid(value)}}
        maxLength={30}
     
      />
        <Text style={{fontSize:14,color:"red",marginBottom:20}}>{err}</Text>
     
      <CmpButton
        onPress={() => apicall()}
        name="View Orders"
        height={48}
        width={240}
        fontSize={15}
      />
              <Text style={{fontSize:10,color:"black",marginTop:20}}>Note: 1-10 user id is present for testing</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 50,
    alignItems: 'center',
  },

  textStyle: {
    marginTop: 250,
    paddingBottom: 0.1,
    fontSize: 20,
    color: 'black',
    fontFamily: 'sans-serif-medium',
    marginBottom: 20,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 35,
  },
});

export default Welcome;
