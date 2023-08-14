import { useState, useEffect } from "react";
import { createCar } from "../../services/cars";
// import { getUserIdByUsername } from "../../services/users";

export default function NewCarModal({ user, setShowNewCarModal }) {
  const [car, setCar] = useState({
    make: "",
    model: "",
    type: "",
    year: 0,
    color: "",
    price: 0,
    user: "",
    image: "",
  });

  useEffect(() => {
    // async function test() {
    //   const userID = await getUserIdByUsername(user.username);
    //   console.log(`userID for ${user.username}: `, userID);
    // }
    // test();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCar(car);
    setShowNewCarModal(false);
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
  };

  return (
    <div>
      <h1>List Your Car For Sale</h1>
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
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}
