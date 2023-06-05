import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import SafeAreaViewAndroid from "./components/SafeAreaViewAndroid/SafeAreaViewAndroid";

const App = () => {
  return (
    <SafeAreaView style={SafeAreaViewAndroid.safeAreaAndroid}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello React Native</Text>
        <Text style={[styles.text, styles.title]}>
          Just pass an array to style to apply multiple styles
        </Text>
      </View>
    </SafeAreaView>
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
