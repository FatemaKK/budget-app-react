import React from "react";
import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let currentDate = new Date(`${transaction.date}`);
  let displayDate = currentDate.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <tr className="transaction">
      <td>{`${displayDate}`}</td>
      <td>
        <Link to={`/transactions/${id}`}>{transaction.source}</Link>
      </td>
      <td>{formatter.format(transaction.amount)}</td>
    </tr>
  );
}

export default Transaction;
