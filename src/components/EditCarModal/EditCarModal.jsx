import { useState } from "react";
import { updateCar } from "../../services/cars";

export default function EditCarModal({
  car,
  setShowEditCarModal,
  setRerender,
}) {
  const [carUpdate, setCar] = useState({
    make: car.make,
    model: car.model,
    type: car.type,
    year: car.year,
    color: car.color,
    price: car.price,
    user: car.user,
    image: car.image,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCar(car._id, carUpdate);
    setShowEditCarModal(false);
    setRerender((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickClose = (e) => {
    setShowEditCarModal(false);
  };

  return (
    <div>
      <h1>Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make"
          name="make"
          value={carUpdate.make}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Model"
          name="model"
          value={carUpdate.model}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Body Type"
          name="type"
          value={carUpdate.type}
          onChange={handleChange}
        />

        <p>Year:</p>
        <input
          type="number"
          placeholder="Year"
          name="year"
          value={carUpdate.year}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Color"
          name="color"
          value={carUpdate.color}
          onChange={handleChange}
        />

        <p>Price:</p>
        <input
          type="number"
          placeholder="Sale Price"
          name="price"
          value={carUpdate.price}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={carUpdate.image}
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
