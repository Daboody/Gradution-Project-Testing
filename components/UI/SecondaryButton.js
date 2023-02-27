import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

function SecondaryButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 25,
    padding: 18,
    borderRadius: 12,
  },
  text: {
    color: "#0cae18",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
