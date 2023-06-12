import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorBox from "./ColorBox";
import SafeArea from "../components/SafeArea";

export default StylingExercise = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <ColorBox backgroundColor={"#1a2b3c"} colorName={"Dark Blue"} />
        <ColorBox backgroundColor={"#a3d3d3"} colorName={"Cyan"} />
        <ColorBox backgroundColor={"#f3b3b3"} colorName={"Salmon"} />
        <ColorBox backgroundColor={"#1e2faa"} colorName={"Violet"} />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 8,
  },
  text: {
    color: "#f5f5f5",
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
  },
});
