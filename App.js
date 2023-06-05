import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import SafeAreaViewAndroid from "./components/SafeAreaViewAndroid/SafeAreaViewAndroid";

const App = () => {
  return (
    <SafeAreaView style={SafeAreaViewAndroid.safeAreaAndroid}>
      <View>
        <Text>Hello React Native</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
