import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Transaction from "./Transaction";

function EditForm() {
  const URL = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  const navigate = useNavigate()

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
  });

  useEffect(() => {
    axios.get(`${URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data)
    })
    .catch((e) => console.log('catch', e))
  }, []);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/transactions/${id}`, transaction)
    .then(() => { navigate(`/transactions/${id}`)
    })
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date..."
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.source}
          placeholder="Name..."
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={Transaction.amount}
          placeholder="Amount"
          onChange={handleTextChange}
        />
        
        <br />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default EditForm;
