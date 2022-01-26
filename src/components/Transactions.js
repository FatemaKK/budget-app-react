import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const URL = process.env.REACT_APP_API_URL;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  const amounts = transactions.map((transaction) => transaction.amount);
  let total = amounts.reduce(
    (previous, current) => Number(previous) + Number(current),
    0
  );
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="transactions">
      <div>
        <h1>Bank Account Total: {formatter.format(total)}</h1>
      </div>
      <table>
        {transactions.map((transaction, index) => {
          return (
            <Transaction key={index} transaction={transaction} id={index} />
          );
        })}
      </table>
    </div>
  );
}

export default Transactions;
