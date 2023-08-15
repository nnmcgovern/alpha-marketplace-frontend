import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import "./CartItem.css";

export default function CartItem({ car, setRerender }) {
  const [seller, setSeller] = useState("");

  useEffect(() => {
    const getSeller = async () => {
      const user = await getUser(car.user);
      setSeller(user.username);
    };
    getSeller();
  }, []);

  const handleClick = (e) => {
    // find and remove car from local storage array
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.forEach((item, index) => {
      if (item._id === car._id) {
        cart.splice(index, 1);
        return;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    setRerender((prev) => !prev);
  };

  return (
    <div className="cart-items-container">
      <img src={car.image} width="300px" alt={`${car.make} ${car.model}`} />
      <div className="cart-item-info">
        <div className="cart-item-column">
        <p><span className="cart-item-label">Make:</span> {car.make}</p>
        <p><span className="cart-item-label">Model:</span> {car.model}</p>
        <p><span className="cart-item-label">Body Type:</span> {car.type}</p>
          <p><span className="cart-item-label">Year:</span> {car.year}</p>
        </div>
        <div className="cart-item-column">
        <p><span className="cart-item-label">Color:</span> {car.color}</p>
        <p><span className="cart-item-label">Price:</span> ${car.price}</p>
        <p><span className="cart-item-label">Sold by:</span> {seller}</p>
          </div>
      </div>
      <button className="cart-item-button" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
}
