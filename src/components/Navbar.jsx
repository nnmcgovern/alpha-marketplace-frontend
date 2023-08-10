import { NavLink } from "react-router-dom";

export default function Navbar({ setShowLoginModal }) {
  const handleClick = (e) => {
    setShowLoginModal(true);
  };

  return (
    <div>
      <NavLink to="/">
        <img src="" alt="alpha marketplace logo" />
      </NavLink>{" "}
      <NavLink to="/all-cars">Shop for Cars</NavLink>
      {/* <NavLink to="/login">Login</NavLink> */}
      <div onClick={handleClick}>Login</div>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}
