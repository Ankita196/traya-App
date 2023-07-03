import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CmpButton from '../Components/Button';

function Thankyou(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>
          {'Thank you \nfor Submitting Feedback'}
        </Text>
      </View>
      <CmpButton
        onPress={() => props.navigation.navigate('Orders',{userid:props?.route?.params.user_id})}
        name="View Orders"
        height={48}
        width={240}
        fontSize={15}
      />
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

export default Thankyou;
