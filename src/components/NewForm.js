import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewForm() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    category: "",
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
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="    Date"
          required
        />
        <br />
        <pre></pre>
        <label htmlFor="source">Name:</label>
        <input
          id="source"
          type="text"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="    Name of Source..."
          required
        />
        <br />
        <pre></pre>
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="    From"
          required
        />
        <br />
        <pre></pre>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          min="0"
          step=".01"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="    $0.00"
        />
        <br />
        <pre></pre>
        <label for="category">Category:</label>
        <select name="category" id="category">
          <option value="None">None</option>
          <option value="Bare Necessity">Bare Necessity</option>
          <option value="Blessing">Savings</option>
          <option value="Civic Duty">Civic Duty</option>
          <option value="Income">Income</option>
          <option value="Recreational">Recreational</option>
          <option value="Splurge">Splurge</option>
          <option value="Savings">Savings</option>
        </select>
        <br />
        <input className="button" type="submit" value="Create New" />
      </form>
    </div>
  );
}

export default NewForm;
