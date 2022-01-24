import React from "react";
import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <tr className="transaction">
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${id}`}>{transaction.source}</Link>
      </td>
      <td>{formatter.format(transaction.amount)}</td>
    </tr>
  );
}

export default Transaction;
