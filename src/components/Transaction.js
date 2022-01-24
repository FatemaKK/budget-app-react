import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  return (
    <tr className="transaction">
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${id}`}>{transaction.source}</Link>
      </td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
