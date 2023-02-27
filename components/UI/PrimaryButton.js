import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

function PrimaryButton({ title, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
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

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0cae18",
    marginHorizontal: 25,
    padding: 18,
    borderRadius: 12,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
