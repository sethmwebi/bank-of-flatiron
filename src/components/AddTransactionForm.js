import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function AddTransactionForm({ transactions, setTransactions }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        id: uuidv4(),
        date: new Date(date).toISOString().split("T")[0],
        description,
        category,
        amount,
      };

      setDescription("");
      setCategory("");
      setAmount("");
      setDate("dd/mm/yyyy");
      await axios.post("http://localhost:8001/transactions", userData);
      setTransactions([...transactions, userData]);
    } catch (error) {
      console.error("Something went wrong!");
    }
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            value={date}
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Description"
            value={description}
          />
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Category"
            value={category}
          />
          <input
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            name="amount"
            placeholder="Amount"
            value={amount}
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
