import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import NotificationCard from "./NotificationCard";

function NotificationsList() {
  const navigation = useNavigation();
  const openNotificationDetails = () => {
    navigation.navigate("NotificationDetailsScreen");
  };
  return (
    <ScrollView style={styles.container}>
      <NotificationCard
        title='Donation Request Accepted'
        time='05:30 PM'
        cardBody='Your cash donation request is accepted And ...'
        onPress={openNotificationDetails}
      />

      <NotificationCard
        title='Emergency Alert'
        time='05:30 PM'
        cardBody='According to the last emergancy situation in ...'
        onPress={openNotificationDetails}
      />
      <NotificationCard
        title='Donation Request Accepted'
        time='05:30 PM'
        cardBody='Your cash donation request is accepted And ...'
        onPress={openNotificationDetails}
      />
      <NotificationCard
        title='Donation Request Accepted'
        time='05:30 PM'
        cardBody='Your food Donation Request is Accepted And ...'
        onPress={openNotificationDetails}
      />
      <NotificationCard
      title='Donation Request Accepted'
      time='05:30 PM'
      cardBody='Your food Donation Request is Accepted And ...'
      onPress={openNotificationDetails}
    />
    <NotificationCard
    title='Donation Request Accepted'
    time='05:30 PM'
    cardBody='Your food Donation Request is Accepted And ...'
    onPress={openNotificationDetails}
  />
    </ScrollView>
  );
}

export default NotificationsList;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
