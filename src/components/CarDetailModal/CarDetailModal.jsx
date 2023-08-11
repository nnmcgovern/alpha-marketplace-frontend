import "./CarDetailModal.css";

export default function CarDetailModal({ car, setShowCarDetailModal }) {
  const handleClickCart = (e) => {
    // add car to cart (array in localStorage)
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart ? cart.push(car) : (cart = [car]);
    localStorage.setItem("cart", JSON.stringify(cart));
    setShowCarDetailModal(false);
  };

  const handleClickClose = (e) => {
    setShowCarDetailModal(false);
  };

  return (
    <div className="car-detail-modal">
      <img
        className="car-detail-image"
        src={car.image}
        width="300px"
        alt={`${car.make} ${car.model}`}
      />
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.type}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>
      <p>${car.price}</p>
      <button onClick={handleClickClose}>Close</button>
      <button onClick={handleClickCart}>Add to Cart</button>
    </div>
  );
}
