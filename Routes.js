/*
 * @Author: hhhhhq
 * @Date: 2020-06-19 18:45:00
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-05 22:45:05
 * @Description: file content
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import ReviewDetails from "./screens/reviewDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from './shared/header'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const mainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      options={({ navigation }) => (
        {
          headerTitle: () => <Header navitation={navigation} />
        }
      )}
      name="Home" 
      component={HomeScreen} />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

const AboutStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: "Overview",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
    initialRouteName="About"
  >
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={mainStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
