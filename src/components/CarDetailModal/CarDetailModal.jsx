import { useEffect, useState } from "react";
import { getUser } from "../../services/users";
import "./CarDetailModal.css";

export default function CarDetailModal({ car, setShowCarDetailModal }) {
  const [seller, setSeller] = useState("");

  useEffect(() => {
    const getSeller = async () => {
      const user = await getUser(car.user);
      setSeller(user.username);
    };
    getSeller();

    document.body.classList.add("modal-open"); // add css to disable body scrolling
  }, []);

  const handleClickCart = (e) => {
    // add car to cart (array in localStorage)
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let inCart = false;

      // check if car has already been added to the cart
      cart.forEach((item) => {
        if (item._id === car._id) {
          inCart = true;
          return;
        }
      });

      if (inCart) {
        alert("This item is already in your cart.");
      } else {
        cart.push(car);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      cart = [car];
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setShowCarDetailModal(false);
    document.body.classList.remove("modal-open");
  };

  const handleClickClose = (e) => {
    setShowCarDetailModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="car-detail-overlay" onClick={handleClickClose}>
      <div className="car-detail-modal">
        <img
          className="car-detail-image"
          src={car.image}
          width="300px"
          alt={`${car.make} ${car.model}`}
        />
        <div className="car-detail-info-container">
          <div className="car-item-column">
            <p>
              <span className="car-detail-label">Make: </span>
              {car.make}
            </p>
            <p>
              <span className="car-detail-label">Model:</span> {car.model}
            </p>
            <p>
              <span className="car-detail-label">Type:</span> {car.type}
            </p>
            <p>
              <span className="car-detail-label">Year:</span> {car.year}
            </p>
          </div>
          <div className="car-item-column">
            <p>
              <span className="car-detail-label">Color: </span>
              {car.color}
            </p>
            <p>
              <span className="car-detail-label">Price:</span>${car.price}
            </p>
            <p>
              <span className="car-detail-label">Sold by: </span>
              {seller}
            </p>
          </div>
        </div>

        <div className="car-detail-modal-buttons">
          <button className="car-detail-close" onClick={handleClickClose}>
            Cancel
          </button>
          <button className="car-detail-cart" onClick={handleClickCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
