import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function UserInfo() {
  return (
    <View>
      <View style={styles.userImgWrapper}>
        <Ionicons name='person' size={100} color='#ccc' />
      </View>
      <View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.text}>Mudhafar Salah</Text>
          <Text style={styles.text}>+24912234567</Text>
        </View>
      </View>
    </View>
  );
}

export default UserInfo;

const styles = StyleSheet.create({
  userImgWrapper: {
    marginTop: 36,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  text: {
    fontSize: 17,
    lineHeight: 28,
    letterSpacing: 1,
  },
});
