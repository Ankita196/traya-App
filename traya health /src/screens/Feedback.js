/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RatingInput} from 'react-native-stock-star-rating';
import Textinput from '../Components/Textinput';
import CmpButton from '../Components/Button';

function Feedback(props) {
  const {rating, review,user_id} = props.route.params;
  console.log(rating, 'rating');
  const [ratings, setRating] = React.useState(rating ?? 0);
  const [userreview, setUserreview] = React.useState(review ?? '');
  
  const addFeedback = async () => {
    let data = {
      user_id: user_id,
      starRating:ratings,
      review: userreview,
    };
    // console.log(data,"data")
    try {
      const response = await fetch('https://traya.onrender.com/user/review', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      // console.log(result,"result")
      props.navigation.navigate('Thankyou',{user_id:user_id});
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textStyle}>Rate Your Experience</Text>
        <RatingInput
          rating={ratings}
          setRating={setRating}
          size={50}
          maxStars={5}
          bordered={false}
          color={'#99cc00'}
        />
      </View>
      <Textinput
        multiline
        label={'Add your review'}
        value={userreview}
        onChangeText={value => setUserreview(value)}
        maxLength={30}
        height={80}
        
      />

      <View style={styles.btnview}>
        <CmpButton
          name={'Submit'}
          onPress={() => addFeedback()}
          height={48}
          width={240}
          fontSize={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  card: {},

  textStyle: {fontSize: 15, color: 'black', fontFamily: 'sans-serif-medium'},

  btnview: {justifyContent: 'center', alignItems: 'center', marginTop: 80},

  view: {marginTop: 50, marginBottom: 10},
});

export default Feedback;
