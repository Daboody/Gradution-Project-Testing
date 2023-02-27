import { View, Text, Pressable, StyleSheet } from "react-native";

function NotificationCard({ time, title, cardBody, onPress }) {
  return (
    <View style={styles.notificationCardContainer}>
      <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
        <View style={styles.cardInner}>
          <View style={styles.notificationHeader}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.notificationTime}>{time}</Text>
          </View>
          <View style={styles.notificationMsg}>
            <Text>{cardBody}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  notificationCardContainer: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 25,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomColor: "#379d42",
    borderBottomWidth: 2.5,
    backgroundColor: "#fcf2f2",
    elevation: 4,
    shadowRadius: 3.5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowColor: "#000",
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  notificationTime: {
    fontSize: 10,
  },
  notificationMsg: {
    marginTop: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
