import { StyleSheet, Text } from "react-native";

import Colors from "../../Utilities/Colors";

const Title = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: Colors.primary400,
    fontSize: 42,
    fontWeight: "bold",
    padding: 4,
    marginTop: 10,
    textAlign: "center",
  },
});
