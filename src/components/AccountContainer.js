import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios("http://localhost:8001/transactions");
        setTransactions(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions} />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
