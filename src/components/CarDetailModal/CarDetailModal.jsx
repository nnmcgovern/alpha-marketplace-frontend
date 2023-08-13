import { useEffect, useState } from "react";
import { getUser } from "../../services/users";
import "./CarDetailModal.css";

export default function CarDetailModal({ car, setShowCarDetailModal }) {
  const [seller, setSeller] = useState("");
  const [scroll, setScroll] = useState(0);

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

    cart ? cart.push(car) : (cart = [car]);
    localStorage.setItem("cart", JSON.stringify(cart));
    setShowCarDetailModal(false);
  };

  const handleClickClose = (e) => {
    setShowCarDetailModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="car_detail_overlay">
      <div className="car_detail_modal">
        <img
          className="car_detail_image"
          src={car.image}
          width="300px"
          alt={`${car.make} ${car.model}`}
        />
        <div className="car_detail_info_container">
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Body Type: {car.type}</p>
          <p>Year: {car.year}</p>
          <p>Color: {car.color}</p>
          <p className="car_detail_price">${car.price}</p>
          <p className="car_detail_seller">Seller: {seller}</p>
        </div>
        <button className="car_detail_close" onClick={handleClickClose}>
          Close
        </button>
        <button className="car_detail_cart" onClick={handleClickCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
