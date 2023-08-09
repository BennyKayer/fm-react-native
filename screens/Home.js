import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import ColorPreview from "../components/ColorPreview";

const Home = ({ navigation }) => {
  const [apiPallets, setApiPallets] = useState([]);

  useEffect(() => {
    const getPallets = async () => {
      const response = await fetch(
        "https://color-palette-api.kadikraman.vercel.app/palettes",
      );
      const pallets = await response.json();
      setApiPallets(pallets);
    };
    getPallets();
  }, []);

  return (
    <View>
      <FlatList
        data={apiPallets}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ColorPalette", {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
          >
            <Text>{item.paletteName}</Text>
            <FlatList
              style={{ flexDirection: "row" }}
              data={item.colors.slice(0, 5)}
              renderItem={({ item }) => <ColorPreview hexCode={item.hexCode} />}
              keyExtractor={(item, index) => `${item.hexCode}-${index}`}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
