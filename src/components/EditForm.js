import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function EditForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { id } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/transactions/${id}`, transaction).then(() => {
      navigate(`/transactions/${id}`);
    });
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <pre></pre>
        <label htmlFor="source">Name:</label>
        <input
          id="source"
          type="text"
          value={transaction.source}
          onChange={handleTextChange}
        />
        <br />
        <pre></pre>
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
        />
        <br />
        <pre></pre>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
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
        <input className="button" type="submit" value="Update" />
        <Link to={`/transactions/${id}`}>
          <button className="button">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default EditForm;
