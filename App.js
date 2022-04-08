import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './Navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
  fontsLoaded: false,
  }
  async loadFonts() {
  await Font.loadAsync({
  'Montserrat-Bold': {
  uri: require('./assets/font/Montserrat-Bold.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-BoldItalic': {
  uri: require('./assets/font/Montserrat-BoldItalic.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-Italic': {
  uri: require('./assets/font/Montserrat-Italic.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-Light': {
  uri: require('./assets/font/Montserrat-Light.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-LightItalic': {
  uri: require('./assets/font/Montserrat-LightItalic.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-Medium': {
  uri: require('./assets/font/Montserrat-Medium.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-MediumItalic': {
  uri: require('./assets/font/Montserrat-MediumItalic.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-Regular': {
  uri: require('./assets/font/Montserrat-Regular.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-SemiBold': {
  uri: require('./assets/font/Montserrat-SemiBold.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  'Montserrat-SemiBoldItalic': {
  uri: require('./assets/font/Montserrat-SemiBoldItalic.ttf'),
  display: Font.FontDisplay.FALLBACK,
  },
  });
  this.setState({fontsLoaded: true});
  }
      componentDidMount() {
      this.loadFonts();
  }
  render() {
    if (this.state.fontsLoaded){
    return (
    <NavigationContainer>
    <StackNav/>
    </NavigationContainer>
    ); 
    }else{
    return null;
    }
  }
}
