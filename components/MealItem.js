import React from "react";
import { Pressable, StyleSheet, Image, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import InstructionText from "./ui/InstructionText";
import Colors from "../Utilities/Colors";

const MealItem = ({ imgUrl, title, duration, affordability, complexity }) => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.outterContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, { backgroundColor: "#f4f4f4f4" }]
            : null
        }
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imgUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailContainer}>
          <View>
            <InstructionText
              style={{
                color: Colors.primary200,
                fontSize: 22,
                fontFamily: "Poppins_600SemiBold",
                textAlign: "center",
              }}
            >
              {title}
            </InstructionText>
          </View>
          <View style={styles.mealDetails}>
            <View style={styles.detailWrapper}>
              <Ionicons name="md-restaurant-outline" size={16} color="black" />
              <InstructionText style={styles.detailText}>
                {complexity}
              </InstructionText>
            </View>
            <View style={styles.detailWrapper}>
              <Ionicons name="md-wallet-outline" size={16} color="black" />
              <InstructionText style={styles.detailText}>
                {affordability}
              </InstructionText>
            </View>
            <View style={styles.detailWrapper}>
              <Ionicons name="md-time-outline" size={16} color="black" />
              <InstructionText style={styles.detailText}>
                {duration}m
              </InstructionText>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 25,
    marginVertical: 16 ,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: Platform.OS == "ios" ? "visible" : "visible",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
  },
  pressed: {
    color: "#ccc",
  },
  imageContainer: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  detailContainer: {
    flex: 2,
    alignItems: "center",
    marginBottom: 16,
    gap: 16,
  },
  mealDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  detailWrapper: {
    flexDirection: "row",
    backgroundColor: Colors.primary300,
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 16,
    gap: 2,
  },
  detailText: {
    fontFamily: "Poppins_300Light",
  },
});
