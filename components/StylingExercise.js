import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import SafeAreaViewAndroid from "./SafeAreaViewAndroid/SafeAreaViewAndroid";

export default StylingExercise = () => {
  return (
    <SafeAreaView style={SafeAreaViewAndroid.safeAreaAndroid}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <Text style={[styles.text, styles.darkBlue]}>Dark Blue #1a2b3c</Text>
        <Text style={[styles.text, { backgroundColor: "#a3d3d3" }]}>
          Cyan #a3d3d3
        </Text>
        <Text style={[styles.text, { backgroundColor: "#f3b3b3" }]}>
          Salmon #f3b3b3
        </Text>
        <Text style={[styles.text, { backgroundColor: "#1e2faa" }]}>
          Violet #1e2faa
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 8,
  },
  darkBlue: {
    backgroundColor: "#1a2b3c",
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
