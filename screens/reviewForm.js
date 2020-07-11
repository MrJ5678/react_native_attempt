import React from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import { add } from "react-native-reanimated";
import * as yup from 'yup'

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup.number().required().lessThan(6).moreThan(0)
})

export default function reviewForms({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "sss", body: "", rating: "" }}
        onSubmit={(values) => {
          // console.log(values)
          addReview(values)
        }}
        validationSchema={reviewSchema}
      >
        {(props) => {
          console.log(props.errors);
          return (
            <View>
              <TextInput
                value={props.values.title}
                onChangeText={props.handleChange('title')}
                style={globalStyles.input}
                placeholder="review title"
              />
              <Text style={globalStyles.errorText}>{props.errors.title}</Text>

              <TextInput
                multiline
                value={props.values.body}
                onChangeText={props.handleChange('body')}
                style={globalStyles.input}
                placeholder="review body"
              />
              <Text style={globalStyles.errorText}>{props.errors.body}</Text>

              <TextInput
                value={props.values.rating}
                onChangeText={props.handleChange('rating')}
                style={globalStyles.input}
                placeholder="review rating"
                keyboardType="numeric"
              />
              <Text style={globalStyles.errorText}>{props.errors.rating}</Text>

              <Button title="submit" color="maroon" onPress={props.handleSubmit}/>
            </View>
          )
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
