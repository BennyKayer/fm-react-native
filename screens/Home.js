import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import ColorPreview from "../components/ColorPreview";

const Home = ({ navigation }) => {
  const [apiPallets, setApiPallets] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes",
    );
    if (response.ok) {
      const pallets = await response.json();
      setApiPallets(pallets);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  return (
    <View>
      <FlatList
        // Customized option
        // refreshControl={
        //   <RefreshControl refreshing={true} onRefresh={() => {}} />
        // }
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddNewPalette");
            }}
          >
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
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
