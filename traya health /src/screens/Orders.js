import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import CmpButton from '../Components/Button';
import { useIsFocused } from '@react-navigation/native';


function Orders(props) {
 const {userid} = props.route.params
const [apidata ,setApidata] =useState({})
const [user_id,setUserid]=useState(userid)
const isFocused = useIsFocused();
 const apicall = async ()=>{
  
  try {
    let res = await fetch(`https://traya.onrender.com/user/order?user_id=${user_id}`)
    let response = await res.json()
    setApidata(response?.orders)
  } catch (error) {
    console.log(error,"error")
  }
  }
  useEffect(()=>{
   
    if (isFocused) {
      // console.log('In inFocused Block', isFocused);
      apicall()
   }
 }, [isFocused])

  let arr = [{}, {}, {}, {}, {}, {}];
  const renderview = () => {
    return (
      <>
        <View style={styles.horz}>
          <View style={styles.image}></View>
          <View>
            <Text style={[styles.subText, {paddingLeft: 15}]}>
             {apidata?.product}
            </Text>
            <Text style={[styles.quantityText, {paddingLeft: 15}]}>
              Quantity - 1
            </Text>
          </View>
        </View>
        <View
          style={styles.view1}>
          <Text style={[styles.quantityText]}>{apidata?.date}</Text>
          <Text style={[styles.subText, {fontSize: 13}]}>₹ {apidata.price}</Text>
        </View>
        <View
          style={styles.view2}>
          <View>
            <Text style={[styles.quantityText]}>
             {apidata?.review == "" ? "You haven't rated this product yet" :"You have given rating"}
            </Text>
          </View>

          <CmpButton
            onPress={() => {
              if(apidata?.review ==""){
              props.navigation.navigate('Feedback',{rating:0,review:"",user_id:user_id});
              }else{
             props.navigation.navigate('Feedback',{rating:apidata?.star,review:apidata?.review,user_id:user_id});

              }
            }}
            name= {apidata?.review ==""?  "Add Feedback":"Edit Feedback"}
          />
        </View>
        <View style={styles.line}></View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>My Orders</Text>
      <View style={styles.line}></View>
      {/* <FlatList
        data={arr}
        renderItem={renderview}
        showsVerticalScrollIndicator={false}
      /> */}
      {renderview()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#99cc00',
  },
  textStyle: {
    marginTop: 20,
    paddingBottom: 0.1,
    fontSize: 20,
    color: 'black',
    fontFamily: 'sans-serif-medium',
    marginBottom: 20,
  },
  topCont: {
    flex: 0.3,
  },
  subText: {
    paddingTop: 0.07,
    fontSize: 15,
    alignSelf: 'flex-start',
    fontFamily: 'bold',
    color: 'black',
    fontFamily: 'sans-serif-medium',
  },
  quantityText: {
    paddingTop: 0.07,
    fontSize: 11,
    alignSelf: 'flex-start',

    color: 'grey',
    fontFamily: 'sans-serif-medium',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  horz: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  view1:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  view2:{
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Orders;
