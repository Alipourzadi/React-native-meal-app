import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryItem from "../components/CategoryItem";
import Title from "../components/ui/Title";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../Utilities/Colors";
import { useFonts, Poppins_900Black } from "@expo-google-fonts/poppins";

const HomeScreen = ({ navigation }) => {
  const [fontLoaded] = useFonts({
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <>
      <Title style={styles.title}>Food categories</Title>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => {
          return (
            <CategoryItem
              item={itemData.item.title}
              color={itemData.item.color}
              imgurl={itemData.item.imgUrl}
              onPress={() => {
                navigation.navigate("Meal items", {
                  categoryId: itemData.item.id,
                });
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: Colors.primary200,
    fontFamily: "Poppins_900Black",
  },
});
