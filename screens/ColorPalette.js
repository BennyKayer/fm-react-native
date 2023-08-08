import React from "react";
import { Text, View, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({
  route: {
    params: { paletteName, colors },
  },
}) => {
  return (
    <View>
      <Text>{paletteName}</Text>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <ColorBox backgroundColor={item.hexCode} colorName={item.colorName} />
        )}
        keyExtractor={(item, index) => `${item.hexCode}-${index}`}
      />
    </View>
  );
};

export default ColorPalette;
