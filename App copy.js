/*
 * @Author: hhhhhq
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-18 09:59:23
 * @Description: file content
 */ 
import React, { useState } from 'react';
import Home from './screens/home'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(fontLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)}/>
    )
  }
}