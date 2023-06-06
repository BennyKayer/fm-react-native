import React from "react";
import { Text, StyleSheet } from "react-native";

export default ColorBox = ({ backgroundColor, colorName }) => {
  return (
    <Text style={[styles.text, { backgroundColor }]}>
      {colorName} {backgroundColor}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#f5f5f5",
    padding: 10,
    textAlign: "center",
  },
});
