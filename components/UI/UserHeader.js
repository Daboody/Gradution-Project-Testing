import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getTime } from "../../util/date";
import { useState } from "react";
import { useEffect } from "react";

function UserHeader({ userName }) {
  const [currnetStatus, setCurrentStatus] = useState("");
  const time = +getTime(new Date());

  useEffect(() => {
    if (time >= 1) {
        setCurrentStatus("Good Morning");
      }
    if (time >= 15) {
      setCurrentStatus("Good Evening");
    }
    if (time >= 23) {
      setCurrentStatus("Good Morning");
    }
  }, [time]);

  return (
    <LinearGradient
      colors={["#5dfa6e", "#2f302e"]}
      style={styles.rootContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{currnetStatus} </Text>
        <Text style={styles.text}>{userName}</Text>
      </View>
    </LinearGradient>
  );
}

export default UserHeader;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
