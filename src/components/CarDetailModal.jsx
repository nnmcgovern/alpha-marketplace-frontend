export default function CarDetailModal({ car, setShowCarDetailModal }) {
  const handleClick = (e) => {
    // add to cart
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
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
