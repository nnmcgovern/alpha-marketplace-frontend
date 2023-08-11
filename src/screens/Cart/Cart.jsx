import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cart")));

  return (
    <div>
      <h1>Cart</h1>
      {cars && cars.map((car) => <CartItem car={car} key={car._id} />)}
    </div>
  );
}
