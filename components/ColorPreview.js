import { View } from "react-native";
import React from "react";

const ColorPreview = ({ hexCode }) => {
  return (
    <View
      style={{
        backgroundColor: hexCode,
        width: 20,
        height: 20,
      }}
    />
  );
};

export default ColorPreview;
