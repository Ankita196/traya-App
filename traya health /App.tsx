/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import Orders from './src/screens/Orders'; 
import Thankyou from './src/screens/Thankyou';
import Feedback from './src/screens/Feedback'
import Welcome from './src/screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createStackNavigator()


function App(): JSX.Element {
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
                 <Stack.Navigator>
                 <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>

        <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }}/>
        <Stack.Screen name="Thankyou" component={Thankyou} options={{ headerShown: false }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
    )
}


export default App;
