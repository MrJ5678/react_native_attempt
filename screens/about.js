/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 09:37:43
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-05 22:09:51
 * @Description: file content
 */ 
import React from 'react'
import { Text, View, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About</Text>
      <Button title="go to home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  )
}