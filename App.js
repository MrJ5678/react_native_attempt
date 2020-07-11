/*
 * @Author: hhhhhq
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-19 18:58:36
 * @Description: file content
 */ 
import React from 'react';
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import Routes from './Routes'

export default function App() {
  let [fontLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if(fontLoaded) {
    return <Routes />
  } else {
    return <AppLoading />
  }
}