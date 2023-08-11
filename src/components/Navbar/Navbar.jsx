import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ setShowLoginModal, user }) {
  const handleClick = (e) => {
    setShowLoginModal(true);
  };

  useEffect(() => {}, [user]);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <NavLink id="link" to="/">
          {/* <img src='' alt='alpha marketplace logo' /> */}
          <i className="fa-solid fa-car"></i>
          <p className="logo_font">Alpha Market</p>
        </NavLink>{" "}
      </div>
      <ul className="navbar_menu">
        <li>
          <NavLink id="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink id="link" to="/all-cars">
            Shop for Cars
          </NavLink>
        </li>
        {/* <NavLink id='link' to="/login">Login</NavLink> */}
        <li>
          <NavLink id="link" to="/cart">
            Cart
          </NavLink>
        </li>
        {!user && (
          <li>
            <div id="link" onClick={handleClick}>
              Login
            </div>
          </li>
        )}
        {user && (
          <li>
            <NavLink id="link" to="/myaccount">
              My Account
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
