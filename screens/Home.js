import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Blue", hexCode: "#1c2e4a" },
];

const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];

const SOLARIZED = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "Solarized",
            colors: SOLARIZED,
          })
        }
      >
        <Text>Solarized</Text>
        <FlatList
          style={{ flexDirection: "row" }}
          data={SOLARIZED.slice(0, 5)}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.hexCode,
                width: 20,
                height: 20,
              }}
            />
          )}
          keyExtractor={(item, index) => `${item.hexCode}-${index}`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "FrontEnd Masters",
            colors: FRONTEND_MASTERS,
          })
        }
      >
        <Text>Frontend Masters</Text>
        <FlatList
          style={{ flexDirection: "row" }}
          data={FRONTEND_MASTERS.slice(0, 5)}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.hexCode,
                width: 20,
                height: 20,
              }}
            />
          )}
          keyExtractor={(item, index) => `${item.hexCode}-${index}`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "Rainbow (normal one)",
            colors: RAINBOW,
          })
        }
      >
        <Text>Rainbow (normal one)</Text>
        <FlatList
          style={{ flexDirection: "row" }}
          data={RAINBOW.slice(0, 5)}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.hexCode,
                width: 20,
                height: 20,
              }}
            />
          )}
          keyExtractor={(item, index) => `${item.hexCode}-${index}`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
