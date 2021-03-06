import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

function ActivityDetail() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`${URL}/transactions/${id}`).then(() => {
      navigate("/transactions");
    });
  };

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
    <div className="activity">
      <div>
        <p>Date: {`${displayDate}`} </p>
        <p>Name: {transaction.source} </p>
        <p>Category: {transaction.category} </p>
        <p>From: {transaction.from} </p>
        <p>Amount: {formatter.format(transaction.amount)} </p>
      </div>
      <br />
      <div className="navigation">
        <div>
          <Link to={"/transactions"}>
            <button className="button">Back</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to={`/transactions/${id}/edit`}>
            <button className="button">Edit</button>
          </Link>
        </div>
        <br />
        <div>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ActivityDetail;
