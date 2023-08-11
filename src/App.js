import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllCars from "./screens/AllCars/AllCars";
import Cart from "./screens/Cart/Cart";
import Home from "./screens/Home/Home.jsx";
// import Login from "./screens/Login";
import MyAccount from "./screens/MyAccount/MyAccount";
import LoginModal from "./components/LoginModal/LoginModal";
import CreateAccountModal from "./components/CreateAccountModal/CreateAccountModal";
import "./App.css";
import { verify } from "./services/users";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Navbar
        setShowLoginModal={setShowLoginModal}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
      {!user && showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
          setUser={setUser}
        />
      )}
      {showCreateAccountModal && (
        <CreateAccountModal
          setShowCreateAccountModal={setShowCreateAccountModal}
          setShowLoginModal={setShowLoginModal}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;
