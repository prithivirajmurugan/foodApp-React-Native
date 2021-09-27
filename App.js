import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colours from './assets/colours/colours';
import fetchFonts from './assets/fonts/fetchfonts';
import HomeScreen from './components/HomeScreen';

import profImg from './assets/images/profile.png';


const Stack = createNativeStackNavigator();
export default function App() {
  const [dataLoad, setDataLoad] = useState(false);
  if (!dataLoad) {
    console.log('Loading');
    return (
      <AppLoading startAsync={fetchFonts}
        onError
        onFinish={() => setDataLoad(true)} />
    );
  }
  else {
    return (
      <NavigationContainer>
        
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          
      <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    color: colours.secondary,
  },
  profileImage: {
     width: 50,
        height: 50,
        resizeMode:'cover',
  }
});
