import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBar">
      <Link to="/transactions">
        <h1>BUDGET TRACKER</h1>
      </Link>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
}

export default Nav;
