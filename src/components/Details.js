import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Details() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  //   console.log(useParams())
  let { id } = useParams();
  // console.log(id)

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
        // console.log(setTransaction)
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
    <>
      <div>
        <p> {transaction.date} </p>
        <p> {transaction.source} </p>
        <p> {transaction.amount} </p>
      </div>
      <div className="navigation">
        <div>
          {" "}
          <Link to={"/transactions"}>
            <button>Back</button>
          </Link>
        </div>
        <br />
        <div>
          {" "}
          <Link to={"/transactions/${id}/edit"}>
            <button>Edit</button>
          </Link>
        </div>
        <br />
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
        <br />
      </div>
    </>
  );
}

export default Details;
