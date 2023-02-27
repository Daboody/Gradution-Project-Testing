import { StyleSheet, View } from "react-native";
import NotificationsList from "../components/Notifications/NotificationsList";

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <NotificationsList />
    </View>
  );
}

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
