import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import UserHeader from "../components/UI/UserHeader";
import SelectDonationType from "../components/MakeDonation/SelectDonationType";
import TransactionHistory from "../components/Transactions/TransactionHistory";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function HomeScreen() {
  const [userName, setUserName] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const results = docSnap.data();
        setUserName(results.userName);
      } else {
        console.log("No such document!!");
        // doc.data() will be undefined in this case
      }
    };
    fetchData();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <UserHeader userName={userName} />
      </View>
      <View>
        <SelectDonationType />
      </View>
      <View style={styles.list}>
        <TransactionHistory />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 85,
  },
  list: {
    flex: 1,
  },
});
