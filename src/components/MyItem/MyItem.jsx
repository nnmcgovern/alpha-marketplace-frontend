import { useState } from "react";
import { deleteCar } from "../../services/cars";
import EditCarModal from "../EditCarModal/EditCarModal";
import "./MyItem.css";

export default function MyItems({ car, setRerender }) {
  const [showEditCarModal, setShowEditCarModal] = useState(false);

  const handleClickEdit = (e) => {
    setShowEditCarModal(true);
  };

  const handleClickDelete = async (e) => {
    await deleteCar(car._id);
    setRerender((prev) => !prev);
  };

  return (
    <div className="my-item">
      <div className="my-item-container">
        <img src={car.image} width="300px" alt={`${car.maker} ${car.model}`} />
        <div className="my-item-info">
          <div>
            <span className="my-item-label">Make:</span> {car.make}
          </div>
          <div>
            <span className="my-item-label">Model:</span> {car.model}
          </div>
          <div>
            <span className="my-item-label">Body Type:</span> {car.type}
          </div>
          <div>
            <span className="my-item-label">Year:</span> {car.year}
          </div>
          <div>
            <span className="my-item-label">Color:</span> {car.color}
          </div>
          <div>
            <span className="my-item-label">Price:</span> ${car.price}
          </div>
        </div>
        <div className="my-item-buttons">
          <button onClick={handleClickEdit}>Edit</button>
          <button onClick={handleClickDelete}>Delete</button>
        </div>
      </div>
      {showEditCarModal && (
        <EditCarModal
          car={car}
          setShowEditCarModal={setShowEditCarModal}
          setRerender={setRerender}
        />
      )}
    </div>
  );
}
