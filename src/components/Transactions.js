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

  return (
    <div className="transactions">
        <h2>Bank Account Total: </h2>
      <table>
        {transactions.map((transaction, index) => {
          return <Transaction key={index} transaction={transaction} id={index}/>;
        })}
      </table>
    </div>
  );
}

export default Transactions;