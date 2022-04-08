import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';


const Stack = createNativeStackNavigator (); 


const StackNav = () => {
  return (
   <Stack.Navigator initialRouteName="HomeTabs">
  <Stack.Screen name="HomeTabs" component={TabsNavigator}/> 
   </Stack.Navigator>
  )
}

export default StackNav;