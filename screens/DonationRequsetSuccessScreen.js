import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import SecondaryButton from "../components/UI/SecondaryButton";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TransactionsContext } from "../store/transactions-context";

function DonationRequsetSuccessScreen({ route }) {
  // const donationmode = route.params;
  // console.log(donationmode);
  // const transactionsCtx = useContext(TransactionsContext);
  // console.log(transactionsCtx.transactions);
  const navigation = useNavigation();

  const donationDoneHandler = () => {
    navigation.replace("Home");
  };

  return (
    <LinearGradient
      colors={["#5dfa6e", "#2f302e"]}
      style={styles.rootContainer}
    >
      <View>
        <View style={styles.iconeContainerOutter}>
          <Ionicons
            name='checkmark-circle-outline'
            size={150}
            color='#fff'
            style={styles.icone}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Your Request has been sent. We will contact you as soon a possible
          </Text>
        </View>
      </View>
      <View>
        <SecondaryButton title='Done' onPress={donationDoneHandler} />
      </View>
    </LinearGradient>
  );
}

export default DonationRequsetSuccessScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  iconeContainerOutter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  iconeContainerInner: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginVertical: 35,
  },
});
