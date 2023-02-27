import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import TransactionsList from "../components/Transactions/TransactionsList";
import { TransactionsContext } from "../store/transactions-context";
import { Ionicons } from "@expo/vector-icons";

function TransactionHistoryScreen() {
  const transactionsCtx = useContext(TransactionsContext);

  let content = (
    <View style={styles.fallBackContainer}>
      <Ionicons name='alert-circle-outline' size={42} color='#ee5959' />
      <Text style={styles.fallBackText}>There is no transactions yet.</Text>
    </View>
  );

  if (transactionsCtx.transactions.length > 0) {
    content = <TransactionsList transactions={transactionsCtx.transactions} />;
  }

  return <View>{content}</View>;
}

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  fallBackContainer: {
    marginTop: 135,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 8,
  },
});
