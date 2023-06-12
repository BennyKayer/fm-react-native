import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SafeArea from "./components/SafeArea";
import StylingExercise from "./components/StylingExercise";
import ListsExercise from "./components/ListsExercise";

const App = () => {
  return (
    <SafeArea>
      {/* <View style={styles.container}>
        <Text style={styles.text}>Hello React Native</Text>
        <Text style={[styles.text, styles.title]}>
          Just pass an array to style to apply multiple styles
        </Text>
      </View> */}
      {/* <StylingExercise /> */}
      <ListsExercise />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
    backgroundColor: "#1a2b3c",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f5f5f5",
  },
  title: {
    fontWeight: 700,
  },
});

export default App;
