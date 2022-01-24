import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from './components/Home';
import Transactions from "./components/Transactions"
import Details from './components/Details';
import EditForm from './components/EditForm';
// import NewForm from './components/NewForm';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Details />} />
        <Route path="/transactions/:id/edit" element={<EditForm />} />
        {/* <Route path="/transactions/:id/new" element={<NewForm />} /> */}
      </Routes>
    </div>
  );
}

export default App;







