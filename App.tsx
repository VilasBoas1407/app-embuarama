import React from 'react';
import { AppLoading } from 'expo';
import Routes from './src/routes';
 
import {useFonts, OpenSans_700Bold,OpenSans_400Regular} from '@expo-google-fonts/open-sans';
import {Raleway_400Regular} from '@expo-google-fonts/raleway';
import * as Font from 'expo-font';

export default function App() {
  
  Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });
  
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Raleway_400Regular
  });
  

  //Aguarda o carregamento das fontes.
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
      <Routes/>
  );
}
