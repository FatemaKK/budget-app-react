import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from './pages/Home';
import Index from "./pages/Index"
import Display from './pages/Display';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/:id" element={<Display />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
        <Route path="/transactions/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;







