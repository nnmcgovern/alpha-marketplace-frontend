import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllCars from "./screens/AllCars/AllCars";
import Cart from "./screens/Cart/Cart";
import Home from "./screens/Home/Home";
// import Login from "./screens/Login";
import LoginModal from "./components/LoginModal/LoginModal";
import CreateAccountModal from "./components/CreateAccountModal/CreateAccountModal";
import "./App.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <div className="App">
      <Navbar setShowLoginModal={setShowLoginModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      )}
      {showCreateAccountModal && (
        <CreateAccountModal
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      )}
    </div>
  );
}

export default App;
