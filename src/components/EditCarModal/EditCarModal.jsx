import { useState, useEffect } from "react";
import { updateCar } from "../../services/cars";
import "./EditCarModal.css";

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

  useEffect(() => {
    document.body.classList.add("modal-open"); // add css to disable body scrolling
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCar(car._id, carUpdate);
    setShowEditCarModal(false);
    document.body.classList.remove("modal-open");
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
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="edit-car-modal-overlay">
      <div className="edit-car-modal">
        <h1>Edit Listing</h1>
        <form onSubmit={handleSubmit}>
          <div className="edit-car-form-inputs">
            <input
              type="text"
              placeholder="Make"
              name="make"
              value={carUpdate.make}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Model"
              name="model"
              value={carUpdate.model}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Body Type"
              name="type"
              value={carUpdate.type}
              onChange={handleChange}
              required
            />

            <div className="edit-car-input-label">
              <p>Year:</p>
              <input
                type="number"
                placeholder="Year"
                name="year"
                value={carUpdate.year}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Color"
              name="color"
              value={carUpdate.color}
              onChange={handleChange}
              required
            />

            <div className="edit-car-input-label">
              <p>Price:</p>
              <input
                type="number"
                placeholder="Sale Price"
                name="price"
                value={carUpdate.price}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={carUpdate.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="edit-car-form-buttons">
            <button type="button" onClick={handleClickClose}>
              Cancel
            </button>
            <button type="submit">Update Listing</button>
          </div>
        </form>
      </div>
    </div>
  );
}
