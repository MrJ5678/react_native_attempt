/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 09:37:50
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-06 10:02:15
 * @Description: file content 
 */ 
import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetail({ route }) {
  // const pressHandler = () => {
  //   navigation.goBack()
  // }
  const { body, title, key, rating } = route.params
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.titleText}>ReviewDetail</Text>
      </View>
      <View>
        <Card>
          <Text style={globalStyles.titleText}>Details: { title }</Text>
          <Text>body: { body }</Text>
          <Text>key: { key }</Text>
          <View style={styles.rating}>
            <Text>rating: { rating }</Text>
            <Image source={images.ratings[rating]}/>
          </View>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})