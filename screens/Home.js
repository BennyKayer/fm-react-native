import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import ColorPreview from "../components/ColorPreview";

const Home = ({ navigation, route }) => {
  const [customPallets, setCustomPallets] = useState([]);
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

  useEffect(() => {
    if (route?.params?.newColorPalette) {
      setCustomPallets([
        ...customPallets,
        { ...route?.params?.newColorPalette, id: customPallets.length + 1 },
      ]);
    }
  }, [route]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  return (
    <View style={{ padding: 10, backgroundColor: "#fff" }}>
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
            <Text style={{ color: "#1a2b3c", fontSize: 20, fontWeight: "600" }}>
              Add a color scheme
            </Text>
          </TouchableOpacity>
        }
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        data={[...customPallets, ...apiPallets]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ColorPalette", {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
          >
            <Text style={{ fontSize: 20 }}>{item.paletteName}</Text>
            <FlatList
              style={{ flexDirection: "row", gap: 5 }}
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
