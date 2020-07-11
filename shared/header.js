/*
 * @Author: hhhhhq
 * @Date: 2020-07-05 22:24:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-06 15:24:18
 * @Description: file content
 */

import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navitation }) {
  const openMenu = () => {
    navitation.openDrawer()
  }

  return (
    <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={20}
        style={styles.icon}
        onPress={ openMenu }
      />
      <View style={styles.headerTitle}>
        <Image style={styles.headerImage} source={require("../assets/heart_logo.png")}/>
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: -60,
  },
  headerTitle: {
    flexDirection: "row"
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  }
});
