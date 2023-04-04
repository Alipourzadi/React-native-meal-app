import { FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import React from "react";

import { MEALS } from "../data/dummy-data";

const MealItems = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedItems = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <FlatList
      data={displayedItems}
      renderItem={({ item }) => {
        const mealItemProps = {
          imgUrl: item.imageUrl,
          title: item.title,
          duration: item.duration,
          affordability: item.affordability,
          complexity: item.complexity,
        };
        return <MealItem {...mealItemProps} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealItems;

const styles = StyleSheet.create({});
