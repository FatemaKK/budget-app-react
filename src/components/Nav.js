import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>💰💰💰</h1>
      </Link>
      <Link to="/transactions">
        <h1>BUDGET TRACKER</h1>
      </Link>
      <button className="button">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
}

export default NavBar;
