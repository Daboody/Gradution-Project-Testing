import { createContext, useReducer } from "react";

export const TransactionsContext = createContext({
  transactions: [],
  addTransaction: ({ donationType, description, date, id }) => {},
  setTransactions: (transactions) => {},
});

function transactionsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.paylod, ...state];
    case "SET":
      const inverted = action.paylod.reverse();
      return inverted;
    default:
      return state;
  }
}

function TransactionsContextProvider({ children }) {
  const [transactionsState, dispatch] = useReducer(transactionsReducer, []);

  function addTransaction(transactionData) {
    dispatch({ type: "ADD", paylod: transactionData });
  }

  function setTransactions(transactions) {
    dispatch({ type: "SET", paylod: transactions });
  }

  const value = {
    transactions: transactionsState,
    addTransaction: addTransaction,
    setTransactions: setTransactions,
  };
  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContextProvider;
