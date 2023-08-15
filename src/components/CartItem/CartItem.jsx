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
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <p>Body Type: {car.type}</p>
          <p>Year: {car.year}</p>
        </div>
        <div className="cart-item-column">
        <p>Color: {car.color}</p>
        <p>Price: ${car.price}</p>
        <p>Sold by: {seller}</p>
          </div>
      </div>
      <button className="cart-item-button" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
}
