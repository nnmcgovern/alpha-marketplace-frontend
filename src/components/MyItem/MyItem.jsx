import { useState } from "react";
import { deleteCar } from "../../services/cars";
import "./MyItem.css";

export default function MyItems({ car, setRerender }) {
  const handleClickEdit = (e) => {};

  const handleClickDelete = async (e) => {
    await deleteCar(car._id);
    setRerender((prev) => !prev);
  };

  return (
    // <div className="my-items">
    //   <div className="items-modal-content">
    //     {items.map((item, index) => (
    <div className="item">
      <img src={car.image} width="300px" alt={`${car.maker} ${car.model}`} />
      <div className="item-info">
        <div>Make: {car.make}</div>
        <div>Model: {car.model}</div>
        <div>Body Type: {car.type}</div>
        <div>Year: {car.year}</div>
        <div>Color: {car.color}</div>
        <div>Price: ${car.price}</div>
      </div>
      <div className="items-modal-buttons">
        <button onClick={handleClickEdit}>Edit</button>
        <button onClick={handleClickDelete}>Delete Item</button>
      </div>
    </div>
    //     ))}
    //   </div>
    //   {/* <button className='new-item-btn'>List New Item</button> */}
    // </div>
  );
}
