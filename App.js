import React, {useState} from 'react';
import * as Font from 'expo-font'; //https://docs.expo.io/versions/latest/guides/using-custom-fonts/ && google fonts
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return(
    <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    );
  }
}


