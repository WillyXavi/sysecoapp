import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilScreen from '../TabsScreen/AccueilScreen';
import SupportScreen from '../TabsScreen/SupportScreen';
import CompteScreen from '../TabsScreen/CompteScreen';
import { Ionicons } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const deviceWidth= Dimensions.get('window').width; 
const Tab= createBottomTabNavigator(); 


const TabsNavigator = () => {
  return (
   <Tab.Navigator initialRouteName="Accueil" screenOptions={({route})=>({
       headerShown:false,
       tabBarLabelStyle:{fontFamily:'Montserrat-Bold', fontSize:12}, 
       tabBarLabelPosition:"below-icon",
       tabBarItemStyle:{top:'4%'},
       tabBarStyle:{backgroundColor:'white', top:-30, borderRadius:16, width:deviceWidth-36,alignSelf:'center'}, 
       tabBarIcon:({focused, color}) =>{
           let iconName; 
           if ( route.name === "Accueil" ){
            iconName= focused ? "home" : "home-outline"
           } else if(route.name === "Support"){
            iconName= focused ? "chatbubbles" : "chatbubbles-outline"
           } else if (route.name === "Compte" ){
            iconName= focused ? "person-circle" : "person-circle-outline"  
           }
           return (
        <View>
        <Ionicons name={iconName} color={color} size={24}/> 
        </View>
           )
       }, 
       tabBarActiveTintColor:'#0C44C6',
       tabBarInactiveTintColor: '#606E8B',
   })}>
       <Tab.Screen name="Accueil" component={AccueilScreen}/> 
       <Tab.Screen name="Support" component={SupportScreen}/> 
       <Tab.Screen name="Compte" component={CompteScreen} /> 
   </Tab.Navigator>
  )
}

export default TabsNavigator

const style = StyleSheet.create({
 
})

