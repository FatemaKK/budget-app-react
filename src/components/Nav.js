import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <button className="button">
        <Link to="/">💰💰💰</Link>
      </button>
      <button className="button">
        <Link to="/transactions/">All Transactions</Link>
      </button>
      <button className="button">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
}

export default NavBar;
