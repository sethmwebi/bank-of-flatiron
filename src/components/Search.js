import React, { useState } from "react";

function Search({ transactions, setTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter transactions based on the search term
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(value),
    );

    // Set the filtered transactions, or all transactions if search term is empty
    setTransactions(value ? filtered : transactions);
  };
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
