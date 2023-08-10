import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <img src="" alt="alpha marketplace logo" />
      </NavLink>{" "}
      <NavLink to="/all-cars">Shop for Cars</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}
