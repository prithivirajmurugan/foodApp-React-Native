import * as Font from 'expo-font';
export default function fetchFonts(){
  return Font.loadAsync({
    'Montserrat-Bold': require('./Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./Montserrat-SemiBold.ttf'),
    
  });
};