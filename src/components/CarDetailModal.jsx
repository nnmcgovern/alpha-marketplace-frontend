export default function CarDetailModal({ car, setShowCarDetailModal }) {
  const handleClickCart = (e) => {
    // add car to cart
  };

  const handleClickClose = (e) => {
    setShowCarDetailModal(false);
  };

  return (
    <div>
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.type}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>
      <p>${car.price}</p>
      <button onClick={handleClickCart}>Add to Cart</button>
      <button onClick={handleClickClose}>Close Modal</button>
    </div>
  );
}
