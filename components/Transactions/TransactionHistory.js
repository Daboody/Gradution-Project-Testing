import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TransactionsContext } from "../../store/transactions-context";
import TransactionsList from "./TransactionsList";
import { Ionicons } from "@expo/vector-icons";

function TransactionHistory() {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionList = transactionsCtx.transactions.slice(0, 3);

  let content = (
    <View style={styles.fallBackContainer}>
      <Ionicons name='alert-circle-outline' size={36} color='#ee5959' />
      <Text style={styles.fallBackText}>There is no transactions yet.</Text>
    </View>
  );
  if (transactionsCtx.transactions.length > 0) {
    content = <TransactionsList transactions={transactionList} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Transactions</Text>
      {content}
    </View>
  );
}

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 35,
  },
  title: {
    fontSize: 20,
    marginHorizontal: 25,
    color: "#000",
    marginVertical: 16,
  },
  fallBackContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 8,
  },
});
