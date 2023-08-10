import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllCars from "./screens/AllCars";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
