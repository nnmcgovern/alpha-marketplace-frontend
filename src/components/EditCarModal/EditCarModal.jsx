import { useState } from "react";
import { updateCar } from "../../services/cars";

export default function EditCarModal({ car }) {
  const [car, setCar] = useState({
    make: car.make,
    model: car.model,
    type: car.type,
    year: car.year,
    color: car.color,
    price: car.price,
    user: car.user,
    image: car.image,
  });

  const handleSubmit = (e) => {};

  const handleChange = (e) => {};

  const handleClickClose = (e) => {};

  return (
    <div>
      <h1>Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make"
          name="make"
          value={car.make}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Model"
          name="model"
          value={car.model}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Body Type"
          name="type"
          value={car.type}
          onChange={handleChange}
        />

        <p>Year:</p>
        <input
          type="number"
          placeholder="Year"
          name="year"
          value={car.year}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Color"
          name="color"
          value={car.color}
          onChange={handleChange}
        />

        <p>Price:</p>
        <input
          type="number"
          placeholder="Sale Price"
          name="price"
          value={car.price}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={car.image}
          onChange={handleChange}
        />

        <button type="button" onClick={handleClickClose}>
          Cancel
        </button>
        <button type="submit">Update Listing</button>
      </form>
    </div>
  );
}
