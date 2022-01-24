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
    amount: 0,
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
          type="date"
          onChange={handleTextChange}
          placeholder="Date..."
          required
        />
        <label htmlFor="source">Name:</label>
        <input
          id="source"
          type="text"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="Name of Source..."
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          // pattern = "0.00"
          pattern="(\d{3})([\.])(\d{2})"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount"
        />
        <br />
        <input className="button" type="submit" value="Update" />
      </form>
      <Link to={`/transactions/${id}`}>
        <button className="button">Back</button>
      </Link>
    </div>
  );
}

export default EditForm;
