import { StyleSheet, Alert, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState, useCallback, useContext } from "react";
import { getFormattedDate } from "../util/date";
import { TransactionsContext } from "../store/transactions-context";

function IdentifyLocationScreen({ route }) {
  const transactionsCtx = useContext(TransactionsContext);
  const requestData = route.params;

  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 15.5007,
    longitude: 32.5599,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function pickedLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }
  const sendDonationRequestHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No Location Picked",
        "You have to pick a location (by tapping on the map) first"
      );
      return;
    }
    // console.log(selectedLocation);
    const newRequestData = {
      requestId: new Date().toString() + Math.random().toString(),
      donorId: new Date().toString() + Math.random().toString(),
      donationType: requestData.donationType,
      description: requestData.donationDescription,
      location: selectedLocation,
      requestDate: getFormattedDate(new Date()),
    };
    transactionsCtx.addTransaction({
      donationType: newRequestData.donationType,
      description: newRequestData.description,
      requestDate: newRequestData.requestDate,
      id: newRequestData.requestId,
    });
    console.log(transactionsCtx.transactions);
    navigation.navigate("DonationRequsetSuccessScreen", newRequestData);
  });
  return (
    <View style={styles.map}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={pickedLocationHandler}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
      </MapView>
      <PrimaryButton
        title='Send Donation Request'
        onPress={sendDonationRequestHandler}
        style={styles.button}
      />
    </View>
  );
}

export default IdentifyLocationScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    left: 30,
    width: 300,
    bottom: 20,
  },
});
