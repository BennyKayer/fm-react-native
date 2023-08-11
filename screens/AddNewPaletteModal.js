import React, { useState, useEffect } from "react";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
} from "react-native";
import COLORS from "../lib/constants";

const AddNewPaletteModal = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState("");
  const [chosenPalettes, setChosenPalettes] = useState([]);

  const handlePaletteNameChange = (text) => {
    setPaletteName(text);
  };

  const handleToggle = (value, item) => {
    if (value) {
      setChosenPalettes([...chosenPalettes, item]);
    } else {
      setChosenPalettes(
        chosenPalettes.filter((el) => el.colorName !== item.colorName),
      );
    }
  };

  const handleSubmit = () => {
    if (!paletteName) {
      Alert.alert("Please enter a palette name");
      return;
    }
    const newColorPalette = {
      paletteName,
      colors: chosenPalettes,
    };
    navigation.navigate("Home", { newColorPalette });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Name of your color palette</Text>
        <TextInput
          keyboardType="default"
          value={paletteName}
          onChangeText={handlePaletteNameChange}
          style={styles.input}
        />
      </View>

      <FlatList
        style={styles.list}
        data={COLORS}
        renderItem={({ item }) => {
          return (
            <View style={styles.switch}>
              <Text>{item.colorName}</Text>
              <Switch
                thumbColor={item.hexCode}
                trackColor={item.hexCode}
                value={chosenPalettes.some(
                  (el) => el.colorName === item.colorName,
                )}
                onValueChange={(value) => handleToggle(value, item)}
              />
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  list: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    padding: 10,
  },
  buttonWrapper: {
    height: 100,
    marginHorizontal: 10,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddNewPaletteModal;
