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

  return (
    <div className="activity">
      <div>
        <p> {transaction.date} </p>
        <p> {transaction.source} </p>
        <p> {transaction.amount} </p>
      </div>
      <div className="navigation">
        <div>
          {" "}
          <Link to={"/transactions"}>
            <button className="button">Back</button>
          </Link>
        </div>
        <br />
        <div>
          {" "}
          <Link to={`/transactions/${id}/edit`}>
            <button className="button">Edit</button>
          </Link>
        </div>
        <br />
        <div>
          {" "}
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
