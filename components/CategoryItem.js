import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import Colors from "../Utilities/Colors";

const CategoryItem = ({ item, color, imgurl, onPress }) => {
  const [loadFonts] = useFonts({
    Poppins_400Regular,
  });
  if (!loadFonts) {
    return null;
  }
  return (
    <View style={[styles.itemContainer, { backgroundColor: color }]}>
      <LinearGradient colors={[color, "black"]} style={styles.gradient}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.pressed, styles.buttonContainer]
              : styles.buttonContainer
          }
          onPress={onPress}
        >
          <ImageBackground
            source={imgurl}
            resizeMode="cover"
            imageStyle={{ opacity: 0.6 }}
            style={styles.imageBackground}
          >
            <Text style={[styles.title, { fontFamily: "Poppins_400Regular" }]}>
              {item}
            </Text>
          </ImageBackground>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    margin: 10,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    width: "100%",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    color: Colors.primary400,
    fontSize: 25,
    margin: 7,
  },
});
