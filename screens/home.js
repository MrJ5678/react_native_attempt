/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 09:37:38
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-06 15:48:49
 * @Description: file content
 */

import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
      />
      <Text style={globalStyles.titleText}>Home page.</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
