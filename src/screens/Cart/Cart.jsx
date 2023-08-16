import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cart")));
  const [rerender, setRerender] = useState(false);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCars(JSON.parse(localStorage.getItem("cart")));
    const totalPrice = cars?.reduce((acc, car) => acc + car.price, 0) || 0;
    setTotal(totalPrice);
  }, [rerender, cars]);

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-item-list-container">
        {cars &&
          cars.map((car) => (
            <CartItem car={car} setRerender={setRerender} key={car._id} />
          ))}
      </div>
      <div className="total-price">
        <h3>Total: ${total}</h3>
      </div>
      <button
        className="checkout-button"
        disabled={!cars || cars.length === 0}
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </div>
  );
}
