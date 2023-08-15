import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cart")));
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCars(JSON.parse(localStorage.getItem("cart")));
  }, [rerender]);

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-item-list-container">
        {cars &&
          cars.map((car) => (
            <CartItem car={car} setRerender={setRerender} key={car._id} />
          ))}
      </div>
      <button className="checkout-button" onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}
