import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ setShowLoginModal, user, setUser }) {
  const navigate = useNavigate();

  const handleClickLogin = (e) => {
    setShowLoginModal(true);
  };

  const handleClickLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {}, [user]);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <NavLink id="link" to="/">
          <i className="fa-solid fa-car"></i>
          <p className="logo_font">Alpha Marketplace</p>
        </NavLink>{" "}
      </div>
      <ul className="navbar_menu">
        <li>
          <NavLink id="link" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink id="link" to="/all-cars">
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink id="link" to="/cart">
            CART
          </NavLink>
        </li>
        {!user && (
          <li>
            <div id="link" onClick={handleClickLogin}>
              LOGIN
            </div>
          </li>
        )}
        {user && (
          <li>
            <NavLink id="link" to="/myaccount">
              MY ACCOUNT
            </NavLink>
          </li>
        )}
        {user && (
          <li>
            <div id="link" onClick={handleClickLogout}>
              LOGOUT
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
