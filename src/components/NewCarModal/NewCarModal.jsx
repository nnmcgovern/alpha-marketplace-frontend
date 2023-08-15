import { useState, useEffect } from "react";
import { createCar } from "../../services/cars";
import "./NewCarModal.css";

export default function NewCarModal({ setRerender, setShowNewCarModal }) {
  const { id } = JSON.parse(localStorage.getItem("user"));
  const [car, setCar] = useState({
    make: "",
    model: "",
    type: "",
    year: 0,
    color: "",
    price: 0,
    user: id,
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCar(car);
    setShowNewCarModal(false);
    setRerender((prev) => !prev);
    document.body.classList.remove("modal-open");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickClose = (e) => {
    setShowNewCarModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="new-car-modal-overlay">
      <div className="new-car-modal">
        <h1>List Your Car For Sale</h1>
        <form onSubmit={handleSubmit}>
          <div className="new-car-form-inputs">
            <input
              type="text"
              placeholder="Make"
              name="make"
              value={car.make}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Model"
              name="model"
              value={car.model}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Body Type"
              name="type"
              value={car.type}
              onChange={handleChange}
              required
            />

            <div className="new-car-input-label">
              <p>Year:</p>
              <input
                type="number"
                placeholder="Year"
                name="year"
                value={car.year}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Color"
              name="color"
              value={car.color}
              onChange={handleChange}
              required
            />

            <div className="new-car-input-label">
              <p>Price:</p>
              <input
                type="number"
                placeholder="Sale Price"
                name="price"
                value={car.price}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={car.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="new-car-form-buttons">
            <button type="button" onClick={handleClickClose}>
              Cancel
            </button>
            <button type="submit">Create Listing</button>
          </div>
        </form>
      </div>
    </div>
  );
}
