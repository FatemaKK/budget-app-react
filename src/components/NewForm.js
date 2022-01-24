import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewForm() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/transactions`, transaction).then(() => {
      navigate("/transactions");
    });
  };

  return (
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={transaction.date}
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <label htmlFor="name">Source:</label>
        <input
          id="source"
          type="text"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="Name of Source"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount"
        />

        <br />
        <input className="button" type="submit" value="Create New" />
      </form>
    </div>
  );
}

export default NewForm;
