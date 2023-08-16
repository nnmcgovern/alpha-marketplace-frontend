import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllCars from "./screens/AllCars/AllCars";
import Cart from "./screens/Cart/Cart";
import Home from "./screens/Home/Home.jsx";
import Checkout from "./screens/Checkout/Checkout.jsx";
import MyAccount from "./screens/MyAccount/MyAccount";
import LoginModal from "./components/LoginModal/LoginModal";
import CreateAccountModal from "./components/CreateAccountModal/CreateAccountModal";
import "./App.css";
import { verify } from "./services/users";
import { useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
      localStorage.setItem("user", JSON.stringify(user));
    };
    fetchUser();
  }, []);

  const ProtectedRoute = ({ children }) => {
    // If the user is not logged in and they're trying to access a protected route, redirect them to the login page
    if (!user && location.pathname === "/checkout") {
      setShowLoginModal(true);
      navigate("/cart");
      return null;
    }
    return children;
  };

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
        <Route path="/myaccount" element={<MyAccount user={user} />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
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
