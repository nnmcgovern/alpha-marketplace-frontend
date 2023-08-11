export default function CartItem({ car, setRerender }) {
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
    <div>
      <img src={car.image} width="300px" alt={`${car.make} ${car.model}`} />
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.type}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>
      <p>${car.price}</p>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
}
