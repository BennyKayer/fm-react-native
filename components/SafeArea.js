import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export default SafeArea = ({ children }) => {
  return <SafeAreaView style={styles.safeAreaAndroid}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaAndroid: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
